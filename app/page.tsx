"use client"

import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Share } from "lucide-react"

import { navItems } from "@/lib/static-unchanging"
import { Badge } from "@/components/ui/badge"
import HomePageShowcase from "@/components/product-showcase/homepageshowcase"
import { Showcases } from "@/lib/product-showcases"
import { cn } from "@/lib/utils"
import { neulis, nofex } from "@/lib/fonts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <section className="flex mt-6 h-full w-[75vw]  mx-auto flex-col items-center justify-center">
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
            "text-[18px] text-center font-light tracking-[15px] leading-none",
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

      <Card className="w-[70vw] bg-gradient-to-br from-[#FFF0F3] py-4 to-white border border-rose-100/60 shadow-sm transition-all duration-300  hover:shadow-md hover:shadow-rose-500/20 mt-2 mx-auto flex flex-row mb-4 rounded-3xl shadow-xl hover:shadow-2xl  ease-in-out">
        <CardHeader className="flex flex-col gap-2 w-full">
          <CardDescription className="text-center text-md text-foreground">
            create-a-curriculum is a free AI-powered education tool that turns a topic, product, or idea into a personalized, comprehensive curriculum—helping users quickly create structured learning paths tailored to their needs.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center">
        </CardContent>
      </Card>
      <p className="text-center w-[65vw] mb-4 text-xs text-foreground/40">
        create-a-curriculum is an independent creator of educational materials. All product names, logos, brands, and other trademarks featured or referred to within this curriculum are the property of their respective trademark holders. These trademark holders are not affiliated with create-a-curriculum, our products, or our website. They do not sponsor, endorse, or approve any of our materials.
      </p>


      <section className="flex flex-row gap-4 h-[35vh] w-full">
        <Card className="overflow-hidden p-0 w-1/3 h-full rounded-[55px] border border-rose-100/60 bg-gradient-to-br from-[#FFF0F3] to-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
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

        <section className="flex flex-col gap-4 w-1/3">
          <Card className="overflow-hidden p-0 h-1/2 rounded-[55px]  border border-rose-100/60 bg-gradient-to-br from-[#FFF0F3] to-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">

            <CardContent className="p-0 my-auto">
              <h1 className={cn("text-center text-md font-semibold text-foreground/80")}>
                version 2.0
              </h1>
            </CardContent>
          </Card>

          <Card className="overflow-hidden p-0 h-[30vh] rounded-[55px] border border-rose-100/60 bg-gradient-to-br from-[#FFF0F3] to-white shadow-xl transition-all duration-300 gap-0 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
            <CardHeader className="h-[15%] flex items-center justify-center pt-6">
              <h2 className={cn("text-center text-md font-semibold text-foreground/80", nofex.className)}>
                Create a curriculum with:
              </h2>
            </CardHeader>

            <CardContent className="p-0 mx-auto w-full my-auto px-6">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex flex-row gap-[10px] items-center py-2">
                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/muse.webp"
                      alt="Muse"
                      className="size-[clamp(44px,4.5vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Muse</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/gemini.webp"
                      alt="Gemini"
                      className="size-[clamp(44px,4.5vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Gemini</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/chatgpt.webp"
                      alt="ChatGPT"
                      className="size-[clamp(44px,4.5vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">ChatGPT</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/metaai.webp"
                      alt="Meta AI"
                      className="size-[clamp(44px,4.5vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Meta AI</h1>
                  </section>

                  <section className="flex shrink-0 flex-col items-center gap-2">
                    <img
                      src="/AppIcons/claude.webp"
                      alt="Claude"
                      className="size-[clamp(44px,4.5vw,64px)] rounded-4xl border"
                    />
                    <h1 className="text-[clamp(12px,1vw,10px)]">Claude</h1>
                  </section>
                </div>

              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        <HomePageShowcase showcase={Showcases[1]} />
      </section>

    </section>
  )
}
