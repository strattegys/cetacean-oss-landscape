import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { agentNodes, agentConnections } from '../../data/agents'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { useInView } from '../../hooks/useInView'

interface Particle {
  id: number
  fromIdx: number
  toIdx: number
  color: string
}

// Person silhouette icon as SVG path
function PersonIcon({ cx, cy, color, initials, selected }: { cx: number; cy: number; color: string; initials: string; selected: boolean }) {
  const r = 32
  return (
    <g>
      {/* Glow behind */}
      <circle cx={cx} cy={cy} r={r + 8} fill={color} fillOpacity={selected ? 0.15 : 0.06} />
      {/* Main circle background */}
      <circle cx={cx} cy={cy} r={r} fill="#051729" stroke={color} strokeWidth={selected ? 3 : 2} />
      {/* Person silhouette */}
      <g transform={`translate(${cx - 12}, ${cy - 14})`}>
        {/* Head */}
        <circle cx="12" cy="7" r="5" fill={color} fillOpacity={0.7} />
        {/* Body */}
        <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" fill={color} fillOpacity={0.5} />
      </g>
      {/* Initials overlay */}
      <text
        x={cx}
        y={cy + 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="16"
        fontWeight="800"
        fontFamily="'Syne', sans-serif"
        opacity={0.9}
      >
        {initials}
      </text>
    </g>
  )
}

// Animated data packet that's clearly visible
function DataPacket({ from, to, color, id, onComplete }: {
  from: { cx: number; cy: number }
  to: { cx: number; cy: number }
  color: string
  id: number
  onComplete: (id: number) => void
}) {
  return (
    <g>
      {/* Glowing trail */}
      <motion.circle
        r={5}
        fill={color}
        fillOpacity={0.4}
        filter="url(#glow)"
        initial={{ cx: from.cx, cy: from.cy }}
        animate={{ cx: to.cx, cy: to.cy }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
      {/* Bright core */}
      <motion.circle
        r={3}
        fill={color}
        initial={{ cx: from.cx, cy: from.cy, opacity: 1 }}
        animate={{ cx: to.cx, cy: to.cy, opacity: 0.9 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
        onAnimationComplete={() => onComplete(id)}
      />
      {/* White hot center */}
      <motion.circle
        r={1.5}
        fill="white"
        initial={{ cx: from.cx, cy: from.cy, opacity: 0.8 }}
        animate={{ cx: to.cx, cy: to.cy, opacity: 0.6 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
    </g>
  )
}

export function AgentNetworkSection() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const { ref, inView } = useInView(0.1)
  const selected = agentNodes.find(n => n.id === selectedAgent)

  const removeParticle = useCallback((id: number) => {
    setParticles(prev => prev.filter(x => x.id !== id))
  }, [])

  const spawnParticle = useCallback(() => {
    const conn = agentConnections[Math.floor(Math.random() * agentConnections.length)]
    const fromNode = agentNodes.find(n => n.id === conn[0])
    // Randomly reverse direction for visual variety
    const reverse = Math.random() > 0.5
    const fIdx = agentNodes.findIndex(n => n.id === (reverse ? conn[1] : conn[0]))
    const tIdx = agentNodes.findIndex(n => n.id === (reverse ? conn[0] : conn[1]))
    setParticles(prev => {
      const next = [...prev, {
        id: Date.now() + Math.random(),
        fromIdx: fIdx,
        toIdx: tIdx,
        color: fromNode?.color || '#22d3ee',
      }]
      return next.slice(-12)
    })
  }, [])

  useEffect(() => {
    if (!inView) return
    const id = setInterval(spawnParticle, 800)
    return () => clearInterval(id)
  }, [inView, spawnParticle])

  return (
    <section id="agents" ref={ref} className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AGENT ORCHESTRATION"
          title="This Is What Your Competitors Are Building Right Now"
          subtitle="OceanicAI coordinates specialized AI agents that work autonomously — planning, retrieving, analyzing, and delivering at machine speed. Click any agent to explore."
        />

        <ScrollReveal>
          <div className="relative flex flex-col lg:flex-row gap-8 items-start">
            {/* Network Visualization */}
            <div className="flex-1 w-full">
              <div className="rounded-2xl border border-cyan-500/10 bg-ocean-800/20 p-4 overflow-hidden">
                <svg viewBox="0 0 800 490" className="w-full max-w-[800px] mx-auto" style={{ minHeight: 380 }}>
                  <defs>
                    {/* Glow filter for particles */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                    {/* Animated dash pattern for connection lines */}
                    {agentConnections.map(([fromId, toId], i) => {
                      const from = agentNodes.find(n => n.id === fromId)!
                      const to = agentNodes.find(n => n.id === toId)!
                      return (
                        <linearGradient key={`grad-${i}`} id={`line-grad-${i}`}
                          x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor={from.color} stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#0e7490" stopOpacity="0.2" />
                          <stop offset="100%" stopColor={to.color} stopOpacity="0.4" />
                        </linearGradient>
                      )
                    })}
                  </defs>

                  {/* Connection lines — thicker, gradient colored, with dashes */}
                  {agentConnections.map(([fromId, toId], i) => {
                    const from = agentNodes.find(n => n.id === fromId)!
                    const to = agentNodes.find(n => n.id === toId)!
                    return (
                      <g key={i}>
                        {/* Background line */}
                        <line
                          x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                          stroke={`url(#line-grad-${i})`}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Animated dashed overlay showing flow direction */}
                        <line
                          x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                          stroke="rgba(34,211,238,0.15)"
                          strokeWidth="2"
                          strokeDasharray="6 8"
                          strokeLinecap="round"
                        >
                          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2s" repeatCount="indefinite" />
                        </line>
                      </g>
                    )
                  })}

                  {/* Data packets */}
                  {particles.map(p => {
                    const from = agentNodes[p.fromIdx]
                    const to = agentNodes[p.toIdx]
                    if (!from || !to) return null
                    return (
                      <DataPacket
                        key={p.id}
                        from={from}
                        to={to}
                        color={p.color}
                        id={p.id}
                        onComplete={removeParticle}
                      />
                    )
                  })}

                  {/* Agent nodes — person icons */}
                  {agentNodes.map(node => (
                    <g
                      key={node.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedAgent(selectedAgent === node.id ? null : node.id)}
                    >
                      <PersonIcon
                        cx={node.cx}
                        cy={node.cy}
                        color={node.color}
                        initials={node.initials}
                        selected={selectedAgent === node.id}
                      />
                      {/* Name label below */}
                      <text
                        x={node.cx}
                        y={node.cy + 46}
                        textAnchor="middle"
                        fill="white"
                        fontSize="13"
                        fontWeight="700"
                        fontFamily="'Syne', sans-serif"
                      >
                        {node.name}
                      </text>
                      <text
                        x={node.cx}
                        y={node.cy + 60}
                        textAnchor="middle"
                        fill={node.color}
                        fontSize="9"
                        fontFamily="'DM Mono', monospace"
                      >
                        {node.role}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Data flowing
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 rounded" /> Active connection
                </span>
                <span>Click an agent to learn more</span>
              </div>
            </div>

            {/* Detail Panel */}
            <AnimatePresence>
              {selected && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="w-full lg:w-80 shrink-0 rounded-xl border p-6"
                  style={{ borderColor: `${selected.color}33`, background: `${selected.color}08` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative" style={{ background: `${selected.color}22`, border: `2px solid ${selected.color}66` }}>
                      {/* Mini person icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" fill={selected.color} fillOpacity={0.8} />
                        <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" fill={selected.color} fillOpacity={0.6} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-lg">{selected.name}</h4>
                      <p className="text-xs font-mono" style={{ color: selected.color }}>{selected.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{selected.description}</p>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ocean-900/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400">{selected.stats}</span>
                  </div>
                  <button
                    onClick={() => setSelectedAgent(null)}
                    className="mt-4 text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
