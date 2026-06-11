import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contacts from './contacts/Contacts'
import Abouts from './Abouts/Abouts';
import BuyCourse from "./components/BuyCourse";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import { Routes, Route,Navigate  } from "react-router-dom";
const App = () => {
 const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
 
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={  authUser ? < Courses /> : <Navigate to="/signup" />}/>
       <Route path="/buy" element={<BuyCourse />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path='about'element={<Abouts/>}/>
      
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
