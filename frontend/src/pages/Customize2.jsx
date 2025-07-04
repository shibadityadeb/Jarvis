import React, { useContext, useState } from 'react'
import { userDataContext } from '../context/userContext'
import axios from 'axios'
import { IoArrowBack } from "react-icons/io5";


function Customize2() {
    const {userData,backendImage,selectedImage,serverUrl,setUserData}=useContext(userDataContext)
    const [assistantName,setAssistantName]=useState(userData?.assistantName || "")
const[loading,setLoading]=useState(false)
    const handleUpdateAssistant=async()=>{
        try{
            let formData=new FormData()
            formData.append("assistantName",assistantName)
            if (backendImage){
            formData.append("assistantImage",backendImage)

            }else{
                formData.append("imageUrl",selectedImage)
            }
const result= await axios.post(`${serverUrl}/api/user/update`,formData,{withCredentials:true})
console.log(result.data)
setUserData(result.data)
        }
        catch(error){
console.log(error)
        }
    }
  return (
    <div className='w-screen min-h-screen h-screen bg-gradient-to-t from-black to-[#020236] flex justify-center items-center px-4 py-10 relative'>
      <IoArrowBack className='absolute top-8 left-8 text-white text-3xl md:text-4xl drop-shadow-lg' />
      <div className='w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col items-center'>
     

        <h1 className='text-3xl md:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg'>
          Set Your <span className='text-blue-400'>Orion Identity</span>
        </h1>
        <input
          type='text'
          placeholder='e.g. Alexa'
          className='w-full h-[50px] outline-none border border-white bg-transparent text-white placeholder-gray-300 px-5 rounded-full text-base md:text-lg focus:ring-2 focus:ring-blue-400 transition-all duration-200 mb-6'
          required
          onChange={(e)=>setAssistantName(e.target.value)}
          value={assistantName}
        />
        {assistantName && (
          <button className="w-full min-w-[180px] h-[50px] md:h-[60px] mt-2 md:mt-4 cursor-pointer text-black font-semibold bg-white rounded-full text-base md:text-lg shadow-lg hover:bg-blue-100 transition duration-200 "
          disabled={loading}
          onClick={() => {
  handleUpdateAssistant(); 
  ;
}}

          >
            {loading?"Finally create your assistant":"Loading..."}
          </button>
        )}
      </div>
    </div>
  )
}

export default Customize2
