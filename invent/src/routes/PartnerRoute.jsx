import React from 'react'
import { Routes, Route } from 'react-router-dom'
import InvestorHome from '../pages/investorpage/InvestorHome'
import InvestorSignup from '../pages/investorpage/InvestorSignup'
import InvestorLogin from '../pages/investorpage/InvestorLogin'
import CommonPublic from './commonProtect/CommonPublic'


function PartnerRoute() {
  return (
    <Routes>
        <Route path='/' element={<InvestorHome/>}/>
        <Route path='/signup' element={<CommonPublic><InvestorSignup/></CommonPublic>}/>
        <Route path='/login' element={<CommonPublic><InvestorLogin/></CommonPublic>}/>
    </Routes>
  )
}

export default PartnerRoute