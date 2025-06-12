import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden group">
              <img 
                src="/blockbreach-logo.png" 
                alt="BlockBreach Logo" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-wide hover:text-[#8B5CF6] transition-colors duration-300">
              BLOCKBREACH
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#services" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#about" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#services" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
                Services
              </a>
              <a href="#about" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#contact" className="text-white hover:text-[#8B5CF6] transition-colors duration-300 font-medium">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;