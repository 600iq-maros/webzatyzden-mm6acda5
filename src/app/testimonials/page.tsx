import Link from 'next/link'
import { Star, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Referencie",
  description: "Prečítajte si skúsenosti našich klientov s projektom WebZaTyzden."
}

export default function TestimonialsPage() {
  const testimonials = [
    { name: "Peter Juhás", role: "Majiteľ, StavTech s.r.o.", quote: "Neveril som, že do týždňa môže vzniknúť takto kvalitný web. Komunikácia bola blesková, proces jasný a výsledok predčil moje očakávania.", avatar: "PJ" },
    { name: "Jana Novotná", role: "CEO, BeautyKlinik", quote: "Prechod k agentúre WebZaTyzden bolo najlepšie rozhodnutie pre náš biznis. Nový dizajn nám zdvojnásobil počet rezervácií už v prvom mesiaci.", avatar: "JN" },
    { name: "Martin Kováč", role: "Fitness tréner", quote: "Potreboval som rýchlo spustiť predaj môjho online kurzu. V pondelok sme si zavolali, v piatok web zarábal prvé peniaze. Úžasný prístup!", avatar: "MK" },
    { name: "Silvia Horská", role: "Riaditeľka, EduPro", quote: "Z predchádzajúcej agentúry sme odišli pre neustále naťahovanie termínov. Tu sme konečne zažili, čo znamená dodržať slovo na 100%.", avatar: "SH" },
    { name: "Michal Varga", role: "Zakladateľ startupu", quote: "Kvalita kódu a rýchlosť načítania sú fenomenálne. Z nuly na prvé stránky Googlu za 3 mesiace vďaka ich SEO základom.", avatar: "MV" },
    { name: "Zuzana Liptáková", role: "Manažérka reštaurácie", quote: "Web je krásny a responzívny. Zákazníci si konečne vedia pohodlne pozrieť menu aj na mobile. Odporúčam všetkými desiatimi.", avatar: "ZL" }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-accent/20">
            Referencie
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Čo o nás hovoria klienti
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Desiatky úspešných projektov a spokojných podnikateľov, ktorým sme pomohli rásť.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((review, index) => (
              <div key={index} className="break-inside-avoid bg-white rounded-2xl p-7 border-2 border-gray-200 shadow-card hover:shadow-card-hover transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  &quot;{review.quote}&quot;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t-2 border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Pridajte sa k nim už budúci týždeň
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Staňte sa ďalším spokojným klientom. Konzultácia je úplne zdarma.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Chcem vlastný úspešný web <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
