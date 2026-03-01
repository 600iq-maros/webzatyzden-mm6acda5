import Link from 'next/link'
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Náš Tím",
  description: "Spoznajte ľudí, ktorí budú pracovať na vašom webe."
}

export default function TeamPage() {
  const team = [
    { name: "Tomáš Kancír", role: "Web Dizajnér & Vývojár", bio: "Hlavný tvorca vášho webu. Na každom videohovore vás prevedie celým procesom, od prvého návrhu až po finálne spustenie. Špecializuje sa na moderný dizajn a konverzné weby.", photoUrl: "https://placehold.co/400x400/e2e8f0/64748b?text=Tomáš" },
    { name: "Maroš Kancír", role: "Stratégia & Klientská podpora", bio: "Stará sa o to, aby váš projekt mal jasnú stratégiu a smerovanie. Príležitostne sa pripája na videohovory, aby pomohol s obchodnými otázkami a celkovou víziou projektu.", photoUrl: "https://placehold.co/400x400/e2e8f0/64748b?text=Maroš" },
    { name: "Kseniia Faradzheva", role: "UI/UX Dizajnérka", bio: "Vytvára vizuálne príťažlivé a intuitívne rozhrania. Každý prvok navrhuje s dôrazom na používateľský komfort a maximálny konverzný potenciál vášho webu.", photoUrl: "https://placehold.co/400x400/e2e8f0/64748b?text=Kseniia" },
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spoznajte nás
          </h1>
          <p className="text-lg text-gray-600">
            Sme malý, ale mimoriadne efektívny tím. Žiadna veľká agentúra – len traja skúsení profesionáli, ktorí sa naplno venujú vášmu projektu.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-lg transition-shadow">
                <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 border-4 border-background shadow-inner">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
            Zverte svoj web do správnych rúk
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md"
          >
            Chcem s vami pracovať <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
