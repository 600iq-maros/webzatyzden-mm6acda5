import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

const WEBHOOK_URL = "https://web-factory.io/api/projects/cmm6acdnx0001vj3iaewm3uf8/webhook"
const WEBHOOK_API_KEY = "wf_live_46cb5f86b87b0d94d90558104164d4de"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vyplňte všetky povinné polia." }, { status: 400 })
    }

    // Send confirmation email to the customer via SMTP
    await sendEmail({
      to: email,
      subject: "Ďakujeme za váš dopyt — WebZaTýždeň",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a;">Ďakujeme, ${name}!</h2>
          <p style="color: #555; line-height: 1.6;">
            Prijali sme vašu správu a budeme vás kontaktovať čo najskôr.
          </p>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0; color: #333;"><strong>Vaša správa:</strong></p>
            <p style="margin: 0; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="color: #555; line-height: 1.6;">
            Ak máte medzitým akékoľvek otázky, neváhajte nás kontaktovať na
            <a href="mailto:info@webzatyzden.sk" style="color: #6366f1;">info@webzatyzden.sk</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 12px;">WebZaTýždeň — Profesionálne webové stránky</p>
        </div>
      `,
    })

    // Send lead notification to team via SMTP
    const leadHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a1a;">Nový kontaktný dopyt</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888; width: 120px;">Meno:</td><td style="padding: 8px 0; color: #333;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">E-mail:</td><td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Telefón:</td><td style="padding: 8px 0; color: #333;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
        </table>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 8px 0; color: #333;"><strong>Správa:</strong></p>
          <p style="margin: 0; color: #555;">${message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    `

    await Promise.all([
      sendEmail({ to: "maros@webzatyzden.sk", subject: `Nový dopyt od ${name}`, html: leadHtml }),
      sendEmail({ to: "tomas@webzatyzden.sk", subject: `Nový dopyt od ${name}`, html: leadHtml }),
    ])

    // Send to WebFactory webhook for CRM tracking
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: WEBHOOK_API_KEY,
          name,
          email,
          phone,
          message,
          sourcePage: "/contact",
          sourceForm: "contact-form",
        }),
      })
    } catch {
      // Webhook failure shouldn't block the response
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Nepodarilo sa odoslať správu." }, { status: 500 })
  }
}
