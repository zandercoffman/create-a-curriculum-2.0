"use client"

import React from "react"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 55,
    paddingHorizontal: 55,
    fontFamily: "Helvetica",
    color: "#222",
    fontSize: 10.5,
    lineHeight: 1.55,
  },

  title: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    color: "#111",
  },

  subtitle: {
    fontSize: 10,
    color: "#777",
    marginBottom: 25,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 25,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#111",
    marginBottom: 8,
  },

  paragraph: {
    marginBottom: 6,
  },

  bullet: {
    marginBottom: 5,
    paddingLeft: 8,
  },

  lesson: {
    marginBottom: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 5,
  },

  lessonTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },

  lessonText: {
    marginBottom: 4,
  },

  footer: {
    position: "absolute",
    bottom: 25,
    left: 55,
    right: 55,
    textAlign: "center",
    fontSize: 8,
    color: "#999",
  },
})

function formatLine(line: string, index: number) {
  const trimmed = line.trim()

  if (!trimmed) {
    return <View key={index} style={{ height: 6 }} />
  }

  // Main numbered sections
  const sectionMatch = trimmed.match(/^(\d+)\.\s+(.+)$/)

  if (sectionMatch) {
    return (
      <View key={index} style={styles.section}>
        <Text style={styles.sectionTitle}>
          {sectionMatch[1]}. {sectionMatch[2]}
        </Text>
      </View>
    )
  }

  // Bullet points
  if (trimmed.startsWith("- ")) {
    return (
      <Text key={index} style={styles.bullet}>
        • {trimmed.substring(2)}
      </Text>
    )
  }

  // Lesson headings
  if (/^Lesson \d+:/i.test(trimmed)) {
    return (
      <View key={index} style={styles.lesson}>
        <Text style={styles.lessonTitle}>{trimmed}</Text>
      </View>
    )
  }

  return (
    <Text key={index} style={styles.paragraph}>
      {trimmed}
    </Text>
  )
}

export function CurriculumPDF({
  name,
  curriculum,
}: {
  name: string
  curriculum: string
}) {
  const lines = curriculum.split("\n")

  return (
    <Document
      title={name}
      author="Create-a-Curriculum"
      subject="Curriculum"
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.subtitle}>
          Curriculum Guide
        </Text>

        <View style={styles.divider} />

        {lines.map((line, index) => formatLine(line, index))}

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}

export default function CurriculumPDFDownload({
  name,
  curriculum,
}: {
  name: string
  curriculum: string
}) {
  const fileName =
    `${name.replace(/[^a-z0-9]/gi, "-").toLowerCase()}.pdf`

  return (
    <PDFDownloadLink
      document={
        <CurriculumPDF
          name={name}
          curriculum={curriculum}
        />
      }
      fileName={fileName}
    >
      {({ loading }) =>
        loading ? "Creating PDF..." : "Export PDF"
      }
    </PDFDownloadLink>
  )
}