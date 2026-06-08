import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-grey-900" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading reveal accent-underline">Experience</h2>
        <p className="section-subheading reveal">Where I&apos;ve worked and what I&apos;ve accomplished</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-grey-700 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${i}`}
                className={`reveal relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-2 top-1 z-10">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-grey-900" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className={`pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card">
                    <span className="inline-block text-xs font-medium text-accent bg-accent-muted px-3 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold text-grey-50">{exp.role}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-grey-300">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
