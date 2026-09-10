"use client"

import { Button } from "@/components/ui/button"
import { retrieveItemFromIndexedDB } from "@/lib/IndexedDB"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { use, useEffect, useState } from "react"

type Curriculum = {
    name: string
    curriculum: string
}

export default function CurriculumPreview({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)

    const [curriculum, setCurriculum] =
        useState<Curriculum | null>(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function loadCurriculum() {
            setIsLoading(true)

            try {
                const curriculums =
                    await retrieveItemFromIndexedDB<Curriculum[]>(
                        "curriculums"
                    )

                if (!curriculums) {
                    setCurriculum(null)
                    return
                }

                const index = Number(id) - 1

                if (!Number.isInteger(index) || index < 0) {
                    setCurriculum(null)
                    return
                }

                const selectedCurriculum =
                    curriculums[index]

                setCurriculum(
                    selectedCurriculum ?? null
                )
            } catch (error) {
                console.error(
                    "Error loading curriculum:",
                    error
                )

                setCurriculum(null)
            } finally {
                setIsLoading(false)
            }
        }

        loadCurriculum()
    }, [id])

    if (isLoading) {
        return <div>Loading curriculum...</div>
    }

    if (!curriculum) {
        return <div>Curriculum not found</div>
    }

    return (
        <main className="p-20 flex w-[90vw] flex-col gap-4">

            <Link href="/curriculums" className="flex items-center gap-2">
                <Button className={"w-[100px] rounded-full px-2"}><ArrowLeft className="size-4" /> Back</Button>
            </Link>

            <h1 className="text-2xl font-bold">
                {curriculum.name}
            </h1>

            <p className="whitespace-pre-wrap">
                {curriculum.curriculum}
            </p>
        </main>
    )
}