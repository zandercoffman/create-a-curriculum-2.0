import { Groq } from "groq-sdk"
import { z } from "zod"

const MAX_COMPLETION_TOKENS = 800

// --------------------------------
// What the frontend sends
// --------------------------------

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
        .max(20),

    model: z
        .string()
        .trim()
        .min(1)
        .max(200),
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
            {
                status: 500,
            }
        )
    }

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
            {
                status: 400,
            }
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
                details: parsed.error.flatten(),
            },
            {
                status: 400,
            }
        )
    }

    const { images, model } = parsed.data

    console.log("===== SUMMARIZING IMAGES =====")
    console.log("Model:", model)
    console.log("Number of images:", images.length)
    console.log("==============================")

    // --------------------------------
    // Create Groq client
    // --------------------------------

    const groq = new Groq({
        apiKey: groqApiKey,
    })

    try {
        // --------------------------------
        // Build multimodal content
        // --------------------------------

        const content = [
            {
                type: "text" as const,

                text: `
Analyze all of the provided images and summarize them together.

Describe the important information visible across the images.

Include:

- The main subject of the images
- Important objects or subjects
- Important visible text
- Relevant details
- Any information that would help someone understand the images
- Connections or relationships between the images when relevant

Treat all images as part of the same request.

Be accurate and concise.

Keep the summary under 500 words.

Do not invent information that cannot reasonably be determined from the images.

Return ONLY the plain-text summary.

Do not return JSON.
Do not use markdown formatting unless necessary.
`,
            },

            ...images.map((image) => ({
                type: "image_url" as const,

                image_url: {
                    url: `data:${image.mimeType};base64,${image.image}`,
                },
            })),
        ]

        // --------------------------------
        // Generate image summary
        // --------------------------------

        const completion =
            await groq.chat.completions.create({
                model: model,

                messages: [
                    {
                        role: "user",
                        content,
                    },
                ],

                temperature: 0.6,

                max_completion_tokens:
                    MAX_COMPLETION_TOKENS,

                top_p: 0.95,
            })

        // --------------------------------
        // Get AI response
        // --------------------------------

        const summary =
            completion.choices[0]?.message?.content?.trim()

        if (!summary) {
            return Response.json(
                {
                    error: "The AI returned an empty response.",
                },
                {
                    status: 500,
                }
            )
        }

        console.log("Groq image summary received.")

        // --------------------------------
        // Return plain text
        // --------------------------------

        return new Response(summary, {
            status: 200,

            headers: {
                "Content-Type":
                    "text/plain; charset=utf-8",
            },
        })
    } catch (error) {
        console.error(
            "===== GROQ IMAGE API ERROR ====="
        )

        console.error(error)

        if (error instanceof Error) {
            console.error(
                "Message:",
                error.message
            )

            console.error(
                "Stack:",
                error.stack
            )
        }

        console.error(
            "================================"
        )

        return Response.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown Groq API error.",
            },
            {
                status: 500,
            }
        )
    }
}