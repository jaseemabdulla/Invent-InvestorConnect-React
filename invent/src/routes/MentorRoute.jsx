import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MentorHome from '../pages/mentorPages/MentorHome'


function MentorRoute() {
  return (
    <Routes>
        <Route path='/' element={<MentorHome/>}/>
    </Routes>
  )
}

export default MentorRoute