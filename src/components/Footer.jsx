import React from 'react';
import { heroData, contactData, servicesData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Footer = ({ hideCTA = false }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact-us' },
  ];

  // Simple SVG Icons to replace lucide-react briefly to fix build
  const Icons = {
    ArrowUpRight: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
    ),
    Mail: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    MessageCircle: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
    ),
    MapPin: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" height="12" r="3"/></svg>
    ),
    ArrowUp: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
    )
  };

  return (
    <footer id="contact" className="relative bg-[#050505] px-[5%] sm:px-[10%] py-[60px] sm:py-[80px] overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-custom-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] bg-custom-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {!hideCTA && (
          <div className="flex flex-col items-center text-center mb-[60px] sm:mb-[80px]">
            <span className="text-custom-accent uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-4 block transition-all">Let's Work Together</span>
            <h2 className="font-heading text-[clamp(1.5rem,5vw,3rem)] font-black leading-[1.1] tracking-tight mb-8 text-white uppercase max-w-[800px]">
              Ready to take your digital <br className="hidden md:block" /> 
              <span className="relative inline-block text-transparent stroke-text hover:text-custom-accent transition-all duration-500 cursor-default">presence higher?</span>
            </h2>
            <Link 
              to="/contact-us" 
              className="group relative flex items-center gap-2 bg-custom-accent text-black px-10 py-4 rounded-full font-bold text-base hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(122,242,152,0.2)]"
            >
              Start A Project
              <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <Icons.ArrowUpRight />
              </div>
            </Link>
          </div>
        )}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pb-[40px] border-b border-white/5">
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <h2 className="font-heading text-2xl font-black text-white hover:text-custom-accent transition-colors">
                {heroData.firstName}{" "}{heroData.lastName}<span className="text-custom-accent group-hover:text-white transition-colors">.</span>
              </h2>
            </Link>
            <p className="text-custom-muted text-sm leading-relaxed max-w-[280px] opacity-70">
              Transforming complex ideas into pixel-perfect digital experiences.
            </p>
            <div className="flex gap-2.5 sm:gap-3.5">
              {heroData.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-custom-muted transition-all duration-500 hover:translate-y-[-5px] hover:border-custom-accent hover:text-custom-accent hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(122,242,152,0.2)]"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-custom-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src={`https://api.iconify.design/${social.icon}`} alt={social.label} width={social.size - 2} height={social.size - 2} className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg] brightness-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest opacity-90">Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-custom-muted hover:text-custom-accent transition-colors flex items-center group w-fit text-sm"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-custom-accent transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest opacity-90">Expertise</h3>
            <ul className="space-y-3">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id} className="text-custom-muted opacity-70 hover:text-white transition-colors cursor-default w-fit flex items-center group text-sm">
                  <span className="w-1 h-1 rounded-full bg-custom-accent/20 group-hover:bg-custom-accent mr-2 transition-colors" />
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest opacity-90">Contact</h3>
            <div className="space-y-4">
              <a href={`mailto:${contactData.email}`} className="group flex items-center gap-3 text-custom-muted hover:text-white transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-custom-accent/30 transition-colors">
                  <div className="group-hover:text-custom-accent transition-colors scale-90">
                    <Icons.Mail />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-custom-muted/40 uppercase font-black tracking-wider">Email</span>
                  <span className="text-xs font-medium">{contactData.email}</span>
                </div>
              </a>
              <a href={`https://wa.me/${contactData.phone.replace(/[^0-9]/g, '')}`} className="group flex items-center gap-3 text-custom-muted hover:text-white transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-custom-accent/30 transition-colors">
                  <div className="group-hover:text-custom-accent transition-colors scale-90">
                    <Icons.MessageCircle />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-custom-muted/40 uppercase font-black tracking-wider">WhatsApp</span>
                  <span className="text-xs font-medium">{contactData.phone}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-[30px] text-custom-muted text-[11px] gap-4">
          <p className="opacity-60">
            &copy; {currentYear} {heroData.firstName} {heroData.lastName}.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-custom-accent transition-colors group font-bold uppercase tracking-[2px]"
          >
            Back To Top
            <div className="group-hover:-translate-y-1 transition-transform scale-75">
              <Icons.ArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

