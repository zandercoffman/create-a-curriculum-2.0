"use client";

import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function MarkdownPage() {
  const searchParams = useSearchParams();
  const text = searchParams.get("text") || "";

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="mb-6 text-4xl font-bold tracking-tight">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mb-4 mt-8 text-2xl font-semibold">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-3 mt-6 text-xl font-semibold">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 leading-7 text-muted-foreground">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="mb-4 ml-6 list-disc space-y-2">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-4 ml-6 list-decimal space-y-2">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-7">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-6 border-l-4 pl-4 italic text-muted-foreground">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="my-6 overflow-x-auto rounded-xl bg-muted p-4">
                {children}
              </pre>
            ),
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </main>
  );
}