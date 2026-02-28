import Link from 'next/link'
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Náš Tím",
  description: "Spoznajte expertov, ktorí budú pracovať na vašom webe."
}

export default function TeamPage() {
  const team = [
    { name: "Marek Kancír", role: "Zakladateľ & Web Architekt", bio: "Srdcom a dušou projektu WebZaTyzden. Riadim celú stratégiu a dbám na to, aby bol každý web nielen vizuálne atraktívny, ale najmä funkčný z pohľadu predaja.", photoUrl: "https://placehold.co/400x400/e2e8f0/64748b?text=Marek" },
    { name: "Lucia Nováková", role: "Lead UI/UX Dizajnér", bio: "Vytváram rozhrania, do ktorých sa používatelia zamilujú na prvý pohľad. Mojou úlohou je zabezpečiť, aby bol váš web moderný a používateľsky prívetivý.", photoUrl: "https://placehold.co/400x400/e2e8f0/64748b?text=Lucia" },
    { name: "Tomáš Horváth", role: "Senior Vývojár", bio: "Starám sa o to, čo beží na pozadí. Bezchybný kód, blesková rýchlosť načítania a perfektné technické SEO sú moje denné priority.", photoUrl: "https://placehold.co/400x400/e2e8f0/64748b?text=Tomas" },
    { name: "Veronika Malá", role: "Copywriter & SEO Špecialista", bio: "Píšem texty, ktoré predávajú. Analyzujem kľúčové slová a dbám na to, aby vás vaši zákazníci našli na Googli medzi prvými.", photoUrl: "https://placehold.co/400x400/e2e8f0/64748b?text=Veronika" }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spoznajte náš tím
          </h1>
          <p className="text-lg text-gray-600">
            Sme zohratá partia profesionálov. Žiadni stážisti, len skúsení seniori, ktorí odovzdajú vašemu projektu 100% nasadenie počas nášho spoločného týždňa.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-surface rounded-3xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-lg transition-shadow">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-background shadow-inner">
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