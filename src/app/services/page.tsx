import Link from 'next/link'
import { CheckCircle2, Rocket, Layout, BarChart, Phone, FileText, Eye, ThumbsUp, Clock, Users, PenTool, Search, Video, TrendingUp, Globe, Megaphone, ArrowRight, ShieldCheck, Zap } from "lucide-react"

export const metadata = {
  title: "Služby",
  description: "Preskúmajte naše balíčky tvorby webov, SEO služieb a marketingových riešení."
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">

      {/* ━━━ HERO ━━━ */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            Všetko na jednom mieste
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Služby navrhnuté pre<br className="hidden sm:block" /> rast vášho biznisu
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Od tvorby webu, cez SEO, až po video marketing. Vyberte si presne to, čo váš biznis potrebuje.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Tvorba webov", href: "#web" },
              { label: "Ako pracujeme", href: "#proces" },
              { label: "SEO balíčky", href: "#seo" },
              { label: "Reklamy & Video", href: "#marketing" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WEB DEVELOPMENT SERVICES ━━━ */}
      <section id="web" className="py-24 bg-white scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Tvorba webov
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Vyberte si svoj balíček
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

            {/* Redesign */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-100 hover:border-primary/30 transition-colors flex flex-col h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Layout className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">Kompletný Redesign</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Premeňte svoju starú stránku na moderný predajný nástroj.</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-gray-900">1 000€*</span>
                <span className="text-gray-400 text-sm ml-1">jednorázovo</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-3 mb-8 flex-grow">
                {['Moderný responzívny dizajn', 'Optimalizácia konverzií', 'Migrácia existujúceho obsahu', 'SEO základ'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full text-center bg-gray-50 text-gray-800 font-semibold py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm mt-auto">
                Mám záujem
              </Link>
            </div>

            {/* Na kľúč — Featured */}
            <div className="bg-gray-900 rounded-2xl p-7 border-2 border-gray-800 flex flex-col h-full relative shadow-xl lg:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Najpopulárnejšie
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5 mt-2">
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Tvorba Webu na Kľúč</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Kompletná digitálna identita od úplného základu, na mieru vašim cieľom.</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-white">1 200€*</span>
                <span className="text-gray-500 text-sm ml-1">jednorázovo</span>
              </div>
              <div className="border-t border-gray-700 pt-6 space-y-3 mb-8 flex-grow">
                {['Unikátny vizuálny štýl', 'Prvá verzia do 24 hodín', 'Pokročilé SEO & rýchlosť', 'Napojenie na analytiku', 'Exkluzívny týždenný prístup'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full text-center bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm shadow-lg shadow-primary/25 mt-auto">
                Zvoliť tento balíček
              </Link>
            </div>

            {/* SEO & Stratégia */}
            <div className="bg-white rounded-2xl p-7 border-2 border-gray-100 hover:border-secondary/30 transition-colors flex flex-col h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">SEO & Predajná Stratégia</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Dostaňte web na popredné miesta vo vyhľadávačoch.</p>
              <div className="mb-6">
                <span className="text-xl font-extrabold text-gray-900">Individuálna cena</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-3 mb-8 flex-grow">
                {['Analýza kľúčových slov', 'Copywriting zameraný na predaj', 'Technické SEO nastavenia', 'Mesačný report výkonu'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="w-full text-center bg-gray-50 text-gray-800 font-semibold py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm mt-auto">
                Požiadať o ponuku
              </Link>
            </div>
          </div>

          {/* Price note */}
          <p className="text-center text-gray-400 mt-10 text-xs">
            * Uvedené ceny sú priemerné. Presná cena závisí od konkrétneho projektu a všetkého, čo je potrebné pridať, vyvinúť alebo zmeniť. Pre presnú cenu nás <a href="/contact" className="text-primary hover:underline">kontaktujte</a> alebo si dohodnite bezplatnú konzultáciu.
          </p>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% garancia vrátenia peňazí</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Hotový web do 7 dní</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1 klient = 100% pozornosť</span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS — HOW WE WORK ━━━ */}
      <section id="proces" className="py-24 bg-background scroll-mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Náš proces
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako vlastne pracujeme?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transparentný proces od prvého hovoru po spustenie. Pracujeme vždy len s jedným klientom naraz.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:hidden" />

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  step: "01",
                  icon: Phone,
                  title: "Úvodný hovor cez Google Meet",
                  desc: "Dohodneme si hovor cez Google Meet, na ktorom prejdeme váš aktuálny web alebo nový biznis. Na hovore sa väčšinou zúčastníme ako celý tím. Vytvoríme plán, ako by web mohol vyzerať, aký cieľ chcete dosiahnuť. Vytvoríme profil vašej firmy, aby sme garantovali web, ktorý skutočne predáva.",
                  accent: "Nie len portfólio — skutočný predajný kanál.",
                },
                {
                  step: "02",
                  icon: FileText,
                  title: "Cenová ponuka",
                  desc: "Na základe hovoru vypracujeme cenu a pošleme faktúru. Žiadne skryté poplatky, žiadne prekvapenia. Presne viete, za čo platíte.",
                  accent: null,
                },
                {
                  step: "03",
                  icon: Eye,
                  title: "Prvá základná verzia",
                  desc: "Po zaplatení dodáme prvú základnú verziu layoutu a zákazníckych krokov, ktoré vedú k dosiahnutiu cieľa vášho biznisu. Uvidíte smer projektu. Zároveň vám sprístupníme dočasný web, kde môžete v reálnom čase sledovať postup prác, pridávať komentáre k úpravám, zdieľať web s priateľmi a zbierať spätnú väzbu.",
                  accent: null,
                },
                {
                  step: "04",
                  icon: ThumbsUp,
                  title: "Schválenie alebo vrátenie peňazí",
                  desc: "Vy rozhodujete. Páči sa vám vízia? Pokračujeme. Nepáči? Vrátime 100% zaplatenej sumy. Žiadne riziko na vašej strane.",
                  accent: "100% garancia vrátenia peňazí pri zamietnutí prvej verzie.",
                },
                {
                  step: "05",
                  icon: Phone,
                  title: "Hovor na 5. deň — finálne úpravy",
                  desc: "Na piaty deň procesu si dohodneme ďalší hovor cez Google Meet, kde spolu prejdeme aktuálny stav webu. Môžete navrhnúť posledné zmeny, úpravy a vylepšenia pred finálnym odovzdaním.",
                  accent: null,
                },
                {
                  step: "06",
                  icon: Clock,
                  title: "Finálny web do 7 dní",
                  desc: "Po schválení dodáme plne vyladený, profesionálny web do 7 dní. Počas práce sa ozveme, ak potrebujeme objasnenie alebo doplňujúce informácie.",
                  accent: null,
                },
                {
                  step: "07",
                  icon: Rocket,
                  title: "Spustenie",
                  desc: "Finálne testy na všetkých zariadeniach a prehliadačoch. Po vašom schválení web presúvame na vašu doménu a spúšťame do ostrej prevádzky.",
                  accent: null,
                },
              ].map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-sm z-10 shadow-lg shadow-primary/20">
                      {item.step}
                    </div>

                    {/* Card — alternating sides on desktop */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-2.5 mb-3">
                          <item.icon className="w-4 h-4 text-primary" />
                          <h3 className="font-heading text-base font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        {item.accent && (
                          <div className="mt-4 flex items-start gap-2 bg-primary/5 text-primary text-xs font-semibold px-3.5 py-2.5 rounded-lg">
                            <ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>{item.accent}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Exclusive access banner */}
          <div className="mt-20 bg-gray-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Jeden klient. Jeden týždeň. Maximálny výsledok.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Váš projekt dostane 100% našej pozornosti, energie a expertízy. Žiadne rozdeľovanie kapacít medzi desiatky projektov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SEO PACKAGES ━━━ */}
      <section id="seo" className="py-24 bg-white scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              SEO & Marketing
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEO balíčky
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Blog writing, backlinky z vysoko hodnotených webov a AI optimalizácia vyhľadávania.
            </p>
          </div>

          {/* Unit pricing note */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-14">
            <span className="flex items-center gap-1.5"><PenTool className="w-3.5 h-3.5" /> 20€ / blog</span>
            <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> 50€ / backlink</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> AI optimalizácia v cene</span>
          </div>

          {/* Package comparison */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

            {/* Basic */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-primary/30 transition-colors overflow-hidden flex flex-col h-full">
              <div className="p-7 pb-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Basic</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-gray-900">120€</span>
                  <span className="text-gray-400 text-sm">/ mesiac</span>
                </div>
                <p className="text-gray-400 text-xs mb-6">Pre začínajúce firmy</p>
              </div>
              <div className="px-7 pb-7 border-t border-gray-100 pt-5 space-y-3 flex-grow">
                {[
                  { text: "4 blogové články", included: true },
                  { text: "2 backlinky", included: true },
                  { text: "SEO optimalizácia", included: true },
                  { text: "AI vyhľadávanie", included: false },
                  { text: "Mesačný report", included: false },
                ].map((f, i) => (
                  <div key={i} className={`flex items-center gap-2.5 ${!f.included ? "opacity-35" : ""}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${f.included ? "text-primary" : "text-gray-300"}`} />
                    <span className="text-gray-600 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="px-7 pb-7">
                <Link href="/contact" className="block w-full text-center bg-gray-50 text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                  Mám záujem
                </Link>
              </div>
            </div>

            {/* Premium — featured */}
            <div className="bg-gray-900 rounded-2xl border-2 border-gray-800 overflow-hidden flex flex-col h-full relative shadow-xl md:-translate-y-3">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent" />
              <div className="p-7 pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Premium</p>
                  <span className="text-[10px] font-bold bg-secondary text-white px-2 py-0.5 rounded-full uppercase">Odporúčame</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-white">350€</span>
                  <span className="text-gray-500 text-sm">/ mesiac</span>
                </div>
                <p className="text-gray-500 text-xs mb-6">Pre rastúce firmy</p>
              </div>
              <div className="px-7 pb-7 border-t border-gray-700 pt-5 space-y-3 flex-grow">
                {[
                  { text: "6 blogových článkov", included: true },
                  { text: "6 backlinkov", included: true },
                  { text: "SEO optimalizácia", included: true },
                  { text: "AI vyhľadávanie", included: true },
                  { text: "Mesačný report", included: true },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-accent" />
                    <span className="text-gray-300 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="px-7 pb-7">
                <Link href="/contact" className="block w-full text-center bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm shadow-lg shadow-primary/25">
                  Zvoliť Premium
                </Link>
              </div>
            </div>

            {/* Max */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-secondary/30 transition-colors overflow-hidden flex flex-col h-full">
              <div className="p-7 pb-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-gray-900">1 000€</span>
                  <span className="text-gray-400 text-sm">/ mesiac</span>
                </div>
                <p className="text-gray-400 text-xs mb-6">Pre dominanciu vo vyhľadávačoch</p>
              </div>
              <div className="px-7 pb-7 border-t border-gray-100 pt-5 space-y-3 flex-grow">
                {[
                  { text: "20 blogových článkov", included: true },
                  { text: "20 backlinkov", included: true },
                  { text: "SEO optimalizácia", included: true },
                  { text: "AI vyhľadávanie", included: true },
                  { text: "Prioritná podpora", included: true },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${f.included ? "text-secondary" : "text-gray-300"}`} />
                    <span className="text-gray-600 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="px-7 pb-7">
                <Link href="/contact" className="block w-full text-center bg-gray-50 text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                  Zvoliť Max
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-10 text-xs">
            Potrebujete viac blogov alebo backlinkov? Balíčky si môžete prispôsobiť podľa vašich potrieb.
          </p>
        </div>
      </section>

      {/* ━━━ ADS & VIDEO ━━━ */}
      <section id="marketing" className="py-24 bg-background scroll-mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Ďalšie služby
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reklamy & video obsah
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Kompletné marketingové riešenia pre maximálny dosah a konverzie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

            {/* Google & Facebook Ads */}
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">Google & Facebook Ads</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Nastavíme a spravujeme vaše reklamné kampane tak, aby prinášali maximálny návrat investície.
              </p>
              <div className="space-y-2.5 mb-8 flex-grow">
                {['Nastavenie reklamných kampaní', 'A/B testovanie reklám', 'Optimalizácia rozpočtu', 'Mesačný reporting výkonu'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-auto">
                Zistiť viac <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 30-Day Video Programme */}
            <div className="bg-gray-900 rounded-2xl p-7 md:p-8 border border-gray-800 shadow-xl flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">30-dňový Video Program</h3>
                  <span className="text-accent text-xs font-bold">10 000€ · jednorázová investícia</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Napíšeme scenár, natočíme a zostriháme profesionálne videá. Po spustení Facebook reklám vám zaplnia celý kalendár.
              </p>
              <div className="space-y-2.5 mb-8 flex-grow">
                {['Scenáre prispôsobené vášmu biznisu', 'Profesionálne natáčanie & strih', 'Optimalizácia pre Facebook Ads', 'Garantovane plný kalendár'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all mt-auto">
                Mám záujem <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="py-20 md:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Váš nový web môže zarábať<br className="hidden sm:block" /> už o 7 dní.
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Rezervujte si svoj exkluzívny termín. Pracujeme len s jedným klientom naraz.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Konzultácia zdarma <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
