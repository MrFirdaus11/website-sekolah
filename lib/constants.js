export const SITE_CONFIG = {
  name: 'SMA Nusantara Mandiri',
  shortName: 'SMANM',
  tagline: 'Membangun Generasi Unggul & Berkarya',
  description:
    'Sekolah unggulan yang berkomitmen mencetak generasi berprestasi, berkarakter, dan siap menghadapi tantangan global.',
  url: 'https://smanusantaramandiri.sch.id',
  logo: '/images/logo.svg',
  contact: {
    address: 'Jl. Pendidikan No. 123, Kota Cerdas, 12345',
    phone: '(021) 1234-5678',
    email: 'info@smanusantaramandiri.sch.id',
    whatsapp: '+6281234567890',
    maps: 'https://maps.google.com/?q=Jl.+Pendidikan+No.+123+Kota+Cerdas',
  },
  social: {
    instagram: 'https://instagram.com/smanusantaramandiri',
    youtube: 'https://youtube.com/@smanusantaramandiri',
    facebook: 'https://facebook.com/smanusantaramandiri',
    tiktok: 'https://tiktok.com/@smanusantaramandiri',
  },
  tahunAjar: '2026/2027',
  deadlinePendaftaran: '2026-07-30',
}

export const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Profil',
    href: '/profil',
    children: [
      { label: 'Sejarah', href: '/profil#sejarah' },
      { label: 'Visi & Misi', href: '/profil#visi-misi' },
      { label: 'Struktur Organisasi', href: '/profil#struktur' },
      { label: 'Akreditasi & Prestasi', href: '/profil#akreditasi' },
      { label: 'Fasilitas', href: '/profil#fasilitas' },
      { label: 'Tenaga Pengajar', href: '/profil#guru' },
    ],
  },
  {
    label: 'Akademik',
    href: '/akademik',
    children: [
      { label: 'Program Studi', href: '/akademik#program-studi' },
      { label: 'Kurikulum', href: '/akademik#kurikulum' },
      { label: 'Kalender Akademik', href: '/akademik#kalender' },
      { label: 'Ekstrakurikuler', href: '/akademik#ekskul' },
    ],
  },
  { label: 'PPDB', href: '/ppdb' },
  { label: 'Berita', href: '/berita' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Kontak', href: '/kontak' },
]
