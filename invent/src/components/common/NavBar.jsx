import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Store/slice/userSlice";
import { Link } from "react-router-dom";
import jaseem from "../../assets/investor.jpg";

function NavBar() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(userLogout());
  };

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
              <Link to={"/"}>
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <li>
                <a>Startup</a>
              </li>
              <li>
                <a>Investor</a>
              </li>
              <li>
                <a>Mentors</a>
              </li>
              <li>
                <a>Market Research</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            StartupGear.{user ? user.role : null}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to={"/"}>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <li>
              <a>Startup</a>
            </li>
            <li>
              <a>Investor</a>
            </li>
            <li>
              <a>Mentors</a>
            </li>
            <li>
              <a>Market Research</a>
            </li>
          </ul>
        </div>
        {user ? (
        <div className="navbar-end gap-8">
          <div>
            <button className="btn-gradiant">Status</button>
          </div>
          <div>
            <button onClick={handleLogout} className="btn-gradiant">Logout</button>
          </div>
          <div>
            <img src={jaseem} className="w-12 h-12 rounded-full" />
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
