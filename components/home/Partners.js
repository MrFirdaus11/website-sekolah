'use client'

import { mitra } from '@/lib/data'

export default function Partners() {
  if (!mitra.length) return null

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Mitra & Kerjasama</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Institusi Mitra
          </h2>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex gap-10 animate-scroll-partners" style={{ animation: 'scroll-partners 30s linear infinite' }}>
          {[...mitra, ...mitra].map((name, i) => (
            <div
              key={i}
              className="shrink-0 h-14 px-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center"
            >
              <span className="font-display font-bold text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
