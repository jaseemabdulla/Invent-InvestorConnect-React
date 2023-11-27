import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import { Link } from "react-router-dom";
import jaseem from "../../assets/investor.jpg";
import { listUserStartupAxios } from "../../api/userApi";

function UserStartupsList() {
  const [loading, setLoading] = useState(false);
  const [userStartups, setUserStartups] = useState([]);

  const fetchUserStartups = async () => {
    try {
      setLoading(true);
      const res =await listUserStartupAxios()
      setUserStartups(res.data);
      setLoading(false);
    } catch (errors) {
      setLoading(false);
      console.log(errors);
    }
  };

  useEffect(() => {
    fetchUserStartups();
  }, []);
  return (
    <>
    {loading ? (
        <div className="fixed inset-0 flex items-center justify-center">
        <div className="spinnerouter">
          <Loading/>
        </div>
      </div>
    ):(
      <div className="p-[60px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">My Startups</h1>
        </div>
        
        <Link to={"/entrepreneur/startupStatus"}>
          <div className="flex flex-wrap justify-center">
            {userStartups && userStartups.length > 0 ? (
            userStartups.map((item,key)=>(
              <div
                className="card w-1/3 lg:w-1/5 bg-base-100 shadow-xl border"
                key={key}
              >
                <figure className="px-10 pt-10">
                  <img src={jaseem} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.startup_name}</h2>
                  <p>{item.brief_about}</p>
                  {/* Add other fields as needed */}
                  <div className="card-actions">
                    <button className="btn btn-primary">Block</button>
                  </div>
                </div>
              </div>
           ))
           ):(
            <p>No startups available.</p>
           )}
          </div>
        </Link>
      </div>
      )}
    </>
  );
}

export default UserStartupsList;
