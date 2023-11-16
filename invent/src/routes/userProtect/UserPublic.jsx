import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function UserPublic(props) {
  
    const user = useSelector((state)=>state.userReducer.user)

    if (user && user.role === "entrepreneur"){
        return <Navigate to={"/entrepreneur"}/>
    } else {
        return props.children 
    }
}

export default UserPublic