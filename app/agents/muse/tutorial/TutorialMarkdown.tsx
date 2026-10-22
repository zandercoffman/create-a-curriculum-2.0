"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { nofex } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AlertCircle, BookOpen, Loader2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type TutorialMarkdownProps = {
    /** Public URL of the markdown file, e.g. "/agentTutorials/muse/setting-up-meta-muse.md" */
    mdPath: string;
    /** Section title, shown while the markdown is loading */
    title: string;
};

export function TutorialMarkdown({ mdPath, title }: TutorialMarkdownProps) {
    const [content, setContent] = useState<string | null>(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        let cancelled = false;

        fetch(mdPath)
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.text();
            })
            .then((markdown) => {
                if (!cancelled) {
                    console.log("fetched:", JSON.stringify(markdown.slice(0, 60)));
                    setContent(markdown);
                }
            })

            .catch(() => {
                if (!cancelled) setFailed(true);
            });

        return () => {
            cancelled = true;
        };
    }, [mdPath]);

    if (failed) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="w-full max-w-lg rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-rose-50 p-8 shadow-sm">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
                        <AlertCircle className="h-7 w-7 text-red-500" />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                                {title}
                            </h1>
                        </div>

                        <p className="text-sm leading-6 text-slate-600">
                            We couldn&apos;t load this tutorial right now. Please try
                            refreshing the page or coming back in a moment.
                        </p>
                    </div>

                    <div className="mt-6 rounded-xl border border-red-100 bg-white/70 px-4 py-3">
                        <p className="text-xs font-medium text-red-500">
                            TUTORIAL UNAVAILABLE
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (content === null) {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-3">
                <Skeleton className="h-10 w-72 rounded-lg" />
                <Skeleton className="h-5 w-[420px] max-w-full" />
            </div>

            {/* Hero / intro */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="space-y-4">
                    <Skeleton className="h-6 w-48" />

                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[75%]" />
                </div>
            </div>

            {/* Section */}
            <div className="space-y-5">
                <Skeleton className="h-8 w-64 rounded-lg" />

                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[85%]" />
            </div>

            {/* Fake image / tutorial visual */}
            <Skeleton className="h-64 w-full rounded-2xl" />

            {/* More content */}
            <div className="space-y-4">
                <Skeleton className="h-7 w-52 rounded-lg" />

                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[92%]" />
                <Skeleton className="h-4 w-[70%]" />
            </div>
        </div>
    );
}

    return (
        <div className="prose prose-slate max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    img: ({ alt, src }) => {
                        const srcText = typeof src === "string" ? src : undefined;
                        if (srcText && srcText.startsWith("/agentTutorials/")) {
                            return (
                                <img
                                    src={srcText}
                                    alt={alt || ""}
                                    className="mx-auto my-6 rounded-lg border border-slate-300"
                                />
                            );
                        }
                        return (
                            <div className="not-prose my-6 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 px-6 py-10 text-center">
                                <div className="text-4xl">🖼️</div>
                                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Screenshot placeholder
                                </p>
                                {alt && (
                                    <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">{alt}</p>
                                )}
                                {srcText && (
                                    <p className="mt-1 font-mono text-xs text-slate-400">{srcText}</p>
                                )}
                            </div>
                        );
                    },
                    h1: ({ node, ...props }) => <h1 className={cn("text-4xl tracking-wide flex flex-row items-center gradient-muse my-6 font-bold", nofex.className)} >
                        <Separator orientation="vertical" className="mr-4 w-20" /> {props.children}
                    </h1>,
                    p: ({ node, ...props }) => <p className="text-md leading-normal text-slate-700 my-4">{props.children}</p>,
                    h2: ({ node, ...props }) => <h2 className={cn("text-3xl tracking-wide flex flex-row items-center gradient-muse my-6 font-bold")} >
                        <Separator orientation="vertical" className="mr-4 w-20" /> {props.children}
                    </h2>,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
