import React from 'react'

function FirstPageHeroOne() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a]">GROWING WITH INVENT.</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">THE NATION'S FIRST ONLINE</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">ANGEL INVESTOR COMMUNITY</p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">The richest people in the world look for and build networks; everyone else looks for work.</p>
        <p className="md:text-2xl text-xl font-bold text-gray-500">~ Robert Kiyosaki</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium text-black mx-auto py-2 my-6">Get started</button>
      </div>
    </div>
  )
}

export default FirstPageHeroOne