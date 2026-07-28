import { Building, Calendar, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="portfolio-panel" ref={sectionRef}>
      <div className="panel-content">
        <div className="mb-10">
          <h2 className="panel-title reveal">
            <span>Work</span> Experience
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <article key={`${exp.company}-${index}`} className="reveal rounded-lg border border-sky-300/10 bg-slate-800/70 p-5 sm:p-6">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">{exp.role}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm font-bold text-cyan-300">
                    <Building size={15} />
                    {exp.company}
                  </p>
                </div>
                <p className="flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-200">
                  <Calendar size={13} />
                  {exp.period}
                </p>
              </div>

              <ul className="grid gap-3 lg:grid-cols-2">
                {exp.achievements.slice().map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-300" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {exp.techStack && (
                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-700/60 pt-5">
                  {exp.techStack.slice(0, 10).map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900/70 px-3 py-1.5 text-[11px] font-bold text-slate-300">
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
