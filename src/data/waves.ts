export interface Wave {
  number: string
  category: string
  title: string
  urgency: string
  description: string
}

export const waves: Wave[] = [
  {
    number: '01',
    category: 'INFRASTRUCTURE SHIFT',
    title: 'Small Models Already Dominate the Edge',
    urgency: 'If you\'re still deploying monolithic models, you\'re overpaying by 10x.',
    description: 'Sub-7B parameter models now handle 80% of production workloads at a fraction of the cost. Edge deployment is no longer experimental — it\'s the default for latency-sensitive applications.',
  },
  {
    number: '02',
    category: 'WORKFLOW TRANSFORMATION',
    title: 'Agentic AI Isn\'t Coming — It\'s Here',
    urgency: 'RAG and multi-agent orchestration are already in production. Are you still prototyping?',
    description: 'Enterprises are deploying autonomous agent workflows for planning, retrieval, analysis, and decision-making. The organizations that master orchestration first will compound their advantage.',
  },
  {
    number: '03',
    category: 'ECONOMICS',
    title: 'Inference Costs Are Now a Board Metric',
    urgency: 'CFOs are already optimizing token spend. If yours isn\'t asking, your competitors\' is.',
    description: 'Token economics have moved from engineering concern to board-level strategy. At $37B in enterprise spend, the difference between $0.20 and $15 per million tokens is existential.',
  },
  {
    number: '04',
    category: 'GEOPOLITICS',
    title: 'China\'s Open Ecosystem Changed the Game',
    urgency: 'Qwen3 and DeepSeek now lead adoption charts. Ignoring this is not an option.',
    description: 'China-led open-source models have achieved frontier performance at dramatically lower costs. The geopolitical dimension of AI infrastructure decisions can no longer be ignored.',
  },
  {
    number: '05',
    category: 'COMPETITIVE MOAT',
    title: 'Domain-Specific Models Create Unassailable Moats',
    urgency: 'Organizations fine-tuning on proprietary data are building capabilities you can\'t buy from an API.',
    description: 'LoRA fine-tuning on proprietary data creates AI capabilities that competitors simply cannot replicate through API access. The fine-tuning window is open now — it won\'t stay open forever.',
  },
]
