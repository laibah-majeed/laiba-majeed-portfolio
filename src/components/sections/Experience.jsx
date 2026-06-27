// src/components/sections/Experience.jsx
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/index.js';
import { SectionTitle } from '../common/index.jsx';
import { experiences } from '../../data/index.js';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

const typeStyle = {
  'Full-time': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
  'Contract': 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  'Internship': 'bg-amber-500/10 text-amber-500 border-amber-500/30',
};

const Experience = () => {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="experience" className="section-pad bg-[var(--bg2)]">
      <div className="container-max">
        <SectionTitle
          label="05 — Experience"
          title="Where I've Worked"
          subtitle="A timeline of roles that shaped my craft and professional identity."
        />

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-1/2" />

          <div className="space-y-0">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex items-start gap-8 pb-12 ${
                    isLeft
                      ? 'md:flex-row pl-12 md:pl-0 md:pr-[calc(50%+2rem)]'
                      : 'md:flex-row-reverse pl-12 md:pl-[calc(50%+2rem)]'
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-amber-500 bg-[var(--bg)] z-10 mt-2 ${i === 0 ? 'ring-4 ring-amber-500/20' : ''}`} />

                  {/* Card */}
                  <div className="bg-[var(--surface)] border border-[var(--border)] p-6 flex-1
                    hover:border-amber-500/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-lg leading-snug">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FiBriefcase size={12} className="text-amber-500" />
                          <span className="font-mono text-sm text-amber-500 font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <span className={`font-mono text-[11px] tracking-wide px-2.5 py-1 border ${typeStyle[exp.type] || typeStyle['Full-time']}`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 font-mono text-xs text-[var(--text3)]">
                      <span className="flex items-center gap-1.5"><FiCalendar size={11} />{exp.duration}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin size={11} />{exp.location}</span>
                    </div>

                    <p className="text-[var(--text2)] text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-1.5">
                      {exp.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 font-mono text-xs text-[var(--text3)]">
                          <span className="text-amber-500 mt-0.5 flex-shrink-0">◆</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
