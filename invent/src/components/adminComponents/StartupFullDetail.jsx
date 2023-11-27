import React from 'react'

function StartupFullDetail() {
  return (
    <>
    <div className="flex flex-col items-center p-10">
        <div className="mt-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Entrepreneur Details</h1>
            <h1 className="text-2xl font-bold mt-5">name : jaseem</h1>
          </div>
          
        </div>
        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold">Startup Detail</h1>
          <h1 className="text-2xl font-bold mt-5">hygi</h1>
          <p className="text-2xl font-bold mt-5">dgdfhfhhhgg</p>
        </div>
        <div className="mt-10">
          <video width="400" height="auto" controls>
            <source
              src="https://startupgear.s3.amazonaws.com/startup_videos/Recording_2023-09-14_150157_yTZ60xS.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ5PXARW7JOB4S6PF%20%2F20231127%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20231127T144709Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=95deb9932c01e0fca83db733a1eb6232a3d15ef193b5d17fc2b29691eb1e199c"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex gap-10">
          <button className="btn-gradiant">Approve</button>
          <button className="btn-gradiant">Reject</button>
        </div>
      </div>
    </>
  )
}

export default StartupFullDetail