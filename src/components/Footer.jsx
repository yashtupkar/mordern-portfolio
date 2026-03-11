import React from 'react';
import { heroData, contactData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-custom-bg px-[5%] sm:px-[10%] py-[60px] sm:py-[100px] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start text-left mb-[60px] sm:mb-[80px] fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
          <h2 className="font-heading text-[clamp(1.8rem,6vw,4rem)] font-black leading-[1.1] mb-8 text-custom-main uppercase">
            READY TO TAKE YOUR IDEA TO <br className="hidden sm:block" /> 
            <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">THE NEXT LEVEL?</span>
          </h2>
          <a href={contactData.hireMeLink} className="w-full sm:w-auto text-center inline-block px-10 py-4 text-[1rem] sm:text-[1.1rem] font-semibold rounded-[12px] uppercase tracking-wider font-heading cursor-pointer bg-custom-accent text-black border-2 border-custom-accent shadow-accent-glow hover:bg-transparent hover:text-custom-accent hover:shadow-accent-glow-hover transition-all duration-300">
            Hire Me / Email
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pt-[40px] sm:pt-[50px] border-t border-white/10 mb-[40px] sm:mb-[60px]">
          <div className="flex-1 w-full">
            <h2 className="font-heading text-[clamp(1.4rem,4vw,2.5rem)] font-black leading-none mb-4 text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer uppercase">{heroData.firstName} {heroData.lastName}</h2>
            <p className="text-custom-muted text-[0.9rem] sm:text-[1rem] opacity-70">{contactData.location}</p>
          </div>
          <div className="flex-1 w-full md:text-right">
            <p className="mb-2 text-custom-muted text-sm sm:text-base"><strong>Contact</strong>: {contactData.phone}</p>
            <p className="mb-6 text-custom-muted text-sm sm:text-base"><strong>Email</strong>: {contactData.email}</p>
            <div className="flex gap-[12px] sm:gap-[15px] md:justify-end">
              {heroData.socials.map((social) => (
                <a 
                  key={social.label}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] items-center justify-center overflow-hidden rounded-[12px] border border-white/10 bg-white/3 text-custom-muted transition-all duration-400 hover:translate-y-[-5px] hover:border-custom-accent hover:text-custom-accent" 
                  aria-label={social.label}
                >
                  <img src={`https://api.iconify.design/${social.icon}`} alt={social.label} width={social.size} height={social.size} className="transition-transform duration-400 group-hover:scale-110 group-hover:rotate-[10deg]" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center pt-[30px] border-t border-white/5 text-custom-muted text-[0.7rem] sm:text-[0.8rem] tracking-[1px] uppercase opacity-50 font-bold">
          <p>&copy; {new Date().getFullYear()} {heroData.firstName} {heroData.lastName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
