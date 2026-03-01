import Link from 'next/link'
import { CheckCircle2, Rocket, Layout, BarChart, Phone, FileText, Eye, ThumbsUp, Clock, Users, PenTool, Search, Video, TrendingUp, Globe, Megaphone } from "lucide-react"

export const metadata = {
  title: "Služby",
  description: "Preskúmajte naše balíčky tvorby webov, SEO služieb a marketingových riešení."
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Simple */}
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Služby navrhnuté pre rast vášho biznisu
          </h1>
          <p className="text-lg text-gray-600">
            Vyberte si riešenie, ktoré najlepšie vyhovuje vašej aktuálnej situácii. Či už potrebujete úplne nový začiatok, alebo vylepšenie toho, čo už máte.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Layout className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">Kompletný Redesign Webu</h2>
              <p className="text-gray-600 mb-6 flex-grow">Premeňte svoju starú stránku na moderný predajný nástroj, ktorý očarí vašich zákazníkov.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-gray-900">1500€</span>
                <span className="text-gray-500 text-sm ml-2">jednorazovo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Moderný responzívny dizajn', 'Optimalizácia konverzného pomeru', 'Migrácia obsahu', 'SEO základ'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto">
                Zvoliť tento balíček
              </Link>
            </div>

            {/* Service 2 - Popular */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 bg-secondary text-white text-sm font-bold px-4 py-2 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wider">
                Najpopulárnejšie
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Rocket className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Tvorba Webu na Kľúč</h2>
              <p className="text-gray-300 mb-6 flex-grow">Kompletná digitálna identita postavená na mieru vašim cieľom od úplného základu.</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">2000€</span>
                <span className="text-gray-400 text-sm ml-2">jednorazovo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unikátny vizuálny štýl', 'Prvá verzia do 24 hodín', 'Pokročilé SEO a rýchlosť', 'Napojenie na analytiku'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg mt-auto">
                Zvoliť tento balíček
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <BarChart className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">SEO & Predajná Stratégia</h2>
              <p className="text-gray-600 mb-6 flex-grow">Dostaňte svoj web na popredné miesta vo vyhľadávačoch a maximalizujte svoje zisky.</p>
              <div className="mb-8">
                <span className="text-xl font-bold text-gray-900">Individuálna cena</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Analýza kľúčových slov', 'Copywriting zameraný na predaj', 'Technické SEO nastavenia', 'Mesačný report výkonu'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full text-center bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto">
                Požiadať o cenovú ponuku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Detailed Process */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              Náš proces
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ako vlastne pracujeme?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparentný proces bez prekvapení. Presne viete, čo sa kedy deje. Pracujeme vždy len s jedným klientom naraz, aby sme mu mohli venovať 100% pozornosti.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                icon: Phone,
                title: "Úvodný hovor s majiteľom firmy",
                desc: "Dohodneme si hovor, na ktorom prejdeme váš aktuálny web alebo nový biznis. Spoločne vytvoríme plán, ako by váš web mohol vyzerať a fungovať, aký cieľ chcete dosiahnuť a viac. Na tomto hovore vytvoríme profil vašej firmy, aby sme ju lepšie spoznali a mohli garantovať 100% funkčný a predávajúci web.",
                highlight: "Nie len pekné portfólio, ale skutočný predajný kanál."
              },
              {
                step: "02",
                icon: FileText,
                title: "Cenová ponuka a fakturácia",
                desc: "Na základe nášho hovoru vypracujeme cenu a pošleme vám faktúru. Žiadne skryté poplatky, žiadne prekvapenia. Presne viete, za čo platíte.",
                highlight: null
              },
              {
                step: "03",
                icon: Eye,
                title: "Prvá základná verzia",
                desc: "Po zaplatení vám dodáme prvú základnú verziu layoutu a zákazníckych krokov, ktoré vedú k dosiahnutiu cieľa vášho biznisu. Uvidíte našu víziu a smer, ktorým sa projekt uberá.",
                highlight: null
              },
              {
                step: "04",
                icon: ThumbsUp,
                title: "Potvrdenie alebo zamietnutie",
                desc: "Vy rozhodujete. Ak sa vám naša vízia páči, pokračujeme na finálnu verziu. Ak nie, vrátime vám 100% zaplatenej sumy. Žiadne riziko na vašej strane.",
                highlight: "100% garancia vrátenia peňazí ak zamiettnete prvú verziu."
              },
              {
                step: "05",
                icon: Clock,
                title: "Finálny web do 7 dní",
                desc: "Po vašom schválení dodáme plne vyladený, profesionálny web do 7 dní. Počas tejto doby sa ozveme, ak budeme potrebovať akékoľvek objasnenie alebo doplňujúce informácie.",
                highlight: null
              },
              {
                step: "06",
                icon: Rocket,
                title: "Spustenie a odovzdanie",
                desc: "Robíme finálne testy na všetkých zariadeniach a prehliadačoch. Po vašom schválení web presúvame na vašu doménu a spúšťame ho do ostrej prevádzky.",
                highlight: null
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-heading font-bold text-2xl shadow-lg">
                  {item.step}
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                  {item.highlight && (
                    <p className="mt-4 text-sm font-bold text-primary bg-primary/5 px-4 py-3 rounded-xl">
                      {item.highlight}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* One client at a time banner */}
          <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-accent" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Jeden klient. Jeden týždeň. Maximálny výsledok.
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Pracujeme vždy len s jedným klientom naraz. Váš projekt dostane 100% našej pozornosti, energie a expertízy. Žiadne rozdeľovanie kapacít medzi desiatky projektov.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services & Packages */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              SEO & Marketing
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEO služby a marketingové balíčky
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Okrem tvorby webov ponúkame kompletné SEO a marketingové služby, aby váš web nielen dobre vyzeral, ale aj zarábali.
            </p>
          </div>

          {/* Individual SEO services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: PenTool, title: "Blog writing", price: "20€ / blog", desc: "Kvalitný SEO optimalizovaný obsah pre váš web" },
              { icon: TrendingUp, title: "Backlinky", price: "50€ / backlink", desc: "Z vysoko hodnotených webov pre maximálny boost" },
              { icon: Globe, title: "AI optimalizácia", price: "V cene balíčkov", desc: "Váš web sa zobrazí v ChatGPT aj Google Gemini" },
              { icon: Search, title: "Technické SEO", price: "V cene balíčkov", desc: "Kompletné technické nastavenie pre vyhľadávače" },
            ].map((service, i) => (
              <div key={i} className="bg-surface p-6 rounded-2xl border border-gray-100">
                <service.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-secondary font-bold text-lg mb-2">{service.price}</p>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* SEO Packages */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Basic balíček</h3>
              <p className="text-gray-600 mb-6 text-sm">Ideálny na začiatok budovania online prítomnosti.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">120€</span>
                <span className="text-gray-500 text-sm ml-1">/ mesiac</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-700">4 blogové články</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-700">2 backlinky</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-700">SEO optimalizácia</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full text-center bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto">
                Mám záujem
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 bg-secondary text-white text-sm font-bold px-4 py-2 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wider">
                Odporúčame
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Premium balíček</h3>
              <p className="text-gray-300 mb-6 text-sm">Pre firmy, ktoré chcú výrazný rast vo vyhľadávačoch.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">350€</span>
                <span className="text-gray-400 text-sm ml-1">/ mesiac</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-200">6 blogových článkov</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-200">6 backlinkov</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-200">AI optimalizácia vyhľadávania</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-200">Mesačný report</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full text-center bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg mt-auto">
                Zvoliť Premium
              </Link>
            </div>

            {/* Max */}
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Max balíček</h3>
              <p className="text-gray-600 mb-6 text-sm">Maximálny výkon pre dominanciu vo vyhľadávačoch.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">1000€</span>
                <span className="text-gray-500 text-sm ml-1">/ mesiac</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">20 blogových článkov</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">20 backlinkov</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">AI optimalizácia vyhľadávania</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">Prioritná podpora</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full text-center bg-gray-100 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors mt-auto">
                Zvoliť Max
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            Potrebujete viac blogových článkov alebo backlinkov? Žiadny problém - balíčky si môžete prispôsobiť podľa vašich potrieb.
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              Ďalšie služby
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reklamy a video obsah
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kompletné marketingové riešenia pre maximálny dosah a konverzie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Google & Facebook Ads */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Google & Facebook Ads</h3>
              <p className="text-gray-600 mb-6">
                Nastavíme a spravujeme vaše reklamné kampane na Google aj Facebook tak, aby prinášali maximálny návrat investície. Cielenie na správnych zákazníkov s optimalizovaným rozpočtom.
              </p>
              <ul className="space-y-3">
                {['Nastavenie reklamných kampaní', 'A/B testovanie reklám', 'Optimalizácia rozpočtu', 'Mesačný reporting výkonu'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-primary/10 text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary/20 transition-colors text-sm">
                  Zistiť viac
                </Link>
              </div>
            </div>

            {/* 30-Day Video Programme */}
            <div className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800 shadow-xl">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">30-dňový Video Program</h3>
              <p className="text-gray-300 mb-6">
                Kompletný 30-dňový program, kde za vás naše tím napíše scenár, natočí a zostrihá profesionálne videá. Po spustení Facebook reklám vám tieto videá zaplnia celý kalendár zákazníkmi.
              </p>
              <ul className="space-y-3 mb-8">
                {['Scenáre prispôsobené vášmu biznisu', 'Profesionálne natáčanie', 'Strih a postprodukcia', 'Optimalizácia pre Facebook Ads', 'Plný kalendár zákazníkov'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-gray-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-bold text-white">10 000€</span>
                  <p className="text-gray-400 text-sm mt-1">jednorazová investícia</p>
                </div>
                <Link href="/contact" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm shadow-lg">
                  Mám záujem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Váš nový web môže zarábať už o 7 dní.
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Nestrácajte čas s agentúrami, kde ste len číslo v systéme. Rezervujte si svoj exkluzívny termín ešte dnes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Konzultácia zdarma
          </Link>
        </div>
      </section>
    </div>
  )
}
