export interface AgentNode {
  id: string
  name: string
  initials: string
  role: string
  color: string
  description: string
  stats: string
  cx: number
  cy: number
}

export const agentNodes: AgentNode[] = [
  {
    id: 'anika',
    name: 'Anika',
    initials: 'A',
    role: 'Intelligence Lead',
    color: '#22d3ee',
    description: 'Anika runs domain-specific analysis using pattern learning, similarity matching, and next-best-action recommendations. She turns raw data into strategic intelligence your team can act on.',
    stats: '847 analyses/min',
    cx: 400,
    cy: 240,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    initials: 'M',
    role: 'Task Orchestrator',
    color: '#06b6d4',
    description: 'Marcus coordinates multi-agent workflows end-to-end. He decides who works on what, manages handoffs, and ensures every task flows from receipt to delivery without bottlenecks.',
    stats: '1,204 tasks/min',
    cx: 180,
    cy: 100,
  },
  {
    id: 'priya',
    name: 'Priya',
    initials: 'P',
    role: 'Research Analyst',
    color: '#10b981',
    description: 'Priya handles knowledge retrieval and semantic search across millions of documents. She finds the right information in milliseconds and synthesizes it into actionable context.',
    stats: '2,341 queries/min',
    cx: 620,
    cy: 100,
  },
  {
    id: 'tomás',
    name: 'Tomas',
    initials: 'T',
    role: 'Model Specialist',
    color: '#f59e0b',
    description: 'Tomas manages model training and LoRA fine-tuning on proprietary data. He builds custom AI capabilities that competitors simply cannot replicate through API access.',
    stats: '12 models in training',
    cx: 180,
    cy: 390,
  },
  {
    id: 'keiko',
    name: 'Keiko',
    initials: 'K',
    role: 'Memory Architect',
    color: '#8b5cf6',
    description: 'Keiko maintains persistent knowledge across three tiers — immediate, working, and long-term. She enables every agent to learn from past interactions and build cumulative intelligence.',
    stats: '94TB indexed',
    cx: 620,
    cy: 390,
  },
]

export const agentConnections = [
  ['anika', 'marcus'],
  ['anika', 'priya'],
  ['anika', 'tomás'],
  ['anika', 'keiko'],
  ['marcus', 'priya'],
  ['marcus', 'tomás'],
  ['priya', 'keiko'],
  ['tomás', 'keiko'],
]

export interface WorkflowStep {
  agent: string
  agentColor: string
  action: string
  message: string
  duration: string
}

export const workflowSteps: WorkflowStep[] = [
  {
    agent: 'Marcus',
    agentColor: '#06b6d4',
    action: 'Task received',
    message: 'Analyzing market data for Q1 fintech trends. Assembling the team...',
    duration: '0.1s',
  },
  {
    agent: 'Priya',
    agentColor: '#10b981',
    action: 'Retrieving context',
    message: 'Found 847 relevant documents. Filtering by relevance score > 0.85...',
    duration: '0.4s',
  },
  {
    agent: 'Keiko',
    agentColor: '#8b5cf6',
    action: 'Loading memory',
    message: 'Loading enterprise context: previous 3 quarterly analyses, client preferences...',
    duration: '0.2s',
  },
  {
    agent: 'Anika',
    agentColor: '#22d3ee',
    action: 'Generating insights',
    message: 'Identified 5 key patterns. Cross-referencing with regulatory updates...',
    duration: '1.8s',
  },
  {
    agent: 'Tomas',
    agentColor: '#f59e0b',
    action: 'Applying domain model',
    message: 'Applying FinTech-LoRA adapter for industry-specific analysis...',
    duration: '0.5s',
  },
  {
    agent: 'Marcus',
    agentColor: '#06b6d4',
    action: 'Delivering result',
    message: 'Report complete. 94% confidence score. Delivered in 3.2 seconds.',
    duration: '0.2s',
  },
]

export const dashboardActivities = [
  'Marcus completed market analysis for Client-A (2.1s)',
  'Priya retrieved 234 documents for knowledge query',
  'Anika generated risk assessment — confidence 96%',
  'Tomas fine-tuning job completed — +3.2% accuracy',
  'Keiko indexed 12,847 new records from data pipeline',
  'Marcus orchestrated 5-agent compliance review (4.7s)',
  'Priya processed semantic search: "regulatory filings Q1"',
  'Anika pattern match: anomaly detected in transaction flow',
  'Keiko memory consolidation: 847 interactions archived',
  'Tomas LoRA checkpoint saved — epoch 24/30',
  'Marcus task queue: 12 pending, 847 completed today',
  'Priya RAG pipeline: 99.7% retrieval accuracy this hour',
  'Anika intelligence brief generated for executive dashboard',
  'Keiko loaded 3-tier context for new client session',
  'Tomas model deployment: FinTech-v3 promoted to production',
]
