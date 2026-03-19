import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { TokenCostChart } from './TokenCostChart'
import { SpendGrowthChart } from './SpendGrowthChart'
import { AdoptionDriversChart } from './AdoptionDriversChart'
import { CapabilityRadarChart } from './CapabilityRadarChart'

export function ChartsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DATA VISUALIZATIONS"
          title="The Data Doesn't Lie"
          subtitle="Interactive charts comparing open-source and proprietary AI across cost, capability, and adoption."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-1">Token Cost Comparison</h3>
              <p className="text-slate-500 text-sm mb-4">Cost per 1M tokens — the gap is staggering</p>
              <TokenCostChart />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-1">Enterprise AI Spend Growth</h3>
              <p className="text-slate-500 text-sm mb-4">$3.5B to $58B in six years — you are here</p>
              <SpendGrowthChart />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-1">Why Enterprises Choose Open Source</h3>
              <p className="text-slate-500 text-sm mb-4">Top adoption drivers ranked by survey data</p>
              <AdoptionDriversChart />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-1">Capability Benchmarks</h3>
              <p className="text-slate-500 text-sm mb-4">Open source wins where it matters most</p>
              <CapabilityRadarChart />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
