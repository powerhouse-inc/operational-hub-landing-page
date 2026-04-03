"use client"

import { Clock, MessageCircle, CheckCircle2, Mail } from "lucide-react"
import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { SharedHeader } from "../_components/SharedHeader"
import { SharedFooter } from "../_components/SharedFooter"

// Note: metadata is in layout.tsx or needs a separate server component wrapper
// For now, the root layout metadata applies

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"})
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#7A3AFF"}},"hideEventTypeDetails":false,"layout":"month_view"})

      // Track booking completion in Plausible + Google Ads
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          console.log("[OH] Cal.com bookingSuccessful fired")
          // @ts-expect-error plausible is loaded globally
          if (typeof window.plausible !== 'undefined') {
            // @ts-expect-error plausible is loaded globally
            window.plausible('Call Booked')
            console.log("[OH] Plausible 'Call Booked' event sent")
          }
          // @ts-expect-error gtag is loaded globally
          if (typeof window.gtag !== 'undefined') {
            // @ts-expect-error gtag is loaded globally
            window.gtag('event', 'conversion', { send_to: 'AW-17947446809/yA5jCPXv7vYbEJmcge5C', value: 1.0, currency: 'USD' })
            console.log("[OH] Google Ads conversion event sent")
          }
        }
      })
    })()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <SharedHeader currentPage="contact" />

      {/* Main Content */}
      <section className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left Column - Info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Let's talk
            </h1>
            <p className="text-gray-600 mb-8">
              Book a 30-minute intro call to discuss your team's needs and see if Operational Hub is a good fit.
            </p>

            {/* What to expect */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2 text-gray-900">
                <MessageCircle className="w-5 h-5 text-[rgb(122,58,255)]" />
                What to expect
              </h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>We'll learn about your team and current setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Discuss your operational pain points</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Determine if we're a good fit for each other</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Answer any questions you have</span>
                </li>
              </ul>
            </div>

            {/* Call details */}
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
              <Clock className="w-4 h-4" />
              <span>30 minutes</span>
              <span className="text-gray-300">•</span>
              <span>Video call</span>
              <span className="text-gray-300">•</span>
              <span>No commitment</span>
            </div>

            {/* Alternative contact */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 mb-3">Prefer email?</p>
              <a
                href="mailto:hello@operationalhub.io"
                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@operationalhub.io
              </a>
            </div>
          </div>

          {/* Right Column - Cal Embed */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden min-h-[650px]">
              <Cal
                namespace="30min"
                calLink="layer-zero-b9nh0v/30min"
                style={{ width: "100%", height: "100%", minHeight: "650px" }}
                config={{ layout: "month_view", theme: "light" }}
              />
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
