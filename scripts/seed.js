import Database from 'better-sqlite3'

const sqlite = new Database('./db/sekolah.db')

const seedData = {
  berita: [
    { slug: 'siswa-raih-medali-emas-osn', judul: 'Siswa Raih Medali Emas OSN 2026', excerpt: 'Prestasi membanggakan diraih oleh siswa kelas XI IPA.', konten: '<p>Tim Olimpiade Sains kembali menorehkan prestasi gemilang.</p>', kategori: 'Prestasi', author: 'Humas Sekolah' },
    { slug: 'workshop-robotik-ai', judul: 'Workshop Robotik dan AI', excerpt: 'Workshop robotik diikuti oleh 200 siswa.', konten: '<p>Workshop Robotik dan AI sukses digelar.</p>', kategori: 'Kegiatan', author: 'Tim Kurikulum' },
    { slug: 'jadwal-ujian-akhir-semester', judul: 'Jadwal Ujian Akhir Semester Genap', excerpt: 'Informasi jadwal ujian akhir semester.', konten: '<p>Ujian dilaksanakan 15-27 Juni 2026.</p>', kategori: 'Pengumuman', author: 'Tata Usaha' },
  ],
  agenda: [
    { nama: 'Ujian Akhir Semester', tanggal: '2026-06-15', tanggalAkhir: '2026-06-27', kategori: 'Ujian', deskripsi: 'UAS Genap TA 2025/2026' },
    { nama: 'Libur Semester', tanggal: '2026-06-28', tanggalAkhir: '2026-07-09', kategori: 'Libur', deskripsi: 'Libur akhir semester' },
    { nama: 'Awal Tahun Ajaran Baru', tanggal: '2026-07-13', tanggalAkhir: '2026-07-13', kategori: 'Kegiatan', deskripsi: 'Masuk sekolah TA 2026/2027' },
  ],
  guru: [
    { nama: 'Dr. Ahmad Fauzi, M.Pd.', gelar: 'S3 Pendidikan', mapel: 'Kepala Sekolah', departemen: 'Pimpinan' },
    { nama: 'Dra. Dewi Sartika, M.Si.', gelar: 'S2 Kimia', mapel: 'Kimia', departemen: 'IPA' },
    { nama: 'Ir. Bambang Wijaya, M.T.', gelar: 'S2 Teknik', mapel: 'Fisika', departemen: 'IPA' },
    { nama: 'Dr. Rina Marlina, S.Pd., M.Pd.', gelar: 'S3 Pendidikan', mapel: 'Matematika', departemen: 'IPA' },
  ],
  galeriFoto: [
    { src: '/images/gallery-1.svg', caption: 'Upacara Bendera', album: 'Upacara', tahun: 2026 },
    { src: '/images/gallery-2.svg', caption: 'Pekan Olahraga', album: 'Olahraga', tahun: 2026 },
    { src: '/images/gallery-3.svg', caption: 'Praktikum IPA', album: 'Akademik', tahun: 2026 },
  ],
  galeriVideo: [
    { embedId: 'dQw4w9WgXcQ', judul: 'Profil SMA Nusantara Mandiri', durasi: '3:45', kategori: 'Dokumentasi' },
    { embedId: 'dQw4w9WgXcQ', judul: 'Tutorial PPDB Online', durasi: '2:15', kategori: 'Tutorial' },
  ],
}

for (const [table, rows] of Object.entries(seedData)) {
  for (const row of rows) {
    const columns = Object.keys(row)
    const values = Object.values(row)
    const placeholders = values.map(() => '?').join(', ')
    sqlite.prepare(`INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`).run(...values)
  }
}

sqlite.close()
console.log('Seed data inserted successfully')
