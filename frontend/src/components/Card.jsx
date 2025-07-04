import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'

function Card({image}) {
      const {serverUrl,userData,setUserData,backendImage,setBackendImage,frontendImage,setFrontendImage,selectedImage,setSelectedImage}=useContext(userDataContext)

  return (
   <div className={`w-[250px] h-[320px] bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center overflow-hidden transition duration-300 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer ${selectedImage==image?'border-4 border-white shadow-2xl shadow-blue-950':''}`} onClick={()=>
   {setSelectedImage(image)
    setBackendImage(null)
    setFrontendImage(null)
   }}>
      <img src={image} alt='card' className='w-full h-full object-cover rounded-2xl transition duration-300' />
    </div>
  )
}

export default Card
