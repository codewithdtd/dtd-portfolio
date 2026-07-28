import { CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectPlaceholders, projects } from '../data/portfolio';

export default function Projects() {
  const sectionRef = useScrollReveal();
  const visibleProjects = [...projects, ...projectPlaceholders];

  return (
    <section id="projects" className="portfolio-panel" ref={sectionRef}>
      <div className="panel-content">
        <div className="mb-9 text-center">
          <h2 className="panel-title reveal">
            <span>My</span> Portfolio
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const isPlaceholder = project.githubUrl === '#';

            return (
              <article
                key={`${project.title}-${index}`}
                className="interactive-card reveal overflow-hidden rounded-lg border border-sky-300/10 bg-slate-800/70 shadow-[0_12px_30px_rgba(2,8,23,0.18)] hover:border-cyan-300/40"
              >
                <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.22),transparent_45%,rgba(34,211,238,0.14))]" />
                  <div className="relative z-10 w-full px-5">
                    <p className="mb-2 text-[11px] font-black uppercase text-white">{project.status || 'Build Complete'}</p>
                    <p className="max-w-[25rem] text-sm font-black leading-5 text-slate-100">{project.title}</p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-4 min-h-12 text-sm leading-6 text-slate-400">{project.description}</p>

                  <div className="mb-5">
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">My contributions</p>
                    {project.features.length > 0 ? (
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cyan-300" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="rounded-lg border border-cyan-300/10 bg-cyan-300/5 px-3 py-2 text-xs leading-5 text-slate-400">
                        Contribution details needed.
                      </p>
                    )}
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.techStack.slice().map((tech) => (
                      <span key={tech} className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {!isPlaceholder && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 transition hover:text-cyan-300"
                      >
                        <Github size={14} />
                        Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 transition hover:text-cyan-300"
                      >
                        <ExternalLink size={14} />
                        Demo
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
