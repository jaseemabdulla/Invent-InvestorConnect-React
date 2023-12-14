import React, { useEffect, useState } from 'react'
import NavBar from '../../components/common/NavBar'
import Footer from '../../components/common/Footer'
import MentorRequest from '../../components/userComponents/MentorRequest'
import { getMentorRequestobj } from '../../api/userApi'
import { toast } from 'react-toastify'
import Loading from '../../components/common/Loading'
import UserMentor from '../../components/userComponents/UserMentor'
import UserStartupsList from '../../components/userComponents/UserStartupsList'
import SingleStartupBuild from './SingleStartupBuild'

function BuildStrtup() {

  const [mentorRequestObj, setMentorRequestObj] = useState(null)
  const [loading, setLoading] = useState(false)
  const [singleStartup, setSingleStartup] = useState(false)
  const [startupId, setStartupId] = useState(null)

  const handleSingleStartup = (id) =>{
    setSingleStartup(true)
    setStartupId(id)

  }

  const fetchMentorRequestObj = async () =>{
    try{
      setLoading(true)
      const res = await getMentorRequestobj()
      setMentorRequestObj(res.data)
      setLoading(false)
    }catch{
      setLoading(false)
      toast('Make request',{theme:"dark"})
    }
  }

  useEffect(()=>{
    fetchMentorRequestObj()
  },[])
  return (
    <>
    {loading ?(
      <div className="fixed inset-0 flex items-center justify-center">
      <div className="spinnerouter">
        <Loading/>
      </div>
    </div>
    ):(
      <>
    <NavBar/>
    {mentorRequestObj ? (
      mentorRequestObj.is_approved ? (
        <UserMentor mentorData = {mentorRequestObj.entrepreneur.mentor}/>
      ) : (
        <div className='mt-20'>
          <h1 className='text-center text-2xl font-bold border'>
            Your mentor request is pending
          </h1>
        </div>
      )
      ):(
        <MentorRequest/>

    )}
    {singleStartup ? (
      <SingleStartupBuild startupId = {startupId}/>
    ):(

    <UserStartupsList onClickStartup={handleSingleStartup}/>
    )}
    <Footer/>
    </>
    )}
    </>
  )
}

export default BuildStrtup