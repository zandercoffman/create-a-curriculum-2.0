"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import GooeyFilter from "@/components/GooeyFilter"
import { cn } from "@/lib/utils"

type GooeyGroupProps = {
  children: React.ReactNode
  className?: string
  filterId?: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  gap?: number
  collapsedWidth?: number
  expandedWidth?: number
  collapsedHeight?: number
  expandedHeight?: number
  itemClassName?: string
  shellClassName?: string
  childrenClassName?: string
  showMergeDots?: boolean
  mergeDotClassName?: string
}

function useControllableState({
  value,
  defaultValue,
  onChange,
}: {
  value?: boolean
  defaultValue: boolean
  onChange?: (value: boolean) => void
}) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const isControlled = value !== undefined
  const state = isControlled ? value : uncontrolledValue

  const setState = React.useCallback(
    (nextValue: boolean) => {
      if (!isControlled) {
        setUncontrolledValue(nextValue)
      }

      onChange?.(nextValue)
    },
    [isControlled, onChange]
  )

  return [state, setState] as const
}

export function GooeyGroup({
  children,
  className,
  filterId = "goo-effect",
  open,
  defaultOpen = false,
  onOpenChange,
  gap = 12,
  collapsedWidth = 56,
  expandedWidth = 360,
  collapsedHeight = 56,
  expandedHeight = 56,
  itemClassName,
  shellClassName,
  childrenClassName,
  showMergeDots = true,
  mergeDotClassName,
}: GooeyGroupProps) {
  const [isOpen, setIsOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })

  const childArray = React.Children.toArray(children).filter(Boolean)

  return (
    <div className={cn("relative", className)}>
      <GooeyFilter filterId={filterId} />

      <motion.div
        className={cn("relative flex items-center", shellClassName)}
        animate={{ width: isOpen ? expandedWidth : collapsedWidth, height: isOpen ? expandedHeight : collapsedHeight }}
        transition={{ type: "spring", bounce: 0.16, duration: 0.65 }}
        style={{ filter: `url(#${filterId})` }}
      >
        <motion.div
          className={cn("flex w-full items-center", childrenClassName)}
          animate={{ gap: isOpen ? gap : 0 }}
          transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
        >
          {showMergeDots && childArray.length > 1 && isOpen ? (
            <>
              <motion.span
                aria-hidden="true"
                className={cn("pointer-events-none absolute left-[calc(100%-5.5rem)] top-1/2 size-4 -translate-y-1/2 rounded-full bg-current opacity-0", mergeDotClassName)}
                animate={{ opacity: isOpen ? 0.95 : 0, x: isOpen ? -4 : 0 }}
              />
              <motion.span
                aria-hidden="true"
                className={cn("pointer-events-none absolute left-[calc(100%-4rem)] top-1/2 size-4 -translate-y-1/2 rounded-full bg-current opacity-0", mergeDotClassName)}
                animate={{ opacity: isOpen ? 0.95 : 0, x: isOpen ? -2 : 0 }}
              />
            </>
          ) : null}

          {childArray.map((child, index) => (
            <motion.div
              key={index}
              className={cn("shrink-0", itemClassName)}
              initial={false}
              animate={{
                opacity: isOpen ? 1 : index === 0 ? 1 : 0,
                scale: isOpen ? 1 : index === 0 ? 1 : 0.35,
                x: isOpen ? 0 : index === 0 ? 0 : -20,
                filter: isOpen ? "blur(0px)" : index === 0 ? "blur(0px)" : "blur(6px)",
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.55, delay: index * 0.03 }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GooeyGroup