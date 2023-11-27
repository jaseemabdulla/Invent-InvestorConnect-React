import React, { useEffect, useState } from "react";
import jaseem from "../../assets/investor.jpg";
import { listApprovedStartupAxios, listPendingStartupAxios, listRejectedStartupAxios } from "../../api/adminApi";
import { toast } from "react-toastify";
import Loading from "../common/Loading";

function StartupManagment() {

    const [pendingStartups, setPendingStartups] = useState([])
    const [approvedStartups, setApprovedStartups] = useState([])
    const [rejectedStartups, setRejectedStartups] = useState([])

    const [loading, setLoading] = useState(false)

    const fetchDatapendingStartups = async ()=>{
        try{
            setLoading(true)
            const res = await listPendingStartupAxios()
            if (res.status === 200){
                setPendingStartups(res.data)
                console.log(res.data)
            }
            setLoading(false)
        }
        catch(errors){
            toast.error('server error',{theme:"dark"})
            console.log(errors)
        }
    }

    const fetchDataApprovedStartups = async ()=>{
        try{
            setLoading(true)
            const res = await listApprovedStartupAxios()
            if (res.status === 200){
                setApprovedStartups(res.data)
            }
            setLoading(false)
        }
        catch(errors){
            toast.error('server error',{theme:"dark"})
            console.log(errors)
        }
    }

    const fetchDataRejectedStartups = async ()=>{
        try{
            setLoading(true)
            const res = await listRejectedStartupAxios()
            if (res.status === 200){
                setRejectedStartups(res.data)
            }
            setLoading(false)
        }
        catch(errors){
            toast.error('server error',{theme:"dark"})
            console.log(errors)
        }
    }

    useEffect(()=>{
        fetchDatapendingStartups()
        fetchDataApprovedStartups()
        fetchDataRejectedStartups()
    },[])

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
        {/* pending startups */}
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Pending Startups</h1>
        </div>
        <div className="flex flex-wrap justify-center">
            
            {pendingStartups.map((item,key)=>(
          <div className="card w-1/3 lg:w-1/5 bg-base-100 shadow-xl border" key={key}>
            <figure className="px-10 pt-10">
              <img src={jaseem} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.startup_name}</h2>
              <p>{item.brief_about}</p>
              {/* Add other fields as needed */}
              <div className="card-actions">
                <button className="btn btn-primary">Unblock</button>
              </div>
            </div>
          </div>
      
          ))}
        </div>
        {/* approved startups */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Approved Startups</h1>
        </div>
        <div className="flex flex-wrap justify-center">
            {approvedStartups.length >0 ? (
                approvedStartups.map((item,key)=>(
          <div className="card w-1/3 lg:w-1/5 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
              <img src={jaseem} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.startup_name}</h2>
              <p>{item.brief_about}</p>
              {/* Add other fields as needed */}
              <div className="card-actions">
                <button className="btn btn-primary">Unblock</button>
              </div>
            </div>
          </div>
          ))
          ):(<p>No approved startups available.</p>)}
        </div>
        {/* rejected startups */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Rejected Startups</h1>
        </div>
        <div className="flex flex-wrap justify-center">
            {rejectedStartups.length > 0 ? (
                rejectedStartups.map((item,key)=>(
          <div className="card w-1/3 lg:w-1/5 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
              <img src={jaseem} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.startup_name}</h2>
              <p>{item.brief_about}</p>
              {/* Add other fields as needed */}
              <div className="card-actions">
                <button className="btn btn-primary">Unblock</button>
              </div>
            </div>
          </div>
          ))
          ):(<p>No rejected startups available.</p>)}
        </div>
      </div>
      )}
    </>
  );
}

export default StartupManagment;
