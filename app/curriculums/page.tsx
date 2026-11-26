"use client"

import * as React from "react"

import AITextbox, {
    TextAIModel,
    textAIs,
} from "@/components/GooeyAITextbox"

import { GooeySearch } from "@/components/GooeySearch"
import { Button } from "@/components/ui/button"
import { GalleryHorizontalEnd, Images, Image, X, Download, ExternalLink, CircleUserRound, Trash, Trash2, Upload, ScrollText, HatGlasses, Sparkles, Layers3, BookOpen, FileText, ClipboardCheck, LoaderCircle, CheckCircle2, Circle, Ellipsis, Eye, ChevronRight, FileDown, Repeat2, Search, ListChecks, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatePresence, motion } from "framer-motion"
import { CurriculumPDF } from "@/components/curriculumPDF"
import {
    PDFDownloadLink,
} from "@react-pdf/renderer"


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { LinkPreview } from "@/components/ui/link-preview"
import { fileToBase64, testLink } from "@/lib/static-unchanging"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HomePageShowcase from "@/components/product-showcase/homepageshowcase"
import { Showcases } from "@/lib/product-showcases"
import { BlurFade } from "@/components/ui/blur-fade"
import { NextResponse } from "next/server"
import CurriculumDOCXDownload from "@/components/curriculumDOCX"
import Link from "next/link"
import { retrieveItemFromIndexedDB, saveItemToIndexedDB } from "@/lib/IndexedDB"
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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { nofex } from "@/lib/fonts"

import {
    Trace,
    TraceCollapsible,
    TraceCollapsibleContent,
    TraceCollapsibleTrigger,
    TraceIcon,
    TraceLine,
    TraceTitle,
} from "@/components/ui/trace"
import { useMobile } from "@/lib/useMobile"
import { useState } from "react"
import { ButtonGroup } from "@/components/ui/button-group"
import { MobileBGGradient2 } from "@/components/NameGradient"

// ideas

import ideas, { getRandomIdeas, IdeaType } from "@/lib/productIdeas"
import { AGENT_CURRICULUMS_KEY } from "../agents/muse/overview/agent-helpers"



// end ideas

const stages = [
    {
        title: "Understanding your topic",
        description: "Organizing your goals and learning requirements",
        icon: Sparkles,
    },
    {
        title: "Building the learning sequence",
        description: "Arranging concepts from foundational to advanced",
        icon: Layers3,
    },
    {
        title: "Designing seven lessons",
        description: "Structuring objectives, activities, and explanations",
        icon: BookOpen,
    },
    {
        title: "Preparing activities and materials",
        description: "Connecting resources to each lesson",
        icon: FileText,
    },
    {
        title: "Reviewing the curriculum",
        description: "Checking lesson progression and assessments",
        icon: ClipboardCheck,
    },
]

type CurriculumLoadingProps = {
    topic: string
}

export function CurriculumLoading({
    topic,
}: CurriculumLoadingProps) {
    const [activeStage, setActiveStage] = React.useState(0)

    React.useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveStage((current) =>
                Math.min(current + 1, stages.length - 1)
            )
        }, 3500)

        return () => window.clearInterval(interval)
    }, [])

    return (
        <>
            <Trace>
                <TraceCollapsible defaultOpen className="w-[90vw] lg:w-[65vw] my-6 mx-auto">
                    <TraceCollapsibleTrigger>
                        <TraceLine status="running">
                            <TraceIcon>
                                <LoaderCircle className="size-4 animate-spin text-rose-500" />
                            </TraceIcon>
                            <TraceTitle>
                                Preparing learning materials
                            </TraceTitle>
                        </TraceLine>
                    </TraceCollapsibleTrigger>

                    <TraceCollapsibleContent keepMounted>
                        <Trace>
                            {stages.map((stage, index) => {
                                const complete = index < activeStage
                                const active = index === activeStage
                                const StageIcon = stage.icon

                                return (
                                    <TraceLine
                                        key={stage.title}
                                        status={
                                            active ? "running" : undefined
                                        }
                                    >
                                        <TraceIcon>
                                            {complete ? (
                                                <CheckCircle2 className="size-4 text-emerald-500" />
                                            ) : active ? (
                                                <StageIcon className="size-4 text-rose-500" />
                                            ) : (
                                                <Circle className="size-4 text-muted-foreground/40" />
                                            )}
                                        </TraceIcon>

                                        <div className="min-w-0 space-y-1">
                                            <TraceTitle>
                                                <span
                                                    className={
                                                        complete
                                                            ? "text-muted-foreground"
                                                            : active
                                                                ? "font-medium text-foreground"
                                                                : "text-muted-foreground/70"
                                                    }
                                                >
                                                    {stage.title}
                                                </span>
                                            </TraceTitle>

                                            {(complete || active) && (
                                                <p className="text-xs leading-relaxed text-muted-foreground">
                                                    {complete
                                                        ? "Stage complete"
                                                        : stage.description}
                                                </p>
                                            )}
                                        </div>
                                    </TraceLine>
                                )
                            })}
                        </Trace>
                    </TraceCollapsibleContent>
                </TraceCollapsible>
            </Trace>

        </>

    )
}




type Learner = {
    id: string
    name: string
    description: string
    educationLevel: string
    photo: string
    createdAt: number
}

function LearnerPicker({
    learners,
    selectedLearnerId,
    onSelect,
}: {
    learners: Learner[]
    selectedLearnerId: string | null
    onSelect: (learner: Learner | null) => void
}) {
    if (learners.length === 0) {
        return (
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                No learners yet. Create a learner on the Learners page first,
                then you can pick them here to personalize the prompt.
            </p>
        )
    }

    return (
        <div className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1">
            {learners.map((learner) => {
                const selected = learner.id === selectedLearnerId

                return (
                    <button
                        key={learner.id}
                        type="button"
                        onClick={() => onSelect(selected ? null : learner)}
                        className={
                            selected
                                ? "flex w-full items-center gap-3 rounded-xl border border-rose-300 bg-rose-50 p-2.5 text-left dark:border-rose-500/40 dark:bg-rose-500/10"
                                : "flex w-full items-center gap-3 rounded-xl border border-border p-2.5 text-left transition-colors hover:bg-accent/60"
                        }
                    >
                        <img
                            src={learner.photo}
                            alt={learner.name}
                            className="h-10 w-10 shrink-0 rounded-full object-cover"
                        />
                        <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium text-foreground">
                                {learner.name}
                            </span>
                            <span className="block truncate text-xs text-muted-foreground">
                                {learner.educationLevel}
                                {learner.description
                                    ? ` \u00b7 ${learner.description}`
                                    : ""}
                            </span>
                        </span>
                        {selected ? (
                            <CheckCircle2 className="size-5 shrink-0 text-rose-500" />
                        ) : (
                            <Circle className="size-5 shrink-0 text-muted-foreground/40" />
                        )}
                    </button>
                )
            })}

            {selectedLearnerId && (
                <p className="pt-1 text-xs text-muted-foreground">
                    This student will be included in the prompt. Tap them again
                    to clear the selection.
                </p>
            )}
        </div>
    )
}


function ImagesPanel({
    images,
    previews,
    formatFileSize,
    onAddFiles,
    onRemove,
    onClear,
    inputId,
}: {
    images: File[]
    previews: string[]
    formatFileSize: (bytes: number) => string
    onAddFiles: (files: FileList | File[]) => void
    onRemove: (index: number) => void
    onClear: () => void
    inputId: string
}) {
    const [isDragging, setIsDragging] = React.useState(false)

    return (
        <div>
            <input
                id={inputId}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                multiple
                className="hidden"
                onChange={(event) => {
                    onAddFiles(event.target.files || [])
                    event.target.value = ""
                }}
            />

            <button
                type="button"
                onClick={() => document.getElementById(inputId)?.click()}
                onDragOver={(event) => {
                    event.preventDefault()
                    setIsDragging(true)
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(event) => {
                    event.preventDefault()
                    setIsDragging(false)
                    onAddFiles(event.dataTransfer.files)
                }}
                className={cn(
                    "flex w-full flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed px-4 py-6 text-center transition-colors",
                    isDragging
                        ? "border-rose-400 bg-rose-50 dark:bg-rose-500/10"
                        : "border-border bg-muted/30 hover:border-rose-300 hover:bg-rose-50/60 dark:hover:bg-rose-500/5"
                )}
            >
                <span className="flex size-10 items-center justify-center rounded-full bg-rose-100 text-rose-500 dark:bg-rose-500/15">
                    <Images className="size-5" />
                </span>
                <span className="text-sm font-medium text-foreground">
                    {images.length === 0
                        ? "Drop images here, or tap to upload"
                        : "Add more images"}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                    PNG, JPG, WebP or GIF. They get summarized and included
                    with your prompt.
                </span>
            </button>

            {images.length > 0 && (
                <>
                    <div className="mt-4 flex items-center justify-between px-0.5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {images.length}{" "}
                            {images.length === 1 ? "image" : "images"} attached
                        </p>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={onClear}
                            className="h-7 gap-1.5 rounded-full px-2.5 text-xs text-muted-foreground hover:text-destructive"
                        >
                            <Trash2 className="size-3.5" />
                            Clear all
                        </Button>
                    </div>

                    <div className="mt-2 grid max-h-64 grid-cols-3 gap-2.5 overflow-y-auto pr-1">
                        {images.map((image, index) => (
                            <div
                                key={`${image.name}-${image.lastModified}-${index}`}
                                className="group min-w-0"
                            >
                                <div className="relative overflow-hidden rounded-xl ring-1 ring-border">
                                    <img
                                        src={previews[index]}
                                        alt={image.name}
                                        className="aspect-square w-full object-cover"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        aria-label={`Remove ${image.name}`}
                                        onClick={() => onRemove(index)}
                                        className="absolute right-1.5 top-1.5 h-6 w-6 rounded-full bg-black/60 text-white backdrop-blur transition-opacity hover:bg-black/80 hover:text-white lg:opacity-0 lg:group-hover:opacity-100"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                                <p className="mt-1 truncate text-[11px] leading-tight">
                                    {image.name}
                                </p>
                                <p className="text-[11px] tabular-nums leading-tight text-muted-foreground">
                                    {formatFileSize(image.size)}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default function CurriculumsPage() {
    const [chosenAIModel, setChosenAIModel] =
        React.useState<TextAIModel>(textAIs[0])

    const [randomCurriculumIdeas, setRandomCurriculumIdeas] = React.useState<IdeaType[]>(getRandomIdeas(4))
    const [isRotating, setIsRotating] = useState(false);

    const handleTrigger = () => {
        // 1. Fetch your new ideas
        setRandomCurriculumIdeas(getRandomIdeas(4));

        // 2. Trigger the animation class
        setIsRotating(true);
    };

    const [error, setError] = React.useState<string | null>(null)

    const [images, setImages] = React.useState<File[]>([])

    // Preview URLs are derived from the files, not stored in state:
    // useMemo rebuilds them only when the image set changes, and the
    // effect below only revokes the old set in its cleanup (no setState
    // in the effect body, so no cascading renders).
    const imagePreviews = React.useMemo(
        () => images.map((image) => URL.createObjectURL(image)),
        [images]
    )

    React.useEffect(() => {
        return () => {
            imagePreviews.forEach((url) => URL.revokeObjectURL(url))
        }
    }, [imagePreviews])

    const addImageFiles = (files: FileList | File[]) => {
        // Only allow images
        const imageFiles = Array.from(files).filter((file) =>
            file.type.startsWith("image/")
        )

        if (imageFiles.length > 0) {
            setImages((prev) => [...prev, ...imageFiles])
        }
    }

    const handleImageUpload = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        addImageFiles(event.target.files || [])
        // Reset so picking the same file again still fires onChange
        event.target.value = ""
    }

    const clearImages = () => {
        setImages([])
    }

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }


    const [isLoading, setIsLoading] = React.useState(false)
    const [activePopup, setActivePopup] = React.useState<
        "images" | "lists" | "personalization" | null
    >(null)

    const [thisPrompt, setThisPrompt] = React.useState("")
    const [generatedCurriculum, setGeneratedCurriculum] = React.useState<{
        name: string
        curriculum: string
    } | null>(null)

    const [allCurriculums, setAllCurriculums] = React.useState<{
        name: string
        curriculum: string
    }[]>([])

    const [agentCurriculums, setAgentCurriculums] = React.useState<{
        name: string
        curriculum: string
    }[]>([])

    const [learners, setLearners] = React.useState<Learner[]>([])
    const [selectedLearnerId, setSelectedLearnerId] =
        React.useState<string | null>(null)

    const selectedLearner =
        learners.find((learner) => learner.id === selectedLearnerId) ?? null


    React.useEffect(() => {
        async function loadCurriculums() {
            const storedCurriculums =
                await retrieveItemFromIndexedDB<{
                    name: string
                    curriculum: string
                }[]>("curriculums")

            if (storedCurriculums) {
                setAllCurriculums(storedCurriculums)
            }
        }

        async function loadAgentCurriculums() {
            const storedAgentCurriculums =
                await retrieveItemFromIndexedDB<{
                    name: string
                    curriculum: string
                }[]>("agentCurriculums")

            if (storedAgentCurriculums) {
                setAgentCurriculums(storedAgentCurriculums)
            }
        }

        async function loadLearners() {
            const storedLearners =
                await retrieveItemFromIndexedDB<Learner[]>("learners")

            if (storedLearners) {
                setLearners(storedLearners)
            }
        }

        loadCurriculums()
        loadAgentCurriculums()
        loadLearners()
    }, [])


    const handleSubmit = async (
        prompt: string,
        model: TextAIModel,
    ) => {
        setThisPrompt(prompt)
        setIsLoading(true)

        if (selectedLearner) {
            prompt += `\n\nPersonalize this curriculum for this student:\n- Name: ${selectedLearner.name}\n- Education level: ${selectedLearner.educationLevel}\n- About this student: ${selectedLearner.description}\n\nTailor the examples, reading level, pacing, activities, and assessments to this student. Refer to the student by name where it fits naturally.`
        }


        if (images.length > 0) {
            // Convert images to base64
            const base64Images = await Promise.all(
                images.map((image) => fileToBase64(image))
            )

            // Send images to the API for summarization
            try {
                const response = await fetch("/api/summarizeImage/gemini", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        images: base64Images.map((base64, index) => ({
                            image: base64,
                            mimeType: images[index].type,
                        })),
                    }),
                })

                const data = await response.text()

                if (!response.ok) {
                    throw new Error(
                        data || "Failed to summarize images."
                    )
                }

                prompt += `\n\nSummarized Image Content:\n${data}`

            } catch (error) {
                console.error("Error summarizing images:", error)

                setError(
                    error instanceof Error
                        ? error.message
                        : "An error occurred while summarizing images."
                )

                setIsLoading(false)
                return
            }
        }

        try {
            console.log("Sending:", {
                thisPrompt,
                model: model.id,
            })

            let response: Response | null = null;
            console.log("model: " + JSON.stringify(model))

            if (
                model.name.toLowerCase().includes("gemini") ||
                model.id.toLowerCase().includes("gemini")
            ) {
                response = await fetch("/api/generateCurriculum/gemini", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        prompt,
                        model: model.id,
                    }),
                })
            } else {
                response = await fetch("/api/generateCurriculum/groq", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        prompt,
                        model: model.id,
                    }),
                })
            }



            const data = await response?.json()

            console.log("API status:", response?.status)
            console.log("API response:", data)

            if (!response?.ok) {
                throw new Error(
                    [
                        data?.error || "Failed to generate curriculum.",
                        data?.file ? `File: ${data.file}` : null,
                        data?.details
                            ? `Details: ${JSON.stringify(data.details, null, 2)}`
                            : null,
                    ]
                        .filter(Boolean)
                        .join("\n\n")
                )
            }

            setGeneratedCurriculum({
                name: data.name,
                curriculum: data.curriculum,
            })

            let currentCurriculums =
                await retrieveItemFromIndexedDB<{
                    name: string
                    curriculum: string
                }[]>("curriculums") || []

            currentCurriculums = [
                {
                    name: data.name,
                    curriculum: data.curriculum,
                },
                ...currentCurriculums
            ]

            await saveItemToIndexedDB(
                "curriculums",
                currentCurriculums
            )

            setAllCurriculums(currentCurriculums)
            setError(null)


        } catch (error) {
            console.error("Error generating curriculum:", error)
            setError(error instanceof Error
                ? error.message
                : "An error occurred while generating the curriculum."
            )

            alert(
                error instanceof Error
                    ? error.message
                    : "An error occurred while generating the curriculum."
            )
        } finally {
            setIsLoading(false)
        }
    }

    const formatFileSize = (bytes: number) =>
        bytes >= 1024 * 1024
            ? `${(bytes / (1024 * 1024)).toFixed(2)} MB`
            : `${(bytes / 1024).toFixed(2)} KB`;


    async function trashCurriculum(index: number) {
        const updatedCurriculums = allCurriculums.filter((_, i) => i !== index)

        await saveItemToIndexedDB(
            "curriculums",
            updatedCurriculums
        )

        setAllCurriculums(updatedCurriculums)
    }

    async function trashAgentCurriculum(index: number) {
        const updatedAgentCurriculums = agentCurriculums.filter((_, i) => i !== index)

        await saveItemToIndexedDB(
            "agentCurriculums",
            updatedAgentCurriculums
        )

        setAgentCurriculums(updatedAgentCurriculums)
    }

    const isMobile = useMobile()

    const [open, setOpen] = React.useState(false);
    const [mobileSelectedCurriculum, setMobileSelectedCurriculum] = useState({
        name: "",
        curriculum: "",
        index: -1,
        source: "created" as "created" | "agent",
    })


    if (isMobile === null) {
        return (
            <section className="flex mt-6 h-full w-[75vw]  mx-auto flex-col items-center justify-center">
                <p className="text-foreground/70 text-lg font-semibold">Loading...</p>
            </section>
        )
    }


    if (!isMobile) {
        return (
            <main className="w-[90%] px-20 overflow-x-hidden pt-20 relative min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
                <section className="mx-auto mb-4 flex flex-row gap-2 items-center justify-center">
                    <ScrollText className="text-[#f06565]" size={55} />
                    <h1 className={cn(nofex.className, "text-5xl font-bold text-center text-[#f06565]")}>Curriculums</h1>
                </section>
                <section className="relative text-foreground flex items-center justify-center flex-row w-[80%] gap-6">

                    <section className="relative flex w-min items-center justify-center gap-6 ml-[15vw] ">
                        <section className="flex shrink-0 flex-row items-center justify-end gap-2">
                            {/* Images */}
                            <div className="relative">
                                <AnimatePresence>
                                    {activePopup === "images" && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.98, y: -4 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.98, y: -4 }}
                                            transition={{ duration: 0.18, ease: "easeOut" }}
                                            className="absolute top-[65px] z-50 w-[35rem] max-w-[calc(100vw-2rem)] -translate-x-[5%] rounded-2xl border border-border bg-popover/95 p-5 text-popover-foreground shadow-2xl backdrop-blur-xl"
                                        >
                                            <section className="flex flex-col gap-0.5 px-1.5">
                                                <p className="font-semibold text-foreground">Add Images</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Add images to help personalize your curriculum.
                                                </p>
                                            </section>

                                            <div className="mt-4">
                                                <ImagesPanel
                                                    images={images}
                                                    previews={imagePreviews}
                                                    formatFileSize={formatFileSize}
                                                    onAddFiles={addImageFiles}
                                                    onRemove={removeImage}
                                                    onClear={clearImages}
                                                    inputId="image-upload"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>


                                <motion.div
                                    whileHover={{ scale: 1.08, y: 7 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 20,
                                    }}
                                >
                                    <Button
                                        disabled={isLoading}
                                        variant="default"
                                        size="icon"
                                        aria-label="Add Images"
                                        data-tooltip-id="tooltip"
                                        data-tooltip-content="Add Images"
                                        data-tooltip-place="bottom"
                                        data-tooltip-delay-show={500}
                                        data-tooltip-delay-hide={100}
                                        onClick={() =>
                                            setActivePopup(
                                                activePopup === "images" ? null : "images"
                                            )
                                        }
                                        className="relative shadow-xl size-14 rounded-full flex flex-col gap-0 text-white bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                                    >
                                        <Images className="size-6" />
                                        {images.length > 0 && (
                                            <span className="absolute -right-1 -top-1 z-10 flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[11px] font-semibold text-background ring-2 ring-background">
                                                {images.length}
                                            </span>
                                        )}
                                        <p className="absolute text-foreground text-xs top-[60px]">
                                            Images
                                        </p>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Lists + Personalization */}
                            <section className="flex flex-col text-foreground gap-2 ml-10">

                                {/* Lists */}
                                <div className="relative">
                                    <AnimatePresence>
                                        {activePopup === "lists" && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.85, x: 8, y: 8 }}
                                                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9, x: 5, y: 6 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 25,
                                                }}
                                                className="absolute top-[65px] left-1/2 z-50 w-52 -translate-x-1/2 rounded-2xl border border-border bg-popover/95 text-popover-foreground p-4 shadow-2xl backdrop-blur-xl"
                                            >
                                                <p className="font-semibold text-foreground">
                                                    Add Lists
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    Add lists, resources, or collections to your
                                                    curriculum.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 20,
                                        }}
                                    >
                                        <Button
                                            disabled={isLoading}
                                            variant="default"
                                            size="icon"
                                            aria-label="Add Lists"
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content="Add Lists"
                                            data-tooltip-place="bottom"
                                            data-tooltip-delay-show={500}
                                            data-tooltip-delay-hide={100}
                                            onClick={() =>
                                                setActivePopup(
                                                    activePopup === "lists" ? null : "lists"
                                                )
                                            }
                                            className="relative shadow-xl text-white size-14 rounded-full flex flex-col gap-0 translate-x-[-30px] translate-y-[-10px] bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                                        >
                                            <GalleryHorizontalEnd className="size-6" />
                                            <p className="absolute text-foreground text-xs top-[60px]">
                                                Lists
                                            </p>
                                        </Button>
                                    </motion.div>
                                </div>

                                {/* Personalization */}
                                <div className="relative">
                                    <AnimatePresence>
                                        {activePopup === "personalization" && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.85, x: 8, y: 8 }}
                                                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9, x: 5, y: 6 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 25,
                                                }}
                                                className="absolute top-[65px] left-1/2 z-50 w-[22rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-border bg-popover/95 text-popover-foreground p-4 shadow-2xl backdrop-blur-xl"
                                            >
                                                <p className="font-semibold text-foreground">
                                                    Personalization
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    Pick a student to include in the prompt.
                                                </p>
                                                <LearnerPicker
                                                    learners={learners}
                                                    selectedLearnerId={selectedLearnerId}
                                                    onSelect={(learner) =>
                                                        setSelectedLearnerId(
                                                            learner ? learner.id : null
                                                        )
                                                    }
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <motion.div
                                        whileHover={{ scale: 1.08, y: 7 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 20,
                                        }}
                                    >
                                        <Button
                                            disabled={isLoading}
                                            variant="default"
                                            size="icon"
                                            aria-label="Personalization"
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content="Personalization"
                                            data-tooltip-place="bottom"
                                            data-tooltip-delay-show={500}
                                            data-tooltip-delay-hide={100}
                                            onClick={() =>
                                                setActivePopup(
                                                    activePopup === "personalization"
                                                        ? null
                                                        : "personalization"
                                                )
                                            }
                                            className="relative shadow-xl size-14 text-white rounded-full flex flex-col gap-0 translate-y-[8px] translate-x-[10px] bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                                        >
                                            <CircleUserRound className="size-6" />
                                            <p className="absolute text-foreground text-xs top-[60px]">
                                                Personalization
                                            </p>
                                        </Button>
                                    </motion.div>
                                </div>

                            </section>
                        </section>
                    </section>
                    <section className="flex w-full ml-10 max-w-3xl flex-col justify-normal items-center gap-0">
                        <AITextbox
                            placeholder="Create a curriculum on any topic..."
                            collapsedWidth={600}
                            expandedWidth={680}
                            models={textAIs}
                            chosenModel={chosenAIModel}
                            onModelChange={setChosenAIModel}
                            isLoading={isLoading}
                            onSubmit={handleSubmit}
                            className="w-full max-w-3xl mx-auto"
                            shellClassName="shadow-xl bg-background/80 border border-border backdrop-blur-md"
                        />
                        {selectedLearner && (
                            <div className="mt-2 ml-2 mr-auto">
                                <Badge variant="secondary" className="gap-1.5 text-xs">
                                    <CircleUserRound className="size-3.5" />
                                    For: {selectedLearner.name} ·{" "}
                                    {selectedLearner.educationLevel}
                                    <X
                                        className="size-3.5 cursor-pointer"
                                        onClick={() => setSelectedLearnerId(null)}
                                    />
                                </Badge>
                            </div>
                        )}
                        <Carousel className="w-xl mr-auto ml-2 flex flex-row gap-2 mt-2">
                            <CarouselContent>
                                {
                                    images.map((image, index) => (
                                        <CarouselItem key={index} className="basis-auto shrink-0 rounded-lg overflow-hidden ">
                                            <Badge key={index} variant="secondary" className="text-xs">
                                                <Images /> {image.name}
                                            </Badge>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>

                            {images.length > 0 && (
                                <>
                                    <CarouselPrevious size="xs" />
                                    <CarouselNext size="xs" />
                                </>
                            )}

                        </Carousel>
                    </section>
                </section>



                {
                    error !== null && <Card className="w-[80%] bg-gradient-to-br from-rose-600 to-rose-700 py-4 border border-rose-300/40 dark:border-rose-400/20 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-rose-500/10 mt-12 mx-auto flex flex-row mb-4 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <CardHeader className="flex flex-col gap-2 w-full">
                            <CardTitle className="text-white">Error</CardTitle>
                            <CardDescription className="text-white">
                                {error}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                }


                {
                    !isLoading && <BlurFade
                        delay={0.25}
                        inView
                        blur="10px"
                        duration={0.6} className="w-full mt-10 mb-4">
                        <h1 className="w-[80%] mx-auto ml-10 2xl:ml-[12vw] text-xl text-card-foreground/70 font-bold my-4 flex flex-row gap-2 ">Ideas <Repeat2
                            className={`my-auto cursor-pointer [transform-origin:center] ${isRotating ? 'animate-[spin_0.6s_cubic-bezier(0.1,1,0.1,1)_forwards]' : ''
                                }`}
                            onClick={handleTrigger}
                            onAnimationEnd={() => setIsRotating(false)}
                        />
                        </h1>

                        <section className="mx-auto mb-8 w-full max-w-6xl px-4 sm:px-6">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                                {randomCurriculumIdeas.map((showcase, index) => (
                                    <BlurFade
                                        key={showcase.title}
                                        delay={0.3 + index * 0.08}
                                        inView
                                        blur="8px"
                                        duration={0.5}
                                        className="relative h-full hover:z-20"
                                    >
                                        <Card className="group relative aspect-[5/3] h-full w-full overflow-hidden hover:rounded-[30px] rounded-[40px] border-0 shadow-md ring-1 ring-inset ring-black/10 transition-all duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl">
                                            {/* No scale on the image anymore, so nothing gets clipped inside the card */}
                                            <img
                                                src={showcase.image}
                                                alt={showcase.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="absolute inset-0 h-full w-full object-cover"
                                            />

                                            {/* Gradient, stronger at the bottom so the title stays readable */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            <CardHeader className="absolute inset-x-0 bottom-0 z-10 p-4 text-center text-[15px] font-semibold leading-snug text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
                                                <span className="line-clamp-2 transition-transform duration-300 group-hover:-translate-y-0.5">
                                                    {showcase.title}
                                                </span>
                                            </CardHeader>
                                        </Card>
                                    </BlurFade>
                                ))}
                            </div>
                        </section>

                    </BlurFade>
                }






                {isLoading && (
                    <CurriculumLoading topic={thisPrompt} />
                )}

                {generatedCurriculum && !isLoading && (
                    <Card className="w-[80%] my-4 mx-auto mt-12">
                        <CardHeader>
                            <CardTitle>
                                {generatedCurriculum.name}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="whitespace-pre-wrap">
                                {generatedCurriculum.curriculum}
                            </div>
                        </CardContent>
                    </Card>
                )}

                <Table className="w-[75vw] mx-auto overflow-x-hidden mt-4  mb-10">
                    <TableHeader className="overflow-x-hidden text-card-foreground/70">
                        <TableRow>
                            <TableHead>Created Curriculum ({allCurriculums.length})</TableHead>
                            <TableHead>Export</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="overflow-x-hidden text-foreground">
                        {
                            allCurriculums.map((curriculum, index) => (
                                <TableRow key={index} className=" transition-all duration-300 ease-in-out justify-center items-center">
                                    <TableCell className="flex flex-row w-full  my-auto items-center justify-start underline text-primary hover:cursor-pointer">
                                        <LinkPreview
                                            url={testLink + "curriculums/" + (index + 1)}
                                            className=" hover:cursor-pointer"
                                        >
                                            {curriculum.name}
                                        </LinkPreview>

                                    </TableCell>

                                    <TableCell className=" w-[15%] *:hover:bg-card/50 *:mx-2 ">
                                        <Link href={`/curriculums/${index + 1}`}>Preview</Link>
                                        <Button variant={"ghost"} size="icon-sm">
                                            <PDFDownloadLink document={<CurriculumPDF name={curriculum.name} curriculum={curriculum.curriculum} />} fileName={`${curriculum.name}.pdf`}>
                                                PDF
                                            </PDFDownloadLink>
                                        </Button>
                                        <CurriculumDOCXDownload name={curriculum.name} curriculum={curriculum.curriculum} />

                                    </TableCell>

                                    <TableCell className="w-min ">
                                        <Button variant={"ghost"} className="mx-auto" size="icon-sm">
                                            <Trash2 onClick={() => trashCurriculum(index)} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>

                <Table className="w-[75vw] mx-auto  mb-10">
                    <TableHeader>
                        <TableRow className="overflow-x-hidden text-card-foreground/70">
                            <TableHead>Agent-Made Curriculums ({agentCurriculums.length})</TableHead>
                            <TableHead>Export</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="overflow-x-hidden text-foreground">
                        {
                            agentCurriculums.map((curriculum, index) => (
                                <TableRow key={index} className=" transition-all duration-300 ease-in-out justify-center items-center">
                                    <TableCell className="flex flex-row w-full  my-auto items-center justify-start underline text-primary hover:cursor-pointer">
                                        <LinkPreview
                                            url={testLink + "curriculums/" + (index + 1)}
                                            className=" hover:cursor-pointer"
                                        >
                                            {curriculum.name}
                                        </LinkPreview>

                                    </TableCell>

                                    <TableCell className=" w-[15%] *:hover:bg-card/50 *:mx-2 ">
                                        <Link href={`/curriculums/${index + 1}`}>Preview</Link>
                                        <Button variant={"ghost"} size="icon-sm">
                                            <PDFDownloadLink document={<CurriculumPDF name={curriculum.name} curriculum={curriculum.curriculum} />} fileName={`${curriculum.name}.pdf`}>
                                                PDF
                                            </PDFDownloadLink>
                                        </Button>
                                        <CurriculumDOCXDownload name={curriculum.name} curriculum={curriculum.curriculum} />

                                    </TableCell>

                                    <TableCell className="w-min ">
                                        <Button variant={"ghost"} className="mx-auto" size="icon-sm">
                                            <Trash2 onClick={() => trashAgentCurriculum(index)} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>

                <Card className="mx-auto mb-24 flex w-[90%] flex-col gap-6 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50 to-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7 lg:flex-row lg:items-center lg:gap-10 dark:border-border dark:from-rose-950/70">
                    <CardHeader className="flex min-w-0 flex-1 flex-col gap-5 p-0">
                        <div className="flex items-start gap-2.5">
                            <CardTitle className="text-xl font-semibold tracking-tight">
                                Use an AI agent to make curriculums and do research for you.
                            </CardTitle>
                            <Badge className="mt-1 shrink-0 rounded-full bg-rose-600 px-2 py-0.5 text-[11px] font-bold tracking-wide text-white">
                                NEW!
                            </Badge>
                        </div>

                        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                            AI Agents can create curriculums for you based on your instructions,
                            researching and organizing information on your behalf.
                        </p>

                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-foreground">AI Agents can:</p>

                            <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                                <li className="flex gap-3">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                                        <Search className="h-4 w-4" />
                                    </span>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-medium">Research the web for you</span>{" "}
                                        <span className="text-muted-foreground">
                                            — Find products, resources, activities, and information from
                                            retailers like Walmart, Amazon, Target, Best Buy, and more.
                                        </span>
                                    </p>
                                </li>

                                <li className="flex gap-3">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                                        <ListChecks className="h-4 w-4" />
                                    </span>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-medium">Follow your instructions</span>{" "}
                                        <span className="text-muted-foreground">
                                            — Use your goals, preferences, budget, and requirements to
                                            guide the research.
                                        </span>
                                    </p>
                                </li>

                                <li className="flex gap-3">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                                        <BookOpen className="h-4 w-4" />
                                    </span>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-medium">Build a complete curriculum</span>{" "}
                                        <span className="text-muted-foreground">
                                            — Turn the information it finds into detailed lessons,
                                            activities, resources, and learning plans.
                                        </span>
                                    </p>
                                </li>

                                <li className="flex gap-3">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                                        <Zap className="h-4 w-4" />
                                    </span>
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-medium">Handle the busywork</span>{" "}
                                        <span className="text-muted-foreground">
                                            — Take care of the searching, organizing, and planning so you
                                            can spend less time doing research yourself.
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <p className="border-t border-rose-200/60 pt-4 text-sm text-muted-foreground dark:border-border">
                            <span className="font-medium text-foreground">
                                Just tell the agent what you need.
                            </span>{" "}
                            It will take care of the research and curriculum creation.
                        </p>
                    </CardHeader>

                    <CardContent className="shrink-0 p-0">
                        <Link
                            href="/agents"
                            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-rose-700 sm:w-auto"
                        >
                            <HatGlasses className="h-4 w-4" />
                            Start Using Agents
                        </Link>
                    </CardContent>
                </Card>


            </main>
        )
    } else {
        return <main className="w-full justify-start flex flex-col overflow-x-hidden pt-10 relative min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">

            <section className="mb-4 flex flex-row gap-2 items-center justify-center">
                <ScrollText className="text-[#f06565]" size={40} />
                <h1 className={cn(nofex.className, "text-3xl font-bold text-center text-[#f06565]")}>Curriculums</h1>
            </section>

            <section className="flex flex-col gap-10 w-[90%] mx-auto justify-center items-center">

                <section
                    className="flex flex-row gap-14 w-[90%] mx-auto justify-center items-center mt-4">
                    {/* Images */}
                    <div className="relative">
                        <motion.div
                            whileHover={{ scale: 1.08, y: 7 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 20,
                            }}
                        >
                            <Button
                                disabled={isLoading}
                                variant="default"
                                size="icon"
                                aria-label="Add Images"
                                data-tooltip-id="tooltip"
                                data-tooltip-content="Add Images"
                                data-tooltip-place="bottom"
                                data-tooltip-delay-show={500}
                                data-tooltip-delay-hide={100}
                                onClick={() =>
                                    setActivePopup(
                                        activePopup === "images" ? null : "images"
                                    )
                                }
                                className="relative shadow-xl size-14 rounded-full flex flex-col gap-0 text-white bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                            >
                                <Images className="size-6" />
                                        {images.length > 0 && (
                                            <span className="absolute -right-1 -top-1 z-10 flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[11px] font-semibold text-background ring-2 ring-background">
                                                {images.length}
                                            </span>
                                        )}
                                <p className="absolute text-foreground text-xs top-[60px]">
                                    Images
                                </p>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Lists */}
                    <div className="relative">
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 20,
                            }}
                        >
                            <Button
                                disabled={isLoading}
                                variant="default"
                                size="icon"
                                aria-label="Add Lists"
                                data-tooltip-id="tooltip"
                                data-tooltip-content="Add Lists"
                                data-tooltip-place="bottom"
                                data-tooltip-delay-show={500}
                                data-tooltip-delay-hide={100}
                                onClick={() =>
                                    setActivePopup(
                                        activePopup === "lists" ? null : "lists"
                                    )
                                }
                                className="relative shadow-xl text-white size-14 rounded-full flex flex-col gap-0 bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                            >
                                <GalleryHorizontalEnd className="size-6" />
                                <p className="absolute text-foreground text-xs top-[60px]">
                                    Lists
                                </p>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Personalization */}
                    <div className="relative">
                        <motion.div
                            whileHover={{ scale: 1.08, y: 7 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 20,
                            }}
                        >
                            <Button
                                disabled={isLoading}
                                variant="default"
                                size="icon"
                                aria-label="Personalization"
                                data-tooltip-id="tooltip"
                                data-tooltip-content="Personalization"
                                data-tooltip-place="bottom"
                                data-tooltip-delay-show={500}
                                data-tooltip-delay-hide={100}
                                onClick={() =>
                                    setActivePopup(
                                        activePopup === "personalization"
                                            ? null
                                            : "personalization"
                                    )
                                }
                                className="relative shadow-xl size-14 text-white rounded-full flex flex-col gap-0  bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                            >
                                <CircleUserRound className="size-6" />
                                <p className="absolute text-foreground text-xs top-[60px]">
                                    Personalization
                                </p>
                            </Button>
                        </motion.div>
                    </div>
                </section>
                                {/* Mobile: Images / Lists / Personalization as shadcn Drawers */}
                <Drawer
                    open={activePopup === "images"}
                    onOpenChange={(isOpen) => {
                        if (!isOpen) setActivePopup(null)
                    }}
                >
                    <DrawerContent className="max-h-[85vh]">
                        <DrawerHeader className="text-left">
                            <DrawerTitle>Add Images</DrawerTitle>
                            <DrawerDescription>
                                Add images to help personalize your curriculum.
                            </DrawerDescription>
                        </DrawerHeader>

                        <div className="overflow-y-auto px-4 pb-4">
                            <ImagesPanel
                                images={images}
                                previews={imagePreviews}
                                formatFileSize={formatFileSize}
                                onAddFiles={addImageFiles}
                                onRemove={removeImage}
                                onClear={clearImages}
                                inputId="image-upload-mobile"
                            />
                        </div>

                        <DrawerFooter>
                            <DrawerClose render={<Button variant="outline" className="w-full rounded-full py-6" />}>
                                {images.length > 0 ? `Done (${images.length})` : "Close"}
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

                <Drawer
                    open={activePopup === "lists"}
                    onOpenChange={(isOpen) => {
                        if (!isOpen) setActivePopup(null)
                    }}
                >
                    <DrawerContent className="max-h-[85vh]">
                        <DrawerHeader className="text-left">
                            <DrawerTitle>Add Lists</DrawerTitle>
                            <DrawerDescription>
                                Add lists, resources, or collections to your
                                curriculum.
                            </DrawerDescription>
                        </DrawerHeader>

                        <div className="overflow-y-auto px-4 pb-4">
                            <p className="text-sm text-muted-foreground">
                                Add lists, resources, or collections to your
                                curriculum.
                            </p>
                        </div>

                        <DrawerFooter>
                            <DrawerClose render={<Button variant="outline" className="w-full rounded-full py-6" />}>
                                Close
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

                <Drawer
                    open={activePopup === "personalization"}
                    onOpenChange={(isOpen) => {
                        if (!isOpen) setActivePopup(null)
                    }}
                >
                    <DrawerContent className="max-h-[85vh]">
                        <DrawerHeader className="text-left">
                            <DrawerTitle>Personalization</DrawerTitle>
                            <DrawerDescription>
                                Pick a student to include in the prompt.
                            </DrawerDescription>
                        </DrawerHeader>

                        <div className="overflow-y-auto px-4 pb-4">
                            <LearnerPicker
                                learners={learners}
                                selectedLearnerId={selectedLearnerId}
                                onSelect={(learner) =>
                                    setSelectedLearnerId(
                                        learner ? learner.id : null
                                    )
                                }
                            />
                        </div>

                        <DrawerFooter>
                            <DrawerClose render={<Button variant="outline" className="w-full rounded-full py-6" />}>
                                Done
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

                <AITextbox
                    placeholder="Create a curriculum on any topic..."
                    collapsedWidth={500}
                    expandedWidth={680}
                    models={textAIs}
                    chosenModel={chosenAIModel}
                    onModelChange={setChosenAIModel}
                    isLoading={isLoading}
                    onSubmit={handleSubmit}
                    className=" justify-center flex mx-auto"
                    shellClassName="shadow-xl bg-background/80 border border-border backdrop-blur-md"
                />
                {selectedLearner && (
                    <div className="flex justify-center">
                        <Badge variant="secondary" className="gap-1.5 text-xs">
                            <CircleUserRound className="size-3.5" />
                            For: {selectedLearner.name} ·{" "}
                            {selectedLearner.educationLevel}
                            <X
                                className="size-3.5 cursor-pointer"
                                onClick={() => setSelectedLearnerId(null)}
                            />
                        </Badge>
                    </div>
                )}


            </section>

            <BlurFade
                delay={0.25}
                inView
                blur="10px"
                duration={0.6} className="w-[95vw] mx-auto ">
                <h1 className="mx-auto flex text-center w-full max-w-6xl flex-row gap-2 px-4 text-lg text-card-foreground/70 font-bold my-4 sm:px-6 sm:text-xl">Ideas <Repeat2
                    className={`my-auto size-5 shrink-0 cursor-pointer [transform-origin:center] ${isRotating ? 'animate-[spin_0.6s_cubic-bezier(0.1,1,0.1,1)_forwards]' : ''
                        }`}
                    onClick={handleTrigger}
                    onAnimationEnd={() => setIsRotating(false)}
                />
                </h1>

                <section className="mx-auto w-full  px-4 sm:px-6">
                    <div className="grid grid-cols-2 gap-2">
                        {randomCurriculumIdeas.map((showcase, index) => (
                            <BlurFade
                                key={showcase.title}
                                delay={0.3 + index * 0.08}
                                inView
                                blur="8px"
                                duration={0.5}
                                className="relative h-full lg:hover:z-20"
                            >
                                <Card className="group relative aspect-[6/3] h-full w-full overflow-hidden rounded-[24px] border-0 shadow-md ring-1 ring-inset ring-black/10 transition-all duration-300 ease-out active:scale-[0.98] sm:rounded-[32px] lg:aspect-[5/3] lg:rounded-[40px] lg:hover:z-10 lg:hover:-translate-y-1 lg:hover:scale-[1.03] lg:hover:rounded-[30px] lg:hover:shadow-xl">
                                    {/* No scale on the image anymore, so nothing gets clipped inside the card */}
                                    <img
                                        src={showcase.image}
                                        alt={showcase.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />

                                    {/* Gradient, stronger at the bottom so the title stays readable */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    <CardHeader className="absolute inset-x-0 bottom-0 z-10 p-3 text-center text-[13px] font-semibold leading-snug text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] sm:p-4 sm:text-[15px]">
                                        <span className="line-clamp-2 transition-transform duration-300 lg:group-hover:-translate-y-0.5">
                                            {showcase.title}
                                        </span>
                                    </CardHeader>
                                </Card>
                            </BlurFade>
                        ))}
                    </div>
                </section>

            </BlurFade>


            {isLoading && (
                <CurriculumLoading topic={thisPrompt} />
            )}

            {generatedCurriculum && !isLoading && (
                <Card className="w-[90vw] mx-auto mt-6">
                    <CardHeader>
                        <CardTitle>
                            {generatedCurriculum.name}
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="whitespace-pre-wrap">
                            {generatedCurriculum.curriculum}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/** Table 1 Drawer */}

            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerContent className="rounded-5xl! border border-white/60 bg-white/60 shadow-[0_-10px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-2xl backdrop-saturate-150">
                    <DrawerHeader className="px-5 py-5">
                        <DrawerTitle className="text-lg font-semibold">
                            {mobileSelectedCurriculum?.name ?? "Curriculum"}
                        </DrawerTitle>
                        <DrawerDescription>Choose what to do with this curriculum.</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col gap-4 px-5 pb-6">
                        {mobileSelectedCurriculum && (
                            <section className="flex flex-col gap-8">
                                <section className="flex flex-col mt-4 w-[90vw]">
                                    <p className=" px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        DELETE
                                    </p>

                                    <Button
                                        variant="ghost"
                                        className="h-14 w-[95%] mx-auto justify-start gap-4 rounded-2xl border border-destructive/15 bg-destructive/10 px-4 text-[15px] font-medium text-destructive hover:bg-destructive/15 hover:text-destructive"
                                        onClick={() => {
                                            if (mobileSelectedCurriculum.source === "agent") {
                                                trashAgentCurriculum(mobileSelectedCurriculum.index)
                                            } else {
                                                trashCurriculum(mobileSelectedCurriculum.index)
                                            }
                                            setOpen(false)
                                        }}
                                    >
                                        <Trash2 className="size-5" /> Delete Curriculum
                                    </Button>
                                </section>

                                <div className="overflow-hidden rounded-2xl border bg-card divide-y divide-border">
                                    <p className="bg-muted/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Preview
                                    </p>
                                    <Link
                                        href={`/curriculums/${mobileSelectedCurriculum.index + 1}`}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-4 px-4 py-5 transition-colors hover:bg-accent/60 active:bg-accent"
                                    >
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Eye className="size-5" />
                                        </span>
                                        <span className="text-[15px] font-medium">Preview</span>
                                        <ChevronRight className="ml-auto size-4 text-muted-foreground/60" />
                                    </Link>

                                    <p className="bg-muted/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Export as...
                                    </p>

                                    <PDFDownloadLink
                                        document={<CurriculumPDF name={mobileSelectedCurriculum.name} curriculum={mobileSelectedCurriculum.curriculum} />}
                                        fileName={`${mobileSelectedCurriculum.name}.pdf`}
                                        className="flex items-center gap-4 px-4 py-5 transition-colors hover:bg-accent/60 active:bg-accent"
                                    >
                                        {({ loading }) => (
                                            <>
                                                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <FileText className="size-5" />
                                                </span>
                                                <span className="text-[15px] font-medium">{loading ? "Preparing…" : "PDF"}</span>
                                                <ChevronRight className="ml-auto size-4 text-muted-foreground/60" />
                                            </>
                                        )}
                                    </PDFDownloadLink>
                                    <div className="flex items-center gap-4 px-4 py-5 transition-colors hover:bg-accent/60 active:bg-accent">
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <FileDown className="size-5" />
                                        </span>
                                        <span className="flex-1 flex-row  ml-2 text-[15px] font-medium [&>*]:flex [&>*]:items-center [&>*]:text-left [&>*]:text-[15px] [&>*]:font-medium">
                                            <CurriculumDOCXDownload
                                                name={mobileSelectedCurriculum.name}
                                                curriculum={mobileSelectedCurriculum.curriculum}
                                            />
                                        </span>
                                        <ChevronRight className="size-4 text-muted-foreground/60" />
                                    </div>
                                </div>


                            </section>
                        )}
                    </div>

                    <DrawerFooter>
                        <DrawerClose render={<Button variant="outline" className="w-full rounded-full py-6" />}>Close</DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Table className="w-[90vw] my-10 mx-auto overflow-x-hidden">
                <TableHeader className="overflow-x-hidden text-card-foreground/70">
                    <TableRow>
                        <TableHead>Created Curriculum ({allCurriculums.length})</TableHead>
                        <TableHead>Options</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="overflow-x-hidden text-foreground">
                    {
                        allCurriculums.map((curriculum, index) => (
                            <TableRow key={index} className=" transition-all duration-300 ease-in-out justify-center items-center">
                                <TableCell className="flex flex-row w-full  my-auto items-center justify-start underline text-primary hover:cursor-pointer">
                                    <LinkPreview
                                        url={testLink + "curriculums/" + (index + 1)}
                                        className=" hover:cursor-pointer"
                                    >
                                        {curriculum.name}
                                    </LinkPreview>

                                </TableCell>

                                <TableCell className=" w-[15%] *:hover:bg-card/50 *:mx-2 ">
                                    <Ellipsis onClick={() => {
                                        setOpen(true)
                                        setMobileSelectedCurriculum({
                                            name: curriculum.name,
                                            curriculum: curriculum.curriculum,
                                            index,
                                            source: "created",
                                        })
                                    }} />
                                </TableCell>

                                {
                                    /**
                                     *  <TableCell className=" w-[15%] *:hover:bg-card/50 *:mx-2 ">
                                    <Link href={`/curriculums/${index + 1}`}>Preview</Link>
                                    <Button variant={"ghost"} size="icon-sm">
                                        <PDFDownloadLink document={<CurriculumPDF name={curriculum.name} curriculum={curriculum.curriculum} />} fileName={`${curriculum.name}.pdf`}>
                                            PDF
                                        </PDFDownloadLink>
                                    </Button>
                                    <CurriculumDOCXDownload name={curriculum.name} curriculum={curriculum.curriculum} />
            
                                </TableCell>
            
                                <TableCell className="w-min ">
                                    <Button variant={"ghost"} className="mx-auto" size="icon-sm">
                                        <Trash2 onClick={() => trashCurriculum(index)} />
                                    </Button>
                                </TableCell>
                                     */
                                }


                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>




            <Table className="w-[90vw] mx-auto  mb-10">
                <TableHeader>
                    <TableRow className="overflow-x-hidden text-card-foreground/70">
                        <TableHead>Agent-Made Curriculums ({agentCurriculums.length})</TableHead>
                        <TableHead>Options</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody className="overflow-x-hidden text-foreground">
                    {
                        agentCurriculums.map((curriculum, index) => (
                            <TableRow key={index} className=" transition-all duration-300 ease-in-out justify-center items-center">
                                <TableCell className="flex flex-row w-full  my-auto items-center justify-start underline text-primary hover:cursor-pointer">
                                    <LinkPreview
                                        url={testLink + "curriculums/" + (index + 1)}
                                        className=" hover:cursor-pointer"
                                    >
                                        {curriculum.name}
                                    </LinkPreview>

                                </TableCell>

                                <TableCell className=" w-[15%] *:hover:bg-card/50 *:mx-2 ">
                                    <Ellipsis onClick={() => {
                                        setOpen(true)
                                        setMobileSelectedCurriculum({
                                            name: curriculum.name,
                                            curriculum: curriculum.curriculum,
                                            index,
                                            source: "agent",
                                        })
                                    }} />
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </main>
    }

} 
