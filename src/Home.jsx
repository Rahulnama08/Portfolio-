import React from 'react'
import avatarImg from ".../../assets/7358602-removebg-preview.png"
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  function gotoContact(){
    navigate("/contact")
  }
  return (
   <div>
     <div  className='text-white flex w-full justify-between items-start p-10 md:p-20 h-screen'>
      <div className='md:w-2/4 md:pt-10'>
      <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
      Hello I' am Rahul Nama
      </h1>
      <p className="text-sm md:text-2xl tracking-tighter mt-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button onClick={gotoContact} className="mt-5 md:m-10 text-white py-20 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
      </div>
      <div> <img className="" src={avatarImg} alt=''></img></div>
    </div>

    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    
   </div>
  )
}

export default Home
