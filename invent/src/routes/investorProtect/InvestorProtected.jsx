import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function InvestorProtected(props) {
  const user = useSelector((state)=>state.userReducer.user)
  if (user && user.user.role === 'investor'){
    return props.children
  } else {
    return <Navigate to={'investor/login'}/>
  }
}

export default InvestorProtected