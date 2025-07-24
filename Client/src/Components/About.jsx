import React from 'react'
import { IoArrowForward } from "react-icons/io5"
import Lottie from 'lottie-react'
import about from '../assets/about.json'

const About = () => {
  return (
    <div className="text-white bg-black bg-opacity-30 shadow-xl rounded-lg px-6 py-10 md:px-12 md:py-16 mx-2 md:mx-20 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center md:text-left">About</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Animation */}
        <Lottie animationData={about} className="w-full md:w-[450px]" loop={true} />

        {/* Description */}
        <ul className="flex flex-col gap-6 w-full">
          {/* Frontend */}
          <li className="flex gap-3">
            <IoArrowForward size={30} className="mt-1 shrink-0" />
            <div className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
              <p className="text-sm md:text-base mt-2 font-mono leading-relaxed">
                I create modern, responsive, and user-friendly interfaces using React.js, HTML, CSS, and JavaScript. My focus is on clean design, seamless user experience, and mobile-first development.
              </p>
            </div>
          </li>

          {/* Backend */}
          <li className="flex gap-3">
            <IoArrowForward size={30} className="mt-1 shrink-0" />
            <div className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
              <p className="text-sm md:text-base mt-2 font-mono leading-relaxed">
                I build scalable and efficient server-side applications using Node.js and Express.js, with RESTful APIs, authentication, and clean backend logic that supports seamless frontend integration.
              </p>
            </div>
          </li>

          {/* Database */}
          <li className="flex gap-3">
            <IoArrowForward size={30} className="mt-1 shrink-0" />
            <div className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold">Database Developer</h1>
              <p className="text-sm md:text-base mt-2 font-mono leading-relaxed">
                I design and manage databases using MongoDB and Mongoose, ensuring data integrity, security, and performance with well-structured schema and optimized queries.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
