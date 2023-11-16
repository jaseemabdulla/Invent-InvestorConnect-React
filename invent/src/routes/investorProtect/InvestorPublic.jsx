import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function InvestorPublic(props) {

    const user = useSelector((state)=>state.userReducer.user)
    if (user && user.role === 'investor'){
        return <Navigate to={'/investor'}/>
    } else {
        return props.children
    }
}

export default InvestorPublic