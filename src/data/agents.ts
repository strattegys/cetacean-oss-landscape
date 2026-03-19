export interface AgentNode {
  id: string
  name: string
  role: string
  color: string
  description: string
  stats: string
  cx: number
  cy: number
}

export const agentNodes: AgentNode[] = [
  {
    id: 'orca',
    name: 'Orca',
    role: 'Intelligence Engine',
    color: '#22d3ee',
    description: 'Domain-specific analysis using SAFLA pattern learning, FANN similarity matching, and GOALIE next-best-action recommendations. The brain that turns raw data into strategic intelligence.',
    stats: '847 analyses/min',
    cx: 400,
    cy: 250,
  },
  {
    id: 'dolphin',
    name: 'Dolphin',
    role: 'Task Orchestrator',
    color: '#06b6d4',
    description: 'Multi-agent coordination frameworks for end-to-end autonomous workflows. Dolphin decides who does what, when, and manages the entire pipeline from task receipt to delivery.',
    stats: '1,204 tasks/min',
    cx: 180,
    cy: 120,
  },
  {
    id: 'echo',
    name: 'Echo',
    role: 'Knowledge Retrieval',
    color: '#10b981',
    description: 'Universal retrieval-augmented generation layer with semantic search and content generation. Echo finds the right information from millions of documents in milliseconds.',
    stats: '2,341 queries/min',
    cx: 620,
    cy: 120,
  },
  {
    id: 'porpoise',
    name: 'Porpoise',
    role: 'Model Training',
    color: '#f59e0b',
    description: 'Model training platform enabling domain-specific models via LoRA fine-tuning on proprietary data. Porpoise creates custom AI capabilities competitors cannot replicate.',
    stats: '12 models in training',
    cx: 180,
    cy: 400,
  },
  {
    id: 'spatial',
    name: 'Spatial',
    role: 'Memory System',
    color: '#8b5cf6',
    description: 'Persistent knowledge across three tiers — immediate, working, and long-term — enabling agents to learn from every past interaction and build cumulative intelligence.',
    stats: '94TB indexed',
    cx: 620,
    cy: 400,
  },
]

export const agentConnections = [
  ['orca', 'dolphin'],
  ['orca', 'echo'],
  ['orca', 'porpoise'],
  ['orca', 'spatial'],
  ['dolphin', 'echo'],
  ['dolphin', 'porpoise'],
  ['echo', 'spatial'],
  ['porpoise', 'spatial'],
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
    agent: 'Dolphin',
    agentColor: '#06b6d4',
    action: 'Task received',
    message: 'Analyzing market data for Q1 fintech trends. Assembling agent team...',
    duration: '0.1s',
  },
  {
    agent: 'Echo',
    agentColor: '#10b981',
    action: 'Retrieving context',
    message: 'Found 847 relevant documents. Filtering by relevance score > 0.85...',
    duration: '0.4s',
  },
  {
    agent: 'Spatial',
    agentColor: '#8b5cf6',
    action: 'Loading memory',
    message: 'Loading enterprise context: previous 3 quarterly analyses, client preferences...',
    duration: '0.2s',
  },
  {
    agent: 'Orca',
    agentColor: '#22d3ee',
    action: 'Generating insights',
    message: 'Identified 5 key patterns. Cross-referencing with regulatory updates...',
    duration: '1.8s',
  },
  {
    agent: 'Porpoise',
    agentColor: '#f59e0b',
    action: 'Applying domain model',
    message: 'Applying FinTech-LoRA adapter for industry-specific analysis...',
    duration: '0.5s',
  },
  {
    agent: 'Dolphin',
    agentColor: '#06b6d4',
    action: 'Delivering result',
    message: 'Report complete. 94% confidence score. Delivered in 3.2 seconds.',
    duration: '0.2s',
  },
]

export const dashboardActivities = [
  'Dolphin completed market analysis for Client-A (2.1s)',
  'Echo retrieved 234 documents for knowledge query',
  'Orca generated risk assessment — confidence 96%',
  'Porpoise fine-tuning job completed — +3.2% accuracy',
  'Spatial indexed 12,847 new records from data pipeline',
  'Dolphin orchestrated 5-agent compliance review (4.7s)',
  'Echo processed semantic search: "regulatory filings Q1"',
  'Orca pattern match: anomaly detected in transaction flow',
  'Spatial memory consolidation: 847 interactions archived',
  'Porpoise LoRA checkpoint saved — epoch 24/30',
  'Dolphin task queue: 12 pending, 847 completed today',
  'Echo RAG pipeline: 99.7% retrieval accuracy this hour',
  'Orca intelligence brief generated for executive dashboard',
  'Spatial loaded 3-tier context for new client session',
  'Porpoise model deployment: FinTech-v3 promoted to production',
]
