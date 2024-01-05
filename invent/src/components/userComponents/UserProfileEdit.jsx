import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEntrepreneurProfileAxios } from "../../api/userApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { userLogin } from "../../Store/slice/userSlice";
import Loading from "../common/Loading";

function UserProfileEdit() {
  const user = useSelector((state) => state.userReducer.user);
  const token = useSelector((state)=>state.userReducer.token)
  const dispatch = useDispatch()
  const [phone_number, setPhone_number] = useState(user.user.phone_number || "");
  const [first_name, setFirst_name] = useState(user.user.first_name || "");
  const [linkedin_link, setLinkedin_link] = useState(user.linkedin_link || "");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const linkedinLink = user?.linkedin_link;

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    if (linkedinLink) {
      window.open(linkedinLink, '_blank'); // Open the LinkedIn link in a new tab
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      // Append only if the value has changed
      if (phone_number !== user.phone_number) {
        formData.append("phone_number", phone_number);
      }

      if (first_name !== user.first_name) {
        formData.append("first_name", first_name);
      }
 
      if (linkedin_link !== user.linkedin_link) {
        formData.append("linkedin_link", linkedin_link);
      }
      if (selectedFile) {
        formData.append("profile_picture", selectedFile);
      }
      console.log(formData);
      const res = await updateEntrepreneurProfileAxios(formData);
      if (res.status === 200) {
        dispatch(
          userLogin({
            token: token,
            user: res.data.user,
          })
        )
        toast.success("updated", { theme: "dark" });
        setLoading(false)
      }
    } catch (errors) {
      console.log(errors);
      setLoading(false)
    }
  };

  return (
    <>
 {loading ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="spinnerouter">
            <Loading/>
          </div>
        </div>
      ) : (
    <>
      <div className="container mx-auto my-40">
        <div>
          <div className="bg-gray-500 relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src={
                  user.profile_picture ||
                  "https://avatars0.githubusercontent.com/u/35900628?v=4"
                }
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900 uppercase">
                {user.user.first_name}
              </h1>
              <p className="text-center text-sm text-gray-200 font-medium">
                {user.user.role}
              </p>
              <p>
                <span></span>
              </p>
              <div className="flex justify-center card-actions my-5">
                <label htmlFor="my_modal_7" className="btn-gradiant">
                  Edit Profile
                </label>
              </div>
             
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <div>
                  <h4 className="text-xl text-gray-900 font-bold">
                    Personal Info
                  </h4>
                </div>
                <div>
                  <ul className="mt-2 text-gray-900">
                    <li className="flex border-y py-2">
                      <span className="font-bold w-24">Full name:</span>
                      <span className="text-gray-700">{user.user.first_name}</span>
                    </li>
                    <li className="flex border-b py-2">
                      <span className="font-bold w-24">Joined:</span>
                      <span className="text-gray-700">
                        {user.user.joined_at}
                      </span>
                    </li>
                    <li className="flex border-b py-2">
                      <span className="font-bold w-24">Mobile:</span>
                      <span className="text-gray-700">{user.user.phone_number}</span>
                    </li>
                    <li className="flex border-b py-2">
                      <span className="font-bold w-24">Email:</span>
                      <span className="text-gray-700">{user.user.email}</span>
                    </li>
                    <li className="flex border-b py-2">
                      <span className="font-bold w-24">Location:</span>
                      <span className="text-gray-700">New York, US</span>
                    </li>
                    <li className="flex items-center border-b py-2 space-x-2">
                            <span className="font-bold w-24">Elsewhere:</span>
                            
                            <Link to="#" onClick={handleLinkedInClick}>
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 333333 333333"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                imageRendering="optimizeQuality"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              >
                                <path
                                  d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                                  fill="#0077b5"
                                />
                              </svg>
                              </Link>
                            
                          </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-slate-400">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Your form elements go here */}

            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Linkedin link
              </label>
              <input
                type="text"
                id="linkedin_link"
                name="linkedin_link"
                value={linkedin_link}
                onChange={(e) => setLinkedin_link(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="profile_picture"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profile_picture"
                name="profile_picture"
                onChange={handleFileChange}
                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[200px] bg-blue-600 text-white p-2 rounded-md hover:bg-black focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                save
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
      </>
       )}
    </>
  );
}

export default UserProfileEdit;
