"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Info, LoaderCircle, Search, X } from "lucide-react"

import GooeyFilter from "@/components/GooeyFilter"
import { cn } from "@/lib/utils"

type GooeySearchProps = {
  items: string[]
  placeholder?: string
  emptyLabel?: string
  className?: string
  shellClassName?: string
  inputClassName?: string
  buttonClassName?: string
  resultClassName?: string
  resultsClassName?: string
  containerClassName?: string
  collapsedWidth?: number
  expandedWidth?: number
  filterId?: string
  initialOpen?: boolean
  autoFocus?: boolean
  animateResults?: boolean
  showLoadingState?: boolean
  onSelectItem?: (item: string) => void
  onSearch?: (value: string) => void
  renderResult?: (item: string, index: number, state: { query: string; isLoading: boolean }) => React.ReactNode
  renderIcon?: (state: { step: 1 | 2; isLoading: boolean }) => React.ReactNode
}

function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedValue(value), delay)
    return () => window.clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue
}

export function GooeySearch({
  items,
  placeholder = "Type to search...",
  emptyLabel = "No results found.",
  className,
  containerClassName,
  shellClassName,
  inputClassName,
  buttonClassName,
  resultClassName,
  resultsClassName,
  collapsedWidth = 220,
  expandedWidth = 320,
  filterId,
  initialOpen = false,
  autoFocus = true,
  animateResults = true,
  showLoadingState = true,
  onSelectItem,
  onSearch,
  renderResult,
  renderIcon,
}: GooeySearchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const reactId = React.useId().replace(/[^a-zA-Z0-9_-]/g, "")
  const resolvedFilterId = filterId ?? `goo-effect-${reactId}`

  const [step, setStep] = React.useState<1 | 2>(initialOpen ? 2 : 1)
  const [searchText, setSearchText] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const debouncedSearchText = useDebouncedValue(searchText, 300)

  const filteredData = React.useMemo(() => {
    const query = debouncedSearchText.trim().toLowerCase()

    if (!query) {
      return []
    }

    return items.filter((item) => item.toLowerCase().includes(query))
  }, [items, debouncedSearchText])

  React.useEffect(() => {
    if (step === 2 && autoFocus) {
      inputRef.current?.focus()
      return
    }

    if (step === 1) {
      setSearchText("")
      setIsLoading(false)
    }
  }, [autoFocus, step])

  React.useEffect(() => {
    if (!showLoadingState) {
      setIsLoading(false)
      return
    }

    let cancelled = false

    if (!debouncedSearchText.trim()) {
      setIsLoading(false)
      return () => {
        cancelled = true
      }
    }

    setIsLoading(true)

    const timeoutId = window.setTimeout(() => {
      if (!cancelled) {
        setIsLoading(false)
      }
    }, 450)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [debouncedSearchText, showLoadingState])

  React.useEffect(() => {
    onSearch?.(debouncedSearchText)
  }, [debouncedSearchText, onSearch])

  return (
    <div className={cn("relative mx-auto w-[min(92vw,42rem)]", className, containerClassName)}>
      <GooeyFilter filterId={resolvedFilterId} />

      <AnimatePresence mode="popLayout">
        {step === 2 && (
          <motion.div
            key="results"
            role="listbox"
            aria-label="Search results"
            className={cn("relative mb-3 flex max-w-max flex-wrap gap-2", resultsClassName)}
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
            style={{ filter: `url(#${resolvedFilterId})` }}
          >
            <AnimatePresence mode="popLayout">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                  const content = renderResult?.(item, index, {
                    query: debouncedSearchText,
                    isLoading,
                  }) ?? (
                    <>
                      <Info className="size-4 shrink-0 text-[#dddddd]" />
                      <span>{item}</span>
                    </>
                  )

                  return animateResults ? (
                    <motion.button
                      key={item}
                      type="button"
                      role="option"
                      onClick={() => onSelectItem?.(item)}
                      initial={{ opacity: 0, y: 0, scale: 0.3, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: (index + 1) * 48, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -4, scale: 0.85, filter: "blur(5px)" }}
                      transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
                      className={cn(
                        "absolute left-0 top-0 min-w-42 rounded-full bg-black px-4 py-3 text-left text-sm text-[#dddddd] shadow-[0_12px_24px_rgba(0,0,0,0.22)]",
                        resultClassName
                      )}
                    >
                      <div className="flex items-center gap-2">{content}</div>
                    </motion.button>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      role="option"
                      onClick={() => onSelectItem?.(item)}
                      className={cn(
                        "rounded-full bg-black px-4 py-3 text-left text-sm text-[#dddddd] shadow-[0_12px_24px_rgba(0,0,0,0.22)]",
                        resultClassName
                      )}
                    >
                      <div className="flex items-center gap-2">{content}</div>
                    </button>
                  )
                })
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 0, scale: 0.5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 48, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -4, scale: 0.85 }}
                  className={cn(
                    "absolute left-0 top-0 rounded-full bg-black px-4 py-3 text-sm text-[#dddddd] shadow-[0_12px_24px_rgba(0,0,0,0.22)]",
                    resultClassName
                  )}
                >
                  {emptyLabel}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={cn("flex items-center", shellClassName)}
        animate={{ x: step === 2 ? -18 : 0, width: step === 2 ? expandedWidth : collapsedWidth }}
        transition={{ type: "spring", bounce: 0.15, duration: 0.75 }}
      >
        <motion.button
          type="button"
          className={cn(
            "group flex h-11 flex-1 items-center rounded-full bg-black px-4 text-[#ddddddaf] shadow-[0_12px_28px_rgba(0,0,0,0.18)] outline-none",
            buttonClassName
          )}
          onClick={() => setStep(2)}
          whileHover={{ scale: step === 2 ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Open search"
        >
          {step === 1 ? (
            <span className="pointer-events-none w-full text-left text-lg tracking-[-0.04em] text-[#dddddd66]">
              {placeholder}
            </span>
          ) : (
            <input
              ref={inputRef}
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setStep(1)
                }
              }}
              placeholder={placeholder}
              aria-label="Search input"
              className={cn(
                "w-full bg-transparent text-lg tracking-[-0.04em] text-[#dddddd] outline-none placeholder:text-[#dddddd66]",
                inputClassName
              )}
            />
          )}
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.button
            key={step}
            type="button"
            className={cn(
              "ml-4 grid size-11 place-items-center rounded-full bg-black shadow-[0_12px_28px_rgba(0,0,0,0.18)] outline-none",
              buttonClassName
            )}
            onClick={() => {
              if (step === 1) {
                setStep(2)
                return
              }

              if (searchText.trim()) {
                setIsLoading(true)
                window.setTimeout(() => setIsLoading(false), 450)
                return
              }

              setStep(1)
            }}
            aria-label={step === 1 ? "Open search" : "Search"}
            initial={{ opacity: 0, scale: 0.85, x: -6, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.85, x: -6, filter: "blur(5px)" }}
            transition={{ delay: 0.08, duration: 0.85, type: "spring", bounce: 0.15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {renderIcon?.({ step, isLoading }) ??
              (step === 1 ? (
                <Search className="size-4.5 text-[#dddddd]" />
              ) : isLoading ? (
                <LoaderCircle className="size-4.5 animate-spin text-[#dddddd]" />
              ) : (
                <X className="size-4.5 text-[#dddddd]" />
              ))}
          </motion.button>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default GooeySearch