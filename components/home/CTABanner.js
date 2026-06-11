import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(99,102,241,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_70%_50%,rgba(16,185,129,0.3)_0%,transparent_50%)] z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          Pendaftaran ditutup 30 Juli 2026
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Segera Daftarkan Putra/Putri Anda
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Bergabunglah bersama {SITE_CONFIG.name}. Dapatkan pendidikan berkualitas dengan fasilitas terbaik
          untuk masa depan generasi penerus bangsa.
        </p>
        <Link
          href="/ppdb"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-accent-500/30 hover:shadow-accent-500/40 transition-all hover:-translate-y-0.5"
        >
          Daftar Sekarang
        </Link>
      </div>
    </section>
  )
}
