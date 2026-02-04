"use client"

import { useEffect, useState } from "react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

// Match rehype-slug's ID generation
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Parse headings from markdown content (## headings only)
    const headingRegex = /^##\s+(.+)$/gm
    const matches: TOCItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      // Clean the text: remove markdown formatting
      const text = match[1]
        .replace(/\*\*/g, "") // Remove bold
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links, keep text
        .trim()

      const id = slugify(text)
      matches.push({ id, text, level: 2 })
    }

    setHeadings(matches)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-80px 0px -80% 0px" }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <nav className="hidden xl:block sticky top-24 w-64 shrink-0 self-start">
      <p className="text-sm font-semibold text-gray-900 mb-3">On this page</p>
      <ul className="space-y-2 text-sm border-l border-gray-200">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(heading.id)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                  setActiveId(heading.id)
                }
              }}
              className={`block pl-4 py-1 -ml-px border-l-2 transition-colors ${
                activeId === heading.id
                  ? "border-[var(--achra)] text-[var(--achra)] font-medium"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
