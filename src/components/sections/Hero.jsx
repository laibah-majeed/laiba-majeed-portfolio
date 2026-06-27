// src/components/sections/Hero.jsx
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const roles = ['Web Developer.', 'UI Engineer.', 'React Specialist.', 'Problem Solver.'];

const socials = [
  { icon: FiGithub, href: 'https://github.com/laibah-majeed ', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/laibah-majeed', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/laibah-majeed', label: 'Twitter' },
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let i = typing ? displayed.length : displayed.length - 1;
    if (typing && displayed === target) {
      const t = setTimeout(() => setTyping(false), 2000);
      return () => clearTimeout(t);
    }
    if (!typing && displayed === '') {
      setRoleIdx(p => (p + 1) % roles.length);
      setTyping(true);
      return;
    }
    const speed = typing ? 60 : 35;
    const t = setTimeout(() => {
      setDisplayed(typing ? target.slice(0, i + 1) : displayed.slice(0, -1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  const handleScroll = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden p-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Floating geometric shapes */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[5%] top-[20%] w-64 h-64 border border-amber-500/10 hidden lg:block" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[12%] top-[27%] w-36 h-36 border border-amber-500/20 hidden lg:block" />
      <div className="absolute left-[3%] bottom-[20%] w-2 h-32 bg-amber-500/20 hidden lg:block" />
      <div className="absolute left-[5%] bottom-[25%] w-0.5 h-20 bg-amber-500/40 hidden lg:block" />

      <div className="container-max relative z-10">
        <div className="max-w-5xl">
          {/* Status badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--text3)] mb-8 border border-[var(--border)] px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Main heading */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <h1 className="font-display leading-[0.9] mb-6">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-[var(--text)]">
                Laiba
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-amber-500 italic">
                Majeed
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-xl md:text-2xl text-[var(--text2)] mb-6 h-9 flex items-center">
            <span className="text-amber-500 mr-2">//</span>
            <span>{displayed}</span>
            <span className={`ml-0.5 w-0.5 h-6 bg-amber-500 inline-block transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
          </motion.div>

          {/* Bio */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[var(--text2)] text-lg max-w-xl leading-relaxed mb-10">
            I build <span className="text-amber-500 font-medium">fast, accessible</span>, and beautifully crafted web experiences.
            Specializing in React, JavaScript, and modern frontend architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12">
            <button onClick={() => handleScroll('#projects')} className="btn-primary">
              View Projects <FiArrowDown size={14} />
            </button>
            <button onClick={() => handleScroll('#contact')} className="btn-outline text-[var(--text)]">
              Contact Me
            </button>
          </motion.div>

          {/* Socials + Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 border border-[var(--border)] flex items-center justify-center
                  text-[var(--text2)] hover:border-amber-500 hover:text-amber-500 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="w-px h-8 bg-[var(--border)] hidden sm:block" />
            {[['1+', 'Years Exp.'], ['20+', 'Projects']
            // ['50+', 'Projects'], ['30+', 'Clients']
          ] .map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="font-display font-bold text-2xl text-amber-500">{num}</p>
                <p className="font-mono text-xs text-[var(--text3)] tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text3)] cursor-pointer"
        onClick={() => handleScroll('#about')}>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <FiArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
