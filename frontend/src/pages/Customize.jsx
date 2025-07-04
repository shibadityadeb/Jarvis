import React,{useContext, useRef} from 'react'
import Card from '../components/Card'
import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import { RiImageAddLine } from "react-icons/ri";
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'


function Customize() {
  const {frontendImage,setFrontendImage,selectedImage,setSelectedImage, setBackendImage} = useContext(userDataContext)
  const inputImage=useRef()
const navigate=useNavigate()
  const handleImage=(e)=>{
  const file=e.target.files[0]
  setBackendImage(file)
  setFrontendImage(URL.createObjectURL(file))  
  }
  return (
    <div className='w-screen min-h-screen h-screen bg-gradient-to-t from-black to-[#020236] flex justify-center items-center px-4 py-10'>
      <h1 className='text-4xl md:text-5xl font-bold text-white text-center mb-10 drop-shadow-lg'>
        Choose Your <span className='text-blue-400'>Orion Avatar</span>
      </h1>
      <div className='w-full max-w-[1200px] mx-auto flex flex-wrap justify-center items-center gap-6 h-full px-2 sm:px-4 md:px-8 pb-44'>
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <div className={`w-[250px] h-[320px] bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center overflow-hidden transition duration-300 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer group ${selectedImage===frontendImage && frontendImage ? 'border-4 border-white shadow-2xl shadow-blue-950' : ''}`}
          onClick={() => {
            inputImage.current.click();
            if (frontendImage) setSelectedImage(frontendImage);
          }}>
          {!frontendImage && <RiImageAddLine className='text-7xl text-white/70 group-hover:text-blue-400 transition duration-300' />}
          {frontendImage && <img src={frontendImage} className='h-full object-cover w-full rounded-2xl transition duration-300'/>}
        </div>
        <input type='file' accept='image/*' ref={inputImage} hidden onChange={e => { handleImage(e); setTimeout(() => setSelectedImage(URL.createObjectURL(e.target.files[0])), 0); }} />
      </div>
      {selectedImage && <button className="min-w-[150px] h-[60px] mt-[30px] cursor-pointer text-black font-semibold bg-white rounded-full text-[19px]" onClick={()=>navigate("/customize2")}>Next</button>
}
    </div>
  )
}

export default Customize
