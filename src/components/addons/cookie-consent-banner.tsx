"use client"

import { useState, useEffect } from "react"

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState({ essential: true, analytics: false, marketing: false });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = { essential: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie-consent", JSON.stringify(fullConsent));
    closeBanner();
  };

  const handleDeclineAll = () => {
    const minConsent = { essential: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie-consent", JSON.stringify(minConsent));
    closeBanner();
  };

  const handleSavePrefs = () => {
    const customConsent = { ...prefs, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie-consent", JSON.stringify(customConsent));
    closeBanner();
  };

  const closeBanner = () => {
    setIsAnimating(false);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[9999] p-4 transition-all duration-500 transform ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-8">
          {!showPrefs ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Vaše súkromie je pre nás dôležité</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Používame súbory cookies a podobné technológie na personalizáciu obsahu, prispôsobenie reklám a zlepšenie vášho zážitku. Kliknutím na &quot;Prijať všetky&quot; súhlasíte s používaním cookies. Viac informácií nájdete v našich <a href="/ochrana-osobnych-udajov" className="text-blue-600 font-medium hover:underline">Zásadách ochrany osobných údajov</a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowPrefs(true)}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors order-3 sm:order-1"
                >
                  Nastavenia
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors order-2 sm:order-2"
                >
                  Odmietnuť
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm transition-all order-1 sm:order-3"
                >
                  Prijať všetky
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nastavenia cookies</h3>
                  <p className="text-sm text-gray-500">Vyberte, ktoré cookies chcete povoliť.</p>
                </div>
                <button
                  onClick={() => setShowPrefs(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="pr-4">
                    <p className="font-bold text-gray-900 text-sm">Nevyhnutné cookies</p>
                    <p className="text-xs text-gray-500">Potrebné pre základnú funkčnosť a bezpečnosť stránky.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-not-allowed opacity-50">
                    <div className="w-11 h-6 bg-blue-600 rounded-full"></div>
                    <div className="absolute left-6 w-4 h-4 bg-white rounded-full transition"></div>
                  </div>
                </div>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="pr-4">
                    <p className="font-bold text-gray-900 text-sm">Analytické cookies</p>
                    <p className="text-xs text-gray-500">Pomáhajú nám zlepšovať stránku tým, že zbierajú informácie o jej používaní.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={prefs.analytics}
                      onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </div>
                </label>

                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="pr-4">
                    <p className="font-bold text-gray-900 text-sm">Marketingové cookies</p>
                    <p className="text-xs text-gray-500">Používajú sa na zobrazovanie relevantných reklám podľa vašich záujmov.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={prefs.marketing}
                      onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </div>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setShowPrefs(false)}
                  className="px-6 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Zrušiť
                </button>
                <button
                  onClick={handleSavePrefs}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm transition-all"
                >
                  Uložiť výber
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
