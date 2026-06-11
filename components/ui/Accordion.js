'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, className }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className={cn('border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden', className)}>
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            {item.pertanyaan}
            <ChevronDown
              className={cn(
                'w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0',
                openId === item.id && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'grid transition-all duration-200',
              openId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            )}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.jawaban}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
