import React from 'react'
import investor from '../../assets/investor.jpg'

function FirstPageInvester() {
  return (
    <div className='bg-white py-16 px-4 w-full'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='mx-auto w-[500px] my-4' src={investor} alt="/" />
           <div className='flux flex-col justify-center'> 
            <p className='font-bold text-[#00df9a]'>Jaseem pk</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Python Developer</h1>
            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="bg-black w-[200px] rounded-md font-medium text-[#00df9a] mx-auto py-2 my-6">Get started</button>
           </div>
        </div>

    </div>
  )
}

export default FirstPageInvester