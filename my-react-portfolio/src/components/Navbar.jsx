import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Panel Top 08 */}
      <div>
        <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white py-4 z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center">
              <a href="#" className="text-lg font-bold">
                <h5 className="text-white">V MANHAKA</h5>
              </a>
            </div>

            {/* Center Section (Hidden on Mobile) */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8 uppercase">
                <li>
                  <a href="#Home" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">01.</span> Home
                  </a>
                </li>
                <li>
                  <a href="#About" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">02.</span> About
                  </a>
                </li>
                <li>
                  <a href="#Experience" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">03.</span> Experience
                  </a>
                </li>
                <li>
                  <a href="#Skills" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">04.</span> Skills
                  </a>
                </li>
                <li>
                  <a href="#Works" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">05.</span> Works
                  </a>
                </li>
                <li>
                  <a href="#Contact" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">06.</span> Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section (Visible on All Devices) */}
            <div className="flex items-center space-x-4">
              <a
                href="https://za.linkedin.com/in/vespas-manhaka-ba2905323"
                className="opacity-75 hover:opacity-100"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use href="#linkedin"></use>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dreamvillian_notion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="opacity-75 hover:opacity-100"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use href="#instagram"></use>
                </svg>
              </a>
              <a
                href="https://wa.me/27685782474"
                className="opacity-75 hover:opacity-100"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use href="#whatsapp"></use>
                </svg>
              </a>
              <a
                href="https://github.com/Dreamvillians"
                className="opacity-75 hover:opacity-100"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use href="#github"></use>
                </svg>
              </a>
              <a
                href="mailto:vmanhakait@gmail.com"
                className="opacity-75 hover:opacity-100"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use href="#mail"></use>
                </svg>
              </a>
              <a
                href="mailto:vmanhakait@gmail.com"
                className="opacity-75 hover:opacity-100"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use href="#contact"></use>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                className="p-2 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg width="24" height="24" fill="currentColor">
                  <use href="#menu"></use>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-700">
              <ul className="flex flex-col items-center space-y-4 py-4 uppercase">
                <li>
                  <a href="#Home" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">01.</span> Home
                  </a>
                </li>
                <li>
                  <a href="#About" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">02.</span> About
                  </a>
                </li>
                <li>
                  <a href="#Experience" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">03.</span> Experience
                  </a>
                </li>
                <li>
                  <a href="#Skills" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">04.</span> Skills
                  </a>
                </li>
                <li>
                  <a href="#Works" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">05.</span> Works
                  </a>
                </li>
                <li>
                  <a href="#Contact" className="opacity-75 hover:opacity-100">
                    <span className="opacity-50">06.</span> Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;