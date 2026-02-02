import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import { SharedFooter } from "@/app/_components/SharedFooter"

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

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto max-w-3xl px-4 py-6 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[var(--achra)] hover:text-[var(--achra-hover)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
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

        {/* Content */}
        <div className="prose max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <SharedFooter />
    </div>
  )
}
