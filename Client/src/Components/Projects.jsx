import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import BannerImg from '../assets/spotify-logo.png'
import safarNama from '../assets/safarNama.png'
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
          main="Spotify UI Clone is a static frontend project created with HTML and CSS, replicating the layout and design of Spotify’s user interface. It focuses on a clean structure, modern styling, and hover effects, giving a real-world music app feel while improving my skills in HTML semantics and CSS design."
        />

        <ProjectCard
          title="सफ़रNama - Hotel & Resort Booking Platform"
          image={safarNama}
          main="SafarNama is a MERN stack project where admins can list & manage hotels/resorts and users can search and book stays city-wise.
                Features include JWT authentication, Cloudinary image uploads, Cron-based automation, booking confirmation emails (Nodemailer), and date handling with Moment.js"
        />

        <ProjectCard
          title="portfolio website"
          image={Image}
          main="Portfolio Website is a responsive project built using React.js and TailwindCSS, designed to showcase my skills and projects in a modern layout. It also features a contact form powered by Nodemailer, allowing visitors to connect with me directly"
        />
      </div>
    </div>
  )
}

export default Projects
