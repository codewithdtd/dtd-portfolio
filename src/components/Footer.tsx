import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-grey-950 border-t border-grey-700/30">
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
            {personalInfo.name.split(' ')[0]}
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
                className="p-2 rounded-lg text-grey-400 hover:text-accent hover:bg-grey-800/50 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-grey-400">
            Built with <Heart size={14} className="text-accent" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
