'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, MapPin } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { SITE_CONFIG } from '@/lib/constants'

export default function HeroSection() {
  const [ref, inView] = useInView()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(16,185,129,0.2)_0%,transparent_50%),radial-gradient(ellipse_at_50%_80%,rgba(245,158,11,0.1)_0%,transparent_50%)] z-0" />

      {/* Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${(i * 13 + 7) % 100}%`,
              top: `${(i * 17 + 3) % 100}%`,
              animationDelay: `${(i * 0.7) % 10}s`,
              animationDuration: `${15 + (i % 5) * 3}s`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-[70px]">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
              Tahun Ajaran {SITE_CONFIG.tahunAjar}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Membangun Generasi
              <br />
              <span className="bg-gradient-to-r from-accent-500 to-yellow-300 bg-clip-text text-transparent">
                Unggul &amp; Berkarya
              </span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-xl lg:mx-0 mx-auto leading-relaxed mb-8">
              Selamat datang di {SITE_CONFIG.name}. Sekolah unggulan yang berkomitmen mencetak generasi
              berprestasi, berkarakter, dan siap menghadapi tantangan global.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/ppdb"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Lihat Profil
              </Link>
            </div>
          </div>

          <div className="flex-1 max-w-md relative hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative">
              <Image
                src="/images/hero-school.png"
                alt={`Gedung ${SITE_CONFIG.name}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-lg bg-secondary-50 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">500+ Lulusan</p>
                <p className="text-xs text-gray-500">Berprestasi tiap tahun</p>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Lokasi Strategis</p>
                <p className="text-xs text-gray-500">Di pusat kota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
