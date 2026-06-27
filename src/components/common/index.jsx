// src/components/common/Button.jsx
export const Button = ({ children, variant = 'primary', href, onClick, className = '', ...props }) => {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const cls = `${base} ${className}`;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{children}</a>;
  return <button onClick={onClick} className={cls} {...props}>{children}</button>;
};

// src/components/common/SectionTitle.jsx
import { useInView } from '../../hooks/index.js';
export const SectionTitle = ({ label, title, subtitle, light = false }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 mb-3 block">{label}</span>
      <h2 className={`font-display text-4xl md:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      <div className="line-accent mb-4" />
      {subtitle && <p className="text-[var(--text2)] max-w-xl text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
};

// src/components/common/Input.jsx
export const Input = ({ label, type = 'text', placeholder, value, onChange, textarea = false, required }) => {
  const cls = `w-full bg-[var(--surface2)] border border-[var(--border)] text-[var(--text)]
    placeholder-[var(--text3)] font-mono text-sm px-4 py-3
    focus:outline-none focus:border-amber-500 transition-colors duration-200
    resize-none`;
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-xs tracking-widest uppercase text-[var(--text3)]">{label}{required && <span className="text-amber-500 ml-1">*</span>}</label>
      {textarea
        ? <textarea placeholder={placeholder} value={value} onChange={onChange} rows={5} className={cls} required={required} />
        : <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={cls} required={required} />
      }
    </div>
  );
};

// src/components/common/Card.jsx
export const Card = ({ children, className = '', hover = true }) => (
  <div className={`bg-[var(--surface)] border border-[var(--border)] ${hover ? 'card-hover' : ''} ${className}`}>
    {children}
  </div>
);
