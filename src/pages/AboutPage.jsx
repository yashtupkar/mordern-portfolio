import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { aboutData, resumeData } from '../data/portfolioData';

const AboutPage = () => {
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
  
      
      <main className="pt-[100px] sm:pt-[120px] pb-[60px] sm:pb-[100px] px-[5%] sm:px-[10%]">
       
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-[60px] text-center fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
            <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// GET TO KNOW ME</span>
            <h1 className="font-heading text-[clamp(1.6rem,5vw,2.8rem)] font-black tracking-tight leading-none uppercase text-custom-main mb-6">
              About <br /> 
              <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">
                My Journey<span className="text-custom-accent">.</span>
              </span>
            </h1>
            <div className="w-[80px] h-[4px] bg-custom-accent shadow-accent-glow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[80px] items-center">
            {/* Image Section */}
            <div className="lg:col-span-5 fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/10 group">
                <img 
                  src="/assets/yash.jpg" 
                  alt="Yash Tupkar" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"; }}
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase mb-6 tracking-tight">
                {aboutData.title.split(' ')[0]} <span className="text-custom-accent">{aboutData.title.split(' ').slice(1).join(' ').replace('.', '')}.</span>
              </h2>
              <p className="text-[1rem] sm:text-[1.1rem] text-custom-muted leading-[1.8] mb-8 font-light">
                {resumeData.about.text}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                {resumeData.about.info.map((infoItem, index) => (
                  <div key={index} className="flex justify-between sm:justify-start items-center sm:gap-4 border-b border-white/5 py-2">
                    <span className="text-custom-main/50 font-bold uppercase text-xs tracking-wider">{infoItem.label}:</span>
                    <span className="text-white text-sm font-medium">{infoItem.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a 
                  href={resumeData.resumeUrl} 
                  download 
                  className="flex-1 sm:flex-none text-center px-8 py-3 text-sm font-bold rounded-xl uppercase tracking-widest font-heading cursor-pointer bg-custom-accent text-black border-2 border-custom-accent shadow-accent-glow hover:bg-transparent hover:text-custom-accent hover:shadow-accent-glow-hover transition-all duration-300"
                >
                  Download Resume
                </a>
                <a 
                  href="mailto:yashtupkar6@gmail.com" 
                  className="flex-1 sm:flex-none text-center px-8 py-3 text-sm font-bold rounded-xl uppercase tracking-widest font-heading cursor-pointer bg-transparent text-custom-main border-2 border-white/20 hover:border-custom-accent hover:text-custom-accent transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="mt-[80px] sm:mt-[120px] fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase mb-8 tracking-tight text-center sm:text-left">
              Professional <span className="text-custom-accent">Skills.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutData.skillCategories.map((cat, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-custom-accent/30 transition-colors duration-300 group">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-[1.05rem] font-bold text-custom-main group-hover:text-custom-accent transition-colors duration-300">{cat.title}</h4>
                    <span className="w-8 h-8 rounded-full bg-custom-accent/10 flex items-center justify-center text-custom-accent text-xs group-hover:scale-110 transition-transform duration-300">&lt;/&gt;</span>
                  </div>
                  <p className="text-custom-muted text-[0.85rem] leading-relaxed">{cat.skills}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Education */}
          <div className="mt-[80px] sm:mt-[120px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            {/* Experience Section */}
            <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase mb-8 tracking-tight flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-accent"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                Experience<span className="text-custom-accent">.</span>
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((item, i) => (
                  <div className="group relative bg-white/3 border border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-custom-accent/30 hover:bg-white/5 hover:-translate-y-1 hover:shadow-2xl" key={i}>
                    <div className="absolute top-0 left-0 w-1 h-full bg-custom-accent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 sm:mb-3">
                      <span className="inline-block px-3 py-1 text-[0.75rem] font-bold text-black bg-custom-accent rounded-full w-fit uppercase tracking-wider">{item.date}</span>
                      <span className="text-[0.9rem] sm:text-[1rem] font-semibold text-custom-main/80">{item.company}</span>
                    </div>
                    <h4 className="font-heading text-[1.2rem] sm:text-[1.4rem] text-custom-main font-bold mb-3 group-hover:text-custom-accent transition-colors">{item.title}</h4>
                    <p className="text-[0.9rem] sm:text-[0.95rem] text-custom-muted leading-relaxed">{item.desc}</p>
                    {item.highlight && <span className="inline-block mt-4 px-3 py-1 text-[0.75rem] font-bold text-custom-accent border border-custom-accent/20 rounded uppercase">{item.highlight}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out delay-100">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase mb-8 tracking-tight flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-accent"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                Education<span className="text-custom-accent">.</span>
              </h3>
              <div className="space-y-6">
                {resumeData.education.map((item, i) => (
                  <div className="group relative bg-white/3 border border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-custom-accent/30 hover:bg-white/5 hover:-translate-y-1 hover:shadow-2xl" key={i}>
                     <div className="absolute top-0 right-0 w-1 h-full bg-custom-accent rounded-r-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <span className="text-custom-accent font-bold text-[0.8rem] sm:text-[0.85rem] tracking-widest uppercase">{item.date}</span>
                      {item.highlight && <span className="text-[0.75rem] font-bold text-custom-main bg-white/10 px-3 py-1 rounded-full w-fit group-hover:bg-custom-accent/20 group-hover:text-custom-accent transition-colors duration-300">{item.highlight}</span>}
                    </div>
                    <h4 className="font-heading text-[1.1rem] sm:text-[1.3rem] text-custom-main font-bold mb-2 group-hover:text-custom-accent transition-colors">{item.title}</h4>
                    <p className="text-[0.9rem] sm:text-[1rem] text-custom-muted italic leading-snug">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mt-[80px] sm:mt-[120px] fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase mb-8 tracking-tight text-center sm:text-left flex justify-center sm:justify-start items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-accent"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              Awards & Recognition<span className="text-custom-accent">.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.awards.map((item, i) => (
                <div className="group relative bg-white/3 border border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-custom-accent/30 hover:bg-white/5 overflow-hidden" key={i}>
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-custom-accent/10 rounded-full blur-[30px] group-hover:bg-custom-accent/20 transition-colors duration-500"></div>
                  <span className="inline-block mb-3 text-[0.8rem] font-bold text-custom-accent bg-custom-accent/10 px-3 py-1 rounded-full tracking-wider uppercase">{item.date}</span>
                  <h4 className="font-heading text-[1.3rem] text-custom-main font-bold mb-2 group-hover:text-custom-accent transition-colors">{item.title}</h4>
                  <p className="text-[1rem] text-custom-main/90 font-medium mb-3">{item.company}</p>
                  <p className="text-[0.9rem] text-custom-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
