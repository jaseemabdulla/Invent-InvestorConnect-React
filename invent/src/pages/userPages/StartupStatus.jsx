import React, { useEffect, useState } from "react";
import NavBar from "../../components/common/NavBar";
import jaseem from "../../assets/investor.jpg";
import { addStartupAxios } from "../../api/userApi";
import { toast } from "react-toastify";
import Loading from "../../components/common/Loading";

function StartupStatus() {
  const [name, setName] = useState("");
  const [brief, setBrief] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const handleStageChange = (event) => {
    setStage(event.target.value);
  };

  const handleVideoUpdate = (event) => {
    const video_file = event.target.files[0];
    setFile(video_file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("===============", name, brief, industry, stage, file);
      const formData = new FormData();

      formData.append("startup_name", name);
      formData.append("brief_about", brief);
      formData.append("startup_industry", industry);
      formData.append("startup_stage", stage);
      if (file) {
        formData.append("presentation_video", file);
      }
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      console.log("FormData Object:=========================", formDataObject);
      const res = await addStartupAxios(formData);
      if (res.status === 201) {
        setLoading(false);
        toast.success("added", { theme: "dark" });
      }
    } catch (errors) {
      setLoading(false)
      if (errors.response.data.message){
        toast.error(errors.response.data.message,{theme:"dark"})
      }
      else if (errors.response.data.errors){
        toast.error('bad data',{theme:"dark"})
      }
      else{
        toast.error('server not',{theme:"dark"})
      }
      console.log(errors);
    }
  };

  return (
    <>
      <NavBar />
      {loading ? (<div className="fixed inset-0 flex items-center justify-center">
          <div className="spinnerouter">
            <Loading/>
          </div>
        </div>):(
      <div className="bg-gray-800 mt-10">
        <div className="border">
          <h1 className="text-center text-3xl font-bold mt-5 text-yellow-500">
            Level 1
          </h1>
          <p className="text-2xl font-bold text-center mt-5">
            join the wishlist
          </p>
          <div className="flex items-center justify-center p-5">
            <button className="btn-normal">comleted</button>
          </div>
        </div>
        <div className="border bg-gray-800 mt-10">
          <h1 className="text-center text-3xl font-bold mt-5 text-yellow-500">
            Level 2
          </h1>
          <p className="text-2xl font-bold text-center mt-5">
            upload your startup idea for approvel
          </p>
          <div className="grid min-h-screen place-items-center">
            <div className="w-11/12 p-8 bg-black sm:w-8/12 md:w-1/2 lg:w-5/12">
              <form className="mt-6" onSubmit={handleSubmit} encType="multipart/form-data">
                <label
                  htmlFor="name"
                  className="block mt-2 text-xs font-semibold text-gray-200 uppercase"
                >
                  Startup Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full p-3 mt-2 text-black bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <label
                  htmlFor="brief"
                  className="block mt-2 text-xs font-semibold text-gray-200 uppercase"
                >
                  Brief About the Startup
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  onChange={(e) => setBrief(e.target.value)}
                  className="block w-full p-3 mt-2 text-black bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                  rows="4" // Specify the number of visible rows
                ></textarea>

                <label
                  htmlFor="industry"
                  className="block mt-2 text-xs font-semibold text-gray-200 uppercase"
                >
                  Startup Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="block w-full p-3 mt-2 text-black bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                  value={industry}
                  onChange={handleIndustryChange}
                >
                  <option value="" disabled selected>
                    Select an industry
                  </option>
                  <option value="tech">Technology</option>
                  <option value="health">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="edu">Education</option>
                  <option value="retail">Retail</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="food">Food and Beverage</option>
                  <option value="travel">Travel and Hospitality</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="fashion">Fashion</option>
                  <option value="media">Media and Communication</option>
                  <option value="real_estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>

                <label
                  htmlFor="stage"
                  className="block mt-2 text-xs font-semibold text-gray-200 uppercase"
                >
                  Startup Stage
                </label>
                <select
                  id="stage"
                  name="stage"
                  className="block w-full p-3 mt-2 text-black bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                  value={stage}
                  onChange={handleStageChange}
                >
                  <option value="" disabled selected>
                    Select a stage
                  </option>
                  <option value="pre_seed">Pre-Seed Stage</option>
                  <option value="seed">Seed Stage</option>
                  <option value="early">Early Stage</option>
                  <option value="growth">Growth Stage</option>
                  <option value="expansion">Expansion Phase</option>
                  <option value="exit">Exit Phase</option>
                </select>

                <label
                  htmlFor="presentationVideo"
                  className="block mt-2 text-xs font-semibold text-gray-200 uppercase"
                >
                  Presentation Video
                </label>
                <input
                  type="file"
                  id="presentationVideo"
                  name="presentationVideo"
                  accept="video/*" // Specify the accepted file types (e.g., video files)
                  className="block w-full p-3 mt-2 text-black bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                  onChange={handleVideoUpdate}
                />

                <button
                  type="submit"
                  className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-700 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold mt-5 text-yellow-500">
            Level 3
          </h1>
          <p>fhhfdhdhhgdhg</p>
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
