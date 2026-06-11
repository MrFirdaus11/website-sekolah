'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'
import { faq } from '@/lib/data'
import { useToastStore } from '@/store/useToastStore'

export default function KontakPage() {
  const [form, setForm] = useState({ nama: '', email: '', kategori: '', pesan: '' })
  const addToast = useToastStore((s) => s.addToast)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await fetch('/api/kontak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Gagal mengirim pesan')
      addToast('Pesan berhasil dikirim! Kami akan merespon dalam 1x24 jam.', 'success')
      setForm({ nama: '', email: '', kategori: '', pesan: '' })
    } catch (error) {
      addToast(error.message, 'error')
    }
  }

  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        description="Kami siap membantu Anda. Silakan hubungi kami melalui berbagai kanal berikut."
        breadcrumb={[{ label: 'Kontak' }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info Kontak */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">Informasi Kontak</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-6">Get in Touch</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Alamat', value: SITE_CONFIG.contact.address, href: SITE_CONFIG.contact.maps },
                  { icon: Phone, label: 'Telepon', value: SITE_CONFIG.contact.phone, href: `tel:${SITE_CONFIG.contact.phone}` },
                  { icon: Mail, label: 'Email', value: SITE_CONFIG.contact.email, href: `mailto:${SITE_CONFIG.contact.email}` },
                  { icon: MessageCircle, label: 'WhatsApp', value: SITE_CONFIG.contact.whatsapp, href: `https://wa.me/${SITE_CONFIG.contact.whatsapp}` },
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Sosial Media */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Ikuti Kami</p>
                <div className="flex gap-3">
                  {[
                    { label: 'IG', href: SITE_CONFIG.social.instagram },
                    { label: 'YT', href: SITE_CONFIG.social.youtube },
                    { label: 'FB', href: SITE_CONFIG.social.facebook },
                    { label: 'TT', href: SITE_CONFIG.social.tiktok },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all text-xs font-bold">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Jam Operasional</p>
                    <p className="text-sm text-gray-500">Senin - Jumat: 07.00 - 16.00 WIB</p>
                    <p className="text-sm text-gray-500">Sabtu: 07.00 - 12.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Contact */}
            <div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
                    <input type="text" required value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kategori</label>
                    <select value={form.kategori} onChange={(e) => setForm({ ...form, kategori: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors">
                      <option value="">Pilih kategori</option>
                      <option>Informasi Pendaftaran</option>
                      <option>Informasi Akademik</option>
                      <option>Kerjasama & Mitra</option>
                      <option>Pengaduan & Saran</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pesan <span className="text-red-500">*</span></label>
                    <textarea rows={5} required value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary-500 transition-colors resize-none" />
                  </div>
                  <Button type="submit" className="w-full"><Send size={16} /> Kirim Pesan</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-[300px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MapPin size={40} className="mx-auto mb-2" />
              <p className="font-medium">Google Maps</p>
              <p className="text-sm">Jl. Pendidikan No. 123, Kota Cerdas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600">FAQ</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mt-2">Pertanyaan Umum</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Temukan jawaban cepat untuk pertanyaan Anda.</p>
          </div>
          <Accordion items={faq} />
        </div>
      </section>
    </>
  )
}
