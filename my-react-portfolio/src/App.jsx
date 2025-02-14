import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectListing from './components/ProjectListing';
import backgroundImg from './assets/background/img-125.jpg';
import './index.css';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Navbar />
      <Hero />
      <Skills />
      <ProjectListing />
      <Experience />
    </div>
  );
};

export default App;
