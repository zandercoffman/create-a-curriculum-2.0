"use client"

import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, ChevronRight, GraduationCap, MessageSquareText, Share, ShoppingBag, Sparkles } from "lucide-react"

import { navItems } from "@/lib/static-unchanging"
import { Badge } from "@/components/ui/badge"
import HomePageShowcase from "@/components/product-showcase/homepageshowcase"
import { Showcases } from "@/lib/product-showcases"
import { cn } from "@/lib/utils"
import { neulis, nofex } from "@/lib/fonts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { AbsoluteColorGradient, ColorGradient, MobileBGGradient1 } from "@/components/NameGradient"
import { useMobile } from "@/lib/useMobile"
import { LiquidGlassLogo } from '@/components/liquid-glass-logo';
import { Button } from "@/components/ui/button"
import { blogs } from "./blog/page"


export const FacebookFIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" {...props}>
    <path fill="currentColor" d="m23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z" />
  </svg>
);


export default function Home() {

  const isMobile = useMobile()
  const firstBlog = blogs[0] // TODO: replace with your current post, or tell me where the post data lives and I'll wire it;

  // TODO: replace with your current post, or tell me where the post data lives and I'll wire it
  const latestPost = {
    title: firstBlog.title,
    excerpt: firstBlog.description,
    href: `/blog/${firstBlog.slug}`,
    date: firstBlog.date,
  };

  const quickLinks = [
    { label: "My curriculums", href: "/curriculums" },
    { label: "Plan with products", href: "/plan-with-products" },
    { label: "AI prompts", href: "/prompts" },
    { label: "Blog", href: "/blog" },
  ];

  if (isMobile === null) {
    return (
      <section className="flex mt-6 h-full w-[75vw]  mx-auto flex-col items-center justify-center">
        <p className="text-foreground/70 text-lg font-semibold">Loading...</p>
      </section>
    )
  }

  if (isMobile) {
    return (
      <section className=" p-2 relative isolate flex mt-6 min-h-screen w-screen mx-auto flex-col items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="pointer-events-none bottom-0 absolute -inset-4 z-2 rounded-[2rem] h-[100vh] opacity-[95%] bg-linear-to-t from-[#ffffff] to-[#F06565]/0 opacity-100 dark:from-[#622626] dark:to-[#622626]/0"
          />
          <MobileBGGradient1 height="100vh" width="100vw" />

        </div>

        {/* Content */}
        <section className="relative z-10 -translate-y-[20vh] flex gap-4 w-full h-screen flex-col items-start justify-end">
          <LiquidGlassLogo
            className="bg-transparent! -translate-x-[11vw] translate-y-[5vh] p-0! mr-auto! rounded-full mb-6"
            logo="/cacicon.png"
            ending="logo"
            theme={"light"}
            logoSize={600}
            tile={false}
            logoColor={"original"}
            highlights={0.9}
            bloom={1.5}
            dropStrength={0.55}
            innerWallFocus={0.65}
            style={{ height: 225, width: 225 }}
          />
          {/* Text + frosted glow */}
          <div className="relative ml-[5vw] flex flex-col gap-4">

            <h1
              className={cn(
                "relative z-10 text-4xl font-bold leading-[1.05] tracking-tight text-[#F06565] dark:text-[#622626] sm:text-5xl md:text-6xl",
              )}
            >
              Create a Curriculum
              <div className="absolute -inset-1 -z-1 bg-[#ffffff] opacity-75 blur-2xl h-[6vh] w-[100%]" />
            </h1>

            <div className="flex flex-row gap-2">
              <Badge
                variant="secondary"
                className=""
              >
                <div className="pulse mr-1 size-2 rounded-full bg-blue-500" />
                BLOG: Welcome to Create-a-Curriculum 2.0!
              </Badge>
            </div>

            <p
              className={cn(
                "relative z-10 max-w-[32ch] text-[17px] text-foreground/80 font-normal leading-[1.55]",
              )}
            >
              Your curriculum, your products, your prices, in one place.
            </p>

            <section className="flex flex-row gap-4 mb-2">
              <section>
                <Link href="https://www.instagram.com/create.a.curriculum" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-foreground">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </Link>
              </section>
              <Separator orientation="vertical" className="bg-foreground" />
              <section>
                <button
                  aria-label="Share on Facebook"
                  onClick={() => {
                    const shareUrl = "https://create-a-curriculum.vercel.app"
                    const facebookUrl = `https://www.facebook.com/profile.php?id=61595620655131`
                    window.open(facebookUrl, "_blank", "noopener,noreferrer")
                  }}
                  className="inline-flex items-center justify-center text-foreground transition-opacity hover:opacity-80"
                >
                  <FacebookFIcon />
                </button>
              </section>
              <Separator orientation="vertical" className="bg-foreground" />
              <section>
                <button
                  type="button"
                  aria-label="Share this page"
                  onClick={async () => {
                    const shareUrl = "https://create-a-curriculum.vercel.app"
                    const shareData = {
                      title: "Create a Curriculum",
                      text: "Check out Create a Curriculum",
                      url: shareUrl,
                    }

                    if (navigator.share) {
                      try {
                        await navigator.share(shareData)
                        return
                      } catch (err) {
                        // Dismissed the sheet — don't fall through to copying.
                        if (err instanceof DOMException && err.name === "AbortError") return
                      }
                    }

                    // Fallback: copy the link instead.
                    try {
                      await navigator.clipboard.writeText(shareUrl)
                    } catch {
                      const textarea = document.createElement("textarea")
                      textarea.value = shareUrl
                      textarea.style.position = "fixed"
                      textarea.style.opacity = "0"
                      document.body.appendChild(textarea)
                      textarea.select()
                      document.execCommand("copy")
                      document.body.removeChild(textarea)
                    }
                  }}
                  className="inline-flex items-center justify-center text-foreground transition-opacity hover:opacity-80"
                >
                  <Share />
                </button>

              </section>
            </section>

            <section className="relative z-10 flex flex-col gap-2 w-full">
              <p
                className={cn(
                  "relative z-10 w-[90%] text-[9px] text-foreground/50 font-normal leading-[1.55]",
                )}
              >
                create-a-curriculum is a free AI-powered education tool that turns a topic, product, or idea into a personalized, comprehensive curriculum—helping users quickly create structured learning paths tailored to their needs.
              </p>
              <p
                className={cn(
                  "relative z-10 w-[90%] text-[9px] text-foreground/50 font-normal leading-[1.55]",
                )}
              >
                create-a-curriculum is an independent creator of educational materials. All product names, logos, brands, and other trademarks featured or referred to within this curriculum are the property of their respective trademark holders. These trademark holders are not affiliated with create-a-curriculum, our products, or our website. They do not sponsor, endorse, or approve any of our materials.
              </p>
            </section>

            <section className="relative z-10 flex flex-col  w-full">
              <Button
                className="group relative mt-2 h-[50px] w-[95%] overflow-hidden rounded-full bg-gradient-to-r from-[#F06565] to-[#F06565]/80 shadow-lg shadow-[#F06565]/40 ring-1 ring-inset ring-white/40 transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] dark:from-[#622626] dark:to-[#622626]/80 dark:shadow-black/50 dark:ring-white/20"
              >
                <Link href="/curriculums" className="inline-flex items-center justify-center gap-2">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <span className="relative text-[14px] dark:text-gray-300 font-semibold">Create a Curriculum</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="group relative mt-2 h-[50px] w-[95%] overflow-hidden  transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] dark:from-[#622626] dark:to-[#622626]/80 dark:shadow-black/50 dark:ring-white/20"
              >
                <Link href="/prompts" className="inline-flex items-center justify-center gap-2">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <span className="relative text-[14px] font-semibold">Use AI Prompts</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>


            </section>


          </div>
        </section>


      </section>
    )
  }
  else {
    return <section className="flex mt-6 h-full w-[75vw]  mx-auto flex-col items-center justify-center">

      <section className="absolute top-0 w-screen h-[95vh] -z-10 ">
          <ColorGradient color={"#F06565"} />
          <div className="absolute z-1 w-[80%] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] blur-3xl opacity-[90%] rounded-[60px]"></div>
      </section>



      <section className="flex mb-4 flex-col items-center justify-center w-full">
        <h1
          className={cn(
            "text-[70px] font-bold leading-none gradient-text",
            nofex.className
          )}
        >
          create-a-curriculum
        </h1>

        <p
          className={cn(
            "text-[18px] text-foreground text-center font-light tracking-[15px] leading-none",
            nofex.className
          )}
        >
          .vercel.app
        </p>
      </section>

      <section className="flex flex-row gap-4 mb-2">
        <section>
          <Link href="https://www.instagram.com/create.a.curriculum" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-foreground">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </Link>
        </section>
        <Separator orientation="vertical" className="bg-foreground" />
        <section>
          <button
            aria-label="Share on Facebook"
            onClick={() => {
              const shareUrl = "https://create-a-curriculum.vercel.app"
              const facebookUrl = `https://www.facebook.com/profile.php?id=61595620655131`
              window.open(facebookUrl, "_blank", "noopener,noreferrer")
            }}
            className="inline-flex items-center justify-center text-foreground transition-opacity hover:opacity-80"
          >
            <FacebookFIcon />
          </button>
        </section>
        <Separator orientation="vertical" className="bg-foreground" />
        <section>
          <button
            type="button"
            aria-label="Share this page"
            onClick={async () => {
              const shareUrl = "https://create-a-curriculum.vercel.app"

              if (navigator.share) {
                try {
                  await navigator.share({
                    title: "Create a Curriculum",
                    text: "Check out Create a Curriculum",
                    url: shareUrl,
                  })
                  return
                } catch {
                  // Fall back to opening the URL in a new tab if the share dialog is dismissed or unavailable.
                }
              }

              window.open(shareUrl, "_blank", "noopener,noreferrer")
            }}
            className="inline-flex items-center justify-center text-foreground transition-opacity hover:opacity-80"
          >
            <Share />
          </button>
        </section>
      </section>

      <Card className="w-[70vw] bg-gradient-to-br from-[#FFF0F3] to-white dark:from-[#914e4e] dark:to-black py-4 border border-rose-100/60 shadow-sm transition-all duration-300  hover:shadow-md hover:shadow-rose-500/20 mt-2 mx-auto flex flex-row mb-4 rounded-3xl shadow-xl hover:shadow-2xl  ease-in-out">
        <CardHeader className="flex flex-col gap-2 w-full">
          <CardDescription className="text-center text-md text-foreground dark:text-white">
            create-a-curriculum is a free AI-powered education tool that turns a topic, product, or idea into a personalized, comprehensive curriculum—helping users quickly create structured learning paths tailored to their needs.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center">
        </CardContent>
      </Card>
      <p className="text-center w-[65vw] mb-4 text-xs text-foreground/40 dark:text-white/60">
        create-a-curriculum is an independent creator of educational materials. All product names, logos, brands, and other trademarks featured or referred to within this curriculum are the property of their respective trademark holders. These trademark holders are not affiliated with create-a-curriculum, our products, or our website. They do not sponsor, endorse, or approve any of our materials.
      </p>


      <section className="flex min-h-[320px] h-[40vh] w-full flex-row gap-3 xl:h-[35vh] xl:gap-4">
        <Card className="overflow-hidden p-0 w-1/3 h-full rounded-[55px] border border-rose-100/60 bg-gradient-to-br dark:from-[#914e4e] dark:to-black from-[#FFF0F3] to-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
          <CardContent className="p-0 h-full w-full">
            <video
              src="/showcaseVideos/1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>

        <section className="flex flex-col gap-3 xl:gap-4 w-1/3">
          <Card className="overflow-hidden p-0 flex-1 min-h-0 rounded-[55px] border border-rose-100/60 bg-gradient-to-br dark:from-[#914e4e] dark:to-black from-[#FFF0F3] to-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
            <Link href={latestPost.href} className="group flex w-[95%] mx-auto h-full min-h-0 flex-col">
              <CardContent className="flex min-h-0 flex-1 flex-col gap-2 px-4 py-3 xl:px-5 xl:py-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F06565]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F06565]">
                    <span className="size-1.5 rounded-full bg-[#F06565]" />
                    Latest post
                  </span>
                  <span className="text-[11px] text-foreground/50">{latestPost.date}</span>
                </div>

                <h3 className="text-[15px] font-bold leading-snug text-foreground line-clamp-2 xl:text-[17px]">
                  {latestPost.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground/60 line-clamp-2">
                  {latestPost.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-rose-100/60 pt-2.5 dark:border-white/10">
                  <p className="text-[13px] font-semibold text-foreground/80 xl:text-sm">create-a-curriculum v2.0</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F06565]">
                    Read post
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="overflow-hidden p-0 h-[45%] min-h-0 shrink-0 rounded-[55px] border border-rose-100/60 bg-gradient-to-br from-[#FFF0F3] to-white dark:from-[#914e4e] dark:to-black shadow-xl transition-all duration-300 gap-0 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
            <CardHeader className="h-[15%] flex items-center justify-center pt-4 xl:pt-6">
              <h2 className={cn("text-center text-base font-semibold text-foreground/80 xl:text-sm 2xl:text-lg", nofex.className)}>
                Create a curriculum with:
              </h2>
            </CardHeader>

            <CardContent className="p-0 mx-auto justify-between my-auto px-4 xl:px-6">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex flex-row gap-2 xl:gap-[15px] items-center py-2">
                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/muse.webp"
                      alt="Muse"
                      className="size-[clamp(36px,3.2vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Muse</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/gemini.webp"
                      alt="Gemini"
                      className="size-[clamp(36px,3.2vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Gemini</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/chatgpt.webp"
                      alt="ChatGPT"
                      className="size-[clamp(36px,3.2vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">ChatGPT</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/metaai.webp"
                      alt="Meta AI"
                      className="size-[clamp(36px,3.2vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Meta AI</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/claude.webp"
                      alt="Claude"
                      className="size-[clamp(36px,3.2vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Claude</h1>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        <Card className="overflow-hidden p-0 w-1/3 h-full rounded-[55px] border border-rose-100/60 bg-gradient-to-br dark:from-[#914e4e] dark:to-black from-[#FFF0F3] to-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
          <CardContent className="flex h-full w-[92%] mx-auto flex-col gap-2 py-4 xl:gap-3 xl:py-5">
            <div>
              <h2 className={cn("text-lg font-semibold text-foreground/80 xl:text-xl", nofex.className)}>
                Quick shortcuts
              </h2>
              <p className="mt-0.5 text-xs text-foreground/50">
                Jump straight to the thing you came to do.
              </p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-2">
              <Link
                href="/curriculums"
                className="flex min-h-0 flex-1 items-center gap-2 rounded-[1.75rem] bg-[#F06565] px-3 text-white shadow-md shadow-rose-500/20 transition-colors hover:bg-[#e05555] xl:gap-3 xl:px-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-white/20 xl:size-10">
                  <Sparkles className="size-4 xl:size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold xl:text-sm">Create a Curriculum</span>
                  <span className="block truncate text-[11px] text-white/80">Start from a topic or product</span>
                </span>
                <ChevronRight className="size-4 shrink-0" />
              </Link>

              <Link
                href="/plan-with-products"
                className="flex min-h-0 flex-1 items-center gap-2 rounded-[1.75rem] border border-rose-100/70 bg-white/60 px-3 text-foreground/80 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 xl:gap-3 xl:px-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-[#F06565]/10 text-[#F06565] xl:size-10">
                  <ShoppingBag className="size-4 xl:size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold xl:text-sm">Plan with Products</span>
                  <span className="block truncate text-[11px] text-foreground/50">Products, prices, one budget</span>
                </span>
                <ChevronRight className="size-4 shrink-0" />
              </Link>

              <Link
                href="/prompts"
                className="flex min-h-0 flex-1 items-center gap-2 rounded-[1.75rem] border border-rose-100/70 bg-white/60 px-3 text-foreground/80 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 xl:gap-3 xl:px-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-[#F06565]/10 text-[#F06565] xl:size-10">
                  <MessageSquareText className="size-4 xl:size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold xl:text-sm">AI Prompts</span>
                  <span className="block truncate text-[11px] text-foreground/50">Build a prompt, paste it back</span>
                </span>
                <ChevronRight className="size-4 shrink-0" />
              </Link>

              <Link
                href="/learners"
                className="flex min-h-0 flex-1 items-center gap-2 rounded-[1.75rem] border border-rose-100/70 bg-white/60 px-3 text-foreground/80 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 xl:gap-3 xl:px-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-[#F06565]/10 text-[#F06565] xl:size-10">
                  <GraduationCap className="size-4 xl:size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold xl:text-sm">Learners</span>
                  <span className="block truncate text-[11px] text-foreground/50">Profiles for each learner</span>
                </span>
                <ChevronRight className="size-4 shrink-0" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>


    </section>
  }
}
