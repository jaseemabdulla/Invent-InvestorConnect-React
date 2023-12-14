import React from 'react'

function UserMentor(props) {
  const mentor = props.mentorData
  return (
    <>
    <div className="text-center mt-16">
    <h1 className='text-3xl font-bold mb-4'>Your Mentor</h1>
            <img
              src={mentor.profile_picture}
              alt=""
              className="rounded-3xl w-[200px] h-[200px] mx-auto mb-4"
            />
            <h1 className="text-lg font-bold uppercase">{mentor.user.first_name}</h1>
            <p>{mentor.user.email}</p>
          </div>
    </>
  )
}

export default UserMentor