import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHome from "../pages/userPages/UserHome";
import UserLogin from "../pages/userPages/UserLogin";
import UserSignup from "../pages/userPages/UserSignup";
import SingleEtrepreneur from "../pages/userPages/SingleEtrepreneur";
import UserProtect from "./userProtect/UserProtect";
import CommonPublic from "./commonProtect/CommonPublic";
import EditProfile from "../components/common/EditProfile";
import UserProfile from "../pages/userPages/UserProfile";


function UserRoute() {
  return (
    <Routes>
      {/* Public routes for non-logged-in users */}

      <Route path="/" element={<UserHome />} />
      <Route
        path="/login"
        element={
          
            <CommonPublic><UserLogin /></CommonPublic>
            
        }
      />
      <Route
        path="/signup"
        element={
          
            <CommonPublic><UserSignup /></CommonPublic>
          
        }
      />

      <Route
        path="/singleEntrepreneur"
        element={
          <UserProtect>
            <SingleEtrepreneur />
          </UserProtect>
        }
      />
      <Route path="/profile" element={<UserProtect><UserProfile/></UserProtect>}/>
    </Routes>
  );
}

export default UserRoute;
