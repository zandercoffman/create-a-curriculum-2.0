"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


import { navItems } from "@/lib/static-unchanging"

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <aside className="group/sidebar fixed inset-y-0 left-0 z-40 flex h-screen w-[70px] flex-col overflow-hidden border-r border-border/80 bg-background/95 backdrop-blur-md transition-[width] duration-200 ease-out hover:w-[260px]">
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
                            className="mt-1 text-lg font-semibold text-foreground"
                            style={{
                                background: "linear-gradient(45deg, #ff6b6b, #f06595)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                fontWeight: 700,
                            }}
                        >
                            create a curriculum
                        </span>
                        <span className="translate-y-[-2.5px] text-right text-xs text-foreground/80">.vercel.app</span>
                    </div>
                </div>
            </div>

            <nav className="mt-3 flex flex-1 flex-col gap-1 px-2">
                {navItems.map(({ label, icon: Icon, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="group relative flex h-10 w-full items-center gap-3 overflow-hidden rounded-xl px-3 text-left text-foreground/80 transition-colors duration-200 hover:bg-accent/60"
                    >
                        <Icon className="ml-1 h-6 w-6 shrink-0" />
                        <span className="overflow-hidden whitespace-nowrap text-[8px] font-medium opacity-0 transition-all duration-200 group-hover/sidebar:text-[15px] group-hover/sidebar:opacity-100">
                            {label}
                        </span>
                    </Link>
                ))}
            </nav>

            
        </aside>
    )
}
