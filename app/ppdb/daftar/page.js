'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Upload, FileText } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import Stepper from '@/components/ui/Stepper'
import Button from '@/components/ui/Button'
import { useFormStore } from '@/store/useFormStore'
import { useToastStore } from '@/store/useToastStore'

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-primary-500 transition-colors"
        required={required}
      />
    </div>
  )
}

export default function DaftarPPDBPage() {
  const { step, setStep, dataPribadi, dataOrangTua, updateField, resetForm } = useFormStore()
  const addToast = useToastStore((s) => s.addToast)
  const [submitted, setSubmitted] = useState(false)
  const [noReg, setNoReg] = useState('')

  const steps = [
    {
      title: 'Data Pribadi',
      fields: [
        { label: 'Nama Lengkap', name: 'nama', required: true },
        { label: 'NISN', name: 'nisn', required: true },
        { label: 'Tempat Lahir', name: 'tempatLahir', required: true },
        { label: 'Tanggal Lahir', name: 'tanggalLahir', type: 'date', required: true },
        { label: 'Jenis Kelamin', name: 'jenisKelamin', type: 'text', required: true },
        { label: 'Alamat', name: 'alamat', type: 'text', required: true },
        { label: 'No. HP', name: 'noHp', type: 'tel', required: true },
        { label: 'Email', name: 'email', type: 'email', required: true },
      ],
    },
    {
      title: 'Data Orang Tua',
      fields: [
        { label: 'Nama Ayah', name: 'namaAyah', required: true },
        { label: 'Pekerjaan Ayah', name: 'pekerjaanAyah', required: true },
        { label: 'Nama Ibu', name: 'namaIbu', required: true },
        { label: 'Pekerjaan Ibu', name: 'pekerjaanIbu', required: true },
        { label: 'Alamat Orang Tua', name: 'alamatOrtu', required: true },
        { label: 'No. HP Orang Tua', name: 'noHpOrtu', type: 'tel', required: true },
      ],
    },
    {
      title: 'Upload Dokumen',
      fields: [],
    },
    {
      title: 'Review & Submit',
      fields: [],
    },
  ]

  const currentData = step === 1 ? dataPribadi : dataOrangTua
  const totalSteps = steps.length

  async function handleSubmit(e) {
    e.preventDefault()
    if (step < totalSteps) {
      setStep(step + 1)
      return
    }

    try {
      const payload = { ...dataPribadi, ...dataOrangTua }
      const res = await fetch('/api/ppdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Gagal mengirim')
      }

      const json = await res.json()
      setNoReg(json.data.noRegistrasi)
      setSubmitted(true)
      addToast('Pendaftaran berhasil dikirim!', 'success')
    } catch (error) {
      addToast(error.message, 'error')
    }
  }

  if (submitted) {
    return (
      <>
        <PageHeader
          title="Pendaftaran Berhasil!"
          description="Terima kasih telah mendaftar di SMA Nusantara Mandiri"
          breadcrumb={[{ label: 'PPDB', href: '/ppdb' }, { label: 'Pendaftaran' }]}
        />
        <section className="py-20">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary-50 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-secondary-500" />
            </div>
            <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Pendaftaran Sukses!</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Data Anda telah berhasil dikirim.</p>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-500 mb-1">Nomor Registrasi Anda:</p>
              <p className="font-display text-2xl font-bold text-primary-600">{noReg}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => window.print()}>Cetak Bukti</Button>
              <Button variant="secondary" href="/ppdb/cek-status">Cek Status</Button>
              <Button variant="ghost" onClick={() => { resetForm(); setSubmitted(false) }}>Daftar Lagi</Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="Form Pendaftaran Online"
        description="Isi data dengan lengkap dan benar"
        breadcrumb={[{ label: 'PPDB', href: '/ppdb' }, { label: 'Pendaftaran' }]}
      />
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <Stepper currentStep={step} />
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6">{steps[step - 1].title}</h3>

            {step < 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps[step - 1].fields.map((f) => (
                  <div key={f.name} className={f.name === 'alamat' || f.name === 'alamatOrtu' ? 'sm:col-span-2' : ''}>
                    <Field
                      label={f.label}
                      name={f.name}
                      type={f.type || 'text'}
                      value={currentData[f.name] || ''}
                      onChange={(name, value) => {
                        const section = step === 1 ? 'dataPribadi' : 'dataOrangTua'
                        updateField(section, name, value)
                      }}
                      required={f.required}
                    />
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                {[
                  { label: 'Foto 3x4', name: 'foto' },
                  { label: 'Ijazah / Rapot', name: 'ijazah' },
                  { label: 'Akta Kelahiran', name: 'akta' },
                  { label: 'Kartu Keluarga', name: 'kartuKeluarga' },
                ].map((doc) => (
                  <div key={doc.name} className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:border-primary-500 transition-colors cursor-pointer">
                    <Upload size={28} className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{doc.label}</p>
                    <p className="text-xs text-gray-400 mt-1">Maks. 2MB (PDF/JPG/PNG)</p>
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Pribadi</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(dataPribadi).map(([key, val]) => (
                      <div key={key}><span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> <span className="text-gray-900 dark:text-white">{val || '-'}</span></div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Orang Tua</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(dataOrangTua).map(([key, val]) => (
                      <div key={key}><span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> <span className="text-gray-900 dark:text-white">{val || '-'}</span></div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-400">Dengan mengirim formulir ini, Anda menyetujui syarat dan ketentuan yang berlaku.</p>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              {step > 1 ? (
                <Button type="button" variant="secondary" onClick={() => setStep(step - 1)}>
                  <ArrowLeft size={16} /> Sebelumnya
                </Button>
              ) : (
                <div />
              )}
              <Button type="submit" variant="primary">
                {step < totalSteps ? <>Selanjutnya <ArrowRight size={16} /></> : 'Kirim Pendaftaran'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
