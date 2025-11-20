import React from 'react'
import aiimsImg from '../assets/projects/aiims.png'
import naviosImg from '../assets/projects/navios.png'
import bossmantraImg from '../assets/projects/bossmantra.png'
import mitraImg from '../assets/projects/mitra.png'

const projects = [
  {
    title: "AIIMS Navy Project (Armament Inspection)",
    tech: "Joget, Low-Code, CRUD",
    description: "Developed inspection workflows using Joget LCNC platform for naval arms management. Integrated secure form handling and deployment.",
    role: "Joget Developer @ CDAC India",
    img: aiimsImg
  },
  {
    title: "NAV IOS (BOSS Linux Project)",
    tech: "Linux (BOSS), Bash, Admin",
    description: "Configured and maintained secure Linux systems at Eastern Naval Command. Supported Navy bases like INS Rajali & INS Chennai.",
    role: "System Engineer @ Visakhapatnam ENC",
    img: naviosImg
  },
  {
    title: "BOSS Mantra (AFSAC Biometric Access)",
    tech: "Linux, Mantra Device, RFID",
    description: "Implemented biometric authentication with Mantra devices. Integrated RFID for secure access to military zones under AFSAC.",
    role: "Biometric Configurator @ CDAC + Tech Mahindra",
    img: bossmantraImg
  },
  {
    title: "MITRA – Maritime Communication",
    tech: "Spring Boot, Tomcat, RHEL",
    description: "Built secure real-time comms (chat, video, voice) between naval ships using Java backend & Linux stack. Deployed in field conditions.",
    role: "Backend Developer & Linux Configurator",
    img: mitraImg
  }
];

const Projects = () => (
  <section id="projects" className="bg-gray-900 py-20 px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-purple-400 mb-4">Projects</h2>
      <p className="text-gray-300">Real-time deployments & contributions</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <div key={i} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition-shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-white text-center">{project.title}</h3>
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-70 h-70 my-4 object-contain rounded-md" 
          />
          <p className="text-sm text-purple-300 mb-1 text-center">🛠 {project.tech}</p>
          <p className="text-gray-300 mb-2 text-center">{project.description}</p>
          <p className="text-sm text-gray-400 text-center">📍 {project.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
