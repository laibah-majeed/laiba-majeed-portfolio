// src/components/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/index.js';
import { SectionTitle, Input } from '../common/index.jsx';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend, FiCheck } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/alexrivera', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/alexrivera', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/alexrivera', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:hello@alexrivera.dev', label: 'Email' },
];

const Contact = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section-pad bg-[var(--bg2)]">
      <div className="container-max">
        <SectionTitle
          label="07 — Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-[var(--text2)] leading-relaxed mb-6">
                I'm currently available for freelance projects and open to full-time opportunities.
                Whether you need a new site built from scratch, a complex app, or just want to
                chat about technology — my inbox is always open.
              </p>
              <a href="mailto:laibamajeed71@gmail.com"
                className="flex items-center gap-2 text-amber-500 font-mono text-sm hover:gap-3 transition-all duration-200">
                <FiMail size={14} /> laibamajeed71@gmail.com
              </a>
            </div>

            {/* Response time */}
            <div className="bg-[var(--surface)] border border-[var(--border)] p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs text-emerald-500 tracking-wide">Online</span>
              </div>
              <p className="font-mono text-xs text-[var(--text3)]">Average response time:</p>
              <p className="font-display font-bold text-xl mt-1">Under 24 hours</p>
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--text3)] mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 border border-[var(--border)] flex items-center justify-center
                    text-[var(--text2)] hover:border-amber-500 hover:text-amber-500 transition-all duration-200">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[var(--surface)] border border-[var(--border)] p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Your Name" placeholder="John Smith" value={form.name} onChange={set('name')} required />
                <Input label="Email Address" type="email" placeholder="john@company.com" value={form.email} onChange={set('email')} required />
              </div>
              <Input label="Subject" placeholder="Project inquiry" value={form.subject} onChange={set('subject')} required />
              <Input label="Message" placeholder="Tell me about your project..." value={form.message} onChange={set('message')} textarea required />

              <button type="submit" disabled={sending || sent}
                className={`btn-primary w-full justify-center py-3.5 text-sm tracking-widest ${
                  sent ? 'bg-emerald-500 border-emerald-500 text-black' : ''
                }`}>
                {sent ? (
                  <><FiCheck size={16} /> Message Sent!</>
                ) : sending ? (
                  <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><FiSend size={14} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
