import {
    Calendar,
    GalleryHorizontalEnd,
    Home,
    Library,
    Search,
    Rss,
    TextCursor,
    GraduationCap,
    Bot,
    Drone,
    HatGlasses,
    Sparkles,
    LayoutDashboard,
} from "lucide-react"

export const navItems = [
    {
        label: "Home",
        icon: Home,
        href: "/",
    },

    {
        label: "Search",
        icon: Search,
        href: "/search",
    },

    {
        label: "Create",
        icon: Sparkles,
        items: [
            {
                label: "Curriculums",
                icon: Library,
                href: "/curriculums",
            },
            {
                label: "Agents",
                icon: HatGlasses,
                href: "/agents",
            },
            {
                label: "AI Prompts",
                icon: TextCursor,
                href: "/prompts",
            },
        ],
    },

    {
        label: "Manage",
        icon: LayoutDashboard,
        items: [
            {
                label: "Schedule",
                icon: Calendar,
                href: "/schedule",
            },
            {
                label: "Products / Lists",
                icon: GalleryHorizontalEnd,
                href: "/productsandlists",
            },
            {
                label: "Resources",
                icon: GraduationCap,
                href: "/resources",
            },
            {
                label: "Blog",
                icon: Rss,
                href: "/blog",
            },
        ],
    },
]
export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = () => {
            const result = reader.result as string

            // Remove "data:image/jpeg;base64," prefix
            const base64 = result.split(",")[1]

            resolve(base64)
        }

        reader.onerror = reject

        reader.readAsDataURL(file)
    })
}

export const isLocal = process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
export const testLink = isLocal ? "http://localhost:3000" : "https://create-a-curriculum.vercel.app"