import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Portfólio | WebZaTýždeň',
  description: 'Pozrite si naše doterajšie projekty a weby, ktoré sme vytvorili pre našich klientov.',
}

const projects = [
  {
    title: "Turnusly.sk",
    desc: "Web pre rezerváciu detských turnusov a táborov s prehľadným používateľským rozhraním.",
    image: "/images/portfolio/turnuslywebsite.webp",
    url: "https://turnusly.sk/",
  },
  {
    title: "Trattoria Marano",
    desc: "Elegantný web pre talianskú reštauráciu v Mníchove s atmosférickým dizajnom.",
    image: "/images/portfolio/trattoria-marano.webp",
    url: "https://www.trattoria-marano.de/",
  },
  {
    title: "Webinár Olinka Kancírová",
    desc: "Landing page pre webinár s integrovaným registračným systémom.",
    image: "/images/portfolio/olinkakancirova.webp",
    url: "https://webinar.olinkakancirova.sk/",
  },
  {
    title: "Tuning PO",
    desc: "Moderná prezentácia pre tuningové štúdio v Prešove.",
    image: "/images/portfolio/tuningpo.webp",
    url: "https://tuningpo.webzatyzden.sk/",
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-accent/20">
              Portfólio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Naše doterajšie projekty
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Pozrite sa na weby, ktoré sme vytvorili pre našich klientov. Každý je unikátny a šitý na mieru.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot webu ${project.title}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-gray-900">{project.title}</h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              Chcem podobný web <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
