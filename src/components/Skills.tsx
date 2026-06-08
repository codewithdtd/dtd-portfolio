import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/portfolio';

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-grey-900" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading reveal accent-underline">Skills</h2>
        <p className="section-subheading reveal">Technologies I work with on a daily basis</p>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="card reveal">
              <h3 className="text-lg font-semibold text-accent mb-6">{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-grey-100 font-medium">{skill.name}</span>
                      <span className="text-xs text-grey-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-grey-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-dark to-accent rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
