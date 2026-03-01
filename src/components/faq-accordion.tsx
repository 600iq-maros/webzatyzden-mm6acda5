"use client"

import { useState } from "react"

const FAQ_ITEMS = [
  {
    question: "Ako presne funguje proces dodania webu za 7 dní?",
    answer: "Náš proces je vysoko optimalizovaný. Pred samotným týždňom sa spojíme na úvodnej konzultácii, kde pochopíme váš biznis a zozbierame podklady. V pondelok začíname prípravou štruktúry a dizajnu. V utorok už vidíte prvý funkčný koncept. Od stredy do štvrtka implementujeme vaše pripomienky, SEO a detaily. V piatok prebieha testovanie a oficiálne spustenie na vašej doméne.",
    category: "Proces"
  },
  {
    question: "Čo ak nie som spokojný s prvou verziou webu?",
    answer: "Počas celého týždňa sme v úzkom kontakte. Prvá verzia slúži ako základ pre diskusiu – nie je to finálny produkt. Vďaka tomu, že sa venujeme výhradne vášmu projektu, máme dostatok času na iterácie a úpravy, aby bol výsledok presne podľa vašich predstáv.",
    category: "Spolupráca"
  },
  {
    question: "Čo všetko potrebujete odo mňa pred začiatkom?",
    answer: "Na úvodnej konzultácii si prejdeme vaše ciele, cieľovú skupinu a preferencie ohľadom dizajnu. Ideálne, ak nám pripravíte: texty (alebo body, z ktorých texty vytvoríme), logo, fotografie a príklady webov, ktoré sa vám páčia. Ak nemáte všetko, nevadí – pomôžeme vám s prípravou.",
    category: "Spolupráca"
  },
  {
    question: "Budem si vedieť web neskôr upravovať aj sám?",
    answer: "Áno. Web odovzdávame s jednoduchým administratívnym rozhraním, kde si viete kedykoľvek zmeniť texty, obrázky alebo pridať nový blogový článok bez toho, aby ste museli vedieť programovať. K tomu dostanete aj stručný návod.",
    category: "Technické"
  },
  {
    question: "Aké technológie používate na tvorbu webov?",
    answer: "Staviame na moderných technológiách ako Next.js, React a Tailwind CSS. Tieto technológie zaručujú bleskovú rýchlosť načítania, výborné SEO výsledky a bezpečnosť. Váš web bude skórovať vysoko v Google PageSpeed Insights, čo priamo ovplyvňuje pozície vo vyhľadávačoch.",
    category: "Technické"
  },
  {
    question: "Je v cene zahrnutý aj hosting a doména?",
    answer: "Pomôžeme vám s výberom a kompletným nastavením hostingu aj domény na vaše meno. Samotné poplatky za tieto služby (zvyčajne 50–100 € ročne) však platíte priamo poskytovateľovi, aby ste mali nad svojím webom 100% kontrolu.",
    category: "Ceny"
  },
  {
    question: "Koľko stojí tvorba webu?",
    answer: "Cena závisí od rozsahu projektu. Kompletný redesign existujúceho webu začína na 1 500 €, tvorba webu na kľúč od úplného základu stojí od 2 000 €. SEO a predajná stratégia má individuálnu cenu podľa rozsahu. Všetky ceny sú jednorazové, bez skrytých poplatkov.",
    category: "Ceny"
  },
  {
    question: "Robíte weby aj pre e-shopy?",
    answer: "Áno, vytvárame aj moderné e-commerce riešenia. V prípade zložitejších e-shopov s tisíckami produktov sa však čas dodania môže predĺžiť, čo si vopred odsúhlasíme počas úvodnej konzultácie.",
    category: "Služby"
  },
  {
    question: "Poskytujete aj SEO služby?",
    answer: "Áno. Základné SEO nastavenia (meta tagy, sitemapa, rýchlosť načítania, štruktúrované dáta) sú súčasťou každého projektu. Pre pokročilé SEO vrátane analýzy kľúčových slov, optimalizácie obsahu a mesačných reportov ponúkame samostatný balíček SEO & Predajná Stratégia.",
    category: "Služby"
  },
  {
    question: "Kto sa zúčastňuje videohovorov počas projektu?",
    answer: "Na videohovoroch sa vždy zúčastňuje Tomáš Kancír, ktorý je hlavným tvorcom vášho webu a prevedie vás celým procesom. Príležitostne sa pripája aj Maroš Kancír, ktorý pomáha s obchodnými otázkami a celkovou stratégiou projektu.",
    category: "Spolupráca"
  },
  {
    question: "Bude môj web optimalizovaný pre mobilné zariadenia?",
    answer: "Samozrejme. Každý web, ktorý vytvárame, je plne responzívny – vyzerá a funguje dokonale na mobile, tablete aj desktope. Responzívny dizajn nie je voliteľný doplnok, ale základ našej práce.",
    category: "Technické"
  },
  {
    question: "Čo sa stane po odovzdaní webu? Poskytujete podporu?",
    answer: "Po spustení webu vám poskytneme 30-dňovú bezplatnú podporu na drobné úpravy a otázky. Pre dlhodobú spoluprácu (pravidelné aktualizácie obsahu, nové funkcie, SEO optimalizácie) ponúkame individuálne dohodnuté podmienky.",
    category: "Spolupráca"
  }
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("Všetko")

  const categories = ["Všetko", ...Array.from(new Set(FAQ_ITEMS.map(item => item.category)))]

  const filtered = FAQ_ITEMS.filter(item => {
    const matchSearch = !search || item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === "Všetko" || item.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Hľadať otázku..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((item, i) => (
          <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-100 transition font-heading"
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 text-primary transition-transform shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            Nenašli sme žiadnu zhodu. Skúste iné kľúčové slovo.
          </p>
        )}
      </div>
    </div>
  )
}
