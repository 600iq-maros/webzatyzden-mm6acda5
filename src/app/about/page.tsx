import Link from 'next/link'
import { CheckCircle2, Users, Rocket, Target } from "lucide-react"

export const metadata = {
  title: "O nás",
  description: "Spoznajte agentúru WebZaTyzden a náš unikátny prístup k tvorbe webov."
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Simple */}
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meníme spôsob, akým sa robia weby
          </h1>
          <p className="text-lg text-gray-600">
            V WebZaTyzden sme odstránili zbytočnú byrokraciu a nekonečné čakanie, ktoré je v agentúrnom svete bežné. Sme tím expertov, ktorí milujú efektivitu a čistý dizajn.
          </p>
        </div>
      </section>

      {/* About Text & Media */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Target className="w-4 h-4" />
                <span>Naša misia</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Jeden klient. Jeden týždeň. Maximálny výsledok.
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Naším poslaním je pomáhať podnikateľom získať profesionálnu online prezentáciu bez stresu a v rekordnom čase. Vaša spokojnosť a výsledky vášho podnikania sú pre nás jedinou prioritou počas celého týždňa našej spolupráce.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "100% zameranie pozornosti na váš projekt",
                  "Odstránenie prestojov a čakania na e-maily",
                  "Priama komunikácia s tvorcami webu",
                  "Rýchle iterácie a okamžitá spätná väzba"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/800x600/e2e8f0/64748b?text=Náš+Prístup"
                  alt="Náš unikátny proces tvorby webu"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900">7 Dní</p>
                  <p className="text-sm text-gray-500">Od zadania po spustenie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
              <Users className="w-4 h-4" />
              <span>Náš tím</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ľudia za vaším úspechom
            </h2>
            <p className="text-lg text-gray-600">
              Malý, ale mimoriadne efektívny tím profesionálov, ktorí sa naplno venujú vášmu projektu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Tomáš Kancír", role: "Web Dizajnér & Vývojár", bio: "Hlavný tvorca vášho webu. Na každom videohovore vás prevedie celým procesom, od prvého návrhu až po finálne spustenie." },
              { name: "Maroš Kancír", role: "Stratégia & Klientská podpora", bio: "Stará sa o stratégiu a smerovanie projektu. Príležitostne sa pripája na hovory, aby pomohol s obchodnými otázkami." }
            ].map((member, i) => (
              <div key={i} className="bg-surface rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-background">
                  <img
                    src={`https://placehold.co/300x300/e2e8f0/64748b?text=${member.name.split(' ')[0]}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-white mb-8">
            Pridajte sa k vizionárom, ktorí zmenili svoj online biznis.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Začať spoluprácu
          </Link>
        </div>
      </section>
    </div>
  )
}
