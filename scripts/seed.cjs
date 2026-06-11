const Database = require('better-sqlite3')

const sqlite = new Database('./db/sekolah.db')

// Clear existing data
sqlite.exec(`
  DELETE FROM berita;
  DELETE FROM agenda;
  DELETE FROM guru;
  DELETE FROM galeri_foto;
  DELETE FROM galeri_video;
`)

const seedData = [
  {
    table: 'berita',
    rows: [
      { slug: 'siswa-raih-medali-emas-osn', judul: 'Siswa Raih Medali Emas OSN 2026', excerpt: 'Prestasi membanggakan diraih oleh siswa kelas XI IPA.', konten: '<p>Tim Olimpiade Sains kembali menorehkan prestasi gemilang.</p>', kategori: 'Prestasi', author: 'Humas Sekolah' },
      { slug: 'workshop-robotik-ai', judul: 'Workshop Robotik dan AI', excerpt: 'Workshop robotik diikuti oleh 200 siswa.', konten: '<p>Workshop Robotik dan AI sukses digelar.</p>', kategori: 'Kegiatan', author: 'Tim Kurikulum' },
      { slug: 'jadwal-ujian-akhir-semester', judul: 'Jadwal Ujian Akhir Semester Genap', excerpt: 'Informasi jadwal ujian akhir semester.', konten: '<p>Ujian dilaksanakan 15-27 Juni 2026.</p>', kategori: 'Pengumuman', author: 'Tata Usaha' },
    ],
  },
  {
    table: 'agenda',
    rows: [
      { nama: 'Ujian Akhir Semester', tanggal: '2026-06-15', tanggal_akhir: '2026-06-27', kategori: 'Ujian', deskripsi: 'UAS Genap TA 2025/2026' },
      { nama: 'Libur Semester', tanggal: '2026-06-28', tanggal_akhir: '2026-07-09', kategori: 'Libur', deskripsi: 'Libur akhir semester' },
      { nama: 'Awal Tahun Ajaran Baru', tanggal: '2026-07-13', tanggal_akhir: '2026-07-13', kategori: 'Kegiatan', deskripsi: 'Masuk sekolah TA 2026/2027' },
    ],
  },
  {
    table: 'guru',
    rows: [
      { nama: 'Dr. Ahmad Fauzi, M.Pd.', gelar: 'S3 Pendidikan', mapel: 'Kepala Sekolah', departemen: 'Pimpinan' },
      { nama: 'Dra. Dewi Sartika, M.Si.', gelar: 'S2 Kimia', mapel: 'Kimia', departemen: 'IPA' },
      { nama: 'Ir. Bambang Wijaya, M.T.', gelar: 'S2 Teknik', mapel: 'Fisika', departemen: 'IPA' },
      { nama: 'Dr. Rina Marlina, S.Pd., M.Pd.', gelar: 'S3 Pendidikan', mapel: 'Matematika', departemen: 'IPA' },
    ],
  },
  {
    table: 'galeri_foto',
    rows: [
      { src: '/images/gallery-1.svg', caption: 'Upacara Bendera', album: 'Upacara', tahun: 2026 },
      { src: '/images/gallery-2.svg', caption: 'Pekan Olahraga', album: 'Olahraga', tahun: 2026 },
      { src: '/images/gallery-3.svg', caption: 'Praktikum IPA', album: 'Akademik', tahun: 2026 },
    ],
  },
  {
    table: 'galeri_video',
    rows: [
      { embed_id: 'dQw4w9WgXcQ', judul: 'Profil SMA Nusantara Mandiri', durasi: '3:45', kategori: 'Dokumentasi' },
      { embed_id: 'dQw4w9WgXcQ', judul: 'Tutorial PPDB Online', durasi: '2:15', kategori: 'Tutorial' },
    ],
  },
]

for (const { table, rows } of seedData) {
  for (const row of rows) {
    const columns = Object.keys(row)
    const values = Object.values(row)
    const placeholders = values.map(() => '?').join(', ')
    sqlite.prepare(`INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`).run(...values)
  }
}

sqlite.close()
console.log('Seed data inserted successfully')
