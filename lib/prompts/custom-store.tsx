"use client"

import { useCallback, useState } from "react"
import type { PromptSchema } from "./types"

const CUSTOM_PROMPTS_KEY = "prompt-app:custom-prompts"
const FAVORITES_KEY = "prompt-app:favorites"

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage full or unavailable — fail silently
  }
}

/** Read the user's custom prompts from localStorage. Safe to call anywhere client-side. */
export function loadCustomPrompts(): PromptSchema[] {
  const parsed = readJSON<PromptSchema[]>(CUSTOM_PROMPTS_KEY, [])
  return Array.isArray(parsed) ? parsed : []
}

/**
 * Find a prompt by id across built-ins and the user's custom prompts.
 * Use this in app/prompts/[prompt]/page.tsx so "Go" works on custom prompts too:
 *
 *   const prompt = findPrompt(params.prompt, allPrompts)
 */
export function findPrompt(
  id: string,
  builtIns: PromptSchema[]
): PromptSchema | undefined {
  return (
    builtIns.find((p) => p.id === id) ??
    loadCustomPrompts().find((p) => p.id === id)
  )
}

/** Turn a title into a URL-friendly id, e.g. "My Cool Prompt" -> "my-cool-prompt". */
export function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "custom-prompt"
  )
}

export function useCustomPrompts() {
  // Lazy initializer reads localStorage on first render instead of in an effect.
  const [customPrompts, setCustomPrompts] =
    useState<PromptSchema[]>(() => loadCustomPrompts())

  const saveCustomPrompt = useCallback((prompt: PromptSchema) => {
    setCustomPrompts((prev) => {
      const exists = prev.some((p) => p.id === prompt.id)
      const next = exists
        ? prev.map((p) => (p.id === prompt.id ? prompt : p))
        : [...prev, prompt]
      writeJSON(CUSTOM_PROMPTS_KEY, next)
      return next
    })
  }, [])

  const deleteCustomPrompt = useCallback((id: string) => {
    setCustomPrompts((prev) => {
      const next = prev.filter((p) => p.id !== id)
      writeJSON(CUSTOM_PROMPTS_KEY, next)
      return next
    })
  }, [])

  return { customPrompts, saveCustomPrompt, deleteCustomPrompt }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() =>
    readJSON<string[]>(FAVORITES_KEY, [])
  )

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
      writeJSON(FAVORITES_KEY, next)
      return next
    })
  }, [])

  return { favorites, toggleFavorite }
}
