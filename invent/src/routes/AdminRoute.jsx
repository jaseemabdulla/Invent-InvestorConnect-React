import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminHome from '../pages/adminPages/AdminHome'
import AdminLogin from '../pages/adminPages/AdminLogin'

function AdminRoute() {
  return (
    <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='/home' element={<AdminHome/>}/>
    </Routes>
  )
}

export default AdminRoute