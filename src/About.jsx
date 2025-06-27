import React from 'react'
import AboutImg from ".../../assets/7358653-removebg-preview.png"
import {IoArrowForward} from "react-icons/io5"
import Lottie from 'lottie-react'
import about from './assets/about.json'

const About = () => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 h-screen">
     <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            {/* <img className="md:h-80" src={AboutImg} alt=''></img> */}
            <Lottie animationData={about} className="w-80 md:w-[450px] mb-6" loop={true} />
            <ul>
                <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1"/>
                <span className="w-96">
                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                    <p className="text-sm md:text-md leading-tight mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </span>
                </div>

                <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1"/>
                <span className="w-96">
                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                    <p className="text-sm md:text-md leading-tight mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </span>
                </div>

                <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1"/>
                <span className="w-96">
                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database Developer</h1>
                    <p className="text-sm md:text-md leading-tight mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </span>
                </div>
            </ul>
        </div>
     </div> 
    </div>
  )
}

export default About
