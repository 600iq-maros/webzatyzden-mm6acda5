import Link from 'next/link'
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Cenník",
  description: "Transparentné ceny za tvorbu webov. Získajte profesionálny web do 7 dní."
}

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jednoduché a transparentné ceny
          </h1>
          <p className="text-lg text-gray-600">
            Žiadne skryté poplatky. Platíte za hodnotu, ktorú dodáme v rekordnom čase.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pricing Card 1 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Kompletný Redesign Webu</h2>
              <p className="text-gray-600 mb-6 min-h-[48px]">Premeňte svoju starú stránku na moderný predajný nástroj.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">1500€</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Moderný responzívny dizajn', 'Optimalizácia konverzného pomeru', 'Migrácia obsahu', 'SEO základ'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-primary/10 text-primary font-bold py-4 rounded-xl hover:bg-primary/20 transition-colors mt-auto">
                Mám záujem
              </Link>
            </div>

            {/* Pricing Card 2 - Popular */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Najpopulárnejšie
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-2 mt-2">Tvorba Webu na Kľúč</h2>
              <p className="text-gray-300 mb-6 min-h-[48px]">Kompletná digitálna identita postavená od úplného základu.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">2000€</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Unikátny vizuálny štýl', 'Prvá verzia do 24 hodín', 'Pokročilé SEO a rýchlosť', 'Napojenie na analytiku', 'Týždenný exkluzívny prístup'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors mt-auto">
                Zvoliť tento balíček
              </Link>
            </div>

            {/* Pricing Card 3 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">SEO & Predajná Stratégia</h2>
              <p className="text-gray-600 mb-6 min-h-[48px]">Maximalizujte svoje zisky organicky.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-gray-900">Na vyžiadanie</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Analýza kľúčových slov', 'Copywriting zameraný na predaj', 'Technické SEO nastavenia', 'Mesačný report výkonu'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto">
                Vyžiadať ponuku
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-gray-100">
         <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Často kladené otázky</h2>
            <p className="text-gray-600 mb-12">Zoznam najčastejších otázok a odpovedí nájdete nižšie.</p>
            {/* Addon: FAQ accordion will be injected here */}
            <div className="p-8 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500">
              Zobrazenie FAQ harmoniky... (Doplnok sa automaticky načíta)
            </div>
         </div>
      </section>
    </div>
  )
}