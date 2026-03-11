import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    // Re-initialize Intersection Observer for animations
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    const faders = document.querySelectorAll('.fade-in-scroll');
    const sliders = document.querySelectorAll('.slide-up-scroll');

    faders.forEach(fader => appearOnScroll.observe(fader));
    sliders.forEach(slider => appearOnScroll.observe(slider));

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in full-stack web development, creating responsive, user-friendly, and highly functional web applications using modern technologies like React, Node.js, and MongoDB."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple landing page might take a week, while a full-scale web application could take several months. I work closely with clients to establish realistic deadlines."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, absolutely! I am comfortable working across different time zones and use tools like Slack, Zoom, and Notion to ensure smooth communication and collaboration."
    },
    {
      question: "What is your pricing structure?",
      answer: "Pricing is typically project-based, tailored to your specific requirements and budget. After our initial consultation to understand your needs, I'll provide a detailed proposal and quote."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-body text-custom-main">
      <Navbar />
      
      <main className="pt-[20px] sm:pt-[20px] pb-[60px] sm:pb-[100px]">
        {/* Contact Section Component */}
        <Contact />

        {/* Additional Content: FAQS */}
        <div className="px-[5%] sm:px-[10%] mt-20 max-w-[1400px] mx-auto">
          <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out text-center mb-16">
             <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// FAQ</span>
             <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase mb-6 tracking-tight">
               Common <span className="text-custom-accent">Questions.</span>
             </h2>
             <div className="w-[80px] h-[4px] bg-custom-accent shadow-accent-glow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out bg-white/3 border border-white/5 p-6 sm:p-8 rounded-2xl hover:border-custom-accent/30 transition-all group">
                <div className="flex gap-4 items-start mb-4">
                  <span className="text-custom-accent font-heading text-xl font-black mt-1">Q.</span>
                  <h3 className="font-heading text-lg text-white font-bold group-hover:text-custom-accent transition-colors">{faq.question}</h3>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-white/20 font-heading text-xl font-black mt-1">A.</span>
                  <p className="text-custom-muted text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Content: Location/Availability */}
        <div className="px-[5%] sm:px-[10%] mt-24 max-w-[1400px] mx-auto">
            <div className="fade-in-scroll opacity-0 translate-y-[30px] transition-all duration-600 ease-out bg-custom-accent/5 border border-custom-accent/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-custom-accent/20 rounded-full blur-[50px]"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-custom-accent/20 rounded-full blur-[50px]"></div>
                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-4 relative z-10">Current Availability</h3>
                <p className="text-custom-muted mb-8 max-w-2xl mx-auto relative z-10">
                    I am currently accepting new freelance projects and open to full-time remote opportunities. My timezone is IST (Indian Standard Time), but I am flexible with overlapping hours for global teams.
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 relative z-10">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Available for work</span>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
