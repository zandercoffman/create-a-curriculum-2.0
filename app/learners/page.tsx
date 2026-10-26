"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ColorGradient, NameGradient } from "@/components/NameGradient";
import { nofex } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Pencil, Plus, Shell, UserStar } from "lucide-react";
import Image from "next/image"

type Learner = {
  name: string;
  photo: string;
  tasks: string[];
};

// Replace the photo paths with your real learner photos
const learners: Learner[] = [
  { name: "Zander Coffman", photo: "/learners/zander.jpg", tasks: ["Task 1", "Task 2", "Task 3"] },
];

export default function LearnersPage() {
  return (
    <main className="relative z-0 mb-20 flex w-full flex-col gap-2 px-6 pt-10 text-slate-950">
      <section className="ml-4 mb-4 w-full flex flex-col gap-1">
        <h1
          className={cn(
            "min-w-max text-4xl  font-semilight text-[#f06565]",
            nofex.className
          )}
        >
          Learners
        </h1>
        <p className=" text-slate-600">
          Start your learning journey by creating a learner and a teacher.
        </p>



      </section>

      <section className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1 ml-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <UserStar size={16} />
            Learners
          </p>
        </div>


        <Carousel opts={{ align: "start" }} className="w-[90vw]">

          <CarouselContent className="px-4 ml-8 mr-12">
            <CarouselItem
              className="basis-[calc(20vw+2rem)]"
            >
              <div className="group relative shadow-sm h-[50vh] w-full overflow-hidden rounded-[50px] border-2 ">
                {/* dot texture, like the grain on the other cards */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] bg-[size:24px_24px]" />
                <ColorGradient color="#808080" />
                {/* dashed "empty slot" border */}
                <div className="absolute inset-4 rounded-[36px] border-2 border-white/60" />

                <div className="cursor-pointer absolute inset-0 z-10 flex flex-col items-center justify-center gap-5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl shadow-black/25 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-125">
                    <Plus className="h-11 w-11 text-[#917575] transition-transform duration-300  group-hover:scale-135" strokeWidth={2.5}  />
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold tracking-tight text-white drop-shadow transition-transform duration-300  group-hover:scale-105">
                      New Learner
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/80 transition-transform duration-300  group-hover:scale-105">
                      Start a new journey
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>



            {learners.map((learner) => (
              <CarouselItem
                key={learner.name}
                className="basis-[calc(20vw+2rem)]"
              >
                <div className="relative shadow-sm h-[50vh] w-full overflow-hidden rounded-[50px] border-2">
                  {/* Gradient background */}
                  <NameGradient name={learner.name} />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col p-5">
                    {/* Top row: tasks + edit */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        {learner.tasks.map((task) => (
                          <div
                            key={task}
                            className="flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm backdrop-blur-sm"
                          >
                            <span className="size-2.5 shrink-0 rounded-full bg-[#f06565]" />
                            {task}
                          </div>
                        ))}
                      </div>

                      <button
                        aria-label={`Edit ${learner.name}`}
                        className="flex opacity-[90%] size-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg ring-1 ring-black/10 hover:bg-slate-100"
                      >
                        <Pencil className="size-5" />
                      </button>
                    </div>

                    {/* Bottom: photo + name */}
                    <div className="mt-auto">
                      <Image
                        src={learner.photo}
                        alt={learner.name}
                        width={96}
                        height={96}
                        className="size-24 rounded-full object-cover ring-2 ring-white/50"
                      />
                      <h3 className="mt-3 mb-2 text-3xl flex flex-col gap-1 font-semibold leading-[0.95] text-black">
                        {learner.name.split(" ").map((part) => (
                          <span key={part} className="block">
                            {part}
                          </span>
                        ))}
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Left fade: white -> transparent, left to right */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          {/* Right fade: white -> transparent, right to left */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          <CarouselPrevious className="left-2 z-20" />
          <CarouselNext className="right-2 z-20" />
        </Carousel>
      </section>

      <section className="flex w-full mt-12 flex-col gap-4">
        <div className="flex flex-col gap-1 ml-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <Shell size={16} />
            Instructors
          </p>
        </div>


        <Carousel opts={{ align: "start" }} className="w-[90vw]">


          <CarouselContent className="px-4 ml-8 mr-12">
            {learners.map((learner) => (
              <CarouselItem
                key={learner.name}
                className="basis-[calc(20vw+2rem)]"
              >
                <div className="relative shadow-sm h-[50vh] w-full overflow-hidden rounded-[50px] border-2">
                  {/* Gradient background */}
                  <NameGradient name={learner.name} />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col p-5">
                    {/* Top row: tasks + edit */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        {learner.tasks.map((task) => (
                          <div
                            key={task}
                            className="flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm backdrop-blur-sm"
                          >
                            <span className="size-2.5 shrink-0 rounded-full bg-[#f06565]" />
                            {task}
                          </div>
                        ))}
                      </div>

                      <button
                        aria-label={`Edit ${learner.name}`}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg ring-1 ring-black/10 hover:bg-slate-100"
                      >
                        <Pencil className="size-5" />
                      </button>
                    </div>

                    {/* Bottom: photo + name */}
                    <div className="mt-auto">
                      <Image
                        src={learner.photo}
                        alt={learner.name}
                        width={96}
                        height={96}
                        className="size-24 rounded-full object-cover ring-2 ring-white/50"
                      />
                      <h3 className="mt-3 text-4xl font-bold leading-[0.95] text-black">
                        {learner.name.split(" ").map((part) => (
                          <span key={part} className="block">
                            {part}
                          </span>
                        ))}
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Left fade: white -> transparent, left to right */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          {/* Right fade: white -> transparent, right to left */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          <CarouselPrevious className="left-2 z-20" />
          <CarouselNext className="right-2 z-20" />
        </Carousel>
      </section>
    </main>
  );
}
