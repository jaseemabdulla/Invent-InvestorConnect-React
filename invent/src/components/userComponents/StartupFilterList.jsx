import React, { useEffect, useState } from "react";
import {
  lsitAllStartupAxios,
  lsitFilteredStartupAxios,
} from "../../api/userApi";
import { toast } from "react-toastify";
import { lsitStartupIndustryAxios } from "../../api/commonApi";
import { useSelector } from "react-redux";

function StartupFilterList() {
  const [loading, setLoading] = useState(false);
  const [startups, setStartups] = useState({});
  const [startupIndustries, setStartupIndustries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredStartupIndustry, setFilteredStartupIndustry] = useState(null);

  useSelector;
  const fetchStartups = async (page, Industry) => {
    try {
      setLoading(true);
      if (filteredStartupIndustry != null) {
        const res = await lsitFilteredStartupAxios(page, Industry);
        setStartups(res.data);
        setCurrentPage(res.data.current_page);
      } else {
        const Indus = "all";
        const res = await lsitFilteredStartupAxios(page, Indus);
        setStartups(res.data);
        setCurrentPage(res.data.current_page);
        setFilteredStartupIndustry(null);
      }
      setLoading(false);
    } catch {
      setLoading(false);
      toast.error("server error", { theme: "dark" });
    }
  };

  const fetchStartupIndustry = async () => {
    try {
      setLoading(true);
      const res = await lsitStartupIndustryAxios();
      setStartupIndustries(res.data.industry_choices);
    } catch {
      setLoading(false);
      toast.error("server error", { theme: "dark" });
    }
  };

  useEffect(() => {
    fetchStartups(currentPage, filteredStartupIndustry);
  }, [currentPage, filteredStartupIndustry]);

  useEffect(() => {
    fetchStartupIndustry();
  }, []);

  const handlePrevious = () => {
    if (startups.previous) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (startups.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleIndustryChange = (event) => {
    setFilteredStartupIndustry(event.target.value);
    setCurrentPage(1);
  };
  return (
    <>
      <div className="mt-20">
        <div className="text-center font-bold text-4xl">
          <h1>Our Startups</h1>
        </div>
        <div className="text-center mt-4">
          <label htmlFor="startupFilter" className="text-lg mr-2">
            Filter:
          </label>
          <select
            id="startupFilter"
            className="border p-2 rounded"
            value={filteredStartupIndustry}
            onChange={handleIndustryChange}
          >
            <option value="all">All Startups</option>
            {startupIndustries && startupIndustries.length > 0 ? (
              startupIndustries.map((item, key) => (
                <option key={key} value={item[0]}>
                  {item[1]}
                </option>
              ))
            ) : (
              <option value="not found">Not Found</option>
            )}
          </select>
        </div>
        {startups && startups.results ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 lg:p-16">
              {startups.results.map((item, key) => (
                <div
                  className="border rounded-3xl p-4 md:p-8 hover:bg-gray-400 hover:text-black"
                  key={key}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <video className="object-cover w-full h-full" controls>
                      <source src={item.presentation_video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">
                    {item.startup_name}
                  </h1>
                  <p className="mt-2">{item.brief_about}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {startups.previous && (
                <button onClick={handlePrevious} className="btn-paginate">
                  Previous
                </button>
              )}
              <span className="mx-4">
                Page {startups.current_page} of {startups.total_pages}
              </span>
              {startups.next && (
                <button onClick={handleNext} className="btn-paginate">
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center mt-8">No startups</div>
        )}
        <div className="flex justify-center mt-5">
          <button className="btn-gradiant">Apply Now</button>
        </div>
      </div>
    </>
  );
}

export default StartupFilterList;
