import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  // Safe extraction of social links
  // const githubUrl = 'https://github.com/codewithdtd'; // Extracted from project repository
  const linkedinUrl = personalInfo.social.linkedin;
  const emailUrl = `mailto:${personalInfo.email}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grey-950">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Moving/pulsing gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center py-20">
        
        {/* Availability Badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-grey-900/80 border border-grey-800 text-xs font-semibold uppercase tracking-wider text-grey-200 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {personalInfo.availability}
          </div>
        </div>

        {/* Developer Name */}
        <h1 className="animate-fade-in-up text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-grey-50 to-grey-300 mb-4 tracking-tight">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <p className="animate-fade-in-up text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent via-emerald-400 to-accent bg-clip-text text-transparent mb-8">
          {personalInfo.title}
        </p>

        {/* Elegant Glassmorphic Quote Card */}
        {personalInfo.tagline && (
          <div className="animate-fade-in-up max-w-3xl mx-auto mb-10 px-4">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-grey-900/40 border border-grey-800/80 backdrop-blur-md shadow-2xl">
              <span className="absolute -top-4 left-6 text-6xl text-accent/10 font-serif select-none pointer-events-none">“</span>
              <p className="text-sm sm:text-base text-grey-300 leading-relaxed italic relative z-10">
                {personalInfo.tagline.replace(/^"|"$/g, '')}
              </p>
              <span className="absolute -bottom-10 right-6 text-6xl text-accent/10 font-serif select-none pointer-events-none">”</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="#experience" 
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-grey-950 font-bold rounded-xl hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-center"
            onClick={(e) => { 
              e.preventDefault(); 
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
          >
            My Experience
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 border border-grey-700 hover:border-accent text-grey-200 hover:text-accent font-semibold rounded-xl bg-grey-900/30 backdrop-blur-sm transition-all duration-300 text-center"
            onClick={(e) => { 
              e.preventDefault(); 
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="animate-fade-in flex items-center justify-center gap-4">
          {/* {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-grey-900/60 border border-grey-800/60 text-grey-400 hover:text-accent hover:border-accent/40 transition-all duration-300" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )} */}
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-grey-900/60 border border-grey-800/60 text-grey-400 hover:text-accent hover:border-accent/40 transition-all duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}
          {emailUrl && (
            <a 
              href={emailUrl} 
              className="p-3 rounded-xl bg-grey-900/60 border border-grey-800/60 text-grey-400 hover:text-accent hover:border-accent/40 transition-all duration-300" 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 text-grey-500 hover:text-accent transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
