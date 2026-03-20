import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { GlowButton } from '../shared/GlowButton'

const steps = [
  { step: '01', label: 'You tell us your problem', desc: 'A 30-minute requirements call. What do your agents need to do? What data, what workflows, what outcomes?' },
  { step: '02', label: 'We build your agent swarm', desc: 'Our team goes to work immediately — designing, orchestrating, and deploying a multi-agent system tailored to your use case.' },
  { step: '03', label: 'You get a working prototype', desc: 'Within 48 hours, you have a live, functional agent swarm POC solving your actual problem. Not a slide deck. Working software.' },
]

export function BookingSection() {
  return (
    <section id="booking" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,116,144,0.08),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="LIMITED AVAILABILITY"
          title="We'll Build Your Agent Swarm in 48 Hours. Free."
          subtitle="This offer is worth millions in development costs — which is why we can't offer it to everyone. Qualified organizations get a working multi-agent prototype built in 48 hours, at zero cost. Apply now to see if you qualify."
          eyebrowColor="text-amber-400"
        />

        {/* The big promise */}
        <ScrollReveal>
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-ocean-800/30 p-8 md:p-10 mb-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6">
              <div className="text-center">
                <span className="font-mono text-5xl md:text-6xl font-bold text-emerald-400">48h</span>
                <p className="text-slate-400 text-sm mt-1">From call to prototype</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-emerald-500/20" />
              <div className="text-center">
                <span className="font-mono text-5xl md:text-6xl font-bold text-cyan-400">$0</span>
                <p className="text-slate-400 text-sm mt-1">Completely free</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-emerald-500/20" />
              <div className="text-center">
                <span className="font-mono text-5xl md:text-6xl font-bold text-amber-400">100%</span>
                <p className="text-slate-400 text-sm mt-1">Guaranteed delivery</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Not a demo. Not a mockup. A real, functioning agent swarm built on your requirements, solving your problem, running on production-grade infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal>
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-8 leading-snug">How It Works</h3>
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <span className="font-mono text-sm font-bold text-cyan-400">{s.step}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white mb-1">{s.label}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-amber-400 text-sm font-medium">
                  We only accept a limited number of builds per month. This offer represents millions in development value — delivered free to qualified organizations who are serious about deploying agents.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <GlowButton href="https://cal.com/govind-davis-strattegys/cetacean-labs-oceanic-ai-swarm-poc">
                  Apply for Your Free 48-Hour Build
                </GlowButton>
                <GlowButton href="https://cetacean-oss.b2bcontentartist.com/" variant="secondary">
                  Explore the AI Landscape Report
                </GlowButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-4 leading-snug">What You Get in 48 Hours</h3>
              <div className="space-y-3">
                {[
                  'A working multi-agent swarm tailored to your specific use case',
                  'Agents that plan, retrieve, analyze, and deliver autonomously',
                  'Built on open-source models — no vendor lock-in, 70-90% cheaper than proprietary',
                  'Full source code and deployment documentation',
                  'A live walkthrough of how the agents solve your problem',
                  'Roadmap for scaling from POC to production',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 110 14A7 7 0 018 1zm3.3 4.7a.5.5 0 00-.7 0L7 9.3 5.4 7.7a.5.5 0 10-.7.7l2 2a.5.5 0 00.7 0l4-4a.5.5 0 000-.7z" /></svg>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-500/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Requirements call: 30 minutes, virtual or on-site</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Completely free — no strings, no commitment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>48-hour delivery guaranteed or we keep building until it's done</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
