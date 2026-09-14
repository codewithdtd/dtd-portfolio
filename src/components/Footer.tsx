import { Github, Linkedin, Mail, MapPin, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer id="contact" className="portfolio-panel relative overflow-hidden bg-slate-950/90 pt-16 pb-12 border-t border-slate-800/80">
      {/* Dynamic ambient lighting for footer */}
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-sky-600/10 blur-[140px]" />

      <div className="panel-content min-h-fit py-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: Headline & Introduction */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Get In Touch</span>
            </div>

            <h2 className="panel-title mb-4">
              <span>Let's Build</span> Something Great
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I am open to new job opportunities, collaborations, and discussions about modern web development. Feel free to reach out via email or LinkedIn.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(14,165,233,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(14,165,233,0.6)] hover:-translate-y-0.5"
              >
                <Send size={15} />
                <span>Send a Message</span>
              </a>

              <span className="text-xs text-slate-400 font-medium">
                Typically replies within 24 hours
              </span>
            </div>
          </div>

          {/* Right: Tactile Contact Cards & Channels */}
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="interactive-card group flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-800/60 to-slate-900/80 p-5 shadow-[0_10px_30px_rgba(2,8,23,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-slate-900/80 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:border-cyan-300/50 group-hover:text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                <p className="text-sm font-semibold text-slate-100 transition-colors group-hover:text-cyan-300 sm:text-base">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-800/60 to-slate-900/80 p-5 shadow-[0_10px_30px_rgba(2,8,23,0.3)] backdrop-blur-xl">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-slate-900/80 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                <p className="text-sm font-semibold text-slate-100 sm:text-base">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/60 px-6 py-4 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Social Profiles</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/codewithdtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-300 transition-all duration-300 hover:border-sky-400/60 hover:text-cyan-300 hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-300 transition-all duration-300 hover:border-sky-400/60 hover:text-cyan-300 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <span className="text-cyan-400">React</span> & <span className="text-sky-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
