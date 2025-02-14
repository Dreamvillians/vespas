// components/ProjectListing.js
import React from 'react';
import ProjectCard from './ProjectCard';
import { FaBehance, FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import img1 from '../assets/background/img-125.jpg';
import img2 from '../assets/background/20241027_220352_0002.jpg';
import img3 from '../assets/background/20241027_220352_0002.jpg';


const ProjectListing = () => {
  const projects = [
    {
      imgUrl: img1,
      title: 'Synq Tech',
      icon: FaGithub,
      description:
        'Elevate Every Introduction. Join millions who have embraced the Digital Business Card movement to create an engaging experience and capture quality leads.',
      technologies: ['Javascript(ES6)', 'HTML5', 'CSS3', 'PHP', 'Laravel', 'MySQL', 'Node.js', 'Website Server Management'],
      websiteLink: 'https://digitalink.com',
      sourceLink: 'https://github.com/digitalink',
    },

    {
      imgUrl :img2,
      title: 'AMI RECORD LABEL',
      description:
        'Elevate Every Introduction. Join millions who have embraced the Digital Business Card movement to create an engaging experience and capture quality leads.',
      technologies: ['Javascript(ES6)', 'HTML5', 'CSS3', 'Git', 'SCSS', 'PHP'],
      websiteLink: 'https://amiafrica.netlify.app/',
      sourceLink: 'https://github.com/digitalink',
    },
    {
      imgUrl : img3,
      title: 'Notion Trade Journal',
      description:
        'Elevate Every Introduction. Join millions who have embraced the Digital Business Card movement to create an engaging experience and capture quality leads.',
      technologies: ['Javascript(ES6)', 'Notion', 'Tailwindcss', 'React', 'MySQL'],
      websiteLink: 'https://digitalink.com',
      sourceLink: 'https://github.com/digitalink',
    },
    {
      imgUrl :'img4',
      title: 'Dreamvillians',
      description:
        'Elevate Every Introduction. Join millions who have embraced the Digital Business Card movement to create an engaging experience and capture quality leads.',
      technologies: ['Javascript(ES6)', 'HTML5', 'SaaS', 'Netlify', 'React', 'MySQL'],
      websiteLink: 'https://digitalink.com',
      sourceLink: 'https://github.com/digitalink',
    },
     // Add more projects here
    {
      imgUrl :'img5',
      title: 'JerseyAlchemy Store',
      description:
        'Elevate Every Introduction. Join millions who have embraced the Digital Business Card movement to create an engaging experience and capture quality leads.',
      technologies: ['Shopify', 'Liquid', 'UX/UI Design', 'Hosting', 'React',],
      websiteLink: 'https://digitalink.com',
      sourceLink: 'https://github.com/digitalink',
    },

    {
      imgUrl :'img6',
      title: 'Chef Denzel Catering',
      description:
        'Elevate Every Introduction. Join millions who have embraced the Digital Business Card movement to create an engaging experience and capture quality leads.',
      technologies: ['Javascript(ES6)', 'HTML5', 'CSS3', 'Netlify', 'React', 'MySQL'],
      websiteLink: 'https://digitalink.com',
      sourceLink: 'https://github.com/digitalink',
    },

    // Add more projects here
  ];

  const [activeTab, setActiveTab] = React.useState('Tab1');

  const renderProjects = () => {
    switch (activeTab) {
      case 'Tab1':
        return projects.slice(0, 3); // Display first 2 projects for Tab1
      case 'Tab2':
        return projects.slice(2, 5); // Display next 2 projects for Tab2
      case 'Tab3':
        return projects.slice(4,7); // Display remaining projects for Tab3
      default:
        return projects;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h1>
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${activeTab === 'Tab1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('Tab1')}
        >
          Tab1
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'Tab2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('Tab2')}
        >
          Tab2
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'Tab3' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setActiveTab('Tab3')}
        >
          Tab3
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {renderProjects().map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectListing;