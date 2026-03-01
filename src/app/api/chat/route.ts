import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = "AIzaSyAl2vP4xlK_X6rSQ8FbUCs7vuTTQVdNR5s"
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.0-flash:generateContent?key=${GEMINI_API_KEY}`

const WEBSITE_CONTEXT = `Si AI asistent pre WebZaTyzden - digitálnu agentúru, ktorá vytvára profesionálne webové stránky za 7 dní. Odpovedaj vždy po slovensky, priateľsky a stručne.

DÔLEŽITÉ PRAVIDLO: Ak sa zákazník pýta na niečo, čo nie je uvedené v tomto kontexte, povedz mu, že na túto otázku nemáš odpoveď a nech nás prosím kontaktuje:
- Telefón: +421 951 009 182
- Email: maros.kancir@gmail.com

=== INFORMÁCIE O WEBZATYZDEN ===

KTO SME:
WebZaTyzden je digitálna agentúra zameraná na tvorbu profesionálnych webových stránok. Náš tím tvoria 3 ľudia: Maroš Kancír (co-founder), Tomáš Kancír (co-founder) a Kseniia Faradzheva (SEO špecialistka a copywriterka).

NÁŠE SLUŽBY:
1. Kompletný Redesign Webu - priemerne od 1 000€ jednorázovo
   - Moderný responzívny dizajn
   - Optimalizácia konverzného pomeru
   - Migrácia obsahu
   - SEO základ

2. Tvorba Webu na Kľúč - priemerne od 1 200€ jednorázovo (najpopulárnejšie)
   - Unikátny vizuálny štýl
   - Prvá verzia do 24 hodín
   - Pokročilé SEO a rýchlosť
   - Napojenie na analytiku
   - Týždenný exkluzívny prístup

POZNÁMKA K CENÁM: Uvedené ceny sú priemerné. Presná cena závisí od konkrétneho projektu a všetkého, čo je potrebné pridať, vyvinúť alebo zmeniť. Odporúčame nás kontaktovať alebo si dohodnúť hovor pre presnú cenu.

3. SEO & Predajná Stratégia - individuálna cena

AKO PRACUJEME - NÁŠ PROCES:
1. Úvodný hovor cez Google Meet - Väčšinou sa na hovor pripojíme ako celý tím. Prejdeme váš aktuálny web alebo nový biznis. Vytvoríme plán ako by web mohol vyzerať a fungovať, aký je cieľ ktorý chcete dosiahnuť.
2. Cenová ponuka - Na základe hovoru vypracujeme cenu a pošleme faktúru klientovi.
3. Po zaplatení - Dodáme prvú základnú verziu layoutu. Klient dostane prístup k dočasnému webu, kde môže v reálnom čase sledovať postup prác, pridávať komentáre a zdieľať web s priateľmi pre spätnú väzbu.
4. Potvrdenie alebo zamietnutie - Klient potvrdí alebo zamietne našu víziu:
   - Ak zamietnu: Vrátime 100% zaplatenej sumy.
   - Ak potvrdia: Pokračujeme vo vývoji.
5. Hovor na 5. deň cez Google Meet - Spolu prejdeme aktuálny stav webu a klient môže navrhnúť posledné zmeny a vylepšenia.
6. Dodáme finálny plne vyladený web do 7 dní. Počas práce sa ozveme ak potrebujeme objasnenie.

GARANCIA: 100% vrátenie peňazí ak klient zamietne prvú základnú verziu projektu.

EXKLUZÍVNY PRÍSTUP: Pracujeme vždy len s 1 klientom naraz, čo zaručuje maximálnu pozornosť a kvalitu.

SEO SLUŽBY:
- Blog writing: 20€/blog
- Backlinky z vysoko hodnotených webov: 50€/backlink
- AI optimalizácia vyhľadávania (ChatGPT, Google Gemini)

SEO BALÍČKY:
1. Basic balíček - 4 blogy, 2 backlinky = 120€/mesiac
2. Premium balíček - 6 blogov, 6 backlinkov = 350€/mesiac
3. Max balíček - 20 blogov, 20 backlinkov = 1000€/mesiac
Klient si môže pridať ďalšie blogy alebo backlinky podľa potreby.

ĎALŠIE SLUŽBY:
- Google a Facebook reklamy
- 30-dňový video program - 10 000€
  Zahŕňa: Scenár, natáčanie a strih videí pre klienta, aby po spustení Facebook reklám mali plný kalendár.

KONTAKTNÉ ÚDAJE:
- Email: maros.kancir@gmail.com
- Telefón: +421 951 009 182
- Adresa: Volgogradská 13, 080 01 Prešov, Slovensko
- Pracovná doba: Pondelok - Piatok, 9:00 - 17:00

WEBOVÁ STRÁNKA: webzatyzden.sk
`

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = []

    if (conversationHistory && Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory) {
        contents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        })
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    })

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: WEBSITE_CONTEXT }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Gemini API error:", response.status, errorText)
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 502 }
      )
    }

    const data = await response.json()
    const aiResponse =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Prepáčte, nepodarilo sa mi spracovať vašu otázku. Prosím kontaktujte nás na maros.kancir@gmail.com alebo +421 951 009 182."

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
