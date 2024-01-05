import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MentorHome from '../pages/mentorPages/MentorHome'
import MentorProfile from '../pages/mentorPages/MentorProfile'
import MentorLogin from '../pages/mentorPages/MentorLogin'
import MentorProtect from './mentorProtect/MentorProtect'
import MentorChat from '../components/mentorComponents/MentorChat'
import CommonPublic from './commonProtect/CommonPublic'


function MentorRoute() {
  return (
    <Routes>
        <Route path='/' element={<MentorHome/>}/>
        <Route path='/profile' element={<MentorProtect><MentorProfile/></MentorProtect>}/>
        <Route path='/login' element={<CommonPublic><MentorLogin/></CommonPublic>}/>
        <Route path='/inbox' element={<MentorProtect><MentorChat/></MentorProtect>}/>
    </Routes>
  )
}

export default MentorRoute