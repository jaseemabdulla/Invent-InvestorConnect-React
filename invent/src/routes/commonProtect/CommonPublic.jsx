import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function CommonPublic(props) {
    const user = useSelector((state)=>state.userReducer.user)
   
    if (user){
        if(user.user.role === 'investor'){
            return <Navigate to={'/investor'}/>
        }
        else if (user.user.role === 'entrepreneur'){
            return <Navigate to={'/entrepreneur'}/>
        }
        else if (user.user.role === 'admin'){
            return <Navigate to={'/admin/home'}/>
        }
        else if (user.user.role === 'mentor'){
            return <Navigate to={'/mentor/profile'}/>
        }
    }
    else {
        return props.children
    }
}

export default CommonPublic