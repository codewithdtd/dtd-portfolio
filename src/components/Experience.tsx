import { Building, Calendar, CheckCircle2, Briefcase, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="portfolio-panel relative overflow-hidden" ref={sectionRef}>
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/3 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="panel-content max-w-5xl">
        <div className="mb-12">
          {/* Section badge */}
          <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-950/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Career Milestones</span>
          </div>

          <h2 className="panel-title reveal">
            <span>Work</span> Experience & Journey
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-8 before:absolute before:bottom-2 before:left-4 before:top-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-cyan-500/40 before:to-transparent sm:before:left-6">
          {experiences.map((exp, index) => (
            <article
              key={`${exp.company}-${index}`}
              className="interactive-card reveal relative ml-10 rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-800/60 to-slate-900/80 p-6 shadow-[0_10px_35px_rgba(2,8,23,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 sm:ml-14 sm:p-7"
            >
              {/* Timeline Indicator Pin */}
              <div className="absolute -left-10 top-7 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-sky-400 bg-slate-950 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.8)] sm:-left-14 sm:h-8 sm:w-8">
                <Briefcase size={14} className="text-sky-300" />
              </div>

              {/* Header */}
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight sm:text-2xl">{exp.role}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    <Building size={16} className="text-sky-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full border border-sky-400/25 bg-sky-950/40 px-3.5 py-1.5 text-xs font-semibold text-sky-200 backdrop-blur-md shadow-sm">
                  <Calendar size={13} className="text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements bullet list */}
              <ul className="grid gap-3 lg:grid-cols-2">
                {exp.achievements.slice().map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              {exp.techStack && (
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-700/50 pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-1">Stack:</span>
                  {exp.techStack.slice(0, 10).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-700/60 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-sky-400/40 hover:text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
