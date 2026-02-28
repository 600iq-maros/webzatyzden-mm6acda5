import Link from 'next/link'
import posts from "@/data/posts.json"

export const metadata = {
  title: "Blog",
  description: "Tipy a triky pre lepší web, SEO a online marketing."
}

export default function BlogPage() {
  const publishedPosts = posts.filter(post => post.status === "published")
  publishedPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Náš Blog
          </h1>
          <p className="text-lg text-gray-600">
            Najnovšie články zo sveta tvorby webov, SEO optimalizácie a online marketingu. Čítajte a inšpirujte sa.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <article key={post.id} className="bg-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.featuredImage || "https://placehold.co/800x400/e2e8f0/64748b?text=Blog"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.tags[0] || "Novinka"}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString('sk-SK', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-heading text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-primary font-medium text-sm hover:underline mt-auto"
                  >
                    Čítať viac →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {publishedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Zatiaľ neboli publikované žiadne články.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}