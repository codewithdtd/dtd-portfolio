import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-grey-850" ref={sectionRef}>
      <div className="section-container max-w-4xl mx-auto text-center">
        <h2 className="section-heading reveal accent-underline mx-auto">Contact</h2>
        <p className="section-subheading reveal max-w-lg mx-auto">
          Let&apos;s work together on something great
        </p>

        <div className="mt-12 space-y-8 max-w-md mx-auto reveal">
          <p className="text-grey-200 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
          </p>

          <div className="grid gap-4 mt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-5 rounded-xl bg-grey-800/50 border border-grey-700/30 hover:border-accent/50 hover:bg-grey-800/80 transition-all group text-left"
            >
              <Mail size={24} className="text-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-grey-400 font-medium uppercase tracking-wider">Email</p>
                <p className="text-base text-grey-100 group-hover:text-accent transition-colors font-medium">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl bg-grey-800/50 border border-grey-700/30 text-left">
              <MapPin size={24} className="text-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-grey-400 font-medium uppercase tracking-wider">Location</p>
                <p className="text-base text-grey-100 font-medium">{personalInfo.location}</p>
              </div>
            </div>

            {personalInfo.social?.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-grey-800/50 border border-grey-700/30 hover:border-accent/50 hover:bg-grey-800/80 transition-all group text-left"
              >
                <Linkedin size={24} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-grey-400 font-medium uppercase tracking-wider">LinkedIn</p>
                  <p className="text-base text-grey-100 group-hover:text-accent transition-colors font-medium">
                    Do Thanh Dat
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
