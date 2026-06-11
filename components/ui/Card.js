'use client'

import { cn } from '@/lib/utils'

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-200',
        hover && 'hover:-translate-y-1 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
