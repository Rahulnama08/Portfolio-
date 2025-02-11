import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 mb-11'>
       <span className='text-xl font-bold tracking-wide'> <Link to="/">Portfolio</Link></span>
         <ul className='mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6'>
          <Link to="/about">  <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li></Link>
           <Link to="/experience"> <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li></Link>
           <Link to='/projects'> <li className='text-md transition-all duration-300 p-1 md:p-0'>Project</li></Link>
           <Link to='/contact'> <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li></Link>
         </ul>
    </nav>
  )
}

export default Navbar
