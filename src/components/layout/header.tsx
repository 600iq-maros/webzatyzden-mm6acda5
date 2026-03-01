"use client"

import { useState } from "react"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { Menu, X, Rocket } from "lucide-react"

const navLinks = [
  { name: "Domov", href: "/" },
  { name: "Služby", href: "/services" },
  { name: "Cenník", href: "/pricing" },
  { name: "O nás", href: "/about" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-gray-200 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl group-hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-gray-900">
              WebZaTyzden
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary font-bold" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
            >
              Rýchly dopyt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t-2 border-gray-200 py-6 px-4 space-y-4 shadow-card-hover">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium ${
                pathname === link.href ? "text-primary font-bold" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-primary text-white text-center py-4 rounded-xl font-bold shadow-md shadow-primary/20"
          >
            Rýchly dopyt
          </Link>
        </nav>
      )}
    </header>
  )
}
