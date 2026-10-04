import { useState, useEffect } from 'react';
import { Briefcase, Folder, GraduationCap, Home, Mail, Menu, Moon, Sun, X } from 'lucide-react';

type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Skills', href: '#skills', icon: Briefcase },
  { label: 'Experience', href: '#experience', icon: GraduationCap },
  { label: 'Projects', href: '#projects', icon: Folder },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
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

  const ThemeIcon = theme === 'dark' ? Sun : Moon;
  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <>
      <header className="light-navbar" aria-label="Site header">
        <a className="light-navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); handleClick('#home'); }}>
          <span>{'<'}</span> DTD <span>{'/>'}</span>
        </a>
        <nav className="light-navbar-links" aria-label="Primary navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={`light-${href}`}
              href={href}
              onClick={(e) => { e.preventDefault(); handleClick(href); }}
              className={activeSection === href.slice(1) ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </nav>
        <button className="theme-toggle light-theme-toggle" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
          <ThemeIcon size={17} />
        </button>
      </header>

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
        <span className="nav-divider" />
        <button className="nav-icon theme-toggle" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
          <ThemeIcon size={17} />
        </button>
      </nav>

      <div className="mobile-navigation fixed left-4 right-4 top-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-300/20 bg-slate-900/85 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.45)] backdrop-blur"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <button className="theme-toggle mobile-theme-toggle" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
          <ThemeIcon size={17} />
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
