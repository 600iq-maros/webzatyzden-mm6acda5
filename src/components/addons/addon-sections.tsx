"use client"

import CookieConsentBanner from "@/components/addons/cookie-consent-banner"
import TestimonialsSlider from "@/components/addons/testimonials-slider"
import AccordionFaq from "@/components/addons/accordion-faq"

export default function AddonSections({ webhookUrl, apiKey }: { webhookUrl?: string; apiKey?: string }) {
  return (
    <>
      <CookieConsentBanner />
      <TestimonialsSlider />
      <AccordionFaq />
    </>
  )
}
