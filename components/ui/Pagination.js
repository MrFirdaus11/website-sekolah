'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Pagination({ current, total, onChange }) {
  if (total <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current <= 1}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={18} />
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={cn(
            'w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors',
            page === current
              ? 'bg-primary-600 text-white border-primary-600'
              : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white hover:border-primary-600'
          )}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current >= total}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
