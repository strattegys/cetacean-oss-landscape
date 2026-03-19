import { waves } from '../../data/waves'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'

export function FiveWavesSection() {
  return (
    <section id="waves" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SIGNAL ANALYSIS"
          title="Five Waves Reshaping AI — All of Them Already Here"
          subtitle="These aren't predictions. They're observations. The question is whether you're riding these waves or drowning in them."
        />

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waves.slice(0, 3).map((wave, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6 hover:border-cyan-500/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-3xl font-extrabold bg-gradient-to-b from-cyan-400/40 to-cyan-400/10 bg-clip-text text-transparent">
                    {wave.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/15">
                    {wave.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{wave.title}</h3>
                <p className="text-rose-400/90 text-sm font-medium mb-3 italic">{wave.urgency}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{wave.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {waves.slice(3).map((wave, i) => (
            <ScrollReveal key={i + 3} delay={(i + 3) * 0.08}>
              <div className="h-full rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6 hover:border-cyan-500/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-3xl font-extrabold bg-gradient-to-b from-cyan-400/40 to-cyan-400/10 bg-clip-text text-transparent">
                    {wave.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/15">
                    {wave.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{wave.title}</h3>
                <p className="text-rose-400/90 text-sm font-medium mb-3 italic">{wave.urgency}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{wave.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
