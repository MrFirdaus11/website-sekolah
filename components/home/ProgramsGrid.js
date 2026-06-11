'use client'

import Link from 'next/link'
import { GraduationCap, Globe, BookOpen, Heart } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { programStudi } from '@/lib/data'

const iconMap = {
  'graduation-cap': GraduationCap,
  'globe': Globe,
  'book-open': BookOpen,
  'mosque': Heart,
}

export default function ProgramsGrid() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Program Unggulan</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Program Studi Kami</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
            Beragam program studi unggulan yang dirancang untuk mengembangkan bakat dan minat siswa.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {programStudi.map((prog, i) => {
            const Icon = iconMap[prog.icon]
            return (
              <div
                key={prog.id}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center transition-all duration-200 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">{prog.nama}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{prog.deskripsi}</p>
                <Link
                  href="/akademik"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Selengkapnya &rarr;
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
