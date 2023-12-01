import React, { useState } from "react";
import StartupFullDetail from "./StartupFullDetail";
import StartupManagment from "./StartupManagment";


function AdminStartupList() {
  const [startupDetail, setStartupDetail] = useState(false);
  const [startupId, setStartupId] = useState("");
  

  const handleStartupDetail = (Id) => {
    setStartupDetail(true);
    setStartupId(Id);
  };

  const handleBackClick = () => {
    setStartupDetail(false)
    setStartupId('')
  }

  
  return (
    <>
      {startupDetail ? (
        <StartupFullDetail startupId={startupId} onBackClick={handleBackClick}/>
      ) : (
        <StartupManagment onStartupClick = {handleStartupDetail}/>
      )}
    </>
  );
}

export default AdminStartupList;
