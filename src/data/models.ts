export interface Model {
  name: string
  type: 'Open Weights' | 'Proprietary' | 'Hybrid' | 'Open Source'
  costPer1M: string
  capability: number
  sovereignty: 'full' | 'none' | 'partial'
  enterpriseReady: boolean
  bestFor: string
  highlighted?: boolean
}

export const models: Model[] = [
  {
    name: 'Meta Llama 4',
    type: 'Open Weights',
    costPer1M: '$0.17',
    capability: 88,
    sovereignty: 'full',
    enterpriseReady: true,
    bestFor: 'General purpose, high performance at low cost',
  },
  {
    name: 'DeepSeek R1',
    type: 'Open Weights',
    costPer1M: '$0.22',
    capability: 90,
    sovereignty: 'full',
    enterpriseReady: true,
    bestFor: 'Reasoning, code generation, math',
  },
  {
    name: 'Mistral Large',
    type: 'Open Weights',
    costPer1M: '$0.42',
    capability: 86,
    sovereignty: 'full',
    enterpriseReady: true,
    bestFor: 'European compliance, multilingual',
  },
  {
    name: 'Alibaba Qwen3',
    type: 'Open Weights',
    costPer1M: '$0.28',
    capability: 87,
    sovereignty: 'full',
    enterpriseReady: true,
    bestFor: 'Multilingual, Asian markets',
  },
  {
    name: 'IBM Granite 4',
    type: 'Open Source',
    costPer1M: '$0.35',
    capability: 82,
    sovereignty: 'full',
    enterpriseReady: true,
    bestFor: 'Enterprise, regulated industries',
  },
  {
    name: 'OpenAI GPT-4o',
    type: 'Proprietary',
    costPer1M: '$15.00',
    capability: 92,
    sovereignty: 'none',
    enterpriseReady: true,
    bestFor: 'Rapid prototyping, general quality',
  },
  {
    name: 'Anthropic Claude',
    type: 'Proprietary',
    costPer1M: '$15.00',
    capability: 91,
    sovereignty: 'none',
    enterpriseReady: true,
    bestFor: 'Safety-critical, long context',
  },
  {
    name: 'Google Gemini Pro',
    type: 'Proprietary',
    costPer1M: '$10.00',
    capability: 89,
    sovereignty: 'none',
    enterpriseReady: true,
    bestFor: 'Multimodal, Google ecosystem',
  },
  {
    name: 'OceanicAI',
    type: 'Hybrid',
    costPer1M: '$0.20–$0.42',
    capability: 93,
    sovereignty: 'full',
    enterpriseReady: true,
    bestFor: 'Agent orchestration, hybrid deployment, full stack',
    highlighted: true,
  },
]
