import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { GlowButton } from '../shared/GlowButton'

const features = [
  { icon: '📊', text: 'State of OSS AI 2026 — what 67% of enterprise leaders already know' },
  { icon: '🤖', text: 'Live OceanicAI Demo — see agents orchestrate in real time' },
  { icon: '💰', text: 'Cost & Compliance Analysis — your specific TCO, not generic slides' },
  { icon: '📄', text: 'Walk away with the full Open Source AI Landscape Report' },
]

export function BookingSection() {
  return (
    <section id="booking" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,116,144,0.08),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="THE WINDOW IS CLOSING"
          title="Don't Get Left Behind"
          subtitle="30 minutes. No pitch. Real data on what's production-ready, what it costs, and how your startups can deploy agents this quarter."
          eyebrowColor="text-rose-400"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{f.icon}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}

              <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-amber-400 text-sm font-medium">
                  Teams that booked this month deployed their first agents within 6 weeks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <GlowButton href="https://cal.com/govind-davis-strattegys/cetacean-labs-open-source-ai-landscape">
                  Book Your 30-Minute Briefing
                </GlowButton>
                <GlowButton href="https://cetacean-oss.b2bcontentartist.com/" variant="secondary">
                  Explore the Interactive Report
                </GlowButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/30 p-6">
              <h3 className="font-display text-lg font-bold text-white mb-2">Your 30-Minute Intelligence Briefing</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400 text-xs w-16">Part 1</span>
                  <span>State of Open Source AI — market data, cost reality, production-ready models</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400 text-xs w-16">Part 2</span>
                  <span>Live OceanicAI demo — agent orchestration, RAG, fine-tuning, cost modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400 text-xs w-16">Part 3</span>
                  <span>Q&A tailored to your cohort's verticals and specific challenges</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-500/10">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Virtual (Zoom) or on-site</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Complimentary — no commitment required</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Customized to your cohort's focus areas</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
