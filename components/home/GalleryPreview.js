'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { galeriFoto } from '@/lib/data'
import Lightbox from '@/components/ui/Lightbox'

export default function GalleryPreview() {
  const [ref, inView] = useInView()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const preview = galeriFoto.slice(0, 6)

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Galeri Kegiatan</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Momen Terbaik Kami
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
            Dokumentasi berbagai kegiatan dan momen berharga di lingkungan sekolah.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {preview.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(i)}
              className={`group relative rounded-xl overflow-hidden aspect-square bg-gray-100 dark:bg-gray-700 ${
                i === 0 ? 'col-span-2 row-span-2 aspect-auto' : ''
              }`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-semibold truncate">{item.caption}</p>
                <p className="text-white/60 text-xs">{item.album}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-600 transition-all"
          >
            Lihat Semua Galeri &rarr;
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={preview.map((p) => p.src)}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
