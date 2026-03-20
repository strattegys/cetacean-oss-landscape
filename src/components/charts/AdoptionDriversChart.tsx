import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { adoptionDriversData } from '../../data/chartData'
import { tooltipStyle, tooltipLabelStyle, tooltipItemStyle } from './chartStyles'

export function AdoptionDriversChart() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={adoptionDriversData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            animationDuration={1500}
          >
            {adoptionDriversData.map((entry, i) => (
              <Cell key={i} fill={entry.color} fillOpacity={0.8} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={tooltipLabelStyle}
            itemStyle={tooltipItemStyle}
            formatter={(value) => [`${value}%`, 'Share']}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 min-w-[160px]">
        {adoptionDriversData.map((d, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
            <span className="text-slate-400">{d.name}</span>
            <span className="text-white font-mono ml-auto">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
