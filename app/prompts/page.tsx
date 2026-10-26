"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomPromptDialog from "@/components/prompts/custom-prompt-dialog/CustomPromptDialog"
import GeneratePromptDialog from "@/components/prompts/generate-prompt-dialog/GeneratePromptDialog"
import { nofex } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { allPrompts } from "@/lib/prompts"
import { useCustomPrompts, useFavorites } from "@/lib/prompts/custom-store"
import type { PromptSchema } from "@/lib/prompts/types"
import { Brain, Info, NotebookPen, Pencil, Plus, ScrollText, ShoppingCart, Sparkles, SquareKanban, Star, Target, Trash2 } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

const filters = [
  {
    id: "favorites",
    label: "Favorites",
    description: "Prompts that have been favorited by you.",
    icon: Star,
  },
  {
    id: "custom",
    label: "Custom",
    description:
      "Prompts that you created yourself. They live in this browser only — nothing leaves your device.",
    icon: Sparkles,
  },
  {
    id: "curriculum",
    label: "Curriculum",
    description:
      "Prompts that are related to curriculum creation and education.",
    icon: ScrollText,
  },
  {
    id: "shopping",
    label: "Shopping",
    description:
      "Prompts that are related to shopping and e-commerce. Did you know Amazon has an AI shopping assistant?",
    icon: ShoppingCart,
  },
  {
    id: "learning",
    label: "Learning",
    description:
      "Prompts that are related to learning and education. Did you know you can use AI to learn new skills?",
    icon: Brain,
  },
  {
    id: "studying",
    label: "Studying",
    description:
      "Prompts that are related to studying and education. Did you know you can use AI to help you study?",
    icon: NotebookPen,
  },
  {
    id: "planning",
    label: "Planning",
    description:
      "Prompts that are related to planning and organization. Did you know you can use AI to help you plan your day?",
    icon: SquareKanban,
  },
  {
    id: "activities",
    label: "Activities",
    description:
      "Prompts that are related to activities and hobbies. Did you know you can use AI to help you find new activities?",
    icon: Target,
  }
]

export default function PromptsPage() {
  const [selectedFilter, setSelectedFilter] = useState("favorites")
  const selectedFilterData = filters.find((filter) => filter.id === selectedFilter) || filters[0]
  const { customPrompts, saveCustomPrompt, deleteCustomPrompt } = useCustomPrompts()
  const { favorites, toggleFavorite } = useFavorites()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [generateOpen, setGenerateOpen] = useState(false)
  const [dialogNonce, setDialogNonce] = useState(0)
  const [dialogState, setDialogState] = useState<{
    initial: PromptSchema | null
    mode: "create" | "edit"
  } | null>(null)

  const customIds = useMemo(
    () => new Set(customPrompts.map((p) => p.id)),
    [customPrompts]
  )

  const promptsFromFilter = useMemo(() => {
    const visible = [...allPrompts, ...customPrompts]
    if (selectedFilter === "favorites") {
      return visible.filter((prompt) => favorites.includes(prompt.id))
    }
    if (selectedFilter === "custom") {
      return customPrompts
    }
    // Category tabs include matching custom prompts too, so AI-generated
    // prompts land in the right place.
    return [...allPrompts, ...customPrompts].filter(
      (prompt) => prompt.category === selectedFilter
    )
  }, [selectedFilter, customPrompts, favorites])

  const openNewDialog = () => {
    setDialogState({ initial: null, mode: "create" })
    setDialogNonce((n) => n + 1)
    setDialogOpen(true)
  }

  const openEditDialog = (prompt: PromptSchema) => {
    setDialogState({ initial: prompt, mode: "edit" })
    setDialogNonce((n) => n + 1)
    setDialogOpen(true)
  }

  const handleImportGenerated = (prompt: PromptSchema) => {
    setGenerateOpen(false)
    setDialogState({ initial: prompt, mode: "create" })
    setDialogNonce((n) => n + 1)
    setDialogOpen(true)
  }

  const handleSaveCustom = (prompt: PromptSchema) => {
    // Avoid id collisions with built-ins or other custom prompts
    const taken = new Set([
      ...allPrompts.map((p) => p.id),
      ...customPrompts.map((p) => p.id),
    ])
    if (dialogState?.mode === "edit" && dialogState.initial) {
      taken.delete(dialogState.initial.id)
    }
    let id = prompt.id
    let n = 2
    while (taken.has(id)) {
      id = `${prompt.id}-${n++}`
    }
    saveCustomPrompt({ ...prompt, id })
    setSelectedFilter("custom")
  }

  const handleDeleteCustom = (prompt: PromptSchema) => {
    if (
      window.confirm(
        `Delete "${prompt.displayTitle}"? This can't be undone.`
      )
    ) {
      deleteCustomPrompt(prompt.id)
    }
  }

  return (
    <main className="relative z-0 flex min-h-[95vh] w-[90%] flex-col gap-10 px-10 pl-12 pt-20 text-slate-950">
      {/* Header */}
      <section className="relative z-0 flex w-full flex-row items-center gap-12 px-4">
        {/* Page Title */}
        <section className="flex w-[30%] flex-col gap-2">
          <h1
            className={cn(
              "min-w-max text-5xl font-semilight text-[#f06565]",
              nofex.className
            )}
          >
            AI Prompts
          </h1>

          <p className="w-full text-sm text-foreground/70">
            Turn your instructions into autonomous agents in the{" "}
            <Link
              href="/agents"
              className="text-rose-500 hover:underline"
            >
              Agents
            </Link>{" "}
            tab and let them handle tasks on your behalf.
          </p>

        </section>

        {/* AI Warning Card */}
        <Card className="mx-auto flex w-full flex-row rounded-[35px] border border-rose-100/60 bg-gradient-to-br from-[#FFF0F3] to-white py-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
          <CardHeader className="flex w-full flex-col gap-2">
            <CardTitle className="flex flex-row gap-2 items-center align-middle text-lg font-bold">
              <Info /> Keep AI a tool, NOT a crutch.
            </CardTitle>

            <CardDescription className="w-full text-xs text-foreground/80">
              Use AI to support your learning, not replace it — your thinking and voice still matter most.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center">
            <Button
              size="sm"
              className="mx-auto my-auto rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600"
            >
              Why should I care about this?
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Main Content */}
      <section className="flex w-full flex-row items-start gap-5">
        {/* Filters */}
        <aside className="sticky top-6 z-40 flex h-fit w-[15%] shrink-0 flex-col gap-4 p-4">
          <h2 className="text-xl font-semibold">
            Filters
          </h2>

          <div className="flex flex-col gap-1">
            {filters.map((filter) => {
              const Icon = filter.icon
              const isSelected = selectedFilter === filter.id

              return (
                <Button
                  key={filter.id}
                  type="button"
                  variant="ghost"
                  onClick={() => setSelectedFilter(filter.id)}
                  className={cn(
                    "flex w-full cursor-pointer! items-center justify-start gap-2 rounded-2xl border-2 px-4 py-6",
                    isSelected
                      ? "border-transparent bg-gradient-to-r from-[#ff6b6b] to-[#f06595] text-white shadow-md shadow-rose-500/20 hover:bg-gradient-to-r hover:from-[#ff6b6b] hover:to-[#f06595] hover:text-white"
                      : "border-slate-200 bg-transparent text-slate-950 hover:bg-slate-100"
                  )}
                >
                  <Icon size={20} />
                  <span>{filter.label}</span>
                </Button>
              )
            })}
          </div>
        </aside>

        {/* Prompt Content */}
        <section className="flex min-w-0 w-[85%] flex-col gap-5">
          {/* Content Header */}
          <div className="flex w-full items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">
                {selectedFilterData.label}
              </h2>

              <p className="text-muted-foreground">
                {selectedFilterData.description}
              </p>
            </div>

            {selectedFilter === "custom" && (
              <div className="mt-1 flex shrink-0 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setGenerateOpen(true)}
                  className="rounded-full border-rose-200 px-5 hover:bg-rose-50"
                >
                  <Sparkles className="mr-1.5 size-4" />
                  Generate with AI
                </Button>
              </div>
            )}
          </div>

          {/* Prompt Cards */}
          {promptsFromFilter.length === 0 ? (
            <div className="flex w-full flex-col items-center gap-4 rounded-[35px] border border-dashed border-rose-200 bg-white/60 p-12 text-center">
              <p className="text-lg font-semibold text-slate-700">
                {selectedFilter === "custom"
                  ? "No custom prompts yet"
                  : selectedFilter === "favorites"
                    ? "No favorites yet"
                    : "Nothing here yet"}
              </p>
              <p className="max-w-md text-sm text-muted-foreground">
                {selectedFilter === "custom"
                  ? "Build your first custom prompt with the builder — title, prompt body, and variables, all right here. It's saved in this browser automatically."
                  : selectedFilter === "favorites"
                    ? "Tap the Favorite button on any prompt and it'll show up here."
                    : "Try a different filter."}
              </p>
              {selectedFilter === "custom" && (
                <div className="flex gap-2">
                  <Button
                    type="button"
                    onClick={() => setGenerateOpen(true)}
                    className="rounded-full bg-rose-500 px-6 text-white hover:bg-rose-600"
                  >
                    <Sparkles className="mr-1.5 size-4" />
                    Generate with AI
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex w-full  flex-wrap gap-5">
              {promptsFromFilter.map((prompt) => {
                const isCustom = customIds.has(prompt.id)
                const isFavorited = favorites.includes(prompt.id)

                return (
                  <Card
                    key={prompt.id}
                    className="flex h-[200px] w-[calc(50%-0.625rem)] flex-col rounded-[35px] border border-rose-100/60 bg-gradient-to-br from-[#FFF0F3] to-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10"
                  >
                    {/* Title + Description */}
                    <CardHeader className="flex flex-col gap-2 p-6 pb-0 pt-0">
                      <CardTitle className="text-xl font-bold">
                        {prompt.displayTitle}
                      </CardTitle>

                      <CardDescription className="text-sm text-foreground/70">
                        {prompt.displayDescription}
                      </CardDescription>
                    </CardHeader>

                    {/* Bottom-right Actions */}
                    <CardContent className="flex mt-auto flex-row items-center justify-end gap-2 pt-0">
                      {/* Edit / Delete (custom prompts only) */}
                      {isCustom && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditDialog(prompt)}
                            className="rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                            title="Edit custom prompt"
                          >
                            <Pencil className="size-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteCustom(prompt)}
                            className="rounded-full  text-slate-500 hover:bg-rose-50 hover:text-rose-600"
                            title="Delete custom prompt"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </>
                      )}

                      {/* Favorite */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleFavorite(prompt.id)}
                        className={cn(
                          "rounded-full border-rose-200 px-4 hover:bg-rose-50",
                          isFavorited && "border-rose-300 bg-rose-50 text-rose-600"
                        )}
                      >
                        <Star
                          className="mr-1.5 size-4"
                          fill={isFavorited ? "currentColor" : "none"}
                        />
                        {isFavorited ? "Favorited" : "Favorite"}
                      </Button>

                      {/* Go */}
                      <Link href={`/prompts/${prompt.id}`}>
                        <Button
                          size="sm"
                          className="rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600"
                        >
                          Customize
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </section>
      </section>

      <CustomPromptDialog
        // Remount on every open so the form always starts fresh (new vs. editing vs. imported)
        key={dialogOpen && dialogState ? `custom-dlg-${dialogNonce}` : "closed"}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initial={dialogState?.initial ?? null}
        mode={dialogState?.mode ?? "create"}
        onSave={handleSaveCustom}
      />
      <GeneratePromptDialog
        open={generateOpen}
        onOpenChange={setGenerateOpen}
        onImport={handleImportGenerated}
      />
    </main>
  )
}
