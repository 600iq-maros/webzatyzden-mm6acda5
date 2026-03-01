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
    answer: "Počas celého týždňa sme v úzkom kontakte. Prvá verzia slúži ako základ pre diskusiu. Ak sa vám prvý koncept nepáči, máte možnosť ho zamietnuť a vrátime vám 100% zaplatenej sumy. Ak vám smer vyhovuje, pokračujeme s vylaďovaním podľa vašich pripomienok.",
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
  },
  {
    question: "Aké technológie používate na tvorbu webov?",
    answer: "Používame moderné technológie ako React, Next.js a Tailwind CSS, ktoré zabezpečujú bleskovú rýchlosť načítania, bezpečnosť a škálovateľnosť. Každý web je responzívny a optimalizovaný pre všetky zariadenia — mobily, tablety aj desktopy.",
    category: "Technické"
  },
  {
    question: "Ako prebieha úvodná konzultácia?",
    answer: "Úvodný hovor vedie Tomáš Kancír, prípadne sa pridá aj Maroš Kancír. Počas hovoru prejdeme vaše ciele, cieľovú skupinu, aktuálnu situáciu a predstavy o webe. Na základe toho vytvoríme plán a cenovú ponuku. Konzultácia je úplne zadarmo a nezáväzná.",
    category: "Proces"
  },
  {
    question: "Čo všetko je zahrnuté v cene webu?",
    answer: "Cena zahŕňa kompletný dizajn, vývoj, responzívnu optimalizáciu, základné SEO nastavenia, napojenie na Google Analytics, testovanie na všetkých zariadeniach a spustenie na vašej doméne. Taktiež vám poskytneme krátke zaškolenie, ako web spravovať.",
    category: "Ceny"
  },
  {
    question: "Ponúkate aj SEO optimalizáciu po spustení webu?",
    answer: "Áno, ponúkame mesačné SEO balíčky, ktoré zahŕňajú písanie blogových článkov, budovanie backlinkov z kvalitných webov a optimalizáciu pre AI vyhľadávače ako ChatGPT a Google Gemini. Máme tri balíčky — Basic, Premium a Max — prispôsobené rôznym rozpočtom.",
    category: "Služby"
  },
  {
    question: "Koľko stojí tvorba webovej stránky?",
    answer: "Kompletný redesign existujúceho webu stojí od 1 500€ a tvorba nového webu na kľúč od 2 000€. Presná cena závisí od rozsahu projektu a dohodneme ju počas úvodnej konzultácie. SEO služby ponúkame od 120€ mesačne.",
    category: "Ceny"
  },
  {
    question: "Bude môj web rýchly a bezpečný?",
    answer: "Bezpodmienečne. Používame moderné technológie s HTTPS šifrovaním, optimalizovaným kódom a rýchlym hostingom. Každý web testujeme cez Google PageSpeed a dbáme na to, aby dosiahol najlepšie možné skóre rýchlosti.",
    category: "Technické"
  },
  {
    question: "Čo ak potrebujem zmeny po odovzdaní webu?",
    answer: "Menšie úpravy po odovzdaní riešime operatívne. Pre väčšie zmeny alebo nové funkcionality sa dohodneme na rozsahu a termíne. Naši klienti majú vždy prioritu a snažíme sa reagovať čo najrýchlejšie.",
    category: "Spolupráca"
  },
  {
    question: "Prečo pracujete len s jedným klientom naraz?",
    answer: "Tento model nám umožňuje venovať 100% pozornosti vášmu projektu. Žiadne rozptyľovanie inými zákazkami, žiadne čakanie na odpovede. Celý tím sa sústredí výlučne na váš web, vďaka čomu dosahujeme výnimočnú kvalitu v rekordnom čase.",
    category: "Proces"
  },
  {
    question: "Bude môj web optimalizovaný pre mobilné zariadenia?",
    answer: "Áno, každý web je od začiatku navrhovaný s mobile-first prístupom. To znamená, že najprv optimalizujeme zobrazenie pre mobilné zariadenia a potom rozširujeme pre väčšie obrazovky. Výsledkom je perfektný vzhľad a funkčnosť na všetkých zariadeniach.",
    category: "Technické"
  },
  {
    question: "Ako funguje garancia vrátenia peňazí?",
    answer: "Po úvodnom hovore a zaplatení vypracujeme prvú verziu layoutu. Ak sa vám náš koncept nepáči a rozhodnete sa nepokračovať, vrátime vám 100% zaplatenej sumy. Žiadne otázky, žiadne komplikácie. Vaša spokojnosť je pre nás prvoradá.",
    category: "Ceny"
  },
  {
    question: "Pomáhate aj s tvorbou obsahu a textov na web?",
    answer: "Áno, v našom tíme máme SEO špecialistku a copywriterku Kseniiu Faradzhevú, ktorá sa stará o tvorbu presvedčivých textov optimalizovaných pre vyhľadávače. Texty sú písané tak, aby oslovili vašu cieľovú skupinu a motivovali k akcii.",
    category: "Služby"
  },
];

export default function AccordionFaqFull() {
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
    <div>
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
  );
}
