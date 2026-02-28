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
          Vaša požiadavka na test webu bola úspešne odoslaná. Čoskoro sa vám ozveme s výsledkami a návrhom na zlepšenie.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary font-medium hover:underline"
        >
          Otestovať ďalší web
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8 shadow-xl border border-gray-100">
      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
        Otestujte si svoj web zdarma
      </h3>
      <p className="text-gray-500 mb-6 text-sm">
        Zistite, či váš aktuálny web nestráca zákazníkov. Analýzu vám zašleme na e-mail do 24 hodín.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="tester-url" className="block text-sm font-medium text-gray-700 mb-1">URL vášho webu</label>
          <input
            id="tester-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://vasastranka.sk"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="tester-name" className="block text-sm font-medium text-gray-700 mb-1">Vaše meno</label>
          <input
            id="tester-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jozef Mrkvička"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="tester-email" className="block text-sm font-medium text-gray-700 mb-1">Váš e-mail</label>
          <input
            id="tester-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jozef@firma.sk"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {errorMsg && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm flex items-start gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 bg-primary text-white font-medium px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {isSubmitting ? (
          "Odosielam..."
        ) : (
          <>
            Získať analýzu zdarma
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
      <p className="text-xs text-center text-gray-400 mt-4">
        Bezplatne a bez záväzkov. Vaše údaje sú u nás v bezpečí.
      </p>
    </form>
  )
}