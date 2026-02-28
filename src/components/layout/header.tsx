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
    <header className="bg-surface sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl group-hover:bg-primary/90 transition-colors">
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
                  pathname === link.href ? "text-primary" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Placeholder for Dark Mode Toggle Addon */}
            <div className="w-10 h-6 bg-gray-200 rounded-full hidden lg:block" title="Dark mode toggle placeholder"></div>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Chcem web
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Prepnúť menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-gray-100 animate-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-xl text-base font-medium ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-white px-6 py-3 rounded-2xl text-base font-medium shadow-md"
            >
              Chcem web
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}