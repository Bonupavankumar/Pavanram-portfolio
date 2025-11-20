import React from 'react'

const skills = [
  { name: "C", icon: "/assets/skills/c.svg" },
  { name: "C++", icon: "/assets/skills/cpp.svg" },
  { name: "Java", icon: "/assets/skills/java.svg" },
  { name: "Python", icon: "/assets/skills/python.svg" },
  { name: "AWS", icon: "/assets/skills/aws.svg" },
  { name: "Linux", icon: "/assets/skills/linux.svg" },
  { name: "MySQL", icon: "/assets/skills/mysql.svg" },
  { name: "React", icon: "/assets/skills/react.svg" },
  { name: "Spring Boot", icon: "/assets/skills/springboot.svg" },
  { name: "HTML", icon: "/assets/skills/html.svg" },
  { name: "CSS", icon: "/assets/skills/css.svg" },
  { name: "Jenkins", icon: "/assets/skills/jenkins.svg" },
  { name: "Docker", icon: "/assets/skills/docker.svg" }
]

const Skills = () => (
  <section id="skills" className="min-h-screen bg-gray-950 py-20 px-8">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-purple-400 mb-2">Skills</h2>
      <p className="text-gray-300">Technologies I've worked with</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
      {skills.map(skill => (
        <div key={skill.name} className="flex flex-col items-center">
          <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
          <span className="text-lg">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
