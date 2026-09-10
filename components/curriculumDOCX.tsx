"use client"

import React from "react"
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  BorderStyle,
} from "docx"
import { Button } from "./ui/button"

function sanitizeFileName(name: string) {
  return (
    name
      .replace(/[^a-z0-9]/gi, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase() || "curriculum"
  )
}

function createParagraphs(curriculum: string) {
  const lines = curriculum.split(/\r?\n/)
  const paragraphs: Paragraph[] = []

  for (const rawLine of lines) {
    const trimmed = rawLine.trim()

    // Empty line
    if (!trimmed) {
      paragraphs.push(
        new Paragraph({
          spacing: {
            after: 100,
          },
        })
      )
      continue
    }

    // Main numbered section
    // Matches:
    // 1. Scope and Sequence
    // 2. Learning Objectives
    const sectionMatch = trimmed.match(/^(\d+)\.\s+(.+)$/)

    if (sectionMatch) {
      paragraphs.push(
        new Paragraph({
          text: `${sectionMatch[1]}. ${sectionMatch[2]}`,
          heading: HeadingLevel.HEADING_1,
          spacing: {
            before: 300,
            after: 150,
          },
        })
      )

      continue
    }

    // Lesson heading
    // Matches:
    // Lesson 1: Introduction
    // Lesson 2: Understanding Energy
    if (/^Lesson \d+:/i.test(trimmed)) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: trimmed,
              bold: true,
              size: 22,
            }),
          ],
          spacing: {
            before: 200,
            after: 100,
          },
          border: {
            top: {
              style: BorderStyle.SINGLE,
              size: 4,
              color: "E2E2E2",
            },
            bottom: {
              style: BorderStyle.SINGLE,
              size: 4,
              color: "E2E2E2",
            },
            left: {
              style: BorderStyle.SINGLE,
              size: 4,
              color: "E2E2E2",
            },
            right: {
              style: BorderStyle.SINGLE,
              size: 4,
              color: "E2E2E2",
            },
          },
        })
      )

      continue
    }

    // Bullet point
    if (trimmed.startsWith("- ")) {
      paragraphs.push(
        new Paragraph({
          text: trimmed.substring(2),
          bullet: {
            level: 0,
          },
          spacing: {
            after: 80,
          },
        })
      )

      continue
    }

    // Regular paragraph
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: trimmed,
            size: 21,
          }),
        ],
        spacing: {
          after: 100,
          line: 276,
        },
      })
    )
  }

  return paragraphs
}

export async function exportCurriculumDOCX(
  name: string,
  curriculum: string
) {
  const document = new Document({
    creator: "Create-a-Curriculum",
    title: name,
    subject: "Curriculum",
    description: "Curriculum Guide",
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              bottom: 720,
              left: 900,
              right: 900,
            },
          },
        },

        children: [
          // Title
          new Paragraph({
            children: [
              new TextRun({
                text: name,
                bold: true,
                size: 48,
              }),
            ],
            spacing: {
              after: 100,
            },
          }),

          // Subtitle
          new Paragraph({
            children: [
              new TextRun({
                text: "Curriculum Guide",
                color: "777777",
                size: 20,
              }),
            ],
            spacing: {
              after: 250,
            },
          }),

          // Divider
          new Paragraph({
            border: {
              bottom: {
                style: BorderStyle.SINGLE,
                size: 6,
                color: "DDDDDD",
              },
            },
            spacing: {
              after: 300,
            },
          }),

          // Curriculum content
          ...createParagraphs(curriculum),

          // Footer
          new Paragraph({
            children: [
              new TextRun({
                text: "Create-a-Curriculum",
                color: "999999",
                size: 16,
              }),
            ],
            spacing: {
              before: 400,
            },
          }),
        ],
      },
    ],
  })

  const blob = await Packer.toBlob(document)

  const url = URL.createObjectURL(blob)

  const link = window.document.createElement("a")
  link.href = url
  link.download = `${sanitizeFileName(name)}.docx`

  window.document.body.appendChild(link)
  link.click()
  link.remove()

  URL.revokeObjectURL(url)
}

export default function CurriculumDOCXDownload({
  name,
  curriculum,
}: {
  name: string
  curriculum: string
}) {
  const [exporting, setExporting] = React.useState(false)

  async function handleExport() {
    try {
      setExporting(true)

      await exportCurriculumDOCX(name, curriculum)
    } catch (error) {
      console.error("Failed to export DOCX:", error)
    } finally {
      setExporting(false)
    }
  }

  return (
    <Button
    variant={"ghost"}
    size="icon-sm"
      type="button"
      onClick={handleExport}
      disabled={exporting}
    >
      DOCX
    </Button>
  )
}