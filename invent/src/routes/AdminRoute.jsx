import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminHome from '../pages/adminPages/AdminHome'
import AdminLogin from '../pages/adminPages/AdminLogin'
import CommonPublic from './commonProtect/CommonPublic'
import AdminProtect from './adminProtect/AdminProtect'

function AdminRoute() {
  return (
    <Routes>
        
        <Route path='/' element={<CommonPublic><AdminLogin/></CommonPublic>}/>
        <Route path='/home' element={<AdminProtect><AdminHome/></AdminProtect>}/>
    </Routes>
  )
}

export default AdminRoute