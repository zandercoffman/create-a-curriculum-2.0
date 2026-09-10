import OpenAI from "openai"
import { z } from "zod"

const MAX_BODY_BYTES = 60_000
const MAX_COMPLETION_TOKENS = 4_096


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

    const groqApiKey = process.env.GROQ_API_KEY

    if (!groqApiKey) {
        return Response.json(
            {
                error: "GROQ_API_KEY is not configured.",
            },
            { status: 500 }
        )
    }

    // --------------------------------
    // Check request size
    // --------------------------------

    /**const contentLength = Number(
        req.headers.get("content-length") || "0"
    )

    if (contentLength > MAX_BODY_BYTES) {
        return Response.json(
            {
                error: "Request body is too large.",
            },
            { status: 413 }
        )
    } */

    // --------------------------------
    // Parse JSON
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
        return Response.json(
            {
                error: "Invalid request.",
            },
            { status: 400 }
        )
    }

    const { prompt, model } = parsed.data

    // --------------------------------
    // Create Groq client
    // --------------------------------

    const openai = new OpenAI({
        apiKey: groqApiKey,
        baseURL: "https://api.groq.com/openai/v1",
    })

    try {
        // --------------------------------
        // Generate curriculum
        // --------------------------------

        console.log("===== GENERATING CURRICULUM =====")
console.log("Model:", model)
console.log("Prompt:", prompt)
console.log("=================================")
        const completion = await openai.chat.completions.create({
    model,
    max_tokens: MAX_COMPLETION_TOKENS,

    messages: [
        {
            role: "user",
            content: `
Create a comprehensive, age-appropriate curriculum about ${prompt} for a child.

Include:
1. Scope and Sequence
2. Learning Objectives
3. Seven Detailed Lessons in Sequential Order
4. Activities
5. Assessment
6. A brief history of ${prompt}
7. A complete materials list at the end

Each lesson should include learning objectives, activities, and assessments. Make the curriculum hands-on, educational, engaging, and appropriate for a child. Explain how ${prompt} supports exploration, experimentation, observation, and scientific thinking.

For every material, explain what it is, how it is used, and which lesson or activity requires it.

Return ONLY valid JSON in this exact format:

{
  "name": "Curriculum title",
  "curriculum": "Complete curriculum"
}
`,
        },
    ],
})

        // --------------------------------
        // Get AI response
        // --------------------------------

        const rawResponse =
            completion.choices[0]?.message?.content

        if (!rawResponse) {
            return Response.json(
                {
                    error: "The AI returned an empty response.",
                },
                { status: 500 }
            )
        }

        // --------------------------------
        // Parse AI JSON
        // --------------------------------

        let json: unknown

        try {
            json = JSON.parse(rawResponse)
        } catch {
            console.error(
                "AI returned invalid JSON:",
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
        // Validate AI output with Zod
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
        // Return structured curriculum
        // --------------------------------

        return Response.json(result.data)
    } catch (error) {
        console.error("===== GROQ API ERROR =====")
        console.error(error)

        if (error instanceof Error) {
            console.error("Message:", error.message)
            console.error("Stack:", error.stack)
        }

        console.error("==========================")

        return Response.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown Groq API error.",
            },
            { status: 500 }
        )
    }
}