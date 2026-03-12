import React from 'react';
import { TestimonialsSection } from './blocks/testimonials-with-marquee';
import { testimonialsData } from '../data/portfolioData';

const Testimonials = () => {
  return (
    <TestimonialsSection
      title="Trusted by clients worldwide"
      description="See what people are saying about my work and how I've helped them bring their ideas to the web."
      testimonials={testimonialsData}
    />
  );
};

export default Testimonials;
