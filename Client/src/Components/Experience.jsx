import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
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
];

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-24 min-h-screen">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Experience</h1>

      <div className="flex flex-col md:flex-row gap-10 flex-wrap items-start justify-between">
        
        {/* Left Icons Section */}
        <div className="flex flex-wrap gap-6 justify-center md:w-2/5">
          {experiences.flatMap((exp) => exp.technologies).map((tech, i) => (
            <span key={i} className="p-3 bg-zinc-950 flex items-center rounded-2xl">
              <tech.icon size={50} style={{ color: tech.color }} />
            </span>
          ))}
        </div>

        {/* Right Experience Section */}
        <div className="w-full md:w-1/2">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
              <h2 className="text-xl text-white font-semibold">{exp.role}</h2>
              <p className="text-gray-400">{exp.company} • {exp.duration}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                {exp.technologies.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center w-[80px]">
                    <tech.icon size={40} style={{ color: tech.color }} />
                    <span className="text-gray-300 text-sm text-center">{tech.name}</span>
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
