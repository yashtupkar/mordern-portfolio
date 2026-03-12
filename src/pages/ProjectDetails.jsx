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

                    <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-20">
                        {/* Project Info */}
                        <div className="flex flex-col gap-6 order-2 lg:order-1">
                            <div>
                                <span className="block text-custom-accent font-heading text-[10px] sm:text-xs font-bold tracking-[4px] uppercase mb-3">// PROJECT CASE STUDY</span>
                                <h1 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-black tracking-tighter leading-[0.9] uppercase mb-4">
                                    {project.title}<span className="text-custom-accent">.</span>
                                </h1>
                                <div className="w-[40px] h-[3px] bg-custom-accent shadow-[0_0_15px_#7af298] mb-6"></div>
                            </div>

                            <p className="text-sm sm:text-lg text-white/60 leading-relaxed font-light max-w-[95%]">
                                {project.desc}
                            </p>

                            <div className="flex flex-col gap-3">
                                <h4 className="ml-1 font-heading text-[12px] font-bold uppercase tracking-[0.3em] text-white/60 flex items-center gap-3">
                                    CORE STACK
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="  px-3 py-1.5 rounded-xl text-[9px] sm:text-[12px]  font-bold uppercase tracking-widest  text-custom-accent bg-white/10 border-custom-accent/20 transition-all cursor-default backdrop-blur-sm">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 mt-4 border-t border-white/5 flex flex-wrap gap-5">
                                {project.liveLink && (
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 sm:flex-none text-center px-8 py-4 bg-custom-accent text-black font-heading font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-custom-accent/20 flex items-center justify-center gap-2 group/btn"
                                    >
                                        Live Preview
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </a>
                                )}
                                {project.sourceCode && (
                                    <a 
                                        href={project.sourceCode} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 sm:flex-none text-center px-8 py-4 bg-white/5 border border-white/10 text-white font-heading font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all hover:bg-white/10 hover:border-custom-accent/30 flex items-center justify-center gap-2 group/btn"
                                    >
                                        Source Code
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover/btn:opacity-100 transition-opacity"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
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
                                    className="w-full h-full object-fit transition-all duration-700 "
                                    onError={(e) => { e.target.src = project.fallback; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Project Info */}
                    <div className="mt-12 sm:mt-20 flex flex-col gap-10 sm:gap-16">

                        {/* Gallery Section */}
                        {project.additionalImages && project.additionalImages.length > 0 && (
                            <div className="flex flex-col gap-12 sm:gap-16">
                                <div className="flex flex-col items-center text-center gap-4">
                                    <span className="text-custom-accent font-heading text-[10px] uppercase tracking-[6px] font-bold">// VISUAL EXPLORATION</span>
                                    <h3 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none">
                                        Interface Design<span className="relative ml-2 inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer"> Showcase.</span>
                                    </h3>
                                </div>

                                <div className="relative group/gallery">
                                    <div className="overflow-hidden rounded-lg border border-white/10 aspect-video lg:aspect-[1.8/1] bg-white/[0.02] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                                        <div 
                                            className="flex transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) h-full"
                                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                        >
                                            {project.additionalImages.map((img, i) => (
                                                <div key={i} className="min-w-full h-full relative overflow-hidden">
                                                    <img 
                                                        src={img} 
                                                        alt={`${project.title} screenshot ${i + 1}`}
                                                        className="w-full h-full object-fit transition-transform duration-700 "
                                                        onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Premium Navigation */}
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

                        {/* Redesigned Compact Details Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                            {/* Left Column: Overview & Tech Breakdown */}
                            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
                                {project.overview && (
                                    <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all group">
                                        <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-4 flex items-center gap-3">
                                            <span className="w-6 h-px bg-custom-accent"></span>
                                            Overview
                                        </h3>
                                        <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
                                            {project.overview}
                                        </p>
                                    </div>
                                )}

                                {project.techstack && (
                                    <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all">
                                        <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-6">Tech Breakdown</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {project.techstack.map((item, i) => {
                                                const [category, details] = item.includes('\t') ? item.split('\t') : [item, ''];
                                                return (
                                                    <div key={i} className="flex flex-col gap-1.5 group">
                                                        <h4 className="text-custom-accent font-heading text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                                            {category}
                                                        </h4>
                                                        <p className="text-white/80 font-medium text-xs sm:text-sm">
                                                            {details || category}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Features & Role */}
                            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
                                {project.features && (
                                    <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all">
                                        <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wider flex items-center gap-3 text-custom-accent mb-6">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            Key Features
                                        </h3>
                                        <ul className="flex flex-col gap-4">
                                            {project.features.slice(0, 5).map((feature, i) => (
                                                <li key={i} className="flex gap-3 text-white/60 group text-xs sm:text-sm">
                                                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-custom-accent group-hover:scale-150 transition-transform"></span>
                                                    <span className="leading-relaxed font-light">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {project.role && (
                                    <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all">
                                        <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wider flex items-center gap-3 text-custom-accent mb-6">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            Role & Contribution
                                        </h3>
                                        <ul className="flex flex-col gap-4">
                                            {project.role.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-white/60 group text-xs sm:text-sm">
                                                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-custom-accent group-hover:scale-150 transition-transform"></span>
                                                    <span className="leading-relaxed font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Discover More Projects */}
                        <div className=" pt-12  border-t border-white/5">
                            <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-10">
                                <div>
                                    <span className="text-custom-accent font-heading text-[10px] uppercase tracking-[4px] font-bold">// NEXT CHAPTERS</span>
                                    <h3 className="font-heading text-2xl sm:text-4xl font-black uppercase tracking-tighter mt-2">
                                        Discover More<span className="relative ml-2 inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">
 Projects.</span>
                                    </h3>
                                </div>
                                <Link to="/projects" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-custom-accent transition-colors flex items-center gap-2 group">
                                    View All Projects
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects
                                    .filter(p => p.id !== project.id)
                                    .slice(0, 3)
                                    .map((p) => (
                                        <Link 
                                            key={p.id} 
                                            to={`/project/${p.id}`}
                                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] aspect-[16/9] sm:aspect-[3/2]"
                                        >
                                            <img 
                                                src={p.image} 
                                                alt={p.title} 
                                                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
                                            />
                                            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                                <span className="text-custom-accent font-heading text-[8px] sm:text-[10px] uppercase tracking-[3px] font-bold mb-2">VIEW PROJECT</span>
                                                <h4 className="font-heading text-xl sm:text-3xl font-black uppercase tracking-tight group-hover:text-custom-accent transition-colors">
                                                    {p.title}.
                                                </h4>
                                            </div>
                                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer hideCTA={true} />
        </div>
    );
};

export default ProjectDetails;
