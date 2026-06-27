// src/data/index.js

export const skillGroups = [
  {
    label: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React ', level: 95 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 82 },
      { name: 'HTML5 / CSS3', level: 98 }    ],
  },
  {
    label: 'Backend',
    icon: '◉',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 78 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: '◎',
    skills: [
      { name: 'Git / GitHub', level: 93 },
      { name: 'Vercel ', level: 80 },
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Netlify', level: 85 },
    ],
  },
];

export const techBadges = [
  'React', 'JavaScript', 'Node.js', 'Bootstrap', 'Tailwind',
  'MongoDB', 'Figma', 'Git', 'Github', 'Vercel', 'Netlify', 'Express.js',
  'React', 'JavaScript', 'Node.js', 'Bootstrap', 'Tailwind',
  'MongoDB', 'Figma', 'Git', 'Github', 'Vercel', 'Netlify', 'Express.js',];

export const experiences = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Software Productivity Strategies, INC.',
    location: 'Islamabad, Pakistan (Remote)',
    duration: 'July 2025 — September 2025',
    type: 'Full-time',
    description: 'Contributed to the development of a responsive web application during SPS internship. Built reusable UI components, improved page performance, and collaborated with the team to deliver user-friendly and accessible interfaces.',
    highlights: ['Design websites with 10+ components', 'Improved Core Web Vitals scores by 38%'],
  },
  {
    id: 2,
    role: 'Frontend Developer Intern',
    company: 'Software Productivity Strategies, INC.',
    location: 'Islamabad, Pakistan (Remote)',
    duration: 'October 2025 — December 2025',
    type: 'Full-time',
    description: 'Completed internship at SPS where I contributed to real-world web development projects. Improved UI responsiveness, fixed critical bugs, and collaborated in an agile environment to deliver production-ready features.',
    highlights: ['Design websites with 10+ components', 'Improved Core Web Vitals scores by 38%'],
  },
  
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO, Meridian Labs',
    avatar: 'SC',
    review: 'Alex is one of those rare developers who combines deep technical skill with an intuitive design sense. The frontend architecture they built for us is elegant, fast, and maintainable. Truly exceptional work.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'Founder, Arcana',
    avatar: 'MW',
    review: 'Working with Alex transformed our e-commerce experience. They understood our brand vision immediately and delivered a product that exceeded every expectation. The 3D product configurator alone doubled our conversion rate.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Okonkwo',
    role: 'Product Manager, Crestline Digital',
    avatar: 'PO',
    review: 'Alex consistently delivered complex features ahead of schedule without sacrificing quality. Their communication is excellent and they proactively flagged potential issues before they became problems.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Hartley',
    role: 'Creative Director, Studio Wren',
    avatar: 'JH',
    review: 'The attention to detail is extraordinary. Alex takes a design file and brings it to life with animations and interactions that feel alive. Every project they touched became a portfolio piece for us too.',
    rating: 5,
  },
];
