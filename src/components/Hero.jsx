import React from 'react';
import { heroData, resumeData } from '../data/portfolioData';
import Aurora from '../ReactBits/Aurora';
import ScrambledText from '../component/ScrambledText';
import TextPressure from '../component/TextPressure';
import TechShowcase from './TechShowcase';

const Hero = () => {
  return (
    <section id="home" className="relative isolate flex min-h-screen flex-col justify-center px-[5%] sm:px-[8%] md:px-[5%] pt-[15vh] pb-[10vh] overflow-hidden">
      {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <Aurora
          colorStops={["#00f5a0", "#7af298", "#00d9ff"]}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        />
      </div> */}
      
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="mb-5 flex items-center gap-[10px] sm:gap-[15px] font-heading text-sm sm:text-lg font-medium tracking-[2px] uppercase animate-fadeIn">
          <div className="h-[2px] w-[30px] sm:w-[60px] bg-custom-accent shadow-accent-glow"></div>
          <span className="text-[0.7rem] sm:text-lg">{heroData.role}</span>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr]  w-full gap-8">
          <div className="flex flex-col items-start w-full">
            <h1 className="ml-[-4px] sm:ml-[-8px] text-left font-heading text-[clamp(4rem,15vw,10rem)] font-black leading-[0.85] tracking-[-3px] uppercase animate-fadeIn">
              {heroData.firstName}
            </h1>
            {/* Small screens: plain text */}
            <h1 className="md:hidden ml-[-4px] text-left font-heading text-[clamp(4rem,15vw,10rem)] font-black leading-[0.85] tracking-[-3px] uppercase text-custom-accent animate-fadeIn [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              {heroData.lastName}.
            </h1>

            {/* md+ screens: interactive TextPressure */}
            <div className="hidden md:block relative w-full lg:w-[100%] h-[clamp(4.5rem,15vw,10rem)] overflow-visible bg-transparent ml-[-4px] sm:ml-[-8px] cursor-pointer animate-fadeIn [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
              <div className="flex items-center w-full h-full">
                <TextPressure
                  text={heroData.lastName + '.'}
                  flex
                  alpha={false}
                  width
                  weight
                  italic
                  scale={true}
                  textColor="#7af298"
                  minFontSize={64}
                />
              </div>
            </div>
            <div className=' hidden md:flex flex-col sm:flex-row w-full gap-6 sm:gap-8 items-center sm:items-center mb-4 md:mb-0 mt-8 sm:mt-10 w-full'>
              <div className="flex w-full sm:w-auto gap-3 sm:gap-4">
                <a href="#projects" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-2.5 sm:py-3.5 text-[0.75rem] sm:text-[0.9rem] font-bold rounded-full uppercase tracking-[1px] sm:tracking-[2px] font-heading cursor-pointer bg-custom-accent text-black border border-custom-accent shadow-accent-glow hover:bg-transparent hover:text-custom-accent hover:shadow-accent-glow-hover transition-all duration-300">
                  My Works
                </a>
                <a
                  href={resumeData.resumeUrl}
                  download
                  className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-2.5 sm:py-3.5 text-[0.75rem] sm:text-[0.9rem] font-bold rounded-full uppercase tracking-[1px] sm:tracking-[2px] font-heading cursor-pointer bg-white/5 text-custom-accent border border-custom-accent/20 hover:bg-custom-accent hover:text-black hover:border-custom-accent transition-all duration-400"
                >
                  My Resume
                </a>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="hidden md:block h-[1px] w-12 bg-white/10"></div>
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
            </div>
          </div>

          <div className="w-full hidden lg:block h-full min-h-[400px] flex items-center justify-center animate-fadeIn [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
             <TechShowcase />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10 animate-fadeIn [animation-delay:0.6s]">
          <div className="max-w-[600px] w-full">
            <p className="mb-[15px] font-heading text-[0.8rem] sm:text-[1.3rem] font-semibold tracking-[0.5px] text-custom-main">
              <span className="text-custom-accent">&lt;</span> {heroData.subtitle} <span className="text-custom-accent">/&gt;</span>
            </p>

            <p className="mb-0 text-[1rem] sm:text-[1.15rem] leading-[1.7] text-custom-muted">
                {heroData.description}
            </p>
          </div>
          <div className='flex flex-col block md:hidden  w-full gap-6 sm:gap-8 items-start  mb-4 md:mb-0   w-full'>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden md:block h-[1px] w-12 bg-white/10"></div>
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
            <div className="flex  w-full sm:w-auto items-start gap-3 sm:gap-4">
              <a href="#projects" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-2.5 sm:py-3.5 text-[0.75rem] sm:text-[0.9rem] font-bold rounded-full uppercase tracking-[1px] sm:tracking-[2px] font-heading cursor-pointer bg-custom-accent text-black border border-custom-accent shadow-accent-glow hover:bg-transparent hover:text-custom-accent hover:shadow-accent-glow-hover transition-all duration-300">
                My Works
              </a>
              <a
                href={resumeData.resumeUrl}
                download
                className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-2.5 sm:py-3.5 text-[0.75rem] sm:text-[0.9rem] font-bold rounded-full uppercase tracking-[1px] sm:tracking-[2px] font-heading cursor-pointer bg-white/5 text-custom-accent border border-custom-accent/20 hover:bg-custom-accent hover:text-black hover:border-custom-accent transition-all duration-400"
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

export default Hero;
