import { nofex } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BellRing, BookOpen, Car, Clock3, GalleryHorizontalEnd, HatGlasses, Info, Layers2, Play, Search, ShieldCheck, ShoppingBag, Sparkles, Upload, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ColorGradient } from "@/components/NameGradient";

export default function AgentsPage() {
  return (
    <main className="relative z-0  flex min-h-[95vh] w-[90%] flex-col gap-4 overflow-hidden px-10 pl-12 pt-14 text-slate-950">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-[35px] h-[30vh] bg-black/50 text-white">

        <ColorGradient color="#F06565" />


        {/* Background decoration */}
        <div className="absolute inset-0 flex flex-col gap-4  px-8 py-10  md:px-12">

          <section className="flex flex-col gap-2">
            <h1 className={cn("flex flex-wrap items-center gap-3 text-5xl font-semibold text-white", nofex.className)}>
              <HatGlasses className="size-10" />  Agents
            </h1>

            <section className="relative">
              <div className="absolute w-full max-w-2xl h-[10vh] bottom-0 left-0 right-0 bg-[#FFFFFF] opacity-[25%] blur-2xl"></div>
              <p className="max-w-2xl text-sm leading-6 text-[#FFFFFF]">
                AI systems that take a goal, break it into steps, research information,
                use tools, and complete tasks with significantly less manual work. They
                can help you research products, compare resources, build curriculums,
                and more.
              </p>
            </section>
          </section>

          {
            /**
             * <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/70">
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-rose-400" />
              1 Active Agents
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 size={14} className="text-rose-400" />
              Saves ~3hrs/week
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-rose-400" />
              Privacy-first
            </span>
          </div>
             */
          }
        </div>




      </section>

      {/* ── Disclaimer ───────────────────────────────────── */}
      <div className="flex items-start gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <Info className="mt-0.5 size-4 shrink-0" />

        <p className="text-xs leading-5 text-gray-800">
          Companies, brands, products, and platforms mentioned are
          for educational purposes only. None endorse, sponsor, partner with,
          or are affiliated with create-a-curriculum.vercel.app unless
          explicitly stated. References do not imply recommendation or
          approval.
        </p>
      </div>


      <section className="flex flex-col gap-4">


        <section className="flex flex-col gap-2">
          <p className="flex w-full flex-row items-center gap-2 text-sm font-semibold text-foreground/80">
            <Layers2 size={16} />
            Quick Shortcuts
          </p>

          <ScrollArea className="w-full whitespace-nowrap pb-2">
            <div className="flex w-max flex-row gap-2 pb-2">
              <Button variant="outline" className="rounded-full px-5 py-4">
                <Upload size={16} />
                Upload Agent-Made Curriculum
              </Button>

              <Button variant="outline" className="rounded-full px-5 py-4">
                <Sparkles size={16} />
                Create Curriculum with an Agent
              </Button>

              <Button variant="outline" className="rounded-full px-5 py-4">
                <Search size={16} />
                Research a Topic
              </Button>

              <Button variant="outline" className="rounded-full px-5 py-4">
                <ShoppingBag size={16} />
                Product Research
              </Button>

              <Button variant="outline" className="rounded-full px-5 py-4">
                <GalleryHorizontalEnd size={16} />
                Create a Product List
              </Button>

              <Button variant="outline" className="rounded-full px-5 py-4">
                <BellRing size={16} />
                Remind Me
              </Button>
            </div>

            <ScrollBar orientation="horizontal" className="flex-shrink-0 translate-y-[-2px]" />
          </ScrollArea>
        </section>

        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <HatGlasses size={16} />
            Agents
          </p>
        </div>



        {/* -- Agents -- */}
        <Carousel className="w-[80vw] mx-auto">
          <CarouselContent className="w-full">
            <CarouselItem className="basis-1/2  pl-4">
              <Card className="group relative border-2 h-90 overflow-hidden rounded-[45px] ring-1 ring-white/10">
                <video
                  src="/showcaseVideos/Agents/muse.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-black backdrop-blur-md">
                  AI Agent by Meta
                </span>

                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3.5">
                  <Image
                    src="/AppIcons/muse.webp"
                    alt="Muse"
                    width={56}
                    height={56}
                    className="size-14 shrink-0 rounded-2xl object-cover shadow-2xl ring-1 ring-white/25"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-white">Muse</h3>
                    <p className="truncate text-[13px] text-white/65">
                      Built-in browser for research, creation, and goals
                    </p>
                  </div>
                  <Link
                    href="/agents/muse"
                    className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-rose-500 px-5 py-2 text-white hover:bg-rose-600"
                  >
                    Start Creating with Muse
                  </Link>

                </div>
              </Card>
            </CarouselItem>
            {
              /** CHATGPT
               * <CarouselItem className="basis-1/3  pl-4">
              <Card className="group relative border-2 h-90 overflow-hidden rounded-[45px] ring-1 ring-white/10">
                <video
                  src="/showcaseVideos/Agents/muse.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-black backdrop-blur-md">
                  AI Agent by Meta
                </span>

                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3.5">
                  <Image
                    src="/AppIcons/muse.webp"
                    alt="Muse"
                    width={56}
                    height={56}
                    className="size-14 shrink-0 rounded-2xl object-cover shadow-2xl ring-1 ring-white/25"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-white">Muse</h3>
                    <p className="truncate text-[13px] text-white/65">
                      Built-in browser for research, creation, and goals
                    </p>
                  </div>
                  <Link href="/agents/muse" className="ml-auto py-2 shadow-xl rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600">
                   Get Started with Muse
                  </Link>
                </div>
              </Card>
            </CarouselItem>
               */
            }
          </CarouselContent >
          <div className="flex w-full justify-between gap-4">
            <CarouselPrevious >
              <Button className="w-full rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600">
                Previous Step
              </Button>
            </CarouselPrevious>
            <CarouselNext>
              <Button className="w-full rounded-full bg-rose-500 px-5 text-white hover:bg-rose-600">
                Next Step
              </Button>
            </CarouselNext>
          </div>
        </Carousel>

        {/* ── How an AI Agent Works ────────────────────────── */}
        <section className="flex flex-col gap-4 mt-[10vh]">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
              <Sparkles size={16} />
              How an AI Agent Works
            </p>
            <p className="text-xs text-foreground/60">
              Instead of giving AI one instruction and waiting for an answer, an agent can
              work through multiple steps to accomplish a larger goal.
            </p>
          </div>

          {/* Steps — responsive grid so cards never get squeezed */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {/* Step 1 — dark feature card */}
            <div className="flex flex-col gap-3 rounded-[28px] bg-slate-950 p-6 text-white">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10">
                <Play size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose-300">
                  Step 1
                </p>
                <p className="mt-1 text-sm font-semibold">Give a Goal</p>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  Tell the agent what you want accomplished in plain language.
                </p>
              </div>
              <div className="mt-auto rounded-2xl bg-white/10 px-3 py-2 text-[11px] leading-5 text-white/70">
                &quot;Create a 6-week biology curriculum by researching products on Amazon that fit my budget.&quot;
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-3 rounded-[28px] border bg-white p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                <Layers2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose-500">
                  Step 2
                </p>
                <p className="mt-1 text-sm font-semibold">Make a Plan</p>
                <p className="mt-1 text-xs leading-5 text-foreground/60">
                  The agent breaks your goal into manageable, sequenced tasks.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1">
                <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] text-rose-600">
                  Research
                </span>
                <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] text-rose-600">
                  Compare
                </span>
                <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] text-rose-600">
                  Organize
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-3 rounded-[28px] border bg-white p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                <Search size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose-500">
                  Step 3
                </p>
                <p className="mt-1 text-sm font-semibold">Research</p>
                <p className="mt-1 text-xs leading-5 text-foreground/60">
                  It searches for information, reads sources, and synthesizes findings.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-1 rounded-full border bg-white px-3 py-1.5 text-[10px] text-foreground/60 shadow-sm">
                <Search size={11} />
                Finding resources...
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-3 rounded-[28px] border bg-white p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-500">
                <ShoppingBag size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose-500">
                  Step 4
                </p>
                <p className="mt-1 text-sm font-semibold">Use Tools</p>
                <p className="mt-1 text-xs leading-5 text-foreground/60">
                  Agents interact with tools, APIs, and browser to take action.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1">
                <span className="rounded-full border bg-white px-2 py-1 text-[10px]">
                  Web
                </span>
                <span className="rounded-full border bg-white px-2 py-1 text-[10px]">
                  Data
                </span>
                <span className="rounded-full border bg-white px-2 py-1 text-[10px]">
                  Social Media
                </span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col gap-3 rounded-[28px] border bg-white p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg shadow-rose-500/20">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose-500">
                  Step 5
                </p>
                <p className="mt-1 text-sm font-semibold">Deliver</p>
                <p className="mt-1 text-xs leading-5 text-foreground/60">
                  The agent combines everything into a polished, final result.
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-block rounded-full bg-rose-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  Curriculum created
                </span>
              </div>
            </div>
          </div>

          {/* Bottom explanation */}
          <Card className="relative overflow-hidden rounded-[35px] border bg-gradient-to-br from-white via-white to-rose-50/40 p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-rose-500/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-pink-500/5 blur-3xl" />

            <div className="relative flex flex-col gap-3 rounded-3xl border bg-white/70 p-5 backdrop-blur-sm md:flex-row md:items-center">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                <Info size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  The important difference
                </p>
                <p className="mt-1 text-xs leading-5 text-foreground/60">
                  A traditional AI interaction often looks like
                  <span className="font-medium text-foreground"> prompt → response</span>.
                  An agent can instead work more like
                  <span className="font-medium text-rose-500">
                    {" "}goal → plan → actions → research → reasoning → result
                  </span>.
                </p>
              </div>
            </div>
          </Card>
        </section>

      </section>
    </main>
  )
}