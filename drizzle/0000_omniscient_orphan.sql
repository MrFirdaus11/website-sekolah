CREATE TABLE `accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`id_token` text,
	`password` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `agenda` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nama` text NOT NULL,
	`tanggal` text,
	`tanggal_akhir` text,
	`kategori` text DEFAULT 'Kegiatan',
	`deskripsi` text,
	`created_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE TABLE `alumni` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nama` text NOT NULL,
	`angkatan` integer,
	`email` text,
	`no_hp` text,
	`pekerjaan` text,
	`foto` text,
	`testimoni` text,
	`created_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE TABLE `berita` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`judul` text NOT NULL,
	`excerpt` text,
	`konten` text NOT NULL,
	`kategori` text DEFAULT 'Umum',
	`author` text DEFAULT 'Admin',
	`author_avatar` text,
	`thumbnail` text,
	`published` integer DEFAULT true,
	`created_at` text DEFAULT '(datetime(''now''))',
	`updated_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `berita_slug_unique` ON `berita` (`slug`);--> statement-breakpoint
CREATE TABLE `galeri_foto` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`src` text NOT NULL,
	`caption` text,
	`album` text DEFAULT 'Umum',
	`tahun` integer,
	`created_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE TABLE `galeri_video` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`embed_id` text NOT NULL,
	`judul` text NOT NULL,
	`durasi` text,
	`kategori` text DEFAULT 'Dokumentasi',
	`created_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE TABLE `guru` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nama` text NOT NULL,
	`gelar` text,
	`mapel` text,
	`foto` text,
	`departemen` text,
	`created_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE TABLE `kontak_pesan` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nama` text NOT NULL,
	`email` text NOT NULL,
	`kategori` text,
	`pesan` text NOT NULL,
	`dibaca` integer DEFAULT false,
	`created_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE TABLE `ppdb_pendaftar` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`no_registrasi` text NOT NULL,
	`status` text DEFAULT 'Terdaftar',
	`nama` text NOT NULL,
	`nisn` text,
	`tempat_lahir` text,
	`tanggal_lahir` text,
	`jenis_kelamin` text,
	`alamat` text,
	`no_hp` text,
	`email` text,
	`nama_ayah` text,
	`pekerjaan_ayah` text,
	`nama_ibu` text,
	`pekerjaan_ibu` text,
	`alamat_ortu` text,
	`no_hp_ortu` text,
	`created_at` text DEFAULT '(datetime(''now''))',
	`updated_at` text DEFAULT '(datetime(''now''))'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `ppdb_pendaftar_no_registrasi_unique` ON `ppdb_pendaftar` (`no_registrasi`);--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	`token` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sessions_token_unique` ON `sessions` (`token`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`email_verified` integer DEFAULT false,
	`image` text,
	`password` text,
	`role` text DEFAULT 'admin',
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `verifications` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
