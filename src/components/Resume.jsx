import React, { useState } from 'react';
import { resumeData } from '../data/portfolioData';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 gap-4" id="tab-about">
            <div className="md:col-span-2 bg-white/3 border border-white/5 rounded-2xl p-6 mb-2">
               <p className="text-[1.05rem] leading-[1.7] text-custom-muted">{resumeData.about.text}</p>
            </div>
            {resumeData.about.info.map((item, i) => (
              <div className="bg-white/3 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 transition-all duration-300 hover:border-custom-accent/30" key={i}>
                <span className="text-[0.8rem] sm:text-[0.9rem] text-custom-muted font-medium uppercase tracking-wider">{item.label}</span>
                <span className="text-[0.95rem] sm:text-[1rem] text-custom-main font-semibold truncate">{item.value}</span>
              </div>
            ))}
          </div>
        );
      case 'experience':
        return (
          <div className="animate-fadeIn space-y-4" id="tab-experience">
            {resumeData.experience.map((item, i) => (
              <div className="group relative bg-white/3 border border-white/5 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-custom-accent/30 hover:bg-white/5" key={i}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 sm:mb-3">
                  <span className="inline-block px-3 py-1 text-[0.75rem] font-bold text-black bg-custom-accent rounded-full w-fit uppercase tracking-wider">{item.date}</span>
                  <span className="text-[0.9rem] sm:text-[1rem] font-semibold text-custom-main/80">{item.company}</span>
                </div>
                <h4 className="font-heading text-[1.2rem] sm:text-[1.4rem] text-custom-main font-bold mb-2 group-hover:text-custom-accent transition-colors">{item.title}</h4>
                <p className="text-[0.9rem] sm:text-[0.95rem] text-custom-muted leading-relaxed">{item.desc}</p>
                {item.highlight && <span className="inline-block mt-3 px-2 py-0.5 text-[0.7rem] font-bold text-custom-accent border border-custom-accent/20 rounded uppercase">{item.highlight}</span>}
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="animate-fadeIn space-y-4" id="tab-education">
            {resumeData.education.map((item, i) => (
              <div className="group bg-white/3 border border-white/5 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-custom-accent/30" key={i}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-3">
                  <span className="text-custom-accent font-bold text-[0.75rem] sm:text-sm tracking-widest uppercase">{item.date}</span>
                  {item.highlight && <span className="text-[0.7rem] sm:text-[0.8rem] text-custom-muted bg-white/5 px-3 py-1 rounded-full w-fit">{item.highlight}</span>}
                </div>
                <h4 className="font-heading text-[1.1rem] sm:text-[1.2rem] text-custom-main font-bold mb-1 group-hover:text-custom-accent transition-colors">{item.title}</h4>
                <p className="text-[0.85rem] sm:text-[0.95rem] text-custom-muted italic leading-snug">{item.company}</p>
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <div className="animate-fadeIn grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3" id="tab-skills">
            {resumeData.skills.map((skill, i) => (
              <div className="flex items-center gap-3 bg-white/3 border border-white/5 rounded-xl p-3 cursor-pointer transition-all duration-300 hover:bg-white/5 hover:border-custom-accent/20 group" key={i}>
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={skill.icon.includes('/') 
                        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}` 
                        : `https://api.iconify.design/${skill.icon.replace(':', '/')}.svg?color=${skill.filter ? '%23ffffff' : '%237af298'}`
                    } 
                    alt={skill.name} 
                    className={`w-6 h-6 object-contain transition-all duration-300 ${skill.filter ? 'brightness-0 invert' : ''}`}
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
                <span className="text-[0.85rem] sm:text-[0.9rem] font-semibold text-custom-main group-hover:text-custom-accent truncate">{skill.name}</span>
              </div>
            ))}
          </div>
        );
      case 'awards':
        return (
          <div className="animate-fadeIn space-y-4" id="tab-awards">
            {resumeData.awards.map((item, i) => (
              <div className="bg-white/3 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-custom-accent/30" key={i}>
                <span className="inline-block mb-3 text-[0.85rem] font-bold text-custom-accent tracking-tighter uppercase">{item.date}</span>
                <h4 className="font-heading text-[1.3rem] text-custom-main font-bold mb-2">{item.title}</h4>
                <p className="text-[1rem] text-white/80 font-medium mb-1">{item.company}</p>
                <p className="text-[0.9rem] text-custom-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="resume" className="relative px-[5%] sm:px-[10%] py-[60px] sm:py-[100px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 sm:gap-12 items-start">
        
        {/* Left Side: Header & Tabs */}
        <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out lg:sticky lg:top-[120px]">
          <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// RESUME</span>
          <h2 className="font-heading text-[clamp(1.8rem,5vw,2.8rem)] font-black leading-[1] text-custom-main uppercase mb-8 sm:mb-10 tracking-tight">
            Why Hire <br /> 
            <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">
              Me<span className="text-custom-accent">?</span>
            </span>
          </h2>
          
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`relative whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink-1 text-center lg:text-left px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-heading text-[0.9rem] sm:text-[1.1rem] font-bold transition-all duration-400 group overflow-hidden ${activeTab === tab.id ? 'bg-custom-accent text-black shadow-accent-glow' : 'bg-white/3 text-custom-muted hover:text-custom-main hover:bg-white/5'}`} 
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab !== tab.id && (
                  <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Tab Content */}
        <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out min-h-[400px] sm:min-h-[500px]">
          <div className="bg-custom-surface/30 backdrop-blur-sm border border-white/5 rounded-[24px] sm:rounded-[32px] p-0 sm:p-10 min-h-full">
            {renderTabContent()}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Resume;
