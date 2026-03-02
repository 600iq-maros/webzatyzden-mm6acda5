import { Resend } from "resend"

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured — skipping email send.")
    return false
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: "WebZaTýždeň <info@webzatyzden.sk>",
      to,
      subject,
      html,
    })
    return true
  } catch (error) {
    console.error("Failed to send email:", error)
    return false
  }
}
