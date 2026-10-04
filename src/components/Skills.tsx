import { Code2, Database, Layers, type LucideIcon, Wrench, Sparkles, Terminal } from 'lucide-react';
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
    <section id="skills" className="portfolio-panel relative overflow-hidden" ref={sectionRef}>
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute right-10 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-sky-600/10 blur-[120px]" />

      <div className="panel-content grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Left column: Tech Radar / Visual Orbit Showcase */}
        <div className="reveal hidden min-h-[22rem] items-center justify-center lg:flex">
          <div className="relative flex h-80 w-80 items-center justify-center">
            {/* Concentric subtle radar rings */}
            <div className="skill-radar-ring absolute h-72 w-72 rounded-full border border-sky-400/15" />
            <div className="skill-radar-ring-inner absolute h-52 w-52 rounded-full border border-cyan-400/20 bg-slate-900/30 backdrop-blur-sm shadow-[0_0_50px_rgba(14,165,233,0.15)]" />
            
            {/* Center Core Hub */}
            <div className="skill-radar-core relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-sky-400/30 bg-gradient-to-br from-slate-800/80 to-slate-950/90 shadow-[0_0_30px_rgba(56,189,248,0.35)] backdrop-blur-md">
              <Terminal size={28} className="text-cyan-300" />
              <span className="mt-1 text-[11px] font-bold tracking-widest uppercase text-sky-200">Dev Stack</span>
            </div>

            {/* Orbiting Tech Badges */}
            {skills.slice(0, 4).map((group, index) => {
              const IconComponent = categoryIcons[group.category] || Code2;
              const positions = [
                'top-2 left-1/2 -translate-x-1/2',
                'bottom-2 left-1/2 -translate-x-1/2',
                'left-2 top-1/2 -translate-y-1/2',
                'right-2 top-1/2 -translate-y-1/2',
              ];

              return (
                <div
                  key={group.category}
                  className={`group absolute ${positions[index]} flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-slate-900/80 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-300/60 hover:text-white hover:shadow-[0_0_28px_rgba(34,211,238,0.5)]`}
                  title={group.category}
                >
                  <IconComponent size={22} className="transition-transform duration-300 group-hover:rotate-6" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Skill Cards */}
        <div>
          {/* Section Sub-badge */}
          <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-950/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="panel-title reveal mb-4">
            <span>Core</span> Skills & Technologies
          </h2>
          <p className="reveal mb-8 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Proficient in modern full-stack development, architecting scalable architectures, crafting intuitive UI/UX, and deploying resilient backends.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => {
              const IconComponent = categoryIcons[group.category] || Code2;

              return (
                <article
                  key={group.category}
                  className="interactive-card reveal group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-800/60 to-slate-900/70 p-5 shadow-[0_10px_30px_rgba(2,8,23,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:shadow-[0_10px_35px_rgba(14,165,233,0.18)]"
                >
                  {/* Subtle card corner glow on hover */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-cyan-500/10 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-sky-400/25 bg-slate-900/80 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-colors duration-300 group-hover:border-cyan-300/50 group-hover:text-white">
                      <IconComponent size={19} />
                    </div>
                    <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-700/60 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-sky-400/40 hover:bg-sky-950/30 hover:text-cyan-200"
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
