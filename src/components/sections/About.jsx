// src/components/sections/About.jsx
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/index.js';
import { SectionTitle } from '../common/index.jsx';
import { FiDownload, FiMapPin, FiCoffee, FiCode } from 'react-icons/fi';
import profileImg from '../../assets/laiba.jpg';
import pdf from '../../assets/Laiba Majeed CV 2026.pdf';

const facts = [
  { icon: FiMapPin, label: 'Location', value: 'Pakistan' },
  { icon: FiCode, label: 'Experience', value: '1+ Years' },
  { icon: FiCoffee, label: 'Projects Done', value: '20+' },
];

const education = [
  { degree: 'B.S. Software Engineering', school: 'Lahore Garrison University', year: '2027', gpa: '3.69 GPA' },
  { degree: 'Intermediate in Fsc', school: 'Superior College', year: '2023', gpa: 'A+' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-pad bg-[var(--bg2)]">
      <div className="container-max">
        <SectionTitle
          label="01 — About"
          title="Crafting Code, Designing Experiences"
          subtitle="I'm a full-stack developer with a frontend soul — I care deeply about performance, accessibility, and design."
        />

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Avatar + Facts */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Avatar block */}
            <div className="relative inline-block">
              <div className="w-64 h-64 bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden">
                <img
                  src={profileImg}
                  alt="Laiba Majeed"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 w-64 h-64 border border-amber-500/40" />

              <div className="absolute -top-2 -left-2 bg-amber-500 text-black font-mono text-xs px-3 py-1 tracking-widest uppercase">
                Available
              </div>
            </div>

            {/* Fact pills */}
            <div className="flex flex-wrap gap-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] px-4 py-2.5">
                  <Icon size={14} className="text-amber-500" />
                  <span className="font-mono text-xs text-[var(--text3)] tracking-wide">{label}:</span>
                  <span className="font-mono text-xs text-[var(--text)] font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-[var(--text2)] leading-relaxed">
              <p>
                Hi, I'm Laiba — a <span className="text-[var(--text)] font-medium">full-stack web developer</span> a passionate web developer and designer dedicated to creating modern, responsive, and user-friendly digital experiences.
              </p>
              <p>
                My journey into technology began with a curiosity for how websites work and a desire to transform ideas into interactive solutions. Over time, I have developed strong skills in front-end development, working with HTML, CSS, Bootstrap, JavaScript, and modern web technologies to build clean, functional, and visually appealing websites.z
              </p>
              <p>
                Currently, I am expanding my expertise in full-stack development, exploring technologies such as React, Node.js, MongoDB, and modern development workflows. I enjoy learning new tools, solving challenging problems, and continuously improving my craft.
              </p>

            </div>

            {/* Education */}
            <div className="pt-4">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-amber-500 mb-4">Education</p>
              <div className="space-y-3">
                {education.map((e, i) => (
                  <div key={i} className="flex items-start gap-4 border-l-2 border-amber-500/30 pl-4">
                    <div>
                      <p className="font-medium text-[var(--text)] text-sm">{e.degree}</p>
                      <p className="font-mono text-xs text-[var(--text3)]">{e.school} · {e.year} · {e.gpa}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="/Laiba Majeed CV 2026.pdf" download
              className="btn-primary inline-flex mt-2">
              <FiDownload size={14} /> Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
