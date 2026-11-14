
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Textarea } from "@/components/ui/textarea"
import { slugify } from "@/lib/prompts/custom-store"
import { buildGeneratorPrompt } from "@/lib/prompts/generator-template"
import type { PromptSchema, VariableType } from "@/lib/prompts/types"
import {
    Check,
    Copy,
    Sparkles,
    ArrowLeft,
    ArrowRight,
    ClipboardPaste,
    X,
} from "lucide-react"

const KNOWN_CATEGORIES = [
    "curriculum",
    "shopping",
    "learning",
    "studying",
    "planning",
    "activities",
]

const VARIABLE_TYPES: VariableType[] = [
    "text",
    "textarea",
    "number",
    "date",
    "select",
    "boolean",
]


function cleanJson(text: string): string {
    let cleaned = text.trim()

    // Remove Markdown code fences
    cleaned = cleaned
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/i, "")

    // Decode common HTML entities
    cleaned = cleaned
        .replace(/&#x20;/gi, " ")
        .replace(/&quot;/gi, '"')
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")

    // Remove any text before the first JSON object
    const firstBrace = cleaned.indexOf("{")

    if (firstBrace === -1) {
        throw new Error("No JSON object found in the response.")
    }

    cleaned = cleaned.slice(firstBrace)

    // Remove any text after the final JSON object
    const lastBrace = cleaned.lastIndexOf("}")

    if (lastBrace === -1) {
        throw new Error("Incomplete JSON object.")
    }

    cleaned = cleaned.slice(0, lastBrace + 1)

    return cleaned.trim()
}


function parseImportedPrompt(jsonText: string): PromptSchema {
    let data: unknown

    try {
        data = JSON.parse(cleanJson(jsonText))
    } catch {
        throw new Error(
            "Invalid JSON. Copy the complete response from your AI and try again."
        )
    }

    if (
        typeof data !== "object" ||
        data === null ||
        Array.isArray(data)
    ) {
        throw new Error("The AI response must be a single JSON object.")
    }

    const d = data as Record<string, unknown>

    const requiredFields = [
        "displayTitle",
        "displayDescription",
        "id",
        "prompt",
        "description",
        "category",
        "variables",
    ]

    for (const field of requiredFields) {
        if (d[field] === undefined || d[field] === null) {
            throw new Error(`The response is missing "${field}".`)
        }
    }

    const variables = d.variables

    if (
        typeof variables !== "object" ||
        variables === null ||
        Array.isArray(variables)
    ) {
        throw new Error('"variables" must be an object.')
    }

    for (const [key, value] of Object.entries(variables)) {
        if (
            typeof value !== "object" ||
            value === null ||
            Array.isArray(value)
        ) {
            throw new Error(`Variable "${key}" is invalid.`)
        }

        const v = value as Record<string, unknown>

        if (
            typeof v.label !== "string" ||
            typeof v.question !== "string" ||
            !VARIABLE_TYPES.includes(v.type as VariableType)
        ) {
            throw new Error(
                `Variable "${key}" needs a label, question, and valid type.`
            )
        }

        if (
            v.type === "select" &&
            (!Array.isArray(v.options) ||
                v.options.length === 0 ||
                !v.options.every(option => typeof option === "string"))
        ) {
            throw new Error(
                `Select variable "${key}" needs valid options.`
            )
        }
    }

    const stringFields = [
        "displayTitle",
        "displayDescription",
        "id",
        "prompt",
        "description",
        "category",
    ]

    for (const field of stringFields) {
        if (typeof d[field] !== "string") {
            throw new Error(`"${field}" must be a string.`)
        }
    }

    const category = d.category as string

    return {
        displayTitle: d.displayTitle as string,
        displayDescription: d.displayDescription as string,
        id: slugify(d.id as string),
        prompt: d.prompt as string,
        description: d.description as string,
        category: KNOWN_CATEGORIES.includes(category)
            ? category
            : "custom",
        variables: variables as PromptSchema["variables"],
    }
}

async function copyText(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text)
            return true
        }
    } catch {
        // Try fallback below.
    }

    try {
        const textarea = document.createElement("textarea")

        textarea.value = text
        textarea.readOnly = true
        textarea.style.position = "fixed"
        textarea.style.left = "-9999px"
        textarea.style.top = "0"

        document.body.appendChild(textarea)
        textarea.select()
        textarea.setSelectionRange(0, text.length)

        const success = document.execCommand("copy")

        document.body.removeChild(textarea)

        return success
    } catch {
        return false
    }
}

interface GeneratePromptDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onCreate: (prompt: PromptSchema) => void
}

export default function GeneratePromptDrawer({
    open,
    onOpenChange,
    onCreate,
}: GeneratePromptDrawerProps) {
    const [step, setStep] = useState<1 | 2>(1)

    const [idea, setIdea] = useState("")
    const [generatedPrompt, setGeneratedPrompt] = useState("")
    const [jsonText, setJsonText] = useState("")

    const [copied, setCopied] = useState(false)
    const [copyFailed, setCopyFailed] = useState(false)
    const [error, setError] = useState<string | null>(null)

    function resetDrawer() {
        setStep(1)
        setIdea("")
        setGeneratedPrompt("")
        setJsonText("")
        setCopied(false)
        setCopyFailed(false)
        setError(null)
    }

    function handleOpenChange(nextOpen: boolean) {
        if (!nextOpen) {
            resetDrawer()
        }

        onOpenChange(nextOpen)
    }

    async function handleGenerate() {
        if (!idea.trim()) return

        setError(null)

        const prompt = buildGeneratorPrompt(idea.trim())

        setGeneratedPrompt(prompt)

        const success = await copyText(prompt)

        setCopied(success)
        setCopyFailed(!success)

        // Always advance, even if clipboard access fails.
        // The user can manually copy the displayed prompt.
        setStep(2)
    }

    async function handleCopyAgain() {
        if (!generatedPrompt) return

        const success = await copyText(generatedPrompt)

        setCopied(success)
        setCopyFailed(!success)
    }

    function handleCreate() {
        setError(null)

        if (!jsonText.trim()) {
            setError("Paste the AI's response first.")
            return
        }

        try {
            const prompt = parseImportedPrompt(jsonText)

            onCreate(prompt)

            resetDrawer()
            onOpenChange(false)
        } catch (e) {
            setError(
                e instanceof Error
                    ? e.message
                    : "Something went wrong. Check your AI response."
            )
        }
    }

    return (
        <Drawer open={open} onOpenChange={handleOpenChange}>
            <DrawerContent
                className="
                    mx-auto
                    flex
                    max-h-[90dvh]
                    w-full
                    lg:w-[50vw]
                    lg:max-w-none
                    max-w-lg
                    flex-col
                    overflow-hidden
                    rounded-t-[1.75rem]
                    border-zinc-200
                    bg-white
                    px-5
                    pb-[max(1rem,env(safe-area-inset-bottom))]
                    dark:border-zinc-800
                    dark:bg-zinc-950
                "
            >
                {/* Header */}
                <DrawerHeader className="shrink-0 px-0 pb-4 pt-3">
                    <div className="flex items-center justify-between">
                        <DrawerTitle className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-zinc-100">
                            <Sparkles className="size-5 text-rose-500" />
                            Generate with AI
                        </DrawerTitle>

                        <DrawerClose>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="size-9 rounded-full text-slate-500 dark:text-zinc-400"
                                aria-label="Close drawer"
                            >
                                <X className="size-5" />
                            </Button>
                        </DrawerClose>
                    </div>

                    <DrawerDescription className="text-left text-sm leading-relaxed text-muted-foreground">
                        Turn an idea into a reusable AI prompt in two
                        simple steps.
                    </DrawerDescription>

                    {/* Progress */}
                    <div className="mt-4 flex items-center gap-2">
                        <div
                            className={`h-1.5 flex-1 rounded-full transition-colors ${
                                step >= 1
                                    ? "bg-rose-500"
                                    : "bg-zinc-200 dark:bg-zinc-800"
                            }`}
                        />

                        <div
                            className={`h-1.5 flex-1 rounded-full transition-colors ${
                                step >= 2
                                    ? "bg-rose-500"
                                    : "bg-zinc-200 dark:bg-zinc-800"
                            }`}
                        />
                    </div>

                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1. Describe your idea</span>
                        <span>2. Create prompt</span>
                    </div>
                </DrawerHeader>

                {/* Scrollable content */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-4">

                    {step === 1 ? (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">
                                    What do you want to create?
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Describe your idea. It doesn&apos;t need
                                    to be perfect. Just explain what
                                    you&apos;re looking for.
                                </p>
                            </div>

                            <Textarea
                                id="gp-idea"
                                rows={5}
                                value={idea}
                                onChange={(e) => setIdea(e.target.value)}
                                placeholder={
                                    "Example:\n\nI want a workout planner for beginners.\n\n- Asks about fitness level\n- Asks how many days per week\n- Creates a weekly workout schedule"
                                }
                                className="
                                    min-h-32
                                    resize-y
                                    rounded-2xl
                                    border-zinc-200
                                    bg-zinc-50
                                    p-4
                                    text-base
                                    text-slate-900
                                    placeholder:text-zinc-400
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-zinc-100
                                "
                            />

                            <Button
                                type="button"
                                onClick={handleGenerate}
                                disabled={!idea.trim()}
                                className="
                                    h-12
                                    w-full
                                    rounded-full
                                    bg-rose-500
                                    text-white
                                    hover:bg-rose-600
                                "
                            >
                                <Copy className="mr-2 size-4" />
                                Generate & Copy AI Prompt
                                <ArrowRight className="ml-2 size-4" />
                            </Button>

                            <p className="text-center text-xs text-muted-foreground">
                                Your prompt will be copied so you can
                                paste it into ChatGPT or another AI.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">

                            {/* Success / instructions */}
                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/30">
                                <div className="flex items-center gap-2">
                                    {copied ? (
                                        <Check className="size-5 text-emerald-600 dark:text-emerald-400" />
                                    ) : (
                                        <Copy className="size-5 text-emerald-600 dark:text-emerald-400" />
                                    )}

                                    <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                                        {copied
                                            ? "AI prompt copied!"
                                            : "Your AI prompt is ready"}
                                    </p>
                                </div>

                                <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
                                    {copyFailed
                                        ? "Automatic copying didn't work. Copy the prompt below manually."
                                        : "Open your AI chat, paste the prompt, and send it. Then return here with the AI's complete response."}
                                </p>
                            </div>

                            {/* Generated prompt */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="gp-generated"
                                        className="text-sm font-semibold text-slate-900 dark:text-zinc-100"
                                    >
                                        Your generator prompt
                                    </label>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={handleCopyAgain}
                                        className="h-8 rounded-full"
                                    >
                                        {copied ? (
                                            <Check className="mr-1.5 size-3.5" />
                                        ) : (
                                            <Copy className="mr-1.5 size-3.5" />
                                        )}
                                        Copy again
                                    </Button>
                                </div>

                                <Textarea
                                    id="gp-generated"
                                   
                                    readOnly
                                    rows={5}
                                    value={generatedPrompt}
                                    onFocus={(e) => e.target.select()}
                                    className="
                                        resize-none
                                        rounded-2xl
                                        bg-zinc-50
                                        font-mono
                                        text-xs
                                        max-h-50
                                        text-zinc-700
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-zinc-300
                                    "
                                />
                            </div>

                            {/* AI response */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <ClipboardPaste className="size-4 text-rose-500" />
                                    <label
                                        htmlFor="gp-json"
                                        className="text-sm font-semibold text-slate-900 dark:text-zinc-100"
                                    >
                                        Paste the AI&apos;s response
                                    </label>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    Copy everything the AI generated
                                    and paste it below.
                                </p>

                                <Textarea
                                    id="gp-json"
                                    rows={7}
                                    value={jsonText}
                                    onChange={(e) => {
                                        setJsonText(e.target.value)
                                        setError(null)
                                    }}
                                    placeholder='Paste the complete JSON response here...'
                                    className="
                                        min-h-40
                                        rounded-2xl
                                        border-zinc-200
                                        bg-zinc-50
                                        p-4
                                        font-mono
                                        text-sm
                                        text-slate-900
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-zinc-100
                                    "
                                />
                            </div>

                            {/* Validation error */}
                            {error && (
                                <div
                                    role="alert"
                                    className="
                                        rounded-xl
                                        border
                                        border-rose-200
                                        bg-rose-50
                                        p-3
                                        text-sm
                                        text-rose-700
                                        dark:border-rose-900/50
                                        dark:bg-rose-950/30
                                        dark:text-rose-400
                                    "
                                >
                                    {error}
                                </div>
                            )}

                            {/* Create */}
                            <Button
                                type="button"
                                onClick={handleCreate}
                                disabled={!jsonText.trim()}
                                className="
                                    h-12
                                    w-full
                                    rounded-full
                                    bg-rose-500
                                    text-white
                                    hover:bg-rose-600
                                "
                            >
                                <Sparkles className="mr-2 size-4" />
                                Create My Prompt
                            </Button>

                            {/* Go back */}
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => {
                                    setStep(1)
                                    setError(null)
                                }}
                                className="w-full rounded-full text-muted-foreground"
                            >
                                <ArrowLeft className="mr-2 size-4" />
                                Back to my idea
                            </Button>
                        </div>
                    )}
                </div>

                <DrawerFooter className="shrink-0 border-t border-zinc-100 px-0 pb-0 pt-3 dark:border-zinc-800">
                    <DrawerClose >
                        <Button
                            type="button"
                            variant="ghost"
                            className="w-full rounded-full text-muted-foreground"
                        >
                            Close
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
