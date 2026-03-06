"use client"

import { useState, useRef } from "react"
import Link from 'next/link'
import { ArrowRight, Zap, Target, Shield, Clock, Rocket, CheckCircle2, Star, Users, BarChart, Eye, Phone, ThumbsUp, Monitor, Smartphone, TrendingUp, ExternalLink } from "lucide-react"
import WebsiteTesterForm, { WebsiteTestResults } from "@/components/forms/website-tester-form"
import AccordionFaq from "@/components/addons/accordion-faq"

interface TestResults {
  overallScore: number
  mobile: { performance: number; accessibility: number; bestPractices: number; seo: number } | null
  desktop: { performance: number; accessibility: number; bestPractices: number; seo: number } | null
  analysis: string
}

export default function HomepageContent() {
  const [testResults, setTestResults] = useState<TestResults | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleResults = (results: TestResults) => {
    setTestResults(results)
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleReset = () => {
    setTestResults(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col">

      {/* ━━━ HERO SECTION ━━━ */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-background -z-10" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                <Zap className="w-4 h-4" />
                <span>Revolúcia v tvorbe webov</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Získajte web, ktorý skutočne predáva, už za <span className="text-primary">7 dní.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Venujeme sa výhradne vášmu projektu. Prvá verzia do 24 hodín, finálny a vyladený web pripravený na rast vášho biznisu do týždňa.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
                >
                  Konzultácia zdarma <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold hover:border-gray-300 hover:shadow-md transition-all"
                >
                  Naše služby
                </Link>
              </div>
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>100% garancia vrátenia peňazí ak nebudete spokojný</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Prvá verzia do 24h</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <WebsiteTesterForm onResults={handleResults} />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ WEBSITE TEST RESULTS (full-width, shown after test) ━━━ */}
      {testResults && (
        <div ref={resultsRef}>
          <WebsiteTestResults results={testResults} onReset={handleReset} />
        </div>
      )}

      {/* ━━━ SOCIAL PROOF BAR ━━━ */}
      <section className="py-8 bg-white border-y-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <p className="font-heading text-3xl font-extrabold text-gray-900">3</p>
              <p className="text-sm text-gray-500">Experti v tíme</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block" />
            <div>
              <p className="font-heading text-3xl font-extrabold text-gray-900">7</p>
              <p className="text-sm text-gray-500">Dní na dodanie</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block" />
            <div>
              <p className="font-heading text-3xl font-extrabold text-gray-900">100%</p>
              <p className="text-sm text-gray-500">Garancia spokojnosti</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block" />
            <div>
              <p className="font-heading text-3xl font-extrabold text-gray-900">24h</p>
              <p className="text-sm text-gray-500">Prvá verzia webu</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ WHAT WE DO — SERVICES OVERVIEW ━━━ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-primary/20">
              Čo robíme
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Všetko, čo potrebujete na úspech online
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Od tvorby webu, cez SEO, až po reklamné kampane — pokryjeme celý váš digitálny rast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "Tvorba webov na kľúč", desc: "Vytvoríme vám web presne podľa vašich predstáv. Žiadne šablóny — všetko je robené na mieru.", color: "primary" },
              { icon: Smartphone, title: "Funguje všade", desc: "Váš web bude vyzerať skvele na mobile, tablete aj počítači. Otestovaný na všetkých zariadeniach.", color: "accent" },
              { icon: TrendingUp, title: "Ľudia vás nájdu na Google", desc: "Postaráme sa, aby sa váš web zobrazoval čo najvyššie vo vyhľadávaní a priťahoval nových zákazníkov.", color: "secondary" },
              { icon: BarChart, title: "Online reklamy", desc: "Nastavíme vám reklamy na Google a Facebooku tak, aby ste za svoje peniaze získali čo najviac zákazníkov.", color: "primary" },
              { icon: Eye, title: "AI vyhľadávanie", desc: "Pripravíme váš web aj na nové spôsoby vyhľadávania cez ChatGPT a Google Gemini.", color: "accent" },
              { icon: Shield, title: "Bezpečný a rýchly web", desc: "Váš web bude zabezpečený a načíta sa bleskovo rýchlo, aby zákazníci neodchádzali.", color: "secondary" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-card-hover transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  service.color === "primary" ? "bg-primary/10 text-primary" :
                  service.color === "accent" ? "bg-accent/10 text-accent" :
                  "bg-secondary/10 text-secondary"
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg">
              Zobraziť všetky služby <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ PORTFOLIO ━━━ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-accent/20">
              Portfólio
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše doterajšie projekty
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Pozrite sa na weby, ktoré sme vytvorili pre našich klientov. Každý je unikátny a šitý na mieru.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Drevosklad",
                desc: "Moderný web pre predajcu drevených materiálov a stavebných produktov.",
                image: "https://i.ibb.co/39yGjJqK/drevosklad-screenshot.webp",
                url: "https://drevosklad.webzatyzden.sk/",
              },
              {
                title: "Striekané izolácie",
                desc: "Profesionálna prezentácia pre firmu zameranú na striekané izolácie.",
                image: "https://i.ibb.co/YTb9vs6K/Izolacie-screenshot.webp",
                url: "https://striekane-izolacie.webzatyzden.sk/",
              },
            ].map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot webu ${project.title}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-gray-900">{project.title}</h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WHY US — FEATURES (DARK) ━━━ */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-white/20">
                Prečo my
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Prečo si vybrať nás?
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Nie sme klasická agentúra. Pracujeme vždy len s jedným klientom naraz, aby váš web dostal 100% našej pozornosti.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Target, title: "Zameranie na konverzie", desc: "Každý prvok navrhujeme tak, aby motivoval k akcii a nákupu." },
                  { icon: Clock, title: "Dodanie do 7 dní", desc: "Unikátny proces nám umožňuje doručiť profesionálny web bez zbytočných prieťahov." },
                  { icon: Zap, title: "Maximálny výkon", desc: "Optimalizovaný kód pre najlepšie výsledky v Google PageSpeed." },
                  { icon: Shield, title: "Bezpečnosť a stabilita", desc: "Moderné technológie pre bleskovú rýchlosť a ochranu pred útokmi." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-card-dark border-2 border-gray-700">
                <iframe
                  src="https://www.youtube.com/embed/Hfm94aHAbYQ"
                  title="Náš proces tvorby webu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-card-hover border-2 border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-2xl text-gray-900">24h</p>
                  <p className="text-xs text-gray-500">Prvá verzia</p>
                </div>
              </div>
              {/* Floating stat 2 */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-card-hover border-2 border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-lg text-gray-900">1:1</p>
                  <p className="text-[11px] text-gray-500">Exkluzívny prístup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ HOW WE WORK — PROCESS ━━━ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-primary/20">
              Ako to funguje
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Od prvého hovoru po spustenie za 7 dní
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Jednoduchý, transparentný proces. Presne viete, čo sa kedy deje.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { step: "01", icon: Phone, title: "Konzultácia", desc: "Zavoláme si cez Google Meet, väčšinou ako celý tím, rozoberieme vaše ciele a vytvoríme plán." },
              { step: "02", icon: Eye, title: "Prvá verzia", desc: "Do 24 hodín uvidíte layout a smer, ktorým sa projekt uberá." },
              { step: "03", icon: ThumbsUp, title: "Schválenie", desc: "Páči sa vám to? Pokračujeme. Ak nie — 100% peňazí späť." },
              { step: "04", icon: Rocket, title: "Spustenie", desc: "Finálny web otestovaný na všetkých zariadeniach, pripravený zarábať." },
            ].map((item, i) => (
              <div key={i} className="relative bg-white p-7 rounded-2xl border-2 border-gray-100 shadow-card hover:shadow-card-hover transition-all group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-heading text-3xl font-extrabold text-primary/15 group-hover:text-primary/25 transition-colors">{item.step}</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-9 w-6 items-center justify-center text-primary/40">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services#proces" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Zobraziť detailný proces <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ TESTIMONIALS ━━━ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-accent/20">
              Referencie
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Čo hovoria naši klienti
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Peter Juhás", role: "Majiteľ, StavTech s.r.o.", quote: "Neveril som, že do týždňa môže vzniknúť takto kvalitný web. Proces bol jasný a výsledok predčil moje očakávania.", avatar: "PJ" },
              { name: "Jana Novotná", role: "CEO, BeautyKlinik", quote: "Nový dizajn nám zdvojnásobil počet rezervácií už v prvom mesiaci. Najlepšie rozhodnutie pre náš biznis.", avatar: "JN" },
              { name: "Martin Kováč", role: "Fitness tréner", quote: "V pondelok sme si zavolali, v piatok web zarábal prvé peniaze. Úžasný prístup a profesionalita!", avatar: "MK" },
            ].map((review, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border-2 border-gray-100 shadow-card hover:shadow-card-hover transition-all">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">&quot;{review.quote}&quot;</p>
                <div className="flex items-center gap-3 pt-5 border-t-2 border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Všetky referencie <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ FAQ SECTION ━━━ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-primary/20">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Často kladené otázky
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Odpovede na najčastejšie otázky o našom procese a tvorbe webov.
            </p>
          </div>

          <AccordionFaq />

          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Zobraziť všetky otázky <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ TEAM PREVIEW ━━━ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-secondary/20">
                Náš tím
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mladý, ambiciózny tím, ktorý miluje výsledky
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Sme trojica profesionálov vo veku 20-25 rokov. Žijeme pre moderný dizajn, čistý kód a merateľné výsledky. Každý projekt berieme osobne.
              </p>
              <ul className="space-y-3 mb-8">
                {['Pracujeme vždy len s 1 klientom naraz', 'Priama komunikácia bez prostredníkov', 'Rýchle iterácie a okamžitá spätná väzba'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg text-sm">
                Spoznajte nás <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card-dark border-2 border-gray-200">
                <img
                  src="/images/team/jatomas_edited.webp"
                  alt="Maroš a Tomáš Kancír - zakladatelia WebZaTýždeň"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl -z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Váš nový web môže zarábať<br className="hidden sm:block" /> už o 7 dní.
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            Nestrácajte čas s agentúrami, kde ste len číslo v systéme. Rezervujte si svoj exkluzívny termín.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 hover:-translate-y-0.5"
            >
              Konzultácia zdarma <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Pozrieť služby
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
