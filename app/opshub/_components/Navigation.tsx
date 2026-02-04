"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navigation } from "../content"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200" : "bg-white/80 backdrop-blur-sm border-gray-100",
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo + Product Label */}
        <div className="flex items-center gap-3">
          <a href="https://achra.com" className="flex items-center">
            <Image src="/brand/achra-logo.png" alt="Achra" width={120} height={32} className="h-7 w-auto" priority />
          </a>
          <span className="hidden text-sm font-medium text-gray-500 sm:inline">Operational Hub</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}

          {/* Primary CTA */}
          <Button
            size="sm"
            asChild
            className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white focus-visible:ring-[var(--achra)]/30"
          >
            <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>
        </div>

        {/* Mobile: CTA + Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            size="sm"
            asChild
            className="bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white focus-visible:ring-[var(--achra)]/30"
          >
            <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>
          <button
            type="button"
            className="p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navigation.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
