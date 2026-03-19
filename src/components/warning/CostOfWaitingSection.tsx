import { useState } from 'react'
import { useInterval } from '../../hooks/useInterval'
import { useInView } from '../../hooks/useInView'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { formatWithCommas } from '../../utils/formatNumber'

export function CostOfWaitingSection() {
  const { ref, inView } = useInView(0.2)
  const [dollars, setDollars] = useState(847200)
  const [hours, setHours] = useState(14400)
  const [gap, setGap] = useState(2.3)

  useInterval(() => {
    if (!inView) return
    setDollars(d => d + 12)
    setHours(h => h + 0.3)
    setGap(g => Math.min(g + 0.0001, 5))
  }, 1000)

  const counters = [
    {
      value: `$${formatWithCommas(dollars)}`,
      label: 'Wasted on Proprietary Inference',
      sub: 'Based on median enterprise AI spend',
      color: 'text-rose-400',
      border: 'border-rose-500/20',
      bg: 'bg-rose-500/5',
    },
    {
      value: `${formatWithCommas(hours)} hrs`,
      label: 'Lost to Manual Workflows',
      sub: 'That agents could automate today',
      color: 'text-amber-400',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
    },
    {
      value: `+${gap.toFixed(1)}%`,
      label: 'Adoption Gap Per Quarter',
      sub: 'Between early movers and everyone else',
      color: 'text-cyan-400',
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-500/5',
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE COST OF INACTION"
          title="Every Month Without Agents Is a Month of Wasted Spend"
          subtitle="These numbers tick up in real time. The cost of waiting isn't theoretical — it's compounding."
          eyebrowColor="text-rose-400"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counters.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`rounded-xl border ${c.border} ${c.bg} p-8 text-center`}>
                <div className={`font-mono text-3xl md:text-4xl font-bold ${c.color} tabular-nums`}>
                  {c.value}
                </div>
                <p className="text-white font-semibold mt-3">{c.label}</p>
                <p className="text-slate-500 text-sm mt-1">{c.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
            Open-source alternatives deliver 85% of the capability at 10% of the cost.
            The math is simple. The urgency is real.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
