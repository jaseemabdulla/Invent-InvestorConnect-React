import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../Store/slice/userSlice'

function NavBar() {

  const user = useSelector((state)=>state.userReducer.user)
  const dispatch = useDispatch()

  const handleLogout = ()=>{
    localStorage.removeItem("userToken")
    dispatch(
      userLogout()
    )
  }

 
  
  return (
    <>
    {/* <div className="navbar bg-slate-600">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">INVENT.{user ? user.role : null}</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a
        onClick={handleLogout}
        >Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Startup</a></li>
        <li><a>Investor</a></li>
        <li><a>Mentors</a></li>
        <li><a>Market Research</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">INVENT.{user ? user.role : null}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Startup</a></li>
        <li><a>Investor</a></li>
        <li><a>Mentors</a></li>
        <li><a>Market Research</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a
        onClick={handleLogout}
        >Logout</a></li>
      </ul>
    </div>
  </div>
</div>


    </>
  )
}

export default NavBar