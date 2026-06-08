export const personalInfo = {
  name: 'Alex Chen',
  title: 'Full Stack Developer',
  tagline: 'Crafting elegant digital experiences with modern web technologies',
  email: 'alex@devportfolio.com',
  location: 'San Francisco, CA',
  availability: 'Open to opportunities',
  yearsExperience: 5,
  bio: `I'm a full stack developer passionate about building performant, accessible, and visually compelling web applications. With over 5 years of experience spanning frontend and backend development, I specialize in React, TypeScript, and Node.js ecosystems. I thrive on transforming complex problems into simple, elegant solutions that delight users and scale reliably.`,
  social: {
    github: 'https://github.com/alexchen',
    linkedin: 'https://linkedin.com/in/alexchen',
    twitter: 'https://twitter.com/alexchen',
  },
};

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 78 },
      { name: 'CI/CD', level: 85 },
      { name: 'Figma', level: 70 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'CloudSync Dashboard',
    description:
      'A real-time cloud infrastructure monitoring dashboard with interactive visualizations, alerting, and multi-provider support. Built for DevOps teams managing hybrid cloud environments.',
    techStack: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'TaskFlow',
    description:
      'Collaborative project management platform with real-time updates, Kanban boards, and intelligent task prioritization using machine learning suggestions.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'CryptoTracker',
    description:
      'Cryptocurrency portfolio tracker with real-time price feeds, historical analytics, and customizable alerts across 200+ tokens.',
    techStack: ['React', 'GraphQL', 'Python', 'FastAPI', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'DevBlog Engine',
    description:
      'A markdown-powered blogging platform with syntax highlighting, SEO optimization, and a headless CMS API for content management.',
    techStack: ['Next.js', 'MDX', 'Supabase', 'Vercel', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'FitPlan',
    description:
      'AI-powered fitness planning app that generates personalized workout routines and nutrition plans based on user goals and preferences.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'API Gateway Studio',
    description:
      'Visual API gateway configuration tool with rate limiting, authentication middleware, and request/response transformation pipelines.',
    techStack: ['Vue.js', 'Go', 'Docker', 'Redis', 'gRPC'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Senior Full Stack Developer',
    company: 'TechNova Inc.',
    period: '2023 - Present',
    achievements: [
      'Led the migration of a legacy jQuery codebase to React, improving page load times by 60%',
      'Architected a microservices backend handling 50K+ daily active users',
      'Mentored a team of 4 junior developers through code reviews and pair programming',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'DataPulse Analytics',
    period: '2021 - 2023',
    achievements: [
      'Built a real-time analytics dashboard serving 200+ enterprise clients',
      'Reduced API response times by 40% through query optimization and caching strategies',
      'Implemented CI/CD pipelines that cut deployment time from hours to minutes',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'CreativeStack Studio',
    period: '2019 - 2021',
    achievements: [
      'Developed accessible, responsive UI components used across 12 client projects',
      'Introduced TypeScript adoption, reducing runtime errors by 35%',
      'Collaborated with designers to implement pixel-perfect designs with smooth animations',
    ],
  },
];
