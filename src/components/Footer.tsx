import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#111827]">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 md:pl-28 md:pr-10 lg:pl-32 lg:pr-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="panel-title">
              <span className="text-sky-400">Contact</span> Me
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              I am open to new opportunities and collaborations.
            </p>
          </div>

          <div className="grid gap-4 rounded-lg border border-sky-300/10 bg-slate-800/70 p-6 text-sm text-slate-300">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 transition hover:text-cyan-300">
              <Mail size={17} className="text-cyan-300" />
              {personalInfo.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={17} className="text-cyan-300" />
              {personalInfo.location}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/codewithdtd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-300/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-300/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
