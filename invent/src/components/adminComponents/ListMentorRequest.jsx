import React, { useEffect, useRef, useState } from "react";
import { assignMentorAxios, listMentorRequestAxios } from "../../api/adminApi";
import { toast } from "react-toastify";
import { mentorListAxios } from "../../api/mentorApi";

function ListMentorRequest() {
  const [mentorRequests, setMentorRequests] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState([]);
  const refs = useRef([]);

  const fetchMentorRequests = async () => {
    try {
      const res = await listMentorRequestAxios();
      setMentorRequests(res.data);
    } catch {
      toast.error("server error", { theme: "dark" });
    }
  };

  const fetchMentors = async () => {
    try {
      const res = await mentorListAxios();
      setMentors(res.data);
    } catch {
      toast.error("server error", { theme: "dark" });
    }
  };

  const handleMentorSelection = (event,rowIndex) => {
    const newSelectedMentor = [...selectedMentor]
    newSelectedMentor[rowIndex] = event.target.value;
    setSelectedMentor(newSelectedMentor);

  };

  const assignMentor = async (entrepreneur_id, rowIndex) => {
    try {
      setLoading(true);
      const res = await assignMentorAxios({
        enterepreneur_id: entrepreneur_id,
        mentor_id: selectedMentor[rowIndex],
      });
      setLoading(false);
      toast.success("Assign successfully", { theme: "dark" });
    } catch (error) {
      console.log("=========assignMentor===error", error);
      toast.error("server error", { theme: "dark" });
    }
  };

  useEffect(() => {
    fetchMentorRequests();
    fetchMentors();
  }, []);
  return (
    <>
      {mentorRequests && mentorRequests.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Entrepreneur Name</th>
                <th>Startup Count</th>
                <th>Available Mentors with entrepreneurs count</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mentorRequests.map((item, key) => (
                <tr key={key}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          {item.entrepreneur.profile_picture ? (
                            <img
                              src={item.entrepreneur.profile_picture}
                              alt="Profile"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#a0616a"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-full h-full"
                            >
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item.entrepreneur.user.first_name}
                        </div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.startup_details.length}</td>
                  <td>
                    <select
                      ref={(el) => (refs.current[key] = el)}
                      className="p-2 border border-gray-950 rounded"
                      value={selectedMentor[key]}
                      onChange={(event) => handleMentorSelection(event, key)}
                    >
                      <option value="" disabled selected>
                        Select a Mentor
                      </option>
                      {mentors && mentors.length > 0 ? (
                        mentors.map((item, key) => (
                          <option key={key} value={item.id}>
                            {item.user.first_name}-({item.entrepreneurs_count})
                          </option>
                        ))
                      ) : (
                        <option value=""></option>
                      )}
                    </select>
                  </td>
                  <th>
                    <button
                      className="btn-gradiant"
                      onClick={
                        !selectedMentor[key]
                          ? () => {
                            refs.current[key].focus();
                            }
                          : () => assignMentor(item.entrepreneur.id, key)
                      }
                    >
                      Assign
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-4xl font-bold">No Request Available</h1>
        </div>
      )}
    </>
  );
}

export default ListMentorRequest;
