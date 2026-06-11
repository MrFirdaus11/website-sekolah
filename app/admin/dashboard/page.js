'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LayoutDashboard, Newspaper, Image, Users, MessageSquare, LogOut, User, School } from 'lucide-react'
import { useToastStore } from '@/store/useToastStore'

const stats = [
  { label: 'Total Berita', icon: Newspaper, color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20', count: '...' },
  { label: 'Pendaftar PPDB', icon: Users, color: 'text-green-600 bg-green-50 dark:bg-green-900/20', count: '...' },
  { label: 'Pesan Masuk', icon: MessageSquare, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20', count: '...' },
  { label: 'Data Alumni', icon: School, color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20', count: '...' },
]

export default function DashboardPage() {
  const router = useRouter()
  const addToast = useToastStore((s) => s.addToast)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [dataCounts, setDataCounts] = useState({})

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/auth/get-session')
        const json = await res.json()
        if (!json.user) {
          router.push('/admin/login')
          return
        }
        setUser(json.user)

        const [berita, ppdb, kontak, alumni] = await Promise.all([
          fetch('/api/berita').then(r => r.json()),
          fetch('/api/ppdb').then(r => r.json()),
          fetch('/api/kontak').then(r => r.json()),
          fetch('/api/alumni').then(r => r.json()),
        ])

        setDataCounts({
          berita: berita.data?.length || 0,
          ppdb: ppdb.data?.length || 0,
          kontak: kontak.data?.length || 0,
          alumni: alumni.data?.length || 0,
        })
      } catch {
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [router])

  async function handleLogout() {
    await fetch('/api/auth/sign-out', { method: 'POST' })
    addToast('Berhasil logout', 'info')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LayoutDashboard size={20} className="text-primary-600" />
          <span className="font-display font-bold text-gray-900 dark:text-white">Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 flex items-center gap-1.5">
            <User size={14} />
            {user?.name || user?.email}
          </span>
          <button onClick={handleLogout} className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                  <s.icon size={20} />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {dataCounts[s.label.toLowerCase().replace('total ', '').replace('data ', '')] ?? '...'}
              </p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <h2 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">Akses Cepat</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'Berita', href: '/api/berita', method: 'GET' },
              { label: 'Galeri', href: '/api/galeri', method: 'GET' },
              { label: 'PPDB', href: '/api/ppdb', method: 'GET' },
              { label: 'Pesan', href: '/api/kontak', method: 'GET' },
              { label: 'Alumni', href: '/api/alumni', method: 'GET' },
              { label: 'Ke Website', href: '/', external: true },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_self' : '_blank'}
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-primary-500 transition-all text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
