import { useState } from 'react'
import { models } from '../../data/models'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { cn } from '../../utils/cn'

type Filter = 'all' | 'Open Weights' | 'Proprietary' | 'Hybrid' | 'Open Source'

export function ModelComparisonSection() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? models : models.filter(m => m.type === filter)
  const filters: Filter[] = ['all', 'Open Weights', 'Proprietary', 'Hybrid', 'Open Source']

  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PLATFORM INTELLIGENCE"
          title="The Model Landscape at a Glance"
          subtitle="Compare cost, capability, and sovereignty across every major model. The numbers speak for themselves."
        />

        <ScrollReveal>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
                  filter === f
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-500 border border-cyan-500/10 hover:text-slate-300'
                )}
              >
                {f === 'all' ? 'All Models' : f}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-500/10">
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs uppercase tracking-wider">Model</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs uppercase tracking-wider">Type</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs uppercase tracking-wider">Cost/1M</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs uppercase tracking-wider">Capability</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs uppercase tracking-wider">Sovereignty</th>
                  <th className="text-left py-3 px-4 text-slate-500 font-mono text-xs uppercase tracking-wider hidden lg:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((model, i) => (
                  <tr
                    key={i}
                    className={cn(
                      'border-b border-cyan-500/5 transition-colors hover:bg-ocean-800/30',
                      model.highlighted && 'bg-cyan-500/5 border-cyan-500/15'
                    )}
                  >
                    <td className="py-3 px-4">
                      <span className={cn('font-semibold', model.highlighted ? 'text-cyan-400' : 'text-white')}>
                        {model.name}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={cn(
                        'inline-flex px-2 py-0.5 rounded text-[10px] font-mono border',
                        model.type === 'Open Weights' && 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                        model.type === 'Open Source' && 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                        model.type === 'Proprietary' && 'bg-rose-500/10 text-rose-400 border-rose-500/20',
                        model.type === 'Hybrid' && 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                      )}>
                        {model.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-300">{model.costPer1M}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded-full bg-ocean-700 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${model.capability}%`,
                              background: model.capability > 90 ? '#22d3ee' : model.capability > 85 ? '#10b981' : '#64748b',
                            }}
                          />
                        </div>
                        <span className="font-mono text-xs text-slate-400">{model.capability}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {model.sovereignty === 'full' && <span className="text-emerald-400">Full</span>}
                      {model.sovereignty === 'none' && <span className="text-rose-400">None</span>}
                      {model.sovereignty === 'partial' && <span className="text-amber-400">Partial</span>}
                    </td>
                    <td className="py-3 px-4 text-slate-500 hidden lg:table-cell text-xs">{model.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
