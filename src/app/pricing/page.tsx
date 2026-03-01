import Link from 'next/link'
import { CheckCircle2, ArrowRight, Shield, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Cenník",
  description: "Transparentné ceny za tvorbu webov. Získajte profesionálny web do 7 dní."
}

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-primary/20">
            Cenník
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jednoduché a transparentné ceny
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Žiadne skryté poplatky. Platíte za hodnotu, ktorú dodáme v rekordnom čase.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Redesign */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-200 shadow-card hover:shadow-card-hover transition-all flex flex-col h-full">
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-2">Kompletný Redesign Webu</h2>
              <p className="text-gray-500 text-sm mb-6">Premeňte svoju starú stránku na moderný predajný nástroj.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">1 500€</span>
              </div>
              <div className="border-t-2 border-gray-100 pt-6 space-y-3 mb-8 flex-grow">
                {['Moderný responzívny dizajn', 'Optimalizácia konverzného pomeru', 'Migrácia obsahu', 'SEO základ'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full text-center bg-gray-50 text-gray-800 font-semibold py-3.5 rounded-xl hover:bg-gray-100 border-2 border-gray-200 transition-all text-sm mt-auto block">
                Mám záujem
              </Link>
            </div>

            {/* Na kľúč — Featured */}
            <div className="bg-gray-900 rounded-2xl p-7 border-2 border-gray-700 shadow-card-dark flex flex-col h-full relative lg:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Najpopulárnejšie
                </span>
              </div>
              <h2 className="font-heading text-xl font-bold text-white mb-2 mt-2">Tvorba Webu na Kľúč</h2>
              <p className="text-gray-400 text-sm mb-6">Kompletná digitálna identita postavená od úplného základu.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">2 000€</span>
              </div>
              <div className="border-t border-gray-700 pt-6 space-y-3 mb-8 flex-grow">
                {['Unikátny vizuálny štýl', 'Prvá verzia do 24 hodín', 'Pokročilé SEO a rýchlosť', 'Napojenie na analytiku', 'Týždenný exkluzívny prístup'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full text-center bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-sm mt-auto block">
                Zvoliť tento balíček
              </Link>
            </div>

            {/* SEO */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-200 shadow-card hover:shadow-card-hover transition-all flex flex-col h-full">
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-2">SEO & Predajná Stratégia</h2>
              <p className="text-gray-500 text-sm mb-6">Maximalizujte svoje zisky organicky.</p>
              <div className="mb-8">
                <span className="text-2xl font-bold text-gray-900">Na vyžiadanie</span>
              </div>
              <div className="border-t-2 border-gray-100 pt-6 space-y-3 mb-8 flex-grow">
                {['Analýza kľúčových slov', 'Copywriting zameraný na predaj', 'Technické SEO nastavenia', 'Mesačný report výkonu'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full text-center bg-gray-50 text-gray-800 font-semibold py-3.5 rounded-xl hover:bg-gray-100 border-2 border-gray-200 transition-all text-sm mt-auto block">
                Vyžiadať ponuku
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% garancia vrátenia peňazí</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Hotový web do 7 dní</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1 klient = 100% pozornosť</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t-2 border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Často kladené otázky</h2>
          <p className="text-gray-500 mb-12">Zoznam najčastejších otázok a odpovedí nájdete nižšie.</p>
          <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl text-gray-400 bg-white">
            Zobrazenie FAQ harmoniky... (Doplnok sa automaticky načíta)
          </div>
        </div>
      </section>
    </div>
  )
}
