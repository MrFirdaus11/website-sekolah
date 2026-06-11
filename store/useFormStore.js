'use client'

import { create } from 'zustand'

const initialState = {
  step: 1,
  dataPribadi: { nama: '', nisn: '', tempatLahir: '', tanggalLahir: '', jenisKelamin: '', alamat: '', noHp: '', email: '' },
  dataOrangTua: { namaAyah: '', pekerjaanAyah: '', namaIbu: '', pekerjaanIbu: '', alamatOrtu: '', noHpOrtu: '' },
  dokumen: { foto: null, ijazah: null, akta: null, kartuKeluarga: null },
}

export const useFormStore = create((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  updateField: (section, field, value) =>
    set((state) => ({
      [section]: { ...state[section], [field]: value },
    })),
  resetForm: () => set(initialState),
}))
