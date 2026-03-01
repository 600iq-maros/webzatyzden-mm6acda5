import Link from 'next/link'
import { ArrowRight, Users, Linkedin } from "lucide-react"

export const metadata = {
  title: "Náš Tím",
  description: "Spoznajte expertov, ktorí budú pracovať na vašom webe."
}

const team = [
  {
    name: "Maroš Kancír",
    role: "Co-founder",
    bio: "Stratég a vizionár za WebZaTyzden. Riadi celú firmu a dbá na to, aby bol každý web nielen vizuálne atraktívny, ale najmä funkčný z pohľadu predaja.",
    photoUrl: "https://placehold.co/400x400/4F46E5/ffffff?text=MK",
  },
  {
    name: "Tomáš Kancír",
    role: "Co-founder",
    bio: "Technický mozog tímu. Zodpovedá za architektúru a vývoj projektov, aby boli rýchle, bezpečné a škálovateľné.",
    photoUrl: "https://placehold.co/400x400/4F46E5/ffffff?text=TK",
  },
  {
    name: "Kseniia Faradzheva",
    role: "SEO Specialist & Copywriter",
    bio: "Expertka na vyhľadávače, organický rast a predajné texty. Analyzuje kľúčové slová, píše SEO optimalizovaný obsah a vytvára presvedčivé copy, ktoré konvertuje návštevníkov na zákazníkov.",
    photoUrl: "https://placehold.co/400x400/10B981/ffffff?text=KF",
  },
  {
    name: "Dominik Varga",
    role: "Lead UI/UX Dizajnér",
    bio: "Vytvára rozhrania, do ktorých sa používatelia zamilujú na prvý pohľad. Zodpovedá za vizuálnu identitu a používateľskú prívetivosť.",
    photoUrl: "https://placehold.co/400x400/F59E0B/ffffff?text=DV",
  },
  {
    name: "Natália Hrušková",
    role: "Copywriter & Obsahová Stratégka",
    bio: "Píše texty, ktoré predávajú. Vytvára obsahové stratégie a blogové články, ktoré priťahujú správnych zákazníkov.",
    photoUrl: "https://placehold.co/400x400/F59E0B/ffffff?text=NH",
  },
  {
    name: "Adam Poliak",
    role: "Frontend Vývojár",
    bio: "Mení dizajny na pixel-perfect kód. Špecializuje sa na moderné webové technológie, animácie a rýchlosť načítania.",
    photoUrl: "https://placehold.co/400x400/10B981/ffffff?text=AP",
  },
  {
    name: "Simona Ďurková",
    role: "Projektová Manažérka",
    bio: "Koordinuje celý proces od úvodného hovoru po spustenie. Zabezpečuje, že každý projekt ide podľa plánu a klient je vždy informovaný.",
    photoUrl: "https://placehold.co/400x400/4F46E5/ffffff?text=SD",
  },
]

export default function TeamPage() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-20 md:py-28 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-primary/20">
            Tím WebZaTyzden
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spoznajte ľudí za vaším úspechom
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Sme zohratá partia siedmich profesionálov vo veku 20-25 rokov. Žiadni stážisti — len ambiciózni odborníci, ktorí žijú pre výsledky.
          </p>
        </div>
      </section>

      {/* Full Team Photo */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-card-dark border-2 border-gray-200">
            <div className="aspect-[21/9]">
              <img
                src="https://placehold.co/1200x520/1e293b/94a3b8?text=Celý+tím+WebZaTyzden"
                alt="Celý tím WebZaTyzden"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-white" />
                <h2 className="font-heading text-xl md:text-2xl font-bold text-white">
                  Jeden tím. Jeden cieľ. Váš úspech.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-founders — featured row */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">Zakladatelia</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.slice(0, 2).map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-card hover:shadow-card-hover transition-all flex gap-5 items-center">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm shrink-0">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the team */}
      <section className="py-16 bg-background border-t-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">Celý tím</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {team.slice(2).map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-card hover:shadow-card-hover transition-all text-center">
                <div className="w-20 h-20 mx-auto rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm mb-4">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-sm font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary font-semibold text-xs mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-10">
            Naše hodnoty
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Transparentnosť", desc: "Žiadne skryté poplatky, žiadne prekvapenia. Presne viete, čo sa deje." },
              { title: "Rýchlosť", desc: "7 dní na dodanie. Prvá verzia do 24 hodín. Bez zbytočných prieťahov." },
              { title: "Kvalita", desc: "Každý web testujeme na všetkých zariadeniach. Odovzdávame len dokonalosť." },
            ].map((value, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="font-heading text-base font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Zverte svoj web do správnych rúk
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Náš tím je pripravený venovať 100% pozornosti vášmu projektu celý týždeň.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Chcem s vami pracovať <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
