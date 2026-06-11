'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  { label: 'Data Pribadi' },
  { label: 'Data Orang Tua' },
  { label: 'Upload Dokumen' },
  { label: 'Review & Submit' },
]

export default function Stepper({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {steps.map((step, i) => {
        const stepNum = i + 1
        const isActive = stepNum === currentStep
        const isCompleted = stepNum < currentStep

        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200',
                  isActive && 'bg-primary-600 text-white ring-4 ring-primary-200 dark:ring-primary-800',
                  isCompleted && 'bg-secondary-500 text-white',
                  !isActive && !isCompleted && 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                )}
              >
                {isCompleted ? <Check size={18} /> : stepNum}
              </div>
              <span
                className={cn(
                  'text-xs mt-1.5 text-center max-w-[80px]',
                  isActive ? 'text-primary-600 font-semibold' : 'text-gray-400 dark:text-gray-500'
                )}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-0.5 mx-2 mb-5',
                  isCompleted ? 'bg-secondary-500' : 'bg-gray-200 dark:bg-gray-700'
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
