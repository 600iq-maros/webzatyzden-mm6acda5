import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: (Number(process.env.SMTP_PORT) || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP not configured — skipping email send. Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local")
    return false
  }

  try {
    await transporter.sendMail({
      from: `"WebZaTýždeň" <${process.env.SMTP_USER}>`,
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
