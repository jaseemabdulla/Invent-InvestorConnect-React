import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jaseem from "../../assets/investor.jpg";


function NavBar() {
  const user = useSelector((state) => state.userReducer.user);   
  const dispatch = useDispatch();

  
  
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              
                <li>
                <Link to={"/"}>Homeee</Link>
                </li>
              
              <li>
                <Link to={"/entrepreneur"}>Startup</Link>
              </li>
              <li>
              <Link to={"/investor"}>Investor</Link>
              </li>
              <li>
              <Link to={"/mentor"}>Mentors</Link>
              
              </li>
              <li>
              <Link>Market Research</Link>
                 
              </li>
            </ul>
          </div>
          <div>
          <button className="text-2xl lg:text-4xl xl:text-5xl font-bold"> StartupGear.</button>
         
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
              <li>
              <Link to={"/"}>Home</Link>
              </li>
           
          
            <li>
            <Link to={"/entrepreneur"}>Startup</Link>
            </li>
           
            
            <li>
            <Link to={"/investor"}>Investor</Link>
            </li>
            
            <li>
              <Link to={"/mentor"}>Mentors</Link>
            </li>
            <li>
            <Link>Market Research</Link>
              
            </li>
          </ul>
        </div>
        {user ? (
        <div className="navbar-end gap-8">
          <div>
          <Link to={"/entrepreneur/profile"}>
            <img src={user?.profile_picture ?? jaseem} className="w-12 h-12 rounded-full" />
            </Link>
          </div>
          
        </div>

        ) : (
        <div></div>
        )}
      </div>
    </>
  );
}

export default NavBar;
