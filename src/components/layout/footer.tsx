import Link from 'next/link'
import { Rocket, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-lg shadow-md shadow-primary/20">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                WebZaTýždeň
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Sme digitálna agentúra, ktorá mení pravidlá hry v tvorbe webov. Váš nový web hotový za 7 dní.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Rýchle odkazy</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Služby</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">Časté otázky</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">O spoločnosti</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">O nás</Link></li>

              <li><Link href="/testimonials" className="text-sm text-gray-400 hover:text-white transition-colors">Referencie</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@webzatyzden.sk</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+421 944 602 404</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Prešov, Slovensko</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-500 space-y-1">
            <p>&copy; {new Date().getFullYear()} TOMAR Group s.r.o. Všetky práva vyhradené.</p>
            <p>IČO: 56449046 | DIČ: 2122311488 | IČ DPH: SK2122311488</p>
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/ochrana-osobnych-udajov" className="hover:text-white transition-colors">Ochrana osobných údajov</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
