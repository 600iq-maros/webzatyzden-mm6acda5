import { NextRequest, NextResponse } from "next/server"

const KNOWLEDGE_BASE: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ["cena", "cenník", "cenu", "koľko", "kolko", "stojí", "stoji", "cenová", "cenova", "cenove", "cenové", "rozpočet", "rozpocet", "suma", "platba", "faktur"],
    response: `Naše orientačné ceny sú:

• Kompletný Redesign Webu — od 1 000€ jednorázovo
• Tvorba Webu na Kľúč — od 1 200€ jednorázovo (najpopulárnejšie)
• SEO & Predajná Stratégia — individuálna cena

SEO balíčky:
• Basic — 4 blogy + 2 backlinky = 120€/mesiac
• Premium — 6 blogov + 6 backlinkov = 350€/mesiac
• Max — 20 blogov + 20 backlinkov = 1 000€/mesiac

Presná cena závisí od konkrétneho projektu. Odporúčame dohodnúť si bezplatný hovor pre presnú cenovú ponuku. Kontaktujte nás na info@webzatyzden.sk alebo +421 944 602 404.`,
  },
  {
    keywords: ["služb", "sluzb", "ponúk", "ponuk", "robíte", "robite", "čo robíte", "co robite", "poskytujete", "ponúkate"],
    response: `Ponúkame tieto služby:

1. Kompletný Redesign Webu — modernizácia existujúceho webu
2. Tvorba Webu na Kľúč — nový web od nuly podľa vašich predstáv
3. SEO optimalizácia — aby vás ľudia našli na Google
4. Google a Facebook reklamy — cielené kampane pre získanie zákazníkov
5. AI optimalizácia vyhľadávania — príprava na ChatGPT a Google Gemini
6. 30-dňový video program — videá pre sociálne siete (10 000€)

Radi vám poradíme, čo by bolo pre vás najvhodnejšie. Zavolajte nám na +421 944 602 404.`,
  },
  {
    keywords: ["proces", "ako pracujete", "ako to funguje", "postup", "kroky", "ako funguje", "priebeh"],
    response: `Náš proces je jednoduchý:

1. Úvodný hovor cez Google Meet — prejdeme váš projekt a ciele
2. Cenová ponuka a faktúra
3. Po zaplatení dodáme prvú verziu layoutu — môžete sledovať postup v reálnom čase
4. Ak sa vám prvá verzia nepáči — vrátime 100% peňazí
5. Hovor na 5. deň — posledné úpravy
6. Finálny web dodáme do 7 dní

Pracujeme vždy len s 1 klientom naraz, aby sme sa mu mohli naplno venovať.`,
  },
  {
    keywords: ["garancia", "garanciu", "záruka", "zaruka", "vrátenie", "vratenie", "peňazí", "penazi", "refund", "nespokojn"],
    response: `Ponúkame 100% garanciu vrátenia peňazí! Ak sa vám nepáči prvá základná verzia projektu, vrátime vám celú zaplatenú sumu. Bez otázok, bez problémov. Vaša spokojnosť je pre nás priorita.`,
  },
  {
    keywords: ["kontakt", "telefón", "telefon", "email", "e-mail", "zavolat", "zavolať", "adresa", "kde ste", "kde sídlite", "kde sidlite"],
    response: `Tu sú naše kontaktné údaje:

📧 Email: info@webzatyzden.sk
📱 Telefón: +421 944 602 404
📍 Adresa: Volgogradská 13, 080 01 Prešov, Slovensko
🕐 Pracovná doba: Pondelok - Piatok, 9:00 - 17:00

Neváhajte nás kontaktovať, radi vám poradíme!`,
  },
  {
    keywords: ["tím", "tim", "kto", "ľudia", "ludia", "zamestnanci", "founder", "zakladateľ", "zakladatel"],
    response: `Náš tím tvoria 3 odborníci:

• Maroš Kancír — co-founder, stratég a projektový manažér
• Tomáš Kancír — co-founder, vývojár a dizajnér
• Kseniia Faradzheva — SEO špecialistka a copywriterka

Pracujeme vždy len s 1 klientom naraz, aby sme sa mohli naplno venovať vášmu projektu.`,
  },
  {
    keywords: ["seo", "google", "vyhľadávan", "vyhladavan", "optimalizáci", "optimalizaci", "blog", "backlink"],
    response: `Naše SEO služby zahŕňajú:

• Blog writing: 20€/blog
• Backlinky z vysoko hodnotených webov: 50€/backlink
• AI optimalizácia pre ChatGPT a Google Gemini

SEO balíčky:
• Basic — 4 blogy + 2 backlinky = 120€/mesiac
• Premium — 6 blogov + 6 backlinkov = 350€/mesiac
• Max — 20 blogov + 20 backlinkov = 1 000€/mesiac

Chcete vedieť viac? Kontaktujte nás na info@webzatyzden.sk.`,
  },
  {
    keywords: ["reklam", "ads", "facebook", "instagram", "kampaň", "kampan", "marketing"],
    response: `Ponúkame nastavenie a správu reklám na Google a Facebooku. Nastavíme vám kampane tak, aby ste za svoje peniaze získali čo najviac zákazníkov.

Taktiež ponúkame 30-dňový video program za 10 000€, ktorý zahŕňa scenár, natáčanie a strih videí — aby po spustení reklám mali zákazníci plný kalendár.

Pre viac informácií nás kontaktujte na +421 944 602 404.`,
  },
  {
    keywords: ["čas", "cas", "dlho", "rýchlo", "rychlo", "termín", "termin", "kedy", "dodanie", "hotov", "deadline"],
    response: `Váš nový web dodáme do 7 dní! Prvú základnú verziu uvidíte už po zaplatení. Na 5. deň spolu prejdeme stav projektu a posledné úpravy. Finálny web je hotový do 7 dní.

Pracujeme vždy len s 1 klientom naraz, preto odporúčame neodkladať — miesta sa rýchlo zapĺňajú.`,
  },
  {
    keywords: ["redesign", "prepracovať", "prepracovat", "zmeniť", "zmenit", "upraviť", "upravit", "existujúci", "existujuci", "starý", "stary", "nový web", "novy web"],
    response: `Ponúkame kompletný redesign existujúceho webu od 1 000€. Zahŕňa:

• Moderný responzívny dizajn
• Optimalizácia pre lepší predaj
• Migrácia existujúceho obsahu
• SEO základ

Alebo tvorbu úplne nového webu na kľúč od 1 200€ s unikátnym dizajnom a pokročilým SEO.

Dohodnite si bezplatný hovor — prejdeme, čo presne potrebujete. Zavolajte na +421 944 602 404.`,
  },
  {
    keywords: ["ahoj", "dobrý deň", "dobry den", "čau", "cau", "nazdar", "zdravím", "zdravim", "ahojte", "hej"],
    response: `Dobrý deň! 👋 Vitajte na WebZaTýždeň. Som tu, aby som vám pomohol s otázkami ohľadom tvorby webov, našich služieb alebo cien. Na čom by ste chceli pracovať?`,
  },
  {
    keywords: ["ďakujem", "dakujem", "vďaka", "vdaka", "díky", "diky", "fajn", "super", "výborne", "vyborne"],
    response: `Ďakujeme! Ak budete potrebovať čokoľvek ďalšie, neváhajte sa opýtať. Prípadne nás môžete kontaktovať priamo na info@webzatyzden.sk alebo +421 944 602 404. 😊`,
  },
]

const DEFAULT_RESPONSE = `Ďakujem za vašu otázku! Na túto tému vám najlepšie poradí náš tím osobne.

Kontaktujte nás:
📧 Email: info@webzatyzden.sk
📱 Telefón: +421 944 602 404

Alebo si dohodnite bezplatný hovor na našej kontaktnej stránke. Radi vám pomôžeme!`

function findBestResponse(message: string): string {
  const lower = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const lowerOriginal = message.toLowerCase()

  let bestMatch = { score: 0, response: DEFAULT_RESPONSE }

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0
    for (const keyword of entry.keywords) {
      const normalizedKeyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      if (lower.includes(normalizedKeyword) || lowerOriginal.includes(keyword)) {
        score += keyword.length
      }
    }
    if (score > bestMatch.score) {
      bestMatch = { score, response: entry.response }
    }
  }

  return bestMatch.response
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const response = findBestResponse(message)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
