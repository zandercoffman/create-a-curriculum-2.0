"use client"

import { useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { slugify } from "@/lib/prompts/custom-store"
import type {
  PromptSchema,
  PromptVariable,
  VariableType,
} from "@/lib/prompts/types"
import { cn } from "@/lib/utils"
import { Plus, Trash2 } from "lucide-react"

const VARIABLE_TYPES: VariableType[] = [
  "text",
  "textarea",
  "number",
  "date",
  "select",
  "boolean",
]

type VariableDraft = {
  key: string
  label: string
  question: string
  type: VariableType
  placeholder: string
  optionsText: string
  required: boolean
}

type FormState = {
  displayTitle: string
  id: string
  idTouched: boolean
  displayDescription: string
  description: string
  promptText: string
  variables: VariableDraft[]
  error: string | null
}

function toCamelCase(label: string): string {
  const words = label
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
  return words
    .map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join("")
}

const blankVariable = (): VariableDraft => ({
  key: "",
  label: "",
  question: "",
  type: "text",
  placeholder: "",
  optionsText: "",
  required: true,
})

function seedFrom(initial: PromptSchema | null): FormState {
  return {
    displayTitle: initial?.displayTitle ?? "",
    id: initial?.id ?? "",
    idTouched: initial !== null,
    displayDescription: initial?.displayDescription ?? "",
    description: initial?.description ?? "",
    promptText: initial?.prompt ?? "",
    variables: initial
      ? Object.entries(initial.variables).map(([key, v]) => ({
          key,
          label: v.label,
          question: v.question,
          type: v.type,
          placeholder: v.placeholder ?? "",
          optionsText: (v.options ?? []).join(", "),
          required: v.required ?? true,
        }))
      : [],
    error: null,
  }
}

interface CustomPromptDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Pass a prompt to edit it, or null to create a new one. */
  initial: PromptSchema | null
  /** "create" for new or imported prompts, "edit" for saved ones. Defaults to "create". */
  mode?: "create" | "edit"
  onSave: (prompt: PromptSchema) => void
}

export default function CustomPromptDialog({
  open,
  onOpenChange,
  initial,
  mode = "create",
  onSave,
}: CustomPromptDialogProps) {
  // NOTE: the parent remounts this dialog via `key` every time it opens,
  // so this lazy initial state is always fresh — no reset effect needed.
  const [form, setForm] = useState<FormState>(() => seedFrom(initial))
  const patch = (p: Partial<FormState>) =>
    setForm((f) => ({ ...f, ...p }))
  const promptRef = useRef<HTMLTextAreaElement>(null)

  // Auto-generate the id from the title until the user edits it manually
  const handleTitleChange = (value: string) => {
    patch({
      displayTitle: value,
      ...(form.idTouched ? {} : { id: slugify(value) }),
    })
  }

  const updateVariable = (index: number, vpatch: Partial<VariableDraft>) => {
    patch({
      variables: form.variables.map((v, i) =>
        i === index ? { ...v, ...vpatch } : v
      ),
    })
  }

  const removeVariable = (index: number) => {
    patch({ variables: form.variables.filter((_, i) => i !== index) })
  }

  /** Insert a {key} placeholder at the cursor position in the prompt body. */
  const insertVariableAtCursor = (key: string) => {
    const el = promptRef.current
    const token = `{${key}}`
    const text = form.promptText
    if (!el) {
      patch({ promptText: text + token })
      return
    }
    const start = el.selectionStart ?? text.length
    const end = el.selectionEnd ?? text.length
    patch({ promptText: text.slice(0, start) + token + text.slice(end) })
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(start + token.length, start + token.length)
    })
  }

  const usedPlaceholders = useMemo(() => {
    const matches = form.promptText.match(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g) ?? []
    return matches.map((m) => m.slice(1, -1))
  }, [form.promptText])

  const handleSave = () => {
    const { displayTitle, id, promptText, variables } = form

    if (!displayTitle.trim()) {
      patch({ error: "Give your prompt a title." })
      return
    }
    const finalId = slugify(id || displayTitle)
    if (!promptText.trim()) {
      patch({
        error:
          "Write the prompt body — that's the actual instruction the AI will follow.",
      })
      return
    }

    const builtVariables: Record<string, PromptVariable> = {}
    for (const v of variables) {
      const key = v.key.trim()
      if (!key) {
        patch({ error: "Every variable needs a key (e.g. topic)." })
        return
      }
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key)) {
        patch({
          error: `Variable key "${key}" isn't valid — use letters, numbers, and underscores.`,
        })
        return
      }
      if (builtVariables[key]) {
        patch({
          error: `Two variables use the key "${key}" — keys must be unique.`,
        })
        return
      }
      if (!v.label.trim() || !v.question.trim()) {
        patch({ error: `Variable "${key}" needs a label and a question.` })
        return
      }
      const variable: PromptVariable = {
        label: v.label.trim(),
        question: v.question.trim(),
        type: v.type,
        required: v.required,
      }
      if (v.placeholder.trim()) variable.placeholder = v.placeholder.trim()
      if (v.type === "select") {
        const options = v.optionsText
          .split(",")
          .map((o) => o.trim())
          .filter(Boolean)
        if (options.length === 0) {
          patch({
            error: `Variable "${key}" is a select — add at least one option.`,
          })
          return
        }
        variable.options = options
      }
      builtVariables[key] = variable
    }

    const missing = usedPlaceholders.filter((p) => !builtVariables[p])
    if (missing.length > 0) {
      patch({
        error: `Your prompt uses {${missing[0]}} but there's no variable with that key — add it below or fix the placeholder.`,
      })
      return
    }

    onSave({
      displayTitle: displayTitle.trim(),
      displayDescription: form.displayDescription.trim() || displayTitle.trim(),
      id: finalId,
      prompt: promptText,
      description:
        form.description.trim() ||
        form.displayDescription.trim() ||
        displayTitle.trim(),
      category: "custom",
      variables: builtVariables,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {mode === "edit" ? "Edit custom prompt" : "New custom prompt"}
          </DialogTitle>
          <DialogDescription>
            Build a reusable prompt right here. Add variables for anything
            you want to fill in each time you use it, then drop them into
            the prompt body as {"{placeholders}"}.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-2">
          {/* Basics */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="cp-title">Title</Label>
                <Input
                  id="cp-title"
                  placeholder="e.g. Lesson Plan From a Topic"
                  value={form.displayTitle}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="cp-id">URL id</Label>
                <Input
                  id="cp-id"
                  placeholder="lesson-plan-from-a-topic"
                  value={form.id}
                  onChange={(e) =>
                    patch({ id: e.target.value, idTouched: true })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cp-display">Short description (shown on the card)</Label>
              <Input
                id="cp-display"
                placeholder="What does this prompt do, in one line?"
                value={form.displayDescription}
                onChange={(e) => patch({ displayDescription: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cp-desc">Full description (optional)</Label>
              <Textarea
                id="cp-desc"
                rows={2}
                placeholder="A longer explanation of what the prompt generates…"
                value={form.description}
                onChange={(e) => patch({ description: e.target.value })}
              />
            </div>
          </div>

          {/* Prompt body */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cp-prompt">Prompt</Label>
            {form.variables.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pb-1">
                {form.variables
                  .filter((v) => v.key.trim())
                  .map((v) => (
                    <button
                      key={v.key}
                      type="button"
                      onClick={() => insertVariableAtCursor(v.key.trim())}
                      className="cursor-pointer rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 transition hover:bg-rose-100"
                      title={`Insert {${v.key.trim()}} at cursor`}
                    >
                      + {"{" + v.key.trim() + "}"}
                    </button>
                  ))}
              </div>
            )}
            <Textarea
              id="cp-prompt"
              ref={promptRef}
              rows={10}
              className="font-mono text-sm"
              placeholder={"Act as…\n\nWrite the full instruction the AI should follow. Use {placeholders} for anything the user fills in each time."}
              value={form.promptText}
              onChange={(e) => patch({ promptText: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">
              Tip: tap a chip above to insert that variable at your cursor.
              Every {"{placeholder}"} must match a variable below.
            </p>
          </div>

          {/* Variables */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">Variables</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() =>
                  patch({ variables: [...form.variables, blankVariable()] })
                }
              >
                <Plus className="mr-1 size-4" />
                Add variable
              </Button>
            </div>

            {form.variables.length === 0 && (
              <p className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-muted-foreground">
                No variables yet — this prompt will run exactly as written.
                Add one for anything you want to customize each run, like a
                topic, tone, or length.
              </p>
            )}

            {form.variables.map((v, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label>Label</Label>
                    <Input
                      placeholder="e.g. Topic"
                      value={v.label}
                      onChange={(e) => {
                        const label = e.target.value
                        updateVariable(i, {
                          label,
                          key: v.key || toCamelCase(label),
                        })
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label>Key</Label>
                    <Input
                      placeholder="topic"
                      className="font-mono"
                      value={v.key}
                      onChange={(e) => updateVariable(i, { key: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label>Question (asked when the prompt runs)</Label>
                  <Input
                    placeholder="e.g. What topic should this cover?"
                    value={v.question}
                    onChange={(e) =>
                      updateVariable(i, { question: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label>Type</Label>
                    <Select
                      value={v.type}
                      onValueChange={(val) => {
                        if (val) updateVariable(i, { type: val })
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {VARIABLE_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label>Placeholder (optional)</Label>
                    <Input
                      placeholder="e.g. Photosynthesis"
                      value={v.placeholder}
                      onChange={(e) =>
                        updateVariable(i, { placeholder: e.target.value })
                      }
                    />
                  </div>
                </div>

                {v.type === "select" && (
                  <div className="flex flex-col gap-1.5">
                    <Label>Options (comma-separated)</Label>
                    <Input
                      placeholder="Beginner, Intermediate, Advanced"
                      value={v.optionsText}
                      onChange={(e) =>
                        updateVariable(i, { optionsText: e.target.value })
                      }
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={v.required}
                      onChange={(e) =>
                        updateVariable(i, { required: e.target.checked })
                      }
                      className="size-4 accent-rose-500"
                    />
                    Required
                  </label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                    onClick={() => removeVariable(i)}
                  >
                    <Trash2 className="mr-1 size-4" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {form.error && (
            <p className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm font-medium text-rose-600">
              {form.error}
            </p>
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            className={cn(
              "rounded-full bg-rose-500 px-6 text-white hover:bg-rose-600"
            )}
          >
            {mode === "edit" ? "Save changes" : "Create prompt"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
