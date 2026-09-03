"use client"

import Link from "next/link";
import { ArrowLeft, BookOpen, FileQuestion, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="w-full max-w-2xl text-center">
        {/* 404 Visual */}
        <div className="relative mx-auto mb-10 h-52 w-80">
          {/* Back card */}
          <div className="absolute left-8 top-6 h-36 w-56 rotate-[-7deg] rounded-2xl border bg-muted/40 shadow-sm" />

          {/* Middle card */}
          <div className="absolute right-6 top-8 h-36 w-56 rotate-[6deg] rounded-2xl border bg-background shadow-md" />

          {/* Main card */}
          <div className="absolute left-1/2 top-1/2 flex h-40 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border bg-background shadow-xl">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FileQuestion className="h-6 w-6 text-primary" />
            </div>

            <span className="text-5xl font-black tracking-tight">
              404
            </span>
          </div>

          {/* Floating icons */}
          <div className="absolute -right-2 top-2 flex h-10 w-10 items-center justify-center rounded-xl border bg-background shadow-sm rotate-12">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>

          <div className="absolute -left-1 bottom-5 flex h-10 w-10 items-center justify-center rounded-xl border bg-background shadow-sm -rotate-12">
            <BookOpen className="h-4 w-4 text-primary" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            This curriculum doesn't exist.
          </h1>

          <p className="mx-auto max-w-md text-muted-foreground leading-relaxed">
            Looks like this page didn't make it into the curriculum.
            Let's get you back to where the learning happens.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Sparkles className="h-4 w-4" />
            Curriculum Builder
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border bg-background px-6 text-sm font-medium transition-all hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Branding */}
        <div className="mt-12 text-xs text-muted-foreground">
          Create-A-Curriculum
        </div>
      </div>
    </main>
  );
}