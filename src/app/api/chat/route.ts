import { NextRequest, NextResponse } from "next/server"

const WEBHOOK_URL = "https://web-factory.io/api/projects/cmm6acdnx0001vj3iaewm3uf8/webhook"
const API_KEY = "wf_live_46cb5f86b87b0d94d90558104164d4de"

const WEBSITE_CONTEXT = `Si AI asistent pre WebZaTyzden - digitálnu agentúru, ktorá vytvára profesionálne webové stránky za 7 dní. Odpovedaj vždy po slovensky, priateľsky a stručne.

DÔLEŽITÉ PRAVIDLO: Ak sa zákazník pýta na niečo, čo nie je uvedené v tomto kontexte, povedz mu, že na túto otázku nemáš odpoveď a nech nás prosím kontaktuje:
- Telefón: +421 951 009 182
- Email: maros.kancir@gmail.com

=== INFORMÁCIE O WEBZATYZDEN ===

NÁŠE SLUŽBY:
1. Kompletný Redesign Webu - 1500€ jednorazovo
   - Moderný responzívny dizajn
   - Optimalizácia konverzného pomeru
   - Migrácia obsahu
   - SEO základ

2. Tvorba Webu na Kľúč - 2000€ jednorazovo (najpopulárnejšie)
   - Unikátny vizuálny štýl
   - Prvá verzia do 24 hodín
   - Pokročilé SEO a rýchlosť
   - Napojenie na analytiku
   - Týždenný exkluzívny prístup

3. SEO & Predajná Stratégia - individuálna cena

AKO PRACUJEME - NÁŠ PROCES:
1. Úvodný hovor - Dohodneme si hovor s majiteľom firmy, prejdeme ich aktuálny web alebo nový biznis. Vytvoríme plán ako by web mohol vyzerať a fungovať, aký je cieľ ktorý chcú dosiahnuť. Vytvoríme profil firmy aby sme ju lepšie spoznali.
2. Cenová ponuka - Na základe hovoru vypracujeme cenu a pošleme faktúru klientovi.
3. Po zaplatení - Dodáme prvú základnú verziu layoutu a zákazníckych krokov na dosiahnutie cieľa majiteľa firmy.
4. Potvrdenie alebo zamietnutie - Klient potvrdí alebo zamietne našu víziu:
   - Ak zamietnu: Vrátime 100% zaplatenej sumy.
   - Ak potvrdia: Dodáme finálny plne vyladený web do 7 dní.
5. Počas 7 dní sa ozveme ak potrebujeme objasnenie.

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

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: API_KEY,
        sourceForm: "ai-chatbot",
        sourcePage: "chatbot-widget",
        message: message,
        context: WEBSITE_CONTEXT,
        conversationHistory: conversationHistory || [],
        model: "gemini-3-flash",
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Webhook error:", response.status, errorText)
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 502 }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      response: data.response || data.message || data.answer || data.text || "Prepáčte, nepodarilo sa mi spracovať vašu otázku. Prosím kontaktujte nás na maros.kancir@gmail.com alebo +421 951 009 182.",
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
