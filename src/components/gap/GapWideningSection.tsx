import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { useInView } from '../../hooks/useInView'

const comparisons = [
  { metric: 'Inference Cost per 1M Tokens', adopter: '$0.20', laggard: '$15.00', adopterWidth: 2, laggardWidth: 95 },
  { metric: 'Time to Deploy New AI Feature', adopter: '2 days', laggard: '3 months', adopterWidth: 5, laggardWidth: 90 },
  { metric: 'Data Sovereignty', adopter: 'Full Control', laggard: 'None', adopterWidth: 10, laggardWidth: 90 },
  { metric: 'Vendor Lock-in Risk', adopter: 'Minimal', laggard: 'Critical', adopterWidth: 8, laggardWidth: 95 },
  { metric: 'Agent Workflow Capability', adopter: 'Production', laggard: 'None', adopterWidth: 10, laggardWidth: 90 },
]

export function GapWideningSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMPETITIVE ANALYSIS"
          title="The Gap Is Widening Every Quarter"
          subtitle="Early adopters of open-source AI infrastructure aren't just saving money. They're building capabilities that late movers can't catch up to."
          eyebrowColor="text-rose-400"
        />

        <ScrollReveal>
          <div className="space-y-6">
            {comparisons.map((c, i) => (
              <div key={i} className="space-y-2">
                <p className="text-sm text-slate-400 font-medium">{c.metric}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-emerald-400">Early Adopters</span>
                      <span className="text-xs font-mono text-emerald-400">{c.adopter}</span>
                    </div>
                    <div className="h-3 rounded-full bg-ocean-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 ease-out"
                        style={{ width: inView ? `${c.adopterWidth}%` : '0%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-rose-400">Laggards</span>
                      <span className="text-xs font-mono text-rose-400">{c.laggard}</span>
                    </div>
                    <div className="h-3 rounded-full bg-ocean-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-rose-400 transition-all duration-1000 ease-out"
                        style={{ width: inView ? `${c.laggardWidth}%` : '0%', transitionDelay: `${i * 100}ms` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              In 2024, 18% of Fortune 500 AI leaders had deployed hybrid stacks.
              Today it's 67%. <span className="text-rose-400 font-semibold">The window for first-mover advantage is closing.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
