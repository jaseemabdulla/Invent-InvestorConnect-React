import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UserHome from '../pages/userPages/UserHome'
import UserLogin from '../pages/userPages/UserLogin'
import UserSignup from '../pages/userPages/UserSignup'
import SingleEtrepreneur from '../pages/userPages/SingleEtrepreneur'

function UserRoute() {
  return (
    <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/singleEntrepreneur' element={<SingleEtrepreneur/>}/>
    </Routes>
  )
}

export default UserRoute