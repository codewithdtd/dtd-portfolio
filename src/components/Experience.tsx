import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolio';
import { Calendar, Building, ChevronRight, Briefcase } from 'lucide-react';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="relative section-padding bg-grey-900 overflow-hidden" ref={sectionRef}>
      
      {/* Soft background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10">
        <h2 className="section-heading reveal accent-underline">Work Experience</h2>

        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 md:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent via-grey-700 to-grey-800/10" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isPresent = exp.period.toLowerCase().includes('present');
              
              return (
                <div
                  key={`${exp.company}-${i}`}
                  className="reveal relative pl-12 md:pl-20 group"
                >
                  {/* Timeline node/dot with Briefcase icon */}
                  <div className={`absolute left-5 md:left-8 w-8 h-8 rounded-full bg-grey-950 border-2 ${
                    isPresent ? 'border-accent shadow-[0_0_12px_rgba(34,197,94,0.3)]' : 'border-grey-700'
                  } -translate-x-1/2 top-4 z-10 flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]`}>
                    
                    {isPresent && (
                      <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                    )}
                    <Briefcase className={`w-3.5 h-3.5 ${
                      isPresent ? 'text-accent' : 'text-grey-400 group-hover:text-accent'
                    } transition-colors duration-300`} />
                  </div>

                  {/* Experience Card */}
                  <div className={`card bg-grey-800/30 backdrop-blur-md border ${
                    isPresent ? 'border-accent/20 shadow-[0_0_30px_rgba(34,197,94,0.03)]' : 'border-grey-700/50'
                  } rounded-2xl p-6 sm:p-8 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)] transition-all duration-500 relative overflow-hidden`}>
                    
                    {/* Glowing tag for Present role */}
                    {isPresent && (
                      <div className="absolute top-0 right-0 h-[3px] left-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                    )}

                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-grey-50 tracking-tight group-hover:text-accent transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-accent mt-1.5 text-sm font-semibold">
                          <Building size={14} className="opacity-80" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      
                      {/* Period Badge */}
                      <div className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold self-start sm:self-center border transition-colors duration-300 ${
                        isPresent 
                          ? 'bg-accent/10 border-accent/20 text-accent' 
                          : 'bg-grey-900/60 border-grey-800 text-grey-300'
                      }`}>
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, j) => (
                        <li 
                          key={j} 
                          className="group/item flex items-start gap-3 text-sm text-grey-300 leading-relaxed hover:text-grey-100 transition-colors duration-200"
                        >
                          <div className="mt-1 flex-shrink-0 bg-accent/5 p-0.5 rounded border border-accent/15 group-hover/item:border-accent/40 transition-colors duration-300">
                            <ChevronRight className="w-3 h-3 text-accent" />
                          </div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    {exp.techStack && (
                      <div className="mt-8 pt-6 border-t border-grey-800/80">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-grey-500 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-[11px] font-semibold text-accent border border-accent/10 rounded-xl bg-accent/5 hover:border-accent/30 hover:bg-accent/10 hover:shadow-[0_0_8px_rgba(34,197,94,0.1)] transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
