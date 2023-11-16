import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHome from "../pages/userPages/UserHome";
import UserLogin from "../pages/userPages/UserLogin";
import UserSignup from "../pages/userPages/UserSignup";
import SingleEtrepreneur from "../pages/userPages/SingleEtrepreneur";
import UserProtect from "./userProtect/UserProtect";
import UserPublic from "./userProtect/UserPublic";

function UserRoute() {
  return (
    <Routes>
      {/* Public routes for non-logged-in users */}

      <Route path="/" element={<UserHome />} />
      <Route
        path="/login"
        element={
          <UserPublic>
            <UserLogin />
          </UserPublic>
        }
      />
      <Route
        path="/signup"
        element={
          <UserPublic>
            <UserSignup />
          </UserPublic>
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
    </Routes>
  );
}

export default UserRoute;
