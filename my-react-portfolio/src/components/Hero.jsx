import React, { useState, useEffect } from 'react';
import { FaBehance, FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import backgroundImage from '../assets/background/img-125.jpg'; // Import the background image
import veeImage from '../assets/background/vee3.png'; // Import the vee.png image
import TrackVisibility from 'react-on-screen'; // Import TrackVisibility
import 'animate.css';

const Hero = ({
  subtitle = "Specializing in designing visually stunning, responsive websites that elevate your brand and deliver an exceptional user experience.",
}) => {
  const [title, setTitle] = useState('');
  const titles = [
    "Fullstack Developer",
    "Graphic Designer",
    "Frontend Developer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (title.length < titles[currentIndex].length) {
        timeout = setTimeout(() => {
          setTitle((prev) => prev + titles[currentIndex][title.length]);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (title.length > 0) {
        timeout = setTimeout(() => {
          setTitle((prev) => prev.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [title, currentIndex, isTyping, titles]);

  return (
    <section
      className='py-20 mb-4 relative inset-0 bg-gradient-to-r from-black to-transparent opacity-75'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          {/* Display the Image */}
          <div className="flex justify-center mb-8">
            <img
              src={veeImage} // Use the imported image
              alt="Vespas K. Manhaka"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>

<TrackVisibility>
  {({ isVisible }) => (
    <div className={isVisible ? 'animate__fadeInUpBig' : ''}>
      <h1 className='text-4xl font-extrabold text-black sm:text-5xl md:text-6xl min-h-[120px]'>
        Hello, I'm Vespas K. Manhaka{" "}
        <br />
        <span className='my-4 text-2xl font-bold text-blue-700 sm:text-5xl md:text-3xl'>{title}</span>
      </h1>
    </div>
  )}
          </TrackVisibility>
          <p className='my-4 text-2xsl font-bold text-black sm:text-5xl md:text-3xl'>{subtitle}
             {/* Beeping Green Dot */}
          <span className="beeping-dot ml-2 w-3 h-3 bg-green-900 rounded-full animate-beep"></span></p>
          
          {/* Buttons */}
          <div className="flex space-x-4 justify-center mt-6">
            <a
              href="https://github.com/Dreamvillians"
              className="crop button bg-blue-500 text-white rounded-full px-6 py-2 text-center transition-all duration-300 hover:scale-105"
            >
              My Works
            </a>
            <a
              href="https://drive.google.com/file/d/1SYqvhNVFI6ORamzkRH7tOIID3bkdOGuO/view?usp=sharing"
              className="crop button bg-gray-300 text-black rounded-full px-6 py-2 text-center transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold text-black mb-4">Based in Capetown, South Africa</h2>
            <h2 className="text-2xl font-bold text-black mb-4">Find me on</h2>
            <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div className={`flex justify-center space-x-6 ${isVisible ? 'animate__animated animate__slideInRight' : ''}`}>
            <a href="https://www.behance.net/vespas" target="_blank" rel="noopener noreferrer">
              <FaBehance className="text-indigo-600 text-3xl hover:scale-110 transition-all" />
            </a>
            <a href="https://github.com/Dreamvillians" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-black text-3xl hover:scale-110 transition-all" />
            </a>
            <a href="https://za.linkedin.com/in/vespas-manhaka-ba2905323" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 text-3xl hover:scale-110 transition-all" />
            </a>
            <a href="mailto:vespas@example.com" target="_blank" rel="noopener noreferrer">
              <FaMailBulk className="text-blue-400 text-3xl hover:scale-110 transition-all" />
            </a>
            <a href="tel:+27685782474" target="_blank" rel="noopener noreferrer">
              <FaPhone className="text-blue-400 text-3xl hover:scale-110 transition-all" />
            </a>
          </div>
        )}
      </TrackVisibility>

            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;