import React, { useEffect, useState } from "react";
import NavBar from "../../components/common/NavBar";
import jaseem from "../../assets/investor.jpg";
import { addStartupAxios } from "../../api/userApi";
import { toast } from "react-toastify";
import Loading from "../../components/common/Loading";
import Payment from "../../components/common/Payment";

function StartupStatus() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <NavBar />
      {loading ? (<div className="fixed inset-0 flex items-center justify-center">
          <div className="spinnerouter">
            <Loading/>
          </div>
        </div>):(
      <div className="bg-gray-950 mt-10">
        
       
        <div>
          <h1 className="text-center text-3xl font-bold mt-5 text-yellow-500">
            Level 3
          </h1>
          <Payment/>
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold mt-5 text-yellow-500">
            Level 4
          </h1>
          <p>fhhfdhdhhgdhg</p>
        </div>
      </div>
      )}
    </>
  );
}

export default StartupStatus;
