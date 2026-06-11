'use client'

import { useEffect, useCallback, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, index, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(index)

  const goTo = useCallback((dir) => {
    setCurrentIndex((prev) => (prev + dir + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goTo(-1)
      if (e.key === 'ArrowRight') goTo(1)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, goTo])

  if (!images.length) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white p-2">
        <X size={28} />
      </button>

      <button onClick={() => goTo(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2">
        <ChevronLeft size={36} />
      </button>

      <img
        src={images[currentIndex]}
        alt={`Foto ${currentIndex + 1}`}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
      />

      <button onClick={() => goTo(1)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2">
        <ChevronRight size={36} />
      </button>

      <div className="absolute bottom-4 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
