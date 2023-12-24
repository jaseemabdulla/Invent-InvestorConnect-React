import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


function MentorProtect(props) {
  const user = useSelector((state)=>state.userReducer.user)
  if (user && user.user.role === 'mentor'){
    return props.children
  }else{
    return <Navigate to={'/mentor/login'}/>
  }
}

export default MentorProtect