'use client'

import { Printer } from 'lucide-react'
import Button from './Button'

export default function PrintButton({ label = 'Cetak Halaman', className }) {
  return (
    <Button variant="secondary" size="sm" className={className} onClick={() => window.print()}>
      <Printer size={16} />
      {label}
    </Button>
  )
}
