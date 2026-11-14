"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { betaNavs, findNavItemByHref, NavItem, navItems } from "@/lib/static-unchanging"
import { Button } from "./ui/button"
import { useDarkMode } from "@/lib/useDarkMode"
import {
    ArrowDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Info,
    MessageCircle,
    Moon,
    Scale,
    Settings,
    Sun,
} from "lucide-react"
import { useMobile } from "@/lib/useMobile"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "./ui/badge"

export function AppSidebar() {
    const pathname = usePathname()
    const [hovered, setHovered] = useState(false)
    const [pinned, setPinned] = useState(false)
    const open = hovered || pinned

    const { isDark, toggleDarkMode } = useDarkMode()
    const isMobile = useMobile()

    const [mobileNavOpen, setMobileNavOpen] = useState(false)



    const page: NavItem | undefined = findNavItemByHref(pathname);
    const PageIcon = page?.icon

    if (isMobile === null) return <></>


    if (!isMobile) {
        return (
            <aside
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`fixed inset-y-0 left-0 z-40 flex h-screen flex-col overflow-hidden border-r border-white/60 bg-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-2xl backdrop-saturate-150 transition-[width] duration-200 ease-out dark:border-white/10 dark:bg-zinc-900/60 ${open ? "w-72" : "w-[70px]"
                    }`}

            >
                {/* Logo */}
                <div className="flex items-center gap-3 px-4 py-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#d7287d] p-1 shadow-sm">
                        <Image
                            src="/cacicon.png"
                            alt="Create a Curriculum"
                            width={28}
                            height={28}
                            className="rounded-lg object-cover"
                        />
                    </div>

                    <div className="overflow-hidden ml-auto mr-4 whitespace-nowrap">
                        <div
                            className={`flex flex-col leading-none transition-all duration-200 ${open
                                ? "translate-x-0 opacity-100"
                                : "translate-x-[-12px] opacity-0"
                                }`}
                        >
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
                <nav className="mt-3 flex flex-1 flex-col gap-4 overflow-y-auto px-2">
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

                                    <span
                                        className={`overflow-hidden whitespace-nowrap text-[15px] font-medium transition-all duration-200 ${open ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        {section.label}
                                    </span>
                                </Link>
                            )
                        }

                        const GroupIcon = section.icon

                        return (
                            <div key={section.label} className="flex flex-col gap-1">
                                {/* Category heading */}
                                <div
                                    className={`flex items-center gap-3 overflow-hidden px-3 transition-all duration-200 ${open
                                        ? "h-6 opacity-100"
                                        : "h-0 opacity-0"
                                        }`}
                                >
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
                                                    className={`overflow-hidden whitespace-nowrap text-[15px] font-medium transition-all duration-200 ${open
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                        }`}
                                                >
                                                    {item.label}
                                                </span>
                                                {
                                                    betaNavs.includes(item.label.toLowerCase()) && (
                                                        <Badge className="ml-auto shrink-0 whitespace-nowrap rounded-full border border-[#F06565]/20 bg-[#F06565]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#F06565] dark:border-[#F06565]/30 dark:bg-[#F06565]/15 dark:text-[#FF8A8A]">
                                                            In Progress
                                                        </Badge>
                                                    )
                                                }

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

                        <span
                            className={`overflow-hidden whitespace-nowrap text-[15px] font-medium transition-all duration-200 ${open ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            flashcardit.vercel.app
                        </span>
                    </Link>
                </nav>

                {/* Bottom section, pinned to the bottom */}
                <div className="shrink-0 px-2 pb-3 pt-2">
                    {/* Theme / Settings / Legal */}
                    <div
                        className={`flex w-full flex-row items-center justify-center overflow-hidden whitespace-nowrap transition-all duration-200 ${open ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Button
                            variant="ghost"
                            onClick={toggleDarkMode}
                            className="h-12 flex-1 flex-col items-center justify-center gap-1 px-2 rounded-full text-xs"
                            title="Toggle theme"
                            aria-label="Toggle theme"
                        >
                            {
                                !isDark ? (
                                    <Moon className="size-4" />
                                ) : (
                                    <Sun className="size-4" />
                                )
                            }

                            <span>
                                {!isDark ? "Dark" : "Light"} Mode
                            </span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-12 flex-1 flex-col items-center justify-center gap-1 px-2 rounded-full text-xs"
                            title="Settings"
                            aria-label="Settings"
                        >
                            <Settings className="size-4" />
                            <span>Settings</span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-12 flex-1 flex-col items-center justify-center gap-1 px-2 rounded-full text-xs"
                            title="Privacy policy and legal"
                            aria-label="Privacy policy and legal"
                        >
                            <a
                                href="/privacy"
                                className="flex flex-col items-center justify-center gap-1"
                            >
                                <Info className="size-4" />
                                <span>Information</span>
                            </a>
                        </Button>
                    </div>

                    {/* Beta / Feedback */}
                    <div
                        className={`mt-2 flex items-center justify-between px-3 pb-1 text-xs text-muted-foreground transition-all duration-200 ${open ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <span>create-a-curriculum</span>
                        <Link
                            href="/feedback"
                            className="flex items-center gap-1 hover:text-foreground"
                        >
                            <MessageCircle className="size-3.5" />
                            Feedback
                        </Link>
                    </div>


                </div>
            </aside>
        )
    } else {
        return (
            <aside
                className="fixed bottom-0 left-1/2 z-20 flex h-13 w-[85vw] -translate-x-1/2 items-center justify-center rounded-full
    border border-[#d1d1d6]/80 bg-[#fbfbfb]/85
    shadow-[0_-10px_25px_-12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.75)]
    backdrop-blur-2xl backdrop-saturate-150 text-foreground
    dark:border-white/10 dark:bg-[#17171c]/85
    dark:shadow-[0_-10px_25px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
                {/* Top glare, Safari-style */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-4 rounded-full
        bg-gradient-to-b from-white/40 via-white/10 to-transparent
        dark:from-white/10 dark:via-white/[0.03] dark:to-transparent"
                />

                <div className="relative z-10 flex h-full w-full shrink-0 flex-row items-center justify-between gap-4  px-4 overflow-hidden rounded-xl">

                    {/* Left Logo */}
                    <Image
                        src="/cacicon.png"
                        alt="Create a Curriculum"
                        width={28}
                        height={28}
                        className="rounded-lg object-cover"
                    />

                    {/* Navigation Drawer */}
                    <Drawer open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
                        <DrawerTrigger
                            render={
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="group relative h-12 flex-1
                        flex-row items-center justify-center gap-2
                        overflow-hidden rounded-full px-6
                        border border-transparent
                        text-sm font-medium text-foreground
                        backdrop-blur-2xl backdrop-saturate-150
                        transition-all duration-300 ease-out
                        hover:-translate-y-0.5
                        hover:border-white/70
                        hover:bg-white/65
                        hover:shadow-[0_8px_24px_rgba(0,0,0,0.09),inset_0_1px_0_rgba(255,255,255,0.95)]
                        active:translate-y-0 active:scale-[0.98]
                        dark:border-white/10
                        dark:bg-gradient-to-b
                        dark:from-white/10
                        dark:via-white/[0.06]
                        dark:to-white/[0.03]
                        dark:shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]
                        dark:hover:border-white/20
                        dark:hover:bg-white/[0.12]
                        dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]"
                                    title="Open sidebar"
                                    aria-label="Open sidebar"
                                >
                                    {PageIcon && (
                                        <PageIcon className="size-5 shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-110" />
                                    )}

                                    <span className="truncate">
                                        {page?.label ?? "Menu"}
                                    </span>

                                    <ChevronUp className="size-3.5 shrink-0 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                </Button>
                            }
                        >
                            Open
                        </DrawerTrigger>

                        {/* Drawer Content */}
                        <DrawerContent
                            className="
    h-[90vh] rounded-t-[16px]
    border border-white/40
    bg-white/30
    shadow-[0_-10px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.55)]
    backdrop-blur-2xl backdrop-saturate-150

    dark:border-white/10
    dark:bg-[#24242c]/30
    dark:shadow-[0_-10px_40px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.08)]
    dark:backdrop-blur-2xl dark:backdrop-saturate-150
">

                            {/* Logo / Branding */}
                            <div className="mx-auto flex items-center gap-3 px-4 py-5">
                                <Image
                                    src="/cacicon.png"
                                    alt="Create a Curriculum"
                                    width={28}
                                    height={28}
                                    className="rounded-lg object-cover"
                                />

                                <div className="flex flex-col justify-start leading-none transition-all duration-200">
                                    <span
                                        className="mt-1 text-lg font-semibold"
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

                                    <span className="translate-y-[-4.5px] text-center text-xs text-foreground/80">
                                        .vercel.app
                                    </span>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="mt-4 flex max-h-[90vh] flex-col gap-4 overflow-y-auto px-4 pb-6">

                                {navItems.map((section) => {
                                    if (section.href) {
                                        const Icon = section.icon

                                        const isActive =
                                            pathname === section.href ||
                                            (section.href !== "/" &&
                                                pathname.startsWith(`${section.href}/`))

                                        return (
                                            <Link
                                                key={section.label}
                                                href={section.href}
                                                onClick={() => setMobileNavOpen(false)}
                                                className={`flex h-8 w-full items-center gap-3 rounded-xl px-3 text-[15px] font-medium transition-all duration-200 ${isActive
                                                    ? "bg-accent text-foreground shadow-sm dark:bg-white/10 dark:text-white"
                                                    : "text-foreground/70 hover:bg-accent/60 hover:text-foreground dark:hover:bg-white/[0.06] dark:hover:text-white"
                                                    }`}
                                            >
                                                <Icon className="h-5 w-5 shrink-0" />
                                                {section.label}
                                            </Link>
                                        )
                                    }

                                    const GroupIcon = section.icon

                                    return (
                                        <div key={section.label} className="flex flex-col gap-1">

                                            {/* Group Heading */}
                                            <div className="flex items-center gap-3 px-3">
                                                <GroupIcon className="size-4 shrink-0 text-foreground/50" />

                                                <span className="text-xs font-semibold uppercase tracking-wider text-foreground/30">
                                                    {section.label}
                                                </span>
                                            </div>

                                            {/* Group Items */}
                                            {section.items?.map((item) => {
                                                const Icon = item.icon

                                                const isActive =
                                                    pathname === item.href ||
                                                    (item.href &&
                                                        pathname.startsWith(`${item.href}/`))

                                                return (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href ?? "/"}
                                                        onClick={() => setMobileNavOpen(false)}
                                                        className={`flex h-9 w-full items-center gap-3 rounded-xl px-3 text-[15px] font-medium transition-all duration-200 ${isActive
                                                            ? "bg-accent text-foreground shadow-sm dark:bg-white/10 dark:text-white"
                                                            : "text-foreground/70 hover:bg-accent/60 hover:text-foreground dark:hover:bg-white/[0.06] dark:hover:text-white"
                                                            }`}
                                                    >
                                                        <Icon className="h-5 w-5 shrink-0" />
                                                        {item.label}
                                                        {
                                                            betaNavs.includes(item.label.toLowerCase()) && (
                                                                <Badge className="ml-auto shrink-0 whitespace-nowrap rounded-full border border-[#F06565]/20 bg-[#F06565]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#F06565] dark:border-[#F06565]/30 dark:bg-[#F06565]/15 dark:text-[#FF8A8A]">
                                                                    In Progress
                                                                </Badge>
                                                            )
                                                        }
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    )
                                })}

                                <h1 className={`text-xs font-semibold uppercase tracking-wider text-foreground/30"`}>
                                    Check Out My Other Apps
                                </h1>
                                {/* Flashcardit */}
                                <Link
                                    href="https://flashcardit.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex mx-auto items-center gap-3 rounded-xl text-[15px] font-medium text-foreground/80 transition-all duration-200 hover:bg-accent/60 hover:text-foreground dark:hover:bg-white/[0.06] dark:hover:text-white"
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

                                    <span
                                        className={` whitespace-nowrap text-[15px] font-medium transition-all duration-200 `}
                                    >
                                        flashcardit.vercel.app
                                    </span>
                                </Link>

                                {/* Bottom Section */}
                                <div className="mt-2">

                                    {/* Utility Actions */}
                                    <section className="grid grid-cols-3 gap-2">

                                        {/* Theme Toggle */}
                                        <Button
                                            variant="ghost"
                                            onClick={toggleDarkMode}
                                            title="Toggle theme"
                                            aria-label="Toggle theme"
                                            className="h-auto min-h-[76px] flex-col gap-2 rounded-2xl
                                border border-border/50 bg-muted/30 px-2 py-3
                                text-muted-foreground transition-all duration-200
                                hover:bg-muted hover:text-foreground
                                dark:border-white/10 dark:bg-white/[0.04]
                                dark:text-white/60
                                dark:hover:border-white/15 dark:hover:bg-white/[0.09]
                                dark:hover:text-white"
                                        >
                                            {!isDark ? (
                                                <Moon className="size-5" />
                                            ) : (
                                                <Sun className="size-5" />
                                            )}

                                            <span className="text-xs font-medium">
                                                {!isDark ? "Dark mode" : "Light mode"}
                                            </span>
                                        </Button>

                                        {/* Settings */}
                                        <Button
                                            variant="ghost"
                                            title="Settings"
                                            aria-label="Settings"
                                            className="h-auto min-h-[76px] flex-col gap-2 rounded-2xl
                                border border-border/50 bg-muted/30 px-2 py-3
                                text-muted-foreground transition-all duration-200
                                hover:bg-muted hover:text-foreground
                                dark:border-white/10 dark:bg-white/[0.04]
                                dark:text-white/60
                                dark:hover:border-white/15 dark:hover:bg-white/[0.09]
                                dark:hover:text-white"
                                        >
                                            <Settings className="size-5" />
                                            <span className="text-xs font-medium">Settings</span>
                                        </Button>

                                        {/* About */}
                                        <Button
                                            variant="ghost"
                                            title="Privacy policy and legal"
                                            aria-label="About"
                                            className="h-auto min-h-[76px] flex-col gap-2 rounded-2xl
                                border border-border/50 bg-muted/30 px-2 py-3
                                text-muted-foreground transition-all duration-200
                                hover:bg-muted hover:text-foreground
                                dark:border-white/10 dark:bg-white/[0.04]
                                dark:text-white/60
                                dark:hover:border-white/15 dark:hover:bg-white/[0.09]
                                dark:hover:text-white"
                                        >
                                            <a
                                                href="/privacy"
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <Info className="size-5" />
                                                <span className="text-xs font-medium">About</span>
                                            </a>
                                        </Button>

                                    </section>

                                    {/* Footer */}
                                    <div className="mt-4 flex items-center justify-between border-t border-border/50 px-1 pt-3 dark:border-white/10">

                                        <span className="text-[11px] font-medium tracking-wide text-muted-foreground/70">
                                            CREATE A CURRICULUM
                                        </span>

                                        <Link
                                            href="/feedback"
                                            className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5
                                text-xs font-medium text-muted-foreground
                                transition-colors hover:bg-muted hover:text-foreground
                                dark:text-white/60 dark:hover:bg-white/[0.08] dark:hover:text-white"
                                        >
                                            <MessageCircle className="size-3.5" />
                                            Feedback
                                        </Link>

                                    </div>
                                </div>
                            </nav>


                        </DrawerContent>
                    </Drawer>

                    {/* Right Spacer (balances logo) */}
                    <Image
                        src="/cacicon.png"
                        alt="Create a Curriculum"
                        width={28}
                        height={28}
                        className="rounded-lg object-cover opacity-0"
                    />

                </div>
            </aside>

        )

    }
}
