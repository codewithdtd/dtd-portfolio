import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import meImg from '../data/avt.jpg';

export default function Hero() {
  const linkedinUrl = personalInfo.social.linkedin;
  const emailUrl = `mailto:${personalInfo.email}`;

  return (
    <section id="home" className="portfolio-panel">
      <div className="panel-content grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="hero-copy order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-sky-300">
            {personalInfo.availability}
          </p>
          <h1 className="mb-4 text-5xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl">
            <span className="text-sky-400">{personalInfo.name}</span>
          </h1>
          <p className="mb-7 text-xl text-slate-300 sm:text-2xl">
            Junior <span className="text-cyan-300">{personalInfo.title}</span>
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 text-sm font-bold text-white shadow-[0_0_24px_rgba(14,165,233,0.4)] transition hover:scale-[1.02]"
            >
              View My Work
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/15 bg-slate-900/50 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            )}
            {emailUrl && (
              <a
                href={emailUrl}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/15 bg-slate-900/50 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-200"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="hero-float relative h-[22rem] w-full max-w-sm sm:h-[28rem] sm:max-w-md lg:h-[34rem] lg:max-w-lg">
            <div className="absolute inset-x-10 top-8 h-72 rounded-full border border-sky-300/15 shadow-[0_0_70px_rgba(56,189,248,0.18)] sm:h-96" />
            <div className="absolute right-0 top-8 hidden h-72 w-72 rounded-full border border-cyan-300/15 sm:block" />
            <div className="ambient-dot absolute left-10 top-10 h-4 w-4 rounded-full bg-cyan-300/25 shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
            <div className="ambient-dot absolute right-8 top-24 h-6 w-6 rounded-full border border-cyan-300/30 bg-slate-900/50 shadow-[0_0_22px_rgba(34,211,238,0.35)] [animation-delay:0.7s]" />
            <div className="ambient-dot absolute bottom-20 left-5 h-7 w-7 rounded-full border border-sky-300/25 bg-slate-900/60 shadow-[0_0_24px_rgba(56,189,248,0.4)] [animation-delay:1.2s]" />

            <div className="absolute right-6 top-10 hidden w-72 space-y-3 sm:block">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="hero-line ml-auto h-px rounded-full bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
                  style={{ width: `${72 + index * 8}px` }}
                />
              ))}
            </div>

            <div className="absolute inset-x-6 bottom-0 top-0 overflow-hidden rounded-[2rem] border border-sky-300/15 bg-slate-800/40 shadow-[0_0_44px_rgba(56,189,248,0.25)]">
              <img src={meImg} alt={personalInfo.name} className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <button
          onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-sky-400 hover:text-white"
          aria-label="Scroll down"
        >
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  );
}
