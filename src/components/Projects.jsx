import React from 'react';
import { projects } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <section id="projects" className="relative bg-custom-bg px-[5%] sm:px-[10%] py-[60px] sm:py-[100px] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-[40px] fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
        <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// PROJECTS</span>
        <h2 className="font-heading text-[clamp(1.6rem,5vw,2.8rem)] font-black tracking-tight leading-none uppercase text-custom-main mb-6">
          A Showcase of My <br /> 
          <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">
            Latest Works<span className="text-custom-accent">.</span>
          </span>
        </h2>
        <div className="w-[60px] h-[3px] bg-custom-accent shadow-accent-glow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-20 gap-y-10 sm:gap-y-16 mt-10">
        {projects.map((project, index) => (
          <Link 
            to={`/project/${project.id}`} 
            className="group flex flex-col gap-5 fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-700 ease-out cursor-pointer" 
            key={project.id || index}
          >
            <div className="relative w-full aspect-[16/12] sm:aspect-[16/12] rounded overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-custom-accent/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-white/3">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                onError={(e) => { e.target.src = project.fallback; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-custom-accent/90 hover:bg-custom-accent rounded-full text-black shadow-lg backdrop-blur-sm transition-all duration-300">
                  <svg width="18" height="18" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 px-1">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-custom-accent transition-colors duration-300 tracking-tight">
                {project.title}
              </h3>
              <p className="text-white/60 text-[0.85rem] sm:text-[1rem] leading-relaxed line-clamp-2 sm:line-clamp-3 transition-colors duration-300 group-hover:text-white/80">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1 sm:mt-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-[#1a1a1a] text-custom-accent/80 border border-white/5 px-3 sm:px-4 py-1 rounded-full text-[0.65rem] sm:text-[0.7rem] font-bold tracking-wider uppercase transition-all duration-300 group-hover:text-custom-accent group-hover:border-custom-accent/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        </div>

        <div className="mt-16 sm:mt-24 flex justify-center fade-in-scroll opacity-0 translate-y-[20px] transition-all duration-600 ease-out">
          <Link 
            to="/projects" 
            className="group relative flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white/3 border border-white/10 rounded-full font-heading text-[0.9rem] sm:text-[1rem] font-bold uppercase tracking-wider text-custom-main transition-all duration-300 hover:bg-white/5 hover:border-custom-accent/30 hover:shadow-accent-glow"
          >
            <span>View More Projects</span>
            <div className="w-8 h-8 flex items-center justify-center bg-custom-accent rounded-full text-black transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
