import Link from 'next/link'

export const metadata = {
  title: "Časté otázky",
  description: "Odpovede na najčastejšie otázky ohľadom procesu tvorby webu za 7 dní."
}

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Časté otázky (FAQ)
          </h1>
          <p className="text-lg text-gray-600">
            Zozbierali sme odpovede na otázky, ktoré dostávame najčastejšie. Ak nenájdete to, čo hľadáte, neváhajte nás kontaktovať.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Addon: FAQ accordion will be injected here */}
          <div className="p-12 border-2 border-dashed border-gray-200 rounded-3xl text-center text-gray-500 bg-gray-50">
             <p className="font-medium mb-2">Interaktívna harmonika (Accordion) s otázkami sa načíta automaticky.</p>
             <p className="text-sm">Obsahuje otázky týkajúce sa 7-dňového procesu, úprav po odovzdaní a technických parametrov webo.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">
            Nenašli ste odpoveď na svoju otázku?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Napíšte nám
          </Link>
        </div>
      </section>
    </div>
  )
}