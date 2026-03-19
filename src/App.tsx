import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/hero/HeroSection'
import { CostOfWaitingSection } from './components/warning/CostOfWaitingSection'
import { MarketIntelligenceSection } from './components/metrics/MarketIntelligenceSection'
import { ChartsSection } from './components/charts/ChartsSection'
import { AgentNetworkSection } from './components/agents/AgentNetworkSection'
import { FiveWavesSection } from './components/waves/FiveWavesSection'
import { AgentWorkflowSection } from './components/agents/AgentWorkflowSection'
import { ModelComparisonSection } from './components/comparison/ModelComparisonSection'
import { GapWideningSection } from './components/gap/GapWideningSection'
import { AgentDashboardSection } from './components/agents/AgentDashboardSection'
import { BookingSection } from './components/booking/BookingSection'

function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <HeroSection />
        <CostOfWaitingSection />
        <MarketIntelligenceSection />
        <ChartsSection />
        <AgentNetworkSection />
        <FiveWavesSection />
        <AgentWorkflowSection />
        <ModelComparisonSection />
        <GapWideningSection />
        <AgentDashboardSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
