import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { workflowSteps } from '../../data/agents'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { useInView } from '../../hooks/useInView'

export function AgentWorkflowSection() {
  const [visibleSteps, setVisibleSteps] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPunchline, setShowPunchline] = useState(false)
  const { ref, inView } = useInView(0.3)

  const play = useCallback(() => {
    setVisibleSteps(0)
    setShowPunchline(false)
    setIsPlaying(true)
  }, [])

  useEffect(() => {
    if (inView && !isPlaying && visibleSteps === 0) {
      play()
    }
  }, [inView, isPlaying, visibleSteps, play])

  useEffect(() => {
    if (!isPlaying) return
    if (visibleSteps >= workflowSteps.length) {
      setTimeout(() => {
        setShowPunchline(true)
        setIsPlaying(false)
      }, 800)
      return
    }
    const timer = setTimeout(() => setVisibleSteps(v => v + 1), 1500)
    return () => clearTimeout(timer)
  }, [isPlaying, visibleSteps])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LIVE AGENT WORKFLOW"
          title="Watch Five Agents Solve a Complex Task"
          subtitle="This is how OceanicAI agents collaborate on a real-world analysis — autonomously, in seconds."
        />

        <ScrollReveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-cyan-500/10 to-transparent" />

            <div className="space-y-1">
              <AnimatePresence>
                {workflowSteps.slice(0, visibleSteps).map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative pl-16 py-3"
                  >
                    {/* Agent circle */}
                    <div
                      className="absolute left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${step.agentColor}22`, border: `2px solid ${step.agentColor}66`, color: step.agentColor }}
                    >
                      {step.agent[0]}
                    </div>

                    {/* Chat bubble */}
                    <div className="rounded-lg border border-cyan-500/10 bg-ocean-800/50 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-sm text-white">{step.agent}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-ocean-700 text-slate-400">{step.action}</span>
                        <span className="text-[10px] font-mono text-slate-600 ml-auto">{step.duration}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{step.message}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isPlaying && visibleSteps < workflowSteps.length && (
                <div className="relative pl-16 py-3">
                  <div
                    className="absolute left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-xs"
                    style={{
                      background: `${workflowSteps[visibleSteps].agentColor}22`,
                      border: `2px solid ${workflowSteps[visibleSteps].agentColor}44`,
                      color: workflowSteps[visibleSteps].agentColor,
                    }}
                  >
                    {workflowSteps[visibleSteps].agent[0]}
                  </div>
                  <div className="rounded-lg border border-cyan-500/10 bg-ocean-800/30 p-4 inline-flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Punchline */}
            <AnimatePresence>
              {showPunchline && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 flex flex-col items-center"
                >
                  <div className="inline-flex flex-col items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 px-8 py-6">
                    <span className="font-mono text-3xl font-bold text-amber-400">3.2 seconds</span>
                    <span className="text-slate-400 text-sm">Five agents. One complex analysis. Delivered.</span>
                    <span className="text-rose-400 font-semibold text-sm mt-2">How long does your team take?</span>
                  </div>
                  <button
                    onClick={play}
                    className="mt-8 px-6 py-2.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all font-mono"
                  >
                    Replay demo
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
