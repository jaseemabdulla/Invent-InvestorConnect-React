import React from 'react'
import { Routes, Route } from 'react-router-dom'
import InvestorHome from '../pages/investorpage/InvestorHome'
import InvestorSignup from '../pages/investorpage/InvestorSignup'
import InvestorLogin from '../pages/investorpage/InvestorLogin'
import InvestorPublic from './investorProtect/InvestorPublic'

function PartnerRoute() {
  return (
    <Routes>
        <Route path='/' element={<InvestorHome/>}/>
        <Route path='/signup' element={<InvestorPublic><InvestorSignup/></InvestorPublic>}/>
        <Route path='/login' element={<InvestorPublic><InvestorLogin/></InvestorPublic>}/>
    </Routes>
  )
}

export default PartnerRoute