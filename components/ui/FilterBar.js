'use client'

import { cn } from '@/lib/utils'

export default function FilterBar({ categories, active, onChange, className }) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <button
        onClick={() => onChange('all')}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
          active === 'all'
            ? 'bg-primary-600 text-white border-primary-600'
            : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary-500'
        )}
      >
        Semua
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
            active === cat
              ? 'bg-primary-600 text-white border-primary-600'
              : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary-500'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
