import React from 'react';
import Particles from '@tsparticles/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const particlesOptions = {
  background: { color: "#0a012b" },
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true, area: 900 } },
    color: { value: "#fff" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 2, random: true },
    links: {
      enable: true,
      distance: 130,
      color: "#ccc",
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out",
      attract: { enable: false },
    }
  },
  detectRetina: true
};

function App() {
  return (
    <div className="relative bg-gray-900 text-white font-sans min-h-screen overflow-x-hidden">
      {/* Animated starry constellation background */}
      <Particles
        id="tsparticles"
        className="fixed inset-0 w-full h-full -z-10"
        options={particlesOptions}
      />

      {/* Your portfolio content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
