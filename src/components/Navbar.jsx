import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { heroData } from '../data/portfolioData';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full px-[5%] sm:px-[5%] py-2 sm:py-3 flex justify-between items-center z-[1000] transition-all duration-300 animate-fadeIn ${
      scrolled 
        ? 'bg-custom-bg/50 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="flex items-center">
        <Link to="/" className="font-heading text-lg sm:text-xl font-bold tracking-[1px] sm:tracking-[2px] transition-all duration-300 ease-in-out">
          {heroData.firstName} {heroData.lastName} <span className="text-custom-accent">.</span>
        </Link>
      </div>

      <ul className={`fixed top-0 ${isActive ? 'right-0' : 'right-[-100%]'} h-screen w-[280px] sm:w-full flex-col items-center justify-center bg-custom-bg/98 backdrop-blur-xl z-[1000] gap-8 sm:gap-10 flex transition-all duration-500 md:static md:h-auto md:w-auto md:flex-row md:bg-transparent md:backdrop-blur-none md:z-auto md:gap-[30px] border-l border-white/5 md:border-none shadow-2xl md:shadow-none`}>
        <li><Link to="/about" onClick={closeMenu} className={`text-lg md:text-sm font-medium hover:text-custom-accent transition-all duration-300 ${scrolled ? 'text-custom-muted' : 'text-custom-main'}`}>About</Link></li>
        <li><Link to="/projects" onClick={closeMenu} className={`text-lg md:text-sm font-medium hover:text-custom-accent transition-all duration-300 ${scrolled ? 'text-custom-muted' : 'text-custom-main'}`}>Projects</Link></li>
        <li><Link to="/services" onClick={closeMenu} className={`text-lg md:text-sm font-medium hover:text-custom-accent transition-all duration-300 ${scrolled ? 'text-custom-muted' : 'text-custom-main'}`}>Services</Link></li>
        <li className="md:hidden mt-4">
          <Link to="/contact-us" onClick={closeMenu} className="inline-block px-8 py-3 text-sm font-bold rounded-[50px] uppercase tracking-wider font-heading bg-custom-accent text-black shadow-accent-glow">
            Let's Talk
          </Link>
        </li>
      </ul>

      <div className="hidden md:block">
        <Link to="/contact-us" className="inline-block px-7 py-3 text-sm font-semibold rounded-[50px] uppercase tracking-wider font-heading cursor-pointer bg-custom-accent text-black border-2 border-custom-accent shadow-accent-glow hover:bg-transparent hover:text-custom-accent hover:shadow-accent-glow-hover transition-all duration-300">
          Let's Talk
        </Link>
      </div>

      <div 
        className={`z-[1001] flex flex-col cursor-pointer gap-[6px] md:hidden ${isActive ? 'toggle' : ''}`} 
        onClick={toggleMenu}
      >
        <span className={`w-[28px] h-[2px] bg-custom-main transition-all duration-300 origin-center ${isActive ? 'rotate-[45deg] translate-y-[4px]' : ''}`}></span>
        <span className={`w-[18px] h-[2px] bg-custom-accent transition-all duration-300 ${isActive ? 'opacity-0 scale-x-0' : ''}`}></span>
        <span className={`w-[28px] h-[2px] bg-custom-main transition-all duration-300 origin-center ${isActive ? 'rotate-[-45deg] translate-y-[-4px]' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
