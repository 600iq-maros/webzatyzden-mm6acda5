"use client"

import { useState } from "react"

const t = {"searchPlaceholder":"Hľadať otázky...","noResults":"Neboli nájdené žiadne zodpovedajúce otázky."};
const FAQ_ITEMS = [{"question":"What services do you offer?","answer":"We offer a wide range of services tailored to your needs. Contact us for details.","category":"General"},{"question":"How do I get started?","answer":"Simply reach out through our contact form or give us a call.","category":"General"},{"question":"What are your business hours?","answer":"We're open Monday to Friday, 9 AM to 5 PM.","category":"Support"},{"question":"Do you offer refunds?","answer":"Yes, we have a 30-day money-back guarantee on all plans.","category":"Billing"}];

export default function AccordionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories: string[] = ["All", ...Array.from(new Set(FAQ_ITEMS.map((item: { category?: string }) => item.category).filter((c): c is string => Boolean(c))))];

  const filtered = FAQ_ITEMS.filter((item: { question: string; answer: string; category?: string }) => {
    const matchSearch = !search || item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Často kladené otázky</h2>
        <p className="text-center text-gray-600 mb-8">Nájdite odpovede na bežné otázky nižšie.</p>
        <div className="mb-6"><input type="text" placeholder={t.searchPlaceholder} value={search} onChange={e => setSearch(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" /></div>
        <div className="flex flex-wrap gap-2 mb-6">{categories.map((cat: string) => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1 rounded-full text-sm font-medium transition ${activeCategory === cat ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>{cat}</button>))}</div>
        <div className="space-y-3">
          {filtered.map((item: { question: string; answer: string }, i: number) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50 transition">
                <span>{item.question}</span>
                <svg className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="p-4 pt-0 text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center text-gray-500 py-8">{t.noResults}</p>}
        </div>
      </div>
    </section>
  );
}
