export const projects = [
  {
    id: "devplex",
    title: "Devplex",
    image: "/assets/hero-img.png",
    liveLink: "https://devplex.in",
    image: "/assets/projects/devplex.png",
    additionalImages:["/assets/projects/devplex1.png","/assets/projects/devplex2.png","/assets/projects/devplex3.png"],
    fallback: "https://framerusercontent.com/images/sB2gGdW0ObzzZYTsMcU5JTcAFw.png?scale-down-to=2048&width=4800&height=3600",
    tech: ["MERN", "GenAI", "Redux"],
    desc: "A SaaS platform with a responsive ReactJS UI and Node.js/Express backend, featuring optimized MongoDB queries, lazy loading, reusable components, and cloud deployment on AWS with CI/CD pipelines.",
    overview: "Devplex AI is an AI-powered full‑stack MVP generator that translates text prompts into production‑ready web and mobile applications. Built as a monorepo, it seamlessly combines a React/Vite frontend and an Express/MongoDB backend, with streaming AI code generation at its core. The aim is rapid prototyping‑and‑deployment: users type a description and get a scaffolded app in under a minute.",
    role: ["Full‑stack development of both backend services and frontend UI", "AI integration using OpenRouter (Claude Sonnet 4.5) for code generation", "Streamed responses with real‑time parsing and token tracking", "Authentication & billing (JWT, OAuth, subscription tokens)"],
    techstack: ["Frontend	React 18, Vite, Tailwind CSS, Redux, React Router", "Backend	Node.js, Express.js, MongoDB (Mongoose), Passport, multer", "AI & Agents	OpenRouter API, custom streaming agent services", "Deployment	Vercel (frontend), Docker & Heroku/Azure (backend)", "Utilities	Cloudinary, Brevo (email), PhonePe/PayU payment APIs"],
    features: ["Natural‑language to code: generate new projects or enhance existing code based on prompts.",
      "Token management: tracks per‑user OpenRouter usage and enforces free‑tier limits.",
      "Auth & subscription flows: JWT + OAuth, plus free/paid token quotas.",
      "Web‑cloning & prompt enhancement: scrape sites, clone layouts, and refine user prompts.",
      "Admin dashboard: coupon management, token usage logs, service health monitoring."
    ]
  },
  {
    id: "learnexa",
    title: "Learnexa ",
    liveLink: "https://learnexa.xyz",
    additionalImages:["/assets/projects/learnexa1.png","/assets/projects/learnexa2.png", "/assets/projects/learnexa3.png","/assets/projects/learnexa4.png", "/assets/projects/learnexa5.png"],
    image: "/assets/projects/learnexa.png",
    fallback: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tech: ["MERN", "Gen AI", "NewsAPI", "YoutubeAPI"],
    desc: "An AI-powered interview simulator with secure payment gateway, RESTful API integration, JWT authentication, and OWASP security practices — built collaboratively using Agile methodology."
  },
  {
    id: "medicare",
    title: "Medicare ",
    image: "/assets/projects/medicare.png",
    liveLink:"https://medicare-hms.vercel.app/",
    fallback: "https://images.unsplash.com/photo-1538108149393-ceb66fa1e738?auto=format&fit=crop&q=80&w=800",
    tech: ["MERN", "GenAI", "Redux", "Socket.io"],
    desc: "A smart hospital management system with real-time Socket.io for patient queue management, secure NoSQL schemas, GCP deployment with 30% performance improvement, and full unit testing coverage."
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
  { title: "Web Development", id: 1 },
  { title: "Website Designing", id: 2 },
  { title: "UI/UX Development", id: 3 },
  { title: "Frontend Development", id: 4 },
  { title: "Backend Development", id: 5 }
];
