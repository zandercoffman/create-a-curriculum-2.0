"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { slugify } from "@/lib/prompts/custom-store"
import { buildGeneratorPrompt } from "@/lib/prompts/generator-template"
import type { PromptSchema, VariableType } from "@/lib/prompts/types"
import { Check, Copy, Sparkles } from "lucide-react"

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

/** Strip markdown fences in case the AI wraps the JSON despite the instructions. */
function cleanJson(text: string): string {
  return text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")
}

function parseImportedPrompt(jsonText: string): PromptSchema {
  let data: unknown
  try {
    data = JSON.parse(cleanJson(jsonText))
  } catch {
    throw new Error(
      "That doesn't look like valid JSON — make sure you copied the AI's entire output."
    )
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new Error("The output must be a single PromptSchema JSON object.")
  }
  const d = data as Record<string, unknown>
  for (const field of [
    "displayTitle",
    "displayDescription",
    "id",
    "prompt",
    "description",
    "category",
    "variables",
  ]) {
    if (typeof d[field] === "undefined" || d[field] === null) {
      throw new Error(`The JSON is missing the "${field}" field.`)
    }
  }

  const variables = d.variables as Record<string, Record<string, unknown>>
  if (typeof variables !== "object" || Array.isArray(variables)) {
    throw new Error(`The "variables" field must be an object.`)
  }
  for (const [key, v] of Object.entries(variables)) {
    if (
      typeof v.label !== "string" ||
      typeof v.question !== "string" ||
      !VARIABLE_TYPES.includes(v.type as VariableType)
    ) {
      throw new Error(
        `Variable "${key}" is missing a label, question, or valid type.`
      )
    }
    if (
      v.type === "select" &&
      (!Array.isArray(v.options) || v.options.length === 0)
    ) {
      throw new Error(`Select variable "${key}" needs an options array.`)
    }
  }

  const category = String(d.category)
  return {
    displayTitle: String(d.displayTitle),
    displayDescription: String(d.displayDescription),
    id: slugify(String(d.id)),
    prompt: String(d.prompt),
    description: String(d.description),
    category: KNOWN_CATEGORIES.includes(category) ? category : "custom",
    variables: variables as PromptSchema["variables"],
  }
}

interface GeneratePromptDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Called with the parsed prompt — the parent opens it in the builder for review. */
  onImport: (prompt: PromptSchema) => void
}

export default function GeneratePromptDialog({
  open,
  onOpenChange,
  onImport,
}: GeneratePromptDialogProps) {
  const [idea, setIdea] = useState("")
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [jsonText, setJsonText] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleCopyPrompt = async () => {
    if (!idea.trim()) return
    const full = buildGeneratorPrompt(idea)
    setGeneratedPrompt(full)
    setCopied(false)
    try {
      await navigator.clipboard.writeText(full)
      setCopied(true)
    } catch {
      // clipboard unavailable — the user can copy from the box below
    }
  }

  const handleImport = () => {
    setError(null)
    if (!jsonText.trim()) {
      setError("Paste the AI's JSON output first.")
      return
    }
    try {
      onImport(parseImportedPrompt(jsonText))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't parse that JSON.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="size-6 text-rose-500" />
            Generate with AI
          </DialogTitle>
          <DialogDescription>
            Describe your idea, copy the generator prompt, run it in any AI,
            then paste the JSON back here.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-2">
          {/* Step 1 */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="gp-idea" className="text-base font-semibold">
              1. Describe your idea
            </Label>
            <Textarea
              id="gp-idea"
              rows={5}
              placeholder={"Bullet points are fine, e.g.\n- a workout planner for busy parents\n- asks fitness level + days per week\n- outputs a weekly schedule table"}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <div>
              <Button
                type="button"
                onClick={handleCopyPrompt}
                disabled={!idea.trim()}
                className="rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600 disabled:opacity-50"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 size-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 size-4" />
                    Copy generator prompt
                  </>
                )}
              </Button>
            </div>
            {generatedPrompt && (
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs text-muted-foreground">
                  Paste this into any AI chat:
                </Label>
                <pre className="max-h-56 overflow-y-auto whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs text-slate-700">
                  {generatedPrompt}
                </pre>
              </div>
            )}
          </div>

          <div className="border-t border-slate-100" />

          {/* Step 2 */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="gp-json" className="text-base font-semibold">
              2. Paste the AI&apos;s JSON output
            </Label>
            <Textarea
              id="gp-json"
              rows={7}
              className="font-mono text-xs"
              placeholder='{"displayTitle": "...", ...}'
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
            />
            <div>
              <Button
                type="button"
                onClick={handleImport}
                disabled={!jsonText.trim()}
                className="rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600 disabled:opacity-50"
              >
                Review &amp; import
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              It&apos;ll open in the prompt builder so you can review and tweak
              it before saving.
            </p>
          </div>

          {error && (
            <p className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm font-medium text-rose-600">
              {error}
            </p>
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
