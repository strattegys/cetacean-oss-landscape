import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { capabilityData } from '../../data/chartData'
import { tooltipStyle } from './chartStyles'

export function CapabilityRadarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={capabilityData}>
        <PolarGrid stroke="rgba(14,116,144,0.15)" />
        <PolarAngleAxis dataKey="dimension" tick={{ fill: '#94a3b8', fontSize: 11 }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Radar name="Open Source" dataKey="open" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.2} animationDuration={1500} />
        <Radar name="Proprietary" dataKey="closed" stroke="#f43f5e" fill="#f43f5e" fillOpacity={0.1} animationDuration={1500} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
