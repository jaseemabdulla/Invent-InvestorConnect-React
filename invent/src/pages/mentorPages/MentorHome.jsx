import React from 'react'
import NavBar from '../../components/common/NavBar'
import Footer from '../../components/common/Footer'
import MentorsList from '../../components/mentorComponents/MentorsList'

function MentorHome() {
  return (
    <>
    <NavBar/>
    <MentorsList/>
    <Footer/>
    </>
  )
}

export default MentorHome