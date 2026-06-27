// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/index.js';
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from 'react-icons/md';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]' : 'bg-transparent'
      }`}>
        <nav className="container-max flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" onClick={e => handleNav(e, '#hero')}
            className="font-display font-bold text-xl tracking-tight group">
            <span className="text-amber-500">L</span>aiba
            <span className="text-[var(--text3)] group-hover:text-amber-500 transition-colors">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} onClick={e => handleNav(e, href)}
                className={`font-mono text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200
                  hover:text-amber-500 ${active === href ? 'text-amber-500' : 'text-[var(--text2)]'}`}>
                {label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button onClick={toggle}
              className="w-9 h-9 flex items-center justify-center border border-[var(--border)] text-[var(--text2)] hover:border-amber-500 hover:text-amber-500 transition-all duration-200">
              {dark ? <MdLightMode size={16} /> : <MdDarkMode size={16} />}
            </button>
            <a href="#contact" onClick={e => handleNav(e, '#contact')}
              className="hidden md:flex btn-primary text-xs py-2 px-4">
              Hire Me
            </a>
            <button onClick={() => setMenuOpen(o => !o)} className="md:hidden text-[var(--text)] p-1">
              {menuOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[var(--bg)]/98 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} onClick={e => handleNav(e, href)}
              className="font-display text-3xl font-bold hover:text-amber-500 transition-colors">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={e => handleNav(e, '#contact')} className="btn-primary mt-4">Hire Me</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
