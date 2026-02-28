"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { isAdminAuthenticated, logout } from "@/lib/admin-auth"
import { LayoutDashboard, FileText, Settings, LogOut, MessageSquare } from "lucide-react"

export default function AdminReviews() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push("/admin")
    } else {
      setIsAuth(true)
    }
  }, [router])

  if (!isAuth) return null

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
          <span className="font-bold text-xl text-gray-900">Admin Panel</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Prehľad
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <FileText className="w-5 h-5" /> Blogové články
          </Link>
          <Link href="/admin/reviews" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
            <MessageSquare className="w-5 h-5" /> Referencie
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <Settings className="w-5 h-5" /> Nastavenia
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={logout} className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Odhlásiť sa
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Referencie</h1>
        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
          <p className="text-gray-500 mb-4">Dáta referencií zatiaľ nie sú prepojené. Na spravovanie použite hlavný dashboard Web Factory.</p>
        </div>
      </main>
    </div>
  )
}