import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { tokenCostData } from '../../data/chartData'

export function TokenCostChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={tokenCostData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 0 }}>
        <XAxis type="number" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
        <Tooltip
          contentStyle={{ background: '#051729', border: '1px solid rgba(14,116,144,0.2)', borderRadius: 8, color: '#e2e8f0' }}
          formatter={(value) => [`$${Number(value).toFixed(2)}/M tokens`, 'Cost']}
        />
        <Bar dataKey="cost" radius={[0, 4, 4, 0]} animationDuration={1500}>
          {tokenCostData.map((entry, i) => (
            <Cell key={i} fill={entry.type === 'open' ? '#22d3ee' : '#f43f5e'} fillOpacity={entry.type === 'open' ? 0.8 : 0.6} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
