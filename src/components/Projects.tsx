import { CheckCircle2, ExternalLink, Github, Sparkles, Layers } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectPlaceholders, projects } from '../data/portfolio';

export default function Projects() {
  const sectionRef = useScrollReveal();
  const visibleProjects = [...projects, ...projectPlaceholders];

  return (
    <section id="projects" className="portfolio-panel relative overflow-hidden" ref={sectionRef}>
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-10 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-80 w-80 rounded-full bg-sky-600/10 blur-[130px]" />

      <div className="panel-content">
        <div className="mb-12 text-center">
          <div className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-950/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Featured Works</span>
          </div>

          <h2 className="panel-title reveal">
            <span>Featured</span> Projects & Portfolio
          </h2>
          <p className="reveal mt-3 text-sm text-slate-400 max-w-xl mx-auto sm:text-base">
            Showcase of full-stack engineering, production-grade applications, and thoughtful interface architecture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const isPlaceholder = project.githubUrl === '#';

            return (
              <article
                key={`${project.title}-${index}`}
                className="interactive-card reveal group relative flex flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-800/50 to-slate-900/80 shadow-[0_12px_35px_rgba(2,8,23,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:shadow-[0_15px_40px_rgba(14,165,233,0.18)]"
              >
                {/* Visual Header Banner with Gradient Glow */}
                <div className="relative flex aspect-[16/6] items-center justify-between overflow-hidden bg-slate-950 px-6 py-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-indigo-500/10 opacity-60 transition duration-500 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-950/60 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {project.status || 'Active Build'}
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold text-white sm:text-xl tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="relative z-10 hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-slate-900/80 text-cyan-300">
                    <Layers size={18} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-5 text-sm leading-relaxed text-slate-300 sm:min-h-12">
                    {project.description}
                  </p>

                  <div className="mb-6 flex-1">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-sky-400">
                      Key Highlights & Contributions
                    </p>
                    {project.features.length > 0 ? (
                      <ul className="space-y-2.5">
                        {project.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cyan-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-3 text-xs text-slate-400">
                        Feature engineering details in progress.
                      </p>
                    )}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mb-6 flex flex-wrap gap-2 border-t border-slate-700/40 pt-4">
                    {project.techStack.slice().map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-700/50 bg-slate-950/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors group-hover:border-sky-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-1">
                    {!isPlaceholder && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-bold text-slate-200 transition-all hover:border-sky-400/50 hover:bg-slate-800 hover:text-white"
                      >
                        <Github size={14} />
                        Repository
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
