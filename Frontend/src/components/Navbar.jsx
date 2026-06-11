
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
const Navbar = () => {
const [authUser,setAuthUser]=useAuth();
    
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="course">Course</a></li>
      <li><a href="contact">Contact</a></li>
      <li><a href="about">About</a></li>
    </>
  );
    
  return (
    <div
      className={`sticky top-0 z-50 bg-base-100 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 font-semibold">
        <div className="navbar">
          
          {/* LEFT */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                {navItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Bookstore</a>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 font-semibold">
              {navItems}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end space-x-3">
            
            {/* Search */}
            <div className="hidden md:block">
              <label className="input input-bordered flex items-center gap-2 mb-0 h-9">
                <input type="search" className="grow" placeholder="Search" />
              </label>
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="dark" />

              {/* Sun */}
              <svg className="swap-off h-8 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

              {/* Moon */}
              <svg className="swap-on h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36 10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
              </svg>
            </label>
             
            {/* Login */}
            {
              authUser ? (
                <Logout />
              ) : (
                <>
                  <a className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 cursor-pointer" onClick={() => document.getElementById("my_modal_1").showModal()}>
                    Login
                  </a>
                  <Login />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;