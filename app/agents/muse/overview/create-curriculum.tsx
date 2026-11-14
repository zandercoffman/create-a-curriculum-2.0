"use client"
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
    AgentCurriculumPasteBackSection,
    CheckRow,
    Field,
    LearnerPicker,
    OptionSection,
    PillButton,
    RadioRow,
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
/* Same option sets as the main Create a Curriculum builder, so the prompt */
/* Muse gets from this page matches the one from /curriculums.             */

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

const PRIOR_KNOWLEDGE: Option[] = [
    { value: "beginner", label: "Beginner — no prior coursework" },
    { value: "some", label: "Some exposure — building on basics" },
    { value: "intermediate", label: "Intermediate — ready for depth" },
    { value: "advanced", label: "Advanced — enrichment level" },
];

const SETTINGS: Option[] = [
    { value: "in-person", label: "In-person classroom" },
    { value: "online", label: "Online / virtual" },
    { value: "hybrid", label: "Hybrid" },
    { value: "homeschool", label: "Homeschool / small group" },
];

const LESSON_FORMATS: Option[] = [
    { value: "30-min", label: "30-minute periods" },
    { value: "45-min", label: "45-minute class periods" },
    { value: "60-min", label: "60-minute blocks" },
    { value: "90-min", label: "90-minute blocks" },
    { value: "self-paced", label: "Self-paced modules" },
];

const OBJECTIVE_STYLES: Option[] = [
    { value: "blooms", label: "Bloom's taxonomy verbs (SWBAT…)" },
    { value: "simple", label: "Plain language (“I can…” statements)" },
    { value: "standards", label: "Standards-coded objectives" },
];

const AGENT_ROLES: Option[] = [
    { value: "curriculum-designer", label: "Curriculum designer" },
    { value: "lesson-planner", label: "Lesson planner" },
    { value: "assessment-writer", label: "Assessment writer" },
    { value: "tutor", label: "Tutor / explainer" },
];

const ASSESSMENTS: Option[] = [
    { value: "formative", label: "Formative only (checks for understanding)" },
    { value: "summative", label: "Summative only (tests / projects)" },
    { value: "mixed", label: "Mix of formative + summative" },
    { value: "none", label: "No formal assessment" },
];

const TONES: Option[] = [
    { value: "encouraging", label: "Encouraging and practical" },
    { value: "formal", label: "Formal and academic" },
    { value: "playful", label: "Playful and energetic" },
    { value: "direct", label: "Direct and no-fluff" },
];

/* --------------------------------- form state -------------------------------- */

type CurriculumForm = {
    title: string;
    subject: string;
    grade: string;
    lessons: string;
    description: string;
    learnerIds: string[];
    learnerWho: string;
    priorKnowledge: string;
    setting: string;
    learnerNotes: string;
    lessonFormat: string;
    objectives: string;
    includeHook: boolean;
    includeDirect: boolean;
    includeGuided: boolean;
    includeIndependent: boolean;
    includeExit: boolean;
    includeVocab: boolean;
    realWorld: string;
    agentRole: string;
    capScroll: boolean;
    capResearch: boolean;
    capPlan: boolean;
    capRemind: boolean;
    capCompare: boolean;
    capReviews: boolean;
    capTrack: boolean;
    approval: string;
    guardrails: string;
    standards: string;
    materials: string;
    assessment: string;
    tone: string;
    notes: string;
    exportFormat: string;
    exportArtifact: boolean;
    exportDrive: boolean;
    exportShare: boolean;
};

const INITIAL_FORM: CurriculumForm = {
    title: "",
    subject: "",
    grade: "",
    lessons: "",
    description: "",
    learnerIds: [],
    learnerWho: "",
    priorKnowledge: "",
    setting: "",
    learnerNotes: "",
    lessonFormat: "",
    objectives: "",
    includeHook: false,
    includeDirect: false,
    includeGuided: false,
    includeIndependent: false,
    includeExit: false,
    includeVocab: false,
    realWorld: "",
    agentRole: "",
    capScroll: false,
    capResearch: false,
    capPlan: false,
    capRemind: false,
    capCompare: false,
    capReviews: false,
    capTrack: false,
    approval: "propose-only",
    guardrails: "AI proposes, the teacher disposes. Never invent state standards — ask me first.",
    standards: "",
    materials: "",
    assessment: "",
    tone: "",
    notes: "",
    exportFormat: "pdf",
    exportArtifact: false,
    exportDrive: false,
    exportShare: false,
};

/* --------------------------------- prompt build ------------------------------ */
/* Empty fields are skipped, so the prompt grows as options are chosen. */

function buildPrompt(f: CurriculumForm, learners: LearnerProfile[]): string {
    const chosenLearners = learners.filter((l) => f.learnerIds.includes(l.id));
    const learnerNames = chosenLearners
        .map(
            (l) =>
                l.name +
                (l.educationLevel ? ` (education level: ${l.educationLevel})` : ""),
        )
        .join("; ");

    const structure = [
        f.includeHook && "Hook / warm-up",
        f.includeDirect && "Direct instruction",
        f.includeGuided && "Guided practice",
        f.includeIndependent && "Independent practice",
        f.includeExit && "Exit ticket",
    ].filter(Boolean);

    const caps = [
        f.capScroll &&
            "Scroll through shopping sites (Amazon, Target, Walmart, and other stores) to find products the curriculum needs",
        f.capResearch && "Deep research — go beyond the surface to make a great curriculum",
        f.capPlan && "Make a detailed, in-depth plan for the curriculum",
        f.capRemind && "Daily planning + progress check-ins",
        f.capCompare && "Compare prices across sites and surface the best total price",
        f.capReviews && "Read product reviews and surface ratings and highlights",
        f.capTrack && "Track price drops on a chosen product and alert me",
    ].filter(Boolean);

    const lines: string[] = [
        "You are an expert curriculum designer. Create a complete, lesson-by-lesson curriculum from the specifications below.",
        "Working rule: AI proposes, the teacher disposes — present the full draft clearly so I can review and approve every part.",
        "REPLY FORMAT (most important): your entire reply must be ONE valid JSON object, as described in # HOW TO REPLY at the end. Do NOT reply in plain Markdown, and do NOT start with a Title: line.",
        "",
        "# CURRICULUM TOPIC",
    ];
    if (f.title) lines.push(`- Title: ${f.title}`);
    if (f.subject) lines.push(`- Subject area: ${labelFor(SUBJECTS, f.subject)}`);
    if (f.grade) lines.push(`- Grade level: ${labelFor(GRADES, f.grade)}`);
    if (f.lessons) lines.push(`- Number of lessons: ${f.lessons}`);
    if (f.description) lines.push(`- Overview: ${f.description}`);
    lines.push("", "# LEARNERS");
    if (learnerNames) lines.push(`- Learners: ${learnerNames}`);
    if (f.learnerWho) lines.push(`- Who: ${f.learnerWho}`);
    if (f.priorKnowledge)
        lines.push(`- Prior knowledge: ${labelFor(PRIOR_KNOWLEDGE, f.priorKnowledge)}`);
    if (f.setting) lines.push(`- Setting: ${labelFor(SETTINGS, f.setting)}`);
    if (f.learnerNotes) lines.push(`- Special considerations: ${f.learnerNotes}`);
    lines.push("", "# LESSON STRUCTURE");
    if (f.lessonFormat)
        lines.push(`- Format: ${labelFor(LESSON_FORMATS, f.lessonFormat)}`);
    if (structure.length > 0)
        lines.push(`- Every lesson includes: ${structure.join(", ")}`);
    if (f.objectives)
        lines.push(`- Objectives style: ${labelFor(OBJECTIVE_STYLES, f.objectives)}`);
    if (f.includeVocab)
        lines.push(
            "- Key vocabulary: include 5–8 key terms per lesson with student-friendly definitions.",
        );
    if (f.realWorld) lines.push(`- Real-world application: ${f.realWorld}`);
    lines.push("", "# HOW TO WORK WITH ME (AGENT)");
    if (f.agentRole)
        lines.push(`- Role: act as a ${labelFor(AGENT_ROLES, f.agentRole)}.`);
    if (caps.length > 0) lines.push(`- You may: ${caps.join("; ")}.`);
    lines.push(
        f.approval === "propose-only"
            ? "- Approval mode: propose only — I approve everything before it is final."
            : "- Approval mode: auto-apply minor edits, flag major decisions for my approval.",
    );
    if (f.guardrails) lines.push(`- Guardrails: ${f.guardrails}`);
    lines.push("", "# OTHER REQUIREMENTS");
    if (f.standards) lines.push(`- Standards alignment: ${f.standards}`);
    if (f.materials) lines.push(`- Materials available: ${f.materials}`);
    if (f.assessment)
        lines.push(`- Assessment: ${labelFor(ASSESSMENTS, f.assessment)}`);
    if (f.tone) lines.push(`- Tone: ${labelFor(TONES, f.tone)}`);
    if (f.notes) lines.push(`- Additional notes: ${f.notes}`);
    lines.push("", "# DELIVERABLE FORMAT");
    lines.push(
        `- Format: ${f.exportFormat === "docx" ? "Word (.docx)" : "PDF (.pdf)"}`,
    );
    if (f.exportArtifact)
        lines.push("- Also save it as a file artifact I can reopen anytime.");
    if (f.exportDrive)
        lines.push("- Export the finished curriculum to my Google Drive.");
    if (f.exportShare) lines.push("- Make it shareable with a view link.");
    lines.push(
        "",
        "# HOW TO REPLY — JSON ONLY",
        "Reply with ONLY one valid JSON object in exactly this shape — no text before or after it, no explanation, no markdown fences, no Title: line. It must parse with JSON.parse, so escape every quote and line break inside the strings:",
        '{ "name": "<a short title for this curriculum>", "curriculum": "<the full curriculum in Markdown, lesson by lesson>" }',
        "Example (with a short curriculum — yours must be the full one):",
        '{ "name": "Grammar Reference Poster Set for Children", "curriculum": "## Scope and Sequence\\n1. Introduction to the Grammar Poster Set (Lesson 1)\\n2. Parts of Speech — Nouns & Pronouns (Lesson 2)" }',
        "The `curriculum` value is one Markdown string: start with a Scope and Sequence, then write every lesson in full (objectives, vocabulary, activities, assessment). Use \\n for line breaks inside the string. Write it so it can be exported as the format in # DELIVERABLE FORMAT above. Do not split the curriculum into separate fields, and do not add any other keys.",
    );
    return lines.join("\n");
}

export default function CreateCurriculumPage() {
    const [form, setForm] = useState<CurriculumForm>(INITIAL_FORM);
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
        <K extends keyof CurriculumForm>(key: K) =>
        (value: CurriculumForm[K]) =>
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
        form.subject ? labelFor(SUBJECTS, form.subject) : "",
        form.grade ? labelFor(GRADES, form.grade) : "",
        form.lessons ? `${form.lessons} lessons` : "",
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

                        <span className="gradient-muse">Create a Curriculum</span>
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
                        Skip the stress of planning from a blank page. Describe what you
                        want to teach, copy the prompt into Muse, and get a structured,
                        lesson-by-lesson curriculum in seconds.
                    </p>

                </section>
            </div>

            {/* Full-width grid — sits below the hero, not nested inside it */}
            <SectionsGrid>
                <OptionSection title="Curriculum Topic">
                    <TextField
                        id="curriculum-title"
                        label="Curriculum title"
                        value={form.title}
                        onChange={update("title")}
                        placeholder="e.g. Personal Finance Basics for Teens"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <SelectField
                            id="curriculum-subject"
                            label="Subject area"
                            value={form.subject}
                            onChange={update("subject")}
                            options={SUBJECTS}
                        />
                        <SelectField
                            id="curriculum-grade"
                            label="Grade level"
                            value={form.grade}
                            onChange={update("grade")}
                            options={GRADES}
                        />
                    </div>
                    <TextField
                        id="curriculum-lessons"
                        label="Number of lessons"
                        type="number"
                        value={form.lessons}
                        onChange={update("lessons")}
                        placeholder="e.g. 8"
                    />
                    <TextareaField
                        id="curriculum-description"
                        label="Brief description"
                        rows={4}
                        value={form.description}
                        onChange={update("description")}
                        placeholder="What should this curriculum teach, and how?"
                    />
                </OptionSection>
                <OptionSection title="Personalized Learners">
                    {learners.length > 0 ? (
                        <LearnerPicker
                            learners={learners}
                            selectedIds={form.learnerIds}
                            onChange={update("learnerIds")}
                        />
                    ) : (
                        <p className="text-sm leading-relaxed text-slate-600">
                            No saved learners yet.{" "}
                            <Link href="/learners" className="font-medium text-blue-600 underline">
                                Add learners
                            </Link>{" "}
                            and they will show up here to pick from — or describe
                            the learners below instead.
                        </p>
                    )}
                    <TextField
                        id="learner-who"
                        label="Who are the learners?"
                        value={form.learnerWho}
                        onChange={update("learnerWho")}
                        placeholder="e.g. 28 high school students, mixed ability levels"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <SelectField
                            id="learner-prior"
                            label="Prior knowledge"
                            value={form.priorKnowledge}
                            onChange={update("priorKnowledge")}
                            options={PRIOR_KNOWLEDGE}
                        />
                        <SelectField
                            id="learner-setting"
                            label="Class setting"
                            value={form.setting}
                            onChange={update("setting")}
                            options={SETTINGS}
                        />
                    </div>
                    <TextareaField
                        id="learner-notes"
                        label="Special considerations"
                        rows={3}
                        value={form.learnerNotes}
                        onChange={update("learnerNotes")}
                        placeholder="IEPs, ELL needs, reading levels, interests — anything Muse should adapt to."
                    />
                </OptionSection>
                <OptionSection title="Lesson Description">
                    <div className="grid grid-cols-2 gap-4">
                        <SelectField
                            id="lesson-format"
                            label="Lesson format"
                            value={form.lessonFormat}
                            onChange={update("lessonFormat")}
                            options={LESSON_FORMATS}
                        />
                        <SelectField
                            id="lesson-objectives"
                            label="Objectives style"
                            value={form.objectives}
                            onChange={update("objectives")}
                            options={OBJECTIVE_STYLES}
                        />
                    </div>
                    <Field label="Every lesson includes">
                        <div className="space-y-2.5 rounded-lg border border-slate-200 px-3 py-3">
                            <CheckRow
                                id="struct-hook"
                                label="Hook / warm-up"
                                checked={form.includeHook}
                                onChange={update("includeHook")}
                            />
                            <CheckRow
                                id="struct-direct"
                                label="Direct instruction"
                                checked={form.includeDirect}
                                onChange={update("includeDirect")}
                            />
                            <CheckRow
                                id="struct-guided"
                                label="Guided practice"
                                checked={form.includeGuided}
                                onChange={update("includeGuided")}
                            />
                            <CheckRow
                                id="struct-independent"
                                label="Independent practice"
                                checked={form.includeIndependent}
                                onChange={update("includeIndependent")}
                            />
                            <CheckRow
                                id="struct-exit"
                                label="Exit ticket"
                                checked={form.includeExit}
                                onChange={update("includeExit")}
                            />
                        </div>
                    </Field>
                    <CheckRow
                        id="lesson-vocab"
                        label="Include key vocabulary"
                        hint="5–8 key terms per lesson with student-friendly definitions."
                        checked={form.includeVocab}
                        onChange={update("includeVocab")}
                    />
                    <TextareaField
                        id="lesson-realworld"
                        label="Real-world application"
                        rows={3}
                        value={form.realWorld}
                        onChange={update("realWorld")}
                        placeholder="e.g. Every lesson ends with a real-world task — build a sample monthly budget from a $1,250 paycheck."
                    />
                </OptionSection>
                <OptionSection title="Agentic Capabilities">
                    <SelectField
                        id="agent-role"
                        label="Agent role"
                        hint="The persona Muse takes when generating your curriculum."
                        value={form.agentRole}
                        onChange={update("agentRole")}
                        options={AGENT_ROLES}
                    />
                    <Field label="What the agent may do">
                        <div className="space-y-2.5 rounded-lg border border-slate-200 px-3 py-3">
                            <CheckRow
                                id="agent-scroll"
                                label="Scroll through shopping sites"
                                hint="Browse product listings on Amazon, Target, Walmart, and other stores to find what you need."
                                checked={form.capScroll}
                                onChange={update("capScroll")}
                            />
                            <CheckRow
                                id="deep-track"
                                label="Deep Research"
                                hint="Go beyond the surface and do detailed, extensive research to make a great curriculum."
                                checked={form.capResearch}
                                onChange={update("capResearch")}
                            />
                            <CheckRow
                                id="plan-curriculum"
                                label="Make a detailed, in-depth plan for the curriculum"
                                hint="Create a comprehensive plan for your curriculum."
                                checked={form.capPlan}
                                onChange={update("capPlan")}
                            />
                            <CheckRow
                                id="remind-me"
                                label="Daily planning + progress check-ins"
                                hint="Get daily reminders and guidance to keep your curriculum on track."
                                checked={form.capRemind}
                                onChange={update("capRemind")}
                            />
                            <CheckRow
                                id="agent-compare"
                                label="Compare prices across sites"
                                hint="Check the same product on multiple sites and surface the best total price."
                                checked={form.capCompare}
                                onChange={update("capCompare")}
                            />
                            <CheckRow
                                id="agent-reviews"
                                label="Read product reviews"
                                hint="Pull ratings and review highlights so you can judge quality fast."
                                checked={form.capReviews}
                                onChange={update("capReviews")}
                            />
                            <CheckRow
                                id="agent-track"
                                label="Track price drops"
                                hint="Watch a product the Agent chooses and alert you when the price falls."
                                checked={form.capTrack}
                                onChange={update("capTrack")}
                            />
                        </div>
                    </Field>
                    <Field label="Approval mode">
                        <RadioRow
                            name="approval"
                            value={form.approval}
                            onChange={update("approval")}
                            options={[
                                {
                                    value: "propose-only",
                                    label: "Propose only — I approve everything",
                                    hint: "Nothing is final until you say so.",
                                },
                                {
                                    value: "auto-minor",
                                    label: "Auto-apply minor edits",
                                    hint: "Small fixes go through; big decisions get flagged.",
                                },
                            ]}
                        />
                    </Field>
                    <TextareaField
                        id="agent-guardrails"
                        label="Guardrails"
                        rows={3}
                        value={form.guardrails}
                        onChange={update("guardrails")}
                    />
                </OptionSection>
                <OptionSection title="Other Information">
                    <TextField
                        id="other-standards"
                        label="Standards alignment"
                        value={form.standards}
                        onChange={update("standards")}
                        placeholder="e.g. Jump$tart National Standards for Personal Finance"
                    />
                    <TextField
                        id="other-materials"
                        label="Materials available"
                        value={form.materials}
                        onChange={update("materials")}
                        placeholder="e.g. Chromebooks (1:1), projector, printed worksheets"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <SelectField
                            id="other-assessment"
                            label="Assessment preference"
                            value={form.assessment}
                            onChange={update("assessment")}
                            options={ASSESSMENTS}
                        />
                        <SelectField
                            id="other-tone"
                            label="Tone"
                            value={form.tone}
                            onChange={update("tone")}
                            options={TONES}
                        />
                    </div>
                    <TextareaField
                        id="other-notes"
                        label="Anything else"
                        rows={3}
                        value={form.notes}
                        onChange={update("notes")}
                        placeholder="Anything else Muse should know."
                    />
                </OptionSection>
                <OptionSection title="Export Details">
                    <Field label="File format">
                        <RadioRow
                            name="export-format"
                            value={form.exportFormat}
                            onChange={update("exportFormat")}
                            options={[
                                { value: "pdf", label: "PDF (.pdf)" },
                                { value: "docx", label: "Word (.docx)" },
                            ]}
                        />
                    </Field>
                    <Field label="After Muse generates it">
                        <div className="space-y-2.5 rounded-lg border border-slate-200 px-3 py-3">
                            <CheckRow
                                id="export-artifact"
                                label="Save as file artifact"
                                hint="Generate a polished file and keep it as a saved artifact you can reopen anytime."
                                checked={form.exportArtifact}
                                onChange={update("exportArtifact")}
                            />
                            <CheckRow
                                id="export-drive"
                                label="Export to Google Drive"
                                hint="Upload the finished curriculum straight to your Google Drive."
                                checked={form.exportDrive}
                                onChange={update("exportDrive")}
                            />
                            <CheckRow
                                id="export-share"
                                label="Make shareable"
                                hint="Create a share link anyone with the link can view."
                                checked={form.exportShare}
                                onChange={update("exportShare")}
                            />
                        </div>
                    </Field>
                    <p className="text-xs leading-relaxed text-slate-500">
                        These tell Muse what to produce. The finished file
                        itself is created when you paste Muse&apos;s answer
                        back below and save it here.
                    </p>
                </OptionSection>
            </SectionsGrid>

            <PillButton onClick={copyPrompt}>
                {copied ? "Copied!" : "Copy Prompt"}
            </PillButton>
            {copyFailed ? (
                <p className="mt-2 text-sm text-red-600">
                    Copy didn&apos;t work in this browser — the prompt is built
                    from the sections above; try selecting it from the page or
                    use HTTPS.
                </p>
            ) : null}

            <AgentCurriculumPasteBackSection
                fallbackName={form.title || "Untitled curriculum"}
                detail={savedDetail}
                pastePlaceholder={"Paste Muse's JSON reply here — { \"name\": \"...\", \"curriculum\": \"...\" } — or upload the reply as a file below, then save it."}
            />
        </div>
    );
}

// Also exported by name, so both `import CreateCurriculumPage from ...` and
// `import { CreateCurriculumPage } from ...` resolve.
export { CreateCurriculumPage };
