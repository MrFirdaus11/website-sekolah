'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import FilterBar from '@/components/ui/FilterBar'
import Lightbox from '@/components/ui/Lightbox'

export default function GaleriPage() {
  const [tab, setTab] = useState('foto')
  const [album, setAlbum] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [fotoList, setFotoList] = useState([])
  const [videoList, setVideoList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/galeri?type=foto').then((r) => r.json()),
      fetch('/api/galeri?type=video').then((r) => r.json()),
    ])
      .then(([fotoRes, videoRes]) => {
        setFotoList(fotoRes.data || [])
        setVideoList(videoRes.data || [])
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const albums = [...new Set(fotoList.map((f) => f.album))]
  const filtered = album === 'all' ? fotoList : fotoList.filter((f) => f.album === album)
  const videoKategori = [...new Set(videoList.map((v) => v.kategori))]

  return (
    <>
      <PageHeader
        title="Galeri Kegiatan"
        description="Dokumentasi momen dan kegiatan SMA Nusantara Mandiri"
        breadcrumb={[{ label: 'Galeri' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switch */}
          <div className="flex justify-center gap-2 mb-10">
            {['foto', 'video'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  tab === t ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {t === 'foto' ? 'Foto' : 'Video'}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
              ))}
            </div>
          ) : tab === 'foto' ? (
            <>
              <FilterBar categories={albums} active={album} onChange={(v) => { setAlbum(v); setLightboxIndex(null) }} className="mb-8 justify-center" />
              <div className="columns-2 md:columns-3 gap-3 space-y-3">
                {filtered.map((foto, i) => (
                  <button
                    key={foto.id}
                    onClick={() => setLightboxIndex(i)}
                    className="group relative break-inside-avoid overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 block w-full"
                    style={{ aspectRatio: i % 3 === 0 ? '4/5' : i % 3 === 1 ? '3/4' : '1/1' }}
                  >
                    <Image
                      src={foto.src}
                      alt={foto.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity text-left">
                      <p className="text-white text-sm font-semibold">{foto.caption}</p>
                      <p className="text-white/60 text-xs">{foto.album} &middot; {foto.tahun}</p>
                    </div>
                  </button>
                ))}
              </div>
              {filtered.length === 0 && <p className="text-center text-gray-500 py-12">Tidak ada foto untuk album ini.</p>}
              {lightboxIndex !== null && (
                <Lightbox
                  images={filtered.map((f) => f.src)}
                  index={lightboxIndex}
                  onClose={() => setLightboxIndex(null)}
                />
              )}
            </>
          ) : (
            <>
              <FilterBar categories={videoKategori} active="all" onChange={() => {}} className="mb-8 justify-center" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoList.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 mb-3">
                      <Image
                        src={`https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`}
                        alt={video.judul}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play size={24} className="text-primary-600 ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-xs">{video.durasi}</span>
                    </div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{video.judul}</p>
                    <p className="text-xs text-gray-500">{video.kategori}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
