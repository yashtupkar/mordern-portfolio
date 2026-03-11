import React, { useEffect, useRef } from 'react';
import { resumeData } from '../data/portfolioData';
import gsap from 'gsap';

const SkillGalaxy = () => {
    const containerRef = useRef(null);
    const nodesRef = useRef([]);

    useEffect(() => {
        // Subtle floating animation for each node
        nodesRef.current.forEach((node, i) => {
            if (!node) return;
            
            const delay = i * 0.1;
            gsap.to(node, {
                y: "random(-10, 10)",
                x: "random(-10, 10)",
                rotation: "random(-5, 5)",
                duration: "random(3, 5)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: delay
            });
        });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const rect = containerRef.current.getBoundingClientRect();
            
            // Calculate relative mouse position
            const mouseX = (clientX - rect.left) / rect.width - 0.5;
            const mouseY = (clientY - rect.top) / rect.height - 0.5;

            nodesRef.current.forEach((node, i) => {
                if (!node) return;
                
                // Parallax depth effect
                const factor = (i % 4) + 2; 
                gsap.to(node, {
                    x: mouseX * (30 * factor),
                    y: mouseY * (30 * factor),
                    rotationY: mouseX * 20,
                    rotationX: -mouseY * 20,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            ref={containerRef}
            className="relative w-full py-12 sm:py-20 overflow-visible perspective-[1200px]"
        >
            {/* Ambient Background Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/[0.015] uppercase pointer-events-none select-none tracking-tighter">
                CORE STACK
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 max-w-5xl relative z-10">
                {resumeData.skills.map((skill, i) => (
                    <div 
                        key={i}
                        ref={el => nodesRef.current[i] = el}
                        className="group relative"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Glow behind the node */}
                        <div className="absolute inset-0 bg-custom-accent/0 group-hover:bg-custom-accent/10 blur-2xl rounded-full transition-all duration-500"></div>
                        
                        <div className="relative flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-full transition-all duration-500 group-hover:border-custom-accent/30 group-hover:bg-custom-accent/5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(122,242,152,0.15)] cursor-default">
                            {/* Animated Border Line */}
                            <div className="absolute top-0 left-0 w-full h-full rounded-full border border-custom-accent/0 group-hover:border-custom-accent/20 transition-all duration-700 animate-pulse"></div>
                            
                            <img 
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`} 
                                alt={skill.name}
                                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-120"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-[11px] font-black tracking-[2px] uppercase text-white/40 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                                {/* Hidden detail revealing on hover */}
                                <div className="h-0 group-hover:h-2 transition-all duration-300 overflow-hidden">
                                    <div className="w-full h-[1px] bg-custom-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Background connecting lines visualization */}
            <svg className="absolute inset-0 w-full h-full -z-10 opacity-20 pointer-events-none">
                <defs>
                    <radialGradient id="line-grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7af298" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#7af298" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="20%" cy="30%" r="100" fill="url(#line-grad)" className="animate-pulse" />
                <circle cx="80%" cy="70%" r="150" fill="url(#line-grad)" className="animate-pulse [animation-delay:1s]" />
            </svg>
        </div>
    );
};

export default SkillGalaxy;

