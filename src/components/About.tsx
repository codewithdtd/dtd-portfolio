import { MapPin, Mail, Calendar, Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-grey-850" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading reveal accent-underline">About Me</h2>
        <p className="section-subheading reveal">A little bit about who I am and what I do</p>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <div className="md:col-span-2 reveal">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl animate-pulse-glow" />
              <div className="relative w-full h-full rounded-2xl border-2 border-accent/30 bg-grey-700 flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-bold text-accent/20 select-none">
                  <img src="/src/data/me.png" alt="" className='w-full h-full object-cover'/>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & details */}
          <div className="md:col-span-3 space-y-6">
            <p className="reveal text-grey-100 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-grey-800/50 border border-grey-700/30">
                <MapPin size={20} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-grey-400">Location</p>
                  <p className="text-sm text-grey-100">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-grey-800/50 border border-grey-700/30">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-grey-400">Email</p>
                  <p className="text-sm text-grey-100">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-grey-800/50 border border-grey-700/30">
                <Calendar size={20} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-grey-400">Experience</p>
                  <p className="text-sm text-grey-100">{personalInfo.yearsExperience}+ years</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-grey-800/50 border border-grey-700/30">
                <Briefcase size={20} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-grey-400">Status</p>
                  <p className="text-sm text-accent">{personalInfo.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
