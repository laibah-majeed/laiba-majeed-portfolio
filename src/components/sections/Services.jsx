// src/components/sections/Services.jsx
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/index.js';
import { SectionTitle } from '../common/index.jsx';
import { FiMonitor, FiLayout, FiSmartphone, FiCode, FiZap, FiShield } from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Full-stack web applications built with modern frameworks. From architecture to deployment, I handle the complete development lifecycle.',
    points: ['React / Next.js', 'Node.js backends', 'API integration', 'Database design'],
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'User interfaces that are both visually stunning and intuitively usable. Figma design, prototyping, and dev-ready handoffs.',
    points: ['Figma prototypes', 'Design systems', 'User research', 'Accessibility audits'],
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect experiences across every device and screen size — from 320px mobile to 4K desktop.',
    points: ['Mobile-first approach', 'Cross-browser support', 'Touch interactions', 'PWA development'],
  },
  {
    icon: FiMonitor,
    title: 'Frontend Development',
    description: 'High-performance frontends with smooth animations, optimized assets, and exceptional Core Web Vitals scores.',
    points: ['Performance optimization', 'Animation & motion', 'Component libraries', 'TypeScript'],
  },
  {
    icon: FiZap,
    title: 'Performance Audit',
    description: 'Diagnose and fix performance bottlenecks. I\'ll get your site to green on Lighthouse and keep it there.',
    points: ['Core Web Vitals', 'Bundle optimization', 'Image optimization', 'Caching strategies'],
  },
  {
    icon: FiShield,
    title: 'Code Review & Consulting',
    description: 'Expert review of your codebase with actionable feedback on architecture, security, and best practices.',
    points: ['Architecture review', 'Security assessment', 'Tech stack advice', 'Team mentoring'],
  },
];

const Services = () => {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="services" className="section-pad">
      <div className="container-max">
        <SectionTitle
          label="04 — Services"
          title="What I Offer"
          subtitle="End-to-end development services tailored to your project's unique needs."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--surface)] border border-[var(--border)] p-7 group
                hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-500/60 to-transparent transition-all duration-500" />

              <div className="w-10 h-10 border border-amber-500/30 group-hover:border-amber-500 flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon size={18} className="text-amber-500" />
              </div>

              <h3 className="font-display font-bold text-lg mb-3 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--text2)] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-1.5">
                {service.points.map(p => (
                  <li key={p} className="flex items-center gap-2 font-mono text-xs text-[var(--text3)]">
                    <span className="text-amber-500 text-[10px]">→</span> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
