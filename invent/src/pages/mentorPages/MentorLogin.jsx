import React from 'react'
import NavBar from '../../components/common/NavBar'
import Login from '../../components/common/Login'
import Footer from '../../components/common/Footer'

function MentorLogin() {
  return (
    <>
    <NavBar/>
    <Login role = 'mentor'/>
    <Footer/>
    </>
  )
}

export default MentorLogin