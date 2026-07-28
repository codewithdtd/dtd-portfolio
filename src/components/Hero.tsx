import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import meImg from '../data/avt.jpg';

export default function Hero() {
  const linkedinUrl = personalInfo.social.linkedin;
  const emailUrl = `mailto:${personalInfo.email}`;

  return (
    <section id="home" className="portfolio-panel">
      <div className="panel-content flex items-center justify-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-7 h-36 w-36 overflow-hidden rounded-full border border-sky-300/20 bg-slate-800 shadow-[0_0_42px_rgba(56,189,248,0.5)]">
            <img src={meImg} alt={personalInfo.name} className="h-full w-full object-cover" />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-sky-300">
            {personalInfo.availability}
          </p>
          <h1 className="mb-4 text-5xl font-black tracking-normal text-white sm:text-6xl">
            <span className="text-sky-400">{personalInfo.name}</span>
          </h1>
          <p className="mb-7 text-xl text-slate-300 sm:text-2xl">
            I'm a <span className="text-cyan-300">{personalInfo.title}</span>
          </p>
          <p className="mb-9 max-w-xl text-sm leading-7 text-slate-300 sm:text-base text-justify">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 text-sm font-bold text-white shadow-[0_0_24px_rgba(14,165,233,0.4)] transition hover:scale-[1.02]"
            >
              View My Work
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
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
