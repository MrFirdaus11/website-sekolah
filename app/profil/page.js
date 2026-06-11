import PageHeader from '@/components/layout/PageHeader'
import Image from 'next/image'
import Timeline from '@/components/ui/Timeline'
import { CheckCircle, Target, Eye, Award, Wifi, BookOpen, Beaker, Dumbbell, Library, Monitor, Search } from 'lucide-react'
import { guru } from '@/lib/data'

const prestasi = [
  { tahun: '2026', bidang: 'Akademik', prestasi: 'Medali Emas OSN Fisika' },
  { tahun: '2026', bidang: 'Non-Akademik', prestasi: 'Juara 1 Basket Tingkat Kota' },
  { tahun: '2025', bidang: 'Akademik', prestasi: 'Juara 2 Debat Bahasa Inggris' },
  { tahun: '2025', bidang: 'Non-Akademik', prestasi: 'Juara 3 Paduan Suara Nasional' },
  { tahun: '2024', bidang: 'Akademik', prestasi: 'Medali Perak Olimpiade Matematika' },
  { tahun: '2024', bidang: 'Non-Akademik', prestasi: 'Juara 1 Robotik Regional' },
]

export default function ProfilPage() {
  return (
    <>
      <PageHeader
        title="Profil Lembaga"
        description="Informasi lengkap tentang identitas, sejarah, dan perkembangan SMA Nusantara Mandiri."
        breadcrumb={[{ label: 'Profil' }]}
      />

      {/* Sejarah */}
      <section id="sejarah" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Sejarah</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Perjalanan Kami</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section id="visi-misi" className="py-16 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Visi & Misi</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Arah & Tujuan Kami</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">Visi</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                    &ldquo;Terwujudnya generasi unggul yang beriman, berilmu, berkarakter, dan berdaya saing global.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-50 dark:bg-green-900/20 flex items-center justify-center text-secondary-600 shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">Misi</h3>
                  <ul className="space-y-3">
                    {[
                      'Menyelenggarakan pendidikan berkualitas yang berorientasi pada pengembangan potensi akademik dan non-akademik.',
                      'Menanamkan nilai-nilai keimanan, ketakwaan, dan akhlak mulia dalam setiap aspek pembelajaran.',
                      'Mengembangkan kurikulum yang adaptif terhadap perkembangan teknologi dan kebutuhan global.',
                      'Membangun kemitraan strategis dengan berbagai institusi untuk memperluas wawasan siswa.',
                      'Menciptakan lingkungan sekolah yang aman, nyaman, dan kondusif untuk belajar.',
                    ].map((misi, i) => (
                      <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-400">
                        <CheckCircle size={18} className="text-secondary-500 shrink-0 mt-0.5" />
                        <span>{misi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akreditasi & Prestasi */}
      <section id="akreditasi" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Akreditasi</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Akreditasi & Prestasi</h2>
          </div>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
              <Award size={48} className="text-accent-500" />
              <div>
                <p className="font-display text-2xl font-bold text-gray-900 dark:text-white">Terakreditasi A</p>
                <p className="text-sm text-gray-500">BAN-S/M No. 123/BAN-SM/A/2026</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white">Tahun</th>
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white">Bidang</th>
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white">Prestasi</th>
                </tr>
              </thead>
              <tbody>
                {prestasi.map((p, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-5 py-3 text-sm font-medium text-gray-900 dark:text-white">{p.tahun}</td>
                    <td className="px-5 py-3 text-sm">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        p.bidang === 'Akademik' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' : 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                      }`}>
                        {p.bidang}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600 dark:text-gray-400">{p.prestasi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="py-16 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Fasilitas</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Sarana & Prasarana</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Beaker, label: 'Laboratorium IPA', desc: 'Lab fisika, kimia, biologi modern' },
              { icon: Monitor, label: 'Lab Komputer', desc: '60 unit PC dengan internet cepat' },
              { icon: Library, label: 'Perpustakaan Digital', desc: 'Koleksi buku fisik & e-book' },
              { icon: Dumbbell, label: 'Lapangan Olahraga', desc: 'Basket, futsal, voli, bulutangkis' },
              { icon: Wifi, label: 'WiFi 24 Jam', desc: 'Akses internet di seluruh area' },
              { icon: BookOpen, label: 'Ruang Kelas Smart', desc: 'LCD proyektor, AC, sound system' },
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                  <f.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{f.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tenaga Pengajar */}
      <section id="guru" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Tenaga Pengajar</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Guru & Staf Pengajar</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Tenaga pendidik profesional dan berpengalaman</p>
          </div>

          <div className="relative max-w-md mx-auto mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari guru..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guru.map((g) => (
              <div key={g.id} className="text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden relative ring-2 ring-primary-100 dark:ring-primary-900">
                  <Image
                    src={g.foto}
                    alt={g.nama}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{g.nama}</h4>
                <p className="text-xs text-gray-400 mb-1">{g.gelar}</p>
                <span className="inline-block px-3 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium">
                  {g.mapel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
