import React from "react";
import { Tab, Tabs } from "../../components/common/Tabs";
import Nav from "../../components/common/NavBar";
import UserProfileEdit from "../../components/userComponents/UserProfileEdit";
import jaseem from "../../assets/investor.jpg";
import { Link, useNavigate } from "react-router-dom";
import AddStartup from "../../components/userComponents/AddStartup";
import UserStartupsList from "../../components/userComponents/UserStartupsList";
import { useDispatch } from "react-redux";
import { userLogout } from "../../Store/slice/userSlice";

function UserProfile() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem("userAccessToken");
    localStorage.removeItem("userRefreshToken");
    dispatch(userLogout());
    navigate("/entrepreneur/")
  };

  return (
    <>
      <Nav />
      <div className="text-white">
        <Tabs>
          <Tab label="Profile">
            
             <UserProfileEdit/>
            
          </Tab>
          <Tab label="Startups">
          <UserStartupsList/>
          </Tab>
          <Tab label="Add Startup">
            <AddStartup/>
          </Tab>
          <Tab label="Logout">
          <button onClick={handleLogout} className="btn-gradiant">Logout</button>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default UserProfile;
