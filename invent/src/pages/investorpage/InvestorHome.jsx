import React from 'react'
import { Link } from 'react-router-dom'


function InvestorHome() {
  return (
    <>
    <Link to={'/investor/signup'}>
   <button className='bg-blue-600'>signup</button>
    </Link>
   
    </>
  )
}

export default InvestorHome