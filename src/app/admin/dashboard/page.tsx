"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { isAdminAuthenticated, logout } from "@/lib/admin-auth"
import { LayoutDashboard, FileText, Settings, LogOut, MessageSquare } from "lucide-react"

export default function AdminDashboard() {
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
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
            <LayoutDashboard className="w-5 h-5" /> Prehľad
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <FileText className="w-5 h-5" /> Blogové články
          </Link>
          <Link href="/admin/reviews" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Prehľad</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-gray-500 font-medium">Blogové články</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Správa obsahu</h3>
            <Link href="/admin/blog" className="text-sm text-blue-600 font-medium mt-4 inline-block hover:underline">Prejsť na články →</Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <p className="text-gray-500 font-medium">Referencie</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Schvaľovanie recenzií</h3>
            <Link href="/admin/reviews" className="text-sm text-green-600 font-medium mt-4 inline-block hover:underline">Spravovať →</Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Settings className="w-6 h-6" />
            </div>
            <p className="text-gray-500 font-medium">Systém</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Nastavenia webu</h3>
            <Link href="/admin/settings" className="text-sm text-purple-600 font-medium mt-4 inline-block hover:underline">Zobraziť →</Link>
          </div>
        </div>
      </main>
    </div>
  )
}