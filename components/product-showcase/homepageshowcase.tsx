"use client"
import Image from "next/image"
import { Showcase } from "@/lib/product-showcases"
import { Card } from "@/components/ui/card"

type HomePageShowcaseProps = {
  showcase: Showcase
}

export default function HomePageShowcase({ showcase }: HomePageShowcaseProps) {
  return (
    <Card className="relative isolate mx-auto w-1/3 overflow-hidden rounded-[55px] border border-white/10 bg-gradient-to-br from-background via-background to-primary/5 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
      <div className="absolute inset-y-0 right-0 w-[65%]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={showcase.image}
            alt={showcase.title}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="scale-110 object-cover opacity-95 blur-[1px]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_12%,rgba(255,255,255,0.28)_32%,rgba(255,255,255,0)_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.28),transparent_42%)]" />
      </div>

      <div className="relative z-10 flex max-w-[58%] flex-col items-start justify-center gap-4 p-8 md:p-10">
        <span className="rounded-full border border-foreground/10 bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-foreground/70 backdrop-blur-sm">
          Featured
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
          {showcase.title}
        </h2>
        <p className="max-w-xl text-sm leading-6 text-foreground/80 md:text-base">
          {showcase.description}
        </p>
      </div>
    </Card>
  )
}