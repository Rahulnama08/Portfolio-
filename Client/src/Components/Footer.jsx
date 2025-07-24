import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center sticky bottom-0 w-screen ">
        <div>
            <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To reach out!</h3>
        </div>
        <ul className="text-sm md:text-xl">
            <li>
                <a href="mailto:rahulnama0807@gmail.com" className="flex items-center gap-2 text-lg text-white hover:text-black transition">
                <MdOutlineEmail size={20}/>
                myemail@gmail.com
                </a>   
            </li>
            <li>
        <a href="https://www.linkedin.com/in/rahul-nama-3ab311335/" className="flex items-center gap-2 text-lg text-white hover:text-black transition">
          <CiLinkedin size={20} />
          LinkedIn Profile
        </a>
      </li>
      <li>
        <a href="https://github.com/Rahulnama08" className="flex items-center gap-2 text-lg text-white hover:text-black transition">
          <FaGithub className="text-2xl" />
          GitHub Profile
        </a>
      </li>
        </ul>
    </footer>
  )
}

export default Footer
