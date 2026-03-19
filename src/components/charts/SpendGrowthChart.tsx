import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { spendGrowthData } from '../../data/chartData'

export function SpendGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={spendGrowthData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`} />
        <Tooltip
          contentStyle={{ background: '#051729', border: '1px solid rgba(14,116,144,0.2)', borderRadius: 8, color: '#e2e8f0' }}
          formatter={(value) => [`$${value}B`, 'Spend']}
        />
        <ReferenceLine x="2026E" stroke="#f59e0b" strokeDasharray="4 4" label={{ value: 'You are here', position: 'top', fill: '#f59e0b', fontSize: 11 }} />
        <Area type="monotone" dataKey="spend" stroke="#22d3ee" fill="url(#spendGrad)" strokeWidth={2} animationDuration={2000} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
