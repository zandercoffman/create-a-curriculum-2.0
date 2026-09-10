"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { nofex } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { BaggageClaim, ShoppingCart, Sparkles, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
    description: "Prompts that have been created by the community.",
    icon: Sparkles,
  },
  {
    id: "shopping",
    label: "Shopping",
    description: "Prompts that are related to shopping and e-commerce.",
    icon: ShoppingCart,
  }
]

export default function PromptsPage() {
  const [selectedFilter, setSelectedFilter] = useState("favorites")

  const selectedFilterData =
    filters.find((filter) => filter.id === selectedFilter) ?? filters[0]

  return (
    <main className="relative z-0 flex min-h-[95vh] w-[90%] flex-col gap-10 overflow-hidden px-10 pl-12 pt-20 text-slate-950">
      {/* Header */}
      <section className="relative z-0 flex h-[10%] w-full flex-row items-center gap-12 px-4">
        <section className="w-[30%] flex flex-col gap-2">
          <h1
          className={cn(
            "min-w-max text-5xl font-semilight text-[#f06565]",
            nofex.className
          )}
        >
          AI Prompts
        </h1>
        <p className="text-sm w-full text-foreground/70">
          Use AI prompts in the <Link href={"/agents"} className="text-rose-500 hover:underline">Agents</Link> tab to turn your instructions into autonomous agents that can perform tasks on your behalf.
        </p>
        </section>

        <Card className="mx-auto mt-6 mb-4 flex w-full flex-row rounded-[35px] border border-rose-100/60 bg-gradient-to-br from-[#FFF0F3] to-white py-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
          <CardHeader className="flex w-full flex-col gap-2">
            <CardTitle className="text-lg font-bold">
              Keep AI a tool, NOT a crutch.
            </CardTitle>

            <CardDescription className="text-xs w-full text-foreground/80">
              AI can be a powerful resource for brainstorming, learning, and
              getting unstuck—but your own thinking, creativity, and authentic
              voice matter. Use AI to support your learning, not replace it.
              The most meaningful work is still genuinely yours.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center">
            <Button size="sm" className="mx-auto my-auto rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600">
              Why should I care about this?
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Main */}
      <section className="relative z-0 flex h-[90%] w-full flex-row gap-5">
        {/* Filters */}
        <aside className="relative z-50 flex h-[80vh] w-[15%] flex-col gap-4 p-4 pointer-events-auto">
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
                  onClick={() => {
                    setSelectedFilter(filter.id)
                  }}
                  className={cn(
                    "relative z-50 flex w-full cursor-pointer! items-center justify-start gap-2 rounded-2xl border-2 px-4 py-6 pointer-events-auto",
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

        {/* Content */}
        <section className="flex h-full w-[85%] flex-col gap-5">
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-2xl font-bold">
              {selectedFilterData.label}
            </h2>

            <p className="text-muted-foreground">
              {selectedFilterData.description}
            </p>
          </div>

          {/* Debug indicator — remove later */}
          <div className="rounded-xl border p-4 text-sm">
            Selected filter:{" "}
            <strong>{selectedFilter}</strong>
          </div>
        </section>
      </section>
    </main>
  )
}