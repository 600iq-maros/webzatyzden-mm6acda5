import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

const WEBHOOK_URL = "https://web-factory.io/api/projects/cmm6acdnx0001vj3iaewm3uf8/webhook"
const WEBHOOK_API_KEY = "wf_live_46cb5f86b87b0d94d90558104164d4de"

function customerConfirmationHtml(name: string, phone: string | undefined, message: string): string {
  return `<!DOCTYPE html>
<html lang="sk">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#1e293b;padding:28px 40px;border-radius:16px 16px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#4F46E5;border-radius:8px;padding:6px;vertical-align:middle;">
              <img src="https://api.iconify.design/lucide/rocket.svg?color=white&width=18&height=18" width="18" height="18" alt="" style="display:block;" />
            </td>
            <td style="padding-left:10px;vertical-align:middle;">
              <span style="font-family:Arial,sans-serif;font-size:20px;font-weight:800;color:#ffffff;">WebZaTýždeň</span>
            </td>
          </tr></table>
        </td>
        <td style="text-align:right;vertical-align:middle;">
          <span style="font-family:Arial,sans-serif;font-size:12px;color:#94a3b8;">Potvrdenie dopytu</span>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Hero -->
  <tr><td style="background:linear-gradient(135deg,#4F46E5,#6366f1);padding:40px 40px 44px;text-align:center;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr><td style="background:rgba(255,255,255,0.15);border-radius:50%;width:64px;height:64px;text-align:center;vertical-align:middle;">
        <span style="font-size:28px;line-height:64px;">&#10003;</span>
      </td></tr>
    </table>
    <h1 style="font-family:Arial,sans-serif;font-size:24px;color:#ffffff;margin:20px 0 8px;font-weight:800;">Ďakujeme, ${name}!</h1>
    <p style="font-family:Arial,sans-serif;font-size:15px;color:rgba(255,255,255,0.85);margin:0;line-height:1.5;">Prijali sme vašu správu a ozveme sa vám čo najskôr.</p>
  </td></tr>

  <!-- Content -->
  <tr><td style="background:#ffffff;padding:32px 40px;">

    <!-- Message recap -->
    <h2 style="font-family:Arial,sans-serif;font-size:16px;color:#1e293b;margin:0 0 16px;font-weight:700;">Vaša správa</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
      <tr><td style="padding:20px 24px;">
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#4b5563;margin:0;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
      </td></tr>
    </table>

    <hr style="border:none;border-top:1px solid #f3f4f6;margin:28px 0;">

    <!-- What happens next -->
    <h2 style="font-family:Arial,sans-serif;font-size:16px;color:#1e293b;margin:0 0 16px;font-weight:700;">Čo bude nasledovať?</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:8px 0;vertical-align:top;width:32px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#EEF2FF;border-radius:50%;width:28px;height:28px;text-align:center;vertical-align:middle;">
              <span style="font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#4F46E5;line-height:28px;">1</span>
            </td>
          </tr></table>
        </td>
        <td style="padding:8px 0 8px 12px;font-family:Arial,sans-serif;font-size:14px;color:#4b5563;line-height:1.5;">Preštudujeme si váš dopyt</td>
      </tr>
      <tr>
        <td style="padding:8px 0;vertical-align:top;width:32px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#EEF2FF;border-radius:50%;width:28px;height:28px;text-align:center;vertical-align:middle;">
              <span style="font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#4F46E5;line-height:28px;">2</span>
            </td>
          </tr></table>
        </td>
        <td style="padding:8px 0 8px 12px;font-family:Arial,sans-serif;font-size:14px;color:#4b5563;line-height:1.5;">Ozveme sa vám do 24 hodín</td>
      </tr>
      <tr>
        <td style="padding:8px 0;vertical-align:top;width:32px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#EEF2FF;border-radius:50%;width:28px;height:28px;text-align:center;vertical-align:middle;">
              <span style="font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#4F46E5;line-height:28px;">3</span>
            </td>
          </tr></table>
        </td>
        <td style="padding:8px 0 8px 12px;font-family:Arial,sans-serif;font-size:14px;color:#4b5563;line-height:1.5;">Navrhneme riešenie priamo pre vás</td>
      </tr>
    </table>

    <hr style="border:none;border-top:1px solid #f3f4f6;margin:28px 0;">

    <!-- Contact CTA -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border-radius:12px;border:1px solid #bbf7d0;">
      <tr><td style="padding:24px;text-align:center;">
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#166534;margin:0 0 16px;line-height:1.5;">Ak máte medzitým otázky, neváhajte nás kontaktovať:</p>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="padding:0 8px;">
              <a href="mailto:info@webzatyzden.sk" style="display:inline-block;padding:12px 24px;background:#4F46E5;border-radius:10px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Napísať e-mail</a>
            </td>
            <td style="padding:0 8px;">
              <a href="tel:+421944602404" style="display:inline-block;padding:12px 24px;background:#ffffff;border:2px solid #e2e8f0;border-radius:10px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#1e293b;text-decoration:none;white-space:nowrap;">+421 944 602 404</a>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#1e293b;padding:24px 40px;border-radius:0 0 16px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <p style="font-family:Arial,sans-serif;font-size:14px;color:#ffffff;margin:0;font-weight:700;">WebZaTýždeň</p>
          <p style="font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;margin:4px 0 0;">TOMAR Group s.r.o.</p>
        </td>
        <td style="text-align:right;">
          <a href="mailto:info@webzatyzden.sk" style="font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;text-decoration:none;display:block;">info@webzatyzden.sk</a>
          <a href="tel:+421944602404" style="font-family:Arial,sans-serif;font-size:11px;color:#94a3b8;text-decoration:none;display:block;margin-top:4px;white-space:nowrap;">+421 944 602 404</a>
        </td>
      </tr>
    </table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

function leadNotificationHtml(name: string, email: string, phone: string | undefined, message: string): string {
  return `<!DOCTYPE html>
<html lang="sk">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#1e293b;padding:28px 40px;border-radius:16px 16px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#4F46E5;border-radius:8px;padding:6px;vertical-align:middle;">
              <img src="https://api.iconify.design/lucide/rocket.svg?color=white&width=18&height=18" width="18" height="18" alt="" style="display:block;" />
            </td>
            <td style="padding-left:10px;vertical-align:middle;">
              <span style="font-family:Arial,sans-serif;font-size:20px;font-weight:800;color:#ffffff;">WebZaTýždeň</span>
            </td>
          </tr></table>
        </td>
        <td style="text-align:right;vertical-align:middle;">
          <span style="display:inline-block;background:#F59E0B;color:#ffffff;font-family:Arial,sans-serif;font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;text-transform:uppercase;letter-spacing:0.5px;">Nový lead</span>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Hero -->
  <tr><td style="background:linear-gradient(135deg,#F59E0B,#f97316);padding:32px 40px;text-align:center;">
    <h1 style="font-family:Arial,sans-serif;font-size:22px;color:#ffffff;margin:0 0 4px;font-weight:800;">Nový kontaktný dopyt</h1>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:rgba(255,255,255,0.85);margin:0;">z kontaktného formulára na webzatyzden.sk</p>
  </td></tr>

  <!-- Content -->
  <tr><td style="background:#ffffff;padding:32px 40px;">

    <!-- Contact details -->
    <h2 style="font-family:Arial,sans-serif;font-size:16px;color:#1e293b;margin:0 0 16px;font-weight:700;">Kontaktné údaje</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
      <tr><td style="padding:20px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:13px;color:#94a3b8;width:100px;vertical-align:top;">Meno</td>
            <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#1e293b;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:13px;color:#94a3b8;width:100px;vertical-align:top;">E-mail</td>
            <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#1e293b;"><a href="mailto:${email}" style="color:#4F46E5;text-decoration:none;font-weight:600;">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:13px;color:#94a3b8;width:100px;vertical-align:top;">Telefón</td>
            <td style="padding:6px 0;font-family:Arial,sans-serif;font-size:14px;color:#1e293b;"><a href="tel:${phone}" style="color:#4F46E5;text-decoration:none;font-weight:600;white-space:nowrap;">${phone}</a></td>
          </tr>` : ""}
        </table>
      </td></tr>
    </table>

    <hr style="border:none;border-top:1px solid #f3f4f6;margin:24px 0;">

    <!-- Message -->
    <h2 style="font-family:Arial,sans-serif;font-size:16px;color:#1e293b;margin:0 0 16px;font-weight:700;">Správa</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
      <tr><td style="padding:20px 24px;">
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#4b5563;margin:0;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
      </td></tr>
    </table>

    <!-- Quick actions -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 0;">
      <tr>
        <td style="text-align:center;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
            <tr>
              <td style="padding:0 6px;">
                <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;background:#4F46E5;border-radius:10px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Odpovedať na e-mail</a>
              </td>
              ${phone ? `<td style="padding:0 6px;">
                <a href="tel:${phone}" style="display:inline-block;padding:12px 24px;background:#ffffff;border:2px solid #e2e8f0;border-radius:10px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#1e293b;text-decoration:none;white-space:nowrap;">Zavolať ${phone}</a>
              </td>` : ""}
            </tr>
          </table>
        </td>
      </tr>
    </table>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#1e293b;padding:24px 40px;border-radius:0 0 16px 16px;">
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#94a3b8;margin:0;text-align:center;">Interné upozornenie z webzatyzden.sk</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vyplňte všetky povinné polia." }, { status: 400 })
    }

    // Send confirmation email to the customer
    await sendEmail({
      to: email,
      subject: "Ďakujeme za váš dopyt — WebZaTýždeň",
      html: customerConfirmationHtml(name, phone, message),
    })

    // Send lead notification to team
    const leadHtml = leadNotificationHtml(name, email, phone, message)

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
