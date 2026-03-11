import React from 'react';
import { aboutData, resumeData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative bg-custom-bg px-[5%] sm:px-[10%] py-[60px] sm:py-[100px] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[80px]">
          <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out order-2 md:order-1">
            <span className="block text-custom-accent font-heading text-xs sm:text-sm font-bold tracking-[4px] uppercase mb-6 sm:mb-8">// SKILLS</span>
  
            {aboutData.skillCategories.map((cat, index) => (
              <div className="border-b border-white/5 pb-4 mb-4" key={index}>
                <div className="flex justify-between items-center mb-[8px]">
                  <h4 className="text-[1rem] sm:text-[1.1rem] font-semibold text-custom-main">{cat.title}</h4>
                  <span className="text-custom-muted font-mono text-xs sm:text-sm">&lt;/&gt;</span>
                </div>
                <p className="text-custom-muted text-[0.8rem] sm:text-[0.9rem] opacity-70">{cat.skills}</p>
              </div>
            ))}
          </div>
  
          <div className="flex flex-col justify-center items-start fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out order-1 md:order-2">
            <h2 className="font-heading text-[clamp(1.8rem,5vw,2.8rem)] font-black leading-tight text-white uppercase mb-6 tracking-tight">
              {aboutData.title.split(' ')[0]} <br /> <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">{aboutData.title.split(' ').slice(1).join(' ').replace('.', '')}<span className="text-custom-accent">.</span></span>
            </h2>
            <p className="text-[1rem] sm:text-[1.1rem] text-custom-muted leading-[1.8] mb-8 sm:mb-10 opacity-80">
              {aboutData.description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
              
              <a 
                href={resumeData.resumeUrl} 
                download 
                className="flex-1 sm:flex-none text-center px-6 sm:px-8 py-2.5 sm:py-3 text-[0.8rem] sm:text-[0.95rem] font-bold rounded-xl uppercase tracking-widest font-heading cursor-pointer bg-custom-accent text-black border-2 border-custom-accent shadow-accent-glow hover:bg-transparent hover:text-custom-accent hover:shadow-accent-glow-hover transition-all duration-300"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
