'use client'

import { useEffect, useState } from 'react'

export function useCountUp(target, isActive, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    let startTime
    let animationFrame

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
      else setCount(target)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, isActive, duration])

  return count
}
