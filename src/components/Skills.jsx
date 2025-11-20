// src/components/Skills.jsx
import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Linux / BOSS OS</li>
        <li>React.js / Tailwind CSS</li>
        <li>DevOps (Docker, Jenkins)</li>
        <li>Java, Python, MySQL</li>
        <li>AWS Certified Cloud Practitioner</li>
      </ul>
    </section>
  );
}
