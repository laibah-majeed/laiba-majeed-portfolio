// src/components/sections/Testimonials.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/index.js';
import { SectionTitle } from '../common/index.jsx';
import { testimonials } from '../../data/index.js';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const avatarColors = ['#f59e0b','#10b981','#3b82f6','#8b5cf6'];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const { ref, inView } = useInView();

  const go = (d) => {
    setDir(d);
    setActive(p => (p + d + testimonials.length) % testimonials.length);
  };

  const current = testimonials[active];

  return (
    <section id="testimonials" className="section-pad">
      <div className="container-max">
        <SectionTitle
          label="06 — Testimonials"
          title="Client Voices"
          subtitle="What people say about working with me."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Nav Sidebar */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {testimonials.map((t, i) => (
              <button key={t.id} onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
                className={`flex items-center gap-3 p-3 border text-left transition-all duration-200 flex-shrink-0 min-w-[160px] lg:min-w-0 ${
                  active === i
                    ? 'border-amber-500 bg-amber-500/5'
                    : 'border-[var(--border)] hover:border-amber-500/40'
                }`}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-xs text-black"
                  style={{ background: avatarColors[i % avatarColors.length] }}>
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-xs text-[var(--text)] truncate">{t.name}</p>
                  <p className="font-mono text-[10px] text-[var(--text3)] truncate">{t.role.split(',')[0]}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="lg:col-span-9"
          >
            <div className="bg-[var(--surface)] border border-[var(--border)] p-8 md:p-10 relative overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-8 font-display text-[8rem] leading-none text-amber-500/5 font-black select-none">
                "
              </div>

              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * 30 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array(current.rating).fill(0).map((_, i) => (
                      <span key={i} className="text-amber-500 text-base">★</span>
                    ))}
                  </div>

                  <blockquote className="font-display text-xl md:text-2xl text-[var(--text)] leading-relaxed mb-8 italic font-medium">
                    "{current.review}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center font-bold text-sm text-black flex-shrink-0"
                      style={{ background: avatarColors[active % avatarColors.length] }}>
                      {current.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text)]">{current.name}</p>
                      <p className="font-mono text-xs text-amber-500">{current.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev/Next */}
              <div className="flex gap-2 mt-8">
                <button onClick={() => go(-1)}
                  className="w-10 h-10 border border-[var(--border)] flex items-center justify-center
                  text-[var(--text2)] hover:border-amber-500 hover:text-amber-500 transition-all duration-200">
                  <FiChevronLeft size={16} />
                </button>
                <button onClick={() => go(1)}
                  className="w-10 h-10 border border-[var(--border)] flex items-center justify-center
                  text-[var(--text2)] hover:border-amber-500 hover:text-amber-500 transition-all duration-200">
                  <FiChevronRight size={16} />
                </button>
                <div className="flex items-center gap-2 ml-4">
                  {testimonials.map((_, i) => (
                    <div key={i} className={`h-0.5 transition-all duration-300 ${i === active ? 'w-6 bg-amber-500' : 'w-2 bg-[var(--border)]'}`} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
