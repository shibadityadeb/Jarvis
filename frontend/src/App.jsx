import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Customize from './pages/Customize';
import { userDataContext } from './context/userContext';
import Customize2 from './pages/Customize2';
import Home from './pages/Home';

function App() {
  const {userData}=useContext(userDataContext)
  return (
    <Routes>
      <Route path="/" element={
        userData
          ? (userData.assistantImage && userData.assistantName
              ? <Home />
              : <Navigate to="/customize" />)
          : <Navigate to="/signin" />
      } />
      <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to="/customize" />} />
      <Route path="/signin" element={!userData ? <SignIn /> : <Navigate to="/customize" />}/>
      <Route path="/customize" element={userData ? <Customize /> : <Navigate to="/signup" />} />
      <Route path="/customize2" element={userData ? <Customize2 /> : <Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
