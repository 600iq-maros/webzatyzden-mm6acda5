import Link from 'next/link'
import { ArrowRight, Zap, Target, Shield, Clock } from "lucide-react"
import WebsiteTesterForm from "@/components/forms/website-tester-form"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-background -z-10"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
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
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors shadow-lg"
                >
                  Naše služby
                </Link>
                <Link 
                  href="/portfolio" 
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Ukážky prác
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://placehold.co/100x100/e2e8f0/64748b?text=U${i}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <p>Pridajte sa k <strong className="text-gray-900">100+</strong> spokojným firmám</p>
              </div>
            </div>

            {/* Hero Form */}
            <div className="relative">
              {/* Decorative dotted pattern */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] -z-10"></div>
              <WebsiteTesterForm />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[ 
              { icon: Shield, value: "100+", label: "Spokojných klientov" },
              { icon: Clock, value: "7 Dní", label: "Garantovaný čas dodania" },
              { icon: Zap, value: "24h", label: "Prvá ukážka webu" },
              { icon: Target, value: "98%", label: "Nárast konverzií" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Všetko, čo potrebujete pre úspech online
            </h2>
            <p className="text-lg text-gray-600">
              Zabudnite na zložité agentúrne balíčky. Ponúkame jasné služby zamerané na maximálny výkon a rýchlu návratnosť vašej investície.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Kompletný Redesign Webu
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Premeňte svoju starú stránku na moderný predajný nástroj, ktorý očarí vašich zákazníkov a začne reálne zarábať.
              </p>
              <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                Zistiť viac <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                Najpopulárnejšie
              </div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Tvorba Webu na Kľúč
              </h3>
              <p className="text-gray-300 mb-6 line-clamp-3">
                Kompletná digitálna identita postavená na mieru vašim cieľom od úplného základu. Unikátny dizajn a blesková rýchlosť.
              </p>
              <Link href="/services" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                Zistiť viac <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                SEO & Predajná Stratégia
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Dostaňte svoj web na popredné miesta vo vyhľadávačoch a maximalizujte svoje zisky organicky.
              </p>
              <Link href="/services" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Zistiť viac <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/4F46E5/ffffff?text=Pattern')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ste pripravení ovládnúť váš trh?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Rezervujte si svoj exkluzívny týždeň v našom kalendári ešte dnes. Termíny sa rýchlo míňajú a pracujeme vždy len pre jedného klienta naraz.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Overiť dostupnosť termínu
          </Link>
        </div>
      </section>
    </div>
  )
}