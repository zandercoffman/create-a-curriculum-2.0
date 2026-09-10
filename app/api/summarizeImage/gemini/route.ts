import { GoogleGenAI } from "@google/genai"
import { z } from "zod"

const MAX_COMPLETION_TOKENS = 2048

const requestSchema = z.object({
    images: z
        .array(
            z.object({
                image: z.string().min(1),
                mimeType: z
                    .string()
                    .regex(
                        /^image\/(jpeg|jpg|png|webp|gif)$/i
                    ),
            })
        )
        .min(1)
})

const summarySchema = z.object({
    summary: z.string(),
})

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
    const geminiApiKey = process.env.GEMINI_API_KEY

    if (!geminiApiKey) {
        return Response.json(
            {
                error: "GEMINI_API_KEY is not configured.",
            },
            { status: 500 }
        )
    }

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

    const parsed = requestSchema.safeParse(body)

    if (!parsed.success) {
        console.error(
            "===== INVALID GEMINI REQUEST ====="
        )
        console.error(
            parsed.error.flatten()
        )

        return Response.json(
            {
                error: "Invalid request.",
                details: parsed.error.flatten(),
            },
            { status: 400 }
        )
    }

    const { images } = parsed.data

    console.log(
        "===== SUMMARIZING IMAGES ====="
    )
    console.log("Number of images:", images.length)
    console.log("==============================")

    const ai = new GoogleGenAI({
        apiKey: geminiApiKey,
    })

    try {
        const input = [
            {
                type: "text" as const,
                text: `
Analyze the provided image(s) and summarize them.

Describe the important information visible in the images.

Identify:
- The main subject
- Important objects
- Visible text
- Relevant details
- Information that would be useful for understanding the images

If multiple images are provided, consider them together and
produce one combined summary.

Be accurate and concise.

Do not invent information that cannot be determined from the images.

Return ONLY valid JSON in this exact format:

{
    "summary": "Clear summary of the image(s)."
}
                `.trim(),
            },

            ...images.map((item) => ({
                type: "image" as const,
                data: item.image,
                mime_type: item.mimeType,
            })),
        ]

        const interaction =
            await ai.interactions.create({
                model: "gemini-3.8-flash",
                input,

                generation_config: {
                    max_output_tokens:
                        MAX_COMPLETION_TOKENS,
                },

                response_format: {
                    type: "text",
                    mime_type: "application/json",
                    schema: {
                        type: "object",
                        properties: {
                            summary: {
                                type: "string",
                            },
                        },
                        required: ["summary"],
                    },
                },
            })

        const rawResponse =
            interaction.output_text

        if (!rawResponse) {
            return Response.json(
                {
                    error:
                        "The AI returned an empty response.",
                },
                { status: 500 }
            )
        }

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
                    error:
                        "The AI returned invalid JSON.",
                },
                { status: 500 }
            )
        }

        const result =
            summarySchema.safeParse(json)

        if (!result.success) {
            console.error(
                "Invalid summary schema:",
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

        return Response.json(result.data)
    } catch (error) {
        console.error(
            "===== GEMINI IMAGE API ERROR ====="
        )
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