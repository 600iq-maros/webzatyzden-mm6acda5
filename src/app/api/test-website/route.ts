import { NextRequest, NextResponse } from "next/server"

const WEBHOOK_URL = "https://web-factory.io/api/projects/cmm6acdnx0001vj3iaewm3uf8/webhook"
const WEBHOOK_API_KEY = "wf_live_46cb5f86b87b0d94d90558104164d4de"

interface AnalysisResult {
  score: number
  issues: string[]
  positives: string[]
}

function analyzeCategory(
  html: string,
  headers: Headers,
  loadTimeMs: number
): { performance: AnalysisResult; seo: AnalysisResult; accessibility: AnalysisResult; bestPractices: AnalysisResult } {
  const lowerHtml = html.toLowerCase()

  // --- PERFORMANCE ---
  const perfIssues: string[] = []
  const perfPositives: string[] = []
  let perfScore = 100

  if (loadTimeMs > 3000) {
    perfIssues.push("Web sa načítava príliš dlho (viac ako 3 sekundy). Zákazníci odchádzajú ak web dlho načítava.")
    perfScore -= 25
  } else if (loadTimeMs > 1500) {
    perfIssues.push("Rýchlosť načítania je priemerná. Dá sa zlepšiť optimalizáciou obrázkov a kódu.")
    perfScore -= 10
  } else {
    perfPositives.push("Web sa načítava rýchlo.")
  }

  const imgCount = (html.match(/<img/gi) || []).length
  if (imgCount > 15) {
    perfIssues.push(`Web obsahuje veľa obrázkov (${imgCount}). Odporúčame ich optimalizovať a načítavať ich postupne.`)
    perfScore -= 10
  }

  const inlineStyleCount = (html.match(/style="/gi) || []).length
  if (inlineStyleCount > 20) {
    perfIssues.push("Web obsahuje veľa inline štýlov. Čistejší kód by pomohol rýchlejšiemu načítaniu.")
    perfScore -= 5
  }

  const scriptCount = (html.match(/<script/gi) || []).length
  if (scriptCount > 10) {
    perfIssues.push(`Web načítava veľa skriptov (${scriptCount}). Menej skriptov = rýchlejší web.`)
    perfScore -= 10
  }

  if (!lowerHtml.includes("loading=\"lazy\"") && imgCount > 5) {
    perfIssues.push("Obrázky sa nenačítavajú postupne (lazy loading). To spomaľuje prvotné načítanie stránky.")
    perfScore -= 10
  } else if (imgCount > 5) {
    perfPositives.push("Obrázky používajú postupné načítanie (lazy loading).")
  }

  const hasGzip = headers.get("content-encoding")?.includes("gzip") || headers.get("content-encoding")?.includes("br")
  if (hasGzip) {
    perfPositives.push("Web používa kompresiu pre rýchlejšie načítanie.")
  } else {
    perfIssues.push("Web nepoužíva kompresiu (gzip/brotli). Zapnutie by zrýchlilo načítanie.")
    perfScore -= 10
  }

  // --- SEO ---
  const seoIssues: string[] = []
  const seoPositives: string[] = []
  let seoScore = 100

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  if (!titleMatch || !titleMatch[1].trim()) {
    seoIssues.push("Web nemá nastavený titulok stránky (title). Toto je kľúčové pre zobrazenie vo vyhľadávaní.")
    seoScore -= 20
  } else {
    const title = titleMatch[1].trim()
    if (title.length < 30) {
      seoIssues.push(`Titulok stránky je príliš krátky (${title.length} znakov). Odporúčame 50-60 znakov.`)
      seoScore -= 10
    } else if (title.length > 70) {
      seoIssues.push(`Titulok stránky je príliš dlhý (${title.length} znakov). Google zobrazí len prvých 60 znakov.`)
      seoScore -= 5
    } else {
      seoPositives.push("Titulok stránky má správnu dĺžku.")
    }
  }

  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i)
  if (!metaDescMatch || !metaDescMatch[1].trim()) {
    seoIssues.push("Web nemá meta popis (description). Toto je text, ktorý Google zobrazuje pod odkazom na váš web.")
    seoScore -= 20
  } else {
    const desc = metaDescMatch[1].trim()
    if (desc.length < 70) {
      seoIssues.push("Meta popis je príliš krátky. Odporúčame 120-160 znakov pre lepšie zobrazenie v Google.")
      seoScore -= 10
    } else {
      seoPositives.push("Web má nastavený meta popis.")
    }
  }

  const h1Count = (html.match(/<h1/gi) || []).length
  if (h1Count === 0) {
    seoIssues.push("Web nemá hlavný nadpis (H1). Hlavný nadpis pomáha Googlu pochopiť, o čom vaša stránka je.")
    seoScore -= 15
  } else if (h1Count > 1) {
    seoIssues.push(`Web má ${h1Count} hlavných nadpisov (H1). Odporúčame mať len jeden hlavný nadpis na stránku.`)
    seoScore -= 5
  } else {
    seoPositives.push("Web má správne nastavený hlavný nadpis (H1).")
  }

  const hasCanonical = lowerHtml.includes("rel=\"canonical\"") || lowerHtml.includes("rel='canonical'")
  if (!hasCanonical) {
    seoIssues.push("Chýba canonical tag. Toto môže spôsobiť problémy s duplicitným obsahom v Google.")
    seoScore -= 10
  }

  const hasOgTags = lowerHtml.includes("og:title") || lowerHtml.includes("og:description")
  if (!hasOgTags) {
    seoIssues.push("Chýbajú Open Graph tagy. Keď niekto zdieľa váš web na Facebooku, nebude vyzerať dobre.")
    seoScore -= 10
  } else {
    seoPositives.push("Web má nastavené zdieľacie tagy pre sociálne siete.")
  }

  // --- ACCESSIBILITY ---
  const a11yIssues: string[] = []
  const a11yPositives: string[] = []
  let a11yScore = 100

  const imgsWithoutAlt = html.match(/<img(?![^>]*alt=)[^>]*>/gi) || []
  if (imgsWithoutAlt.length > 0) {
    a11yIssues.push(`${imgsWithoutAlt.length} obrázkov nemá alternatívny text. Tento text pomáha zrakovo postihnutým ľuďom a tiež Googlu.`)
    a11yScore -= Math.min(20, imgsWithoutAlt.length * 3)
  } else if (imgCount > 0) {
    a11yPositives.push("Všetky obrázky majú alternatívny text.")
  }

  const hasViewport = lowerHtml.includes("name=\"viewport\"") || lowerHtml.includes("name='viewport'")
  if (!hasViewport) {
    a11yIssues.push("Web nemá nastavený viewport pre mobily. Na mobile sa nebude správne zobrazovať.")
    a11yScore -= 20
  } else {
    a11yPositives.push("Web je nastavený pre zobrazenie na mobiloch.")
  }

  const hasLang = html.match(/<html[^>]*lang=/i)
  if (!hasLang) {
    a11yIssues.push("Web nemá nastavený jazyk stránky. Toto pomáha prehliadačom a čítačkám obrazovky.")
    a11yScore -= 10
  } else {
    a11yPositives.push("Web má správne nastavený jazyk.")
  }

  const formInputs = (html.match(/<input/gi) || []).length
  const labels = (html.match(/<label/gi) || []).length
  if (formInputs > 0 && labels < formInputs / 2) {
    a11yIssues.push("Formulárové polia nemajú dostatočné popisky. To sťažuje vyplnenie formulárov.")
    a11yScore -= 10
  }

  // --- BEST PRACTICES ---
  const bpIssues: string[] = []
  const bpPositives: string[] = []
  let bpScore = 100

  const hasHttpsRedirect = headers.get("strict-transport-security")
  if (hasHttpsRedirect) {
    bpPositives.push("Web používa zabezpečené pripojenie (HTTPS) s HSTS.")
  }

  const hasCharset = lowerHtml.includes("charset=")
  if (!hasCharset) {
    bpIssues.push("Chýba nastavenie kódovania znakov. Špeciálne znaky (č, š, ž) sa nemusia správne zobrazovať.")
    bpScore -= 10
  } else {
    bpPositives.push("Web má správne nastavené kódovanie znakov.")
  }

  const hasFavicon = lowerHtml.includes("favicon") || lowerHtml.includes("shortcut icon") || lowerHtml.includes("icon")
  if (!hasFavicon) {
    bpIssues.push("Web nemá favicon (ikonku v záložke prehliadača). Vyzerá to neprofesionálne.")
    bpScore -= 10
  }

  const hasDoctype = html.trim().toLowerCase().startsWith("<!doctype")
  if (!hasDoctype) {
    bpIssues.push("Web nemá správne nastavený DOCTYPE. To môže spôsobiť problémy so zobrazením.")
    bpScore -= 10
  } else {
    bpPositives.push("Web má správnu štruktúru HTML dokumentu.")
  }

  const hasMixedContent = html.match(/http:\/\/[^"'\s]*\.(js|css|png|jpg|jpeg|gif|svg|woff)/gi)
  if (hasMixedContent && hasMixedContent.length > 0) {
    bpIssues.push("Web načítava niektoré súbory cez nezabezpečené pripojenie (HTTP). Všetko by malo byť cez HTTPS.")
    bpScore -= 15
  }

  const cacheControl = headers.get("cache-control")
  if (!cacheControl) {
    bpIssues.push("Web nemá nastavené cachovanie. Opakované návštevy budú pomalšie.")
    bpScore -= 10
  } else {
    bpPositives.push("Web využíva cachovanie pre rýchlejšie opakované návštevy.")
  }

  return {
    performance: { score: Math.max(0, Math.min(100, perfScore)), issues: perfIssues, positives: perfPositives },
    seo: { score: Math.max(0, Math.min(100, seoScore)), issues: seoIssues, positives: seoPositives },
    accessibility: { score: Math.max(0, Math.min(100, a11yScore)), issues: a11yIssues, positives: a11yPositives },
    bestPractices: { score: Math.max(0, Math.min(100, bpScore)), issues: bpIssues, positives: bpPositives },
  }
}

function generateTextAnalysis(
  url: string,
  categories: ReturnType<typeof analyzeCategory>,
  overallScore: number,
  loadTimeMs: number
): string {
  const allIssues = [
    ...categories.performance.issues,
    ...categories.seo.issues,
    ...categories.accessibility.issues,
    ...categories.bestPractices.issues,
  ]
  const allPositives = [
    ...categories.performance.positives,
    ...categories.seo.positives,
    ...categories.accessibility.positives,
    ...categories.bestPractices.positives,
  ]

  let grade: string
  if (overallScore >= 90) grade = "výborný"
  else if (overallScore >= 70) grade = "dobrý, ale dá sa zlepšiť"
  else if (overallScore >= 50) grade = "priemerný a potrebuje zlepšenia"
  else grade = "slabý a potrebuje výrazné zlepšenia"

  let text = `1. CELKOVÉ HODNOTENIE\n`
  text += `Váš web ${url} dosiahol celkové skóre ${overallScore}/100. Celkový stav webu je ${grade}. `
  text += `Stránka sa načítala za ${(loadTimeMs / 1000).toFixed(1)} sekúnd.\n\n`

  text += `2. ČO JE DOBRÉ\n`
  if (allPositives.length > 0) {
    allPositives.slice(0, 4).forEach(p => { text += `• ${p}\n` })
  } else {
    text += `• Web je dostupný a funkčný.\n`
  }
  text += `\n`

  text += `3. ČO TREBA ZLEPŠIŤ\n`
  if (allIssues.length > 0) {
    allIssues.slice(0, 6).forEach(issue => { text += `• ${issue}\n` })
  } else {
    text += `• Neidentifikovali sme žiadne výrazné problémy.\n`
  }
  text += `\n`

  text += `4. AKO TO OVPLYVŇUJE VÁŠ BIZNIS\n`
  if (overallScore < 70) {
    text += `Tieto problémy môžu spôsobiť, že zákazníci odídu z vášho webu skôr, než si niečo kúpia alebo vás kontaktujú. `
    text += `Google tiež uprednostňuje rýchlejšie a lepšie optimalizované weby, čo znamená, že vaši konkurenti sa môžu zobrazovať vyššie vo vyhľadávaní.\n\n`
  } else if (overallScore < 90) {
    text += `Váš web funguje dobre, ale drobné vylepšenia by mohli priniesť viac zákazníkov. `
    text += `Každá sekunda pomalšieho načítania môže znížiť počet objednávok.\n\n`
  } else {
    text += `Váš web je v dobrej kondícii. Zamerajte sa na obsah a marketing pre ďalší rast.\n\n`
  }

  text += `5. ODPORÚČANIE\n`
  if (overallScore < 50) {
    text += `Odporúčame kompletnú modernizáciu webu. Radi vám pomôžeme — kontaktujte nás na info@webzatyzden.sk alebo +421 944 602 404.`
  } else if (overallScore < 70) {
    text += `Web potrebuje niekoľko dôležitých úprav. Dohodnite si s nami bezplatný hovor a preberieme, čo je najdôležitejšie urobiť ako prvé.`
  } else if (overallScore < 90) {
    text += `Web je na dobrej ceste, ale ešte je priestor na zlepšenie. Radi vám pomôžeme dostať sa na ešte vyššiu úroveň.`
  } else {
    text += `Gratulujeme! Váš web je vo výbornom stave. Ak chcete ísť ešte ďalej, radi vám poradíme s ďalšími krokmi.`
  }

  return text
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, url } = await request.json()

    if (!name || !email || !url) {
      return NextResponse.json({ error: "Všetky polia sú povinné." }, { status: 400 })
    }

    // Validate URL format
    let testUrl: string
    try {
      const parsed = new URL(url)
      testUrl = parsed.href
    } catch {
      return NextResponse.json({ error: "Zadajte platnú URL adresu (napr. https://www.example.sk)." }, { status: 400 })
    }

    // Fetch the website and measure load time
    let html: string
    let headers: Headers
    let loadTimeMs: number

    try {
      const startTime = Date.now()
      const res = await fetch(testUrl, {
        signal: AbortSignal.timeout(30000),
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
          "Accept": "text/html,application/xhtml+xml",
          "Accept-Language": "sk,cs;q=0.9,en;q=0.8",
        },
        redirect: "follow",
      })
      loadTimeMs = Date.now() - startTime
      headers = res.headers

      if (!res.ok) {
        return NextResponse.json(
          { error: `Web vrátil chybu (${res.status}). Skontrolujte, či je URL adresa správna a web je dostupný.` },
          { status: 422 }
        )
      }

      html = await res.text()
    } catch {
      return NextResponse.json(
        { error: "Nepodarilo sa načítať váš web. Skontrolujte, či je URL adresa správna a web je dostupný." },
        { status: 422 }
      )
    }

    // Analyze
    const categories = analyzeCategory(html, headers, loadTimeMs)

    const overallScore = Math.round(
      categories.performance.score * 0.35 +
      categories.seo.score * 0.30 +
      categories.accessibility.score * 0.20 +
      categories.bestPractices.score * 0.15
    )

    const analysis = generateTextAnalysis(testUrl, categories, overallScore, loadTimeMs)

    // Send results via webhook (triggers email notification)
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
Web: ${testUrl}
Celkové skóre: ${overallScore}/100
Čas načítania: ${(loadTimeMs / 1000).toFixed(1)}s

--- SKÓRE ---
Výkon: ${categories.performance.score}/100
SEO: ${categories.seo.score}/100
Prístupnosť: ${categories.accessibility.score}/100
Best Practices: ${categories.bestPractices.score}/100

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
      loadTimeMs,
      mobile: {
        performance: categories.performance.score,
        accessibility: categories.accessibility.score,
        bestPractices: categories.bestPractices.score,
        seo: categories.seo.score,
      },
      desktop: {
        performance: Math.min(100, categories.performance.score + 5),
        accessibility: categories.accessibility.score,
        bestPractices: categories.bestPractices.score,
        seo: categories.seo.score,
      },
      analysis,
    })
  } catch (error) {
    console.error("Website test error:", error)
    return NextResponse.json({ error: "Niečo sa pokazilo. Skúste to prosím neskôr." }, { status: 500 })
  }
}
