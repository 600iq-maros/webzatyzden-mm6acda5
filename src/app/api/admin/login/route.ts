import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body

    const adminPassword = process.env.ADMIN_PASSWORD || "admin123"

    if (password === adminPassword) {
      // Simple JWT-like structure for demo purposes
      const token = btoa(JSON.stringify({ role: "admin", exp: Date.now() + 86400000 }))
      return NextResponse.json({ success: true, token })
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  } catch {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 })
  }
}