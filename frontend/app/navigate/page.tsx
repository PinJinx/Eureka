"use client"
import { LogIn } from "lucide-react";
import React from "react";
import { useState } from "react";


export default function LoginPage() {
  const[login,setLogin]=useState(false);
  const[signin,setSignin]=useState(true);

  function handlesign(){
    setLogin(false);
    setSignin(true);
  }

  function handlelogin(){
    setLogin(true);
    setSignin(false);
  }

  return (
    <div className="flex h-screen w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900
 text-white">
      
      <div className="flex flex-col justify-center items-center md:w-1/2 p-8">
    <div className="w-full max-w-sm">
      {signin && (
        <h1 className="text-4xl font-bold mb-7 text-left ">Welcome</h1>)}
      {login && (<h1 className="text-4xl font-bold mb-7 text-left ">Welcome back</h1>)}
        {signin && (
        <>
        <label className="text-md font-semibold m-1">Email</label>
        <input
        type="email"
        placeholder="Enter email"
        className="w-full p-3 mb-4 rounded bg-black text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
        />
        </>)

        }
        <label className="text-md font-semibold m-1">Username</label>
        <input
        type="username"
        placeholder="Enter username"
        className="w-full p-3 mb-4 rounded bg-black text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
        />
        <label className="text-md font-semibold m-1">Password</label>
        <input
        type="password"
        placeholder="Enter password"
        className="w-full p-3 mb-6 rounded bg-black text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
        />
        {signin && (
        <button className="w-full p-3 mb-6 bg-[#2563eb] rounded font-bold hover:bg-gray-50 hover:text-black transition">
          
        Sign Up
        </button>)}
        {login && (
        <button className="w-full p-3 mb-6 bg-[#2563eb] rounded font-bold hover:bg-gray-50 hover:text-black transition">
          
        Login
        </button>)}
        {login && (
        <p className="text-center font-semibold text-gray-400 mt-4">
        Don't have an account? <button  className="text-blue-400" onClick={handlesign}>Sign up</button>
        </p>)}
        {signin && (
        <p className="text-center  font-semibold text-gray-400 mt-4">
        Already have an account?? <button  className="text-blue-400" onClick={handlelogin}>Log In</button>
        </p>)}
    </div>
    </div>

      
      
      <div className="hidden md:flex w-1/2 justify-center items-center bg-black">
        <div className="text-center">
          <img src="/music-stage.png" alt="Eureka" className="w-full max-w-md" />
          <p className="text-lg font-semibold mt-4">Add an gif slideshow here on top like in bunkmate we should have Eureka ,idk much</p>
        </div>
      </div>
    </div>
  );
}