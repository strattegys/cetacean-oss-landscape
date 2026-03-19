import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'

interface Props {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

export function AnimatedNumber({ value, prefix = '', suffix = '', duration = 2000, decimals = 0 }: Props) {
  const { ref, inView } = useInView(0.3)
  const current = useCountUp(value, duration, inView)

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{current.toFixed(decimals)}{suffix}
    </span>
  )
}
