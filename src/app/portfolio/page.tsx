import Link from 'next/link'
import { ExternalLink, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Portfólio",
  description: "Ukážky našej práce. Pozrite si weby, ktoré sme vytvorili za 7 dní."
}

export default function PortfolioPage() {
  const projects = [
    { title: "E-shop s kávou", category: "E-commerce", imageUrl: "https://placehold.co/800x600/e2e8f0/475569?text=Kava+Shop" },
    { title: "Právnická Kancelária", category: "Služby", imageUrl: "https://placehold.co/800x600/e2e8f0/475569?text=Pravnici" },
    { title: "Architektonické štúdio", category: "Portfólio", imageUrl: "https://placehold.co/800x600/e2e8f0/475569?text=Architekt" },
    { title: "Stavebná firma", category: "B2B Web", imageUrl: "https://placehold.co/800x600/e2e8f0/475569?text=Stavby" },
    { title: "Fitness tréner", category: "Osobný Brand", imageUrl: "https://placehold.co/800x600/e2e8f0/475569?text=Fitness" },
    { title: "Súkromná klinika", category: "Zdravotníctvo", imageUrl: "https://placehold.co/800x600/e2e8f0/475569?text=Klinika" },
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-primary/20">
            Naše projekty
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Naša práca hovorí za nás
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Prezrite si výber z projektov, ktoré sme navrhli a spustili v rekordnom čase 7 dní.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden border-2 border-gray-200 shadow-card hover:shadow-card-hover transition-all bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-primary uppercase mb-1">{project.category}</p>
                  <h3 className="font-heading text-lg font-bold text-gray-900 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Chcete vidieť svoj projekt v našom portfóliu?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Začnime plánovať váš nový web. Prvá verzia už do 24 hodín.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Začnime plánovať <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
