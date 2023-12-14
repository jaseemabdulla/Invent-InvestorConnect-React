import React from 'react'
import { makeMentorRequestAxios } from '../../api/userApi'
import { toast } from 'react-toastify'

function MentorRequest() {

    const handleRequest = async()=>{
        try{
            const res = await makeMentorRequestAxios()
            toast.success('Requested Successfully',{theme:"dark"})
        }catch(error){
            toast.error('you have already a Request',{theme:"dark"})
        }
    }
  return (
    <>
    <div className='mt-10 flex flex-col items-center'>
        <h1 className='text-3xl font-bold'>Make a Request for Mentor</h1>
        <button className='btn-gradiant mt-5' onClick={handleRequest}>Request</button>
    </div>
    </>
  )
}

export default MentorRequest