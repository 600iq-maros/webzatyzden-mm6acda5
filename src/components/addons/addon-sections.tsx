"use client"

import CookieConsentBanner from "@/components/addons/cookie-consent-banner"
import Chatbot from "@/components/addons/chatbot"

export default function AddonSections({ webhookUrl, apiKey }: { webhookUrl?: string; apiKey?: string }) {
  return (
    <>
      <CookieConsentBanner />
      <Chatbot />
    </>
  )
}
