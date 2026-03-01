import Link from 'next/link'
import { ArrowRight, Zap, Target, Shield, Clock, Rocket, ChevronDown, Gauge } from "lucide-react"
import WebsiteTesterForm from "@/components/forms/website-tester-form"
import HomeFaq from "@/components/home-faq"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-background -z-10"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Zap className="w-4 h-4" />
                <span>Revolúcia v tvorbe webov</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Získajte web, ktorý skutočne predáva, už za <span className="text-primary">7 dní.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Venujeme sa výhradne vášmu projektu. Prvá verzia do 24 hodín, finálny a vyladený web pripravený na rast vášho biznisu do týždňa.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2"
                >
                  Naše služby <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Kontaktujte nás
                </Link>
              </div>
            </div>

            <div className="relative">
              <WebsiteTesterForm />
            </div>
          </div>
        </div>
      </section>

      {/* PREČO MY SECTION */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Prečo my?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kombinujeme rýchlosť, kvalitu a strategický prístup k dizajnu, aby sme vám doručili výsledky, ktoré potrebujete.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* YouTube Video */}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/15jFJOJc63U"
                title="Náš Proces"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Feature highlights next to video */}
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">Zameranie na konverzie</h3>
                  <p className="text-gray-400 text-sm">Každý prvok na webe navrhujeme tak, aby motivoval vašich návštevníkov k akcii.</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">Bezpečnosť a Stabilita</h3>
                  <p className="text-gray-400 text-sm">Moderné technológie zaručujúce bleskovú rýchlosť a ochranu pred útokmi.</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">Tvorba Webu na Kľúč</h3>
                  <p className="text-gray-400 text-sm">Od prvého návrhu až po finálne spustenie. Postaráme sa o všetko.</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">Dodanie do 7 dní</h3>
                  <p className="text-gray-400 text-sm">Náš unikátny proces nám umožňuje doručiť profesionálny web bez zbytočných prieťahov.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional feature cards grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Gauge className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Maximálny výkon</h3>
              <p className="text-gray-400">Optimalizujeme kód pre najlepšie výsledky v Google PageSpeed Insights a skvelé SEO pozície vo vyhľadávačoch.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center">
              <Link href="/services" className="text-primary font-bold flex items-center gap-2 text-lg hover:underline">
                Zistite viac o našich službách <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AKO TO FUNGUJE SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako to funguje?
            </h2>
            <p className="text-lg text-gray-600">
              Transparentný proces bez prekvapení. Presne viete, čo sa kedy deje.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connecting line (desktop) */}
            <div className="hidden md:block absolute left-[31px] top-16 bottom-16 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>

            <div className="space-y-6 md:space-y-10">
              {[
                { step: "01", title: "Úvodná konzultácia", desc: "Tomáš Kancír sa s vami spojí na videohovore, kde pochopíme váš biznis, ciele a cieľovú skupinu. Príležitostne sa pripojí aj Maroš Kancír s otázkami o stratégii. Zhromaždíme všetky podklady predtým, než začne plynúť náš týždeň.", day: "Pred štartom" },
                { step: "02", title: "Prvá verzia do 24 hodín", desc: "Vytvoríme základnú štruktúru a dizajn na základe našich dohovorov. Už na ďalší deň uvidíte prvý hmatateľný výsledok.", day: "Pondelok" },
                { step: "03", title: "Týždeň ladenia", desc: "Implementujeme vaše pripomienky, plníme web obsahom, nastavujeme SEO, animácie a prepojujeme formuláre.", day: "Utorok – Štvrtok" },
                { step: "04", title: "Spustenie a odovzdanie", desc: "Robíme finálne testy na všetkých zariadeniach. Po vašom schválení web spúšťame do ostrej prevádzky.", day: "Piatok" }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                    {/* Step number circle */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg shadow-primary/25">
                      {item.step}
                    </div>

                    {/* Content card */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex-grow">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                        {item.day}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>

                  {/* Arrow to next step (mobile only) */}
                  {index < 3 && (
                    <div className="md:hidden flex justify-center w-full pt-4 pb-0">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-0.5 h-4 bg-primary/30 rounded-full"></div>
                        <ChevronDown className="w-7 h-7 text-primary/70" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Často kladené otázky
            </h2>
            <p className="text-lg text-gray-600">
              Odpovede na otázky, ktoré dostávame najčastejšie.
            </p>
          </div>

          <HomeFaq />

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Zobraziť všetky otázky <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
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
