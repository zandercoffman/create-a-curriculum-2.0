"use client"

import Image from "next/image";
import Link from "next/link";
import { nofex } from "@/lib/fonts";
import { cn } from "cn";

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage: string;
    markdownFile: string;
    author?: string;
    authorAvatar?: string;
};

// One object per blog post. The post itself is a markdown file in
// public/blog/ — `markdownFile` points at it, `slug` is the URL
// (/blog/<slug>). Newest post first.
export const blogs: BlogPost[] = [
    {
        slug: "welcome-to-create-a-curriculum-2-0",
        title: "Welcome to Create-a-Curriculum 2.0!",
        description:
            "Create-A-Curriculum 2.0 is here — a rebuilt site with Plan with Products, AI prompt generators, AI agents, Learners, dark mode, and a mobile experience that actually works. See what's changed.",
        date: "Oct 31, 2026",
        coverImage: "/create-a-curriculum-gallery 2/home-desktop.png",
        markdownFile: "/blog/01/welcome-to-create-a-curriculum-2-0.md",
    },
    {
        slug: "using-ai-in-education",
        title: "Using AI in Education",
        description:
            "What two recent studies say about AI and learning, why the effort is where the learning happens, and a few habits that keep the learner doing the thinking.",
        date: "Nov 25, 2026",
        coverImage: "https://images.pexels.com/photos/35745339/pexels-photo-35745339.jpeg",
        markdownFile: "/blog/02/using-ai-in-education.md",
    },
];

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex w-full flex-col text-left"
        >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem]">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {post.author ? (
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
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
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    {post.date}
                </p>
            )}

            <h2 className="mt-1.5 text-[22px] font-bold leading-snug text-[#221c46] transition-colors group-hover:text-[#f06565] dark:text-slate-50 dark:group-hover:text-[#ff8585]">
                {post.title}
            </h2>
            <p className="mt-1.5 line-clamp-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                {post.description}
            </p>
        </Link>
    );
}

export default function BlogPage() {
    return (
        <main className="relative items-center z-0 flex min-h-[95vh] w-full lg:w-[90%] flex-col gap-10 px-10 pl-12 pt-20 text-slate-950 dark:text-slate-50">
            <h1
                className={cn(
                    "min-w-max text-5xl font-semilight text-[#f06565] dark:text-[#ff8585]",
                    nofex.className
                )}
            >
                BLOG
            </h1>

            {blogs.length === 0 ? (
                <p className="text-slate-500 dark:text-slate-400">
                    No posts yet — check back soon.
                </p>
            ) : (
                <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 pb-20 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            )}
        </main>
    );
}
