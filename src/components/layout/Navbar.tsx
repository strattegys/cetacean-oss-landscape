import { useState, useEffect } from 'react'
import { GlowButton } from '../shared/GlowButton'
import { Logo } from '../shared/Logo'

const tickerItems = [
  '67% of enterprises have deployed hybrid AI stacks',
  'Open source models now deliver 85% of proprietary capability',
  '$37B enterprise GenAI spend in 2026 — 3.2x YoY growth',
  'vLLM surpassed Kubernetes as GitHub\'s #1 project',
  '90% cost reduction with open-source inference',
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ocean-950/80 backdrop-blur-xl border-b border-cyan-500/10' : ''}`}>
      {/* Urgency ticker */}
      <div className="bg-gradient-to-r from-cyan-900/40 via-teal-900/40 to-cyan-900/40 border-b border-cyan-500/10 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: 'ticker-scroll 30s linear infinite' }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6 py-2 text-xs font-mono text-cyan-300/70 leading-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-display font-bold text-white text-lg">Cetacean Labs</span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            OSS AI 2026
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#metrics" className="hover:text-cyan-400 transition-colors">Data</a>
          <a href="#agents" className="hover:text-cyan-400 transition-colors">Agents</a>
          <a href="#waves" className="hover:text-cyan-400 transition-colors">Trends</a>
          <a href="#comparison" className="hover:text-cyan-400 transition-colors">Models</a>
        </div>

        <GlowButton href="https://cal.com/govind-davis-strattegys/cetacean-labs-oceanic-ai-swarm-poc" className="text-xs px-4 py-2">
          Book a Session
        </GlowButton>
      </div>
    </nav>
  )
}
