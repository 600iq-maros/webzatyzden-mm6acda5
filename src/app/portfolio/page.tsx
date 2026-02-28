import Link from 'next/link'
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Portfólio",
  description: "Ukážky našej práce. Pozrite si weby, ktoré sme vytvorili za 7 dní."
}

export default function PortfolioPage() {
  const projects = [
    { title: "E-shop s kávou", category: "E-commerce", imageUrl: "https://placehold.co/800x600/e2e8f0/64748b?text=Kava+Shop" },
    { title: "Právnická Kancelária", category: "Služby", imageUrl: "https://placehold.co/800x600/e2e8f0/64748b?text=Pravnici" },
    { title: "Architektonické štúdio", category: "Portfólio", imageUrl: "https://placehold.co/800x600/e2e8f0/64748b?text=Architekt" },
    { title: "Stavebná firma", category: "B2B Web", imageUrl: "https://placehold.co/800x600/e2e8f0/64748b?text=Stavby" },
    { title: "Fitness tréner", category: "Osobný Brand", imageUrl: "https://placehold.co/800x600/e2e8f0/64748b?text=Fitness" },
    { title: "Súkromná klinika", category: "Zdravotníctvo", imageUrl: "https://placehold.co/800x600/e2e8f0/64748b?text=Klinika" },
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Naša práca hovorí za nás
          </h1>
          <p className="text-lg text-gray-600">
            Prezrite si výber z projektov, ktoré sme pre našich klientov navrhli a spustili v rekordnom čase 7 dní.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 relative bg-surface block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                  <h3 className="font-heading text-xl font-bold text-gray-900 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Chcete vidieť svoj projekt v našom portfóliu?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Začnime plánovať
          </Link>
        </div>
      </section>
    </div>
  )
}