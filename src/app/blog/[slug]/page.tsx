import Link from 'next/link'
import { notFound } from "next/navigation"
import posts from "@/data/posts.json"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.featuredImage]
    }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post || post.status !== "published") {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.featuredImage,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.publishedAt,
    "description": post.excerpt
  }

  // Find related posts (just taking next 2 for simplicity)
  const otherPosts = posts.filter(p => p.slug !== post.slug && p.status === "published").slice(0, 2)

  return (
    <div className="flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Späť na blog
        </Link>

        <div className="mb-10 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Od: <strong className="text-gray-900">{post.author}</strong></span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('sk-SK', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-md">
          <img 
            src={post.featuredImage || "https://placehold.co/1200x500/e2e8f0/64748b?text=Blog"} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div 
          className="prose prose-lg prose-indigo max-w-none text-gray-600 prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {otherPosts.length > 0 && (
        <section className="bg-background border-t border-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">
              Mohlo by vás zaujímať
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={relatedPost.featuredImage || "https://placehold.co/800x400/e2e8f0/64748b"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}