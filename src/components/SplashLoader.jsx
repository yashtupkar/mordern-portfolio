import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SplashLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);
    const counterRef = useRef(null);
    const progressLineRef = useRef(null);
    const bgTextRef = useRef(null);
    const revealBoxRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Final exit animation
                const exitTl = gsap.timeline({
                    onComplete: onComplete
                });

                exitTl.to(containerRef.current, {
                    backgroundColor: "transparent",
                    duration: 0.1
                })
                .to(revealBoxRef.current, {
                    yPercent: -100,
                    duration: 1.4,
                    ease: "expo.inOut"
                })
                .to(containerRef.current, {
                    opacity: 0,
                    duration: 0.1
                });
            }
        });

        // Ambient Background Text animation
        gsap.to(bgTextRef.current, {
            x: -200,
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "none"
        });

        // Progress counter logic
        const counterObj = { value: 0 };
        gsap.to(counterObj, {
            value: 100,
            duration: 3.5,
            ease: "power2.inOut",
            onUpdate: () => setProgress(Math.floor(counterObj.value))
        });

        // Initial states setup
        gsap.set(logoRef.current.querySelectorAll('path'), { strokeDasharray: 800, strokeDashoffset: 800 });
        gsap.set([textRef.current, counterRef.current], { opacity: 0, y: 30 });
        gsap.set(revealBoxRef.current, { yPercent: 100 });

        // Phase 1: Logo and Text Reveal
        tl.to(logoRef.current.querySelectorAll('path'), {
            strokeDashoffset: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power3.inOut"
        })
        .to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=1")
        .to(counterRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out"
        }, "-=0.8")
        .to(progressLineRef.current, {
            scaleX: 1,
            duration: 3.5,
            ease: "power2.inOut"
        }, 0)
        
        // Phase 2: Exit Preparation (Fade out content)
        .to([logoRef.current, textRef.current, counterRef.current, bgTextRef.current, progressLineRef.current], {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.in",
            delay: 0.5
        })

        // Phase 3: The Color Reveal (Filling with #7af298)
        .to(revealBoxRef.current, {
            yPercent: 0,
            duration: 1.2,
            ease: "expo.inOut"
        }, "-=0.4");

    }, [onComplete]);

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] overflow-hidden select-none"
        >
            {/* Reveal Layer (Color that slides in at the end) */}
            <div 
                ref={revealBoxRef}
                className="absolute inset-0 bg-custom-accent z-20 pointer-events-none"
            ></div>

            {/* Ambient Background Text */}
            <div 
                ref={bgTextRef}
                className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[25vw] font-heading font-black text-white/[0.015] pointer-events-none tracking-tighter"
            >
                YASH TUPKAR • FULL STACK DEVELOPER • UI ARCHITECT • CREATIVE CODER •
            </div>

            <div className="relative z-10 flex flex-col items-center gap-12">
                {/* Dynamic SVG Logo */}
                <div className="relative">
                    <svg 
                        ref={logoRef}
                        width="120" 
                        height="120" 
                        viewBox="0 0 100 100" 
                        className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_0_15px_rgba(122,242,152,0.3)]"
                    >
                        <path 
                            d="M10,20 L50,80 L90,20" 
                            stroke="#7af298" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeLinecap="round" 
                        />
                        <path 
                            d="M10,80 L50,20 L90,80" 
                            stroke="#7af298" 
                            strokeWidth="1" 
                            fill="none" 
                            strokeOpacity="0.3"
                            strokeLinecap="round" 
                        />
                    </svg>
                    <div className="absolute inset-0 bg-custom-accent/10 blur-3xl rounded-full"></div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h1 
                        ref={textRef}
                        className="font-heading text-3xl sm:text-5xl font-black tracking-[12px] text-white uppercase ml-[12px]"
                    >
                        YASH<span className="text-custom-accent">TUPKAR</span>
                    </h1>
                    
                    <div 
                        ref={counterRef}
                        className="mt-6 flex flex-col items-center gap-3"
                    >
                        <div className="flex items-end gap-1">
                            <span className="font-heading text-5xl sm:text-7xl font-black text-white/5 tabular-nums leading-none">
                                {progress.toString().padStart(3, '0')}
                            </span>
                            <span className="text-custom-accent font-black text-xl mb-1">%</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="block text-[9px] tracking-[6px] uppercase text-white/40 font-bold animate-pulse">
                                System Initialization
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Bar (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/[0.03]">
                <div 
                    ref={progressLineRef}
                    className="h-full bg-custom-accent origin-left scale-x-0 shadow-[0_0_10px_#7af298]"
                ></div>
            </div>

            {/* Grid Overlay for high-tech feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#7af298_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
    );
};

export default SplashLoader;
