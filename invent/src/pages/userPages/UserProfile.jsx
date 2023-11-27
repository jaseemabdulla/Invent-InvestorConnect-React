import React from "react";
import { Tab, Tabs } from "../../components/common/Tabs";
import Nav from "../../components/common/NavBar";
import UserProfileEdit from "../../components/userComponents/UserProfileEdit";
import jaseem from "../../assets/investor.jpg";
import { Link } from "react-router-dom";
import AddStartup from "../../components/userComponents/AddStartup";
import UserStartupsList from "../../components/userComponents/UserStartupsList";

function UserProfile() {


  const investors = [
    {
      'name':'jaseem',
      'role':'idea'
    },
    {
      'name':'jaseem',
      'role':'idea'
    },{
      'name':'jaseem',
      'role':'idea'
    },{
      'name':'jaseem',
      'role':'idea'
    },
    {
      'name':'jaseem',
      'role':'idea'
    },
    {
      'name':'jaseem',
      'role':'idea'
    },{
      'name':'jaseem',
      'role':'idea'
    },{
      'name':'jaseem',
      'role':'idea'
    }
  ]
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
        </Tabs>
      </div>
    </>
  );
}

export default UserProfile;
