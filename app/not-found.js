import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl font-extrabold text-primary-600 mb-4">404</h1>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
