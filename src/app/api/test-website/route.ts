import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = "AIzaSyAl2vP4xlK_X6rSQ8FbUCs7vuTTQVdNR5s"
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.0-flash:generateContent?key=${GEMINI_API_KEY}`
const WEBHOOK_URL = "https://web-factory.io/api/projects/cmm6acdnx0001vj3iaewm3uf8/webhook"
const WEBHOOK_API_KEY = "wf_live_46cb5f86b87b0d94d90558104164d4de"

interface PageSpeedResult {
  performance: number
  accessibility: number
  bestPractices: number
  seo: number
  fcp: string
  lcp: string
  cls: string
  tbt: string
  speedIndex: string
  mobile: boolean
}

async function getPageSpeedData(url: string, strategy: "mobile" | "desktop"): Promise<PageSpeedResult | null> {
  try {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo`

    const res = await fetch(apiUrl, { signal: AbortSignal.timeout(60000) })
    if (!res.ok) return null

    const data = await res.json()
    const categories = data.lighthouseResult?.categories || {}
    const audits = data.lighthouseResult?.audits || {}

    return {
      performance: Math.round((categories.performance?.score || 0) * 100),
      accessibility: Math.round((categories.accessibility?.score || 0) * 100),
      bestPractices: Math.round((categories["best-practices"]?.score || 0) * 100),
      seo: Math.round((categories.seo?.score || 0) * 100),
      fcp: audits["first-contentful-paint"]?.displayValue || "N/A",
      lcp: audits["largest-contentful-paint"]?.displayValue || "N/A",
      cls: audits["cumulative-layout-shift"]?.displayValue || "N/A",
      tbt: audits["total-blocking-time"]?.displayValue || "N/A",
      speedIndex: audits["speed-index"]?.displayValue || "N/A",
      mobile: strategy === "mobile",
    }
  } catch {
    return null
  }
}

function calculateOverallScore(mobile: PageSpeedResult | null, desktop: PageSpeedResult | null): number {
  const results = [mobile, desktop].filter(Boolean) as PageSpeedResult[]
  if (results.length === 0) return 0

  const avg = (key: keyof Pick<PageSpeedResult, "performance" | "accessibility" | "bestPractices" | "seo">) =>
    Math.round(results.reduce((sum, r) => sum + r[key], 0) / results.length)

  return Math.round((avg("performance") * 0.35 + avg("seo") * 0.30 + avg("accessibility") * 0.20 + avg("bestPractices") * 0.15))
}

async function generateAnalysis(url: string, mobile: PageSpeedResult | null, desktop: PageSpeedResult | null, overallScore: number): Promise<string> {
  const mobileStr = mobile
    ? `Mobile: Performance ${mobile.performance}/100, SEO ${mobile.seo}/100, Accessibility ${mobile.accessibility}/100, Best Practices ${mobile.bestPractices}/100, FCP ${mobile.fcp}, LCP ${mobile.lcp}, CLS ${mobile.cls}, TBT ${mobile.tbt}, Speed Index ${mobile.speedIndex}`
    : "Mobile data not available"

  const desktopStr = desktop
    ? `Desktop: Performance ${desktop.performance}/100, SEO ${desktop.seo}/100, Accessibility ${desktop.accessibility}/100, Best Practices ${desktop.bestPractices}/100, FCP ${desktop.fcp}, LCP ${desktop.lcp}, CLS ${desktop.cls}, TBT ${desktop.tbt}, Speed Index ${desktop.speedIndex}`
    : "Desktop data not available"

  const prompt = `Si expert na webové stránky a konverzie. Analyzuj tieto výsledky testu webu ${url} a napíš analýzu PO SLOVENSKY.

Výsledky:
${mobileStr}
${desktopStr}
Celkové skóre: ${overallScore}/100

Napíš stručnú ale detailnú analýzu v nasledujúcom formáte (použi plain text, nie markdown):

1. CELKOVÉ HODNOTENIE - 2-3 vety o celkovom stave webu

2. ČO JE DOBRÉ - vymenuj 2-3 pozitívne veci

3. ČO TREBA ZLEPŠIŤ - vymenuj 3-5 konkrétnych problémov a ako ich opraviť, zameraj sa na veci ktoré ovplyvňujú predaj a zákazníkov

4. AKO TO OVPLYVŇUJE VÁŠ BIZNIS - 2-3 vety o tom ako tieto problémy môžu spôsobiť stratu zákazníkov

5. ODPORÚČANIE - 1-2 vety s odporúčaním

Píš jednoducho, zrozumiteľne, bez technického žargónu. Zákazník nemusí rozumieť IT.`

  try {
    const res = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
      }),
    })

    if (!res.ok) return "Analýzu sa nepodarilo vygenerovať. Náš tím vám pošle detailnú analýzu emailom."

    const data = await res.json()
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Analýzu sa nepodarilo vygenerovať."
  } catch {
    return "Analýzu sa nepodarilo vygenerovať. Náš tím vám pošle detailnú analýzu emailom."
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, url } = await request.json()

    if (!name || !email || !url) {
      return NextResponse.json({ error: "Všetky polia sú povinné." }, { status: 400 })
    }

    // Validate URL format
    try {
      new URL(url)
    } catch {
      return NextResponse.json({ error: "Zadajte platnú URL adresu (napr. https://www.example.sk)." }, { status: 400 })
    }

    // Run PageSpeed tests in parallel (mobile + desktop)
    const [mobile, desktop] = await Promise.all([
      getPageSpeedData(url, "mobile"),
      getPageSpeedData(url, "desktop"),
    ])

    if (!mobile && !desktop) {
      return NextResponse.json(
        { error: "Nepodarilo sa otestovať váš web. Skontrolujte, či je URL adresa správna a web je dostupný." },
        { status: 422 }
      )
    }

    const overallScore = calculateOverallScore(mobile, desktop)

    // Generate AI analysis
    const analysis = await generateAnalysis(url, mobile, desktop, overallScore)

    // Send results via webhook (triggers email)
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: WEBHOOK_API_KEY,
          name,
          email,
          message: `
=== VÝSLEDKY TESTU WEBU ===
Web: ${url}
Celkové skóre: ${overallScore}/100

--- MOBILE ---
${mobile ? `Výkon: ${mobile.performance}/100 | SEO: ${mobile.seo}/100 | Prístupnosť: ${mobile.accessibility}/100 | Best Practices: ${mobile.bestPractices}/100
FCP: ${mobile.fcp} | LCP: ${mobile.lcp} | CLS: ${mobile.cls} | TBT: ${mobile.tbt}` : "Test nebol dostupný"}

--- DESKTOP ---
${desktop ? `Výkon: ${desktop.performance}/100 | SEO: ${desktop.seo}/100 | Prístupnosť: ${desktop.accessibility}/100 | Best Practices: ${desktop.bestPractices}/100
FCP: ${desktop.fcp} | LCP: ${desktop.lcp} | CLS: ${desktop.cls} | TBT: ${desktop.tbt}` : "Test nebol dostupný"}

--- ANALÝZA ---
${analysis}
`,
          sourcePage: "/",
          sourceForm: "website-tester-results",
        }),
      })
    } catch {
      // Webhook failure shouldn't block results
    }

    return NextResponse.json({
      overallScore,
      mobile: mobile ? {
        performance: mobile.performance,
        accessibility: mobile.accessibility,
        bestPractices: mobile.bestPractices,
        seo: mobile.seo,
        fcp: mobile.fcp,
        lcp: mobile.lcp,
        cls: mobile.cls,
        tbt: mobile.tbt,
        speedIndex: mobile.speedIndex,
      } : null,
      desktop: desktop ? {
        performance: desktop.performance,
        accessibility: desktop.accessibility,
        bestPractices: desktop.bestPractices,
        seo: desktop.seo,
        fcp: desktop.fcp,
        lcp: desktop.lcp,
        cls: desktop.cls,
        tbt: desktop.tbt,
        speedIndex: desktop.speedIndex,
      } : null,
      analysis,
    })
  } catch (error) {
    console.error("Website test error:", error)
    return NextResponse.json({ error: "Niečo sa pokazilo. Skúste to prosím neskôr." }, { status: 500 })
  }
}
