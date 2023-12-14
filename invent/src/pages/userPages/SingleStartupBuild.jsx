import React, { useEffect, useState } from "react";
import { getSingleStartupAxios } from "../../api/adminApi";
import { toast } from "react-toastify";
import Loading from "../../components/common/Loading";
import CreateBusinessPlan from "../../components/userComponents/CreateBusinessPlan";

function SingleStartupBuild({ startupId }) {
  const [loading, setLoading] = useState(false);
  const [startup, setStartup] = useState({});

  const fetchStartup = async (id) => {
    try {
      setLoading(true);
      const res = await getSingleStartupAxios(id);
      setStartup(res.data);
      console.log('=====================startups===========',res.data);
      setLoading(false);
    } catch {
      setLoading(false);
      toast.error("server error", { theme: "dark" });
    }
  };
  useEffect(() => {
    fetchStartup(startupId);
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
     
        startup ? (
          
        <div className="mt-10">
          <div className="flex justify-center">
            <video width="800" height="auto" controls>
              <source src={startup.presentation_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
            <div className="text-center">
          <h1 className="text-2xl font-bold">{startup.startup_name}</h1>

          <p>{startup.brief_about}</p>
          </div>
        </div>
        
        
      ) : (
        <div>
            <h1>no startup available</h1>
        </div>
      )
      )}
      <CreateBusinessPlan/>

    </>
  );
}

export default SingleStartupBuild;
