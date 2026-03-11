import React from 'react'
import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}) {
  return (
    <section className={cn(
      "w-full text-custom-main",
      "py-16 sm:py-24 px-0 overflow-hidden",
      className
    )}>
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-12 text-center sm:gap-16">
        <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out flex flex-col items-center px-4 sm:px-8">
          <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// TESTIMONIALS</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase mb-6 tracking-tight">
            {title.split(' ').map((word, i, arr) => (
              i === arr.length - 1 ? <span key={i} className="text-custom-accent">{word}.</span> : `${word} `
            ))}
          </h2>
          <div className="w-[80px] h-[4px] bg-custom-accent shadow-accent-glow mx-auto mb-8"></div>
          <p className="text-md max-w-[600px] font-medium text-custom-muted opacity-80 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out delay-200 relative flex w-full flex-col items-center justify-center">
          {/* Marquee Container */}
          <div 
            className="group flex overflow-hidden p-4 w-full" 
            style={{ 
              '--gap': '1.5rem', 
              '--duration': '30s',
              gap: 'var(--gap)'
            }}
          >
            {/* 
                For the marquee to work correctly with CSS transform: translateX(-100%), 
                the moving container must contain EXACTLY the distance it needs to travel.
                We use two identical blocks.
            */}
            <div className="flex shrink-0 justify-around animate-marquee flex-row min-w-full group-hover:[animation-play-state:paused]" style={{ gap: 'var(--gap)' }}>
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set1-${i}`}
                  {...testimonial}
                />
              ))}
              {/* If testimonials count is small, we repeat them to fill the space better */}
              {testimonials.length < 5 && testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set1-dup-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
            
            <div className="flex shrink-0 justify-around animate-marquee flex-row min-w-full group-hover:[animation-play-state:paused]" aria-hidden="true" style={{ gap: 'var(--gap)' }}>
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set2-${i}`}
                  {...testimonial}
                />
              ))}
              {testimonials.length < 5 && testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set2-dup-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          {/* Gradients to mask the edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-custom-bg sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-custom-bg sm:block z-10" />
        </div>
      </div>
    </section>
  )
}
