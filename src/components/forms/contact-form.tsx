"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      })

      if (!res.ok) throw new Error("Nepodarilo sa odoslať formulár. Skúste to znova.")

      setSuccess(true)
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Niečo sa pokazilo")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border-2 border-green-200 p-8 rounded-2xl text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Správa odoslaná!</h3>
        <p className="text-gray-500 mb-6">Ďakujeme za váš záujem. Budeme vás kontaktovať hneď, ako to bude možné.</p>
        <button
          onClick={() => setSuccess(false)}
          className="text-primary font-bold hover:underline"
        >
          Odoslať ďalšiu správu
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Meno a priezvisko</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Jozef Mrkva"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">E-mailová adresa</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="jozef@email.sk"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Telefónne číslo</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="+421 ..."
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Vaša správa / Detaily projektu</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
          placeholder="Povedzte nám niečo viac o tom, čo potrebujete..."
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border-2 border-red-200 text-sm">
          <AlertCircle className="w-4 h-4" />
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? "Odosielam..." : (
          <>
            Odoslať dopyt <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  )
}
