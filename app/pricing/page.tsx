import type { Metadata } from "next"
import { Check, ArrowRight, Users, Building, Briefcase, FileText, CreditCard, Shield, BarChart3, Scale, MessageCircle } from "lucide-react"
import { SharedHeader } from "../_components/SharedHeader"
import { SharedFooter } from "../_components/SharedFooter"
import { ScrollReveal } from "../opshub/_components/ScrollReveal"

export const metadata: Metadata = {
  title: "Pricing | Operational Hub",
  description: "Transparent pricing for your back office operations. Swiss association formation, accounting, payouts, and compliance with no hidden fees. Plans starting at $250/contributor/month.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SharedHeader currentPage="pricing" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent pricing.<br />No surprises.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your entity, your control. We handle the legal setup, accounting, payroll, and compliance so you can focus on building.
          </p>
        </ScrollReveal>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <ScrollReveal delay={0}>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg hover:border-gray-300 transition-all h-full">
              <div className="mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <p className="text-gray-500 text-sm">
                  For grant recipients and low-volume teams
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$750</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">+ per-invoice fee</p>
                <p className="text-gray-400 text-xs mt-1">+ one-time setup fee</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Swiss association formation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Registered address (Zug)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Annual tax filing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Monthly accounting & close</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Invoice management</span>
                </li>
              </ul>

              <a
                href="/contact"
                className="block w-full text-center border border-gray-300 hover:border-gray-400 py-3 rounded-xl font-medium transition-colors text-gray-700 hover:text-gray-900"
              >
                Schedule a Call
              </a>
            </div>
          </ScrollReveal>

          {/* Standard - Featured */}
          <ScrollReveal delay={150} animation="scale">
            <div className="bg-white border-2 border-[rgb(122,58,255)] rounded-2xl p-6 flex flex-col relative shadow-md hover:shadow-xl transition-all h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(122,58,255)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>

              <div className="mb-6">
                <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Standard</h3>
                <p className="text-gray-500 text-sm">
                  For teams with regular contributors
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$1,250</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-[rgb(122,58,255)] text-sm mt-1 font-medium">+ $250/month per regular contributor</p>
                <p className="text-gray-400 text-xs mt-1">+ one-time setup fee</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Expense policies (role-based)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Contributor onboarding & operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Multi-currency payouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Dedicated ops support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Unlimited invoicing</span>
                </li>
              </ul>

              <a
                href="/contact"
                className="block w-full text-center bg-[rgb(122,58,255)] hover:bg-[rgb(100,40,220)] text-white py-3 rounded-xl font-medium transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </ScrollReveal>

          {/* Custom */}
          <ScrollReveal delay={300}>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg hover:border-gray-300 transition-all h-full">
              <div className="mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom</h3>
                <p className="text-gray-500 text-sm">
                  For complex or high-volume operations
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Tailored to your needs</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Everything in Standard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Multiple entities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Custom workflows & reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Admin portal</span>
                </li>
              </ul>

              <a
                href="/contact"
                className="block w-full text-center border border-gray-300 hover:border-gray-400 py-3 rounded-xl font-medium transition-colors text-gray-700 hover:text-gray-900"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Self-service note */}
        <ScrollReveal delay={400}>
          <p className="text-center text-gray-500 text-sm mt-8">
            Want to learn more? <a href="/included" className="text-[rgb(122,58,255)] hover:underline">See what's included</a> or <a href="/contact" className="text-[rgb(122,58,255)] hover:underline">schedule a call</a> to discuss your needs.
          </p>
        </ScrollReveal>
      </section>

      {/* Legal Package Callout */}
      <section className="bg-[rgb(122,58,255)]/5">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs text-[rgb(122,58,255)]">One-Time Setup</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">What&apos;s included in your setup fee</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Entity formation is handled by <a href="https://www.mme.ch/en/" target="_blank" rel="noopener noreferrer" className="text-[rgb(122,58,255)] hover:underline">MME</a>, a leading Swiss law firm specializing in digital and blockchain-native organizations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Founding meeting</h3>
                <p className="text-sm text-gray-600">
                  Formal constitution of your Swiss association with MME counsel, including review of structure, governance, and member rights.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Documents &amp; registration</h3>
                <p className="text-sm text-gray-600">
                  Articles of association, governing documents, formation certificate, and regulatory assessment for your specific use case.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Workshop &amp; Q&amp;A</h3>
                <p className="text-sm text-gray-600">
                  Dedicated session with MME to walk through your entity structure, answer questions, and align on governance and compliance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Tier Comparison */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4 text-center">What's included in each tier</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A detailed breakdown of what you get at each level.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-[rgb(122,58,255)]">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 text-gray-700">Swiss association formation</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">Registered address (Zug)</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Legal document templates</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">VAT documentation</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Annual tax filing</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">Invoice management</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Monthly accounting & close</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">Reimbursement management</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Monthly expense reports</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">Expense policies (role-based)</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Contributor onboarding & operations</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">Multi-currency payouts</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Dedicated ops support</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">Multiple entities</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Dedicated account manager</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 text-gray-700">Admin portal</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Custom workflows & reporting</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-[rgb(122,58,255)] mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4 text-center">Available add-ons</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Extend your plan with additional services as you grow.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-[rgb(122,58,255)]" />
                  </div>
                  <h3 className="font-semibold">Exchange account setup</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Setup of centralized exchange accounts (Kraken, Coinbase, Binance, and more).
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[rgb(122,58,255)]" />
                  </div>
                  <h3 className="font-semibold">AML monitoring & compliance reporting</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Regular compliance checks, wallet monitoring, and compliance reports.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-[rgb(122,58,255)]" />
                  </div>
                  <h3 className="font-semibold">Card & spend operations</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Corporate card management with spending controls and transaction monitoring.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-[rgb(122,58,255)]" />
                  </div>
                  <h3 className="font-semibold">Audit support</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Coordination of financial information to support external audits.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <p className="text-center text-gray-500 text-sm mt-8">
              Add-ons are available with any paid plan. <a href="/contact" className="text-[rgb(122,58,255)] hover:underline">Contact us</a> for details.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contributor Explainer */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 text-center">How per-contributor pricing works</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="slide-right">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-full">
                <h3 className="font-semibold mb-3 text-[rgb(122,58,255)]">What counts as a regular contributor</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Permanent, paid team members</li>
                  <li>Anyone with a contributor agreement</li>
                  <li>People who invoice monthly</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-full">
                <h3 className="font-semibold mb-3 text-gray-500">What doesn't count</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>One-time vendors or service providers</li>
                  <li>Unpaid contributors or advisors</li>
                  <li>Grant recipients you're funding</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <p className="text-center text-gray-500 text-sm mt-6">
              Add or remove contributors anytime. Billing adjusts automatically.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-10 text-center">Frequently asked questions</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Why is this more expensive than other payroll tools?</h3>
                <p className="text-gray-600 text-sm">
                  Most payroll tools give you software. You still do the accounting, tax filing, and compliance yourself. We do the actual work. Your books are closed, taxes are filed, and payroll runs without you lifting a finger.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Do I still need to hire an accountant?</h3>
                <p className="text-gray-600 text-sm">
                  No. Accounting is included in Standard. Our team handles bookkeeping, reconciliation, and reporting. Starter includes basic bookkeeping with annual filings.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">What about legal support?</h3>
                <p className="text-gray-600 text-sm">
                  Entity formation is handled by <a href="https://www.mme.ch/en/" target="_blank" rel="noopener noreferrer" className="text-[rgb(122,58,255)] hover:underline">MME</a>, a leading Swiss law firm specializing in legal, tax, and compliance for digital organizations. MME counsel is included in your one-time setup fee. Additional legal work beyond formation is available through MME, billed separately.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">What's the difference between Starter and Standard?</h3>
                <p className="text-gray-600 text-sm">
                  Starter includes entity setup and annual filings, great for grant recipients with minimal monthly activity. Standard adds full monthly accounting, contributor operations, and ongoing support for teams with regular payroll.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Can I see everything that's happening?</h3>
                <p className="text-gray-600 text-sm">
                  Yes. You have full dashboard access to invoices, approvals, transactions, and reports. Ultimate authority always stays with you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="pb-6">
                <h3 className="font-semibold mb-2">What currencies do you support?</h3>
                <p className="text-gray-600 text-sm">
                  Fiat (USD, EUR, CHF, GBP) and stablecoins (USDC, DAI). We handle the conversions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-10 text-center">Why Operational Hub</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0} animation="scale">
              <div className="text-center">
                <div className="w-12 h-12 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">&#128273;</span>
                </div>
                <h3 className="font-semibold mb-2">You own it</h3>
                <p className="text-gray-600 text-sm">
                  Unlike fiscal hosts, this is your entity. Your name, your control, your treasury.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} animation="scale">
              <div className="text-center">
                <div className="w-12 h-12 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">&#9881;</span>
                </div>
                <h3 className="font-semibold mb-2">We operate it</h3>
                <p className="text-gray-600 text-sm">
                  Unlike DIY platforms, we don't hand you software and wish you luck. We do the work.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} animation="scale">
              <div className="text-center">
                <div className="w-12 h-12 bg-[rgb(122,58,255)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">&#128736;</span>
                </div>
                <h3 className="font-semibold mb-2">Transparent pricing</h3>
                <p className="text-gray-600 text-sm">
                  No hidden fees, no surprises. We believe in straightforward pricing you can trust.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl font-bold mb-4">Ready to stop doing ops as a side job?</h2>
            <p className="text-gray-600 mb-8">
              Not sure which plan fits? Let's figure it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[rgb(122,58,255)] hover:bg-[rgb(100,40,220)] text-white px-8 py-3 rounded-xl font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/included"
                className="border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-xl font-medium transition-colors text-gray-700"
              >
                See What's Included
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
