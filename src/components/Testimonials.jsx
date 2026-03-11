import React from 'react';
import { TestimonialsSection } from './blocks/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emma_tech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with this developer was a game-changer for our startup. The attention to detail and clean code completely transformed our web presence.",
    href: "https://twitter.com/emma_tech"
  },
  {
    author: {
      name: "David Park",
      handle: "@daviddev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The integration and responsive design are flawless. They delivered exactly what we envisioned, reducing our load times by over 60%.",
    href: "https://twitter.com/daviddev"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofia_design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, a developer who actually understands design context! The aesthetic choices and fluid animations brought our project to life."
  },
  {
    author: {
      name: "Alex Martinez",
      handle: "@alex_fintech",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    text: "An absolute professional. They built a scalable architecture for our platform that handles thousands of users seamlessly.",
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection
      title="Trusted by clients worldwide"
      description="See what people are saying about my work and how I've helped them bring their ideas to the web."
      testimonials={testimonials}
    />
  );
};

export default Testimonials;
