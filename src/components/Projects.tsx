import { ExternalLink, Github, Check, Code2, ShieldCheck, CreditCard, Database } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';

export default function Projects() {
  const sectionRef = useScrollReveal();
  const project = projects[0];

  if (!project) return null;

  // Custom icons mapping for each key feature of the project
  const featureIcons = [
    <Code2 className="w-4 h-4 text-accent" />,
    <ShieldCheck className="w-4 h-4 text-accent" />,
    <CreditCard className="w-4 h-4 text-accent" />,
    <Database className="w-4 h-4 text-accent" />
  ];

  return (
    <section id="projects" className="section-padding bg-grey-850 relative overflow-hidden" ref={sectionRef}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10">
        <h2 className="section-heading reveal accent-underline font-black tracking-tight text-center">Personal Project</h2>

        <div className="reveal mt-12 max-w-4xl mx-auto">
          {/* Unified 1-Column Featured Card */}
          <div className="bg-grey-800/40 backdrop-blur-md rounded-2xl border border-grey-700/50 p-8 md:p-10 hover:border-accent/20 hover:shadow-3xl hover:shadow-accent/5 transition-all duration-500">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-grey-800/80 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  Full-Stack System
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-grey-50 tracking-tight mt-2.5">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-1.5 self-start md:self-center font-mono text-xs text-grey-400 bg-grey-900/60 border border-grey-800 px-3.5 py-1.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>github.com/codewithdtd/sports</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-grey-300 text-sm md:text-base leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Key Features in 2-Column Grid */}
            <div className="mb-8">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-grey-500 mb-4">Core System Implementations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="group/item flex items-start gap-3.5 p-4 rounded-xl bg-grey-900/30 border border-grey-800/50 hover:border-accent/15 transition-all duration-300"
                  >
                    <div className="mt-0.5 flex-shrink-0 bg-accent/5 p-2 rounded-lg border border-accent/15 group-hover/item:border-accent/30 transition-colors duration-300">
                      {featureIcons[idx] || <Check className="w-4 h-4 text-accent" />}
                    </div>
                    <p className="text-xs sm:text-sm text-grey-300 leading-relaxed group-hover/item:text-grey-100 transition-colors duration-200">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8 pt-6 border-t border-grey-800/80">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-grey-500 mb-3">Technologies Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1.5 text-[11px] font-semibold text-accent border border-accent/10 rounded-lg bg-accent/5 hover:border-accent/30 hover:bg-accent/10 transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer / Link Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-grey-800/80">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-grey-900 border border-grey-800 text-grey-200 text-sm font-semibold rounded-xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Github size={16} />
                View Source Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-grey-400 hover:text-accent transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
