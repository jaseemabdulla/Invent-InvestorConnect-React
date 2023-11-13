import React from 'react'
import { Routes, Route } from 'react-router-dom'
import InvestorHome from '../pages/investorpage/InvestorHome'

function PartnerRoute() {
  return (
    <Routes>
        <Route path='/' element={<InvestorHome/>}/>
    </Routes>
  )
}

export default PartnerRoute