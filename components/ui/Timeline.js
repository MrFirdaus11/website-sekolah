'use client'

import { cn } from '@/lib/utils'

const events = [
  { tahun: '2000', title: 'Pendirian Sekolah', desc: 'SMA Nusantara Mandiri didirikan sebagai sekolah menengah atas swasta unggulan.' },
  { tahun: '2005', title: 'Akreditasi A', desc: 'Meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah.' },
  { tahun: '2010', title: 'Laboratorium Modern', desc: 'Peresmian laboratorium IPA dan komputer modern untuk menunjang pembelajaran.' },
  { tahun: '2015', title: 'Program Internasional', desc: 'Peluncuran program pertukaran pelajar dengan sekolah di Jepang dan Malaysia.' },
  { tahun: '2020', title: 'Sekolah Digital', desc: 'Transformasi digital pembelajaran dengan platform e-learning dan perpustakaan digital.' },
  { tahun: '2026', title: '25 Tahun Prestasi', desc: 'Memasuki usia 25 tahun dengan berbagai prestasi akademik dan non-akademik.' },
]

export default function Timeline({ items = events }) {
  return (
    <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
      {items.map((item, i) => (
        <div key={i} className="relative pb-10 last:pb-0">
          <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-primary-600 border-4 border-white dark:border-gray-900 translate-x-[-5.5px]" />
          <span className="inline-block text-sm font-bold text-primary-600 mb-1">{item.tahun}</span>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
