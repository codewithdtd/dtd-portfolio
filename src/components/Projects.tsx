import { ExternalLink, Github, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-grey-850" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading reveal accent-underline">Projects</h2>
        <p className="section-subheading reveal">Some of the things I&apos;ve built</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`card reveal group relative ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-accent bg-accent-muted px-2 py-1 rounded-full">
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Thumbnail placeholder */}
              <div className="h-44 -mx-6 -mt-6 mb-5 bg-grey-700/50 border-b border-grey-700/50 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-grey-600/50 select-none group-hover:text-accent/20 transition-colors duration-300">
                  {project.title.split(' ').map(w => w[0]).join('')}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-grey-50 mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-grey-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-accent border border-accent/30 rounded-md bg-accent-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-grey-700/30">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-grey-300 hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-grey-300 hover:text-accent transition-colors"
                >
                  <Github size={14} />
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
