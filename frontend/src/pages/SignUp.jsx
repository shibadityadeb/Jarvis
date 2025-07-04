import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import bg from '../assets/authBg.png';
import { userDataContext } from '../context/userContext';
import axios from 'axios';

function SignUp() {
  const { serverUrl,userData,setUserData } = useContext(userDataContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false)
const [err,setErr]=useState("")
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true)
    try {
      let result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { name, email, password },
        { withCredentials: true }
      );
      setUserData(result.data)
      setLoading(false)
      navigate("/customize")
    } catch (error) {
      console.log(error);
      setUserData(null)
      if (error.response && error.response.data && error.response.data.message) {
        setErr(error.response.data.message);
      } else {
        setErr("An unexpected error occurred.");
      }
      setLoading(false)
    }
  };

  return (
    <div
      className='w-full h-[100vh] bg-cover flex justify-center items-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className='w-[90%] max-w-[500px] h-auto bg-[#00000080] backdrop-blur-lg shadow-xl shadow-black rounded-2xl flex flex-col items-center justify-center gap-6 px-6 py-10'
        onSubmit={handleSignUp}
      >
        <h1 className='text-white text-3xl font-semibold mb-6 text-center'>
          Register to <span className='text-blue-400'>ORION</span>
        </h1>

        {err && err.length > 0 && (
          <p className='text-red-500 text-center mb-2'>{err}</p>
        )}

        <input
          type='text'
          placeholder='Enter your Name'
          className='w-full h-[55px] outline-none border border-white bg-transparent text-white placeholder-gray-300 px-5 rounded-full text-lg focus:ring-2 focus:ring-blue-400 transition-all duration-200'
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type='email'
          placeholder='Email'
          className='w-full h-[55px] outline-none border border-white bg-transparent text-white placeholder-gray-300 px-5 rounded-full text-lg focus:ring-2 focus:ring-blue-400 transition-all duration-200'
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <div className='w-full h-[55px] border border-white bg-transparent text-white rounded-full text-lg flex items-center px-5 focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200 relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className='w-full h-full bg-transparent outline-none text-white placeholder-gray-300'
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {showPassword ? (
            <IoEyeOff
              className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-white cursor-pointer'
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaRegEye
              className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-white cursor-pointer'
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px]' disabled={loading}>
          {loading?"Loading...":"Sign Up"}
        </button>

        <p className='text-white text-[18px] cursor-pointer' onClick={() => navigate('/signin')}>
          Already have an account? <span className='text-blue-400 underline'>Sign In</span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
