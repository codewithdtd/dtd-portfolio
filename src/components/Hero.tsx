import { ArrowDown, Linkedin, Mail, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import meImg from '../data/avt.jpg';

export default function Hero() {
  const linkedinUrl = personalInfo.social.linkedin;
  const emailUrl = `mailto:${personalInfo.email}`;

  return (
    <section id="home" className="portfolio-panel relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-sky-600/15 blur-[140px]" />

      <div className="panel-content grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left column: Hero Text & Call to Actions */}
        <div className="hero-copy order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sky-400/25 bg-sky-950/40 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-sky-200">
              {personalInfo.availability}
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mb-6 text-xl font-medium text-slate-300 sm:text-2xl">
            Junior{' '}
            <span className="inline-block rounded-md bg-sky-400/10 px-2.5 py-0.5 font-semibold text-cyan-300 border border-sky-400/20">
              {personalInfo.title}
            </span>
          </p>

          <p className="mb-8 text-base leading-relaxed text-slate-400 sm:text-lg max-w-xl">
            {personalInfo.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(14,165,233,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(14,165,233,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={16} className="transition-transform group-hover:rotate-12" />
              <span>Explore Projects</span>
            </a>

            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:bg-slate-800/80 hover:text-white hover:-translate-y-0.5"
            >
              <span>View Experience</span>
              <ExternalLink size={15} className="text-slate-400" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium mr-1">Connect</span>
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-950/40 hover:text-sky-300 hover:scale-105 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="transition-transform group-hover:scale-110" />
              </a>
            )}
            {emailUrl && (
              <a
                href={emailUrl}
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-950/40 hover:text-sky-300 hover:scale-105 shadow-sm"
                aria-label="Email"
              >
                <Mail size={18} className="transition-transform group-hover:scale-110" />
              </a>
            )}
          </div>
        </div>

        {/* Right column: Visual Avatar with Glassmorphic Frame & Glow */}
        <div className="hero-visual order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="hero-float relative w-full max-w-sm sm:max-w-md lg:max-w-md">
            {/* Background Halo Ring */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 opacity-30 blur-2xl transition duration-500 group-hover:opacity-60" />

            {/* Geometric accents */}
            <div className="ambient-dot absolute -left-3 -top-3 h-5 w-5 rounded-full bg-cyan-400/40 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
            <div className="ambient-dot absolute -bottom-3 right-6 h-6 w-6 rounded-full border border-sky-400/40 bg-slate-900/80 shadow-[0_0_20px_rgba(56,189,248,0.5)] [animation-delay:1.2s]" />

            {/* Main Avatar Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-sky-400/20 bg-gradient-to-b from-slate-800/60 to-slate-950/80 p-2 shadow-2xl backdrop-blur-xl">
              <div className="h-full w-full overflow-hidden rounded-[1.6rem]">
                <img
                  src={meImg}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <button
          onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-sky-300"
          aria-label="Scroll down"
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 group-hover:text-sky-300">Scroll</span>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md transition-all group-hover:border-sky-400/40 group-hover:bg-sky-950/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
