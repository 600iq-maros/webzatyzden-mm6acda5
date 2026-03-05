export const metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov spoločnosti TOMAR Group s.r.o."
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 bg-background border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-primary/20">
            GDPR
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zásady ochrany osobných údajov
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">1. Úvod</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Vaše súkromie je pre nás dôležité. Tieto zásady vysvetľujú, ako zhromažďujeme, používame a chránime vaše osobné údaje v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">2. Prevádzkovateľ osobných údajov</h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p className="mb-2">Prevádzkovateľom je:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>TOMAR Group s.r.o.</strong></li>
              <li>Adresa: Prešov, Slovensko</li>
              <li>IČO: 56449046</li>
              <li>E-mail: <a href="mailto:info@webzatyzden.sk" className="text-primary hover:underline">info@webzatyzden.sk</a></li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">3. Aké údaje spracúvame?</h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p className="mb-2">Spracúvame tieto údaje, ktoré získavame cez formuláre na našej webstránke alebo prostredníctvom Facebook reklamy:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Meno a priezvisko</li>
              <li>E-mailová adresa</li>
              <li>Telefónne číslo</li>
              <li>Informácie o požadovanom termíne stretnutia</li>
              <li>IP adresa a cookies (viac nižšie)</li>
              <li>Údaje o správaní sa na stránke (cez analytické nástroje ako Meta Pixel alebo Google Analytics)</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">4. Na aký účel údaje používame?</h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p className="mb-2">Vaše údaje používame na nasledovné účely:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Spracovanie rezervácie stretnutia</li>
              <li>Odosielanie potvrdzujúcich a informačných emailov</li>
              <li>E-mail marketing (newslettery, špeciálne ponuky)</li>
              <li>Retargeting a personalizovaná reklama cez nástroje ako Facebook Pixel – na základe súhlasu so súbormi cookies</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">5. Používanie cookies a retargeting</h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p className="mb-2">Na našej webstránke používame súbory cookies, vrátane tých, ktoré slúžia na analytické a marketingové účely (napr. Facebook Pixel). Pomáhajú nám:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Zlepšovať funkcionalitu stránky</li>
              <li>Zobrazovať relevantné reklamy na platformách ako Facebook/Instagram</li>
              <li>Analyzovať návštevnosť</li>
            </ul>
            <p>
              Používaním stránky a potvrdením cookies lišty vyjadrujete súhlas so spracovaním údajov na tieto účely. Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať cez nastavenia prehliadača alebo kliknutím na &quot;Odmietnuť cookies&quot; v spodnej časti stránky.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">6. Právny základ spracovania</h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Zmluvný vzťah</strong> (napr. rezervácia stretnutia)</li>
              <li><strong>Súhlas</strong> (napr. email marketing, cookies)</li>
              <li><strong>Oprávnený záujem</strong> (napr. základná analytika pre chod stránky)</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">7. Ako dlho údaje uchovávame?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Vaše údaje uchovávame po dobu nevyhnutnú na splnenie účelu, maximálne však 7 rokov od posledného kontaktu alebo do odvolania súhlasu.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">8. Vaše práva</h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p className="mb-2">Máte právo na:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prístup k údajom</li>
              <li>Opravu nesprávnych údajov</li>
              <li>Vymazanie údajov (&quot;právo na zabudnutie&quot;)</li>
              <li>Obmedzenie spracovania</li>
              <li>Prenositeľnosť údajov</li>
              <li>Odvolanie súhlasu</li>
              <li>Podanie sťažnosti na Úrad na ochranu osobných údajov SR</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">9. Kontakt</h2>
          <p className="text-gray-600 leading-relaxed">
            V prípade otázok alebo uplatnenia práv nás kontaktujte na: <a href="mailto:info@webzatyzden.sk" className="text-primary hover:underline">info@webzatyzden.sk</a>
          </p>

        </div>
      </section>
    </div>
  )
}
