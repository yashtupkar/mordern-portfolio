import React, { useState } from 'react';
import { resumeData } from '../data/portfolioData';

const TechShowcase = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Limit to 15 skills for a clean 5x3 grid on desktop
    const displaySkills = resumeData.skills.slice(0, 15);

    return (
        <div className="relative  w-full mb-2 h-[400px] flex items-center justify-center">
            {/* Central Glow Ambient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-custom-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            {/* The Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 relative z-10 w-full max-w-[400px]">
                {displaySkills.map((skill, index) => {
                    const isHovered = hoveredIndex === index;
                    const isDimmed = hoveredIndex !== null && !isHovered;
                    
                    return (
                        <div 
                            key={skill.name}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`relative aspect-square flex items-center justify-center rounded-2xl border transition-all duration-500 cursor-crosshair
                                ${isHovered ? 'bg-[#111] border-custom-accent shadow-[0_0_30px_rgba(122,242,152,0.3)] scale-[1.2] z-30' : 'bg-white/[0.02] border-white/5'}
                                ${isDimmed ? 'opacity-30 scale-90 blur-[1px]' : 'opacity-100'}
                            `}
                        >
                            <img 
                                src={skill.icon.includes('/') 
                                    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}` 
                                    : `https://api.iconify.design/${skill.icon.replace(':', '/')}.svg?color=${skill.filter ? '%23ffffff' : '%237af298'}`
                                } 
                                alt={skill.name}
                                className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-500 drop-shadow-lg
                                    ${isHovered ? 'scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]' : ''}
                                    ${skill.filter ? 'brightness-0 invert' : ''}
                                `}
                                onError={(e) => { 
                                    if (skill.icon.includes('/')) {
                                        // Try simple-icons via Iconify as fallback
                                        const fallbackName = skill.name.toLowerCase().replace(/[\s.+-]/g, '');
                                        e.target.src = `https://api.iconify.design/simple-icons:${fallbackName}.svg?color=%23ffffff`;
                                    } else {
                                        e.target.style.display = 'none';
                                    }
                                }}
                            />
                            
                            {/* Hover label tooltip */}
                            <div className={`absolute -bottom-8 sm:-bottom-10 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-custom-accent/30 text-custom-accent text-[9px] sm:text-xs font-bold tracking-[2px] rounded uppercase whitespace-nowrap transition-all duration-300 shadow-xl pointer-events-none
                                ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 hidden'}
                            `}>
                                {skill.name}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default TechShowcase;
