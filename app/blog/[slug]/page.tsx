"use client"

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogs } from "../page";
import { useMobile } from "@/lib/useMobile";
import { useDarkMode } from "@/lib/useDarkMode";
import { cn } from "cn";

// Markdown element styles for the mobile layout — sized for a phone
// (smaller headings, roomier line-height) and colored through
// useDarkMode instead of dark: classes.
function mobileMarkdownComponents(isDark: boolean) {
    const heading = isDark ? "text-slate-50" : "text-[#221c46]";
    const body = isDark ? "text-slate-200" : "text-slate-700";
    return {
        h2: ({ children }: { children?: React.ReactNode }) => (
            <h2 className={cn("mb-2.5 mt-8 text-[22px] font-bold leading-snug", heading)}>
                {children}
            </h2>
        ),
        h3: ({ children }: { children?: React.ReactNode }) => (
            <h3 className={cn("mb-2 mt-6 text-lg font-bold leading-snug", heading)}>
                {children}
            </h3>
        ),
        p: ({ children }: { children?: React.ReactNode }) => (
            <p className={cn("mb-4 text-base leading-[1.75]", body)}>{children}</p>
        ),
        ul: ({ children }: { children?: React.ReactNode }) => (
            <ul className={cn("mb-4 list-disc space-y-1.5 pl-5 text-base leading-[1.75]", body)}>
                {children}
            </ul>
        ),
        ol: ({ children }: { children?: React.ReactNode }) => (
            <ol className={cn("mb-4 list-decimal space-y-1.5 pl-5 text-base leading-[1.75]", body)}>
                {children}
            </ol>
        ),
        a: ({
            children,
            href,
        }: {
            children?: React.ReactNode;
            href?: string;
        }) => (
            <a
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={cn(
                    "font-medium underline-offset-2 hover:underline",
                    isDark ? "text-[#ff8585]" : "text-[#f06565]"
                )}
            >
                {children}
            </a>
        ),
        strong: ({ children }: { children?: React.ReactNode }) => (
            <strong className={cn("font-semibold", isDark ? "text-white" : "text-slate-900")}>
                {children}
            </strong>
        ),
        blockquote: ({ children }: { children?: React.ReactNode }) => (
            <blockquote
                className={cn(
                    "mb-4 border-l-4 border-[#f06565] pl-4 italic",
                    isDark ? "text-slate-300" : "text-slate-600"
                )}
            >
                {children}
            </blockquote>
        ),
        code: ({ children }: { children?: React.ReactNode }) => (
            <code
                className={cn(
                    "rounded px-1.5 py-0.5 text-[0.9em]",
                    isDark ? "bg-slate-800 text-slate-100" : "bg-slate-100 text-slate-800"
                )}
            >
                {children}
            </code>
        ),
        img: ({ src, alt }: { src?: string | Blob; alt?: string }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={typeof src === "string" ? src : ""}
                alt={alt ?? ""}
                className="my-5 w-full rounded-[1.25rem]"
            />
        ),
    };
}

// Renders one blog post: finds the post object by slug, fetches its
// markdown file from public/, and renders it. Needs:
//   npm install react-markdown remark-gfm
export default function BlogPostPage() {
    const params = useParams<{ slug: string }>();
    const post = blogs.find((blog) => blog.slug === params.slug);

    const isMobile = useMobile();
    const { isDark } = useDarkMode();

    const [markdown, setMarkdown] = React.useState<string | null>(null);
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
        if (!post) return;
        let cancelled = false;
        fetch(post.markdownFile)
            .then((res) => {
                if (!res.ok) throw new Error("Markdown file not found");
                return res.text();
            })
            .then((text) => {
                if (!cancelled) setMarkdown(text);
            })
            .catch(() => {
                if (!cancelled) setFailed(true);
            });
        return () => {
            cancelled = true;
        };
    }, [post]);

    if (isMobile === null) {
        return (
            <main className="flex min-h-[95vh] w-full items-center justify-center px-5 text-slate-500 dark:text-slate-400">
                Loading…
            </main>
        );
    }

    if (!post) {
        if (isMobile) {
            return (
                <main className="flex min-h-[95vh] w-full flex-col gap-4 px-5 pb-36 pt-16 text-slate-950 dark:text-slate-50">
                    <h1 className="text-2xl font-bold">Post not found</h1>
                    <p className="text-slate-600 dark:text-slate-300">
                        That blog post doesn&apos;t exist.
                    </p>
                    <Link
                        href="/blog"
                        className="py-1 font-semibold text-[#f06565] dark:text-[#ff8585]"
                    >
                        ← All posts
                    </Link>
                </main>
            );
        }

        return (
            <main className="relative items-center z-0 flex min-h-[95vh] w-[90%] flex-col gap-6 px-10 pl-12 pt-20 text-slate-950 dark:text-slate-50">
                <h1 className="text-3xl font-bold">Post not found</h1>
                <p className="text-slate-600 dark:text-slate-300">
                    That blog post doesn&apos;t exist.
                </p>
                <Link
                    href="/blog"
                    className="font-semibold text-[#f06565] hover:underline dark:text-[#ff8585]"
                >
                    ← All posts
                </Link>
            </main>
        );
    }

    if (isMobile) {
        return (
            <main className="flex min-h-[95vh] w-screen flex-col px-5 pb-36 pt-16 text-slate-950 dark:text-slate-50">
                <article className="flex w-full flex-col">
                    <Link
                        href="/blog"
                        className={cn(
                            "mb-5 inline-flex items-center py-1 text-[15px] font-semibold",
                            isDark ? "text-[#ff8585]" : "text-[#f06565]"
                        )}
                    >
                        ← All posts
                    </Link>

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.25rem]">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {post.author ? (
                        <div
                            className={cn(
                                "mt-5 flex items-center gap-2 text-[13px]",
                                isDark ? "text-slate-400" : "text-slate-500"
                            )}
                        >
                            {post.authorAvatar && (
                                <Image
                                    src={post.authorAvatar}
                                    alt={post.author}
                                    width={24}
                                    height={24}
                                    className="size-6 rounded-full object-cover"
                                />
                            )}
                            <span
                                className={cn(
                                    "font-medium",
                                    isDark ? "text-slate-200" : "text-slate-700"
                                )}
                            >
                                {post.author}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{post.date}</span>
                        </div>
                    ) : (
                        <p
                            className={cn(
                                "mt-5 text-[13px]",
                                isDark ? "text-slate-400" : "text-slate-500"
                            )}
                        >
                            {post.date}
                        </p>
                    )}

                    <h1
                        className={cn(
                            "mt-2 text-[28px] font-bold leading-tight",
                            isDark ? "text-slate-50" : "text-[#221c46]"
                        )}
                    >
                        {post.title}
                    </h1>
                    <p
                        className={cn(
                            "mt-2.5 text-base leading-relaxed",
                            isDark ? "text-slate-300" : "text-slate-600"
                        )}
                    >
                        {post.description}
                    </p>

                    <div className="mt-6">
                        {failed ? (
                            <p className={isDark ? "text-slate-300" : "text-slate-600"}>
                                This post couldn&apos;t be loaded. Please try
                                again later.
                            </p>
                        ) : markdown === null ? (
                            <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                                Loading post…
                            </p>
                        ) : (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={mobileMarkdownComponents(isDark)}
                            >
                                {markdown}
                            </ReactMarkdown>
                        )}
                    </div>
                </article>
            </main>
        );
    }

    return (
        <main className="relative items-center z-0 flex min-h-[95vh] w-[90%] flex-col gap-10 px-10 pl-12 pt-20 text-slate-950 dark:text-slate-50">
            <article className="flex w-full max-w-3xl flex-col pb-20">
                <Link
                    href="/blog"
                    className="mb-6 font-semibold text-[#f06565] hover:underline dark:text-[#ff8585]"
                >
                    ← All posts
                </Link>

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem]">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                        priority
                    />
                </div>

                {post.author ? (
                    <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        {post.authorAvatar && (
                            <Image
                                src={post.authorAvatar}
                                alt={post.author}
                                width={24}
                                height={24}
                                className="size-6 rounded-full object-cover"
                            />
                        )}
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                            {post.author}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                    </div>
                ) : (
                    <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                        {post.date}
                    </p>
                )}

                <h1 className="mt-2 text-4xl font-bold leading-tight text-[#221c46] dark:text-slate-50">
                    {post.title}
                </h1>
                <p className="mt-3 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {post.description}
                </p>

                <div className="mt-8">
                    {failed ? (
                        <p className="text-slate-600 dark:text-slate-300">
                            This post couldn&apos;t be loaded. Please try
                            again later.
                        </p>
                    ) : markdown === null ? (
                        <p className="text-slate-500 dark:text-slate-400">
                            Loading post…
                        </p>
                    ) : (
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h2: ({ children }) => (
                                    <h2 className="mb-3 mt-10 text-2xl font-bold text-[#221c46] dark:text-slate-50">
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 className="mb-2 mt-8 text-xl font-bold text-[#221c46] dark:text-slate-50">
                                        {children}
                                    </h3>
                                ),
                                p: ({ children }) => (
                                    <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-200">
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul className="mb-4 list-disc space-y-1.5 pl-6 leading-relaxed text-slate-700 dark:text-slate-200">
                                        {children}
                                    </ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className="mb-4 list-decimal space-y-1.5 pl-6 leading-relaxed text-slate-700 dark:text-slate-200">
                                        {children}
                                    </ol>
                                ),
                                a: ({ children, href }) => (
                                    <a
                                        href={href}
                                        target={
                                            href?.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noreferrer"
                                        className="font-medium text-[#f06565] hover:underline dark:text-[#ff8585]"
                                    >
                                        {children}
                                    </a>
                                ),
                                strong: ({ children }) => (
                                    <strong className="font-semibold text-slate-900 dark:text-white">
                                        {children}
                                    </strong>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="mb-4 border-l-4 border-[#f06565] pl-4 italic text-slate-600 dark:text-slate-300">
                                        {children}
                                    </blockquote>
                                ),
                                code: ({ children }) => (
                                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.9em] text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                                        {children}
                                    </code>
                                ),
                                img: ({ src, alt }) => (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={typeof src === "string" ? src : ""}
                                        alt={alt ?? ""}
                                        className="my-6 w-full rounded-[1.75rem]"
                                    />
                                ),
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    )}
                </div>
            </article>
        </main>
    );
}
