import React from 'react'
import { Routes, Route } from 'react-router-dom'
import InvestorHome from '../pages/investorpage/InvestorHome'
import InvestorSignup from '../pages/investorpage/InvestorSignup'

function PartnerRoute() {
  return (
    <Routes>
        <Route path='/' element={<InvestorHome/>}/>
        <Route path='signup' element={<InvestorSignup/>}/>
    </Routes>
  )
}

export default PartnerRoute