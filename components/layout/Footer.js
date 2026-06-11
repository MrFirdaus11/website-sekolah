import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-white font-extrabold text-sm">
                N
              </div>
              <span className="font-display font-bold text-lg text-white">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-sm leading-relaxed">{SITE_CONFIG.description}</p>
            <div className="flex gap-3 mt-5">
              {[
                { href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                { href: SITE_CONFIG.social.youtube, label: 'YouTube' },
                { href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                { href: SITE_CONFIG.social.tiktok, label: 'TikTok' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-all text-xs font-semibold"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Beranda', 'Profil', 'Akademik', 'PPDB', 'Berita', 'Galeri', 'Kontak', 'Alumni'].map((item) => (
                <Link
                  key={item}
                  href={`/${item === 'Beranda' ? '' : item.toLowerCase()}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Informasi</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Sejarah', href: '/profil#sejarah' },
                { label: 'Visi & Misi', href: '/profil#visi-misi' },
                { label: 'Fasilitas', href: '/profil#fasilitas' },
                { label: 'Tenaga Pengajar', href: '/profil#guru' },
                { label: 'Ekstrakurikuler', href: '/akademik#ekskul' },
                { label: 'Kalender Akademik', href: '/akademik#kalender' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Hubungi Kami</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="flex gap-3 text-sm hover:text-white transition-colors">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex gap-3 text-sm hover:text-white transition-colors">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-sm hover:text-white transition-colors"
              >
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span>{SITE_CONFIG.contact.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>&copy; {year} {SITE_CONFIG.name}. All rights reserved.</span>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
