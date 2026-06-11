'use client'

import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40',
  secondary: 'bg-transparent text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 hover:text-primary-600',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25',
  white: 'bg-white text-primary-700 hover:bg-gray-100',
  ghost: 'bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
}

export default function Button({ children, variant = 'primary', size = 'md', className, href, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <button className={classes} {...props}>{children}</button>
}
