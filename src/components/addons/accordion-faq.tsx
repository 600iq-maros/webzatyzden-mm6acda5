"use client"

import { useState } from "react"

const FAQ_ITEMS = [
  {
    question: "Ako presne funguje proces dodania webu za 7 dní?",
    answer: "Náš proces je vysoko optimalizovaný. Po úvodnom hovore s Tomášom Kancírom začíname hĺbkovou analýzou a prípravou štruktúry. Do 24 hodín uvidíte prvý funkčný koncept. Následne implementujeme vaše pripomienky, SEO a detaily. Na konci týždňa prebieha testovanie a oficiálne spustenie na vašej doméne.",
    category: "Proces"
  },
  {
    question: "Čo ak nie som spokojný s prvou verziou webu?",
    answer: "Počas celého týždňa sme v úzkom kontakte. Prvá verzia slúži ako základ pre diskusiu. Vďaka tomu, že sa venujeme výhradne vášmu projektu, máme dostatok času na iterácie a úpravy, aby bol výsledok presne podľa vašich predstáv.",
    category: "Spolupráca"
  },
  {
    question: "Budem si vedieť web neskôr upravovať aj sám?",
    answer: "Áno. Web odovzdávame s jednoduchým administratívnym rozhraním, kde si viete kedykoľvek zmeniť texty, obrázky alebo pridať nový blogový článok bez toho, aby ste museli vedieť programovať.",
    category: "Technické"
  },
  {
    question: "Je v cene zahrnutý aj hosting a doména?",
    answer: "Pomôžeme vám s výberom a kompletným nastavením hostingu aj domény na vaše meno. Samotné poplatky za tieto služby (zvyčajne 50-100€ ročne) však platíte priamo poskytovateľovi, aby ste mali nad svojím webom 100% kontrolu.",
    category: "Ceny"
  },
  {
    question: "Robíte weby aj pre e-shopy?",
    answer: "Áno, vytvárame aj moderné e-commerce riešenia. V prípade zložitejších e-shopov s tisíckami produktov sa však čas dodania môže predĺžiť, čo si vopred odsúhlasíme počas úvodnej konzultácie.",
    category: "Služby"
  }
];

export default function AccordionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Všetko");

  const categories = ["Všetko", ...Array.from(new Set(FAQ_ITEMS.map(item => item.category)))];

  const filtered = FAQ_ITEMS.filter(item => {
    const matchSearch = !search || item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "Všetko" || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 font-heading text-gray-900">Často kladené otázky</h2>
        <p className="text-center text-gray-600 mb-8">Všetko, čo potrebujete vedieť o našom 7-dňovom procese.</p>
        
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Hľadať otázku..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            className="w-full border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm font-body"
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
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50 transition font-heading"
              >
                <span>{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-primary transition-transform ${openIndex === i ? "rotate-180" : ""}`} 
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
                <p className="p-6 pt-0 text-gray-600 leading-relaxed font-body">
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
    </section>
  );
}