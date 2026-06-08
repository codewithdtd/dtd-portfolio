import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-grey-800/60 border border-grey-700/50 text-sm text-grey-200 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {personalInfo.availability}
          </div>
        </div>

        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-grey-50 mb-6 tracking-tight">
          {personalInfo.name}
        </h1>

        <p className="animate-fade-in-up text-xl sm:text-2xl md:text-3xl text-accent font-medium mb-6">
          {personalInfo.title}
        </p>

        <p className="animate-fade-in-up text-lg text-grey-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Contact Me
          </a>
        </div>

        <div className="animate-fade-in flex items-center justify-center gap-5">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-grey-300 hover:text-accent hover:bg-grey-800/50 transition-all" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-grey-300 hover:text-accent hover:bg-grey-800/50 transition-all" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-grey-300 hover:text-accent hover:bg-grey-800/50 transition-all" aria-label="Twitter">
            <Twitter size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 text-grey-400 hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
