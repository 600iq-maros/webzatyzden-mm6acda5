// Note: JSON file writes work in development but do NOT persist across Vercel deployments. For production, use a database.
import { NextResponse } from "next/server"
import fs from "node:fs"
import path from "node:path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "posts.json")
    const fileData = fs.readFileSync(filePath, "utf8")
    const posts = JSON.parse(fileData)
    return NextResponse.json(posts)
  } catch {
    return NextResponse.json({ error: "Failed to read posts" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const filePath = path.join(process.cwd(), "src", "data", "posts.json")
    const fileData = fs.readFileSync(filePath, "utf8")
    const posts = JSON.parse(fileData)
    
    const newPost = {
      id: Date.now().toString(),
      ...body
    }
    
    posts.push(newPost)
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2))
    
    return NextResponse.json({ success: true, post: newPost })
  } catch {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}