import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import CopyPageLink from './components/CopyPageLink'
import PageFeedback from './components/PageFeedback'
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
import SopStep from './pages/SopStep'
import KeepersCodexChecklist from './pages/KeepersCodexChecklist'
import KeepersCodexStep from './pages/KeepersCodexStep'
import FindingWhatsBrokenChecklist from './pages/FindingWhatsBrokenChecklist'
import FindingWhatsBrokenStep from './pages/FindingWhatsBrokenStep'
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
import FinancialProjections from './pages/FinancialProjections'
import ProjectCharterChecklist from './pages/ProjectCharterChecklist'
import ProjectCharterSection from './pages/ProjectCharterSection'
import Access from './pages/Access'
import './App.css'

function App() {
  return (
    <Router>
      <DataRoomSearchProvider>
        <div className="app">
          <Navigation />
          <CopyPageLink />
          <PageFeedback />
          <Routes>
          <Route path="/" element={<KahanaExecutiveSummary />} />
          <Route path="/access" element={<Access />} />
          <Route path="/aura-library" element={<Navigate to="/" replace />} />
          <Route path="/oasis-browser" element={<ExecutiveSummary />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/oasis-sprints" element={<OasisSprintsArchive />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/kahana" element={<Navigate to="/" replace />} />
          <Route path="/pro-forma" element={<Navigate to="/financial-projections" replace />} />
          <Route path="/financial-projections" element={<FinancialProjections />} />
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
          <Route path="/sops/linkedin-operating-rhythm" element={<Navigate to="/linkedin-guide" replace />} />
          <Route path="/sops/running-a-book-or-video-club" element={<Navigate to="/sops/community-building" replace />} />
          <Route path="/sops/inviting-members-to-a-club" element={<Navigate to="/sops/community-building" replace />} />
          <Route path="/sops/choosing-what-the-club-reads" element={<Navigate to="/sops/community-building" replace />} />
          <Route path="/sops/outreach-to-creators-for-a-club" element={<Navigate to="/sops/community-building" replace />} />
          <Route path="/sops/logging-feedback-and-issues" element={<Navigate to="/sops/community-building/log-feedback" replace />} />
          <Route path="/sops/product-management-operations" element={<Navigate to="/sops/product-management-playbook" replace />} />
          <Route path="/sops/creating-project-charters" element={<Navigate to="/sops/writing-a-project-charter" replace />} />
          <Route path="/sops/use-case-feature-videos" element={<Navigate to="/sops/creating-youtube-videos" replace />} />
          <Route path="/sops/youtube-publishing" element={<Navigate to="/sops/creating-youtube-videos" replace />} />
          <Route path="/sops/seo-sitemap" element={<Navigate to="/sops/seo" replace />} />
          <Route path="/sops/ai-seo" element={<Navigate to="/sops/seo" replace />} />
          <Route path="/sops/gsc" element={<Navigate to="/sops/search-console-seo" replace />} />
          <Route path="/sops/search-console" element={<Navigate to="/sops/search-console-seo" replace />} />
          <Route path="/sops/branded-search" element={<Navigate to="/sops/search-console-seo" replace />} />
          <Route path="/sops/url-inspection" element={<Navigate to="/sops/search-console-seo" replace />} />
          <Route path="/sops/creator-collaborations-outreach" element={<Navigate to="/sops/creator-prospecting" replace />} />
          <Route path="/sops/collab-calls" element={<Navigate to="/sops/creator-collab-calls" replace />} />
          <Route path="/sops/creator-calls" element={<Navigate to="/sops/creator-collab-calls" replace />} />
          <Route path="/sops/lifecycle-emails-resurrection" element={<Navigate to="/sops/lifecycle-emails-and-tickets" replace />} />
          <Route path="/sops/handling-user-tickets" element={<Navigate to="/sops/lifecycle-emails-and-tickets" replace />} />
          <Route path="/sops/pm-time-log" element={<Navigate to="/sops/time-log" replace />} />
          <Route path="/sops/hr-time-log" element={<Navigate to="/sops/time-log" replace />} />
          <Route path="/sops/reporting-insights" element={<Navigate to="/sops/analytics" replace />} />
          <Route path="/sops/analytics-innovation" element={<Navigate to="/sops/analytics" replace />} />
          <Route path="/sops/supporting-functions-with-insights" element={<Navigate to="/sops/analytics" replace />} />
          <Route path="/sops/product-code-access-setup" element={<Navigate to="/sops/kahana-code-setup" replace />} />
          <Route path="/sops/pentest" element={<Navigate to="/sops/penetration-testing" replace />} />
          <Route path="/sops/reporting-cybersecurity-threats" element={<Navigate to="/sops/reporting-cyber-threats" replace />} />
          <Route path="/sops/keepers-codex/:stepId" element={<KeepersCodexStep />} />
          <Route path="/sops/keepers-codex" element={<KeepersCodexChecklist />} />
          <Route path="/sops/finding-whats-broken/:stepId" element={<FindingWhatsBrokenStep />} />
          <Route path="/sops/finding-whats-broken" element={<FindingWhatsBrokenChecklist />} />
          <Route path="/sops/:sopId/:stepId" element={<SopStep />} />
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
