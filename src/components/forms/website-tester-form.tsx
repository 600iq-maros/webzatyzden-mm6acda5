"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, AlertCircle, Phone, Loader2, Gauge, Search, Smartphone, Monitor, Calendar, X } from "lucide-react"

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
      <div className={`${isLarge ? "w-24 h-24" : "w-16 h-16"} rounded-full border-2 ${bgColor} flex items-center justify-center`}>
        <span className={`font-heading font-extrabold ${isLarge ? "text-3xl" : "text-xl"} ${color}`}>{score}</span>
      </div>
      <span className={`text-gray-500 font-medium ${isLarge ? "text-sm" : "text-xs"}`}>{label}</span>
    </div>
  )
}

function ScoreBar({ score, label }: { score: number; label: string }) {
  const color = score >= 90 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500"
  const textColor = score >= 90 ? "text-green-600" : score >= 50 ? "text-yellow-600" : "text-red-600"

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className={`text-sm font-bold ${textColor}`}>{score}/100</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color} transition-all duration-1000`} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}

export function WebsiteTestResults({ results, onReset }: { results: TestResults; onReset: () => void }) {
  return (
    <section className="py-16 bg-gray-50 border-y-2 border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Výsledky testu vášho webu
          </h2>
          <button
            onClick={onReset}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Overall Score */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-card text-center">
            <ScoreCircle score={results.overallScore} label="Celkové skóre" size="large" />
            <p className="text-gray-500 text-xs mt-4">
              {results.overallScore >= 80 ? "Dobrý základ, ale stále je priestor na zlepšenie." :
               results.overallScore >= 50 ? "Váš web potrebuje niekoľko dôležitých úprav." :
               "Váš web výrazne zaostáva za konkurenciou."}
            </p>
          </div>

          {/* Middle: Score Bars */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-card space-y-5">
            {results.mobile && (
              <>
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mobil</span>
                </div>
                <ScoreBar score={results.mobile.performance} label="Výkon" />
                <ScoreBar score={results.mobile.seo} label="SEO" />
                <ScoreBar score={results.mobile.accessibility} label="Prístupnosť" />
                <ScoreBar score={results.mobile.bestPractices} label="Osvedčené postupy" />
              </>
            )}
          </div>

          {/* Right: Desktop Scores */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-card space-y-5">
            {results.desktop && (
              <>
                <div className="flex items-center gap-2 mb-1">
                  <Monitor className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Desktop</span>
                </div>
                <ScoreBar score={results.desktop.performance} label="Výkon" />
                <ScoreBar score={results.desktop.seo} label="SEO" />
                <ScoreBar score={results.desktop.accessibility} label="Prístupnosť" />
                <ScoreBar score={results.desktop.bestPractices} label="Osvedčené postupy" />
              </>
            )}
          </div>
        </div>

        {/* Analysis */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-card mt-8">
          <h3 className="font-heading text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Gauge className="w-5 h-5 text-primary" />
            Detailná analýza vášho webu
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{results.analysis}</p>
        </div>

        {/* Email confirmation */}
        <div className="flex items-start gap-2 bg-green-50 p-4 rounded-xl border border-green-200 mt-6">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-green-700 text-sm">
            Kompletné výsledky aj s analýzou sme vám odoslali na e-mail.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <a
            href="/contact"
            className="bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Dohodnúť si bezplatný hovor
          </a>
          <a
            href="tel:+421944602404"
            className="bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Zavolať priamo: +421 944 602 404
          </a>
        </div>
      </div>
    </section>
  )
}

export default function WebsiteTesterForm({ onResults }: { onResults?: (results: TestResults) => void }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [urlPath, setUrlPath] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

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

      if (onResults) {
        onResults(data)
      }
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
