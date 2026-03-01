"use client"

import { useState } from "react"

const FAQ_ITEMS = [
  {
    question: "Ako presne funguje proces dodania webu za 7 dní?",
    answer: "Náš proces je vysoko optimalizovaný. V pondelok začíname hĺbkovou analýzou a prípravou štruktúry. V utorok už vidíte prvý funkčný koncept. Od stredy do štvrtka implementujeme vaše pripomienky, SEO a detaily. V piatok prebieha testovanie a oficiálne spustenie na vašej doméne."
  },
  {
    question: "Čo ak nie som spokojný s prvou verziou webu?",
    answer: "Počas celého týždňa sme v úzkom kontakte. Prvá verzia slúži ako základ pre diskusiu. Vďaka tomu, že sa venujeme výhradne vášmu projektu, máme dostatok času na iterácie a úpravy, aby bol výsledok presne podľa vašich predstáv."
  },
  {
    question: "Budem si vedieť web neskôr upravovať aj sám?",
    answer: "Áno. Web odovzdávame s jednoduchým administratívnym rozhraním, kde si viete kedykoľvek zmeniť texty, obrázky alebo pridať nový blogový článok bez toho, aby ste museli vedieť programovať."
  },
  {
    question: "Kto sa zúčastňuje videohovorov?",
    answer: "Na videohovoroch sa vždy zúčastňuje Tomáš Kancír, ktorý je hlavným tvorcom vášho webu a prevedie vás celým procesom. Príležitostne sa pripája aj Maroš Kancír, ktorý pomáha s obchodnými otázkami a celkovou stratégiou projektu."
  },
  {
    question: "Je v cene zahrnutý aj hosting a doména?",
    answer: "Pomôžeme vám s výberom a kompletným nastavením hostingu aj domény na vaše meno. Samotné poplatky za tieto služby (zvyčajne 50-100€ ročne) však platíte priamo poskytovateľovi, aby ste mali nad svojím webom 100% kontrolu."
  }
]

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, i) => (
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
    </div>
  )
}
