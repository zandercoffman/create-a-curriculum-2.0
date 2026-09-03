"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUp,
  Check,
  ChevronDown,
  LoaderCircle,
  Sparkles,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"

export interface TextAIModel {
  name: string
  svg: React.ReactNode
  description: string
  id: string
}

export const textAIs: TextAIModel[] = [
  {
    name: "Meta Llama 3.1 8B Instant",
    svg: "/meta-icon.svg",
    description: "An ultra-fast, lightweight model for quick answers and everyday tasks.",
    id: "llama-3.1-8b-instant",
  },
  {
    name: "Meta Llama 3.3 70B",
    svg: "/meta-icon.svg",
    description: "A powerful general-purpose model for reasoning, writing, and complex tasks.",
    id: "llama-3.3-70b-versatile",
  },
  {
    name: "OpenAI GPT-OSS 120B",
    svg: "/openai.svg",
    description: "OpenAI's flagship open-weight model with strong reasoning and coding capabilities.",
    id: "openai/gpt-oss-120b",
  },
  {
    name: "OpenAI GPT-OSS 20B",
    svg: "/openai.svg",
    description: "A fast and efficient open-weight model for everyday generation and reasoning.",
    id: "openai/gpt-oss-20b",
  },
  {
    name: "Groq Compound",
    svg: "/groq.webp",
    description: "An AI system that combines models and built-in tools for web search and code execution.",
    id: "groq/compound",
  },
  {
    name: "Groq Compound Mini",
    svg: "/groq.webp",
    description: "A lightweight Compound system designed for fast responses with built-in tools.",
    id: "groq/compound-mini",
  },
]


type AITextboxProps = {
  placeholder?: string
  className?: string
  shellClassName?: string
  inputClassName?: string
  buttonClassName?: string
  collapsedWidth?: number
  expandedWidth?: number
  initialOpen?: boolean
  autoFocus?: boolean
  isLoading?: boolean
  models?: TextAIModel[]
  chosenModel?: TextAIModel
  onModelChange?: (model: TextAIModel) => void
  onSubmit?: (prompt: string, model: TextAIModel) => void
  onChange?: (value: string) => void
}

export function AITextbox({
  placeholder = "What do you want to learn?",
  className,
  shellClassName,
  inputClassName,
  buttonClassName,
  collapsedWidth = 320,
  expandedWidth = 620,
  initialOpen = false,
  autoFocus = true,
  isLoading = false,
  models = textAIs,
  chosenModel,
  onModelChange,
  onSubmit,
  onChange,
}: AITextboxProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const [isOpen, setIsOpen] = React.useState(initialOpen)
  const [isModelMenuOpen, setIsModelMenuOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const selectedModel = chosenModel ?? models[0]

  const resizeTextarea = React.useCallback(() => {
    const textarea = textareaRef.current

    if (!textarea) return

    textarea.style.height = "auto"
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`
  }, [])

  React.useEffect(() => {
    if (isOpen && autoFocus && !isModelMenuOpen) {
      requestAnimationFrame(() => {
        textareaRef.current?.focus()
        resizeTextarea()
      })
    }
  }, [isOpen, autoFocus, isModelMenuOpen, resizeTextarea])

  React.useEffect(() => {
    resizeTextarea()
  }, [value, resizeTextarea])

  const submit = () => {
    const prompt = value.trim()

    if (!prompt || isLoading || !selectedModel) return

    onSubmit?.(prompt, selectedModel)
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = event.target.value

    setValue(nextValue)
    onChange?.(nextValue)

    requestAnimationFrame(resizeTextarea)
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      submit()
    }

    if (event.key === "Escape") {
      setIsModelMenuOpen(false)
      setIsOpen(false)
    }
  }

  const selectModel = (model: TextAIModel) => {
    onModelChange?.(model)
    setIsModelMenuOpen(false)

    requestAnimationFrame(() => {
      textareaRef.current?.focus()
    })
  }

  return (
    <div
      className={cn(
        "relative mx-auto w-[min(92vw,42rem)]",
        className,
      )}
    >
      <AnimatePresence>
        {isOpen && isModelMenuOpen && (
          <motion.div
            className="absolute top-[calc(100%+12px)] left-0 z-[999] w-full overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            initial={{
              opacity: 0,
              y: -40,
              scale: 0.96,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.97,
              filter: "blur(6px)",
            }}
            transition={{
              type: "spring",
              bounce: 0.25,
              duration: 0.5,
            }}
          >
            <div className="px-3 pb-2 pt-2">
              <p className="text-[11px] font-medium text-black/40">
                Choose an AI
              </p>
            </div>

            <div className="max-h-[300px] z-10 overflow-y-auto">
              {models.map((model) => {
                const isSelected = selectedModel?.name === model.name

                return (
                  <motion.button
                    key={model.name}
                    type="button"
                    onClick={() => selectModel(model)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-[18px] p-3 text-left transition-colors",
                      isSelected
                        ? "bg-black/[0.06]"
                        : "hover:bg-black/[0.035]",
                    )}
                    whileTap={{ scale: 0.985 }}
                  >
                    <img src={`${model.svg}`} alt={model.name} className="grid size-10 shrink-0 place-items-center rounded-full bg-black/[0.04]">
                     
                    </img>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-[13px] font-medium text-black">
                          {model.name}
                        </p>

                        {isSelected && (
                          <Check className="size-3.5 shrink-0 text-black/60" />
                        )}
                      </div>

                      <p className="mt-0.5 line-clamp-2 text-[11px] leading-4 text-black/40">
                        {model.description}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={cn(
          "relative overflow-hidden rounded-[28px] text-white! bg-[linear-gradient(45deg,#ff6b6b,#f06595)] shadow-[0_16px_40px_rgba(0,0,0,0.20)]",
          shellClassName,
        )}
        animate={{
          width: isOpen ? expandedWidth : collapsedWidth,
          minHeight: isOpen ? 122 : 52,
          borderRadius: isOpen ? 28 : 999,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 27,
          mass: 0.8,
        }}
        style={{
          maxWidth: "92vw",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isOpen ? (
            <motion.button
              disabled={isLoading}
              key="collapsed"
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex h-[52px] w-full items-center gap-3 rounded-full px-5 text-left outline-none"
              initial={{
                opacity: 0,
                scale: 0.94,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Sparkles className="size-[18px] shrink-0 text-[#dddddd]" />

              <span className="flex-1 truncate text-[17px] tracking-[-0.035em] ">
                {placeholder}
              </span>

              <motion.span
                className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ffffff12]"
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(255,255,255,0.18)",
                }}
                whileTap={{ scale: 0.92 }}
              >
                <ArrowUp className="size-4 text-[#dddddd]" />
              </motion.span>
            </motion.button>
          ) : (
            <motion.div
              key="expanded"
              className="flex w-full flex-col"
              initial={{
                opacity: 0,
                scale: 0.97,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(6px)",
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="px-5 pt-4">
                <textarea
                  ref={textareaRef}
                  value={value}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  rows={1}
                  maxLength={5000}
                  placeholder={placeholder}
                  aria-label="AI prompt"
                  className={cn(
                    "block max-h-[180px] min-h-[42px] w-full resize-none overflow-y-auto bg-transparent text-[17px] leading-6 tracking-[-0.035em] text-[#eeeeee] outline-none ",
                    inputClassName,
                  )}
                />
              </div>

              <div className="flex items-center justify-between px-4 pb-3 pt-3">
                {/* Model selector */}
                <motion.button
                  type="button"
                  disabled={isLoading}
                  key="model-selector"
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.02,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-label="Choose an AI"
                  onClick={() => setIsModelMenuOpen((open) => !open)}
                  className="group flex max-w-[75%] items-center gap-2 rounded-full bg-[#ffffff0a] px-2.5 py-1.5 text-left outline-none transition-colors hover:bg-[#ffffff12]"
                  whileTap={{ scale: 0.97 }}
                >
                  <img src={`${selectedModel?.svg}`} alt={selectedModel?.name} className="grid size-5 shrink-0 place-items-center overflow-hidden rounded-md">
                    
                  </img>

                  <span className="truncate text-[11px] text-white/80 group-hover:text-white transition-all duration-200">
                    {selectedModel?.name ?? "Choose an AI"}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isModelMenuOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <ChevronDown className="size-3 text-[#dddddd50]" />
                  </motion.div>
                </motion.button>

                <div className="flex items-center gap-2">
                  {/* Close */}
                  <motion.button
                    type="button"
                    onClick={() => {
                      setIsOpen(false)
                      setIsModelMenuOpen(false)
                    }}
                    disabled={isLoading}
                    className="grid size-9 place-items-center rounded-full text-[#dddddd45] outline-none hover:bg-[#ffffff0b] hover:text-[#dddddd]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label="Close AI textbox"
                  >
                    <X className="size-4" />
                  </motion.button>

                  {/* Submit */}
                  <motion.button
                    type="button"
                    onClick={submit}
                    disabled={!value.trim() || isLoading}
                    className={cn(
                      "grid size-9 place-items-center rounded-full bg-white text-black outline-none disabled:cursor-not-allowed disabled:opacity-25",
                      buttonClassName,
                    )}
                    whileHover={{
                      scale: value.trim() && !isLoading ? 1.07 : 1,
                    }}
                    whileTap={{
                      scale: value.trim() && !isLoading ? 0.91 : 1,
                    }}
                    aria-label="Generate"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <LoaderCircle className="size-4 animate-spin" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="arrow"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <ArrowUp className="size-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default AITextbox