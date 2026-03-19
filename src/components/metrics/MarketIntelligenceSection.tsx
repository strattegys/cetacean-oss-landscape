import { metrics } from '../../data/metrics'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { AnimatedNumber } from '../shared/AnimatedNumber'

export function MarketIntelligenceSection() {
  return (
    <section id="metrics" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MARKET INTELLIGENCE"
          title="The Numbers That Should Keep You Up at Night"
          subtitle="The open-source AI ecosystem isn't emerging — it's dominating. Here's the proof."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/50 backdrop-blur-sm p-6 hover:border-cyan-500/25 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start justify-between mb-3">
                  <div className="font-mono text-4xl md:text-5xl font-bold text-white">
                    <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 2l3 4H2z" /></svg>
                    {m.delta}
                  </span>
                </div>
                <p className="text-slate-400 text-sm font-medium">{m.label}</p>
                <p className="text-slate-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {m.urgency}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
