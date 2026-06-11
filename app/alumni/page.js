'use client'

import { useState } from 'react'
import Image from 'next/image'
import PageHeader from '@/components/layout/PageHeader'
import Button from '@/components/ui/Button'
import { useToastStore } from '@/store/useToastStore'
import { alumniData } from '@/lib/data'

export default function AlumniPage() {
  const addToast = useToastStore((s) => s.addToast)
  const [form, setForm] = useState({ nama: '', angkatan: '', email: '', noHp: '', pekerjaan: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await fetch('/api/alumni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Gagal mengirim data')
      addToast('Data berhasil dikirim! Terima kasih telah mendaftar sebagai alumni.', 'success')
      setForm({ nama: '', angkatan: '', email: '', noHp: '', pekerjaan: '' })
    } catch (error) {
      addToast(error.message, 'error')
    }
  }

  return (
    <>
      <PageHeader
        title="Alumni"
        description="Menjaga koneksi dan membangun komunitas alumni SMA Nusantara Mandiri"
        breadcrumb={[{ label: 'Alumni' }]}
      />

      {/* Testimoni */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Testimoni Alumni</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Kesuksesan Alumni</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniData.slice(0, 3).map((a) => (
              <div key={a.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden relative ring-2 ring-primary-100 dark:ring-primary-900">
                  <Image
                    src={a.foto}
                    alt={a.nama}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">&ldquo;{a.testimoni}&rdquo;</p>
                <p className="font-semibold text-gray-900 dark:text-white">{a.nama}</p>
                <p className="text-xs text-gray-500">{a.karir}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direktori */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Direktori</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Alumni Tersukses</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniData.map((a) => (
              <div key={a.id} className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 ring-1 ring-primary-100 dark:ring-primary-900">
                  <Image
                    src={a.foto}
                    alt={a.nama}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{a.nama}</p>
                  <p className="text-xs text-gray-500">Angkatan {a.angkatan}</p>
                  <p className="text-xs text-gray-400">{a.karir}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Registrasi */}
      <section className="py-16">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Registrasi</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Daftar Alumni</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Tetap terhubung dengan almamater tercinta.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
              <input type="text" required value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tahun Lulus</label>
              <input type="number" value={form.angkatan} onChange={(e) => setForm({ ...form, angkatan: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">No. HP</label>
              <input type="tel" value={form.noHp} onChange={(e) => setForm({ ...form, noHp: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pekerjaan Saat Ini</label>
              <input type="text" value={form.pekerjaan} onChange={(e) => setForm({ ...form, pekerjaan: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors" />
            </div>
            <Button type="submit" className="w-full">Daftar Alumni</Button>
          </form>
        </div>
      </section>
    </>
  )
}
