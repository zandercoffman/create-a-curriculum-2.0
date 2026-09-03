"use client"

import * as React from "react"

import AITextbox, {
    TextAIModel,
    textAIs,
} from "@/components/GooeyAITextbox"

import { GooeySearch } from "@/components/GooeySearch"
import { Button } from "@/components/ui/button"
import { GalleryHorizontalEnd, Images, Image, X, Download, ExternalLink, CircleUserRound, Trash, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatePresence, motion } from "framer-motion"

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
import { testLink } from "@/lib/static-unchanging"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HomePageShowcase from "@/components/product-showcase/homepageshowcase"
import { Showcases } from "@/lib/product-showcases"
import { BlurFade } from "@/components/ui/blur-fade"

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



    const [isLoading, setIsLoading] = React.useState(false)
    const [activePopup, setActivePopup] = React.useState<
        "images" | "lists" | "personalization" | null
    >(null)

    const handleSubmit = async (
        prompt: string,
        model: TextAIModel,
    ) => {
        console.log("Prompt:", prompt)
        console.log("AI Model:", model.name)

        setIsLoading(true)

        try {
            // Your API call will eventually go here.
            //
            // await fetch("/api/generate", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     prompt,
            //     model: model.name,
            //   }),
            // })

            await new Promise((resolve) =>
                setTimeout(resolve, 1500),
            )
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="w-[90%] px-20 overflow-x-hidden pt-20 relative min-h-screen overflow-hidden text-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_42%)]" />

            <section className="relative flex items-center justify-center flex-row w-full">
                <section className="relative flex w-min items-center justify-center gap-6">
                    <section className="flex shrink-0 flex-row items-center justify-end gap-2">
                        {/* Images */}
                        <div className="relative">
                            <AnimatePresence>
                                {activePopup === "images" && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.85, y: 8 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 6 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25,
                                        }}
                                        className="absolute top-[65px] left-1/2 z-50 w-52 -translate-x-1/2 rounded-2xl border border-slate-200/50 bg-white/90 p-4 shadow-2xl backdrop-blur-xl"
                                    >
                                        <p className="font-semibold text-slate-900">
                                            Add Images
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Add images to help personalize your curriculum.
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
                <section className="flex w-full ml-10 max-w-3xl flex-col justify-center items-center gap-0">
                    <AITextbox
                        placeholder="Generate a curriculum on any topic..."
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
                    <section className="w-[97%] mx-auto flex flex-row gap-2 mt-2">
                        {
                            /**
                             * <Badge className=" px-4 pl-2 py-4 bg-foreground/50 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
                            <X className="pl-1 w-6 h-6 " />
                            <GalleryHorizontalEnd className="size-10! " />
                            Amazon Wishlist
                        </Badge>
                        <Badge className="px-4 pl-2 py-4 bg-foreground/50 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
                            <X className="pl-1 size-10! " />
                            <Image className="size-10! " />
                            img_1892.jpg
                        </Badge>  
                             */
                        }
                    </section>
                </section>
            </section>






            {
                !isLoading && <BlurFade
                    delay={0.25}
                    inView
                    blur="10px"
                    duration={0.6}>
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
                    <Button className="bg-rose-500 mx-auto my-auto rounded-full px-5 cursor-pointer hover:bg-rose-600 text-white">
                        Explore Resources
                    </Button>
                </CardContent>
            </Card>}


            {
                isLoading && <Table className="w-[80vw] mx-auto mb-4 ">
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
                                <span className="text-lg font-medium text-black">KiwiCo Eureka Crate — a hands-on STEM/engineering educational kit for ages 12–100.</span>



                            </TableCell>
                        </TableRow>

                    </TableBody>
                    <blockquote className="shimmer mt-2 w-[72vw] border-l-2 pl-6 text-muted-foreground italic">
                        Curriculum for Science Kit Subscriptions

                        Write a comprehensive and engaging curriculum for a child who wants to learn about science kit subscriptions. The curriculum should include a clear scope and sequence, learning objectives, activities, assessments, and a brief history of science kit subscriptions.

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
                        * Include a brief history of science kit subscriptions, explaining their origins, development, and role in educational learning.
                        * Make the curriculum appropriate, engaging, and accessible for a child learning about science kit subscriptions.
                        * Explain how science kit subscriptions can support hands-on, educational learning and scientific exploration.
                        * Include a comprehensive list of all materials needed throughout the curriculum, including any additional products mentioned.
                        * For every material, provide a detailed explanation of what it is, how it is specifically used in the curriculum, which lesson(s) or activity(ies) it is used for, and any specific techniques, experiments, or applications involved.
                        * Place the complete materials list at the end of the curriculum.
                        * Provide a short explanation next to each material describing its purpose and use.
                        * Ensure that all activities, materials, and assessments directly support the learning objectives and progression of the curriculum.

                        Final Materials Section:

                        At the end of the curriculum, provide a Summary of Materials Required in a clear list or table. Include each material and a brief explanation of how it is used within the curriculum.

                        The final curriculum should be comprehensive, age-appropriate, hands-on, educational, and engaging, giving the learner a structured introduction to science kit subscriptions while encouraging curiosity, experimentation, observation, and scientific thinking.

                    </blockquote>
                </Table>
            }

            <Table className="w-[80vw] mx-auto  mb-10">
                <TableCaption>A list of your recent created curriculums.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-card-foreground/50">Created Curriculum (5)</TableHead>
                        <TableHead className="text-card-foreground/50">Export</TableHead>
                        <TableHead className="text-card-foreground/50">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className=" transition-all duration-300 ease-in-out justify-center items-center">
                        <TableCell className="flex flex-row w-full  my-auto items-center justify-start underline text-blue-800 hover:cursor-pointer">
                            <LinkPreview
                                url={testLink + "/markdown?text=" + encodeURIComponent("# Hello World\n\nThis is **bold** and this is *italic*.")}
                                className="text-blue-800 hover:text-blue-600 hover:cursor-pointer"
                            >
                                KiwiCo Eureka Crate — a hands-on STEM/engineering educational kit for ages 12–100.
                            </LinkPreview>

                        </TableCell>

                        <TableCell className=" w-[15%] *:hover:bg-card/50 *:mx-2 ">
                            <Button variant={"ghost"} size="icon-sm">Preview</Button>
                            <Button variant={"ghost"} size="icon-sm">PDF</Button>
                            <Button variant={"ghost"} size="icon-sm">DOCX</Button>
                            <Button variant={"ghost"} size="icon-sm">Share</Button>

                        </TableCell>

                        <TableCell className="w-min ">
                            <Button variant={"ghost"} className="mx-auto" size="icon-sm">
                                <Trash2 />
                            </Button>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </main>
    )
}