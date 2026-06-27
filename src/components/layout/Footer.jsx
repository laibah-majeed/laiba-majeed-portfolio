// src/components/layout/Footer.jsx
import { FiGithub, FiTwitter, FiLinkedin, FiDribbble, FiMail } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/laibah-majeed', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/laibah-majeed', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/laibah_majeed', label: 'Twitter' },
  { icon: FiDribbble, href: 'https://dribbble.com/laibah-majeed', label: 'Dribbble' },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg2)]">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl mb-3">
              <span className="text-amber-500">L</span>aibah Majeed
            </p>
            <p className="text-[var(--text2)] text-sm leading-relaxed mb-6 max-w-xs">
              Building digital experiences that are fast, accessible, and beautifully crafted.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--text2)]
                  hover:border-amber-500 hover:text-amber-500 transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-amber-500 mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={e => handleNav(e, href)}
                    className="text-[var(--text2)] hover:text-amber-500 transition-colors text-sm font-mono tracking-wide">
                    <span className="text-amber-500 mr-2">→</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-amber-500 mb-4">Get In Touch</p>
            <a href="mailto:hello@alexrivera.dev"
              className="flex items-center gap-2 text-[var(--text2)] hover:text-amber-500 transition-colors text-sm font-mono mb-3">
              <FiMail size={14} /> laibamajeed71@gmail.com
            </a>
            <p className="text-[var(--text3)] text-xs leading-relaxed">
              Available for freelance projects<br />and full-time opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--text3)]">
            © {new Date().getFullYear()} Laiba Majeed. Crafted with React + Tailwind.
          </p>
          <p className="font-mono text-xs text-[var(--text3)]">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
