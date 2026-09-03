"use client"

import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Share } from "lucide-react"

import { navItems } from "@/lib/static-unchanging"
import {Badge} from "@/components/ui/badge"
import HomePageShowcase from "@/components/product-showcase/homepageshowcase"
import { Showcases } from "@/lib/product-showcases"

export default function Home() {
  return (
    <section className="flex mt-6 h-full w-[75vw]  mx-auto flex-col items-center justify-center">
      <Image src="/caclogo.png" alt="Create a Curriculum" width={450} height={40} className="rounded-lg" />
      <p className="text-center w-[60vw] mb-4 text-md text-foreground">
        create-a-curriculum is a free AI-powered education tool that turns a topic, product, or idea into a personalized, comprehensive curriculum—helping users quickly create structured learning paths tailored to their needs.
      </p>
      <p className="text-center w-[60vw] mb-4 text-xs text-foreground/80">
         create-a-curriculum is an independent creator of educational materials. All product names, logos, brands, and other trademarks featured or referred to within this curriculum are the property of their respective trademark holders. These trademark holders are not affiliated with create-a-curriculum, our products, or our website. They do not sponsor, endorse, or approve any of our materials.
      </p>
      <div className="flex flex-row gap-4 mb-4">
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
      </div>

      <section className="flex flex-row gap-4 w-full">
        <HomePageShowcase showcase={Showcases[0]} />
        <HomePageShowcase showcase={Showcases[1]} />
      </section>

    </section>
  )
}
