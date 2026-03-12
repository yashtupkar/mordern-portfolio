import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { resumeData } from '../data/portfolioData';

const ServicesPage = () => {
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

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your goals, target audience, and project requirements. This foundation ensures we build exactly what you need.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating intuitive, aesthetic wireframes and high-fidelity designs. You review the visuals before a single line of code is written.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Bringing designs to life with clean, modern code. Rigorous testing across devices ensures a bug-free, responsive experience.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your application to the web. After launch, I provide ongoing support to keep everything running smoothly.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path><path d="M2 12h20"></path><path d="m5 7 3-5"></path><path d="m5 17 3 5"></path><path d="m19 7-3-5"></path><path d="m19 17-3 5"></path></svg>
    }
  ];



  return (
    <div className="relative min-h-screen overflow-x-hidden font-body text-custom-main">
      <Navbar />
      
      <main className="pt-[20px] sm:pt-[20px] pb-[60px] sm:pb-[100px]">
        {/* Main Services Section */}
        <Services />

        {/* Additional Content: Our Process */}
        <div className="px-[5%] sm:px-[10%] mt-20 max-w-[1400px] mx-auto">
          <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out text-center mb-16">
             <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// WORKFLOW</span>
             <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase mb-6 tracking-tight">
               My <span className="text-custom-accent">Process.</span>
             </h2>
             <div className="w-[80px] h-[4px] bg-custom-accent shadow-accent-glow mx-auto mb-16"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out relative p-8 bg-white/3 border border-white/5 rounded-[2rem] hover:border-custom-accent/30 hover:bg-white/5 transition-all duration-300 group">
                <div className="absolute top-0 right-0 p-8 text-5xl font-black text-white/10 group-hover:text-custom-accent/30 transition-colors duration-300">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-custom-accent mb-8 group-hover:scale-110 group-hover:bg-custom-accent group-hover:text-black transition-all duration-300 shadow-md">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-custom-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-custom-muted text-sm leading-relaxed opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content: Tools & Technologies */}
        <div className="px-[5%] sm:px-[10%] mt-24 max-w-[1400px] mx-auto">
          <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out bg-custom-accent/5 border border-custom-accent/10 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 text-center">
             <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// TECH STACK</span>
             <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase mb-12 tracking-tight">
               Tools I <span className="text-custom-accent">Use.</span>
             </h2>
             
             <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8">
               {resumeData.skills.map((skill, i) => (
                 <div key={i} className="flex flex-col items-center gap-3 w-[80px] sm:w-[100px] group cursor-pointer">
                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-custom-accent/10 group-hover:border-custom-accent/30 group-hover:-translate-y-2 transition-all duration-300">
                     <img 
                       src={skill.icon.includes('/') 
                           ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}` 
                           : `https://api.iconify.design/${skill.icon.replace(':', '/')}.svg?color=${skill.filter ? '%23ffffff' : '%237af298'}`
                       } 
                       alt={skill.name} 
                       className={`w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300 ${skill.filter ? 'brightness-0 invert' : ''}`}
                       onError={(e) => { 
                           if (skill.icon.includes('/')) {
                               const fallbackName = skill.name.toLowerCase().replace(/[\s.+-]/g, '');
                               e.target.src = `https://api.iconify.design/simple-icons:${fallbackName}.svg?color=%23ffffff`;
                           } else {
                               e.target.style.display = 'none';
                           }
                       }} 
                     />
                   </div>
                   <span className="text-[0.7rem] sm:text-xs font-bold text-custom-muted uppercase tracking-wider group-hover:text-white transition-colors text-center w-full truncate">
                     {skill.name}
                   </span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        <Testimonials />

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
