import { MapPin, Mail, Calendar, Sparkles, UserCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';
import meImg from '../data/avt.jpg';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="portfolio-panel relative overflow-hidden py-24" ref={sectionRef}>
      {/* Dynamic ambient backdrops */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full bg-sky-600/10 blur-[140px]" />

      <div className="panel-content min-h-fit">
        <div className="mb-12 text-center lg:text-left">
          <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-950/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Introduction</span>
          </div>
          <h2 className="panel-title reveal">
            <span>About</span> Me & Vision
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Photo Showcase */}
          <div className="reveal flex justify-center">
            <div className="relative w-64 sm:w-72 md:w-80">
              {/* Glowing back aura */}
              <div className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 opacity-25 blur-2xl transition duration-500" />
              
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

          {/* Bio & Details Grid */}
          <div className="space-y-6">
            <div className="reveal rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-800/50 to-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(2,8,23,0.3)]">
              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                {personalInfo.bio}
              </p>
            </div>

            {/* Quick Meta Cards */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md transition-colors hover:border-sky-400/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/20 bg-slate-800 text-cyan-300 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-100">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md transition-colors hover:border-sky-400/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/20 bg-slate-800 text-cyan-300 shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-slate-100 truncate max-w-[170px] sm:max-w-none">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md transition-colors hover:border-sky-400/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/20 bg-slate-800 text-cyan-300 shadow-sm">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Experience</p>
                  <p className="text-sm font-semibold text-slate-100">{personalInfo.yearsExperience}+ years</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md transition-colors hover:border-sky-400/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/20 bg-slate-800 text-emerald-400 shadow-sm">
                  <UserCheck size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Status</p>
                  <p className="text-sm font-semibold text-emerald-300">{personalInfo.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
