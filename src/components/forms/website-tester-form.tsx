"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, AlertCircle, Phone, Loader2, Gauge, Search, Smartphone, Monitor, Calendar } from "lucide-react"

interface CategoryScores {
  performance: number
  accessibility: number
  bestPractices: number
  seo: number
}

interface TestResults {
  overallScore: number
  mobile: CategoryScores | null
  desktop: CategoryScores | null
  analysis: string
}

function ScoreCircle({ score, label, size = "normal" }: { score: number; label: string; size?: "normal" | "large" }) {
  const color = score >= 90 ? "text-green-500" : score >= 50 ? "text-yellow-500" : "text-red-500"
  const bgColor = score >= 90 ? "bg-green-50 border-green-200" : score >= 50 ? "bg-yellow-50 border-yellow-200" : "bg-red-50 border-red-200"
  const isLarge = size === "large"

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`${isLarge ? "w-20 h-20" : "w-14 h-14"} rounded-full border-2 ${bgColor} flex items-center justify-center`}>
        <span className={`font-heading font-extrabold ${isLarge ? "text-2xl" : "text-lg"} ${color}`}>{score}</span>
      </div>
      <span className={`text-gray-500 font-medium ${isLarge ? "text-sm" : "text-xs"}`}>{label}</span>
    </div>
  )
}

export default function WebsiteTesterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [urlPath, setUrlPath] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [results, setResults] = useState<TestResults | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)
    setResults(null)

    const fullUrl = `https://${urlPath}`

    try {
      const res = await fetch("/api/test-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, url: fullUrl }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Nepodarilo sa otestovať web.")
      }

      setResults(data)
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Niečo sa pokazilo. Skúste to prosím neskôr.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Loading state
  if (isSubmitting) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card-hover border-2 border-gray-200 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
          Analyzujeme váš web...
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          Testujeme rýchlosť, SEO, prístupnosť a ďalšie parametre na mobile aj desktope. Toto môže trvať 30-60 sekúnd.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobil</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Search className="w-3.5 h-3.5" />
            <span>SEO</span>
          </div>
        </div>
      </div>
    )
  }

  // Results state
  if (results) {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card-hover border-2 border-gray-200">
        {/* Overall score */}
        <div className="text-center mb-6">
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
            Výsledky testu vášho webu
          </h3>
          <ScoreCircle score={results.overallScore} label="Celkové skóre" size="large" />
        </div>

        {/* Mobile scores */}
        {results.mobile && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mobil</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <ScoreCircle score={results.mobile.performance} label="Výkon" />
              <ScoreCircle score={results.mobile.seo} label="SEO" />
              <ScoreCircle score={results.mobile.accessibility} label="Prístupnosť" />
              <ScoreCircle score={results.mobile.bestPractices} label="Praktiky" />
            </div>
          </div>
        )}

        {/* Desktop scores */}
        {results.desktop && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Monitor className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Desktop</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <ScoreCircle score={results.desktop.performance} label="Výkon" />
              <ScoreCircle score={results.desktop.seo} label="SEO" />
              <ScoreCircle score={results.desktop.accessibility} label="Prístupnosť" />
              <ScoreCircle score={results.desktop.bestPractices} label="Praktiky" />
            </div>
          </div>
        )}

        {/* Analysis */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-6">
          <h4 className="font-heading text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Gauge className="w-4 h-4 text-primary" />
            Detailná analýza
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{results.analysis}</p>
        </div>

        {/* Email confirmation */}
        <div className="flex items-start gap-2 bg-green-50 p-3 rounded-xl border border-green-200 mb-6">
          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
          <p className="text-green-700 text-xs">
            Kompletné výsledky aj s analýzou sme vám odoslali na e-mail.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="space-y-3">
          <a
            href="/contact"
            className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-sm"
          >
            <Calendar className="w-4 h-4" />
            Dohodnúť si bezplatný hovor
          </a>
          <a
            href="tel:+421944602404"
            className="w-full bg-gray-100 text-gray-800 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Zavolať priamo: +421 944 602 404
          </a>
          <button
            onClick={() => { setResults(null); setName(""); setEmail(""); setUrlPath("") }}
            className="w-full text-primary font-bold text-sm hover:underline py-2"
          >
            Otestovať ďalší web
          </button>
        </div>
      </div>
    )
  }

  // Form state
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card-hover border-2 border-gray-200">
      <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
        Otestujte svoj aktuálny web
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Zadajte adresu vášho webu a okamžite získate skóre a detailnú analýzu s návrhmi na zlepšenie. Výsledky vám pošleme aj na e-mail.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Meno</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Jozef Mrkva"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="jozef@firma.sk"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">URL adresa webu</label>
          <div className="flex rounded-xl border-2 border-gray-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all overflow-hidden">
            <span className="bg-gray-100 text-gray-500 px-3 py-3 text-sm font-medium border-r border-gray-200 select-none shrink-0">
              https://
            </span>
            <input
              type="text"
              required
              value={urlPath}
              onChange={(e) => setUrlPath(e.target.value)}
              className="w-full px-3 py-3 outline-none"
              placeholder="www.vasweb.sk"
            />
          </div>
        </div>

        {errorMsg && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <p>{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          Otestovať web zadarmo <ArrowRight className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/contact"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Dohodnúť hovor</span>
          </a>
          <span className="hidden sm:block text-gray-200">|</span>
          <a
            href="tel:+421944602404"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+421 944 602 404</span>
          </a>
        </div>
      </form>
    </div>
  )
}
