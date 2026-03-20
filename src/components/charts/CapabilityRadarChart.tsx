import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { capabilityData } from '../../data/chartData'
import { tooltipStyle, tooltipLabelStyle, tooltipItemStyle } from './chartStyles'

export function CapabilityRadarChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart data={capabilityData} cx="50%" cy="50%" outerRadius="65%">
        <PolarGrid stroke="rgba(14,116,144,0.15)" />
        <PolarAngleAxis dataKey="dimension" tick={{ fill: '#94a3b8', fontSize: 10 }} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} itemStyle={tooltipItemStyle} />
        <Radar name="Proprietary" dataKey="closed" stroke="#64748b" fill="#64748b" fillOpacity={0.08} animationDuration={1500} />
        <Radar name="Open Source" dataKey="open" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.25} animationDuration={1500} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
