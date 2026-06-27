// src/components/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/index.js';
import { SectionTitle } from '../common/index.jsx';
import { projects, categories } from '../../data/projects.js';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const accentColors = ['#f59e0b','#10b981','#3b82f6','#8b5cf6','#ef4444','#06b6d4'];

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView(0.1);
  const color = accentColors[index % accentColors.length];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      layout
      className="bg-[var(--surface)] border border-[var(--border)] group overflow-hidden
        hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
    >
      {/* Project "image" — abstract geometric placeholder */}
      <div className="relative h-44 overflow-hidden" style={{ background: `${color}08` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-2 opacity-20 group-hover:opacity-40 transition-opacity" style={{ borderColor: color }} />
            <div className="absolute top-3 left-3 w-20 h-20 border opacity-10 group-hover:opacity-25 transition-opacity" style={{ borderColor: color }} />
            <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-2xl"
              style={{ color }}>
              {project.id.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {project.featured && (
            <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1"
              style={{ background: `${color}20`, color }}>
              Featured
            </span>
          )}
          <span className="font-mono text-[10px] tracking-widest uppercase bg-[var(--surface2)] text-[var(--text3)] px-2 py-1">
            {project.year}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-lg mb-2 group-hover:text-amber-500 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-[var(--text2)] text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(t => (
            <span key={t} className="font-mono text-[11px] px-2 py-0.5 bg-[var(--surface2)] text-[var(--text3)] border border-[var(--border)]">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs tracking-wide text-[var(--text2)]
            hover:text-amber-500 transition-colors group/link">
            <FiExternalLink size={13} />
            <span>Live Demo</span>
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs tracking-wide text-[var(--text2)]
            hover:text-amber-500 transition-colors">
            <FiGithub size={13} />
            <span>Source</span>
          </a>
          <span className="ml-auto text-[var(--border)] group-hover:text-amber-500 transition-colors">
            <FiArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-pad bg-[var(--bg2)]">
      <div className="container-max">
        <SectionTitle
          label="03 — Projects"
          title="Selected Work"
          subtitle="A curated selection of projects built with passion and precision."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-amber-500 text-black border-amber-500'
                  : 'border-[var(--border)] text-[var(--text2)] hover:border-amber-500 hover:text-amber-500'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--text3)] font-mono">No projects in this category yet.</div>
        )}
      </div>
    </section>
  );
};

export default Projects;
