'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { berita } from '@/lib/data'
import { formatDate } from '@/lib/utils'

export default function NewsSection() {
  const [ref, inView] = useInView()
  const latest = berita.slice(0, 3)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Berita Terbaru</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Informasi & Kegiatan
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
            Ikuti perkembangan terbaru dari berbagai kegiatan dan informasi di SMA Nusantara Mandiri.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {latest.map((item, i) => (
            <article
              key={item.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={item.thumbnail}
                  alt={item.judul}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full absolute top-3 left-3 z-10">
                  {item.kategori}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                  <Calendar size={12} />
                  {formatDate(item.tanggal)}
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  <Link href={`/berita/${item.slug}`}>{item.judul}</Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{item.author}</span>
                  <Link
                    href={`/berita/${item.slug}`}
                    className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Baca &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-600 transition-all"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  )
}
