// src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/index.js';
import { SectionTitle } from '../common/index.jsx';
import { skillGroups, techBadges } from '../../data/index.js';

const SkillBar = ({ name, level, inView, delay }) => (
  <div>
    <div className="flex justify-between items-center mb-1.5">
      <span className="font-mono text-sm text-[var(--text2)]">{name}</span>
      <span className="font-mono text-xs text-amber-500">{level}%</span>
    </div>
    <div className="h-0.5 bg-[var(--border)] relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
        className="absolute top-0 left-0 h-full bg-amber-500"
      />
    </div>
  </div>
);

const Skills = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="section-pad">
      <div className="container-max">
        <SectionTitle
          label="02 — Skills"
          title="Tools of the Trade"
          subtitle="Technologies I work with daily, and the depth I've built over 4+ years."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
              className="bg-[var(--surface)] border border-[var(--border)] p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-amber-500 font-mono text-xl">{group.icon}</span>
                <h3 className="font-display font-bold text-lg">{group.label}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    inView={inView}
                    delay={gi * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="border-y border-[var(--border)] py-6 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {techBadges.map((tech, i) => (
              <span key={i} className="font-mono text-sm text-[var(--text3)] inline-flex items-center gap-3 flex-shrink-0">
                <span className="text-amber-500">◆</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
