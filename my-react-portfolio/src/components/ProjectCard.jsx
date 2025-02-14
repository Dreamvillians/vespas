// components/ProjectCard.js
import React from 'react';
import { FaBehance, FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp,FaGlobe } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, websiteLink, sourceLink,imgUrl }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 bg-white">
<img src={imgUrl} alt={title} className="w-full h-64 object-cover object-center" />
      <div className="p-6 bg-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-semibold flex items-center"
          >
            <FaGlobe className="mr-2" /> Website
          </a>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-semibold flex items-center"
          >
            <FaGithub className="mr-2" /> Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;