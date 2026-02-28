import Link from 'next/link'
import { ArrowRight, Zap, Target, Shield, Clock, Rocket } from "lucide-react"
import WebsiteTesterForm from "@/components/forms/website-tester-form"

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
                  href="/portfolio" 
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Pozrieť prácu
                </Link>
              </div>
            </div>

            <div className="relative">
              <WebsiteTesterForm />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Prečo si vybrať WebZaTyzden?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kombinujeme rýchlosť, kvalitu a strategický prístup k dizajnu, aby sme vám doručili výsledky, ktoré potrebujete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Zameranie na konverzie</h3>
              <p className="text-gray-400">Každý prvok na webe navrhujeme tak, aby motivoval vašich návštevníkov k akcii a nákupu.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Bezpečnosť a Stabilita</h3>
              <p className="text-gray-400">Používame moderné technológie, ktoré zaručujú bleskovú rýchlosť a ochranu pred útokmi.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Tvorba Webu na Kľúč</h3>
              <p className="text-gray-400">Od prvého návrhu až po finálne spustenie. Postaráme sa o všetko, aby ste vy mohli v kľude podnikať.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Dodanie do 7 dní</h3>
              <p className="text-gray-400">Náš unikátny proces nám umožňuje doručiť profesionálny web bez zbytočných prieťahov.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Maximálny výkon</h3>
              <p className="text-gray-400">Optimalizujeme kód pre najlepšie výsledky v Google PageSpeed Insights a skvelé SEO.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center">
              <Link href="/contact" className="text-primary font-bold flex items-center gap-2 hover:underline">
                Zistite viac o našom procese <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
