'use client'

import { useState } from 'react'
import { Search, CheckCircle, Clock, FileText, Users, Check, XCircle } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import Button from '@/components/ui/Button'
import { useToastStore } from '@/store/useToastStore'

const statusSteps = [
  { label: 'Terdaftar', icon: FileText },
  { label: 'Verifikasi', icon: Search },
  { label: 'Seleksi', icon: Users },
  { label: 'Diterima', icon: CheckCircle },
]

export default function CekStatusPage() {
  const [noReg, setNoReg] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const addToast = useToastStore((s) => s.addToast)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!noReg.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/ppdb/cek-status?noReg=${encodeURIComponent(noReg)}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Data tidak ditemukan')
      setData(json.data)
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
      addToast(err.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  const statusMap = { terdaftar: 0, verifikasi: 1, seleksi: 2, diterima: 3, ditolak: -1 }
  const currentStep = data ? (statusMap[data.status] ?? 0) : 0
  const ditolak = data?.status === 'ditolak'

  return (
    <>
      <PageHeader
        title="Cek Status Pendaftaran"
        description="Masukkan nomor registrasi untuk melihat status pendaftaran Anda"
        breadcrumb={[{ label: 'PPDB', href: '/ppdb' }, { label: 'Cek Status' }]}
      />

      <section className="py-20">
        <div className="max-w-lg mx-auto px-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nomor Registrasi
              </label>
              <input
                type="text"
                value={noReg}
                onChange={(e) => setNoReg(e.target.value)}
                placeholder="Contoh: PPDB-ABC123"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-primary-500 transition-colors mb-4"
              />
              <Button type="submit" className="w-full" disabled={loading}>
                <Search size={18} /> {loading ? 'Memeriksa...' : 'Cek Status'}
              </Button>
              {error && <p className="text-red-500 text-sm text-center mt-3">{error}</p>}
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${ditolak ? 'bg-red-50 dark:bg-red-900/20' : 'bg-primary-50 dark:bg-primary-900/20'}`}>
                  {ditolak ? <XCircle size={32} className="text-red-500" /> : <Clock size={32} className="text-primary-600" />}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1">Status Pendaftaran</h3>
                <p className="text-sm text-gray-500 mb-1">Nomor: <span className="font-mono font-semibold text-primary-600">{noReg}</span></p>
                <p className="text-xs text-gray-400">Nama: {data?.nama}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8">
                {statusSteps.map((s, i) => {
                  const isActive = ditolak ? false : i <= currentStep
                  const isLast = !ditolak && i === currentStep
                  return (
                    <div key={i} className="flex items-start gap-4 pb-6 last:pb-0 relative">
                      {i < statusSteps.length - 1 && (
                        <div className={`absolute left-5 top-12 bottom-0 w-0.5 ${isActive ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
                      )}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        ditolak ? 'bg-gray-200 dark:bg-gray-700 text-gray-400' :
                        isActive ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                      } ${isLast ? 'ring-4 ring-primary-200 dark:ring-primary-800' : ''}`}>
                        {!ditolak && i < currentStep ? <Check size={18} /> : <s.icon size={18} />}
                      </div>
                      <div>
                        <p className={`font-semibold ${ditolak ? 'text-gray-400' : isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>{s.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {ditolak ? '-' : i < currentStep ? 'Selesai' : i === currentStep ? 'Sedang diproses' : 'Menunggu'}
                        </p>
                      </div>
                    </div>
                  )
                })}
                {ditolak && (
                  <p className="text-center text-red-500 font-semibold mt-4">Maaf, pendaftaran Anda ditolak.</p>
                )}
              </div>

              <Button variant="ghost" onClick={() => { setSubmitted(false); setNoReg(''); setData(null) }} className="w-full">
                Cek Nomor Lain
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
