export const projects = [
  {
    id: "devplex",
    title: "Devplex",
    image: "/assets/hero-img.png",
    liveLink: "https://devplex.in",
    image: "/assets/projects/devplex.png",
    additionalImages:["/assets/projects/devplex1.png","/assets/projects/devplex2.png","/assets/projects/devplex3.png"],
    fallback: "https://framerusercontent.com/images/sB2gGdW0ObzzZYTsMcU5JTcAFw.png?scale-down-to=2048&width=4800&height=3600",
    tech: ["MERN", "OpenRouter", "Redux", "React", "Node.js", "MongoDB", "Tailwind"],    
    desc: "Devplex is a full-stack developer agent that turns simple text prompts into complete web and mobile apps.",    
    overview: "Devplex helps developers build apps fast by understanding plain English descriptions and generating production-ready React/Node code. Type what you want ('e-commerce site with payments') and get a fully working app with frontend, backend, database, and deployment files in minutes. Perfect for rapid prototyping and MVP creation.",    
    role: [
    "Built complete AI agent that understands developer needs",
    "Created React frontend with real-time code streaming",
    "Developed Node.js backend with AI code generation",
    "Added login, payments, and project management features"
    ],
    techstack: ["Frontend\t	React 18, Vite, Tailwind CSS, Redux, React Router", "Backend\tNode.js, Express.js, MongoDB (Mongoose), Passport, multer", "AI & Agents\tOpenRouter API, custom streaming agent services", "Deployment\tAWS", "Utilities\tCloudinary, Brevo (email),  PayU (payment)"],
    features: [
    "Describe any app → get complete React/Node codebase instantly",
    "Real-time AI code streaming with progress tracking",
    "One-click deploy to Vercel/Netlify with all files ready",
    "Login system with free/paid token plans",
    "Admin dashboard to manage users and usage"
  ]
  },
  {
id: "movieFlix",
title: "MovieFlix",
    image: "/assets/projects/movieflix.png",
type:"mobile",
    additionalImages: [
  "/assets/projects/movieflix.png",
"/assets/projects/movieflix1.png",
"/assets/projects/movieflix2.png",

],
fallback: "https://framerusercontent.com/images/sB2gGdW0ObzzZYTsMcU5JTcAFw.png?scale-down-to=2048&width=4800&height=3600",
tech: ["React Native", "Expo", "TypeScript","JS", "Node", "Express", "MongoDB"],
    desc: "MovieFlix is a movie discovery app for seamless browsing, searching, and saving favorites across trending titles and personalized recommendations.",
    overview: "MovieFlix helps movie lovers discover new films through smooth search, trending lists, and personalized watchlists. Users can browse thousands of movies, save favorites that sync across devices, and jump straight to detailed views with cast info and trailers. The clean mobile interface feels native on both iOS and Android.",
    role: [
"Frontend built screens, navigation, and components with Expo + React Native",
"Backend implemented Express API endpoints for search, auth, and user data",
"Auth JWT-based login and registration flows",
"Integration connected app to a third-party movie API and local MongoDB"
    ],
    techstack: ["Frontend\tExpo, React Native, TypeScript, nativewind (Tailwind for RN)", "Backend\tNode.js, Express, MongoDB (Mongoose)", "Auth\tJWT, bcrypt", "Dev\tESLint, Metro bundler, Expo CLI"],

features: [
"Search movies with live suggestions and a SearchBar component",
"Movie detail pages with images, overview, and metadata",
"Trending & curated sections on the home screen",
"User auth: register/login with JWT and protected routes",
"Save/unsave favorites persisted to user profile",
"Simple backend endpoints for search, user, and auth"
]
},
  {
    id: "learnexa",
    title: "Learnexa ",
    liveLink: "https://learnexa.xyz",
    sourceCode:"https://github.com/yashtupkar/Learnexa-AI-Powered-Learning-Platform",
    additionalImages:["/assets/projects/learnexa1.png","/assets/projects/learnexa2.png", "/assets/projects/learnexa3.png","/assets/projects/learnexa4.png", "/assets/projects/learnexa5.png"],
    image: "/assets/projects/learnexa.png",
    fallback: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tech: ["MERN", "Gen AI", "NewsAPI", "YoutubeAPI"],
    desc: "AI-powered learning platform with smart quizzes, distraction-free YouTube study mode, aptitude tests, current affairs, and personalized paths for competitive exam prep.",
    overview: "Learnexa transforms learning with AI-generated quizzes, PDF-to-quiz conversion, coding challenges, distraction-free YouTube, and personalized study plans. Users get smart sessions, progress analytics, and resources for aptitude/reasoning. Plans from free to ₹499/month serve 100+ learners preparing for exams.",
     role: [
    "Full-stack development of AI features like quiz generator and personalized paths",
    "Integrated distraction-free StudyTube and current affairs modules",
    "Built dashboard, pricing tiers, and progress analytics"
    ],
    techstack: [
    "Frontend\tReact, Vite, Tailwind CSS, React Router",
    "Backend\tNode.js, Express, MongoDB",
    "AI & Tools\tOpenRouter, NEWS API, YouTube API",
    "Deployment\tVercel, Render for backend",
    "Utilities\tStripe, Email notifications"
    ],
      features: [
    "AI Quiz Generator: Instant adaptive quizzes from subjects or PDFs.",
    "Distraction-Free YouTube: Focused StudyTube for educational videos.",
    "Daily Learning Streaks for Consistency",
    "Aptitude & Reasoning Tests: Curated challenges for competitive exams.",
    "Current Affairs: Daily digests and analysis for knowledge prep.",
    "Personalized Learning: Custom paths, smart schedules, and progress insights.",
    "Coding Challenges: AI-generated problems with study planner and badges."
  ]

  },
  {
    id: "medicare",
    title: "Medicare ",
    image: "/assets/projects/medicare.png",
    overview: "🚀 Medicare-HMS is an advanced Hospital Management System (HMS) designed to enhance healthcare accessibility, efficiency, and transparency. Built using the MERN stack, it integrates AI-powered disease analysis, appointment management, and real-time hospital bed tracking to streamline hospital operations.",
    features:[
      "AI-Powered Disease Analysis: Utilizes Google Gemini to analyze symptoms and provide potential disease diagnoses, helping patients make informed decisions.",
      "Real-Time Appointment Booking: Enables patients to book, reschedule, or cancel appointments instantly, reducing wait times and improving patient satisfaction.",
      "Smart Bed Management: Provides real-time updates on hospital bed availability, helping staff allocate resources efficiently and reduce patient wait times.",
      "Secure Authentication: Implements JWT-based authentication with role-based access control to ensure secure access for patients, doctors, and administrators.",
      "Cross-Platform Compatibility: Built with React Native and Expo, ensuring seamless performance across iOS and Android devices.",
      "Scalable Architecture: Designed with a modular architecture that supports easy integration of new features and services, ensuring long-term scalability and maintainability."
    ],
    sourceCode:"https://github.com/yashtupkar/New-HMS",
    tech: ["MERN", "GenAI", "Redux", "Socket.io", "WebRTC"],
    role: ["Full‑stack development of both backend services and frontend UI", "AI integration using OpenRouter (Claude Sonnet 4.5) for code generation", "Streamed responses with real‑time parsing and token tracking", "Authentication & billing (JWT, OAuth, subscription tokens)"],
    liveLink:"https://medicare-hms.vercel.app/",
    fallback: "https://images.unsplash.com/photo-1538108149393-ceb66fa1e738?auto=format&fit=crop&q=80&w=800",
    techstack: ["Frontend\t	React 18, Vite, Tailwind CSS, Redux, React Router", "Backend\tNode.js, Express.js, MongoDB (Mongoose), Passport, Multer", "AI & Agents\tOpenRouter API, Custom streaming agent services", "Deployment\tVercel (frontend), Docker, Render (backend)", "Utilities\tCloudinary, Brevo (email), PhonePe, PayU payment APIs"],
    desc: "A smart hospital management system with real-time Socket.io for patient queue management, secure NoSQL schemas, GCP deployment with 30% performance improvement, and full unit testing coverage."
  },

{
  id: "snapnart",
  title: "Snapnart Studio Portfolio",
  image: "/assets/projects/snapnart.png",
  additionalImages: ["/assets/projects/snapnart1.png","/assets/projects/snapnart2.png","/assets/projects/snapnart3.png","/assets/projects/snapnart4.png","/assets/projects/snapnart5.png"],
  liveLink: "https://snapnartstudio-2ee4f.web.app/",
  overview: "Snapnart Studio is a modern portfolio website for professional animator Rushab Kumeria. It showcases 3D kids animations, character design, and video editing work with smooth scrolling, responsive design, and engaging animations that highlight the studio's creative services.",
  features: [
    "Animated hero section with smooth scroll-triggered effects",
    "Responsive portfolio gallery showcasing animation projects", 
    "Service pages for 3D animation, character design, video editing",
    "Client testimonial section with stats (20+ projects, 5 years experience)",
    "Contact form with social media integration (Instagram, YouTube, Fiverr)",
    "Clean navigation with Home, About, Portfolio, Services, Contact sections"
  ],
  sourceCode: "https://github.com/yashtupkar/Client-s-Portfolio",
  tech: ["React", "Tailwind", "Vite", "Firebase"],
  role: [
      "Designed modern UI/UX for animation studio portfolio",
    "Coded responsive frontend with smooth scroll animations",
    "Built portfolio gallery and service showcase sections",
    "Firebase hosting and contact form functionality"
  ],
  fallback: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  techstack: [
    "Frontend\tReact 18, Vite, Tailwind CSS, Framer Motion",
    "Hosting\tFirebase",
    "Animations\tCSS transitions, scroll-triggered effects",
    "Responsive\tMobile-first design, Tailwind breakpoints"
  ],
  desc: "Modern portfolio website for animation studio showcasing 3D kids animation, character design, and 4K video editing services with smooth animations and responsive design."
}


];

export const heroData = {
  firstName: "YASH",
  lastName: "TUPKAR",
  role: "Hey,👋 I'm a Full Stack Developer",
  subtitle: "Software Developer ⚡ MERN Stack",
  description: "A passionate MERN stack developer dedicated to building scalable web applications. Currently open to work and ready to craft innovative digital experiences.",
  socials: [
    { label: 'Instagram', icon: 'skill-icons:instagram.svg', url: 'https://www.instagram.com/_yash_tupkar_/?hl=en', size: 22 },
    { label: 'LinkedIn', icon: 'logos:linkedin-icon.svg', url: 'https://www.linkedin.com/in/yash-tupkar/', size: 22 },
    { label: 'GitHub', icon: 'mdi:github.svg?color=white', url: 'https://github.com/yashtupkar', size: 26 },
    { label: 'WhatsApp', icon: 'logos:whatsapp-icon.svg', url: 'https://wa.me/917898297769', size: 22 },
    { label: 'Email', icon: 'logos:google-gmail.svg', url: 'mailto:yashtupkar6@gmail.com', size: 22 },
  ]
};

export const contactData = {
  email: "yashtupkar6@gmail.com",
  phone: "+91 7898297769",
  location: "Bhopal, Madhya Pradesh, India",
  hireMeLink: "mailto:yashtupkar6@gmail.com"
};

export const aboutData = {
  title: "Engineering Excellence.",
  description: "I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation. You'll find me building side projects, diving into new tech stacks, or simply exploring what's next in the world of web development.",
  skillCategories: [
    { title: "Programming Languages", skills: "C, C++, JavaScript (ES6+),  UI/UX Design" },
    { title: "Frontend", skills: "ReactJS, React Native, Next.js, Redux, TailwindCSS, HTML5, CSS3" },
    { title: "Server-Side Technologies", skills: "Node.js, Express.js, SQL, MongoDB, RESTful APIs, Authentication (OAuth/JWT)" },
    { title: "Tools & Technologies", skills: "Git, GitHub, Agile (Scrum), WebRTC, Payment Gateway , Socket.io, GenAI" },
    { title: "Cloud & DevOps", skills: "AWS, GCP, Docker, CI/CD (basic)" }
  ]
};

export const resumeData = {
  about: {
    text: "I am a results-driven Computer Science graduate and passionate full-stack developer specializing in the MERN stack. I thrive on architecting scalable front-end experiences (React) and robust backend solutions (Node.js/Express). Beyond crafting seamless RESTful APIs and optimizing databases, I have hands-on expertise in deploying high-performance applications across cloud environments (AWS/GCP). My approach blends strong problem-solving skills with Agile methodologies, ensuring secure, maintainable code and exceptional digital experiences.",
    info: [
      { label: 'Name', value: 'Yash Tupkar' },
      { label: 'Nationality', value: 'India' },
      { label: 'Phone', value: '+91 7898297769' },
      { label: 'Email', value: 'yashtupkar6@gmail.com' },
      { label: 'Experience', value: '3+ Years' },
      { label: 'Languages', value: 'Hindi, English, Marathi' }
    ]
  },
  experience: [
    { date: '2023 - Present', title: 'MERN Stack Developer', company: 'Freelance / Open Source', desc: "Developing end-to-end web applications using React, Node.js, and MongoDB. Implementing secure authentication and real-time features." },
    { date: 'Dec 2024 - Jan 2026', title: 'Software Developer (Full Stack) Intern', company: 'Devplex', highlight: 'MERN Stack & GenAI', desc: "Developing Devplex An Ai Powered Website Developer" }
  ],
  education: [
    { date: '2022 – 2026', title: 'B.Tech in CS Engineering', company: 'Sagar Institute of Science Technology and Research, Bhopal', highlight: 'CGPA: 7.73/10' },
    { date: '2021 – 2022', title: '12th Grade (PCM)', company: 'Govt. Excellence Higher Secondary School Sausar', highlight: 'Percentage: 68.8%' },
    { date: '2019 – 2020', title: '10th Grade', company: 'Govt. Excellence Higher Secondary School Sausar', highlight: 'Percentage: 83.0%' }
  ],
  skills: [
    { name: 'ReactJS', icon: 'react/react-original.svg' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
    { name: 'Express', icon: 'express/express-original.svg', filter: true },
    { name: 'JS (ES6+)', icon: 'javascript/javascript-original.svg' },
    { name: 'Next.js', icon: 'simple-icons:nextdotjs', filter: true },
    { name: 'C++', icon: 'cplusplus/cplusplus-original.svg' },
    { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg' },
    { name: 'Redux', icon: 'redux/redux-original.svg' },
    { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg', filter: true },
    { name: 'GCP', icon: 'googlecloud/googlecloud-original.svg' },
    { name: 'Docker', icon: 'docker/docker-original.svg' },
    { name: 'GitHub', icon: 'github/github-original.svg', filter: true },
    { name: 'SQL', icon: 'postgresql/postgresql-original.svg' },
    { name: 'Figma', icon: 'figma/figma-original.svg' }
  ],
  awards: [
    { date: 'Nov 2025', title: 'Winner', company: 'SISTec Innovation Hackathon 2025', desc: "Achieved 1st place among 50+ teams by building an AI-driven solution for real-world problems." },
    { date: 'Feb 2025', title: 'Winner', company: 'National Science Day Project Expo', highlight: 'Innovative Healthcare software', desc: "Awarded for excellence in demonstrating a high-performance healthcare management system." }
  ],
  resumeUrl: "/assets/resume/resume.pdf"
};

export const servicesData = [
  { 
    title: "Web Development", 
    id: 1,
    description: "Building fast, scalable web apps with the MERN stack and modern tools."
  },
  { 
    title: "Website Designing", 
    id: 2,
    description: "Creating modern, eye-catching layouts that balance beauty and usability."
  },
  { 
    title: "UI/UX Development", 
    id: 3,
    description: "Crafting intuitive user journeys and pixel-perfect interface components."
  },
  { 
    title: "Mobile App Dev", 
    id: 4,
    description: "Creating cross-platform mobile apps with React Native and Expo."
  },
  { 
    title: "Frontend Development", 
    id: 5,
    description: "Developing responsive, interactive frontends with React and Tailwind CSS."
  },
  { 
    title: "Backend Development", 
    id: 6,
    description: "Architecting secure APIs and efficient database schemas for your applications."
  }
];

export const testimonialsData = [
  {
    author: {
      name: "Rushab Kumeriya",
      role: "Founder of Snapnart Studio",
      image: "/assets/testimonials/rushab-snapnart.jpg"
    },
    message: "Great work on our portfolio website! It perfectly showcases our animations. Highly impressed with your creativity and dedication!",
  },
  {
    author: {
      name: "Rajkumar Choudhary",
      role: "Software Developer",
      image: "/assets/testimonials/rajkumar-dev.png"
    },
    message: "The integration and responsive design are flawless. Yash delivered exactly what we envisioned, reducing our load times by over 60%.",
  },
   {
    author: {
      name: "Sarah Chen",
      role: "Full Stack Lead",
      image: "" // Empty image to test fallback
    },
    message: "The codebase is exceptionally clean and well-documented. It's rare to find a developer who balances speed and quality so effectively.",
  },
  {
    author: {
      name: "Bhumika Akotkar",
      role: "Web Designer",
      image: "" // Empty image to test fallback
    },
    message: "Finally, a developer who actually understands design context! The aesthetic choices and fluid animations brought our project to life.",
  },
  

 
];
