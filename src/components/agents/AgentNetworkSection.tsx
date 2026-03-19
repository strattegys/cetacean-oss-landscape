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

export function AgentNetworkSection() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const { ref, inView } = useInView(0.1)
  const selected = agentNodes.find(n => n.id === selectedAgent)

  const spawnParticle = useCallback(() => {
    const conn = agentConnections[Math.floor(Math.random() * agentConnections.length)]
    const fromNode = agentNodes.find(n => n.id === conn[0])
    setParticles(prev => {
      const next = [...prev, {
        id: Date.now() + Math.random(),
        fromIdx: agentNodes.findIndex(n => n.id === conn[0]),
        toIdx: agentNodes.findIndex(n => n.id === conn[1]),
        color: fromNode?.color || '#22d3ee',
      }]
      return next.slice(-15)
    })
  }, [])

  useEffect(() => {
    if (!inView) return
    const id = setInterval(spawnParticle, 600)
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
              <svg viewBox="0 0 800 520" className="w-full max-w-[800px] mx-auto" style={{ minHeight: 400 }}>
                {/* Connection lines */}
                {agentConnections.map(([fromId, toId], i) => {
                  const from = agentNodes.find(n => n.id === fromId)!
                  const to = agentNodes.find(n => n.id === toId)!
                  return (
                    <line
                      key={i}
                      x1={from.cx}
                      y1={from.cy}
                      x2={to.cx}
                      y2={to.cy}
                      stroke="rgba(14,116,144,0.15)"
                      strokeWidth="1.5"
                    />
                  )
                })}

                {/* Particles */}
                {particles.map(p => {
                  const from = agentNodes[p.fromIdx]
                  const to = agentNodes[p.toIdx]
                  if (!from || !to) return null
                  return (
                    <motion.circle
                      key={p.id}
                      r={3}
                      fill={p.color}
                      initial={{ cx: from.cx, cy: from.cy, opacity: 0.8 }}
                      animate={{ cx: to.cx, cy: to.cy, opacity: 0 }}
                      transition={{ duration: 2, ease: 'linear' }}
                      onAnimationComplete={() =>
                        setParticles(prev => prev.filter(x => x.id !== p.id))
                      }
                    />
                  )
                })}

                {/* Agent nodes */}
                {agentNodes.map(node => (
                  <g
                    key={node.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedAgent(selectedAgent === node.id ? null : node.id)}
                  >
                    {/* Outer ring */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={selectedAgent === node.id ? 42 : 36}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="1"
                      opacity={selectedAgent === node.id ? 0.6 : 0.2}
                      className="transition-all duration-300"
                    />
                    {/* Pulse ring */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={36}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="1"
                      opacity={0.3}
                      style={{ animation: 'pulse-ring 3s ease-out infinite' }}
                    />
                    {/* Main circle */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={28}
                      fill={node.color}
                      fillOpacity={selectedAgent === node.id ? 0.25 : 0.12}
                      stroke={node.color}
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                    {/* Name */}
                    <text
                      x={node.cx}
                      y={node.cy - 6}
                      textAnchor="middle"
                      fill="white"
                      fontSize="13"
                      fontWeight="700"
                      fontFamily="'Syne', sans-serif"
                    >
                      {node.name}
                    </text>
                    {/* Role */}
                    <text
                      x={node.cx}
                      y={node.cy + 10}
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
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${selected.color}22`, border: `1px solid ${selected.color}44` }}>
                      <span style={{ color: selected.color }} className="font-display font-bold text-sm">{selected.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white">{selected.name}</h4>
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
                    className="mt-4 text-xs text-slate-500 hover:text-slate-300 transition-colors"
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
