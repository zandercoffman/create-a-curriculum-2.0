"use client"

import { nofex } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function LearnersPage() {
    return <main className="relative z-0 flex min-h-[95vh] w-[90%] flex-col gap-10 px-10 pl-12 pt-20 text-slate-950">
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
                Learners
              </h1>

            </section>
        </section>
    </main>
}