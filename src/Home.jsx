import React from 'react';
import Lottie from "lottie-react";
import devloper from "./assets/developer.json"
// import avatarImg from ".../../assets/7358602-removebg-preview.png"
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Achievement from './Achievement';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate("/contact");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20 h-screen">
        {/* Left Text Section */}
        <div className="md:w-2/4 md:pt-10">
          <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
            Hello, I'm Rahul Nama
          </h1>
          <p className="text-sm md:text-2xl tracking-tighter mt-8">
            I am a passionate and dedicated Full Stack Developer with a strong foundation in web development and problem-solving.
            I work on both frontend and backend technologies, building efficient and scalable web applications.
            Additionally, I enhance my problem-solving skills through LeetCode, which deepens my understanding of data structures and algorithms.
          </p>
          <button
            onClick={gotoContact}
            className="mt-5 md:mt-10 text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Contact Me
          </button>
        </div>

        {/* Right Animation Section */}
        <div className="bg-transparent">
          <Lottie animationData={devloper} className="w-96 md:w-[500px] mb-6" loop={true} />
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Experience />
      <Projects />
      <Achievement />
      <Contact />
    </div>
  );
};

export default Home;
