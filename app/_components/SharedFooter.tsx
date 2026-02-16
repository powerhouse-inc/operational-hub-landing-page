import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "What's Included", href: "/included" },
      { label: "Swiss Entity", href: "/swiss-entity" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Achra", href: "https://achra.com" },
      { label: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
    ],
  },
  ecosystem: {
    title: "Ecosystem",
    links: [
      { label: "Powerhouse", href: "https://www.powerhouse.inc" },
      { label: "Vetra", href: "https://www.vetra.io" },
    ],
  },
  community: {
    title: "Community",
    links: [
      { label: "X / Twitter", href: "https://x.com/AchraMarket" },
      { label: "Discord", href: "https://discord.gg/pwQJwgaQKd" },
    ],
  },
}

export function SharedFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      {/* Newsletter signup */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center">
          <Script
            async
            src="https://subscribe-forms.beehiiv.com/embed.js"
            strategy="afterInteractive"
          />
          <iframe
            src="https://subscribe-forms.beehiiv.com/5f5b3bd6-786e-4500-96dd-c982567c5dfe"
            className="beehiiv-embed"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{ width: "100%", maxWidth: "480px", height: "200px", background: "transparent" }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-10">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/opshub">
              <Image
                src="/brand/achra-logo.png"
                alt="Achra"
                width={100}
                height={28}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Less admin. More building.
            </p>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-[var(--achra)] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-[var(--achra)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Achra. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center md:text-right max-w-md">
            Informational only. Not legal, financial, or tax advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
