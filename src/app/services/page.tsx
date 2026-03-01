import Link from 'next/link'
import { CheckCircle2, Rocket, Layout, BarChart, Search, Palette, Globe, Gauge, Users, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Služby",
  description: "Preskúmajte naše balíčky tvorby webov, redizajnu a SEO služieb. Profesionálny web do 7 dní."
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Simple */}
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Služby navrhnuté pre rast vášho biznisu
          </h1>
          <p className="text-lg text-gray-600">
            Vyberte si riešenie, ktoré najlepšie vyhovuje vašej aktuálnej situácii. Či už potrebujete úplne nový začiatok, vylepšenie toho, čo už máte, alebo chcete dominovať vo vyhľadávačoch.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 - Redesign */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Layout className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Kompletný Redesign Webu</h2>
              <p className="text-gray-600 mb-6 flex-grow">Premeňte svoju starú stránku na moderný predajný nástroj, ktorý očarí vašich zákazníkov a privedie nových klientov.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-gray-900">1500€</span>
                <span className="text-gray-500 text-sm ml-2">jednorazovo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Moderný responzívny dizajn',
                  'Optimalizácia konverzného pomeru',
                  'Migrácia existujúceho obsahu',
                  'SEO základ a meta tagy',
                  'Rýchle načítanie stránok',
                  'Napojenie na Google Analytics'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto">
                Zvoliť tento balíček
              </Link>
            </div>

            {/* Service 2 - Tvorba na kľúč (Popular) */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 bg-secondary text-white text-sm font-bold px-4 py-2 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wider">
                Najpopulárnejšie
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Rocket className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Tvorba Webu na Kľúč</h2>
              <p className="text-gray-300 mb-6 flex-grow">Kompletná digitálna identita postavená na mieru vašim cieľom od úplného základu. Všetko vrátane obsahu, dizajnu a SEO.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">2000€</span>
                <span className="text-gray-400 text-sm ml-2">jednorazovo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Unikátny vizuálny štýl na mieru',
                  'Prvá verzia do 24 hodín',
                  'Pokročilé SEO a optimalizácia rýchlosti',
                  'Napojenie na analytiku a formuláre',
                  'Konzultácia konverznej stratégie',
                  'Copywriting a príprava obsahu',
                  'Týždenný exkluzívny prístup k tímu'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg mt-auto">
                Zvoliť tento balíček
              </Link>
            </div>

            {/* Service 3 - SEO & Stratégia */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <BarChart className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">SEO & Predajná Stratégia</h2>
              <p className="text-gray-600 mb-6 flex-grow">Dostaňte svoj web na popredné miesta vo vyhľadávačoch a maximalizujte zisky z organickej návštevnosti.</p>
              <div className="mb-8">
                <span className="text-xl font-bold text-gray-900">Individuálna cena</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Hĺbková analýza kľúčových slov',
                  'Copywriting zameraný na predaj',
                  'Technické SEO nastavenia',
                  'Optimalizácia Core Web Vitals',
                  'Lokálne SEO (Google Mapy)',
                  'Mesačný report výkonu a pozícií'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto">
                Požiadať o cenovú ponuku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Čo je súčasťou každého projektu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bez ohľadu na vybraný balíček, vždy dostanete tieto benefity ako základ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Responzívny dizajn", desc: "Web vyzerá skvelo na mobile, tablete aj desktope." },
              { icon: Gauge, title: "Rýchle načítanie", desc: "Optimalizovaný kód pre skóre 90+ v PageSpeed Insights." },
              { icon: Search, title: "SEO základ", desc: "Meta tagy, sitemapa, robots.txt a štruktúrované dáta." },
              { icon: Palette, title: "Dizajn na mieru", desc: "Žiadne šablóny. Každý web je unikátny a prispôsobený vašej značke." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako funguje náš týždeň?
            </h2>
            <p className="text-lg text-gray-600">
              Transparentný proces bez prekvapení. Presne viete, čo sa kedy deje.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20"></div>

            <div className="space-y-8">
              {[
                { step: "01", title: "Úvodná konzultácia", day: "Pred štartom", desc: "Spojíme sa na videohovore, pochopíme váš biznis, ciele a cieľovú skupinu. Zhromaždíme všetky podklady, texty a obrázky predtým, než začne plynúť náš týždeň." },
                { step: "02", title: "Prvá verzia do 24 hodín", day: "Pondelok", desc: "Vytvoríme základnú štruktúru a dizajn na základe našich dohovorov. Už v utorok ráno uvidíte prvý hmatateľný výsledok, na ktorom budeme ďalej stavať." },
                { step: "03", title: "Týždeň ladenia", day: "Utorok – Štvrtok", desc: "Implementujeme vaše pripomienky, plníme web obsahom, nastavujeme SEO, animácie a prepojujeme formuláre. Vy máte neustály prístup k testovacej verzii." },
                { step: "04", title: "Spustenie a odovzdanie", day: "Piatok", desc: "Robíme finálne testy na všetkých zariadeniach a prehliadačoch. Po vašom schválení web presúvame na vašu doménu a spúšťame ho do ostrej prevádzky." }
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg shadow-primary/25">
                    {item.step}
                  </div>
                  <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 flex-grow">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                      {item.day}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Váš nový web môže zarábať už o 7 dní.
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Nestrácajte čas s agentúrami, kde ste len číslo v systéme. Rezervujte si svoj exkluzívny termín ešte dnes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Konzultácia zdarma <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
