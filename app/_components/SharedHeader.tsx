"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SharedHeaderProps {
  currentPage?: "included" | "swiss-entity" | "pricing" | "contact" | "blog"
}

export function SharedHeader({ currentPage }: SharedHeaderProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { label: "What's Included", href: "/included", key: "included" },
    { label: "Swiss Entity", href: "/swiss-entity", key: "swiss-entity" },
    { label: "Pricing", href: "/pricing", key: "pricing" },
    { label: "Blog", href: "/blog", key: "blog" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/achra-logo.png"
              alt="Achra"
              width={120}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </Link>
          <span className="hidden text-sm font-medium text-gray-500 sm:inline">Operational Hub</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                currentPage === link.key || pathname === link.href
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[rgb(122,58,255)] hover:bg-[rgb(100,40,220)] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block text-base font-medium transition-colors py-2",
                  currentPage === link.key || pathname === link.href
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[rgb(122,58,255)] hover:bg-[rgb(100,40,220)] text-white px-4 py-3 rounded-lg text-base font-medium transition-colors text-center mt-4"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
