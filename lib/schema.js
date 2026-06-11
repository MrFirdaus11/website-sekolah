import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core'

/* ========== Better Auth Tables ========== */

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: integer('email_verified', { mode: 'boolean' }).default(false),
  image: text('image'),
  password: text('password'),
  role: text('role').default('admin'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
  token: text('token').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
})

export const accounts = sqliteTable('accounts', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  accessTokenExpiresAt: integer('access_token_expires_at', { mode: 'timestamp' }),
  refreshTokenExpiresAt: integer('refresh_token_expires_at', { mode: 'timestamp' }),
  scope: text('scope'),
  idToken: text('id_token'),
  password: text('password'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

export const verifications = sqliteTable('verifications', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})

/* ========== Application Schema ========== */

export const berita = sqliteTable('berita', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  judul: text('judul').notNull(),
  excerpt: text('excerpt'),
  konten: text('konten').notNull(),
  kategori: text('kategori').default('Umum'),
  author: text('author').default('Admin'),
  authorAvatar: text('author_avatar'),
  thumbnail: text('thumbnail'),
  published: integer('published', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default("(datetime('now'))"),
  updatedAt: text('updated_at').default("(datetime('now'))"),
})

export const galeriFoto = sqliteTable('galeri_foto', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  src: text('src').notNull(),
  caption: text('caption'),
  album: text('album').default('Umum'),
  tahun: integer('tahun'),
  createdAt: text('created_at').default("(datetime('now'))"),
})

export const galeriVideo = sqliteTable('galeri_video', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  embedId: text('embed_id').notNull(),
  judul: text('judul').notNull(),
  durasi: text('durasi'),
  kategori: text('kategori').default('Dokumentasi'),
  createdAt: text('created_at').default("(datetime('now'))"),
})

export const ppdbPendaftar = sqliteTable('ppdb_pendaftar', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  noRegistrasi: text('no_registrasi').notNull().unique(),
  status: text('status').default('Terdaftar'),
  nama: text('nama').notNull(),
  nisn: text('nisn'),
  tempatLahir: text('tempat_lahir'),
  tanggalLahir: text('tanggal_lahir'),
  jenisKelamin: text('jenis_kelamin'),
  alamat: text('alamat'),
  noHp: text('no_hp'),
  email: text('email'),
  namaAyah: text('nama_ayah'),
  pekerjaanAyah: text('pekerjaan_ayah'),
  namaIbu: text('nama_ibu'),
  pekerjaanIbu: text('pekerjaan_ibu'),
  alamatOrtu: text('alamat_ortu'),
  noHpOrtu: text('no_hp_ortu'),
  createdAt: text('created_at').default("(datetime('now'))"),
  updatedAt: text('updated_at').default("(datetime('now'))"),
})

export const kontakPesan = sqliteTable('kontak_pesan', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nama: text('nama').notNull(),
  email: text('email').notNull(),
  kategori: text('kategori'),
  pesan: text('pesan').notNull(),
  dibaca: integer('dibaca', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default("(datetime('now'))"),
})

export const alumni = sqliteTable('alumni', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nama: text('nama').notNull(),
  angkatan: integer('angkatan'),
  email: text('email'),
  noHp: text('no_hp'),
  pekerjaan: text('pekerjaan'),
  foto: text('foto'),
  testimoni: text('testimoni'),
  createdAt: text('created_at').default("(datetime('now'))"),
})

export const agenda = sqliteTable('agenda', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nama: text('nama').notNull(),
  tanggal: text('tanggal'),
  tanggalAkhir: text('tanggal_akhir'),
  kategori: text('kategori').default('Kegiatan'),
  deskripsi: text('deskripsi'),
  createdAt: text('created_at').default("(datetime('now'))"),
})

export const guru = sqliteTable('guru', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nama: text('nama').notNull(),
  gelar: text('gelar'),
  mapel: text('mapel'),
  foto: text('foto'),
  departemen: text('departemen'),
  createdAt: text('created_at').default("(datetime('now'))"),
})
