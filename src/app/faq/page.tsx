import Link from 'next/link'
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Časté otázky",
  description: "Odpovede na najčastejšie otázky ohľadom procesu tvorby webu za 7 dní."
}

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-primary/20">
            FAQ
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Časté otázky
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Zozbierali sme odpovede na otázky, ktoré dostávame najčastejšie. Ak nenájdete to, čo hľadáte, neváhajte nás kontaktovať.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 border-2 border-dashed border-gray-300 rounded-2xl text-center text-gray-400 bg-gray-50">
            <p className="font-medium mb-2">Interaktívna harmonika (Accordion) s otázkami sa načíta automaticky.</p>
            <p className="text-sm">Obsahuje otázky týkajúce sa 7-dňového procesu, úprav po odovzdaní a technických parametrov webu.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">
            Nenašli ste odpoveď na svoju otázku?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Napíšte nám a odpovieme do 24 hodín.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Napíšte nám <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
