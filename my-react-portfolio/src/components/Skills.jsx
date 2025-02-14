// components/Skills.js
import React from 'react';
import { FaBehance, FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp,FaGlobe } from 'react-icons/fa';


const Skills = () => {
  const skills = [
    "C#",
    "JavaScript(ES6)",
    "React",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap CSS",
  ];

  const Backend = [
    "Node.js",
    "PHP",
    "MYSQL5",
"Website Server Management",
    "AWS",
    "Azure",
    "DBeaver Community",
  ];

  return (
    <section className="py-12 overflow-hidden ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Skills</h2>
      <div className="relative w-full overflow-hidden animate-scroll">
        {/* First Row */}
        <div className="flex justify-center space-x-4 animate-scroll">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-full px-6 py-2 text-sm font-semibold text-gray-700 whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="flex justify-center space-x-4 animate-scroll mt-4">
          {Backend.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-full px-6 py-2 text-sm font-semibold text-gray-700 whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;