import {
    Calendar,
    GalleryHorizontalEnd,
    Home,
    Library,
    Search,
    Rss,
    TextCursor,
    GraduationCap,
} from "lucide-react"

export const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Search", icon: Search, href: "/search" },
    { label: "Curriculums", icon: Library, href: "/curriculums" },
    { label: "Products / Lists", icon: GalleryHorizontalEnd, href: "/productsandlists" },
    { label: "Calendar", icon: Calendar, href: "/calendar" },
    { label: "AI Prompts", icon: TextCursor, href: "/prompts" },
    { label: "Blog", icon: Rss, href: "/blog" },
    { label: "Custom Resources", icon: GraduationCap, href: "/submit" },
]

export const isLocal = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
export const testLink = isLocal ? "http://localhost:3000" : "https://create-a-curriculum.vercel.app"