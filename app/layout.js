import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/layout/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SearchModal from '@/components/layout/SearchModal'
import BackToTop from '@/components/layout/BackToTop'
import ToastContainer from '@/components/ui/Toast'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata = {
  title: {
    default: 'SMA Nusantara Mandiri - Sekolah Unggul & Berkarya',
    template: '%s | SMA Nusantara Mandiri',
  },
  description:
    'SMA Nusantara Mandiri - Sekolah unggulan yang berkomitmen mencetak generasi berprestasi, berkarakter, dan siap menghadapi tantangan global.',
  openGraph: {
    title: 'SMA Nusantara Mandiri',
    description:
      'Sekolah unggulan yang berkomitmen mencetak generasi berprestasi, berkarakter, dan siap menghadapi tantangan global.',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <SearchModal />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}
