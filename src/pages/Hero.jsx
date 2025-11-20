import React from 'react'
import profileImg from '../assets/passphoto.jpeg'

const Hero = () => (
  <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-center pt-20">
    <div className="relative flex items-center justify-center mb-4">
      {/* Gradient ring around the profile picture */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 blur-md opacity-50"></div>
      <img
        src={profileImg}
        alt="Pavan"
        className="w-60 h-60 rounded-full border-[6px] border-white shadow-xl object-cover z-10"
      />
    </div>
    <h2 className="text-3xl font-light">Hello there,</h2>
    <h1 className="text-5xl font-bold text-purple-500 mt-2">I'm Pavan</h1>
    <h3 className="text-2xl mt-2">Project Engineer- CDAC</h3>
  </section>
)

export default Hero
