import PageHeader from '@/components/layout/PageHeader'
import { GraduationCap, Globe, BookOpen, Mosque, Download, Calendar, Dumbbell } from 'lucide-react'
import { programStudi, agenda } from '@/lib/data'

const mapelIPA = ['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Bahasa Indonesia', 'Bahasa Inggris']
const mapelIPS = ['Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah', 'Matematika', 'Bahasa Indonesia']

const ekskul = [
  { nama: 'Basket', kategori: 'Olahraga' },
  { nama: 'Futsal', kategori: 'Olahraga' },
  { nama: 'Robotik', kategori: 'Akademik' },
  { nama: 'Pramuka', kategori: 'Umum' },
  { nama: 'PMR', kategori: 'Umum' },
  { nama: 'Teater', kategori: 'Seni' },
  { nama: 'Paduan Suara', kategori: 'Seni' },
  { nama: 'Debat Bahasa Inggris', kategori: 'Akademik' },
  { nama: 'Jurnalistik', kategori: 'Akademik' },
  { nama: 'Tari Tradisional', kategori: 'Seni' },
]

export default function AkademikPage() {
  return (
    <>
      <PageHeader
        title="Akademik"
        description="Informasi terkait program pendidikan, kurikulum, dan kegiatan akademik."
        breadcrumb={[{ label: 'Akademik' }]}
      />

      {/* Program Studi */}
      <section id="program-studi" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Program Studi</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Program Unggulan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programStudi.map((p) => (
              <div key={p.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">{p.nama}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{p.deskripsi}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.prospek.map((pr, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">
                          {pr}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurikulum */}
      <section id="kurikulum" className="py-16 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Kurikulum</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Struktur Kurikulum</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { nama: 'IPA / MIPA', mapel: mapelIPA },
              { nama: 'IPS / IIS', mapel: mapelIPS },
            ].map((kur, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4">Kelas {kur.nama}</h3>
                <div className="space-y-2">
                  {kur.mapel.map((m, j) => (
                    <div key={j} className="flex items-center gap-3 py-1.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors">
              <Download size={16} />
              Download Brosur
            </button>
          </div>
        </div>
      </section>

      {/* Kalender Akademik */}
      <section id="kalender" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Kalender Akademik</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Agenda Akademik</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {agenda.map((a) => (
              <div key={a.id} className="flex items-start gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                  <Calendar size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{a.nama}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{new Date(a.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })} - {new Date(a.tanggalAkhir).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{a.deskripsi}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 ${
                  a.kategori === 'Ujian' ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' :
                  a.kategori === 'Libur' ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' :
                  'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                }`}>
                  {a.kategori}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler */}
      <section id="ekskul" className="py-16 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Ekstrakurikuler</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Kegiatan Ekstrakurikuler</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ekskul.map((e, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                  <Dumbbell size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{e.nama}</p>
                  <span className="text-xs text-gray-400">{e.kategori}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
