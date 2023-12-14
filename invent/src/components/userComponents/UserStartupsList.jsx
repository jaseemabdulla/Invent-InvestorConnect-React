import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import { Link } from "react-router-dom";
import jaseem from "../../assets/investor.jpg";
import { listUserStartupAxios } from "../../api/userApi";

function UserStartupsList({onClickStartup}) {
  const [loading, setLoading] = useState(false);
  const [userStartups, setUserStartups] = useState({});
  const [currentPage, setCurrentPage] = useState(1)


  const fetchUserStartups = async (pageNo) => {
    try {
      setLoading(true);
      const res =await listUserStartupAxios(pageNo)
      setUserStartups(res.data);
      setCurrentPage(res.data.current_page)
      setLoading(false);
    } catch (errors) {
      setLoading(false);
      console.log(errors);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage-1)
  }

  const handleNext = () => {
    setCurrentPage(currentPage+1)
  }

  useEffect(() => {
    fetchUserStartups(currentPage);
  }, [currentPage]);
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
        
            
            {userStartups && userStartups.results && userStartups.results.length > 0 ? (
              <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
              {userStartups.results.map((item,key)=>(
              <div
                  className="border rounded-3xl p-16 hover:bg-gray-400 hover:text-black"
                  key={key}
                >
                  <div>
                    <video width="400" height="auto" controls>
                      <source src={item.presentation_video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                 
                  <h1 className="text-2xl font-bold" onClick={()=>onClickStartup(item.id)}>{item.startup_name}</h1>
                 
                  <p>{item.brief_about}</p>
                </div>
           ))}
           </div>
             <div className="flex justify-center mt-4">
              {userStartups.previous && (
                <button  className="btn-paginate" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              <span className="mx-4">
                Page {userStartups.current_page} of {userStartups.total_pages}
              </span>
              {userStartups.next && (
                <button className="btn-paginate" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
            </>
           ):(
            <div>
              <h1 className="text-2xl font-bold text-center">You did not have any Startups</h1>
              <div className="flex justify-center mt-5">
                <Link to={'/entrepreneur/profile'}>
              <button className="btn-gradiant">Add Startup</button>
              </Link>
              </div>
            </div>
           )}
         
          
      </div>
      )}
    </>
  );
}

export default UserStartupsList;
