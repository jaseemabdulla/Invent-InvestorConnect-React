import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function UserProtect(props) {

  const user = useSelector((state) => state.userReducer.user);
  if (user && user.user.role === "entrepreneur") {
    return props.children;
  } else {
    return <Navigate to={"/entrepreneur/login"}/>;
  }
}

export default UserProtect;
