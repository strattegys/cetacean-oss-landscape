import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration = 2000, active = true) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, active])

  return value
}
