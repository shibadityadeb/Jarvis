import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Signin from './pages/SignIn';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
