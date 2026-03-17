import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ExecutiveSummary from './pages/ExecutiveSummary'
import ProblemMarket from './pages/ProblemMarket'
import ProductTechnology from './pages/ProductTechnology'
import NPS from './pages/NPS'
import HITL from './pages/HITL'
import BusinessModel from './pages/BusinessModel'
import GoToMarket from './pages/GoToMarket'
import FinancialPlan from './pages/FinancialPlan'
import TeamExecution from './pages/TeamExecution'
import Sprints from './pages/Sprints'
import MarketSize from './pages/MarketSize'
import WeeklyReports from './pages/WeeklyReports'
import ContentPipeline from './pages/ContentPipeline'
import Q1MidpointUpdate from './pages/Q1MidpointUpdate'
import Competitors from './pages/Competitors'
import StrategicNarrative from './pages/StrategicNarrative'
import B2CStrategicNarrative from './pages/B2CStrategicNarrative'
import Onboarding from './pages/Onboarding'
import OnboardingStep from './pages/OnboardingStep'
import LinkedInGuide from './pages/LinkedInGuide'
import LinkedInConnectionsGuide from './pages/LinkedInConnectionsGuide'
import ProductHuntTasks from './pages/ProductHuntTasks'
import OTAGuide from './pages/OTAGuide'
import SOC2GapAnalysis from './pages/SOC2GapAnalysis'
import SOC2Type1Checklist from './pages/SOC2Type1Checklist'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<ExecutiveSummary />} />
          <Route path="/q1-midpoint" element={<Q1MidpointUpdate />} />
          <Route path="/problem-market" element={<ProblemMarket />} />
          <Route path="/product-technology" element={<ProductTechnology />} />
          <Route path="/nps" element={<NPS />} />
          <Route path="/hitl" element={<HITL />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/go-to-market" element={<GoToMarket />} />
          <Route path="/financial-plan" element={<FinancialPlan />} />
          <Route path="/team-execution" element={<TeamExecution />} />
          <Route path="/sprints" element={<Sprints />} />
          <Route path="/market-size" element={<MarketSize />} />
          <Route path="/weekly-reports" element={<WeeklyReports />} />
          <Route path="/content-pipeline" element={<ContentPipeline />} />
          <Route path="/competitors" element={<Competitors />} />
          <Route path="/b2b-strategic-narrative" element={<StrategicNarrative />} />
          <Route path="/b2c-strategic-narrative" element={<B2CStrategicNarrative />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding/:stepId" element={<OnboardingStep />} />
          <Route path="/linkedin-guide" element={<LinkedInGuide />} />
          <Route path="/linkedin-connections-guide" element={<LinkedInConnectionsGuide />} />
          <Route path="/producthunt-tasks" element={<ProductHuntTasks />} />
          <Route path="/ota-guide" element={<OTAGuide />} />
          <Route path="/soc2-gap-analysis" element={<SOC2GapAnalysis />} />
          <Route path="/soc2-type1-checklist" element={<SOC2Type1Checklist />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

