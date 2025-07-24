import React from 'react';
import Lottie from "lottie-react";
import devloper from "../assets/developer.json";
import About from '../Components/About';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Achievement from '../Components/Achievement';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate("/contact");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20 min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-3xl md:text-6xl font-bold leading-snug tracking-tight text-center md:text-left">
            Hello, I'm Rahul Nama
          </h1>
          <p className="text-sm md:text-lg font-mono mt-6 text-justify md:text-left">
            I am a passionate and dedicated Full Stack Developer with hands-on experience in building responsive and scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). Currently, I am working as a Full Stack Intern at REGex Software Services, where I contribute to real-world projects and collaborate with experienced developers.
            <br /><br />
            I have also solved over 100 Data Structures and Algorithms problems on platforms like LeetCode and CodeChef, which has helped me improve my problem-solving skills and logical thinking. I enjoy writing clean, efficient code and continuously learning new technologies to grow as a developer.
            <br /><br />
            I am always eager to take on new challenges, work in team environments, and contribute to meaningful tech solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={gotoContact}
              className="mt-6 md:mt-10 text-white text-sm md:text-lg py-2 px-6 hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie animationData={devloper} className="w-72 sm:w-80 md:w-[500px]" loop={true} />
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
