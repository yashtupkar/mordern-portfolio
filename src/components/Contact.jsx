import React, { useState } from 'react';
import { heroData, contactData } from '../data/portfolioData';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9cc8bab0-622a-4580-a9ba-24250d128d84");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSubmitted(true);
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section id="connect" className="relative px-[5%] sm:px-[10%] py-[60px] sm:py-[100px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Info */}
        <div className="fade-in-scroll opacity-0 translate-y-[20px] transition-all duration-600 ease-out">
          <span className="block text-custom-accent font-heading text-xs font-bold tracking-[4px] uppercase mb-4">// CONTACT</span>
          <h2 className="font-heading text-[clamp(1.6rem,5vw,2.8rem)] font-black leading-tight mb-6 tracking-tight text-custom-main uppercase">
            Let's <br /> 
            <span className="relative inline-block text-transparent [-webkit-text-stroke:1px_var(--color-custom-outline)] hover:text-custom-hero hover:[-webkit-text-stroke:1px_transparent] transition-all duration-400 cursor-pointer">
              Collaborate<span className="text-custom-accent">.</span>
            </span>
          </h2>
          <p className="text-custom-muted text-[1rem] sm:text-[1.05rem] max-w-[450px] mb-8 sm:mb-10 leading-relaxed opacity-80">
            Have a project in mind? Let's make it happen! Drop a message, and I'll connect with you soon.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <a href="#" className="group flex items-center gap-4 p-4 bg-white/3 border border-white/5 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:border-custom-accent/30">
              <span className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-xl text-custom-main group-hover:bg-custom-accent group-hover:text-black transition-all duration-300">
                <svg width="18" height="18" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><polyline points="16 2 16 6"></polyline><polyline points="8 2 8 6"></polyline><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <div className="overflow-hidden">
                <span className="block text-[0.65rem] sm:text-[0.7rem] font-bold text-custom-accent uppercase tracking-wider mb-0.5">Meeting</span>
                <span className="text-[0.9rem] sm:text-[1rem] font-bold text-custom-main truncate block">Book a Slot</span>
              </div>
            </a>
            <a href={`mailto:${contactData.email}`} className="group flex items-center gap-4 p-4 bg-white/3 border border-white/5 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:border-custom-accent/30">
              <span className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-xl text-custom-main group-hover:bg-custom-accent group-hover:text-black transition-all duration-300">
                <svg width="18" height="18" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <div className="overflow-hidden">
                <span className="block text-[0.65rem] sm:text-[0.7rem] font-bold text-custom-accent uppercase tracking-wider mb-0.5">Email</span>
                <span className="text-[0.9rem] sm:text-[1rem] font-bold text-custom-main truncate block">{contactData.email}</span>
              </div>
            </a>
          </div>

          <div className="flex gap-2.5 sm:gap-3.5 mb-8 lg:mb-0">
            {heroData.socials.map((social) => (
              <a 
                key={social.label}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative flex h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-custom-muted transition-all duration-500 hover:translate-y-[-5px] hover:border-custom-accent hover:text-custom-accent hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(122,242,152,0.2)]" 
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-custom-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src={`https://api.iconify.design/${social.icon}`} alt={social.label} width={social.size - 2} height={social.size - 2} className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg] brightness-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form / Success Message */}
        <div className="fade-in-scroll opacity-0 translate-y-[20px] transition-all duration-600 ease-out delay-100 min-h-[400px] flex items-center">
          {isSubmitted ? (
            <div className="w-full p-10 sm:p-12 bg-white/3 border border-custom-accent/20 rounded-[32px] text-center animate-fadeIn">
              <div className="w-20 h-20 bg-custom-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-custom-accent/30 shadow-accent-glow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-custom-accent">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase mb-4 tracking-tight">
                Thank You for <span className="text-custom-accent">Contacting Me!</span>
              </h3>
              <p className="text-custom-muted leading-relaxed max-w-[360px] mx-auto">
                Your message has been received. I'll get back to you as soon as possible. Let's create something extraordinary together!
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-10 text-xs font-bold text-custom-accent uppercase tracking-widest hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="w-full rounded-[24px] sm:rounded-[32px] flex flex-col gap-5 sm:gap-6" onSubmit={onSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[0.65rem] sm:text-xs font-bold text-custom-main/60 uppercase tracking-widest ml-1">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required className="bg-white/5 border border-white/10 p-3.5 sm:p-4 text-custom-main text-sm rounded-xl focus:outline-none focus:border-custom-accent/50 transition-all placeholder:text-white/30" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[0.65rem] sm:text-xs font-bold text-custom-main/60 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required className="bg-white/5 border border-white/10 p-3.5 sm:p-4 text-custom-main text-sm rounded-xl focus:outline-none focus:border-custom-accent/50 transition-all placeholder:text-white/30" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-[0.65rem] sm:text-xs font-bold text-custom-main/60 uppercase tracking-widest ml-1">Message</label>
                <textarea id="project" name="message" placeholder="Tell me about your project..." rows="4" required className="bg-white/5 border border-white/10 p-3.5 sm:p-4 text-custom-main text-sm rounded-xl focus:outline-none focus:border-custom-accent/50 transition-all placeholder:text-white/30 resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={result === "Sending...."}
                className={`bg-custom-accent text-black p-3.5 sm:p-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-accent-glow hover:bg-[#89ffab] hover:-translate-y-1 transition-all duration-300 mt-2 ${result === "Sending...." ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {result === "Sending...." ? "Working on it..." : "Send Message"}
              </button>
              {result && result !== "Sending...." && result !== "Form Submitted Successfully" && (
                <span className="text-red-400 text-xs font-bold text-center mt-2 uppercase tracking-wide">{result}</span>
              )}
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
