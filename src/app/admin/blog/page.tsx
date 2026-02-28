"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { isAdminAuthenticated, logout } from "@/lib/admin-auth"
import { LayoutDashboard, FileText, Settings, LogOut, MessageSquare } from "lucide-react"

interface Post {
  id: string
  title: string
  status: string
  publishedAt: string
}

export default function AdminBlog() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push("/admin")
    } else {
      setIsAuth(true)
      fetchPosts()
    }
  }, [router])

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/admin/posts")
      if (res.ok) {
        const data = await res.json()
        setPosts(data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

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
          <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blogové články</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90">+ Nový článok</button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Načítavam články...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-medium text-gray-600 text-sm">Názov</th>
                  <th className="px-6 py-4 font-medium text-gray-600 text-sm">Dátum vydania</th>
                  <th className="px-6 py-4 font-medium text-gray-600 text-sm">Stav</th>
                  <th className="px-6 py-4 font-medium text-gray-600 text-sm text-right">Akcie</th>
                </tr>
              </thead>
              <tbody>
                {(posts ?? []).map((post) => (
                  <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">{post.title}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {post.status === 'published' ? 'Publikované' : 'Koncept'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm mr-4">Upraviť</button>
                      <button className="text-red-600 hover:text-red-800 font-medium text-sm">Zmazať</button>
                    </td>
                  </tr>
                ))}
                {posts.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      Nenašli sa žiadne články.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  )
}