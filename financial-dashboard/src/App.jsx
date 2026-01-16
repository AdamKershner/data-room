import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ExecutiveSummary from './pages/ExecutiveSummary'
import ProblemMarket from './pages/ProblemMarket'
import ProductTechnology from './pages/ProductTechnology'
import BusinessModel from './pages/BusinessModel'
import GoToMarket from './pages/GoToMarket'
import FinancialPlan from './pages/FinancialPlan'
import TeamExecution from './pages/TeamExecution'
import Sprints from './pages/Sprints'
import WeeklyReports from './pages/WeeklyReports'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<ExecutiveSummary />} />
          <Route path="/problem-market" element={<ProblemMarket />} />
          <Route path="/product-technology" element={<ProductTechnology />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/go-to-market" element={<GoToMarket />} />
          <Route path="/financial-plan" element={<FinancialPlan />} />
          <Route path="/team-execution" element={<TeamExecution />} />
          <Route path="/sprints" element={<Sprints />} />
          <Route path="/weekly-reports" element={<WeeklyReports />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

