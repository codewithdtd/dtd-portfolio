import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/portfolio';
import { Code2, Layers, Database, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Programming Languages': Code2,
  'Frameworks & Technologies': Layers,
  'Databases & Cloud': Database,
  'Tools & Platforms': Wrench,
};

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-grey-900" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading reveal accent-underline">Skills & Technologies</h2>
        <p className="section-subheading reveal">Tools and technologies I use to build scalable web applications</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((group) => {
            const IconComponent = categoryIcons[group.category] || Code2;

            return (
              <div 
                key={group.category} 
                className="group/card card reveal flex flex-col justify-between bg-grey-800/40 backdrop-blur-md border border-grey-700/50 rounded-2xl p-6 sm:p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="p-3 rounded-xl bg-accent/5 border border-accent/15 text-accent group-hover/card:bg-accent/10 group-hover/card:border-accent/35 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-grey-50 tracking-tight">{group.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="group/badge px-4 py-2 rounded-xl bg-grey-900/50 border border-grey-800/80 text-sm font-medium text-grey-300 hover:border-accent hover:text-accent hover:bg-accent/5 hover:shadow-[0_0_12px_rgba(34,197,94,0.1)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover/badge:bg-accent group-hover/badge:scale-110 transition-all duration-300" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
