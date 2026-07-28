import { Code2, Database, Layers, type LucideIcon, Wrench } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/portfolio';

const categoryIcons: Record<string, LucideIcon> = {
  'Programming Languages': Code2,
  'Frameworks & Technologies': Layers,
  'Databases & Cloud': Database,
  'Tools & Platforms': Wrench,
};

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="portfolio-panel" ref={sectionRef}>
      <div className="panel-content grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="reveal hidden min-h-80 items-center justify-center lg:flex">
          <div className="relative h-72 w-72">
            <div className="absolute left-1/2 top-1/2 h-28 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-slate-800/70 shadow-[0_0_60px_rgba(14,165,233,0.28)]" />
            {skills.slice(0, 4).map((group, index) => {
              const IconComponent = categoryIcons[group.category] || Code2;
              const positions = ['left-16 top-4', 'right-10 top-14', 'left-4 top-28', 'right-20 bottom-6'];

              return (
                <div
                  key={group.category}
                  className={`absolute ${positions[index]} flex h-16 w-16 items-center justify-center rounded-full border border-sky-300/15 bg-slate-800 text-cyan-300 shadow-[0_0_22px_rgba(56,189,248,0.38)]`}
                >
                  <IconComponent size={28} />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="panel-title reveal mb-4">
            <span>My</span> Skills
          </h2>
          <p className="reveal mb-8 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            I build responsive full-stack applications with React, Vue, Node.js, Laravel, and production-oriented database and cloud workflows.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => {
              const IconComponent = categoryIcons[group.category] || Code2;

              return (
                <article
                  key={group.category}
                  className="interactive-card reveal rounded-lg border border-sky-300/10 bg-slate-800/70 p-5 shadow-[0_12px_30px_rgba(2,8,23,0.18)] hover:border-cyan-300/35"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-900/70 text-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.3)]">
                      <IconComponent size={21} />
                    </div>
                    <h3 className="text-base font-black leading-5 text-white">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-sky-300/10 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
