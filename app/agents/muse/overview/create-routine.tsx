"use client"
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
    CheckRow,
    Field,
    LearnerPicker,
    OptionSection,
    PasteBackSection,
    PillButton,
    RadioRow,
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

const FOCUS_AREAS: Option[] = [
    { value: "morning", label: "Morning routine" },
    { value: "study", label: "Study routine" },
    { value: "workout", label: "Workout routine" },
    { value: "evening", label: "Evening routine" },
    { value: "custom", label: "Something else" },
];

const DAYS: { value: string; label: string }[] = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
];

/* --------------------------------- form state -------------------------------- */

type RoutineForm = {
    name: string;
    goal: string;
    learnerIds: string[];
    focus: string;
    days: string[];
    startTime: string;
    durationMinutes: string;
    steps: string;
    remindMe: boolean;
    flexibility: string;
    notes: string;
};

const INITIAL_FORM: RoutineForm = {
    name: "",
    goal: "",
    learnerIds: [],
    focus: "",
    days: [],
    startTime: "",
    durationMinutes: "",
    steps: "",
    remindMe: false,
    flexibility: "fixed",
    notes: "",
};

/* --------------------------------- prompt build ------------------------------ */

function buildPrompt(f: RoutineForm, learners: LearnerProfile[]): string {
    const chosenLearners = learners.filter((l) => f.learnerIds.includes(l.id));
    const learnerNames = chosenLearners
        .map(
            (l) =>
                l.name +
                (l.educationLevel ? ` (education level: ${l.educationLevel})` : ""),
        )
        .join("; ");
    const dayLabels = DAYS.filter((d) => f.days.includes(d.value))
        .map((d) => d.label)
        .join(", ");

    const lines: string[] = [
        "You are an expert at building routines people actually stick to. Create a complete routine from the specifications below.",
        "Working rule: AI proposes, the teacher disposes — present the full draft clearly so I can review and approve every part.",
        "",
        "# ROUTINE",
    ];
    if (f.name) lines.push(`- Name: ${f.name}`);
    if (f.goal) lines.push(`- Goal: ${f.goal}`);
    if (learnerNames) lines.push(`- For: ${learnerNames}`);
    if (f.focus) {
        const focusLabel =
            FOCUS_AREAS.find((o) => o.value === f.focus)?.label ?? f.focus;
        lines.push(`- Focus: ${focusLabel}`);
    }
    lines.push("", "# SCHEDULE");
    if (dayLabels) lines.push(`- Days: ${dayLabels}`);
    if (f.startTime) lines.push(`- Start time: ${f.startTime}`);
    if (f.durationMinutes) lines.push(`- Duration: ${f.durationMinutes} minutes`);
    lines.push(
        f.flexibility === "flexible"
            ? "- Timing: flexible windows — give time ranges, not exact minutes."
            : "- Timing: fixed times — give exact start times for each step.",
    );
    if (f.remindMe) lines.push("- Remind me before the routine starts each day.");
    lines.push("", "# STEPS & ACTIVITIES");
    if (f.steps) lines.push(f.steps);
    if (f.notes) lines.push("", "# NOTES", f.notes);
    lines.push(
        "",
        "# HOW TO REPLY",
        "Start your reply with one line: Title: <a short title for this routine>",
        "Then write the full routine itself in Markdown, broken down by day and step. Do not add anything before the Title line.",
    );
    return lines.join("\n");
}

export default function CreateRoutinePage() {
    const [form, setForm] = useState<RoutineForm>(INITIAL_FORM);
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
        <K extends keyof RoutineForm>(key: K) =>
        (value: RoutineForm[K]) =>
            setForm((prev) => ({ ...prev, [key]: value }));

    const toggleDay = (day: string, checked: boolean) => {
        update("days")(
            checked
                ? [...form.days, day]
                : form.days.filter((d) => d !== day),
        );
    };

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
        form.days.length > 0 ? `${form.days.length} days / week` : "",
        form.startTime ? `starts ${form.startTime}` : "",
    ]
        .filter(Boolean)
        .join(" · ");

    return (
        <div className="w-full mr-auto px-6 py-12">
            <div className=" grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
                {/* Left — copy */}
                <section className="flex flex-col items-start mr-auto gap-5">
                    <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        borderRadius: "9999px",
                        border: "1px solid #bfdbfe",
                        backgroundColor: "#eff6ff",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                        lineHeight: "1rem",
                        fontWeight: 500,
                        color: "#1d4ed8",
                    }}>
                        <Sparkles size={14} />
                        Powered by Meta Muse
                    </span>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight">

                        <span className="gradient-muse">Create a Routine</span>
                        <span className="mt-3 flex items-center gap-3">
                            <span className="text-xl font-medium text-slate-500">with</span>
                            <Image
                                src="/AppIcons/MuseIconExportable1.png"
                                alt="Muse"
                                width={110}
                                height={36}
                                className="h-9 w-auto"
                            />
                        </span>
                    </h1>

                    <p className="max-w-lg text-base leading-relaxed text-slate-600">
                        Build a routine that runs your week. Describe the goal,
                        pick the days and times, copy the prompt into Muse, and
                        get a step-by-step routine back.
                    </p>

                </section>
            </div>

            {/* Full-width grid — sits below the hero, not nested inside it */}
            <SectionsGrid>
                <OptionSection title="Routine Details">
                    <TextField
                        id="routine-name"
                        label="Routine name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="e.g. Morning study block"
                    />
                    <TextareaField
                        id="routine-goal"
                        label="What is this routine for?"
                        rows={3}
                        value={form.goal}
                        onChange={update("goal")}
                        placeholder="What should this routine help you (or the learner) do?"
                    />
                    {learners.length > 0 ? (
                        <LearnerPicker
                            learners={learners}
                            selectedIds={form.learnerIds}
                            onChange={update("learnerIds")}
                        />
                    ) : null}
                    <SelectField
                        id="routine-focus"
                        label="Focus area"
                        value={form.focus}
                        onChange={update("focus")}
                        options={FOCUS_AREAS}
                    />
                </OptionSection>
                <OptionSection title="Schedule">
                    <Field label="Days of the week">
                        <div className="space-y-2.5 rounded-lg border border-slate-200 px-3 py-3">
                            {DAYS.map((day) => (
                                <CheckRow
                                    key={day.value}
                                    id={`day-${day.value}`}
                                    label={day.label}
                                    checked={form.days.includes(day.value)}
                                    onChange={(v) => toggleDay(day.value, v)}
                                />
                            ))}
                        </div>
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                        <TextField
                            id="routine-start"
                            label="Start time"
                            type="time"
                            value={form.startTime}
                            onChange={update("startTime")}
                        />
                        <TextField
                            id="routine-duration"
                            label="Duration (minutes)"
                            type="number"
                            value={form.durationMinutes}
                            onChange={update("durationMinutes")}
                            placeholder="e.g. 45"
                        />
                    </div>
                    <Field label="Timing style">
                        <RadioRow
                            name="flexibility"
                            value={form.flexibility}
                            onChange={update("flexibility")}
                            options={[
                                {
                                    value: "fixed",
                                    label: "Fixed times",
                                    hint: "Exact start times for each step.",
                                },
                                {
                                    value: "flexible",
                                    label: "Flexible windows",
                                    hint: "Time ranges instead of exact minutes.",
                                },
                            ]}
                        />
                    </Field>
                    <CheckRow
                        id="routine-remind"
                        label="Remind me before it starts"
                        hint="Ask Muse to include a reminder cue at the start of the routine."
                        checked={form.remindMe}
                        onChange={update("remindMe")}
                    />
                </OptionSection>
                <OptionSection title="Steps & Activities">
                    <TextareaField
                        id="routine-steps"
                        label="Steps or activities to include"
                        rows={5}
                        value={form.steps}
                        onChange={update("steps")}
                        placeholder={"One per line, for example:\n- 10 min review of yesterday's notes\n- 30 min focused practice\n- 5 min recap: what did I learn?"}
                    />
                    <TextareaField
                        id="routine-notes"
                        label="Anything else"
                        rows={3}
                        value={form.notes}
                        onChange={update("notes")}
                        placeholder="Anything else Muse should know."
                    />
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
                storageKey="routines"
                fallbackName={form.name || "Untitled routine"}
                detail={savedDetail}
                noun="routine"
                pastePlaceholder={"Paste Muse's full reply here — starting with its Title: line — then save it."}
            />
        </div>
    );
}

// Also exported by name, so both `import CreateRoutinePage from ...` and
// `import { CreateRoutinePage } from ...` resolve.
export { CreateRoutinePage };
