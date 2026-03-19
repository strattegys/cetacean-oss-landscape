import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { dashboardActivities } from '../../data/agents'
import { useInterval } from '../../hooks/useInterval'
import { useInView } from '../../hooks/useInView'
import { SectionHeading } from '../shared/SectionHeading'
import { ScrollReveal } from '../shared/ScrollReveal'
import { formatWithCommas } from '../../utils/formatNumber'

export function AgentDashboardSection() {
  const { ref, inView } = useInView(0.1)
  const [activeAgents, setActiveAgents] = useState(12)
  const [tasksCompleted, setTasksCompleted] = useState(2847)
  const [responseTime, setResponseTime] = useState(1.2)
  const [savings, setSavings] = useState(1247893)
  const [activities, setActivities] = useState<string[]>(dashboardActivities.slice(0, 5))
  const activityIdx = useRef(5)

  useInterval(() => {
    if (!inView) return
    setActiveAgents(v => Math.max(10, Math.min(15, v + (Math.random() > 0.5 ? 1 : -1))))
    setTasksCompleted(v => v + Math.floor(Math.random() * 4) + 1)
    setResponseTime(+(0.8 + Math.random() * 0.8).toFixed(1))
    setSavings(v => v + Math.floor(Math.random() * 5) + 2)
  }, 2500)

  useInterval(() => {
    if (!inView) return
    const nextItem = dashboardActivities[activityIdx.current % dashboardActivities.length]
    activityIdx.current++
    setActivities(prev => [nextItem, ...prev.slice(0, 5)])
  }, 3500)

  const kpis = [
    { label: 'Active Agents', value: activeAgents.toString(), color: 'text-cyan-400' },
    { label: 'Tasks Today', value: formatWithCommas(tasksCompleted), color: 'text-emerald-400' },
    { label: 'Avg Response', value: `${responseTime}s`, color: 'text-amber-400' },
    { label: 'Uptime', value: '99.97%', color: 'text-violet-400' },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OPERATIONS DASHBOARD"
          title="This Is Running Right Now for Our Clients"
          subtitle="Real-time agent operations. Real cost savings. The question is: what's your dashboard showing?"
        />

        <ScrollReveal>
          <div className="rounded-xl border border-cyan-500/10 bg-ocean-800/30 overflow-hidden">
            {/* KPI tiles */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-cyan-500/10">
              {kpis.map((kpi, i) => (
                <div key={i} className="p-5 border-r border-cyan-500/10 last:border-r-0">
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">{kpi.label}</p>
                  <p className={`font-mono text-2xl md:text-3xl font-bold ${kpi.color} tabular-nums mt-1`}>
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Activity feed */}
              <div className="p-5 border-r border-cyan-500/10">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">Agent Activity</p>
                <div className="space-y-2 h-[200px] overflow-hidden">
                  <AnimatePresence initial={false}>
                    {activities.map((activity, i) => (
                      <motion.div
                        key={`${activity}-${i}`}
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span className="text-slate-400 font-mono text-xs leading-relaxed">{activity}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Cost savings */}
              <div className="p-5 flex flex-col items-center justify-center text-center">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-2">Quarterly Cost Savings</p>
                <p className="font-mono text-4xl md:text-5xl font-bold text-emerald-400 tabular-nums">
                  ${formatWithCommas(savings)}
                </p>
                <p className="text-slate-500 text-xs mt-2">vs. proprietary API costs</p>
                <div className="flex items-center gap-1 mt-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-400"><path d="M6 2l4 5H2z" fill="currentColor" /></svg>
                  <span className="text-emerald-400 text-xs font-mono">Live</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
