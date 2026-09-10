"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navItems } from "@/lib/static-unchanging"

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <aside className="group/sidebar fixed inset-y-0 left-0 z-40 flex h-screen w-[70px] flex-col overflow-hidden border-r border-border/80 bg-background/95 backdrop-blur-md transition-[width] duration-200 ease-out hover:w-[260px]">
            {/* Logo */}
            <div className="flex items-center gap-3 px-4 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1 shadow-sm">
                    <Image
                        src="/cacicon.png"
                        alt="Create a Curriculum"
                        width={28}
                        height={28}
                        className="rounded-lg object-cover"
                    />
                </div>

                <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex translate-x-[-12px] flex-col leading-none opacity-0 transition-all duration-200 group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100">
                        <span
                            className="mt-1 text-lg font-semibold"
                            style={{
                                background:
                                    "linear-gradient(45deg, #ff6b6b, #f06595)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: 700,
                            }}
                        >
                            create a curriculum
                        </span>

                        <span className="translate-y-[-2.5px] text-right text-xs text-foreground/80">
                            .vercel.app
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="mt-3 flex flex-1 flex-col gap-4 px-2">
                {navItems.map((section) => {
                    {/* Standalone links such as Home */ }
                    if ("href" in section) {
                        const isActive =
                            pathname === section.href ||
                            (section.href !== "/" &&
                                pathname.startsWith(`${section.href}/`))

                        const Icon = section.icon

                        return (
                            <Link
                                key={section.label}
                                href={section.href || "/"}
                                className={`group relative flex h-6 w-full items-center gap-3 overflow-hidden rounded-xl px-3 text-left transition-colors duration-200 ${isActive
                                        ? "bg-accent text-foreground"
                                        : "text-foreground/80 hover:bg-accent/60"
                                    }`}
                            >
                                <Icon className="ml-1 h-6 w-6 shrink-0" />

                                <span className="overflow-hidden whitespace-nowrap text-[15px] font-medium opacity-0 transition-all duration-200 group-hover/sidebar:opacity-100">
                                    {section.label}
                                </span>
                            </Link>
                        )
                    }

                    const GroupIcon = section.icon

                    return (
                        <div
                            key={section.label}
                            className="flex flex-col gap-1"
                        >
                            {/* Category heading */}
                            <div className="flex h-0 items-center gap-3 overflow-hidden px-3 opacity-0 transition-all duration-200 group-hover/sidebar:h-6 group-hover/sidebar:opacity-100">
                                <GroupIcon className="ml-1 size-4 shrink-0 text-foreground/50" />

                                <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-foreground/30">
                                    {section.label}
                                </span>
                            </div>

                            {/* Sub-items */}
                            <div className="flex flex-col">
                                {section.items.map((item) => {
                                    const Icon = item.icon

                                    const isActive =
                                        pathname === item.href ||
                                        pathname.startsWith(`${item.href}/`)

                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className={`group relative flex h-10 w-full items-center gap-3 overflow-hidden rounded-xl px-3 text-left transition-colors duration-200 ${isActive
                                                    ? "bg-accent text-foreground"
                                                    : "text-foreground/70 hover:bg-accent/60 hover:text-foreground"
                                                }`}
                                        >
                                            <Icon className="ml-1 h-5 w-5 shrink-0" />

                                            <span
                                                className="
                                                    overflow-hidden whitespace-nowrap
                                                    text-[15px] font-medium
                                                    opacity-0
                                                    transition-all duration-200
                                                    group-hover/sidebar:opacity-100
                                                "
                                            >
                                                {item.label}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

                {/* Flashcardit */}
                <Link
                    href="https://flashcardit.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-10 w-full items-center gap-3 overflow-hidden rounded-xl px-3 text-left text-foreground/80 transition-colors duration-200 hover:bg-accent/60"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-6 w-6 shrink-0"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M 4,2 H 20 V 7 H 9 V 10.5 L 14,10.5 L 10,14.5 L 12,14.5 L 7.5,19.5 L 9,16.5 H 4 V 22 H 9 V 16.5 L 11.5,13.5 H 9.5 L 13.5,9.5 H 9 V 7 H 4 Z"
                        />
                    </svg>

                    <span className="overflow-hidden whitespace-nowrap text-[15px] font-medium opacity-0 transition-all duration-200 group-hover/sidebar:opacity-100">
                        flashcardit.vercel.app
                    </span>
                </Link>
            </nav>
        </aside>
    )
}