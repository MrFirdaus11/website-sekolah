'use client'

import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import Accordion from '@/components/ui/Accordion'
import { CheckCircle, ArrowRight, Download, Search } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { faq } from '@/lib/data'
import { formatRupiah } from '@/lib/utils'

const biaya = [
  { item: 'SPP Bulanan', jumlah: 500000 },
  { item: 'Biaya Pembangunan (1x)', jumlah: 5000000 },
  { item: 'Seragam & Perlengkapan', jumlah: 1500000 },
  { item: 'Kegiatan Ekstrakurikuler', jumlah: 300000 },
  { item: 'Buku & Modul', jumlah: 750000 },
]

const persyaratan = [
  'Fotokopi Ijazah/SKHU sementara (legalisir)',
  'Fotokopi Akta Kelahiran',
  'Fotokopi Kartu Keluarga',
  'Pas foto 3x4 (4 lembar)',
  'Rapor semester 1-5',
  'Surat rekomendasi dari sekolah asal (jika ada)',
  'Sertifikat prestasi (jika ada)',
]

export default function PPDBPage() {
  const [ref, inView] = useInView()

  return (
    <>
      <PageHeader
        title="PPDB 2026/2027"
        description="Penerimaan Peserta Didik Baru SMA Nusantara Mandiri"
        breadcrumb={[{ label: 'PPDB' }]}
      />

      {/* Alur Pendaftaran */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Alur Pendaftaran</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Langkah Mudah Daftar</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto" ref={ref}>
            {[
              { step: 1, label: 'Daftar Online', desc: 'Isi form pendaftaran' },
              { step: 2, label: 'Upload Dokumen', desc: 'Lengkapi persyaratan' },
              { step: 3, label: 'Verifikasi', desc: 'Tim memverifikasi data' },
              { step: 4, label: 'Pengumuman', desc: 'Hasil seleksi' },
            ].map((s, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display text-xl font-bold ${
                    inView ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  } transition-all duration-500`} style={{ transitionDelay: `${i * 200}ms` }}>
                    {s.step}
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white mt-2 text-sm">{s.label}</p>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
                {i < 3 && <div className="hidden md:block flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 mx-4 mb-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persyaratan */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Persyaratan</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-6">Syarat Pendaftaran</h2>
              <ul className="space-y-3">
                {persyaratan.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Biaya</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-6">Rincian Biaya Pendidikan</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="text-left px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white">Item</th>
                      <th className="text-right px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {biaya.map((b, i) => (
                      <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-5 py-3 text-sm text-gray-600 dark:text-gray-400">{b.item}</td>
                        <td className="px-5 py-3 text-sm text-gray-900 dark:text-white text-right font-medium">{formatRupiah(b.jumlah)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <button className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
                  <Download size={14} /> Download Brosur PPDB
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Daftar */}
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/ppdb/daftar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-bold text-lg rounded-xl hover:bg-primary-700 shadow-xl shadow-primary-600/25 transition-all hover:-translate-y-0.5"
          >
            Daftar Sekarang <ArrowRight size={20} />
          </Link>
          <div className="mt-4">
            <Link href="/ppdb/cek-status" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              Sudah daftar? Cek status pendaftaran &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">FAQ</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Pertanyaan Umum</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Temukan jawaban untuk pertanyaan yang sering diajukan.</p>
          </div>
          <Accordion items={faq} />
        </div>
      </section>
    </>
  )
}
