import { motion } from 'framer-motion'
import { GlowButton } from '../shared/GlowButton'
import { AgentNetworkBackground } from './AgentNetworkBackground'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,116,144,0.15),transparent_70%)]" />
      <AgentNetworkBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            THE AGENT ECONOMY IS HERE
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          While You Plan,
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent glow-text">
            Your Competitors Deploy
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          67% of enterprise AI leaders have already moved to hybrid open-source stacks.
          The 2026 Open Source AI Landscape reveals who's winning — and what it costs to wait.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlowButton href="#metrics">See the Data</GlowButton>
          <GlowButton href="#booking" variant="secondary">Book Your Intelligence Briefing</GlowButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-8 text-slate-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
