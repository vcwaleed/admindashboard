import React from 'react'

function HellowCard() {
  return (
    <div className=" px-3 mx-3 bg-gradient-to-r from-blue-400 to-blue-700 text-white   p-4 rounded-lg flex-col  w-[34rem]">
    <div>
      <h2 className="text-2xl font-bold">Welcome to PHOTOHUB </h2>
      <p>Here's what's happening in your account today</p>
    </div>


    <div className='flex flex-row justify-between'>
      <button className=" mx-6 my-10 bg-transparent border-white  border  text-white px-4 py-2 rounded-md   hover:text-black hover:bg-white">
        What's New!
      </button>
      <img src="/cartoon.svg" alt="Cartoon"  width="130" height="130" /> 


    </div>


  </div>
  )
}

export default HellowCard
