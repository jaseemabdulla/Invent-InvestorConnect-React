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
import StartupStatus from "../pages/userPages/StartupStatus";
import BuildStrtup from "../pages/userPages/BuildStrtup";
import PaymentProtect from "./userProtect/PaymentProtect";
import SingleStartupBuild from "../pages/userPages/SingleStartupBuild";


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
      <Route path="/startupStatus" element={<UserProtect><StartupStatus/></UserProtect>}/>
      <Route path="/buildStartup" element={<UserProtect><PaymentProtect><BuildStrtup/></PaymentProtect></UserProtect>}/>

    </Routes>
  );
}

export default UserRoute;
