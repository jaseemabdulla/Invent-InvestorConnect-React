import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminHome from '../pages/adminPages/AdminHome'
import AdminLogin from '../pages/adminPages/AdminLogin'

function AdminRoute() {
  return (
    <Routes>
        <Route path='/' element={<AdminHome/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
    </Routes>
  )
}

export default AdminRoute