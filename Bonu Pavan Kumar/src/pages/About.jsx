import React from 'react'
import profileImg from '../assets/passphoto.jpeg'

const About = () => (
  <section id="about" className="min-h-screen px-6 py-20 bg-gray-900 flex flex-col md:flex-row items-center gap-10">
    {/* Profile Image */}
    <div className="flex-1 flex justify-center">
      <img 
        src={profileImg} 
        alt="Pavan" 
        className="w-52 h-52 shadow-2xl object-cover border-4 border-purple-500 rounded-lg" // was rounded-full, now square with rounded corners
      />
    </div>

    {/* About Content */}
    <div className="flex-1 max-w-2xl text-left">
      <h2 className="text-2xl font-bold mb-2 text-purple-400">About Me</h2>
      <h3 className="text-2xl font-semibold mb-2">Professional Profile</h3>

      <p className="mb-4 text-lg">
        I'm <strong>BONU PAVAN KUMAR</strong>, a dedicated and skilled <strong>Project Associate</strong> 
        with over <strong>2 years of combined experience</strong> in software development, secure Linux deployments, 
        and technical support for the <strong>Indian Navy</strong> under the Ministry of Electronics and IT (MeitY), deputed from CDAC Chennai.
      </p>

      <p className="mb-4 text-lg">
        I specialize in <strong>secure Linux OS deployment (BOSS NavIOS)</strong>, biometric authentication systems(RFID), 
        Internet Security Operation Centers(SOC/NOC), and developing custom applications on low-code platforms like <strong>Joget</strong>.
        Proficient in <strong>Linux, Spring Boot, ReactJS, MySQL, AWS, Python</strong>, and experienced with <strong>system administration</strong> 
        for mission-critical defense environments.
      </p>

      <p className="mb-4 text-lg">
        Currently, I am expanding my expertise by <strong>learning modern DevOps tools</strong> such as Docker, Jenkins, Kubernetes, and CI/CD workflows 
        to automate deployments and improve system uptime.
      </p>

      <p className="mb-4 text-lg">
        Beyond code, I enjoy <strong>running marathons, swimming, and learning emerging technologies</strong>—always staying curious.
      </p>

      {/* Quick Contact Links */}
      <div className="mt-6">
        <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:pavankumarbonu1@gmail.com" className="text-purple-400 hover:underline">pavankumarbonu1@gmail.com</a></p>
        <p className="text-gray-300"><strong>Phone:</strong> <a href="tel:+917032555487" className="text-purple-400 hover:underline">+91 70325 55487</a></p>
        <p className="text-gray-300"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bonu-pavan-kumar-96081b215/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">linkedin.com/in/bonu-pavan-kumar</a></p>
        <p className="text-gray-300"><strong>GitHub:</strong> <a href="https://github.com/Bonupavankumar" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">github.com/Bonupavankumar</a></p>
      </div>
    </div>
  </section>
)

export default About
