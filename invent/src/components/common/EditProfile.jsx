import React, { useState } from 'react'
import { useSelector } from "react-redux";
import jaseem from "../../assets/investor.jpg";
import { useFormik } from "formik";
import Loading from "../common/Loading";
import { updateEntrepreneurProfileAxios} from '../../api/userApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const user = useSelector((state) => state.userReducer.user);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate()

    const { values, errors, touched, handleBlur, handleChange, handleSubmit} = 
    useFormik({
      initialValues:{
        phone_number:'',
        first_name:'',
       
      },
      
      onSubmit
    })

   


    async function onSubmit(){
        try{
          setLoading(true)
          const res = await updateEntrepreneurProfileAxios(values)
        if (res.status === 200){
          toast.success('updated',{theme:"dark"})
          navigate('/entrepreneur/profile')
        }
        setLoading(false);
        }
        catch(error){
          setLoading(false);
            toast.error('server error',{theme:"dark"});
            console.log(error, "response in error");
            
        }
      }

  return (
    <>
    <div className="flex items-center justify-center h-screen">
        <div className="card w-96 shadow-xl bg-gray-900">
          <h1 className="text-4xl font-bold text-center p-4 text-yellow-800 mt-5">
            PROFILE
          </h1>
          <figure className="px-10 pt-10">
            <img src={jaseem} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.first_name}</h2>
            <h2 className="card-title">{user.email}</h2>
            <h2 className="card-title">{user.phone_number}</h2>
            <p>{user.role}</p>
            <div className="card-actions">
              <label htmlFor="my_modal_7" className="btn-gradiant">
                Edit
              </label>
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
                value={values.phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
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
  )
}

export default EditProfile