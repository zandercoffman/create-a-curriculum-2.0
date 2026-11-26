"use client";

import { useMobile } from "@/lib/useMobile";
import { useDarkMode } from "@/lib/useDarkMode";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    retrieveItemFromIndexedDB,
    saveItemToIndexedDB,
} from "@/lib/IndexedDB";
import { ChevronDownIcon, Copy, Trash2 } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

/* ------------------------------- option lists ------------------------------ */

export type Option = { value: string; label: string };

export function labelFor(options: Option[], value: string): string {
    return options.find((o) => o.value === value)?.label ?? value;
}

/* ------------------------- original template pieces ------------------------ */
/* These match the original create-curriculum page exactly: the collapsible */
/* section cards, and the blue pill button under the grid.                   */

/** The blue pill button from the original page, with its inline style. */
export function PillButton({
    children,
    onClick,
    disabled,
}: {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
}) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            style={{
                marginTop: "1rem",
                padding: "1rem",
                borderRadius: "9999px",
                backgroundColor: "#1074ff",
                color: "#f1f5f9",
            }}
        >
            {children}
        </Button>
    );
}

/** One collapsible section card, exactly as in the original page. */
export function OptionSection({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    const { isDark } = useDarkMode();

    return (
        <Collapsible className={`w-full rounded-xl border ${isDark ? "border-white/10" : "border-border"}`}>
            <CollapsibleTrigger className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold ${isDark ? "text-white hover:bg-white/5" : "text-foreground hover:bg-accent"}`}>
                {title}
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[panel-open]:rotate-180 [[data-panel-open]>&]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                <div className="space-y-4">{children}</div>
            </CollapsibleContent>
        </Collapsible>
    );
}

/** The 3-column grid the original page lays its sections out in. */
export function SectionsGrid({ children }: { children: ReactNode }) {
    const isMobile = useMobile();

    return (
        <section className={`mx-auto mt-4 grid w-full gap-3 pt-6 sm:pt-10 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}`}>
            {children}
        </section>
    );
}

/* --------------------------------- learners -------------------------------- */

export type LearnerProfile = {
    id: string;
    name: string;
    photo: string;
    description: string;
    educationLevel: string;
    createdAt: number;
};

function normalizeLearners(value: unknown): LearnerProfile[] {
    if (!Array.isArray(value)) return [];
    return value
        .map((item) => {
            const record = item as Partial<LearnerProfile>;
            return {
                id: record.id ?? "",
                name: record.name ?? "",
                photo: record.photo ?? "",
                description: record.description ?? "",
                educationLevel: record.educationLevel ?? "",
                createdAt: record.createdAt ?? 0,
            };
        })
        .filter((learner) => learner.id !== "" && learner.name !== "")
        .sort((a, b) => a.createdAt - b.createdAt);
}

/** Saved learners live as one whole list under the "learners" key. */
export async function loadLearners(): Promise<LearnerProfile[]> {
    const stored = await retrieveItemFromIndexedDB<LearnerProfile[]>("learners");
    return normalizeLearners(stored);
}

/* --------------------------------- field pieces ----------------------------- */

export function Field({
    label,
    htmlFor,
    hint,
    children,
}: {
    label: string;
    htmlFor?: string;
    hint?: string;
    children: ReactNode;
}) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={htmlFor}>{label}</Label>
            {children}
            {hint ? (
                <p className="text-xs leading-relaxed text-muted-foreground">{hint}</p>
            ) : null}
        </div>
    );
}

export function TextField({
    id,
    label,
    hint,
    value,
    onChange,
    placeholder,
    type = "text",
}: {
    id: string;
    label: string;
    hint?: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    type?: string;
}) {
    return (
        <Field label={label} htmlFor={id} hint={hint}>
            <Input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </Field>
    );
}

export function TextareaField({
    id,
    label,
    hint,
    value,
    onChange,
    placeholder,
    rows = 3,
}: {
    id: string;
    label: string;
    hint?: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    rows?: number;
}) {
    return (
        <Field label={label} htmlFor={id} hint={hint}>
            <Textarea
                id={id}
                rows={rows}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </Field>
    );
}

export function SelectField({
    id,
    label,
    hint,
    value,
    onChange,
    options,
}: {
    id: string;
    label: string;
    hint?: string;
    value: string;
    onChange: (v: string) => void;
    options: Option[];
}) {
    return (
        <Field label={label} htmlFor={id} hint={hint}>
            <Select value={value || undefined} onValueChange={onChange}>
                <SelectTrigger id={id} className="w-full">
                    <SelectValue placeholder="Select…" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                            {o.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </Field>
    );
}

export function CheckRow({
    id,
    checked,
    onChange,
    label,
    hint,
}: {
    id: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    label: string;
    hint?: string;
}) {
    return (
        <div className="flex items-start gap-2.5">
            <Checkbox
                id={id}
                checked={checked}
                onCheckedChange={(v) => onChange(v === true)}
                className="mt-0.5"
            />
            <div className="space-y-0.5">
                <Label htmlFor={id} className="text-sm font-normal leading-snug">
                    {label}
                </Label>
                {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
            </div>
        </div>
    );
}

export function RadioRow({
    name,
    value,
    onChange,
    options,
}: {
    name: string;
    value: string;
    onChange: (v: string) => void;
    options: { value: string; label: string; hint?: string }[];
}) {
    return (
        <RadioGroup
            value={value}
            onValueChange={onChange}
            className="space-y-2.5 rounded-lg border border-border px-3 py-3"
        >
            {options.map((o) => (
                <div key={o.value} className="flex items-start gap-2.5">
                    <RadioGroupItem
                        value={o.value}
                        id={`${name}-${o.value}`}
                        className="mt-0.5"
                    />
                    <div className="space-y-0.5">
                        <Label
                            htmlFor={`${name}-${o.value}`}
                            className="text-sm font-normal"
                        >
                            {o.label}
                        </Label>
                        {o.hint ? (
                            <p className="text-xs text-muted-foreground">{o.hint}</p>
                        ) : null}
                    </div>
                </div>
            ))}
        </RadioGroup>
    );
}

/** Learner picker backed by the saved "learners" list. */
export function LearnerPicker({
    learners,
    selectedIds,
    onChange,
}: {
    learners: LearnerProfile[];
    selectedIds: string[];
    onChange: (ids: string[]) => void;
}) {
    if (learners.length === 0) return null;

    const toggle = (id: string, checked: boolean) => {
        onChange(
            checked
                ? [...selectedIds, id]
                : selectedIds.filter((selected) => selected !== id),
        );
    };

    return (
        <Field label="Saved learners">
            <div className="space-y-2.5 rounded-lg border border-border px-3 py-3">
                {learners.map((learner) => (
                    <CheckRow
                        key={learner.id}
                        id={`learner-${learner.id}`}
                        checked={selectedIds.includes(learner.id)}
                        onChange={(v) => toggle(learner.id, v)}
                        label={learner.name}
                        hint={
                            learner.educationLevel
                                ? `Education level: ${learner.educationLevel}`
                                : undefined
                        }
                    />
                ))}
            </div>
        </Field>
    );
}

/* ------------------------------ copy + paste ------------------------------- */

export async function copyText(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // Clipboard API needs a secure context — fall back to a
        // temporary textarea selection for plain HTTP / older browsers.
        try {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            const ok = document.execCommand("copy");
            document.body.removeChild(textarea);
            return ok;
        } catch {
            return false;
        }
    }
}

export type SavedItem = {
    id: string;
    name: string;
    detail: string;
    body: string;
    createdAt: number;
};

export function newId(): string {
    return typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeSavedItems(value: unknown): SavedItem[] {
    if (!Array.isArray(value)) return [];
    return value
        .map((item) => {
            const record = item as Partial<SavedItem>;
            return {
                id: record.id ?? "",
                name: record.name ?? "",
                detail: record.detail ?? "",
                body: record.body ?? "",
                createdAt: record.createdAt ?? 0,
            };
        })
        .filter((item) => item.id !== "")
        .sort((a, b) => b.createdAt - a.createdAt);
}

/**
 * Parses what Muse returns. The prompts on these pages all ask Muse to
 * start with one `Title: ...` line, then the Markdown body. JSON is
 * accepted too, and anything else saves with the fallback name and the
 * whole paste as the body — nothing is thrown away for being
 * differently formatted.
 */
export function parsePastedResult(
    pasted: string,
    fallbackName: string,
): { name: string; body: string } | null {
    const text = pasted.trim();
    if (text === "") return null;

    try {
        const parsed = JSON.parse(text) as Record<string, unknown>;
        const name =
            (typeof parsed.title === "string" && parsed.title) ||
            (typeof parsed.name === "string" && parsed.name) ||
            "";
        const bodyValue =
            parsed.body ?? parsed.content ?? parsed.curriculum ?? parsed.text;
        let body = "";
        if (typeof bodyValue === "string") {
            body = bodyValue;
        } else if (Array.isArray(bodyValue)) {
            body = bodyValue
                .map((entry) => {
                    if (typeof entry === "string") return entry;
                    if (entry && typeof entry === "object") {
                        const e = entry as Record<string, unknown>;
                        const heading =
                            typeof e.title === "string" ? `## ${e.title}\n` : "";
                        const content =
                            typeof e.content === "string"
                                ? e.content
                                : typeof e.description === "string"
                                  ? e.description
                                  : "";
                        return `${heading}${content}`;
                    }
                    return "";
                })
                .filter(Boolean)
                .join("\n\n");
        }
        if (name !== "" || body !== "") {
            return { name: name || fallbackName, body: body || text };
        }
    } catch {
        // Not JSON — fall through to the Title-line / heading parsing.
    }

    const lines = text.split("\n");
    const firstLine = lines[0].trim();
    const titleMatch = firstLine.match(/^title:\s*(.+)$/i);
    if (titleMatch) {
        return {
            name: titleMatch[1].trim() || fallbackName,
            body: lines.slice(1).join("\n").trim() || text,
        };
    }
    const headingMatch = firstLine.match(/^#\s+(.+)$/);
    if (headingMatch) {
        return {
            name: headingMatch[1].trim() || fallbackName,
            body: lines.slice(1).join("\n").trim() || text,
        };
    }
    return { name: fallbackName, body: text };
}

/* --------------------------- agent curriculums ----------------------------- */
/* The shape in the screenshot: one whole list under the            */
/* "agentCurriculums" key, each entry exactly                      */
/*     { name: string, curriculum: string }                        */
/* where `curriculum` is the full curriculum as one Markdown       */
/* string. Nothing else is stored — no id, detail, or timestamp.   */

export type AgentCurriculum = {
    name: string;
    curriculum: string;
};

export const AGENT_CURRICULUMS_KEY = "agentCurriculums";

function normalizeAgentCurriculum(
    entry: unknown,
    fallbackName: string,
): AgentCurriculum | null {
    if (!entry || typeof entry !== "object") return null;
    const record = entry as Record<string, unknown>;
    const name =
        (typeof record.name === "string" && record.name.trim()) ||
        (typeof record.title === "string" && record.title.trim()) ||
        "";
    const curriculumValue =
        record.curriculum ?? record.body ?? record.content ?? record.text;
    let curriculum = "";
    if (typeof curriculumValue === "string") {
        curriculum = curriculumValue;
    } else if (Array.isArray(curriculumValue)) {
        curriculum = curriculumValue
            .map((part) =>
                typeof part === "string"
                    ? part
                    : typeof part === "object" && part !== null
                      ? JSON.stringify(part)
                      : "",
            )
            .filter(Boolean)
            .join("\n\n");
    }
    if (curriculum.trim() === "") return null;
    return { name: name || fallbackName, curriculum };
}

function stripJsonFences(text: string): string {
    return text
        .replace(/^```(?:json)?\s*\n?/i, "")
        .replace(/\n?```\s*$/, "")
        .trim();
}

/**
 * Parses Muse's reply as JSON in the agent-curriculum shape. Accepts a
 * single object, an array of objects, a ```json fenced block, or JSON
 * with a little surrounding text. Falls back to the old Title-line /
 * heading form so a non-JSON paste still saves instead of being lost.
 */
export function parseAgentCurriculums(
    pasted: string,
    fallbackName: string,
): AgentCurriculum[] {
    const text = pasted.trim();
    if (text === "") return [];

    const cleaned = stripJsonFences(text);
    const candidates = [cleaned];
    const firstBrace = cleaned.search(/[{[]/);
    const lastBrace = Math.max(
        cleaned.lastIndexOf("}"),
        cleaned.lastIndexOf("]"),
    );
    if (firstBrace >= 0 && lastBrace > firstBrace) {
        candidates.push(cleaned.slice(firstBrace, lastBrace + 1));
    }

    for (const candidate of candidates) {
        try {
            const parsed: unknown = JSON.parse(candidate);
            const entries = Array.isArray(parsed) ? parsed : [parsed];
            const curriculums = entries
                .map((entry) => normalizeAgentCurriculum(entry, fallbackName))
                .filter((entry): entry is AgentCurriculum => entry !== null);
            if (curriculums.length > 0) return curriculums;
        } catch {
            // Not JSON — try the next candidate, then the text fallback.
        }
    }

    // Plain-text fallback: "Title: ..." first line, or a "# ..." heading,
    // with everything after it as the curriculum Markdown.
    const lines = text.split("\n");
    const firstLine = lines[0].trim();
    const titleMatch = firstLine.match(/^title:\s*(.+)$/i);
    const headingMatch = firstLine.match(/^#\s+(.+)$/);
    if (titleMatch || headingMatch) {
        const name = (titleMatch?.[1] ?? headingMatch?.[1] ?? "").trim();
        const curriculum = lines.slice(1).join("\n").trim() || text;
        return [{ name: name || fallbackName, curriculum }];
    }
    return [{ name: fallbackName, curriculum: text }];
}

/** Single-item version of parseAgentCurriculums. */
export function parseAgentCurriculum(
    pasted: string,
    fallbackName: string,
): AgentCurriculum | null {
    return parseAgentCurriculums(pasted, fallbackName)[0] ?? null;
}

/** Saved agent curriculums live as one whole list under "agentCurriculums". */
export async function loadAgentCurriculums(): Promise<AgentCurriculum[]> {
    const stored =
        await retrieveItemFromIndexedDB<AgentCurriculum[]>(
            AGENT_CURRICULUMS_KEY,
        );
    if (!Array.isArray(stored)) return [];
    return stored
        .map((entry) => normalizeAgentCurriculum(entry, "Untitled curriculum"))
        .filter((entry): entry is AgentCurriculum => entry !== null);
}

/**
 * Saves one curriculum using the exact shape from the screenshot:
 * prepend { name, curriculum } to the existing "agentCurriculums" list.
 */
export async function saveAgentCurriculum(
    data: AgentCurriculum,
): Promise<AgentCurriculum[]> {
    let currentCurriculums =
        (await retrieveItemFromIndexedDB<AgentCurriculum[]>(
            AGENT_CURRICULUMS_KEY,
        )) || [];

    currentCurriculums = [
        {
            name: data.name,
            curriculum: data.curriculum,
        },
        ...currentCurriculums,
    ];

    await saveItemToIndexedDB(AGENT_CURRICULUMS_KEY, currentCurriculums);
    return currentCurriculums;
}

/**
 * Paste-results + save block for agent curriculums. Same card style as
 * PasteBackSection, but it stores exactly { name, curriculum } entries
 * under "agentCurriculums" — the shape the curriculum pages read.
 */
export function AgentCurriculumPasteBackSection({
    fallbackName,
    detail,
    pastePlaceholder,
}: {
    /** Used as the saved name when Muse's JSON has no name. */
    fallbackName: string;
    /** One-line summary shown with the item, e.g. subject + grade. */
    detail: string;
    pastePlaceholder: string;
}) {
    const [pasted, setPasted] = useState("");
    const [items, setItems] = useState<AgentCurriculum[]>([]);
    const [justSaved, setJustSaved] = useState<string | null>(null);
    const [saveError, setSaveError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        loadAgentCurriculums().then((stored) => {
            if (!cancelled) setItems(stored);
        });
        return () => {
            cancelled = true;
        };
    }, []);

    const savePasted = async () => {
        const parsed = parseAgentCurriculums(pasted, fallbackName);
        if (parsed.length === 0) return;
        const next = [...parsed, ...items];
        try {
            await saveItemToIndexedDB(AGENT_CURRICULUMS_KEY, next);
            setItems(next);
            setPasted("");
            setJustSaved(parsed[0].name);
            setSaveError(false);
            setTimeout(() => setJustSaved(null), 4000);
        } catch {
            setSaveError(true);
        }
    };

    const deleteItem = async (index: number) => {
        const next = items.filter((_, i) => i !== index);
        await saveItemToIndexedDB(AGENT_CURRICULUMS_KEY, next);
        setItems(next);
    };

    return (
        <div className="mx-auto mt-6 w-full space-y-3">
            <div className="w-full rounded-xl border border-border">
                <div className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Paste the results
                </div>
                <div className="space-y-3 border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    <Textarea
                        value={pasted}
                        onChange={(e) => setPasted(e.target.value)}
                        rows={8}
                        placeholder={pastePlaceholder}
                        className="font-mono text-xs leading-relaxed"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                        <PillButton
                            onClick={savePasted}
                            disabled={pasted.trim() === ""}
                        >
                            Save this curriculum
                        </PillButton>
                        {justSaved ? (
                            <p className="text-sm text-green-700">
                                Saved “{justSaved}”.
                            </p>
                        ) : null}
                        {saveError ? (
                            <p className="text-sm text-red-600">
                                Couldn&apos;t save — please try again.
                            </p>
                        ) : null}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        Paste Muse&apos;s JSON reply here. It stays on your
                        device, saved under “agentCurriculums”.
                    </p>
                </div>
            </div>

            {items.length > 0 ? (
                <div className="w-full rounded-xl border border-border">
                    <div className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-foreground">
                        Saved on this device ({items.length})
                    </div>
                    <ul className="divide-y divide-border border-t border-border">
                        {items.map((item, index) => (
                            <li key={`${item.name}-${index}`} className="px-4 py-3">
                                <details>
                                    <summary className="cursor-pointer text-sm font-semibold text-foreground">
                                        {item.name}
                                        {detail ? (
                                            <span className="ml-2 font-normal text-xs text-muted-foreground">
                                                {detail}
                                            </span>
                                        ) : null}
                                    </summary>
                                    <pre className="mt-3 max-h-96 overflow-auto rounded-lg bg-muted p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground">
                                        {item.curriculum}
                                    </pre>
                                    <div className="mt-2 flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => copyText(item.curriculum)}
                                        >
                                            <Copy className="h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-red-600 hover:text-red-700"
                                            onClick={() => deleteItem(index)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Delete
                                        </Button>
                                    </div>
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

/**
 * Paste-results + save block. Sits under the Copy Prompt button, in the
 * same card style as the option sections above it.
 */
export function PasteBackSection({
    storageKey,
    fallbackName,
    detail,
    noun,
    pastePlaceholder,
}: {
    /** IndexedDB key holding the whole list, e.g. "curriculums". */
    storageKey: string;
    /** Used as the saved name when Muse's reply has no Title line. */
    fallbackName: string;
    /** One-line summary stored with the item, e.g. subject + grade. */
    detail: string;
    /** Singular noun for labels, e.g. "curriculum". */
    noun: string;
    pastePlaceholder: string;
}) {
    const [pasted, setPasted] = useState("");
    const [items, setItems] = useState<SavedItem[]>([]);
    const [justSaved, setJustSaved] = useState<string | null>(null);
    const [saveError, setSaveError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        retrieveItemFromIndexedDB<SavedItem[]>(storageKey).then((stored) => {
            if (!cancelled) setItems(normalizeSavedItems(stored));
        });
        return () => {
            cancelled = true;
        };
    }, [storageKey]);

    const savePasted = async () => {
        const parsed = parsePastedResult(pasted, fallbackName);
        if (!parsed) return;
        const item: SavedItem = {
            id: newId(),
            name: parsed.name,
            detail,
            body: parsed.body,
            createdAt: Date.now(),
        };
        const next = [item, ...items];
        try {
            await saveItemToIndexedDB(storageKey, next);
            setItems(next);
            setPasted("");
            setJustSaved(item.name);
            setSaveError(false);
            setTimeout(() => setJustSaved(null), 4000);
        } catch {
            setSaveError(true);
        }
    };

    const deleteItem = async (id: string) => {
        const next = items.filter((item) => item.id !== id);
        await saveItemToIndexedDB(storageKey, next);
        setItems(next);
    };

    return (
        <div className="mx-auto mt-6 w-full space-y-3">
            <div className="w-full rounded-xl border border-border">
                <div className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Paste the results
                </div>
                <div className="space-y-3 border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    <Textarea
                        value={pasted}
                        onChange={(e) => setPasted(e.target.value)}
                        rows={8}
                        placeholder={pastePlaceholder}
                        className="font-mono text-xs leading-relaxed"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                        <PillButton
                            onClick={savePasted}
                            disabled={pasted.trim() === ""}
                        >
                            Save this {noun}
                        </PillButton>
                        {justSaved ? (
                            <p className="text-sm text-green-700">
                                Saved “{justSaved}”.
                            </p>
                        ) : null}
                        {saveError ? (
                            <p className="text-sm text-red-600">
                                Couldn&apos;t save — please try again.
                            </p>
                        ) : null}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        Paste Muse&apos;s full reply here. It stays on your
                        device.
                    </p>
                </div>
            </div>

            {items.length > 0 ? (
                <div className="w-full rounded-xl border border-border">
                    <div className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-foreground">
                        Saved on this device ({items.length})
                    </div>
                    <ul className="divide-y divide-border border-t border-border">
                        {items.map((item) => (
                            <li key={item.id} className="px-4 py-3">
                                <details>
                                    <summary className="cursor-pointer text-sm font-semibold text-foreground">
                                        {item.name}
                                        {item.detail ? (
                                            <span className="ml-2 font-normal text-xs text-muted-foreground">
                                                {item.detail}
                                            </span>
                                        ) : null}
                                    </summary>
                                    <pre className="mt-3 max-h-96 overflow-auto rounded-lg bg-muted p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground">
                                        {item.body}
                                    </pre>
                                    <div className="mt-2 flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => copyText(item.body)}
                                        >
                                            <Copy className="h-4 w-4" />
                                            Copy
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-red-600 hover:text-red-700"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Delete
                                        </Button>
                                    </div>
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}
