import { useState } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1E1E1E] border-b border-[#2D2D2D] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold font-rajdhani text-white">
              <span className="text-[#6C63FF]">Sonic</span>
              <span className="text-[#00FFFF]">Wave</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-[#00FFFF] transition-colors duration-300">
              Home
            </a>
            <a href="#features" className="text-white hover:text-[#00FFFF] transition-colors duration-300">
              Features
            </a>
            <a href="#download" className="text-white hover:text-[#00FFFF] transition-colors duration-300">
              Download
            </a>
            <a href="#faq" className="text-white hover:text-[#00FFFF] transition-colors duration-300">
              FAQ
            </a>
            <a href="#contact" className="text-white hover:text-[#00FFFF] transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 py-4">
            <a 
              href="#home" 
              className="text-white hover:text-[#00FFFF] transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-white hover:text-[#00FFFF] transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a 
              href="#download" 
              className="text-white hover:text-[#00FFFF] transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Download
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-[#00FFFF] transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-[#00FFFF] transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
