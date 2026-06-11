'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

export default function WelcomeSection() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/images/principal.png"
                alt="Dr. Ahmad Fauzi, M.Pd. - Kepala Sekolah"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm">Dr. Ahmad Fauzi, M.Pd.</p>
                <p className="text-white/70 text-xs">Kepala Sekolah</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex items-center gap-3">
              <span className="font-display text-2xl font-extrabold text-primary-600">25+</span>
              <span className="text-xs text-gray-500 leading-tight">
                Tahun Pengalaman
                <br />
                Dalam Pendidikan
              </span>
            </div>
          </div>


          <div className="lg:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Sambutan</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-5">
              Selamat Datang di{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                SMA Nusantara Mandiri
              </span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh. Puji syukur ke hadirat Allah SWT, atas rahmat
                dan karunia-Nya, website resmi SMA Nusantara Mandiri dapat hadir sebagai media informasi dan
                komunikasi bagi seluruh stakeholder pendidikan.
              </p>
              <p>
                Kami percaya bahwa setiap siswa memiliki potensi luar biasa. Dengan dukungan tenaga pengajar
                profesional dan fasilitas modern, kami berkomitmen untuk mengembangkan potensi tersebut menjadi
                prestasi nyata.
              </p>
              <p>
                Melalui website ini, kami berharap dapat memberikan informasi yang transparan, akurat, dan
                terkini. Mari bersama-sama membangun generasi unggul dan berkarya.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="font-display font-semibold text-gray-900 dark:text-white">Dr. Ahmad Fauzi, M.Pd.</p>
              <p className="text-sm text-gray-500">Kepala SMA Nusantara Mandiri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
