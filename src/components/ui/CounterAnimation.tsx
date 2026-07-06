import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  increment?: number
  incrementInterval?: number
}

export default function CounterAnimation({ end, duration = 2000, suffix = '', prefix = '', increment = 1, incrementInterval = 3000 }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [liveCount, setLiveCount] = useState(end)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  // Initial count-up animation
  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
        setLiveCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  // Live incrementing after initial animation
  useEffect(() => {
    if (!hasAnimated.current || count < end) return

    const interval = setInterval(() => {
      setLiveCount(prev => prev + increment)
    }, incrementInterval)

    return () => clearInterval(interval)
  }, [count, end, increment, incrementInterval])

  const displayValue = count >= end ? liveCount : count

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}
