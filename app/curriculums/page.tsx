"use client"

import * as React from "react"

import AITextbox, {
    TextAIModel,
    textAIs,
} from "@/components/GooeyAITextbox"

import { GooeySearch } from "@/components/GooeySearch"
import { Button } from "@/components/ui/button"
import { GalleryHorizontalEnd, Images, Image, X, Download, ExternalLink, CircleUserRound, Trash, Trash2, Upload } from "lucide-react"
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
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const searchData = [
    "Fractions",
    "Reading workshop",
    "Project-based learning",
    "Vocabulary spiral",
    "Assessment rubric",
    "Lesson pacing guide",
    "Kindergarten phonics",
    "Argument writing",
    "Small-group intervention",
    "Standards alignment",
]


export default function CurriculumsPage() {
    const [chosenAIModel, setChosenAIModel] =
        React.useState<TextAIModel>(textAIs[0])

    const [error, setError] = React.useState<string | null>(null)

    const [images, setImages] = React.useState<File[]>([])

    const handleImageUpload = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = Array.from(event.target.files || [])

        // Only allow images
        const imageFiles = files.filter((file) =>
            file.type.startsWith("image/")
        )

        setImages((prev) => [...prev, ...imageFiles])
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

        loadCurriculums()
    }, [])

    const handleSubmit = async (
        prompt: string,
        model: TextAIModel,
    ) => {
        setThisPrompt(prompt)
        setIsLoading(true)


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

    async function trashCurriculum(index: number) {
        const updatedCurriculums = allCurriculums.filter((_, i) => i !== index)

        await saveItemToIndexedDB(
            "curriculums",
            updatedCurriculums
        )

        setAllCurriculums(updatedCurriculums)
    }

    return (
        <main className="w-[90%] px-20 overflow-x-hidden pt-20 relative min-h-screen overflow-hidden text-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_42%)]" />

            <section className="relative flex items-center justify-center flex-row w-[80%] gap-6">
                <section className="relative flex w-min items-center justify-center gap-6 ml-[15vw] ">
                    <section className="flex shrink-0 flex-row items-center justify-end gap-2">
                        {/* Images */}
                        <div className="relative">
                            <AnimatePresence>
                                {activePopup === "images" && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.75, x: -20, y: -20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, x: 15, y: 15 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25,
                                        }}
                                        style={{
                                            height: images.length == 0 ? "90px" : "450px",
                                        }}
                                        className="absolute top-[65px] z-50 w-[35rem] -translate-x-[5%] rounded-2xl border border-slate-200/50 bg-white/90 p-4 shadow-2xl backdrop-blur-xl"
                                    >
                                        <section className="flex flex-row gap-2 justify-between items-center px-1.5">
                                            <section className="flex flex-col gap-1">
                                                <p className="font-semibold text-slate-900">
                                                    Add Images
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500">
                                                    Add images to help personalize your curriculum.
                                                </p>
                                            </section>

                                            {/* Hidden file input */}
                                            <input
                                                id="image-upload"
                                                type="file"
                                                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                                multiple
                                                className="hidden"
                                                onChange={handleImageUpload}
                                            />

                                            {/* Upload button */}
                                            <Button
                                                type="button"
                                                className="rounded-xl  *:hover:bg-card/50 transition-all duration-300 ease-in-out"
                                                onClick={() =>
                                                    document.getElementById("image-upload")?.click()
                                                }
                                            >
                                                <Upload className="w-4 h-4 ml-2" />
                                                <span className="mr-2">Upload</span>
                                            </Button>
                                        </section>

                                        {
                                            images.length > 0 && <Carousel className="mt-4 w-[85%] mx-auto">
                                                <CarouselContent className="flex gap-4 mt-4">
                                                    {images.map((image, index) => (
                                                        <CarouselItem
                                                            key={`${image.name}-${index}`}
                                                            className="relative w-auto basis-auto shrink-0 rounded-lg overflow-hidden"
                                                        >
                                                            <img
                                                                src={URL.createObjectURL(image)}
                                                                alt={image.name}
                                                                className="w-auto mx-auto h-auto max-h-60 object-contain rounded-3xl"
                                                            />
                                                            <Badge variant="outline" className=" mt-[10px] mx-auto text-sm">
                                                                <X className="w-4 h-4 hover:cursor-pointer" /> {image.name}
                                                            </Badge>
                                                            {image.size > 0 && (
                                                                <p className="text-xs text-left text-slate-500 mt-1">
                                                                    {(image.size / 1024).toFixed(2)} KB
                                                                </p>
                                                            )}
                                                        </CarouselItem>
                                                    ))}
                                                </CarouselContent>

                                                {images.length > 0 && (
                                                    <>
                                                        <CarouselPrevious />
                                                        <CarouselNext />
                                                    </>
                                                )}
                                            </Carousel>
                                        }

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
                                    <p className="absolute text-black text-xs top-[60px]">
                                        Images
                                    </p>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Lists + Personalization */}
                        <section className="flex flex-col gap-2 ml-10">

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
                                            className="absolute top-[65px] left-1/2 z-50 w-52 -translate-x-1/2 rounded-2xl border border-slate-200/50 bg-white/90 p-4 shadow-2xl backdrop-blur-xl"
                                        >
                                            <p className="font-semibold text-slate-900">
                                                Add Lists
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500">
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
                                        className="relative shadow-xl size-14 rounded-full flex flex-col gap-0 translate-x-[-30px] translate-y-[-10px] bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                                    >
                                        <GalleryHorizontalEnd className="size-6" />
                                        <p className="absolute text-black text-xs top-[60px]">
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
                                            className="absolute top-[65px] left-1/2 z-50 w-56 -translate-x-1/2 rounded-2xl border border-slate-200/50 bg-white/90 p-4 shadow-2xl backdrop-blur-xl"
                                        >
                                            <p className="font-semibold text-slate-900">
                                                Personalization
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500">
                                                Customize grade level, learning style, difficulty,
                                                and more.
                                            </p>
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
                                        className="relative shadow-xl size-14 rounded-full flex flex-col gap-0 translate-y-[8px] translate-x-[10px] bg-[linear-gradient(45deg,#ff6b6b,#f06595)] font-medium"
                                    >
                                        <CircleUserRound className="size-6" />
                                        <p className="absolute text-black text-xs top-[60px]">
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
                        shellClassName="shadow-xl bg-foreground/40 border border-slate-300/30 backdrop-blur-md"
                    />
                    <Carousel className="w-[560px] mx-auto flex flex-row gap-2 mt-2">
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
                error !== null && <Card className="w-[80%] bg-gradient-to-br from-[#f70031] py-4 to-[#f70031] border border-rose-100/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-rose-500/10 mt-12 mx-auto flex flex-row mb-4 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
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
                    <h1 className="w-[80%] mx-auto text-xl text-card-foreground/60 font-bold my-4 ">Ideas</h1>

                    <section className="w-[80%] mx-auto flex flex-row gap-4 ">
                        {[Showcases[0], Showcases[1], Showcases[2], Showcases[3]].map(
                            (showcase, index) => (
                                <BlurFade
                                    key={index}
                                    delay={0.3 + index * 0.08}
                                    inView
                                    blur="8px"
                                    duration={0.5}
                                    className="w-[25%] h-20 z-0"
                                >
                                    <Card
                                        className="group basis-1/4 cursor-pointer h-20 relative overflow-hidden rounded-3xl border-0 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
                                    >
                                        {/* Moving background image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:-translate-y-[10%] translate-y-[10%] scale-[1.15] group-hover:scale-[1.1]"
                                            style={{
                                                backgroundImage: `url(${showcase.image})`,
                                            }}
                                        />

                                        {/* White wash */}
                                        <div className="absolute inset-0 bg-white/35 transition-opacity duration-300 group-hover:bg-white/25" />

                                        {/* Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-white/10 to-white/30" />

                                        <CardHeader className="absolute bottom-2 left-0 z-10">
                                            <CardTitle className="text-lg text-white">
                                                {showcase.title}
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </BlurFade>
                            )
                        )}
                    </section>
                </BlurFade>
            }



            {!isLoading && <Card className="w-[80%] bg-gradient-to-br from-[#FFF0F3] py-4 to-white border border-rose-100/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-rose-500/10 mt-6 mx-auto flex flex-row mb-4 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
                <CardHeader className="flex flex-col gap-2 w-full">
                    <CardTitle>Check out pre-made curriculum and other resources!</CardTitle>
                    <CardDescription>Explore our collection of pre-made curricula and additional learning materials.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="bg-rose-500 cursor-pointer! mx-auto my-auto rounded-full px-5  hover:bg-rose-600 text-white">
                        Explore Resources
                    </Button>
                </CardContent>
            </Card>}


            {
                isLoading && <Table className="w-[80vw] mx-auto mb-4 mt-12 ">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-card-foreground/50 flex flex-row items-center">Curriculum In Progress {chosenAIModel && <img src={`${chosenAIModel.svg}`} alt="AI Model" className="size-6 ml-2 rounded-full" />}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className=" transition-all duration-300 ease-in-out justify-center items-center">
                            <TableCell className="pt-4 shimmer flex flex-row w-full  my-auto items-center justify-start cursor-not-allowed text-gray-600">
                                <div className="flex items-center justify-center mr-2">
                                    <div className="size-6 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                                <span className="text-lg font-medium text-black">{thisPrompt}</span>



                            </TableCell>
                        </TableRow>

                    </TableBody>
                    <blockquote className="shimmer mt-2 w-[72vw] border-l-2 pl-6 text-muted-foreground italic">
                        Curriculum for {thisPrompt}

                        Write a comprehensive and engaging curriculum for a child who wants to learn about {thisPrompt}. The curriculum should include a clear scope and sequence, learning objectives, activities, assessments, and a brief history of {thisPrompt}.

                        The curriculum should contain the following sections:

                        1. Scope and Sequence
                        2. Learning Objectives
                        3. Seven Detailed Lessons in Sequential Order
                        4. Activities
                        5. Assessment

                        Curriculum Requirements:

                        * The curriculum must include the word “educational” somewhere in the content.
                        * Provide seven detailed lessons arranged in a logical learning sequence.
                        * Each lesson should include relevant learning objectives, activities, and assessment methods.
                        * Include a brief history of {thisPrompt}, explaining its origins, development, and role in educational learning.
                        * Make the curriculum appropriate, engaging, and accessible for a child learning about {thisPrompt}.
                        * Explain how {thisPrompt} can support hands-on, educational learning and scientific exploration.
                        * Include a comprehensive list of all materials needed throughout the curriculum, including any additional products mentioned.
                        * For every material, provide a detailed explanation of what it is, how it is specifically used in the curriculum, which lesson(s) or activity(ies) it is used for, and any specific techniques, experiments, or applications involved.
                        * Place the complete materials list at the end of the curriculum.
                        * Provide a short explanation next to each material describing its purpose and use.
                        * Ensure that all activities, materials, and assessments directly support the learning objectives and progression of the curriculum.

                        Final Materials Section:

                        At the end of the curriculum, provide a Summary of Materials Required in a clear list or table. Include each material and a brief explanation of how it is used within the curriculum.

                        The final curriculum should be comprehensive, age-appropriate, hands-on, educational, and engaging, giving the learner a structured introduction to {thisPrompt} while encouraging curiosity, experimentation, observation.

                    </blockquote>
                </Table>
            }

            {generatedCurriculum && !isLoading && (
                <Card className="w-[80%] mx-auto mt-6">
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

            <Table className="w-[80vw] mx-auto  mb-10">
                <TableCaption>A list of your recent created curriculums.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-card-foreground/50">Created Curriculum ({allCurriculums.length})</TableHead>
                        <TableHead className="text-card-foreground/50">Export</TableHead>
                        <TableHead className="text-card-foreground/50">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allCurriculums.map((curriculum, index) => (
                            <TableRow key={index} className=" transition-all duration-300 ease-in-out justify-center items-center">
                                <TableCell className="flex flex-row w-full  my-auto items-center justify-start underline text-blue-800 hover:cursor-pointer">
                                    <LinkPreview
                                        url={testLink + "curriculums/" + (index + 1)}
                                        className="text-blue-800 hover:text-blue-600 hover:cursor-pointer"
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
        </main>
    )
}