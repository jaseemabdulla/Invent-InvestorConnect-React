import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "../../components/common/Tabs";
import Nav from "../../components/common/NavBar";
import {
  adminBlockUserAxios,
  adminEntrepreneursListAxios,
  adminInvestorsListAxios,
} from "../../api/adminApi";
import { toast } from "react-toastify";
import Loading from "../../components/common/Loading";
import jaseem from "../../assets/investor.jpg";
import AdminStartupList from "../../components/adminComponents/AdminStartupList";

function AdminHome() {
  const [loading, setLoading] = useState(false);
  const [investors, setinvestos] = useState([]);
  const [entrepreneur, setEntrepreneur] = useState([]);

  // function for fetch Investors

  const fetchDataInvestors = async () => {
    try {
      setLoading(true);
      const res = await adminInvestorsListAxios();
      if (res.status === 200) {
        setinvestos(res.data);
      } else {
        toast.error("loading error", { theme: "dark" });
      }
      setLoading(false);
    } catch (error) {
      toast.error("server error");
      setLoading(false);
      console.log(error);
    }
  };

  // function for fetch entrepreneurs

  const fetchEntrepreneurData = async () => {
    try {
      setLoading(true);
      const res = await adminEntrepreneursListAxios();
      if (res.status === 200) {
        setEntrepreneur(res.data);
      } else {
        toast.error("loading error", { theme: "dark" });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("server error", { theme: "dark" });
      setLoading(false);
    }
  };

  // handle block user

  const handleBlockUser = async(user_id) =>{
    try{
      setLoading(true)
      const res = await adminBlockUserAxios(user_id)
      if (res.status === 200){
        const updatedEntrepreneurList = entrepreneur.map((user)=>{
          if(user.id === user_id){
            return {...user,is_blocked:!user.is_blocked}
          }
          return user
        })
        setEntrepreneur(updatedEntrepreneurList)
        toast.success('user blocked',{theme:"dark"})
        setLoading(false)

      }
      setLoading(false)
    }
    catch(error){
      console.log(error)
      toast.error('server error',{theme:"dark"})
    }
  }
  

  useEffect(() => {
    fetchDataInvestors();
    fetchEntrepreneurData();
  }, []);
  return (
    <>
      <Nav />
      <div className="text-white">
        <Tabs>
          <Tab label="Dashboard"></Tab>
          <Tab label="Investors">
            <div className="py-4">
              {loading ? (
                <div className="fixed inset-0 flex items-center justify-center">
                  <div className="spinnerouter">
                    <Loading />
                  </div>
                </div>
              ) : (
                <div className="p-[60px]">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">investors</h1>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    {investors.map((item, key) => (
                      <div
                        className="card w-1/3 lg:w-1/5 bg-base-100 shadow-xl border"
                        key={key}
                      >
                        <figure className="px-10 pt-10">
                          <img
                            src={jaseem}
                            alt="Shoes"
                            className="rounded-xl"
                          />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">
                            {item.first_name} {item.last_name}
                          </h2>
                          <p>{item.role}</p>
                          {/* Add other fields as needed */}
                          <div className="card-actions">
                            <button className="btn btn-primary">Block</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Tab>
          <Tab label="Entrepreneurs">
            <div className="py-4">
              {loading ? (
                <div className="fixed inset-0 flex items-center justify-center">
                  <div className="spinnerouter">
                    <Loading />
                  </div>
                </div>
              ) : (
                <div className="p-[60px]">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Entrepreneurs</h1>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    {entrepreneur.map((item, key) => (
                      <div
                        className="card w-1/3 lg:w-1/5 bg-base-100 shadow-xl border"
                        key={key}
                      >
                        <figure className="px-10 pt-10">
                          <img
                            src={jaseem}
                            alt="Shoes"
                            className="rounded-xl"
                          />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">
                            {item.first_name} {item.last_name}
                          </h2>
                          <p>{item.role}</p>
                          {/* Add other fields as needed */}
                          <div className="card-actions">
                            {item.is_blocked ? (
                              <button onClick={()=>handleBlockUser(item.id)} className="btn btn-primary">Unblock</button>
                            ):(<button onClick={()=>handleBlockUser(item.id)} className="btn btn-primary">block</button>)}
                            
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Tab>
          <Tab label="Startup Managment">
            
            <AdminStartupList/>

          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default AdminHome;
