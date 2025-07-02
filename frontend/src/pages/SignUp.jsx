import React from 'react'
import { FaRegEye } from "react-icons/fa";

import bg from "../assets/authBg.png"
function signUp() {
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage:`url(${bg})`}}>
     <form className='w-[90%] max-w-[500px] h-auto bg-[#00000080] backdrop-blur-lg shadow-xl shadow-black rounded-2xl flex flex-col items-center justify-center gap-6 px-6 py-10'>
  <h1 className='text-white text-3xl font-semibold mb-6 text-center'>
    Register to <span className='text-blue-400'>ORION</span>
  </h1>

  <input 
    type="text" 
    placeholder='Enter your Name' 
    className='w-full h-[55px] outline-none border border-white bg-transparent text-white placeholder-gray-300 px-5 rounded-full text-lg focus:ring-2 focus:ring-blue-400 transition-all duration-200' 
  />

  <input 
    type="email" 
    placeholder='Email' 
    className='w-full h-[55px] outline-none border border-white bg-transparent text-white placeholder-gray-300 px-5 rounded-full text-lg focus:ring-2 focus:ring-blue-400 transition-all duration-200' 
  />

  <div className='w-full h-[55px] border border-white bg-transparent text-white rounded-full text-lg flex items-center px-5 focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200'>
    <input 
      type='password' 
      placeholder='Password' 
      className='w-full h-full bg-transparent outline-none text-white placeholder-gray-300' 
    />
    <FaRegEye className='absolute '/>

  </div>

  
</form>

    </div>
  )
}

export default signUp
