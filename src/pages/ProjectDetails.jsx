import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentSlide(0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-custom-main px-4">
                <h1 className="text-4xl font-heading font-black mb-4">Project Not Found</h1>
                <p className="mb-8 opacity-70">The project you are looking for does not exist.</p>
                <Link to="/" className="px-8 py-3 bg-custom-accent text-black font-bold rounded-full transition-transform hover:scale-105">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen text-custom-main font-body overflow-x-hidden">
            <Navbar />

            <main className="pt-24 sm:pt-[120px] pb-16 sm:pb-[100px] px-4 sm:px-[10%]">
                <div className="max-w-[1200px] mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 mb-6 sm:mb-10 text-white/50 hover:text-custom-accent transition-colors font-heading text-[10px] sm:text-xs font-bold tracking-widest uppercase"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1 sm:w-5 sm:h-5">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-8 sm:gap-12 lg:gap-20">
                        {/* Project Info */}
                        <div className="flex flex-col gap-4 sm:gap-5 order-2 lg:order-1">
                            <div>
                                <span className="block text-custom-accent font-heading text-[10px] sm:text-xs font-bold tracking-[3px] uppercase mb-2">// PROJECT DETAILS</span>
                                <h1 className="font-heading text-[clamp(1.5rem,5vw,2.75rem)] font-black tracking-tighter leading-tight uppercase mb-3">
                                    {project.title}<span className="text-custom-accent">.</span>
                                </h1>
                                <div className="w-[30px] sm:w-[40px] h-[2px] bg-custom-accent shadow-accent-glow mb-4"></div>
                            </div>

                            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-[90%] lg:max-w-full">
                                {project.desc}
                            </p>

                            <div className="flex flex-col gap-3">
                                <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white/50">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="bg-white/5 text-custom-accent border border-white/10 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase transition-all hover:bg-white/10 hover:border-custom-accent/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 mt-2 border-t border-white/10 flex flex-wrap gap-4">
                                {project.liveLink && (
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 sm:flex-none text-center px-5 py-2.5 sm:px-6 sm:py-3 bg-custom-accent text-black font-heading font-black text-[9px] sm:text-xs uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-custom-accent/20"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.sourceCode && (
                                    <a 
                                        href={project.sourceCode} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 sm:flex-none text-center px-5 py-2.5 sm:px-6 sm:py-3 bg-white/5 border border-white/10 text-white font-heading font-black text-[9px] sm:text-xs uppercase tracking-widest rounded-full transition-all hover:bg-white/10 hover:border-custom-accent/30"
                                    >
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative group rounded overflow-hidden border border-white/10 bg-white/3 aspect-video lg:aspect-[1.5/1]">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 "
                                    onError={(e) => { e.target.src = project.fallback; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Project Info */}
                    <div className="mt-12 sm:mt-20 flex flex-col gap-10 sm:gap-16">
                        
                        {/* Project Gallery Slider */}
                        {project.additionalImages && project.additionalImages.length > 0 && (
                            <div className="flex flex-col gap-8 sm:gap-12">
                                <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider flex items-center gap-3">
                                    <span className="w-6 sm:w-8 h-px bg-custom-accent"></span>
                                    Project Gallery
                                </h3>

                                <div className="relative group/gallery">
                                    <div className="overflow-hidden rounded border border-white/10 aspect-video lg:aspect-[1.8/1] bg-white/5 shadow-2xl">
                                        <div 
                                            className="flex transition-transform duration-700 ease-in-out h-full"
                                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                        >
                                            {project.additionalImages.map((img, i) => (
                                                <div key={i} className="min-w-full h-full relative">
                                                    <img 
                                                        src={img} 
                                                        alt={`${project.title} screenshot ${i + 1}`}
                                                        className="w-full h-full object-fit"
                                                        onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    {project.additionalImages.length > 1 && (
                                        <>
                                            <button 
                                                onClick={() => setCurrentSlide(prev => (prev - 1 + project.additionalImages.length) % project.additionalImages.length)}
                                                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14  border border-white/10 rounded-full flex items-center justify-center   transition-all bg-custom-accent text-black hover:scale-110 active:scale-95 z-10 cursor-pointer"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                            </button>
                                            <button 
                                                onClick={() => setCurrentSlide(prev => (prev + 1) % project.additionalImages.length)}
                                                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center   transition-all bg-custom-accent text-black hover:scale-110 active:scale-95 z-10 cursor-pointer"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                            </button>

                                            {/* Scroll Indicators (Dots) */}
                                            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                                                {project.additionalImages.map((_, i) => (
                                                    <button 
                                                        key={i}
                                                        onClick={() => setCurrentSlide(i)}
                                                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-custom-accent w-8 sm:w-12' : 'bg-white/20 w-4 sm:w-6 hover:bg-white/40'}`}
                                                    ></button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Overview */}
                        {project.overview && (
                            <div className="relative p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2rem] bg-white/3 border border-white/10 overflow-hidden group hover:bg-white/5 transition-colors">
                                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-custom-accent sm:w-[120px] sm:h-[120px]">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-3">
                                    <span className="w-6 sm:w-8 h-px bg-custom-accent"></span>
                                    Overview
                                </h3>
                                <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light max-w-4xl">
                                    {project.overview}
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                             {/* Key Features */}
                             {project.features && (
                                 <div className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-white/3 border border-white/10 hover:bg-white/5 transition-colors">
                                     <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider flex items-center gap-3 text-custom-accent">
                                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                                             <polyline points="20 6 9 17 4 12"></polyline>
                                         </svg>
                                         Key Features
                                     </h3>
                                     <ul className="flex flex-col gap-3 sm:gap-4">
                                         {project.features.map((feature, i) => (
                                             <li key={i} className="flex gap-3 sm:gap-4 text-white/70 group text-sm sm:text-base">
                                                 <span className="mt-2 flex-shrink-0 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-custom-accent group-hover:scale-150 transition-transform"></span>
                                                 <span className="leading-relaxed font-light">{feature}</span>
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             )}

                             {/* Role & Responsibility */}
                             {project.role && (
                                 <div className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-white/3 border border-white/10 hover:bg-white/5 transition-colors">
                                     <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider flex items-center gap-3 text-custom-accent">
                                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                             <circle cx="12" cy="7" r="4"></circle>
                                         </svg>
                                         Role & Contribution
                                     </h3>
                                     <ul className="flex flex-col gap-3 sm:gap-4">
                                         {project.role.map((item, i) => (
                                             <li key={i} className="flex gap-3 sm:gap-4 text-white/70 group text-sm sm:text-base">
                                                 <span className="mt-2 flex-shrink-0 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-custom-accent group-hover:scale-150 transition-transform"></span>
                                                 <span className="leading-relaxed font-light">{item}</span>
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             )}
                        </div>

                         {/* Tech Stack Detailed */}
                         {project.techstack && (
                             <div className="flex flex-col gap-8 sm:gap-10 p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2rem] bg-white/3 border border-white/10 hover:bg-white/5 transition-all">
                                 <div>
                                     <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider mb-2">Tech Stack Breakdown</h3>
                                     <div className="w-[30px] sm:w-[40px] h-[2px] bg-custom-accent opacity-50"></div>
                                 </div>
                                 
                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-10 gap-x-8 sm:gap-x-12">
                                     {project.techstack.map((item, i) => {
                                         const [category, details] = item.includes('\t') ? item.split('\t') : [item, ''];
                                         return (
                                             <div key={i} className="flex flex-col gap-2 sm:gap-3 group">
                                                 <h4 className="text-custom-accent font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                                     {category}
                                                 </h4>
                                                 <p className="text-white/80 font-medium tracking-wide text-sm sm:text-base">
                                                     {details || category}
                                                 </p>
                                             </div>
                                         );
                                     })}
                                 </div>
                             </div>
                         )}
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default ProjectDetails;
