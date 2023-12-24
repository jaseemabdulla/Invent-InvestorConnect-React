import React from 'react'
import NavBar from '../../components/common/NavBar'
import Login from '../../components/common/Login'
import Footer from '../../components/common/Footer'

function InvestorLogin() {
  return (
    <>
    <NavBar/>
    <Login role='investor'/>
    <Footer/>
    </>
  )
}

export default InvestorLogin