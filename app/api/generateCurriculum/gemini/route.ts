import { GoogleGenAI } from "@google/genai"
import { z } from "zod"

const MAX_COMPLETION_TOKENS = 4096

// What the frontend sends
const requestSchema = z.object({
    prompt: z.string().trim().min(1).max(12_000),
    model: z.string().trim().min(1).max(200),
})

// What the AI must return
const curriculumSchema = z.object({
    name: z.string(),
    curriculum: z.string(),
})

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
    // --------------------------------
    // Check API key
    // --------------------------------

    const geminiApiKey = process.env.GEMINI_API_KEY

    if (!geminiApiKey) {
        return Response.json(
            {
                error: "GEMINI_API_KEY is not configured.",
            },
            { status: 500 }
        )
    }

    // --------------------------------
    // Parse request
    // --------------------------------

    let body: unknown

    try {
        body = await req.json()
    } catch {
        return Response.json(
            {
                error: "Invalid JSON request body.",
            },
            { status: 400 }
        )
    }

    // --------------------------------
    // Validate request
    // --------------------------------

    const parsed = requestSchema.safeParse(body)

    if (!parsed.success) {
        console.error("===== INVALID CURRICULUM REQUEST =====")
        console.error(parsed.error.flatten())
        console.error("======================================")

        return Response.json(
            {
                error: "The curriculum request was invalid.",
                file: "app/api/generateCurriculum/gemini/route.ts",
                details: parsed.error.flatten(),
            },
            { status: 400 }
        )
    }

    const { prompt, model } = parsed.data

    console.log("===== GENERATING CURRICULUM =====")
    console.log("Model:", model)
    console.log("Prompt:", prompt)
    console.log("=================================")

    // --------------------------------
    // Create Gemini client
    // --------------------------------

    const ai = new GoogleGenAI({
        apiKey: geminiApiKey,
    })

    try {
        // --------------------------------
        // Generate curriculum
        // --------------------------------

        const interaction = await ai.interactions.create({
            model,

            input: `Create a comprehensive, age- appropriate curriculum about ${prompt} for a child.

                Include:
            1. Scope and Sequence
        2. Learning Objectives
        3. Seven Detailed Lessons in Sequential Order
        4. Activities
        5. Assessment
        6. A brief history of ${prompt}
        7. A complete materials list at the end

Each lesson should include learning objectives, activities, and assessments.Make the curriculum hands - on, educational, engaging, and appropriate for a child.Explain how ${prompt} supports exploration, experimentation, observation, and scientific thinking.

For every material, explain what it is, how it is used, and which lesson or activity requires it.

Return ONLY valid JSON in this exact format:

        {
            "name": "Curriculum title",
                "curriculum": "Complete curriculum"
        }`,

            generation_config: {
                max_output_tokens: MAX_COMPLETION_TOKENS,
            },

            response_format: {
                type: "text",
                mime_type: "application/json",
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                        },
                        curriculum: {
                            type: "string",
                        },
                    },
                    required: [
                        "name",
                        "curriculum",
                    ],
                },
            },
        })

        // --------------------------------
        // Get AI response
        // --------------------------------

        const rawResponse = interaction.output_text

        if (!rawResponse) {
            return Response.json(
                {
                    error: "The AI returned an empty response.",
                },
                { status: 500 }
            )
        }

        console.log("Gemini response received.")

        // --------------------------------
        // Parse JSON
        // --------------------------------

        let json: unknown

        try {
            json = JSON.parse(rawResponse)
        } catch {
            console.error(
                "Gemini returned invalid JSON:",
                rawResponse
            )

            return Response.json(
                {
                    error: "The AI returned invalid JSON.",
                },
                { status: 500 }
            )
        }

        // --------------------------------
        // Validate with Zod
        // --------------------------------

        const result = curriculumSchema.safeParse(json)

        if (!result.success) {
            console.error(
                "Invalid curriculum schema:",
                result.error
            )

            return Response.json(
                {
                    error:
                        "The AI response did not match the required schema.",
                },
                { status: 500 }
            )
        }

        // --------------------------------
        // Return curriculum
        // --------------------------------

        return Response.json(result.data)

    } catch (error) {
        console.error("===== GEMINI API ERROR =====")
        console.error(error)

        return Response.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown Gemini API error.",
            },
            { status: 500 }
        )
    }
}