import React, { useEffect, useState } from "react";
import { getSingleStartupAxios, updateStartupStatusAxios } from "../../api/adminApi";
import { toast } from "react-toastify";
import Loading from "../common/Loading";


function StartupFullDetail({ startupId, onBackClick }) {
  const [loading, setLoading] = useState(false);
  const [startupDetail, setStartupDetail] = useState({});

  const fetchStartupDetail = async (Id) => {
    try {
      setLoading(true);
      console.log(Id);
      const res = await getSingleStartupAxios(Id);
      setStartupDetail(res.data);
      setLoading(false);
    } catch (errors) {
      toast.error("server error", { theme: "dark" });
      setLoading(false);
      console.log(errors);
    }
  };

  const handleStartupUpdate = async (newStatus) =>{
    try{
      setLoading(true)
      const status = {
        'approval_status':newStatus
      }
      const res = await updateStartupStatusAxios(startupId,status)
      toast.success(res.data.message,{theme:"dark"})
      setLoading(false)
    }catch(errors){
      setLoading(false)
      if (errors.response){
        const errorMessage = errors.response.data.message
        toast.error(errorMessage,{theme:"dark"})
      }
      else{
        toast.error('server error',{theme:"dark"})
      }
    }
  }

  useEffect(() => {
    fetchStartupDetail(startupId);
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
      startupDetail.id && (
      <div className="flex flex-col items-center p-10">
        <div className="mt-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Entrepreneurs Details</h1>
            {startupDetail.entrepreneurs &&
              startupDetail.entrepreneurs.map((item, key) => (
                <h1 className="text-2xl font-bold mt-5" key={key}>
                  {item.user && item.user.first_name}
                </h1>
              ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold">Startup Detail</h1>
          <h1 className="text-2xl font-bold mt-5">
            {startupDetail.startup_name}
          </h1>
          <p className="text-2xl font-bold mt-5">{startupDetail.brief_about}</p>
        </div>
        <div className="mt-10">
          {startupDetail.presentation_video ? (
            <video width="400" height="auto" controls>
              <source src={startupDetail.presentation_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video available</p>
          )}
        </div>
        <div className="flex gap-10">
          {startupDetail.approval_status === 'pending' ? (
            <div>
          <button className="btn-gradiant" onClick={()=>handleStartupUpdate('approved')}>Approve</button>
          <button className="btn-gradiant" onClick={()=>handleStartupUpdate('rejected')}>Reject</button>
          </div>
          ):(
            startupDetail.approval_status === 'approved' ? (
              <button className="btn-gradiant" onClick={()=>handleStartupUpdate('rejected')}>Reject</button>
            ) : (
              <button className="btn-gradiant" onClick={()=>handleStartupUpdate('approved')}>Approve</button>
            )
            
          )}
        </div>
        <div>
          <button className="btn-gradiant" onClick={onBackClick}>
            back to Startup Managment
          </button>
        </div>
      </div>
      )
      )}
    </>
  );
}

export default StartupFullDetail;
