'use client'

import { GraduationCap, Users, Calendar, MapPin } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import { statistik } from '@/lib/data'

const icons = {
  'graduation-cap': GraduationCap,
  'users': Users,
  'calendar': Calendar,
  'map-pin': MapPin,
}

function StatItem({ item }) {
  const [ref, inView] = useInView()
  const count = useCountUp(item.value, inView)
  const Icon = icons[item.icon]

  return (
    <div ref={ref} className="text-center p-6">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-500">
          {Icon && <Icon size={28} />}
        </div>
      </div>
      <div className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
        {count.toLocaleString()}{item.suffix || ''}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{item.label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="bg-gray-50 dark:bg-gray-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {statistik.map((item) => (
            <StatItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
