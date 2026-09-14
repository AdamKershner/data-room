import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getSopById } from '../data/sopContent'
import { SopOnboardingIndex } from './SopOnboardingIndex'
import './Page.css'
import './Onboarding.css'
import './Sops.css'

function SopDetail() {
  const { sopId } = useParams()
  const sop = getSopById(sopId)

  if (!sop) {
    return <Navigate to="/sops" replace />
  }

  if (sop.href) {
    return <Navigate to={sop.href} replace />
  }

  return <SopOnboardingIndex key={sop.id} sop={sop} />
}

export default SopDetail
