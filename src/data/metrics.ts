export interface Metric {
  value: number
  suffix?: string
  prefix?: string
  label: string
  delta: string
  urgency: string
}

export const metrics: Metric[] = [
  {
    value: 37,
    prefix: '$',
    suffix: 'B',
    label: 'Enterprise GenAI Spend',
    delta: '3.2x YoY',
    urgency: 'This market is moving with or without you.',
  },
  {
    value: 135,
    suffix: '+',
    label: 'Active OSS LLM Projects',
    delta: '48% since Q3 2025',
    urgency: '135 open-source models. Your competitors are already using them.',
  },
  {
    value: 90,
    suffix: '%',
    label: 'Cost Reduction vs Closed',
    delta: 'Self-hosted advantage',
    urgency: 'Every dollar you spend on proprietary APIs, they save.',
  },
  {
    value: 60,
    suffix: 'K+',
    label: 'vLLM Contributors',
    delta: '#1 OSS project 2025',
    urgency: '60,000 engineers chose open source. The ecosystem is unstoppable.',
  },
  {
    value: 28,
    suffix: '%',
    label: 'Market CAGR Through 2028',
    delta: 'Strong compounding',
    urgency: 'This isn\'t a trend. It\'s a structural shift.',
  },
  {
    value: 85,
    suffix: '%',
    label: 'OSS Capability vs Closed',
    delta: 'Gap closing rapidly',
    urgency: '85% of the capability at 10% of the cost. The math is obvious.',
  },
]
