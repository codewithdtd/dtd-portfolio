import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const sectionRef = useScrollReveal();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/codewithdtd', label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  ].filter(link => link.href);

  return (
    <footer id="contact" className="bg-grey-950 border-t border-grey-800" ref={sectionRef}>
      {/* Contact Section within Footer */}
      <div className="section-container pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Heading and Text */}
          <div className="space-y-4 reveal">
            <h2 className="section-heading reveal accent-underline">Contact</h2>
            <p className="text-grey-200 leading-relaxed max-w-md">
              I am currently open to new career opportunities. Feel free to reach out or connect with me!
            </p>
          </div>

          {/* Right Column: Contact Links */}
          <div className="space-y-4 md:mt-10 reveal">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-grey-300 hover:text-accent transition-colors group w-fit"
            >
              <Mail size={18} className="text-accent flex-shrink-0" />
              <span className="text-sm font-medium group-hover:underline">{personalInfo.email}</span>
            </a>

            <div className="flex items-center gap-3 text-grey-300 w-fit">
              <MapPin size={18} className="text-accent flex-shrink-0" />
              <span className="text-sm font-medium">{personalInfo.location}</span>
            </div>

            {personalInfo.social?.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-grey-300 hover:text-accent transition-colors group w-fit"
              >
                <Linkedin size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm font-medium group-hover:underline">linkedin.com/in/dothanhdat02</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-container border-t border-grey-800/80"></div>

      {/* Footer Bottom */}
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold text-grey-50 hover:text-accent transition-colors"
          >
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
            <span className="text-accent">.</span>
          </a>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-grey-400 hover:text-accent hover:bg-grey-900 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-grey-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
