import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import { userLoginVerification } from "../../api/userApi";
import { userLogin } from "../../Store/slice/userSlice";

import { useFormik } from "formik";
import Loading from '../common/Loading'
import { loginSchema } from "../../validations/user/loginValidation";

function Login() {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = 
      useFormik({
        initialValues:{
          email:"",
          password:""
        },
        validationSchema:loginSchema,
        onSubmit,
      })

      async function onSubmit(){
        try{
          setLoading(true)
          const res = await userLoginVerification(values);
          if (res?.status === 200){
            const {token, user} = res.data
            localStorage.setItem("userToken", token);
            dispatch(
              userLogin({
                token:token,
                user:user
              })
            )
            toast.success(res?.data?.message,{theme:"dark"})
            navigate('/entrepreneur/')
          }
          setLoading(false);
        } catch(error){
          setLoading(false);
          toast.error(error.response?.data?.message,{theme:"dark"});
          console.log(error, "response in error");
        }
      }

  return (
    <>
    {loading ? (
      <div className="fixed inset-0 flex items-center justify-center">
      <div className="spinnerouter">
        <Loading />
      </div>
    </div>
    ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={values.email} 
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
                      <p className="text-red-600">{errors.email}</p>
                    )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter the password"
              value={values.password} 
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
                      <p className="text-red-600">{errors.password}</p>
                    )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        
      </div>
      </div>
      )}
    </>
  );
}

export default Login;
