/**
 * migrate-v1-to-v2.ts — redone from the two screenshots.
 *
 * ── v1 (first screenshot) ──────────────────────────────────────────
 * Origin:      https://create-a-curriculum.vercel.app
 * Storage:     localStorage
 * Key:         "messageData"
 * Value:       a JSON ARRAY, not a wrapped object:
 *   [
 *     {
 *       "id": "msg_858b3c09-2471-4609-b059-fb90224b3931",
 *       "name": "Physics experiment resources",
 *       "type": "form",
 *       "extra": "",
 *       "messages": [
 *         { "role": "user",      "content": "Curriculum for Physics ..." },
 *         { "role": "assistant", "content": "## Physics Experiment ..." }
 *       ]
 *     }
 *   ]
 *   (1 entry on the live site: "Physics experiment resources".)
 *
 * ── v2 (second screenshot) ─────────────────────────────────────────
 * Origin:      localhost
 * Storage:     IndexedDB — database "curriculum-app", store "items"
 * Key:         "agentCurriculums"
 * Value:       { name: string, curriculum: string }[]
 *   0: "Personal Finance Basics — Grades 9-12"
 *   1: "Exploring the Water Cycle - A 5-Lesson Science Unit for Grades 3-5"
 *   (The separate "curriculums" key is NOT touched by this script.)
 *
 * Mapping — everything else is dropped:
 *   name       <- v1 entry.name
 *   curriculum <- content of the LAST assistant message in entry.messages
 *                 (the user prompt is not carried over)
 *
 * ── Why this is two steps, not one call ────────────────────────────
 * v1 lives on create-a-curriculum.vercel.app and v2 lives on
 * localhost. localStorage and IndexedDB are per-origin: no script
 * running on one origin can read the other origin's storage. So:
 *
 *   STEP 1 — on the LIVE site (vercel.app), DevTools Console:
 *     exportV1AsV2()          // or the console snippet in the reply
 *     -> copies / downloads the converted v2 JSON
 *     (or: copy the raw "messageData" value from DevTools > Storage)
 *
 *   STEP 2 — on LOCALHOST, with the file in lib/:
 *     await importV2Json(pastedJson)        // the v2 JSON from step 1
 *     // or, if you copied the raw v1 value instead:
 *     await migratePastedV1(pastedV1Json)
 *
 *   After step 2, "agentCurriculums" should hold 3 entries:
 *   the 2 already there, plus "Physics experiment resources".
 *
 *   migrateV1ToV2() below is only for the same-origin case (both
 *   storages on one origin, e.g. local dev) — it will find nothing
 *   on localhost, because "messageData" does not live there.
 *
 * Safety:
 *  - Merges only: existing v2 entries are never overwritten, deleted
 *    or reordered; migrated entries are appended in v1 order.
 *  - Duplicates (same name + curriculum) are skipped — re-running
 *    the import adds nothing.
 *  - The IndexedDB save is verified by reading it back before the
 *    function reports success. saveItemToIndexedDB swallows errors,
 *    so the re-read is the only proof the write landed.
 *  - Step 1 never deletes anything. Step 2 never touches localStorage
 *    on localhost (there is no v1 there to delete).
 *  - Does not auto-run on import.
 */

import {
    retrieveItemFromIndexedDB,
    saveItemToIndexedDB,
} from "@/lib/IndexedDB";

/** Exact localStorage key from the v1 screenshot. */
export const V1_LOCAL_STORAGE_KEY = "messageData";

/** Exact IndexedDB key from the v2 screenshot. */
export const AGENT_CURRICULUMS_KEY = "agentCurriculums";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type AgentCurriculum = {
    name: string;
    curriculum: string;
};

type V1Message = {
    id?: string;
    role?: string;
    content?: string;
};

type V1Conversation = {
    id?: string;
    name?: string;
    type?: string;
    extra?: string;
    messages?: V1Message[];
};

export type MigrationResult = {
    /** true when v2 now holds everything convertible from the input. */
    success: boolean;
    /** Conversations found in the v1 input. */
    found: number;
    /** New entries written to v2. */
    migrated: number;
    /** Entries skipped: no usable assistant reply, or empty name/curriculum. */
    skipped: number;
    /** Entries already in v2 (same name + curriculum) — not re-added. */
    alreadyInV2: number;
    /** Entries that failed to convert, with the reason. */
    errors: { name: string; reason: string }[];
    /** Whether the v1 localStorage entry was removed (same-origin only). */
    v1Removed: boolean;
    /** Total entries in "agentCurriculums" after the migration. */
    totalInV2: number;
};

/* ------------------------------------------------------------------ */
/* Pure conversion — no browser APIs, safe to unit-test in Node        */
/* ------------------------------------------------------------------ */

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * The v1 value, exactly as in the screenshot: a bare array.
 * Also accepts a raw JSON string of that array, and — only as a
 * fallback for the earlier pasted copy — { messageData: [...] }.
 */
export function parseV1Database(value: unknown): V1Conversation[] {
    const parsed: unknown =
        typeof value === "string" ? safeJsonParse(value) : value;
    if (Array.isArray(parsed)) {
        return parsed.filter(isRecord) as V1Conversation[];
    }
    if (isRecord(parsed) && Array.isArray(parsed.messageData)) {
        return parsed.messageData.filter(isRecord) as V1Conversation[];
    }
    if (isRecord(parsed) && Array.isArray(parsed.messages)) {
        return [parsed as unknown as V1Conversation];
    }
    return [];
}

function safeJsonParse(text: string): unknown {
    try {
        return JSON.parse(text);
    } catch {
        return null;
    }
}

/**
 * One v1 conversation -> one v2 entry, or null when there's nothing
 * worth saving. The curriculum is the last assistant message; if that
 * message itself is a JSON { name, curriculum } reply, unwrap it.
 */
export function convertV1ConversationToV2(
    entry: V1Conversation,
): AgentCurriculum | null {
    const name = typeof entry.name === "string" ? entry.name.trim() : "";
    const messages = Array.isArray(entry.messages) ? entry.messages : [];

    const assistantMessages = messages.filter(
        (message) =>
            message?.role === "assistant" &&
            typeof message.content === "string" &&
            message.content.trim() !== "",
    );
    if (assistantMessages.length === 0) return null;

    let curriculum =
        assistantMessages[assistantMessages.length - 1].content!.trim();

    if (curriculum.startsWith("{")) {
        const parsed = safeJsonParse(curriculum);
        if (isRecord(parsed) && typeof parsed.curriculum === "string") {
            curriculum = parsed.curriculum.trim();
        }
    }

    if (name === "" || curriculum === "") return null;
    return { name, curriculum };
}

/** v1 (raw string, parsed array, or wrapped object) -> v2, deduped. */
export function convertV1ToV2(value: string | unknown): AgentCurriculum[] {
    const seen = new Set<string>();
    const converted: AgentCurriculum[] = [];
    for (const entry of parseV1Database(value)) {
        const item = convertV1ConversationToV2(entry);
        if (!item) continue;
        const key = `${item.name}\n${item.curriculum}`;
        if (seen.has(key)) continue;
        seen.add(key);
        converted.push(item);
    }
    return converted;
}

/** A v2 entry as pasted/imported -> a clean entry, or null. */
function normalizeV2Entry(value: unknown): AgentCurriculum | null {
    if (!isRecord(value)) return null;
    const name =
        typeof value.name === "string" ? value.name.trim() : "";
    const curriculum =
        typeof value.curriculum === "string" ? value.curriculum.trim() : "";
    if (name === "" || curriculum === "") return null;
    return { name, curriculum };
}

/**
 * Pure merge used by every import path: existing v2 order untouched,
 * incoming entries appended in order, exact duplicates skipped.
 */
export function mergeV2(
    existing: AgentCurriculum[],
    incoming: AgentCurriculum[],
): { merged: AgentCurriculum[]; added: AgentCurriculum[]; duplicates: number } {
    const seen = new Set(
        existing.map((item) => `${item.name}\n${item.curriculum}`),
    );
    const added: AgentCurriculum[] = [];
    let duplicates = 0;
    for (const item of incoming) {
        const key = `${item.name}\n${item.curriculum}`;
        if (seen.has(key)) {
            duplicates += 1;
            continue;
        }
        seen.add(key);
        added.push(item);
    }
    return { merged: [...existing, ...added], added, duplicates };
}

/* ------------------------------------------------------------------ */
/* STEP 1 — run on the LIVE site (vercel.app)                          */
/* ------------------------------------------------------------------ */

/**
 * Reads localStorage "messageData" on the current origin and returns
 * the converted v2 list plus its JSON text. Returns null when the
 * key is missing or holds nothing convertible.
 * Run this in the DevTools Console on create-a-curriculum.vercel.app.
 */
export function exportV1AsV2(): {
    v2: AgentCurriculum[];
    json: string;
} | null {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(V1_LOCAL_STORAGE_KEY);
    if (!raw) return null;
    const v2 = convertV1ToV2(raw);
    if (v2.length === 0) return null;
    return { v2, json: JSON.stringify(v2, null, 2) };
}

/** Step 1, all-in-one: converts, downloads agentCurriculums-v2.json,
 *  and copies the same JSON to the clipboard when the browser allows it. */
export function downloadV2Export(): { v2: AgentCurriculum[]; json: string } | null {
    const exported = exportV1AsV2();
    if (!exported) return null;
    const blob = new Blob([exported.json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "agentCurriculums-v2.json";
    a.click();
    URL.revokeObjectURL(url);
    navigator.clipboard?.writeText(exported.json).catch(() => {
        // Clipboard may be blocked in some contexts — the download
        // already holds the same JSON, so this is best-effort only.
    });
    return exported;
}

/* ------------------------------------------------------------------ */
/* STEP 2 — run on LOCALHOST (IndexedDB lives here)                    */
/* ------------------------------------------------------------------ */

async function saveMergedToV2(
    incoming: AgentCurriculum[],
    found: number,
    skipped: number,
    errors: MigrationResult["errors"],
): Promise<MigrationResult> {
    const empty: MigrationResult = {
        success: false,
        found,
        migrated: 0,
        skipped,
        alreadyInV2: 0,
        errors,
        v1Removed: false,
        totalInV2: 0,
    };

    const stored =
        (await retrieveItemFromIndexedDB<AgentCurriculum[]>(
            AGENT_CURRICULUMS_KEY,
        )) || [];
    const existingList = Array.isArray(stored)
        ? stored
              .map(normalizeV2Entry)
              .filter((item): item is AgentCurriculum => item !== null)
        : [];

    const { merged, added, duplicates } = mergeV2(existingList, incoming);

    const currentCurriculums = merged;
    await saveItemToIndexedDB(AGENT_CURRICULUMS_KEY, currentCurriculums);

    // Verify before reporting success — the helper swallows errors,
    // so a re-read is the only proof the write landed.
    const verified =
        (await retrieveItemFromIndexedDB<AgentCurriculum[]>(
            AGENT_CURRICULUMS_KEY,
        )) || [];
    const verifiedKeys = new Set(
        (Array.isArray(verified) ? verified : []).map(
            (item) => `${item.name}\n${item.curriculum}`,
        ),
    );
    const allPresent = added.every((item) =>
        verifiedKeys.has(`${item.name}\n${item.curriculum}`),
    );
    if (!allPresent) {
        return {
            ...empty,
            totalInV2: existingList.length,
            errors: [
                ...errors,
                {
                    name: "",
                    reason:
                        "IndexedDB save could not be verified — nothing was removed, retry the import.",
                },
            ],
        };
    }

    return {
        success: true,
        found,
        migrated: added.length,
        skipped,
        alreadyInV2: duplicates,
        errors,
        v1Removed: false,
        totalInV2: Array.isArray(verified) ? verified.length : 0,
    };
}

/**
 * STEP 2a — import the v2 JSON produced by step 1.
 * `input` is the JSON text (or the parsed array) from exportV1AsV2().
 * Merges into "agentCurriculums" on this origin (localhost).
 */
export async function importV2Json(
    input: string | unknown,
): Promise<MigrationResult> {
    const parsed: unknown =
        typeof input === "string" ? safeJsonParse(input) : input;
    const incoming = (Array.isArray(parsed) ? parsed : [])
        .map(normalizeV2Entry)
        .filter((item): item is AgentCurriculum => item !== null);
    return saveMergedToV2(incoming, incoming.length, 0, []);
}

/**
 * STEP 2b — same as importV2Json, but paste the RAW v1 value instead:
 * the localStorage "messageData" string copied from DevTools on the
 * live site. Converts it first, then imports it.
 */
export async function migratePastedV1(
    v1Json: string,
): Promise<MigrationResult> {
    const conversations = parseV1Database(v1Json);
    const incoming: AgentCurriculum[] = [];
    const errors: MigrationResult["errors"] = [];
    let skipped = 0;
    for (const entry of conversations) {
        const item = convertV1ConversationToV2(entry);
        if (!item) {
            skipped += 1;
            errors.push({
                name:
                    (typeof entry.name === "string" && entry.name.trim()) ||
                    "(unnamed)",
                reason: "No assistant reply to use as the curriculum.",
            });
            continue;
        }
        incoming.push(item);
    }
    return saveMergedToV2(
        incoming,
        conversations.length,
        skipped,
        errors,
    );
}

/* ------------------------------------------------------------------ */
/* Same-origin only — both storages on ONE origin                      */
/* ------------------------------------------------------------------ */

/**
 * Only use this when "messageData" (localStorage) and
 * "agentCurriculums" (IndexedDB) are on the SAME origin, e.g. a local
 * dev build that still writes v1. On localhost it finds no v1,
 * because "messageData" lives on vercel.app — use the two-step
 * export/import above instead. Removes the localStorage key only
 * after a verified save.
 */
export async function migrateV1ToV2(options: { dryRun?: boolean } = {}): Promise<MigrationResult> {
    const empty: MigrationResult = {
        success: false,
        found: 0,
        migrated: 0,
        skipped: 0,
        alreadyInV2: 0,
        errors: [],
        v1Removed: false,
        totalInV2: 0,
    };
    if (typeof window === "undefined") {
        return {
            ...empty,
            errors: [{ name: "", reason: "Not in a browser — localStorage and IndexedDB are unavailable." }],
        };
    }

    const raw = localStorage.getItem(V1_LOCAL_STORAGE_KEY);
    if (!raw) {
        const existing =
            (await retrieveItemFromIndexedDB<AgentCurriculum[]>(
                AGENT_CURRICULUMS_KEY,
            )) || [];
        return {
            ...empty,
            success: true,
            totalInV2: Array.isArray(existing) ? existing.length : 0,
        };
    }

    const conversations = parseV1Database(raw);
    const incoming: AgentCurriculum[] = [];
    const errors: MigrationResult["errors"] = [];
    let skipped = 0;
    for (const entry of conversations) {
        const item = convertV1ConversationToV2(entry);
        if (!item) {
            skipped += 1;
            errors.push({
                name:
                    (typeof entry.name === "string" && entry.name.trim()) ||
                    "(unnamed)",
                reason: "No assistant reply to use as the curriculum.",
            });
            continue;
        }
        incoming.push(item);
    }

    if (options.dryRun) {
        const stored =
            (await retrieveItemFromIndexedDB<AgentCurriculum[]>(
                AGENT_CURRICULUMS_KEY,
            )) || [];
        return {
            success: true,
            found: conversations.length,
            migrated: incoming.length,
            skipped,
            alreadyInV2: 0,
            errors,
            v1Removed: false,
            totalInV2: Array.isArray(stored) ? stored.length : 0,
        };
    }

    const result = await saveMergedToV2(
        incoming,
        conversations.length,
        skipped,
        errors,
    );
    if (result.success) {
        localStorage.removeItem(V1_LOCAL_STORAGE_KEY);
        result.v1Removed = true;
    }
    return result;
}
