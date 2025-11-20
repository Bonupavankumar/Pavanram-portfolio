import React from 'react'
import { Link } from 'react-scroll'
import profileImg from '../assets/passphoto.jpeg'

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 fixed w-full z-50">
    <div className="flex items-center gap-2">
      <img src={profileImg} alt="Pavan" className="w-10 h-10 rounded-full" />
      <span className="text-xl font-bold">Pavan</span>
    </div>
    <ul className="flex gap-6 text-white font-medium">
      <li>
        <Link to="home" smooth duration={500} offset={-60} className="cursor-pointer">Home</Link>
      </li>
      <li>
        <Link to="about" smooth duration={500} offset={-60} className="cursor-pointer">About</Link>
      </li>
      <li>
        <Link to="skills" smooth duration={500} offset={-60} className="cursor-pointer">Skills</Link>
      </li>
      <li>
        <Link to="projects" smooth duration={500} offset={-60} className="cursor-pointer">Projects</Link>
      </li>
      <li>
        <Link to="resume" smooth duration={500} offset={-60} className="cursor-pointer">Resume</Link>
      </li>
      <li>
        <Link to="contact" smooth duration={500} offset={-60} className="cursor-pointer">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
