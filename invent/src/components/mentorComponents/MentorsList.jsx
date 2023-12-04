import React, { useEffect, useState } from "react";
import jaseem from "../../assets/investor.jpg";
import { mentorListAxios } from "../../api/mentorApi";
import { toast } from "react-toastify";
import Loading from "../common/Loading";


function MentorsList() {

  const [loading, setLoading] = useState(false)
  const [mentors, setMentors] = useState([])

  const fetchMentorList = async () => {
    try{
      setLoading(true)
      const res = await mentorListAxios()
      console.log(res.data);
      setMentors(res.data)
      setLoading(false)
    }catch(errors){
      console.log(errors);
      toast.error('server not loading',{theme:"dark"})
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchMentorList()
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
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-8 mt-20">
          <h1 className="text-6xl font-bold text-center">
            People Who Will Support
            <br /> Your Startup Journey
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20">
        {mentors && mentors.length > 0 ? (
          mentors.map((item,key)=>(
          <div className="col-span-1 text-center mb-4" key={key}>
            <img
              src={item.profile_picture}
              alt=""
              className="rounded-full w-[200px] h-[200px] mx-auto mb-4"
            />
            <h1 className="text-lg font-bold uppercase">{item.user.first_name}</h1>
            <p>{item.user.email}</p>
          </div>
          ))
        ):(
          <div>
            <h1>No mentors available</h1>
          </div>
        )}
        </div>
      </div>
      )}
    </>
    
  );
}

export default MentorsList;
