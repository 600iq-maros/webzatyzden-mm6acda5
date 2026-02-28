import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Kontakt",
  description: "Spojte sa s nami a zistite, či máme voľný termín na vytvorenie vášho nového webu."
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Simple */}
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Poďme spoločne vytvoriť niečo výnimočné
          </h1>
          <p className="text-lg text-gray-600">
            Máte otázky alebo si chcete rezervovať termín pre váš projekt? Sme tu pre vás. Odpovedáme zvyčajne do 24 hodín.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Contact Info Grid (Left Column) */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Kontaktné údaje
                </h2>
                <p className="text-gray-600 mb-8">
                  Uprednostňujete klasickú komunikáciu? Neváhajte nám napísať e-mail alebo zavolať v pracovné dni od 9:00 do 17:00.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                    <a href="mailto:maros.kancir@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                      maros.kancir@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefón</h3>
                    <a href="tel:+421951009182" className="text-gray-600 hover:text-primary transition-colors">
                      +421 951 009 182
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adresa kancelárie</h3>
                    <p className="text-gray-600">
                      Volgogradská 13<br />080 01 Prešov<br />Slovensko
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section (Right Columns) */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                  Napíšte nám
                </h2>
                <p className="text-gray-600 mb-8">
                  Vyplňte formulár nižšie s podrobnosťami o vašom projekte. Čím viac informácií nám poskytnete, tým lepšie sa budeme vedieť pripraviť na náš spoločný hovor.
                </p>
                
                {/* Contact form is injected via AddonSections */}
                <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center">
                  <p className="text-primary font-medium">
                    Zobrazenie kontaktného formulára.
                    <br />
                    <span className="text-sm text-gray-500 font-normal">(Formulár bude automaticky vložený platformou cez AddonSections na spodku stránky. Môžete scrollovať nižšie.)</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}