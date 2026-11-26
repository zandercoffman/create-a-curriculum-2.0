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
    labelFor,
    loadLearners,
    type LearnerProfile,
    type Option,
} from "./agent-helpers";

/* ---------------------------------- options --------------------------------- */

const RESOURCE_TYPES: Option[] = [
    { value: "article", label: "Article" },
    { value: "video", label: "Video" },
    { value: "book", label: "Book" },
    { value: "worksheet", label: "Worksheet / printable" },
    { value: "website", label: "Website" },
    { value: "tool", label: "Tool / app" },
    { value: "other", label: "Something else" },
];

const SUBJECTS: Option[] = [
    { value: "life-skills", label: "Life Skills" },
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "ela", label: "English / Language Arts" },
    { value: "social-studies", label: "Social Studies" },
    { value: "tech", label: "Technology" },
    { value: "arts", label: "Arts" },
    { value: "health-pe", label: "Health & PE" },
];

const GRADES: Option[] = [
    { value: "k-2", label: "K–2 (Early Elementary)" },
    { value: "3-5", label: "3–5 (Upper Elementary)" },
    { value: "6-8", label: "6–8 (Middle School)" },
    { value: "9-12", label: "9–12 (High School)" },
    { value: "college", label: "College / Adult" },
];

/* --------------------------------- form state -------------------------------- */

type ResourceForm = {
    title: string;
    type: string;
    url: string;
    description: string;
    subject: string;
    grade: string;
    learnerIds: string[];
    useCase: string;
    notes: string;
};

const INITIAL_FORM: ResourceForm = {
    title: "",
    type: "",
    url: "",
    description: "",
    subject: "",
    grade: "",
    learnerIds: [],
    useCase: "",
    notes: "",
};

/* --------------------------------- prompt build ------------------------------ */

function buildPrompt(f: ResourceForm, learners: LearnerProfile[]): string {
    const chosenLearners = learners.filter((l) => f.learnerIds.includes(l.id));
    const learnerNames = chosenLearners
        .map(
            (l) =>
                l.name +
                (l.educationLevel ? ` (education level: ${l.educationLevel})` : ""),
        )
        .join("; ");

    const lines: string[] = [
        "You are helping me turn a resource into something usable in a curriculum. Summarize it and explain how to use it, from the specifications below.",
        "Working rule: AI proposes, the teacher disposes — present the summary clearly so I can review and approve it.",
        "",
        "# RESOURCE",
    ];
    if (f.title) lines.push(`- Title: ${f.title}`);
    if (f.type) lines.push(`- Type: ${labelFor(RESOURCE_TYPES, f.type)}`);
    if (f.url) lines.push(`- Link: ${f.url}`);
    if (f.description) lines.push(`- What it is: ${f.description}`);
    if (f.subject) lines.push(`- Subject area: ${labelFor(SUBJECTS, f.subject)}`);
    if (f.grade) lines.push(`- Grade level: ${labelFor(GRADES, f.grade)}`);
    if (learnerNames) lines.push(`- For: ${learnerNames}`);
    if (f.useCase) lines.push("", "# HOW I PLAN TO USE IT", f.useCase);
    if (f.notes) lines.push("", "# NOTES", f.notes);
    lines.push(
        "",
        "# WHAT TO WRITE",
        "- A short summary of what the resource covers.",
        "- Key takeaways, as a short list.",
        "- How to use it with the learner(s) above, step by step.",
        "- Anything to watch out for (reading level, cost, ads, account needed).",
        "",
        "# HOW TO REPLY",
        "Start your reply with one line: Title: <a short title for this resource>",
        "Then write the summary itself in Markdown. Do not add anything before the Title line.",
    );
    return lines.join("\n");
}

export default function CreateResourcePage() {
    const isMobile = useMobile();
    const { isDark } = useDarkMode();
    const [form, setForm] = useState<ResourceForm>(INITIAL_FORM);
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
        <K extends keyof ResourceForm>(key: K) =>
        (value: ResourceForm[K]) =>
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
        form.type ? labelFor(RESOURCE_TYPES, form.type) : "",
        form.subject ? labelFor(SUBJECTS, form.subject) : "",
        form.grade ? labelFor(GRADES, form.grade) : "",
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

                        <span className="gradient-muse">Create a Resource</span>
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
                        Turn a link, video, or book into a ready-to-use
                        resource. Describe it, copy the prompt into Muse, and
                        get a summary plus a plan for using it with your
                        learners.
                    </p>

                </section>
            </div>

            {/* Full-width grid — sits below the hero, not nested inside it */}
            <SectionsGrid>
                <OptionSection title="Resource Details">
                    <TextField
                        id="resource-title"
                        label="Resource title"
                        value={form.title}
                        onChange={update("title")}
                        placeholder="e.g. How Money Works — video series"
                    />
                    <SelectField
                        id="resource-type"
                        label="Type"
                        value={form.type}
                        onChange={update("type")}
                        options={RESOURCE_TYPES}
                    />
                    <TextField
                        id="resource-url"
                        label="Link"
                        type="url"
                        value={form.url}
                        onChange={update("url")}
                        placeholder="https://…"
                    />
                    <TextareaField
                        id="resource-description"
                        label="What is it?"
                        rows={4}
                        value={form.description}
                        onChange={update("description")}
                        placeholder="What does this resource cover? Why did you pick it?"
                    />
                </OptionSection>
                <OptionSection title="For Whom & Level">
                    <div className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
                        <SelectField
                            id="resource-subject"
                            label="Subject area"
                            value={form.subject}
                            onChange={update("subject")}
                            options={SUBJECTS}
                        />
                        <SelectField
                            id="resource-grade"
                            label="Grade level"
                            value={form.grade}
                            onChange={update("grade")}
                            options={GRADES}
                        />
                    </div>
                    {learners.length > 0 ? (
                        <LearnerPicker
                            learners={learners}
                            selectedIds={form.learnerIds}
                            onChange={update("learnerIds")}
                        />
                    ) : null}
                </OptionSection>
                <OptionSection title="How to Use It">
                    <TextareaField
                        id="resource-usecase"
                        label="How do you plan to use it?"
                        rows={4}
                        value={form.useCase}
                        onChange={update("useCase")}
                        placeholder="e.g. Watch one video per lesson, then discuss the worksheet questions together."
                    />
                    <TextareaField
                        id="resource-notes"
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
                storageKey="resources"
                fallbackName={form.title || "Untitled resource"}
                detail={savedDetail}
                noun="resource"
                pastePlaceholder={"Paste Muse's full reply here — starting with its Title: line — then save it."}
            />
        </div>
    );
}

// Also exported by name, so both `import CreateResourcePage from ...` and
// `import { CreateResourcePage } from ...` resolve.
export { CreateResourcePage };
