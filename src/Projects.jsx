import React from 'react'
import ProjectCard from './ProjectCard'
import BannerImg from '../src/assets/spotify-logo.jpg'
import SideBar from '../src/assets/side-bar menu.png'
import Image from '../src/assets/portfolio.png'


const Projects = () => {
  return (
    <div className="p-10 md:p-24 text-white h-screen">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-evenly">
        <ProjectCard title="Spotify Clone" main="This is a Spotify UI Clone built using HTML & CSS, designed to replicate Spotify’s modern and sleek interface. The project focuses on responsive design, smooth animations, and an intuitive user experience." image={BannerImg} />
        <ProjectCard title="Sidebar Navigation Menu" main="A responsive sidebar with smooth animations (HTML, CSS, Font Awesome)" image={SideBar} />
        <ProjectCard title="Portfolio" main="A personal portfolio website built using React.js and Tailwind CSS to showcase my skills, projects, and experience as a MERN Stack Developer & Competitive Programmer. The website features a modern, responsive design with smooth animations and interactive elements." image={Image} />
      </div>
    </div>
  )
}

export default Projects
