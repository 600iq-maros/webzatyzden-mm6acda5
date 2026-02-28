import Link from 'next/link'

export const metadata = {
  title: "Referencie",
  description: "Prečítajte si skúsenosti našich klientov s projektom WebZaTyzden."
}

export default function TestimonialsPage() {
  const testimonials = [
    { name: "Peter Juhás", role: "Majiteľ, StavTech s.r.o.", quote: "Neveril som, že do týždňa môže vzniknúť takto kvalitný web. Komunikácia bola blesková, proces jasný a výsledok predčil moje očakávania.", avatarUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=PJ" },
    { name: "Jana Novotná", role: "CEO, BeautyKlinik", quote: "Prechod k agentúre WebZaTyzden bolo najlepšie rozhodnutie pre náš biznis. Nový dizajn nám zdvojnásobil počet rezervácií už v prvom mesiaci.", avatarUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=JN" },
    { name: "Martin Kováč", role: "Fitness tréner", quote: "Potreboval som rýchlo spustiť predaj môjho online kurzu. V pondelok sme si zavolali, v piatok web zarábal prvé peniaze. Úžasný prístup!", avatarUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=MK" },
    { name: "Silvia Horská", role: "Riaditeľka, EduPro", quote: "Z predchádzajúcej agentúry sme odišli pre neustále naťahovanie termínov. Tu sme konečne zažili, čo znamená dodržať slovo na 100%.", avatarUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=SH" },
    { name: "Michal Varga", role: "Zakladateľ startupu", quote: "Kvalita kódu a rýchlosť načítania sú fenomenálne. Z nuly na prvé stránky Googlu za 3 mesiace vďaka ich SEO základom.", avatarUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=MV" },
    { name: "Zuzana Liptáková", role: "Manažérka reštaurácie", quote: "Web je krásny a responzívny. Zákazníci si konečne vedia pohodlne pozrieť menu aj na mobile. Odporúčam všetkými desiatimi.", avatarUrl: "https://placehold.co/150x150/e2e8f0/64748b?text=ZL" }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Čo o nás hovoria klienti
          </h1>
          <p className="text-lg text-gray-600">
            Desiatky úspešných projektov a spokojných podnikateľov, ktorým sme pomohli rásť.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((review, index) => (
              <div key={index} className="break-inside-avoid bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-600 text-lg italic mb-6">
                  &quot;{review.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={review.avatarUrl} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Pridajte sa k nim už budúci týždeň
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Chcem vlastný úspešný web
          </Link>
        </div>
      </section>
    </div>
  )
}