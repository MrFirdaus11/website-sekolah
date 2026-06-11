'use client'

import { useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useSearchStore } from '@/store/useSearchStore'

export default function SearchModal() {
  const { isOpen, query, setQuery, closeSearch } = useSearchStore()

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') closeSearch()
      if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && !isOpen) {
        e.preventDefault()
        useSearchStore.getState().openSearch()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, closeSearch])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
      onClick={(e) => e.target === e.currentTarget && closeSearch()}
    >
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Ketik kata kunci... (contoh: PPDB, prestasi, guru)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none text-base"
            autoFocus
          />
          <button onClick={closeSearch} className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <X size={20} />
          </button>
        </div>
        <div className="p-5 text-center text-sm text-gray-500 dark:text-gray-400">
          Tekan <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-xs font-mono">ESC</kbd> untuk menutup
        </div>
      </div>
    </div>
  )
}
