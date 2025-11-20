import React from 'react';

const Resume = () => (
  <section id="resume" className="min-h-screen bg-gray-950 py-20 px-8 flex flex-col items-center">
    <h2 className="text-4xl font-bold text-purple-400 mb-8 border-b-4 border-purple-500 inline-block">
      Resume
    </h2>

    <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">

      {/* Profile Header */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">BONU PAVAN KUMAR</h3>
        <p className="text-gray-400">Linux & DevO
          ps-focused Full Stack Developer</p>
        <p className="text-gray-300 mt-2">
          📧 <a href="mailto:pavankumarbonu1@gmail.com" className="underline">pavankumarbonu1@gmail.com</a> | 📱 <a href="tel:+917032555487" className="underline">+91 7032555487</a>
        </p>
        <p className="text-gray-300">
          📍 Srikakulam, Andhra Pradesh, India
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="https://www.linkedin.com/in/bonu-pavan-kumar-96081b215/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">LinkedIn</a>
          <a href="https://github.com/Bonupavankumar" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub</a>
        </div>
      </div>

      {/* Profile Summary */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-purple-300">Profile Summary</h4>
        <p className="text-gray-300">
          A Linux & DevOps-focused Full Stack Developer with 2.0 years of experience in software engineering, system administration, 
          and secure defense system deployments for the Indian Navy (via CDAC).
          Skilled in Java, Spring Boot, ReactJS, Linux/BOSS OS, Docker, Jenkins, and AWS, with proven ability to deliver scalable, 
          secure applications and high-availability Linux systems.
        </p>
      </div>

      {/* Education */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-purple-300">Education</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li><strong>B.Tech – Computer Science</strong>, Centurion University of Technology and Management (2019–2023) — CGPA: 9.0</li>
          <li><strong>Intermediate (12th)</strong>, Chakradhar Junior College, Srikakulam (2017–2019) — CGPA: 9.09</li>
          <li><strong>SSC</strong>, Victory School, Pathapatnam (2016–2017) — CGPA: 8.8</li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-purple-300">Technical Skills</h4>
        <p className="text-gray-300">
          <strong>Programming:</strong> Java, Python, C, C++<br/>
          <strong>Web:</strong> HTML5, CSS3, JavaScript, ReactJS, Spring Boot<br/>
          <strong>Databases:</strong> MySQL<br/>
          <strong>OS:</strong> Linux (BOSS OS, RHEL)<br/>
          <strong>DevOps:</strong> Docker, Jenkins, Git<br/>
          <strong>Cloud:</strong> AWS (Certified Cloud Practitioner)<br/>
          <strong>Other:</strong> Joget (Low-Code Platform)
        </p>
      </div>

      {/* Certifications */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-purple-300">Certifications</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>AWS Certified Cloud Practitioner</li>
          <li>Joget App Designer Course</li>
        </ul>
      </div>

      {/* Professional Experience */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-purple-300">Professional Experience</h4>
        <h5 className="font-semibold text-lg text-white">Centre for Development of Advanced Computing (CDAC) — Project Associate</h5>
        <p className="text-gray-400 text-sm mb-2">09/2023 – Present | Chennai & Eastern Naval Command, Visakhapatnam</p>

        {/* Projects */}
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>AIIMS Navy Project — Armament Inspection Information Management System</strong><br/>
            Designed & deployed CRUD-enabled digital inspection forms with Joget LCNC Platform.
            Assisted in integration & secure deployment in naval environments.
          </li>
          <li>
            <strong>NAV IOS (BOSS Linux OS Deployment)</strong><br/>
            Installed, configured & maintained NAV IOS systems for Eastern Naval Command. Applied security
            hardening & system updates, documented SOPs & troubleshooting.
          </li>
          <li>
            <strong>BOSS Mantra — Armed Forces Secure Access Card (AFSAC)</strong><br/>
            Implemented RFID-based secure authentication for naval personnel. Integrated Mantra biometric devices with BOSS OS custom repositories.
          </li>
          <li>
            <strong>MITRA — Maritime Integrated Telecommunication and Remote Access</strong><br/>
            Developed secure real-time communication (chat, voice, video) solutions for naval ships using Spring Boot, Tomcat & RHEL.
          </li>
        </ul>
      </div>

      {/* Other Projects */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-purple-300">Other Projects</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Library Management System – Java, Spring, MySQL, ReactJS</li>
          <li>Student Registration for Placement – Java + Spring + MySQL + ReactJS</li>
          <li>Bank Management System – Java, MySQL</li>
          <li>Personal Portfolio Website – HTML, CSS, JavaScript</li>
        </ul>
      </div>

      {/* Interests */}
      <div>
        <h4 className="text-xl font-bold mb-2 text-purple-300">Interests & Hobbies</h4>
        <p className="text-gray-300">Linux & Open Source, Fitness, Running, Swimming, Machine Learning, Cricket, Learning new tech</p>
      </div>

      {/* Download Button */}
      <div className="text-center mt-8">
        <a
          href="/assets/Pavan_Resume.pdf"
          className="bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600 font-semibold transition"
          download
        >
          Download PDF
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
