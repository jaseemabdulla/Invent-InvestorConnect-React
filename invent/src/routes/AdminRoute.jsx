import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminHome from '../pages/adminPages/AdminHome'
import AdminLogin from '../pages/adminPages/AdminLogin'
import CommonPublic from './commonProtect/CommonPublic'

function AdminRoute() {
  return (
    <Routes>
        <Route path='/' element={<CommonPublic><AdminLogin/></CommonPublic>}/>
        <Route path='/home' element={<AdminHome/>}/>
    </Routes>
  )
}

export default AdminRoute