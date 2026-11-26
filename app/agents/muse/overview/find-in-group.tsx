"use client"

import { useMobile } from "@/lib/useMobile";
import { useDarkMode } from "@/lib/useDarkMode";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import {
    CheckRow,
    Field,
    OptionSection,
    PasteBackSection,
    PillButton,
    RadioRow,
    SectionsGrid,
    SelectField,
    TextField,
    TextareaField,
    copyText,
    type Option,
} from "./agent-helpers";

/* ---------------------------------- options --------------------------------- */

const GROUP_KINDS: Option[] = [
    { value: "facebook", label: "Facebook group" },
    { value: "skool", label: "Skool community" },
    { value: "discord", label: "Discord server" },
    { value: "other", label: "Somewhere else" },
];

const DATE_RANGES: Option[] = [
    { value: "any", label: "Any time" },
    { value: "week", label: "Past week" },
    { value: "month", label: "Past month" },
    { value: "year", label: "Past year" },
];

/* --------------------------------- form state -------------------------------- */

type GroupFindForm = {
    groupName: string;
    groupKind: string;
    topic: string;
    findPosts: boolean;
    findFiles: boolean;
    findRecommendations: boolean;
    findPeople: boolean;
    findEvents: boolean;
    dateRange: string;
    details: string;
    reportFormat: string;
};

const INITIAL_FORM: GroupFindForm = {
    groupName: "",
    groupKind: "",
    topic: "",
    findPosts: false,
    findFiles: false,
    findRecommendations: false,
    findPeople: false,
    findEvents: false,
    dateRange: "any",
    details: "",
    reportFormat: "list",
};

/* --------------------------------- prompt build ------------------------------ */

function buildPrompt(f: GroupFindForm): string {
    const lookingFor = [
        f.findPosts && "Posts and discussions about the topic",
        f.findFiles && "Files and documents shared in the group",
        f.findRecommendations && "Recommendations (products, vendors, curricula)",
        f.findPeople && "People worth connecting with on this topic",
        f.findEvents && "Events and announcements about the topic",
    ].filter(Boolean);
    const groupKindLabel =
        GROUP_KINDS.find((o) => o.value === f.groupKind)?.label ?? "";
    const dateLabel =
        DATE_RANGES.find((o) => o.value === f.dateRange)?.label ?? "";

    const lines: string[] = [
        "Search a group for me and report what you find. Work from the specifications below.",
        "Working rule: AI proposes, I dispose — report exactly what you found, with links or quotes where you can, and say plainly when nothing turned up. Never invent a post, a link, or a person.",
        "",
        "# GROUP",
    ];
    if (f.groupName) lines.push(`- Group name: ${f.groupName}`);
    if (groupKindLabel) lines.push(`- Kind of group: ${groupKindLabel}`);
    lines.push("", "# TOPIC");
    if (f.topic) lines.push(`- Find: ${f.topic}`);
    if (lookingFor.length > 0)
        lines.push(`- I am looking for: ${lookingFor.join("; ")}.`);
    lines.push(`- From: ${dateLabel}.`);
    if (f.details) lines.push("", "# DETAILS", f.details);
    lines.push(
        "",
        "# HOW TO REPORT",
        f.reportFormat === "summary"
            ? "- Give me a short summary of what you found, with the best 3–5 items."
            : "- Give me a list of what you found, one item per line, each with its link or source where available.",
        "- If nothing was found, say so plainly instead of guessing.",
        "",
        "# HOW TO REPLY",
        "Start your reply with one line: Title: Findings: <topic> in <group name>",
        "Then write the findings themselves in Markdown. Do not add anything before the Title line.",
    );
    return lines.join("\n");
}

export default function FindInGroupPage() {
    const isMobile = useMobile();
    const { isDark } = useDarkMode();
    const [form, setForm] = useState<GroupFindForm>(INITIAL_FORM);
    const [copied, setCopied] = useState(false);
    const [copyFailed, setCopyFailed] = useState(false);

    const update =
        <K extends keyof GroupFindForm>(key: K) =>
        (value: GroupFindForm[K]) =>
            setForm((prev) => ({ ...prev, [key]: value }));

    const prompt = useMemo(() => buildPrompt(form), [form]);

    const copyPrompt = async () => {
        const ok = await copyText(prompt);
        setCopyFailed(!ok);
        if (ok) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const savedDetail = [form.groupName, form.topic]
        .filter(Boolean)
        .join(" · ");

    if (isMobile === null) {
        return (
            <div className="flex w-full items-center justify-center py-12">
                <p className="text-sm font-semibold text-muted-foreground">
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className={`w-full mr-auto ${isMobile ? "px-4 py-8" : "px-6 py-12"}`}>
            <div className=" grid w-full max-w-5xl items-center gap-6 sm:gap-10 lg:grid-cols-2">
                {/* Left — copy */}
                <section className="flex flex-col items-start mr-auto gap-5">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${isDark ? "border-blue-500/30 bg-blue-500/10 text-blue-300" : "border-blue-200 bg-blue-50 text-blue-700"}`}>
                        <Sparkles size={14} />
                        Powered by Meta Muse
                    </span>

                    <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">

                        <span className="gradient-muse">Find in a Group</span>
                        <span className="mt-3 flex items-center gap-3">
                            <span className="text-xl font-medium text-muted-foreground">with</span>
                            <Image
                                src="/AppIcons/MuseIconExportable1.png"
                                alt="Muse"
                                width={110}
                                height={36}
                                className="h-9 w-auto"
                            />
                        </span>
                    </h1>

                    <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                        Find a topic inside a group without scrolling for an
                        hour. Tell Muse which group and what you&apos;re
                        looking for, copy the prompt in, and save the findings
                        back here.
                    </p>

                </section>
            </div>

            {/* Full-width grid — sits below the hero, not nested inside it */}
            <SectionsGrid>
                <OptionSection title="Group & Topic">
                    <TextField
                        id="group-name"
                        label="Group name"
                        value={form.groupName}
                        onChange={update("groupName")}
                        placeholder="e.g. The Curriculum Lab"
                    />
                    <SelectField
                        id="group-kind"
                        label="Kind of group"
                        value={form.groupKind}
                        onChange={update("groupKind")}
                        options={GROUP_KINDS}
                    />
                    <TextField
                        id="group-topic"
                        label="Topic to find"
                        value={form.topic}
                        onChange={update("topic")}
                        placeholder="e.g. ESA-approved science kits for middle school"
                    />
                    <SelectField
                        id="group-range"
                        label="How far back?"
                        value={form.dateRange}
                        onChange={update("dateRange")}
                        options={DATE_RANGES}
                    />
                </OptionSection>
                <OptionSection title="What to Find">
                    <Field label="I am looking for">
                        <div className="space-y-2.5 rounded-lg border border-border px-3 py-3">
                            <CheckRow
                                id="find-posts"
                                label="Posts and discussions"
                                checked={form.findPosts}
                                onChange={update("findPosts")}
                            />
                            <CheckRow
                                id="find-files"
                                label="Files and documents"
                                checked={form.findFiles}
                                onChange={update("findFiles")}
                            />
                            <CheckRow
                                id="find-recommendations"
                                label="Recommendations"
                                hint="Products, vendors, curricula people recommend."
                                checked={form.findRecommendations}
                                onChange={update("findRecommendations")}
                            />
                            <CheckRow
                                id="find-people"
                                label="People to connect with"
                                checked={form.findPeople}
                                onChange={update("findPeople")}
                            />
                            <CheckRow
                                id="find-events"
                                label="Events and announcements"
                                checked={form.findEvents}
                                onChange={update("findEvents")}
                            />
                        </div>
                    </Field>
                    <TextareaField
                        id="group-details"
                        label="More detail"
                        rows={3}
                        value={form.details}
                        onChange={update("details")}
                        placeholder="Anything that narrows the search — grade levels, budgets, must-haves."
                    />
                </OptionSection>
                <OptionSection title="How to Report">
                    <Field label="Report style">
                        <RadioRow
                            name="report-format"
                            value={form.reportFormat}
                            onChange={update("reportFormat")}
                            options={[
                                {
                                    value: "list",
                                    label: "List with links",
                                    hint: "One item per line, with its link or source where available.",
                                },
                                {
                                    value: "summary",
                                    label: "Short summary",
                                    hint: "The best 3–5 items, summarized.",
                                },
                            ]}
                        />
                    </Field>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        Muse reports only what it actually finds. If nothing
                        turned up, it should say so plainly.
                    </p>
                </OptionSection>
            </SectionsGrid>

            <PillButton onClick={copyPrompt}>
                {copied ? "Copied!" : "Copy Prompt"}
            </PillButton>
            {copyFailed ? (
                <p className="mt-2 text-sm text-red-600">
                    Copy didn&apos;t work in this browser — try selecting the
                    prompt text or use HTTPS.
                </p>
            ) : null}

            <PasteBackSection
                storageKey="group-finds"
                fallbackName={
                    form.topic && form.groupName
                        ? `Findings: ${form.topic} in ${form.groupName}`
                        : "Untitled group search"
                }
                detail={savedDetail}
                noun="search"
                pastePlaceholder={"Paste Muse's full reply here — starting with its Title: line — then save it."}
            />
        </div>
    );
}

// Also exported by name, so both `import FindInGroupPage from ...` and
// `import { FindInGroupPage } from ...` resolve.
export { FindInGroupPage };
