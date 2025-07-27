import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-6 py-4 md:px-20 mb-6 relative">
      {/* Logo */}
      <span className="text-xl font-bold tracking-wide">
        <Link to="/">Portfolio</Link>
      </span>

      {/* Hamburger Icon (mobile only) */}
      <div className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-transparent text-center md:flex gap-6 font-semibold rounded-b-xl md:rounded-none transition-all duration-300 ease-in-out
        ${menuOpen ? 'block' : 'hidden md:flex'}`}
      >
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <li className="p-2 md:p-0">About</li>
        </Link>

        <Link to="/experience" onClick={() => setMenuOpen(false)}>
          <li className="p-2 md:p-0">Experience</li>
        </Link>

        <Link to="/projects" onClick={() => setMenuOpen(false)}>
          <li className="p-2 md:p-0">Project</li>
        </Link>

        <Link to="/achievement" onClick={() => setMenuOpen(false)}>
          <li className="p-2 md:p-0">Achievements</li>
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <li className="p-2 md:p-0">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
