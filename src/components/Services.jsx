import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { servicesData } from '../data/portfolioData';

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = (serviceTitle) => {
    if (location.pathname === '/') {
      navigate('/services');
      window.scrollTo(0, 0);
    } else {
      navigate('/contact-us');
      window.scrollTo(0, 0);
    }
  };

  const icons = [
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>, // Web Dev
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>, // Website Design
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>, // UI/UX
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>, // Mobile Dev
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, // Frontend
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> // Backend
  ];

  const services = servicesData.map((s, i) => ({
    ...s,
    icon: icons[i] || icons[0],
    index: (i + 1).toString().padStart(2, '0')
  }));

  const ServiceCard = ({ s, i }) => (
    <div 
      className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white/[0.05] sm:bg-white/[0.06] rounded-3xl border border-custom-accent/30 sm:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:shadow-none cursor-pointer overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-custom-accent/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-h-[180px] sm:min-h-[200px]" 
      key={i}
      onClick={() => handleCardClick(s.title)}
    >
      {/* Background Index Number */}
      <div className="absolute top-2 right-4 text-custom-accent/[0.3] sm:text-white/[0.10] font-heading text-7xl font-black group-hover:text-custom-accent/[0.3] transition-colors duration-500 select-none pointer-events-none">
        {s.index}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(122,242,152,0.08),transparent_70%)] opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 w-[48px] h-[48px] flex items-center justify-center rounded-2xl bg-custom-accent sm:bg-white/5 border border-custom-accent sm:border-white/10 text-black sm:text-custom-main shadow-accent-glow sm:shadow-none -translate-y-1 sm:translate-y-0 transition-all duration-500 group-hover:bg-custom-accent group-hover:text-black group-hover:shadow-accent-glow group-hover:border-custom-accent group-hover:-translate-y-1 mb-4">
        {s.icon}
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-[1.05rem] sm:text-[1.15rem] font-bold leading-tight text-white sm:text-white/90 group-hover:text-white transition-colors">
            {s.title}
          </h3>
          <div className="text-custom-accent sm:text-white/20 translate-x-1 sm:translate-x-0 -translate-y-1 sm:translate-y-0 transition-all duration-500 group-hover:text-custom-accent group-hover:translate-x-1 group-hover:-translate-y-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
        <p className="text-custom-muted text-xs sm:text-sm leading-relaxed opacity-100 sm:opacity-60 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
          {s.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="services" className="relative px-[5%] sm:px-[10%] py-[60px] sm:py-[100px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 mb-[40px] sm:mb-[60px] fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
          <div className="flex-1 w-full">
            <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// SERVICES</span>
            <h2 className="font-heading text-[clamp(1.6rem,5vw,2.8rem)] font-black leading-tight text-custom-main uppercase mb-6 tracking-tight">
              Crafting <br className="hidden sm:block" />
              <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">
                Digital Experiences <span className="text-custom-accent">.</span>
              </span>
            </h2>
            <div className="w-[60px] h-[3px] bg-custom-accent shadow-accent-glow"></div>
          </div>
          <div className="flex-1 max-w-[450px] text-custom-muted text-[0.95rem] sm:text-[1.05rem] leading-[1.7] opacity-80 pt-0 sm:pt-2">
            <p>From architectural discovery to high-performance delivery, I build bespoke digital solutions that drive results and elevate your brand's presence.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 sm:gap-6 fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard s={s} i={i} key={i} />
          ))}

          <a href="mailto:yashtupkar6@gmail.com" className="group lg:row-span-2 flex flex-col justify-between p-7 sm:p-8 bg-custom-accent rounded-3xl shadow-[0_0_50px_rgba(122,242,152,0.3)] sm:shadow-accent-glow scale-[1.01] sm:scale-100 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(122,242,152,0.3)] relative min-h-[220px] sm:min-h-0">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.05),transparent_60%)]"></div>
            
            <div className="absolute top-6 right-6 text-black sm:text-black/30 translate-x-1 sm:translate-x-0 -translate-y-1 sm:translate-y-0 transition-all duration-500 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="w-12 h-12 mb-6 rounded-2xl bg-black/20 sm:bg-black/10 backdrop-blur-md border border-black/5 flex items-center justify-center shadow-inner group-hover:bg-black/20 transition-colors duration-500">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                   <polyline points="22,6 12,13 2,6"></polyline>
                 </svg>
              </div>
              <p className="mb-2 text-[0.7rem] font-bold tracking-[3px] uppercase text-black/60">WANT TO START?</p>
              <h3 className="font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] font-black leading-[1.1] text-black uppercase">
                Let's <br /> Build Something <br /> Great
              </h3>
            </div>
          </a>

          {services.slice(3).map((s, i) => (
            <ServiceCard s={s} i={i + 3} key={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
