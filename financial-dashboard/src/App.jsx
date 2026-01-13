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
import Funding from './pages/Funding'
import Appendices from './pages/Appendices'
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
          <Route path="/funding" element={<Funding />} />
          <Route path="/appendices" element={<Appendices />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

