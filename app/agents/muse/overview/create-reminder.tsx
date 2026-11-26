"use client"

import { useMobile } from "@/lib/useMobile";
import { useDarkMode } from "@/lib/useDarkMode";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
    LearnerPicker,
    OptionSection,
    PasteBackSection,
    PillButton,
    SectionsGrid,
    SelectField,
    TextField,
    TextareaField,
    copyText,
    loadLearners,
    type LearnerProfile,
    type Option,
} from "./agent-helpers";

/* ---------------------------------- options --------------------------------- */

const REPEAT_OPTIONS: Option[] = [
    { value: "once", label: "Just once" },
    { value: "daily", label: "Every day" },
    { value: "weekdays", label: "Weekdays" },
    { value: "weekly", label: "Every week" },
    { value: "monthly", label: "Every month" },
];

/* --------------------------------- form state -------------------------------- */

type ReminderForm = {
    title: string;
    details: string;
    learnerIds: string[];
    remindAt: string;
    repeat: string;
    advanceNotice: string;
    priority: string;
    notes: string;
};

const INITIAL_FORM: ReminderForm = {
    title: "",
    details: "",
    learnerIds: [],
    remindAt: "",
    repeat: "once",
    advanceNotice: "",
    priority: "normal",
    notes: "",
};

/* --------------------------------- prompt build ------------------------------ */

function buildPrompt(f: ReminderForm, learners: LearnerProfile[]): string {
    const chosenLearners = learners.filter((l) => f.learnerIds.includes(l.id));
    const learnerNames = chosenLearners.map((l) => l.name).join("; ");
    const repeatLabel =
        REPEAT_OPTIONS.find((o) => o.value === f.repeat)?.label ?? f.repeat;
    const whenLabel = f.remindAt ? f.remindAt.replace("T", " at ") : "";

    const lines: string[] = [
        "You are helping me set a reminder. Write it clearly from the specifications below, so I can confirm the wording and the schedule before it is set.",
        "Working rule: AI proposes, I dispose — present the reminder draft clearly so I can review and approve it.",
        "",
        "# REMINDER",
    ];
    if (f.title) lines.push(`- Title: ${f.title}`);
    if (f.details) lines.push(`- What it is about: ${f.details}`);
    if (learnerNames) lines.push(`- For: ${learnerNames}`);
    lines.push("", "# WHEN");
    if (whenLabel) lines.push(`- Date and time: ${whenLabel}`);
    lines.push(`- Repeats: ${repeatLabel}`);
    if (f.advanceNotice) lines.push(`- Remind me this far ahead: ${f.advanceNotice}`);
    lines.push(`- Priority: ${f.priority}`);
    if (f.notes) lines.push("", "# NOTES", f.notes);
    lines.push(
        "",
        "# HOW TO REPLY",
        "Start your reply with one line: Title: <a short title for this reminder>",
        "Then write the reminder itself in Markdown: the exact wording, the date and time, and how often it repeats. Do not add anything before the Title line.",
    );
    return lines.join("\n");
}

export default function CreateReminderPage() {
    const isMobile = useMobile();
    const { isDark } = useDarkMode();
    const [form, setForm] = useState<ReminderForm>(INITIAL_FORM);
    const [learners, setLearners] = useState<LearnerProfile[]>([]);
    const [copied, setCopied] = useState(false);
    const [copyFailed, setCopyFailed] = useState(false);

    useEffect(() => {
        let cancelled = false;
        loadLearners().then((loaded) => {
            if (!cancelled) setLearners(loaded);
        });
        return () => {
            cancelled = true;
        };
    }, []);

    const update =
        <K extends keyof ReminderForm>(key: K) =>
        (value: ReminderForm[K]) =>
            setForm((prev) => ({ ...prev, [key]: value }));

    const prompt = useMemo(() => buildPrompt(form, learners), [form, learners]);

    const copyPrompt = async () => {
        const ok = await copyText(prompt);
        setCopyFailed(!ok);
        if (ok) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const savedDetail = [
        form.remindAt ? form.remindAt.replace("T", " ") : "",
        form.repeat !== "once"
            ? (REPEAT_OPTIONS.find((o) => o.value === form.repeat)?.label ?? "")
            : "",
    ]
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

                        <span className="gradient-muse">Create a Reminder</span>
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
                        Set a reminder without forgetting the details. Describe
                        what it is, when it should fire, and how often — copy
                        the prompt into Muse, and save the confirmed reminder
                        back here.
                    </p>

                </section>
            </div>

            {/* Full-width grid — sits below the hero, not nested inside it */}
            <SectionsGrid>
                <OptionSection title="Reminder Details">
                    <TextField
                        id="reminder-title"
                        label="Reminder title"
                        value={form.title}
                        onChange={update("title")}
                        placeholder="e.g. Review this week's lessons with Jayden"
                    />
                    <TextareaField
                        id="reminder-details"
                        label="What is it about?"
                        rows={4}
                        value={form.details}
                        onChange={update("details")}
                        placeholder="The details Muse needs to word the reminder well."
                    />
                    {learners.length > 0 ? (
                        <LearnerPicker
                            learners={learners}
                            selectedIds={form.learnerIds}
                            onChange={update("learnerIds")}
                        />
                    ) : null}
                </OptionSection>
                <OptionSection title="When & How Often">
                    <TextField
                        id="reminder-at"
                        label="Date and time"
                        type="datetime-local"
                        value={form.remindAt}
                        onChange={update("remindAt")}
                    />
                    <SelectField
                        id="reminder-repeat"
                        label="Repeats"
                        value={form.repeat}
                        onChange={update("repeat")}
                        options={REPEAT_OPTIONS}
                    />
                    <TextField
                        id="reminder-advance"
                        label="Remind me this far ahead"
                        value={form.advanceNotice}
                        onChange={update("advanceNotice")}
                        placeholder="e.g. 15 minutes before, the night before"
                    />
                    <SelectField
                        id="reminder-priority"
                        label="Priority"
                        value={form.priority}
                        onChange={update("priority")}
                        options={[
                            { value: "low", label: "Low" },
                            { value: "normal", label: "Normal" },
                            { value: "high", label: "High" },
                        ]}
                    />
                </OptionSection>
                <OptionSection title="Anything Else">
                    <TextareaField
                        id="reminder-notes"
                        label="Notes for Muse"
                        rows={3}
                        value={form.notes}
                        onChange={update("notes")}
                        placeholder="Anything else Muse should know."
                    />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        Saving stores the reminder on this device. This page
                        does not send notifications itself — check your saved
                        reminders here.
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
                storageKey="reminders"
                fallbackName={form.title || "Untitled reminder"}
                detail={savedDetail}
                noun="reminder"
                pastePlaceholder={"Paste Muse's full reply here — starting with its Title: line — then save it."}
            />
        </div>
    );
}

// Also exported by name, so both `import CreateReminderPage from ...` and
// `import { CreateReminderPage } from ...` resolve.
export { CreateReminderPage };
