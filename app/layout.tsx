import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://operationalhub.io'),
  title: {
    default: 'Operational Hub - Less Admin. More Building.',
    template: '%s | Operational Hub',
  },
  description: 'A turnkey back office for global teams. Invoicing, payouts, compliance, and reporting handled by an operator team, plus a Swiss legal entity for contracts and member privacy.',
  keywords: ['back office', 'operations', 'Swiss entity', 'invoicing', 'payroll', 'compliance', 'global teams', 'crypto operations', 'open source', 'DAO'],
  authors: [{ name: 'Achra' }],
  creator: 'Achra',
  verification: {
    google: 'ptTmtNwyHPSLXQUhGmibYV8NArB45J13WIqy5UuaufM',
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Operational Hub',
    title: 'Operational Hub - Less Admin. More Building.',
    description: 'A turnkey back office for global teams. Invoicing, payouts, compliance, and reporting handled by an operator team, plus a Swiss legal entity.',
    images: [{ url: '/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operational Hub - Less Admin. More Building.',
    description: 'A turnkey back office for global teams. Invoicing, payouts, compliance, and reporting handled by an operator team.',
    images: ['/og-default.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Privacy-friendly analytics by Plausible */}
        <Script
          src="https://plausible.io/js/pa-G6H4fwZDfGfDO42KNYg-t.js"
          strategy="beforeInteractive"
        />
        <Script id="plausible-init" strategy="beforeInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        {/* Tidio Chat Widget */}
        <Script
          src="//code.tidio.co/ancmxjjdvucrx5im4lufpphaiipclvf2.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
