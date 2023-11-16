import React, { useState } from "react";
import bacckGround from '../../assets/AdminLogin.jpg'
import {useFormik} from 'formik'
import {adminLoginAxios} from '../../api/adminApi'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/common/Loading";
import {userLogin} from '../../Store/slice/userSlice'

function AdminLogin() {

  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit
  })

  async function onSubmit(){
    try{
      setLoading(true)
      const res = await adminLoginAxios(values)
      if (res?.status === 200){
        const {token, user} = res.data
        localStorage.setItem("userToken",token)
        dispatch(
          userLogin({
            token:token,
            user:user
          })
        )
        navigate('/admin/home/')
        toast.success(res?.data?.messege,{theme:"dark"})
      }
      
      setLoading(false)
    } catch(error){
      toast.error("please logout existing account",{theme:"dark"})
      setLoading(false)
      console.log(error, "response in error")
    }
  }

  return (
    <>
    {loading ? (
      <div className="fixed inset-0 flex items-center justify-center">
      <div className="spinnerouter">
        <Loading/>
      </div>
    </div>
    ):(
      <div
        className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:`url(${bacckGround})`
            
        }}
      >
        <div className="rounded-xl bg-white bg-opacity-30 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-black">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                width={150}
                alt=""
                srcSet=""
              />
              <h1 className="mb-2 text-2xl">Startup Gear</h1>
              <span >Enter Login Details</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-yellow-800  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-900"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default AdminLogin;
