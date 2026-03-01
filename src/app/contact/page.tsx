import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/forms/contact-form"

export const metadata = {
  title: "Kontakt",
  description: "Spojte sa s nami a zistite, či máme voľný termín na vytvorenie vášho nového webu."
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-primary/20">
            Kontaktujte nás
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Poďme spoločne vytvoriť niečo výnimočné
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Máte otázky alebo si chcete rezervovať termín? Sme tu pre vás. Odpovedáme zvyčajne do 24 hodín.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Kontaktné údaje
                </h2>
                <p className="text-gray-500 mb-8">
                  Uprednostňujete klasickú komunikáciu? Neváhajte nám napísať alebo zavolať.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border-2 border-gray-200 shadow-card">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">E-mail</h3>
                    <a href="mailto:maros.kancir@gmail.com" className="text-gray-500 hover:text-primary transition-colors text-sm">
                      maros.kancir@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border-2 border-gray-200 shadow-card">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Telefón</h3>
                    <a href="tel:+421951009182" className="text-gray-500 hover:text-primary transition-colors text-sm">
                      +421 951 009 182
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border-2 border-gray-200 shadow-card">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Adresa</h3>
                    <p className="text-gray-500 text-sm">
                      Volgogradská 13<br />080 01 Prešov<br />Slovensko
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border-2 border-gray-200 shadow-card">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-200">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Pracovné hodiny</h3>
                    <p className="text-gray-500 text-sm">
                      Po - Pi: 9:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200 shadow-card-hover">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Napíšte nám
                </h2>
                <p className="text-gray-500 mb-8 text-sm">
                  Vyplňte formulár s podrobnosťami o vašom projekte. Čím viac informácií, tým lepšie sa pripravíme.
                </p>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
