"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"

export default function WebsiteTesterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    try {
      const res = await fetch("https://web-factory.io/api/projects/cmm6acdnx0001vj3iaewm3uf8/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: "wf_live_46cb5f86b87b0d94d90558104164d4de",
          name,
          email,
          message: `Website to test: ${url}`,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
          sourceForm: "website-tester",
        }),
      })

      if (!res.ok) {
        throw new Error("Nepodarilo sa odoslať formulár")
      }

      setIsSuccess(true)
      setName("")
      setEmail("")
      setUrl("")
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Niečo sa pokazilo. Skúste to prosím neskôr.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-surface rounded-2xl p-8 shadow-xl border border-gray-100 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Výborne!</h3>
        <p className="text-gray-600 mb-6">
          Vaša požiadavka na test webu bola úspešne odoslaná. Čoskoro sa vám ozveme s výsledkami.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary font-bold hover:underline"
        >
          Odoslať ďalšiu požiadavku
        </button>
      </div>
    )
  }

  return (
    <div className="bg-surface rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
      <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
        Otestujte svoj aktuálny web
      </h2>
      <p className="text-gray-500 mb-8">
        Zadajte svoju adresu a my vám pošleme analýzu slabých miest a návrh na zlepšenie.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meno</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Jozef Mrkva"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="jozef@firma.sk"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">URL adresa webu</label>
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="https://www.vasweb.sk"
          />
        </div>

        {errorMsg && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <p>{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? "Odosielam..." : (
            <>
              Chcem bezplatnú analýzu <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
