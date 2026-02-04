import type { Metadata } from "next"
import { ArrowRight, Calculator, FileText, CreditCard, Users, BarChart3, Shield, Clock, CheckCircle2 } from "lucide-react"
import { SharedHeader } from "../_components/SharedHeader"
import { SharedFooter } from "../_components/SharedFooter"

export const metadata: Metadata = {
  title: "What's Included | Operational Hub",
  description: "Full-service back office operations: accounting, payroll, compliance, invoicing, and admin handled by an operator team so you can focus on building.",
}

export default function WhatsIncludedPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SharedHeader currentPage="included" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
          <span className="text-xs text-gray-600">Full-Service Operations</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Your back office,<br />handled.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          We don't just give you tools. We do the work. Accounting, payroll, compliance, and admin, all taken care of so you can focus on building.
        </p>
      </section>

      {/* Key Difference */}
      <section className="border-t border-gray-200 bg-[rgb(122,58,255)]/5">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <h2 className="text-xl font-bold mb-3">This isn't another SaaS tool</h2>
              <p className="text-gray-600">
                Most "operations platforms" hand you software and wish you luck. You still need to do your own accounting, figure out tax filing, and manage compliance yourself.
              </p>
            </div>
            <div className="w-px h-16 bg-gray-300 hidden md:block" />
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <h2 className="text-xl font-bold mb-3">We actually do the work</h2>
              <p className="text-gray-600">
                With Operational Hub, we handle the operational load. Your books get closed, taxes get filed, contributors get paid. All without you lifting a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">What's included in every plan</h2>

          {/* Accounting & Finance */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[rgb(122,58,255)]" />
              </div>
              <h3 className="text-xl font-semibold">Accounting & Finance</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Monthly accounting & close</h4>
                <p className="text-sm text-gray-600">
                  We categorize transactions, reconcile accounts, and keep your books accurate and up-to-date every month.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Expense tracking</h4>
                <p className="text-sm text-gray-600">
                  Submit expenses, attach receipts, and we handle the rest: categorization, approval workflows, and reimbursement.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Financial reporting</h4>
                <p className="text-sm text-gray-600">
                  Access real-time dashboards and reports. Know exactly where your money is going without digging through spreadsheets.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Annual tax filing</h4>
                <p className="text-sm text-gray-600">
                  We prepare and file your Swiss tax returns annually. No scrambling at year-end, no surprises.
                </p>
              </div>
            </div>
          </div>

          {/* Payroll & Payments */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[rgb(122,58,255)]" />
              </div>
              <h3 className="text-xl font-semibold">Payroll & Payments</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Invoice management</h4>
                <p className="text-sm text-gray-600">
                  Contributors submit invoices, we verify and process them through approval workflows, ready for payout.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Multi-currency payouts</h4>
                <p className="text-sm text-gray-600">
                  Pay contributors in fiat (USD, EUR, CHF, GBP) or stablecoins (USDC, DAI). We handle the conversions.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Approval workflows</h4>
                <p className="text-sm text-gray-600">
                  You approve payments, we execute them. Clear separation between authorization and operations.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Vendor payments</h4>
                <p className="text-sm text-gray-600">
                  Pay service providers, tools, and vendors. We manage recurring payments and keep everything documented.
                </p>
              </div>
            </div>
          </div>

          {/* Contributor Management */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-[rgb(122,58,255)]" />
              </div>
              <h3 className="text-xl font-semibold">Contributor Management</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Onboarding</h4>
                <p className="text-sm text-gray-600">
                  New contributors get set up properly: KYC, payment details, tax documentation collected and organized.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Contributor agreements</h4>
                <p className="text-sm text-gray-600">
                  We provide battle-tested agreement templates, customized for your team and reviewed by legal counsel.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Offboarding</h4>
                <p className="text-sm text-gray-600">
                  When contributors leave, we handle the paperwork: final payments, agreement termination, clean records.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Contributor management</h4>
                <p className="text-sm text-gray-600">
                  Track active contributors, contract terms, payment history, and documentation in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance & Admin */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgb(122,58,255)]/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[rgb(122,58,255)]" />
              </div>
              <h3 className="text-xl font-semibold">Compliance & Administration</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Registered address</h4>
                <p className="text-sm text-gray-600">
                  Official Swiss address for your entity. Mail handling and forwarding included.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Regulatory filings</h4>
                <p className="text-sm text-gray-600">
                  We track deadlines and handle required filings so you never miss a compliance date.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Document management</h4>
                <p className="text-sm text-gray-600">
                  Contracts, agreements, receipts, filings: organized and accessible when you need them.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                <h4 className="font-medium mb-2">Legal partner access</h4>
                <p className="text-sm text-gray-600">
                  Need legal advice? We connect you with vetted Swiss legal counsel who understand your structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Control */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">What you control vs. what we handle</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[rgb(122,58,255)] rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">You</span>
                </div>
                <h3 className="font-semibold">You maintain authority</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Ultimate decision-making on all matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Treasury access and signing authority</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Approve payments before execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Full visibility into all operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                  <span>Membership and governance decisions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">Us</span>
                </div>
                <h3 className="font-semibold">We handle operations</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Process invoices and prepare payouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Maintain books and financial records</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Prepare and file tax returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Manage contributor onboarding/offboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Handle compliance and administrative tasks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-10 text-center">How it works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[rgb(122,58,255)] rounded-full flex items-center justify-center font-bold text-white">1</div>
                <div className="w-px h-full bg-gray-300 mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="font-semibold mb-2">Setup (Weeks 1-4)</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Swiss association formation with licensed counsel, registered address setup, legal document templates, and VAT documentation.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>4-6 weeks typical</span>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[rgb(122,58,255)] rounded-full flex items-center justify-center font-bold text-white">2</div>
                <div className="w-px h-full bg-gray-300 mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="font-semibold mb-2">Onboarding</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We onboard your contributors by collecting documentation, setting up payment details, and executing agreements. You're operational.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[rgb(122,58,255)] rounded-full flex items-center justify-center font-bold text-white">3</div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Ongoing operations</h3>
                <p className="text-gray-600 text-sm">
                  Each month, we process invoices, run payroll, close books, and handle admin. You approve payments and focus on building. We handle the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to offload your ops?</h2>
          <p className="text-gray-600 mb-8">
            Let's talk about what your team needs and how we can help.
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
              href="/pricing"
              className="border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-3 rounded-xl font-medium transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
