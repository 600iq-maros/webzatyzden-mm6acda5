import Link from 'next/link'
import { CheckCircle2, Users, Rocket, Target, ArrowRight } from "lucide-react"

export const metadata = {
  title: "O nás",
  description: "Spoznajte agentúru WebZaTýždeň a náš unikátny prístup k tvorbe webov."
}

const team = [
  { name: "Maroš Kancír", role: "Co-founder" },
  { name: "Tomáš Kancír", role: "Co-founder" },
  { name: "Kseniia Faradzheva", role: "SEO Specialist & Copywriter" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-primary/20">
            O WebZaTýždeň
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meníme spôsob, akým sa robia weby
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Odstránili sme zbytočnú byrokraciu a nekonečné čakanie. Sme tím 3 expertov vo veku 20-25 rokov, ktorí milujú efektivitu a čistý dizajn.
          </p>
        </div>
      </section>

      {/* Mission + Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                <Target className="w-4 h-4" />
                <span>Naša misia</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Jeden klient. Jeden týždeň. Maximálny výsledok.
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Naším poslaním je pomáhať podnikateľom získať profesionálnu online prezentáciu bez stresu a v rekordnom čase. Vaša spokojnosť je jedinou prioritou počas celého týždňa spolupráce.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "100% zameranie pozornosti na váš projekt",
                  "Odstránenie prestojov a čakania na e-maily",
                  "Priama komunikácia s tvorcami webu",
                  "Rýchle iterácie a okamžitá spätná väzba"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card-dark border-2 border-gray-200">
                <img
                  src="https://placehold.co/800x600/e2e8f0/475569?text=Náš+Prístup"
                  alt="Náš unikátny proces tvorby webu"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-card-hover border-2 border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-2xl text-gray-900">7 Dní</p>
                  <p className="text-sm text-gray-500">Od zadania po spustenie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "3", label: "Experti v tíme" },
              { stat: "7", label: "Dní na dodanie" },
              { stat: "100%", label: "Garancia spokojnosti" },
              { stat: "24h", label: "Prvá verzia webu" },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-heading text-3xl font-extrabold text-white">{item.stat}</p>
                <p className="text-gray-400 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6 border border-secondary/20">
              <Users className="w-4 h-4" />
              <span>Tím expertov</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ľudia za vaším úspechom
            </h2>
            <p className="text-gray-500">
              Mladý, zohratý tím profesionálov, ktorí žijú pre digitálny dizajn a marketing.
            </p>
          </div>

          {/* Team photo */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-card-dark border-2 border-gray-200">
            <div className="aspect-[21/9]">
              <img
                src="https://placehold.co/1200x520/1e293b/94a3b8?text=Celý+tím+WebZaTýždeň"
                alt="Celý tím WebZaTýždeň"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Individual cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-card hover:shadow-card-hover transition-all text-center">
                <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm mb-3">
                  <img
                    src={`https://placehold.co/200x200/e2e8f0/475569?text=${member.name.split(' ').map(n => n[0]).join('')}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-sm font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary font-semibold text-xs">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/team" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Spoznajte celý tím <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Pridajte sa k vizionárom, ktorí zmenili svoj online biznis
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Rezervujte si exkluzívny termín a pracujme spoločne na vašom úspechu.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Začať spoluprácu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
