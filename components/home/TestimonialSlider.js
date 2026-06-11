'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { testimoni } from '@/lib/data'

export default function TestimonialSlider() {
  const [ref, inView] = useInView()
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimoni.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimoni.length) % testimoni.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  if (!testimoni.length) return null

  const t = testimoni[current]

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Testimoni</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Apa Kata Mereka
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
            Pengalaman dan kesan dari alumni, orang tua, dan mitra sekolah.
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 sm:p-10 text-center relative">
            <span className="text-5xl font-display text-primary-200 dark:text-primary-800 absolute top-4 left-6 leading-none">
              &ldquo;
            </span>

            <div className="w-16 h-16 rounded-full mx-auto mb-5 overflow-hidden relative ring-2 ring-primary-200 dark:ring-primary-800">
              <Image
                src={t.avatar}
                alt={t.nama}
                fill
                className="object-cover"
              />
            </div>

            <blockquote className="text-gray-600 dark:text-gray-400 leading-relaxed italic mb-6">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <cite className="not-italic">
              <p className="font-display font-semibold text-gray-900 dark:text-white">{t.nama}</p>
              <p className="text-sm text-gray-500">{t.peran}</p>
            </cite>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimoni.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? 'w-7 bg-primary-600' : 'w-2.5 bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
