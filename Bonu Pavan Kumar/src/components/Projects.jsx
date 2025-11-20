import React from 'react'
import aiimsImg from '../assets/projects/aiims.png'
import naviosImg from '../assets/projects/navios.png'
import bossmantraImg from '../assets/projects/bossmantra.png'
import mitraImg from '../assets/projects/mitra.png'

// Import images for college projects (add these images to your assets folder)
import libraryImg from '../assets/projects/library.png'
import placementImg from '../assets/projects/placement.png'
import bankImg from '../assets/projects/bank.png'

const projects = [
  {
    title: "AIIMS Navy Project (Armament Inspection)",
    tech: "Joget, Low-Code, CRUD, React Js",
    description: "Developed inspection workflows using Joget LCNC platform for naval arms management. Integrated secure form handling and deployment.",
    role: "Joget Developer @ CDAC India",
    img: aiimsImg
  },
  {
    title: "NAV IOS (BOSS Linux Project)",
    tech: "Linux (BOSS), Bash, Admin",
    description: "Configured and maintained secure Linux systems at Eastern Naval Command. Supported Navy bases like INS Rajali & INS Chennai.",
    role: "NavIos Engineer @ Visakhapatnam ENC",
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
  },
  // College Projects
  {
    title: "Library Management System",
    tech: "Java, Spring, MySQL, HTML5, CSS3, JavaScript, ReactJS",
    description: "A system to organize and manage the library database including book issuance and returns with dates.",
    role: "Project Developer | 10/2022 – 02/2023",
    img: libraryImg
  },
  {
    title: "Student Registration For Placement",
    tech: "Java, Spring, MySQL, JavaScript, HTML5, CSS3, ReactJS",
    description: "Helps students and placement cells manage job details and eligibility to simplify applying for drives.",
    role: "Project Developer | 03/2022 – 08/2022",
    img: placementImg
  },
  {
    title: "Bank Management System",
    tech: "Java, MySQL",
    description: "Allows customers to manage bank accounts, check balances, transfer funds, and perform transactions.",
    role: "Project Developer | 08/2021 – 10/2021",
    img: bankImg
  }
]

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
            className="w-20 h-20 my-4 object-contain rounded-md" 
          />
          <p className="text-sm text-purple-300 mb-1 text-center">🛠 {project.tech}</p>
          <p className="text-gray-300 mb-2 text-center">{project.description}</p>
          <p className="text-sm text-gray-400 text-center">📍 {project.role}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Projects
