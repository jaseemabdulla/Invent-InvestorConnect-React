import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AdminProtect(props) {
  const user = useSelector((state)=>state.userReducer.user)
  if (user && user.user.role === 'admin'){
    return props.children
  }
  else{
    return <Navigate to={'/admin'}/>
  }
}
     
export default AdminProtect