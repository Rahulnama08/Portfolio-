import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import BannerImg from '../assets/spotify-logo.jpg'
import SideBar from '../assets/side-bar menu.png'
import Image from '../assets/portfolio.png'

const Projects = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 py-10 text-white min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">Projects</h1>

      {/* Responsive grid layout */}
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <ProjectCard
          title="Spotify UI Clone"
          image={BannerImg}
          main="A clean and responsive clone of Spotify’s web interface using HTML and CSS. Focused on layout structuring, modern design, and smooth user interactions."
        />

        <ProjectCard
          title="Sidebar Navigation Menu"
          image={SideBar}
          main="Responsive sidebar navigation with smooth animations and icon integration, built using HTML, CSS, and Font Awesome. Optimized for all screen sizes."
        />

        <ProjectCard
          title="Personal Portfolio"
          image={Image}
          main="My portfolio website built with React.js and Tailwind CSS. Showcases my projects, skills, and experience with a modern, interactive, and responsive UI."
        />
      </div>
    </div>
  )
}

export default Projects
