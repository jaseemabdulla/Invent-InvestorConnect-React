import { useFormik } from "formik";
import React, { useState } from "react";
import {createMentorProfileAxios} from '../../api/adminApi'
import { toast } from "react-toastify";
import Loading from "../common/Loading";

function AddMentor() {

    const [loading, setLoading] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
          // Use FileReader to read the selected image and set it for display
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
            // Set the image in the Formik state
            formik.setFieldValue('profile_picture',file)
          };
          reader.readAsDataURL(file);
        }
      };
   
    const onSubmit = async () => {
        try{
            setLoading(true)

            const formData = new FormData()

            formData.append('first_name', formik.values.first_name)
            formData.append('email', formik.values.email);
            formData.append('phone_number', formik.values.phone_number);
            formData.append('password', formik.values.password);
            formData.append('linkedin_link', formik.values.linkedin_link);
            formData.append('profile_picture', formik.values.profile_picture);
            const res = await createMentorProfileAxios(formData)
            toast.success(res.data.message,{theme:"dark"})
            setLoading(false)
        }catch(errors){
            setLoading(false)
            console.log(errors);
            const errorMessage = errors.response && errors.response.data && errors.response.data.error;
            toast.error(errorMessage || "An error occurred", { theme: "dark" });
        }
    }

    const formik =useFormik({
        initialValues:{
            first_name:'',
            email:'',
            phone_number:'',
            password:'',
            linkedin_link:'',
            profile_picture:null


        },  
        onSubmit,
    })
  return (
    <>
    {loading ? (
      <div className="fixed inset-0 flex items-center justify-center">
      <div className="spinnerouter">
        <Loading/>
      </div>
    </div>
    ):(
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Account settings
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="name">
                Name
              </label>
              <input
                id="first_name"
                type="text"
                onChange={formik.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                onChange={formik.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={formik.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <input
                id="phone_number"
                type="text"
                onChange={formik.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="linkedin_link"
              >
                Linkedin link
              </label>
              <input
                id="linkedin_link"
                type="text"
                onChange={formik.handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
          <label className="block text-sm font-medium text-white">Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                {selectedImage ? (
                    <img
                    src={selectedImage}
                    alt="Selected"
                    className="mx-auto h-12 w-12 text-white"
                  />
                ):(

              <svg
                className="mx-auto h-12 w-12 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
                    )}
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="">Upload image</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                </label>
                
              </div>
              <p className="text-xs text-white">PNG, JPG</p>
            </div>
          </div>
        </div>

          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
      )}
    </>
  );
}

export default AddMentor;
