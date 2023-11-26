import React from "react";
import { Tab, Tabs } from "../../components/common/Tabs";
import Nav from "../../components/common/NavBar";
import UserProfileEdit from "../../components/userComponents/UserProfileEdit";

function UserProfile() {
  return (
    <>
      <Nav />
      <div className="text-white">
        <Tabs>
          <Tab label="Profile">
            
             <UserProfileEdit/>
            
          </Tab>
          <Tab label="Investors">
            <div className="py-4">
              <h1>dffdsdg</h1>
            </div>
          </Tab>
          <Tab label="Entrepreneurs">
            <div className="py-4">
              <div className="py-4 font">
                <h1>dffdsdg</h1>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default UserProfile;
