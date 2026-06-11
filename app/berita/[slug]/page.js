'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2, Check } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import { formatDate } from '@/lib/utils'

export default function DetailBeritaPage() {
  const params = useParams()
  const [item, setItem] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!params.slug) return
    fetch(`/api/berita?slug=${params.slug}`)
      .then((r) => r.json())
      .then((json) => {
        if (json.data) {
          setItem(json.data)
        }
      })
      .catch(() => setItem(null))
      .finally(() => setLoading(false))
  }, [params.slug])

  useEffect(() => {
    if (!item) return
    fetch('/api/berita')
      .then((r) => r.json())
      .then((json) => {
        const list = json.data || []
        setRelated(list.filter((b) => b.id !== item.id).slice(0, 2))
      })
      .catch(() => setRelated([]))
  }, [item])

  if (loading) {
    return (
      <div className="pt-[120px] pb-20">
        <div className="max-w-3xl mx-auto px-4 animate-pulse space-y-4">
          <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl" />
        </div>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="pt-[120px] pb-20 text-center">
        <div className="max-w-lg mx-auto px-4">
          <h1 className="font-display text-3xl font-bold mb-4">Berita Tidak Ditemukan</h1>
          <Link href="/berita" className="text-primary-600 hover:text-primary-700 font-medium">&larr; Kembali ke Berita</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={item.judul}
        breadcrumb={[{ label: 'Berita', href: '/berita' }, { label: item.judul }]}
      />

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={14} />{formatDate(item.createdAt)}</span>
            <span className="flex items-center gap-1.5"><User size={14} />{item.author}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium">{item.kategori}</span>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.konten }} />

          <div className="flex items-center gap-3 mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {copied ? <Check size={16} className="text-green-500" /> : <Share2 size={16} />}
              {copied ? 'Tersalin!' : 'Salin Tautan'}
            </button>
            <Link
              href={`https://wa.me/?text=${encodeURIComponent(item.judul + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors"
            >
              Bagikan WhatsApp
            </Link>
            <Link href="/berita" className="inline-flex items-center gap-2 ml-auto text-sm text-primary-600 hover:text-primary-700 font-medium">
              <ArrowLeft size={16} /> Semua Berita
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">Berita Terkait</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link key={r.id} href={`/berita/${r.slug}`} className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:-translate-y-0.5 hover:shadow-md transition-all">
                    <p className="text-xs text-gray-400 mb-1">{formatDate(r.createdAt)}</p>
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{r.judul}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
