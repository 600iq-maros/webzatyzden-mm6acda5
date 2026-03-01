"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { isAdminAuthenticated, logout } from "@/lib/admin-auth"
import { LayoutDashboard, FileText, Settings as SettingsIcon, LogOut, MessageSquare } from "lucide-react"

export default function AdminSettings() {
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
          <Link href="/admin/reviews" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <MessageSquare className="w-5 h-5" /> Referencie
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
            <SettingsIcon className="w-5 h-5" /> Nastavenia
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Nastavenia spoločnosti</h1>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-2xl">
          <p className="text-gray-500 mb-6">Tieto údaje sa zobrazujú na webe v hlavičke, pätičke a kontaktoch. (Aktuálne iba na čítanie)</p>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">Názov firmy:</span>
              <span className="col-span-2 font-medium text-gray-900">WebZaTyzden</span>
            </div>
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">E-mail:</span>
              <span className="col-span-2 text-gray-900">info@webzatyzden.sk</span>
            </div>
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">Telefón:</span>
              <span className="col-span-2 text-gray-900">+421944602404</span>
            </div>
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">Adresa:</span>
              <span className="col-span-2 text-gray-900">Volgogradská 13, Prešov 08001</span>
            </div>
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">IČO:</span>
              <span className="col-span-2 text-gray-900">56449046</span>
            </div>
            <div className="grid grid-cols-3 py-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">DIČ:</span>
              <span className="col-span-2 text-gray-900">2122311488</span>
            </div>
            <div className="grid grid-cols-3 py-3">
              <span className="text-gray-500 font-medium">IČ DPH:</span>
              <span className="col-span-2 text-gray-900">SK2122311488</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}