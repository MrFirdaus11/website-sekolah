import { createClient } from '@libsql/client'

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
})

const now = Math.floor(Date.now() / 1000)

const berita = [
  { slug: 'siswa-raih-medali-emas-osn', judul: 'Siswa SMA Nusantara Mandiri Raih Medali Emas Olimpiade Sains Nasional', excerpt: 'Prestasi membanggakan diraih oleh siswa kelas XI IPA yang berhasil meraih medali emas dalam OSN 2026 tingkat nasional.', konten: '<p>Prestasi membanggakan kembali diraih oleh siswa-siswi SMA Nusantara Mandiri. Kali ini, Ahmad Rizki, siswa kelas XI IPA, berhasil meraih medali emas dalam Olimpiade Sains Nasional (OSN) 2026 yang diselenggarakan di Jakarta.</p><p>Ahmad berhasil menyingkirkan ribuan peserta dari seluruh Indonesia dalam bidang Biologi. Keberhasilannya ini tidak lepas dari bimbingan intensif para guru dan dukungan penuh dari sekolah.</p><p>Kepala SMA Nusantara Mandiri, Dr. Ahmad Fauzi, M.Pd., menyampaikan rasa bangganya atas prestasi ini. "Ini membuktikan bahwa siswa kita mampu bersaing di tingkat nasional. Kami akan terus mendukung dan mengembangkan bakat siswa," ujarnya.</p>', kategori: 'Prestasi', author: 'Humas Sekolah', thumbnail: '/images/news-1.png', createdAt: '2026-06-05' },
  { slug: 'workshop-robotik-dan-ai', judul: 'Workshop Robotik dan AI: Bekal Siswa Hadapi Era Digital', excerpt: 'Program workshop robotik dan kecerdasan buatan yang diikuti oleh 200 siswa dari berbagai jurusan.', konten: '<p>SMA Nusantara Mandiri menyelenggarakan Workshop Robotik dan Kecerdasan Buatan (AI) selama dua hari pada 1-2 Juni 2026. Kegiatan ini diikuti oleh 200 siswa dari berbagai jurusan.</p><p>Workshop menghadirkan narasumber dari Universitas Indonesia dan praktisi industri teknologi. Para siswa mendapatkan pengalaman langsung merakit robot sederhana dan memahami konsep dasar AI.</p><p>Workshop ini merupakan bagian dari program pengembangan kompetensi digital siswa untuk mempersiapkan mereka menghadapi era Industri 4.0.</p>', kategori: 'Kegiatan', author: 'Tim Kurikulum', thumbnail: '/images/news-2.png', createdAt: '2026-06-01' },
  { slug: 'jadwal-ujian-akhir-semester', judul: 'Pengumuman: Jadwal Ujian Akhir Semester Genap 2025/2026', excerpt: 'Informasi lengkap mengenai jadwal pelaksanaan ujian akhir semester untuk seluruh tingkat kelas.', konten: '<p>Diberitahukan kepada seluruh siswa dan orang tua/wali, bahwa Ujian Akhir Semester (UAS) Genap Tahun Ajaran 2025/2026 akan dilaksanakan pada tanggal 15-25 Juni 2026.</p><p>Jadwal ujian untuk masing-masing tingkat kelas dapat diunduh melalui portal akademik siswa. Pastikan untuk mempersiapkan diri dengan belajar secara teratur.</p><p>Untuk informasi lebih lanjut, silakan menghubungi wali kelas masing-masing atau datang ke bagian Tata Usaha.</p>', kategori: 'Pengumuman', author: 'Tata Usaha', thumbnail: '/images/news-3.png', createdAt: '2026-05-28' },
]

const galeriFoto = [
  { src: '/images/gallery-1.png', caption: 'Upacara Bendera 17 Agustus', album: 'Upacara', tahun: 2026 },
  { src: '/images/gallery-2.png', caption: 'Pekan Olahraga Tahunan', album: 'Olahraga', tahun: 2026 },
  { src: '/images/gallery-3.png', caption: 'Praktikum Biologi di Laboratorium', album: 'Akademik', tahun: 2026 },
  { src: '/images/gallery-4.png', caption: 'Perpustakaan Digital', album: 'Fasilitas', tahun: 2026 },
  { src: '/images/gallery-5.png', caption: 'Pentas Seni Budaya', album: 'Seni', tahun: 2026 },
  { src: '/images/gallery-6.png', caption: 'Wisuda Kelulusan Angkatan ke-25', album: 'Wisuda', tahun: 2026 },
]

const galeriVideo = [
  { embedId: 'dQw4w9WgXcQ', judul: 'Profil SMA Nusantara Mandiri 2026', kategori: 'Profil Sekolah', durasi: '3:45' },
  { embedId: 'dQw4w9WgXcQ', judul: 'Kegiatan Masa Orientasi Siswa 2026', kategori: 'Kegiatan', durasi: '5:20' },
  { embedId: 'dQw4w9WgXcQ', judul: 'Pentas Seni Akhir Tahun 2025', kategori: 'Seni', durasi: '12:10' },
  { embedId: 'dQw4w9WgXcQ', judul: 'Kompetisi Debat Bahasa Inggris', kategori: 'Akademik', durasi: '8:15' },
]

const alumniData = [
  { nama: 'Ahmad Rizki', angkatan: 2023, email: 'ahmad.rizki@email.com', noHp: '081234567890', pekerjaan: 'Mahasiswa UI', testimoni: 'SMA Nusantara Mandiri telah membentuk karakter saya menjadi pribadi yang disiplin, mandiri, dan siap bersaing di dunia perkuliahan.', foto: '/images/alumni-1.png' },
  { nama: 'Siti Nurhaliza', angkatan: 2022, email: 'siti.nurhaliza@email.com', noHp: '081234567891', pekerjaan: 'Software Engineer di Gojek', testimoni: 'Berkat dasar pendidikan yang kuat dari SMA Nusantara Mandiri, saya mampu bersaing di dunia kerja dan meraih karir impian saya.', foto: '/images/alumni-2.png' },
  { nama: 'Bambang Suprayitno', angkatan: 2021, email: 'bambang@email.com', noHp: '081234567892', pekerjaan: 'Pengusaha Startup', testimoni: 'Jiwa kewirausahaan yang ditanamkan sejak SMA sangat membantu saya dalam membangun usaha sendiri.', foto: '/images/alumni-3.png' },
]

const guruData = [
  { nama: 'Dr. Ahmad Fauzi, M.Pd.', gelar: 'S3 Pendidikan', mapel: '-', foto: '/images/teacher-1.png' },
  { nama: 'Dra. Siti Rahmawati', gelar: 'S2 Matematika', mapel: 'Matematika', foto: '/images/teacher-2.png' },
  { nama: 'Muhammad Fikri, M.Kom.', gelar: 'S2 Ilmu Komputer', mapel: 'Informatika', foto: '/images/teacher-3.png' },
  { nama: 'Dian Puspita Sari, S.Pd.', gelar: 'S1 Pendidikan', mapel: 'Bahasa Indonesia', foto: '/images/teacher-4.png' },
]

const agendaData = [
  { judul: 'Ujian Akhir Semester Genap', tanggal: '2026-06-15', deskripsi: 'Pelaksanaan UAS Genap TP 2025/2026' },
  { judul: 'Penerimaan Rapor', tanggal: '2026-06-28', deskripsi: 'Pembagian rapor semester genap' },
  { judul: 'Libur Semester Genap', tanggal: '2026-07-01', deskripsi: 'Libur semester genap tahun ajaran 2025/2026' },
  { judul: 'Masa Pengenalan Lingkungan Sekolah', tanggal: '2026-07-15', deskripsi: 'MPLS tahun ajaran 2026/2027' },
  { judul: 'Hari Pertama Masuk Sekolah', tanggal: '2026-07-22', deskripsi: 'Awal tahun ajaran 2026/2027' },
]

async function seed() {
  // Check if already seeded
  const existing = await client.execute('SELECT COUNT(*) as cnt FROM berita')
  if (existing.rows[0].cnt > 0) {
    console.log('Data already exists, skipping seed.')
    return
  }

  for (const b of berita) {
    await client.execute({
      sql: 'INSERT INTO berita (slug, judul, excerpt, konten, kategori, author, thumbnail, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      args: [b.slug, b.judul, b.excerpt, b.konten, b.kategori, b.author, b.thumbnail, b.createdAt],
    })
  }
  console.log('Seeded', berita.length, 'berita')

  for (const f of galeriFoto) {
    await client.execute({
      sql: 'INSERT INTO galeri_foto (src, caption, album, tahun) VALUES (?, ?, ?, ?)',
      args: [f.src, f.caption, f.album, f.tahun],
    })
  }
  console.log('Seeded', galeriFoto.length, 'galeri_foto')

  for (const v of galeriVideo) {
    await client.execute({
      sql: 'INSERT INTO galeri_video (embed_id, judul, kategori, durasi) VALUES (?, ?, ?, ?)',
      args: [v.embedId, v.judul, v.kategori, v.durasi],
    })
  }
  console.log('Seeded', galeriVideo.length, 'galeri_video')

  for (const a of alumniData) {
    await client.execute({
      sql: 'INSERT INTO alumni (nama, angkatan, email, no_hp, pekerjaan, testimoni, foto) VALUES (?, ?, ?, ?, ?, ?, ?)',
      args: [a.nama, a.angkatan, a.email, a.noHp, a.pekerjaan, a.testimoni, a.foto],
    })
  }
  console.log('Seeded', alumniData.length, 'alumni')

  for (const g of guruData) {
    await client.execute({
      sql: 'INSERT INTO guru (nama, gelar, mapel, foto) VALUES (?, ?, ?, ?)',
      args: [g.nama, g.gelar, g.mapel, g.foto],
    })
  }
  console.log('Seeded', guruData.length, 'guru')

  for (const a of agendaData) {
    await client.execute({
      sql: 'INSERT INTO agenda (nama, tanggal, deskripsi) VALUES (?, ?, ?)',
      args: [a.judul, a.tanggal, a.deskripsi],
    })
  }
  console.log('Seeded', agendaData.length, 'agenda')

  console.log('All data seeded successfully!')
}

seed().catch(console.error)
