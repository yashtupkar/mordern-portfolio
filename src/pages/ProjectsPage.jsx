import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projects } from '../data/portfolioData';

const ProjectsPage = () => {
  useEffect(() => {
    // Re-initialize Intersection Observer for animations
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    const faders = document.querySelectorAll('.fade-in-scroll');
    const sliders = document.querySelectorAll('.slide-up-scroll');

    faders.forEach(fader => appearOnScroll.observe(fader));
    sliders.forEach(slider => appearOnScroll.observe(slider));

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-body text-custom-main">
      
      <Navbar />
      
      <main className="pt-[20px]">
        <section className="px-[5%] sm:px-[10%] py-[60px] sm:py-[100px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-[60px] text-center fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
              <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// PORTFOLIO</span>
              <h1 className="font-heading text-[clamp(1.6rem,5vw,2.8rem)] font-black tracking-tight leading-none uppercase text-custom-main mb-6">
                Explore My <br /> 
                <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">
                  Creative Projects<span className="text-custom-accent">.</span>
                </span>
              </h1>
              <div className="w-[80px] h-[4px] bg-custom-accent shadow-accent-glow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-20 gap-y-12 sm:gap-y-20">
              {projects.map((project, index) => (
                <Link 
                  to={`/project/${project.id}`} 
                  className="group flex flex-col gap-6 fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-700 ease-out cursor-pointer" 
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
                  
                  <div className="flex flex-col gap-4 px-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="bg-[#1a1a1a] text-custom-accent/80 border border-white/5 px-3 sm:px-4 py-1 rounded-full text-[0.65rem] sm:text-[0.7rem] font-bold tracking-wider uppercase transition-all duration-300 group-hover:text-custom-accent group-hover:border-custom-accent/20">
                          {t} {i < project.tech.length - 1 && <span className="mx-1 opacity-30">•</span>}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-custom-accent transition-colors duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-[0.95rem] sm:text-[1.05rem] leading-relaxed transition-colors duration-300 group-hover:text-white/70 max-w-2xl">
                      {project.desc}
                    </p>
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 text-custom-accent font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300">
                        View Project Details 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
