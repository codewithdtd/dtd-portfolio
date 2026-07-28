import { useState, useEffect } from 'react';
import { Briefcase, Folder, GraduationCap, Home, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Skills', href: '#skills', icon: Briefcase },
  { label: 'Experience', href: '#experience', icon: GraduationCap },
  { label: 'Projects', href: '#projects', icon: Folder },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 180) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav-rail" aria-label="Primary navigation">
        {navLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={`${label}-${href}`}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleClick(href);
            }}
            className={`nav-icon ${activeSection === href.slice(1) ? 'active' : ''}`}
            aria-label={label}
            title={label}
          >
            <Icon size={17} />
          </a>
        ))}
      </nav>

      <div className="fixed left-4 right-4 top-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-300/20 bg-slate-900/85 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.45)] backdrop-blur"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={`mt-3 overflow-hidden rounded-2xl border border-sky-300/15 bg-slate-900/95 shadow-2xl backdrop-blur transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={`${link.label}-mobile`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all ${
                activeSection === link.href.slice(1)
                  ? 'bg-sky-400/15 text-sky-300'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-sky-200'
              }`}
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
