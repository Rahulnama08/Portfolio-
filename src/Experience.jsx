import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaSpotify } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";

const experiences = [
  {
    company: "REGex Software Services",
    role: "Full Stack Intern",
    duration: "Oct 2024 - Present",
    technologies: [
      { icon: FaHtml5, name: "HTML5", color: "#E34F26" }, 
      { icon: FaCss3, name: "CSS3", color: "#1572B6" }, 
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" }, 
      { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
      { icon: FaReact, name: "React", color: "#61DAFB" }, 
      { icon: FaNodeJs, name: "Node.js", color: "#8CC84B" }, 
      { icon: SiExpress, name: "Express.js", color: "#FFFFFF" }, 
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" }, 
      { icon: SiCplusplus, name: "C++", color: "#00599C" }, 
    ],
  },
  {
    company: "Freelance Projects",
    role: "Frontend Developer",
    duration: "2024 - 2025",
    technologies: [
      { icon: FaFigma, name: "Figma", color: "#F24E1E" },
      { icon: FaSpotify, name: "Spotify", color: "#1DB954" },
    ],
  },
];

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 h-screen">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {experiences.flatMap((exp) => exp.technologies).map((tech, i) => (
            <span key={i} className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <tech.icon size={50} style={{ color: tech.color }} />
            </span>
          ))}
        </div>

        {}
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
              <h2 className="text-xl text-white font-semibold">{exp.role}</h2>
              <p className="text-gray-400">{exp.company} • {exp.duration}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                {exp.technologies.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <tech.icon size={40} style={{ color: tech.color }} /> {}
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> 
      </div>       
    </div>
  );
};

export default Experience;
