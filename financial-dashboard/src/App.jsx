import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import { DataRoomSearchProvider } from './components/DataRoomSearchProvider'
import KahanaExecutiveSummary from './pages/KahanaExecutiveSummary'
import ExecutiveSummary from './pages/ExecutiveSummary'
import Q1ExecutiveReport from './pages/Q1ExecutiveReport'
import ProblemMarket from './pages/ProblemMarket'
import ProductTechnology from './pages/ProductTechnology'
import NPS from './pages/NPS'
import HITL from './pages/HITL'
import BusinessModel from './pages/BusinessModel'
import GoToMarket from './pages/GoToMarket'
import LetterOfEngagement from './pages/LetterOfEngagement'
import OasisRfp from './pages/OasisRfp'
import OasisWaitlist from './pages/OasisWaitlist'
import FinancialPlan from './pages/FinancialPlan'
import TeamExecution from './pages/TeamExecution'
import OasisSprintsArchive from './pages/OasisSprintsArchive'
import OperatingSystem from './pages/OperatingSystem'
import Sops from './pages/Sops'
import SopDetail from './pages/SopDetail'
import KahanaNarrative from './pages/KahanaNarrative'
import MarketSize from './pages/MarketSize'
import WeeklyReports from './pages/WeeklyReports'
import ContentPipeline from './pages/ContentPipeline'
import Events from './pages/Events'
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
import Archive from './pages/Archive'
import KnowledgeBase from './pages/KnowledgeBase'
import SOC2Type1Checklist from './pages/SOC2Type1Checklist'
import MarketingNarrativeChecklist from './pages/MarketingNarrativeChecklist'
import FounderPersonalBrand from './pages/FounderPersonalBrand'
import Battlecards from './pages/Battlecards'
import Glossary from './pages/Glossary'
import FragmentCapture from './pages/FragmentCapture'
import ProjectCharterChecklist from './pages/ProjectCharterChecklist'
import ProjectCharterSection from './pages/ProjectCharterSection'
import './App.css'

function App() {
  return (
    <Router>
      <DataRoomSearchProvider>
        <div className="app">
          <Navigation />
          <Routes>
          <Route path="/" element={<KahanaExecutiveSummary />} />
          <Route path="/oasis-browser" element={<ExecutiveSummary />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/oasis-sprints" element={<OasisSprintsArchive />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/kahana" element={<Navigate to="/" replace />} />
          <Route path="/pro-forma" element={<Navigate to="/" replace />} />
          <Route path="/company-landscape" element={<Battlecards />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/battlecards" element={<Navigate to="/company-landscape" replace />} />
          <Route path="/fragment-capture" element={<FragmentCapture />} />
          <Route path="/curio-store" element={<Navigate to="/" replace />} />
          <Route path="/onboarding/learn-curio" element={<Navigate to="/" replace />} />
          <Route path="/onboarding/learn-kahana" element={<Navigate to="/" replace />} />
          <Route path="/onboarding/knowledge-base-core-business" element={<Navigate to="/knowledge-base" replace />} />
          <Route path="/Q1-executive-report" element={<Q1ExecutiveReport />} />
          <Route path="/q1-midpoint" element={<Q1MidpointUpdate />} />
          <Route path="/problem-market" element={<ProblemMarket />} />
          <Route path="/product-technology" element={<ProductTechnology />} />
          <Route path="/nps" element={<NPS />} />
          <Route path="/hitl" element={<HITL />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/go-to-market" element={<GoToMarket />} />
          <Route path="/letter-of-engagement" element={<LetterOfEngagement />} />
          <Route path="/oasis-rfp" element={<OasisRfp />} />
          <Route path="/oasis-waitlist" element={<OasisWaitlist />} />
          <Route path="/financial-plan" element={<FinancialPlan />} />
          <Route path="/team-execution" element={<TeamExecution />} />
          <Route path="/sprints" element={<Navigate to="/archive/oasis-sprints" replace />} />
          <Route path="/how-we-work" element={<OperatingSystem />} />
          <Route path="/operating-system" element={<Navigate to="/how-we-work" replace />} />
          <Route path="/sops" element={<Sops />} />
          <Route path="/sops/:sopId" element={<SopDetail />} />
          <Route path="/technical-roadmap" element={<Navigate to="/" replace />} />
          <Route path="/kahana-competitors" element={<Navigate to="/company-landscape" replace />} />
          <Route path="/kahana-narrative" element={<KahanaNarrative />} />
          <Route path="/market-size" element={<MarketSize />} />
          <Route path="/weekly-reports" element={<WeeklyReports />} />
          <Route path="/content-pipeline" element={<ContentPipeline />} />
          <Route path="/events" element={<Events />} />
          <Route path="/competitors" element={<Competitors />} />
          <Route path="/b2b-strategic-narrative" element={<StrategicNarrative />} />
          <Route path="/b2c-strategic-narrative" element={<B2CStrategicNarrative />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding/kahana-strategy" element={<Navigate to="/onboarding/market-map" replace />} />
          <Route path="/onboarding/battlecards" element={<Navigate to="/onboarding/company-landscape" replace />} />
          <Route path="/onboarding/linkedin" element={<Navigate to="/linkedin-guide" replace />} />
          <Route path="/onboarding/internal-channels" element={<Navigate to="/onboarding/schedule-1on1" replace />} />
          <Route path="/onboarding/slack-phone" element={<Navigate to="/onboarding/schedule-1on1" replace />} />
          <Route path="/onboarding/linear-access" element={<Navigate to="/onboarding/tools-access" replace />} />
          <Route path="/onboarding/avenger-profile" element={<Navigate to="/onboarding/create-profiles" replace />} />
          <Route path="/onboarding/producthunt" element={<Navigate to="/onboarding/create-profiles" replace />} />
          <Route path="/onboarding/technical-roadmap" element={<Navigate to="/how-we-work" replace />} />
          <Route path="/onboarding/install-oasis" element={<Navigate to="/oasis-browser" replace />} />
          <Route path="/onboarding/use-oasis-5-days" element={<Navigate to="/oasis-browser" replace />} />
          <Route path="/onboarding/:stepId" element={<OnboardingStep />} />
          <Route path="/linkedin-guide" element={<LinkedInGuide />} />
          <Route path="/linkedin-connections-guide" element={<LinkedInConnectionsGuide />} />
          <Route path="/producthunt-tasks" element={<ProductHuntTasks />} />
          <Route path="/ota-guide" element={<OTAGuide />} />
          <Route path="/soc2-gap-analysis" element={<SOC2GapAnalysis />} />
          <Route path="/soc2-type1-checklist" element={<SOC2Type1Checklist />} />
          <Route path="/marketing-narrative-checklist" element={<MarketingNarrativeChecklist />} />
          <Route path="/founder-personal-brand" element={<FounderPersonalBrand />} />
          <Route path="/project-charter" element={<ProjectCharterChecklist />} />
          <Route path="/project-charter/:sectionId" element={<ProjectCharterSection />} />
          </Routes>
        </div>
      </DataRoomSearchProvider>
    </Router>
  )
}

export default App
