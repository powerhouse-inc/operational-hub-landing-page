import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import Image from "next/image"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import { SharedHeader } from "@/app/_components/SharedHeader"
import { SharedFooter } from "@/app/_components/SharedFooter"

export const metadata: Metadata = {
  title: "Blog | Operational Hub",
  description: "Updates, insights, and resources for global teams from the Operational Hub.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SharedHeader currentPage="blog" />

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Updates, insights, and resources for global teams.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--achra)]/30"
              >
                <Link href={`/blog/${post.slug}`} className="block space-y-4">
                  {post.image && (
                    <div className="overflow-hidden rounded-lg -mx-6 -mt-6 mb-2">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={630}
                        className="w-full object-cover"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[var(--achra)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{post.description}</p>
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
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--achra)]">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <SharedFooter />
    </div>
  )
}
