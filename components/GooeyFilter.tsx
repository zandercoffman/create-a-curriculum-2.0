import * as React from "react"

type GooeyFilterProps = {
  filterId?: string
  className?: string
}

export default function GooeyFilter({ filterId = "goo-effect", className }: GooeyFilterProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      <defs>
        <filter id={filterId}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}