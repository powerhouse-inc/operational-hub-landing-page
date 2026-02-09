import type { Metadata } from "next"
import Image from "next/image"
import { Check, X, ArrowRight, Shield, Globe, Building2, Users, Lock, Scale } from "lucide-react"
import { SharedHeader } from "../_components/SharedHeader"
import { SharedFooter } from "../_components/SharedFooter"
import { ScrollReveal } from "../opshub/_components/ScrollReveal"

export const metadata: Metadata = {
  title: "Swiss Entity | Operational Hub",
  description: "A Swiss association gives your team a legal home with privacy, flexibility, and a framework built for international builder teams. Hold assets, sign contracts, and operate globally.",
}

export default function SwissEntityPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SharedHeader currentPage="swiss-entity" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-gray-500">Entity Structure</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your entity.<br />Swiss precision.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A Swiss association gives your team a real legal home with privacy, flexibility, and a framework built for international builder teams.
          </p>
        </ScrollReveal>
      </section>

      {/* What is it */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4">What is a Swiss Association?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-gray-500 mb-6">
              A Swiss association (Verein) is a legally recognized entity under Swiss law. It can own assets, enter contracts, and act in its own name, giving your team a proper legal structure without the complexity of a corporation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-500">
              Unlike corporations, associations are formed through member agreements rather than public filings. This means your team maintains control and privacy while gaining the legal protections of a formal entity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Switzerland */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-10 text-center">Why Switzerland?</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgba(122,58,255,0.1)] rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Privacy by default</h3>
                <p className="text-sm text-gray-500">
                  Member identities are not publicly disclosed. Registration in the commercial register is optional for non-profit associations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgba(122,58,255,0.1)] rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Clear legal framework</h3>
                <p className="text-sm text-gray-500">
                  Association law is flexible and well-defined. Regulatory treatment of blockchain-related activities is established.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgba(122,58,255,0.1)] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Limited liability</h3>
                <p className="text-sm text-gray-500">
                  Members are generally not personally liable for the association's obligations. Your personal assets stay protected.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgba(122,58,255,0.1)] rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">International by design</h3>
                <p className="text-sm text-gray-500">
                  Members and decision-makers don't need to be in Switzerland. Meetings and votes can be held remotely.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgba(122,58,255,0.1)] rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Tax efficiency</h3>
                <p className="text-sm text-gray-500">
                  Associations are taxed under a cost-based methodology ("Cost +5%" model). Combined corporate tax rate in Zug is ~9-11%.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <div className="w-10 h-10 bg-[rgba(122,58,255,0.1)] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-[rgb(122,58,255)]" />
                </div>
                <h3 className="font-semibold mb-2">Democratic governance</h3>
                <p className="text-sm text-gray-500">
                  Decision-making authority rests with members, typically following one-member-one-vote. No shareholders or equity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What you can / can't do */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-10 text-center">What a Swiss Association can and can't do</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="slide-right">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <h3 className="font-semibold mb-4 text-[rgb(122,58,255)] flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Well suited for
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Receiving income as grants or donations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Paying and hiring contributors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Holding assets, treasury, and IP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Signing contracts and service agreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Providing liability protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>International teams (founding team outside Switzerland)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Member privacy (no public registry required)</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all h-full">
                <h3 className="font-semibold mb-4 text-gray-500 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Not designed for
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Paying dividends or distributing profits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Issuing shares or security tokens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Receiving external equity investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Primary commercial activity or IP licensing</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-400">
                    Need commercial capabilities? We're launching a commercial entity option soon.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 text-center">Who is this for?</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0} animation="scale">
              <div className="text-center">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold mb-2">Builder teams</h3>
                <p className="text-sm text-gray-500">
                  Contributor teams and DevCos working in decentralized ecosystems who need a legal home.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} animation="scale">
              <div className="text-center">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold mb-2">Open source projects</h3>
                <p className="text-sm text-gray-500">
                  Projects that receive grants or donations and need to coordinate contributors across jurisdictions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} animation="scale">
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">Privacy-conscious teams</h3>
                <p className="text-sm text-gray-500">
                  Organizations that value member privacy and don't want public disclosure of participants.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it compares */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 text-center">How it compares</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-4 font-semibold"></th>
                    <th className="text-center py-4 px-4 font-semibold text-[rgb(122,58,255)]">Swiss Association</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">Fiscal Host</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">US LLC</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">You own the entity</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Member privacy</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-gray-400">Varies</span></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">International team</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-gray-400">Complex</span></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Limited liability</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4">Crypto-native banking</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-gray-400">Varies</span></td>
                    <td className="text-center py-4 px-4"><span className="text-gray-400">Difficult</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4">Clear regulatory framework</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-gray-400">Varies</span></td>
                    <td className="text-center py-4 px-4"><span className="text-gray-400">Evolving</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MME Legal Partner */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[rgba(122,58,255,0.1)] border border-[rgba(122,58,255,0.2)] rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs text-[rgb(122,58,255)]">Legal Partner</span>
              </div>
              <h2 className="text-2xl font-bold">Your legal setup, handled by experts</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="flex flex-col items-center md:items-start gap-3">
                  <Image
                    src="/MME_logo.jpg"
                    alt="MME Legal | Tax | Compliance"
                    width={160}
                    height={60}
                    className="object-contain"
                  />
                  <p className="text-xs text-gray-400 text-center md:text-left">Zurich &middot; Zug</p>
                </div>

                <div>
                  <p className="text-gray-600 mb-6">
                    Entity formation is handled by MME, a leading Swiss law firm specializing in legal, tax, and compliance for digital and blockchain-native organizations. MME has advised on some of the most recognized projects in the ecosystem.
                  </p>

                  <h3 className="font-semibold text-sm text-gray-900 mb-3">What&apos;s included in formation</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Founding meeting with MME counsel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Articles of association &amp; governing documents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Formation certificate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Workshop &amp; Q&amp;A session on structure and governance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[rgb(122,58,255)] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Regulatory assessment for your specific use case</span>
                    </li>
                  </ul>

                  <p className="text-sm text-gray-400">
                    MME counsel is included in your one-time setup fee.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[rgba(122,58,255,0.1)] border border-[rgba(122,58,255,0.2)] rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs text-[rgb(122,58,255)]">Coming Soon</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">More entity types on the way</h2>
            <p className="text-gray-500 mb-8">
              Need to issue equity, distribute profits, or run commercial operations? We're building additional entity structures to support the full range of builder needs.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            <ScrollReveal delay={0}>
              <div className="bg-white border border-gray-200 rounded-xl p-4 h-full">
                <h3 className="font-semibold text-sm mb-1">Commercial Hub</h3>
                <p className="text-xs text-gray-400">For teams that monetize IP or need equity capabilities</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white border border-gray-200 rounded-xl p-4 h-full">
                <h3 className="font-semibold text-sm mb-1">Revenue Hub (OpCo)</h3>
                <p className="text-xs text-gray-400">Separate entity for commercial activities</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white border border-gray-200 rounded-xl p-4 h-full">
                <h3 className="font-semibold text-sm mb-1">IP SPV</h3>
                <p className="text-xs text-gray-400">Special purpose vehicle for holding and licensing IP</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-10 text-center">Frequently asked questions</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Can companies join, or only individuals?</h3>
                <p className="text-gray-500 text-sm">
                  Both. Individuals can join in their personal capacity, and legal entities (LLCs, corporations, foundations) can also join as members.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Will joining affect my existing company?</h3>
                <p className="text-gray-500 text-sm">
                  No. Participation through an existing company doesn't change ownership, tax status, or create an employment relationship. The association acts as a contractual counterparty.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Do members need to be in Switzerland?</h3>
                <p className="text-gray-500 text-sm">
                  No. Swiss law doesn't require members or decision-makers to be physically present in Switzerland. Meetings and votes can be held remotely.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Is a Swiss bank account required?</h3>
                <p className="text-gray-500 text-sm">
                  Not legally required. Many associations primarily use multisig wallets and crypto-native infrastructure. A bank account can be added when fiat transactions are needed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">How are Swiss associations taxed?</h3>
                <p className="text-gray-500 text-sm">
                  Associations are subject to Swiss corporate income tax, often assessed using a cost-based approach ("Cost +5%" model). In Canton Zug, the combined rate is approximately 9-11%.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold mb-2">Does membership create personal tax obligations?</h3>
                <p className="text-gray-500 text-sm">
                  Under Swiss law, membership alone doesn't create personal tax liability. Tax obligations depend on your local law and whether you receive income from the association.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="pb-6">
                <h3 className="font-semibold mb-2">What about U.S. tax considerations?</h3>
                <p className="text-gray-500 text-sm">
                  U.S. persons may need to assess potential reporting requirements depending on membership composition and voting rights. We recommend consulting a U.S. tax advisor.
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
            <h2 className="text-3xl font-bold mb-4">Ready to set up your entity?</h2>
            <p className="text-gray-500 mb-8">
              Let's discuss whether a Swiss association is right for your team.
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
          </ScrollReveal>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
