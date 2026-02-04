import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog"
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { SharedHeader } from "@/app/_components/SharedHeader"
import { SharedFooter } from "@/app/_components/SharedFooter"
import { TableOfContents } from "./TableOfContents"

const SITE_URL = "https://operationalhub.io"
const DEFAULT_OG_IMAGE = "/og-default.png"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  const ogImage = post.image || DEFAULT_OG_IMAGE

  return {
    title: `${post.title} | Operational Hub Blog`,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const ogImage = post.image || DEFAULT_OG_IMAGE

  // Get related posts (other posts, excluding current)
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${ogImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Achra",
      url: "https://achra.com",
    },
  }

  // Split content to insert CTA before FAQ
  const faqIndex = post.content.indexOf("## Frequently Asked Questions")
  const mainContent = faqIndex > -1 ? post.content.slice(0, faqIndex) : post.content
  const faqContent = faqIndex > -1 ? post.content.slice(faqIndex) : null

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SharedHeader currentPage="blog" />

      {/* Back to Blog link */}
      <div className="container mx-auto max-w-6xl px-4 pt-6 md:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-[var(--achra)] hover:text-[var(--achra-hover)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Main content with optional TOC sidebar */}
      <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex gap-12">
          {/* Article */}
          <article className="flex-1 max-w-3xl">
            {/* Header Image */}
            {post.image && (
              <div className="mb-8 overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full object-cover"
                  priority
                />
              </div>
            )}

            {/* Title & Meta */}
            <header className="mb-8 space-y-4">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
            </header>

            {/* Main Content */}
            <div className="prose max-w-none">
              <MDXRemote source={mainContent} />
            </div>

            {/* CTA Box before FAQ */}
            {faqContent && (
              <div className="my-12 rounded-xl bg-gradient-to-br from-[var(--achra)]/5 to-[var(--achra)]/10 border border-[var(--achra)]/20 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ready to get your operations sorted?
                </h3>
                <p className="text-gray-600 mb-6">
                  Operational Hub handles invoicing, payouts, accounting, and compliance for builder teams. Focus on shipping while we handle the back office.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[var(--achra)] hover:bg-[var(--achra-hover)] text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg font-medium border border-gray-200 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            )}

            {/* FAQ Section with better styling */}
            {faqContent && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="prose max-w-none prose-h2:text-2xl prose-h2:mb-6 prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-900 prose-p:text-gray-600">
                  <MDXRemote source={faqContent} />
                </div>
              </div>
            )}
          </article>

          {/* Table of Contents - wide screens only */}
          <TableOfContents content={post.content} />
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50/50">
          <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More from the blog</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--achra)]/30"
                >
                  {relatedPost.image && (
                    <div className="overflow-hidden rounded-lg mb-4 -mx-6 -mt-6">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={600}
                        height={315}
                        className="w-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--achra)] transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {relatedPost.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--achra)]">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SharedFooter />
    </div>
  )
}
