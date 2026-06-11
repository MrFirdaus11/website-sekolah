'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Search } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import FilterBar from '@/components/ui/FilterBar'
import Pagination from '@/components/ui/Pagination'
import { formatDate } from '@/lib/utils'

export default function BeritaPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [kategori, setKategori] = useState('all')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 4

  useEffect(() => {
    fetch('/api/berita')
      .then((r) => r.json())
      .then((json) => setData(json.data || []))
      .catch(() => setData([]))
      .finally(() => setLoading(false))
  }, [])

  const categories = [...new Set(data.map((b) => b.kategori))]

  const filtered = data.filter((b) => {
    if (kategori !== 'all' && b.kategori !== kategori) return false
    if (search && !b.judul.toLowerCase().includes(search.toLowerCase()) && !b.excerpt.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const totalPages = Math.ceil(filtered.length / perPage)
  const paged = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <>
      <PageHeader
        title="Berita &amp; Informasi"
        description="Ikuti perkembangan terbaru dari SMA Nusantara Mandiri"
        breadcrumb={[{ label: 'Berita' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <FilterBar categories={categories} active={kategori} onChange={(v) => { setKategori(v); setPage(1) }} />
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm outline-none focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paged.map((item) => (
                  <article key={item.id} className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
                    <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                      <Image
                        src={item.thumbnail}
                        alt={item.judul}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full bg-primary-600 text-white text-xs font-semibold z-10">
                        {item.kategori}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                        <Calendar size={12} />
                        {formatDate(item.createdAt)}
                      </div>
                      <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                        <Link href={`/berita/${item.slug}`}>{item.judul}</Link>
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{item.author}</span>
                        <Link href={`/berita/${item.slug}`} className="text-sm font-semibold text-primary-600 hover:text-primary-700">
                          Baca &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {paged.length === 0 && (
                <div className="text-center py-16 text-gray-500">
                  <p>Tidak ada berita ditemukan.</p>
                </div>
              )}

              <Pagination current={page} total={totalPages} onChange={setPage} />
            </>
          )}
        </div>
      </section>
    </>
  )
}
