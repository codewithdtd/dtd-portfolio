export const personalInfo = {
  name: 'Do Thanh Dat',
  title: 'Fullstack Developer',
  tagline: 'Whatever the mind can conceive and believe, it can achieve - Napoleon Hill',
  email: 'dtdat201202@gmail.com',
  location: 'Ho Chi Minh City, Vietnam',
  availability: 'Open to opportunities',
  yearsExperience: '2+',
  bio: `Fullstack Developer dedicated to turning complex ideas into high-performance web applications. 
  My core expertise spans modern tech stacks (React, Vue, Node.js, Laravel) and database management (MySQL, MongoDB). I take ownership of larger functional areas, from designing secure API structures to deploying scalable setups on AWS and automating CI/CD workflows.  Driven by a growth mindset and a proactive attitude, I look forward to contributing to global, innovative engineering teams and creating meaningful digital solutions.`,
  heroBio: 'I build responsive full-stack web apps with React, Vue, Node.js, Laravel, and cloud-ready database workflows.',
  social: {
    linkedin: 'https://linkedin.com/in/dothanhdat02',
  },
};

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Python'],
  },
  {
    category: 'Frameworks & Technologies',
    skills: ['Vue.js', 'React.js', 'Node.js (Express.js, FeatherJS)', 'FastAPI', 'Laravel', 'Bootstrap', 'Socket.IO', 'Redux', 'Pinia'],
  },
  {
    category: 'Databases & Cloud',
    skills: ['MongoDB', 'MySQL', 'Supabase', 'AWS (EC2, S3)'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'PM2', 'Figma', 'Drupal', 'Lovable'],
  },
  // {
  //   category: 'Soft Skills',
  //   skills: ['Problem-solving', 'Research', 'Teamwork', 'Presentation', 'Self-learning'],
  // },
];

export interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    title: 'English SRS & Mastery Learning Platform',
    description: 'A full-stack language learning application combining Spaced Repetition System (SRS) scheduling, interactive flashcard study sessions, and Excel-based vocabulary management.',
    features: [
      'Architected end-to-end full-stack solution using Next.js (App Router, Tailwind CSS) and FastAPI (Python), supported by SQLAlchemy and PostgreSQL/SQLite.',
      'Designed an automated Excel workbook parser using openpyxl with validation pipelines for seamless vocabulary and sheet importing.',
      'Engineered an intelligent Spaced Repetition System (SRS) and multi-round mastery review queue with real-time study tracking and weak-card analytics.',
      'Built interactive daily study dashboards with check-in calendars, streak tracking, notification triggers, and desktop alert mechanisms.'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'openpyxl'],
    githubUrl: 'https://github.com/codewithdtd/learn-fast',
    liveUrl: 'https://dflow-six.vercel.app/',
    featured: true,
    status: 'Personal Project',
  },
  {
    title: 'Full-Stack Sports Field Management System',
    description: 'A robust management system handling field bookings, customer portals, role-based controls, and payment integrations.',
    features: [
      'Developed a full-stack management system using ExpressJS and ReactJS, building RESTful APIs to efficiently handle field booking workflows, customer data, and order status tracking.',
      'Implemented a Role-Based Access Control (RBAC) system utilizing JWT authentication, ensuring secure routing and data isolation across Customer, Staff, and Admin portals.',
      'Integrated ZaloPay gateway for secure transaction processing, handling payment state validations to ensure accurate order fulfillment.',
      'Structured optimized MongoDB schemas for relational data (users, facilities, transactions) and built a secure file processing pipeline using Multer for image uploads.'
    ],
    techStack: ['NodeJS (ExpressJS)', 'ReactJS', 'Redux', 'Tailwind CSS', 'Figma', 'MUI chart', 'EmailJS', 'Axios', 'JWT', 'MongoDB'],
    githubUrl: 'https://github.com/codewithdtd/sports',
    featured: true,
    status: 'Personal Project',
  },
];

export const projectPlaceholders: Project[] = [];

export interface SubProject {
  title: string;
  category?: string;
  description: string;
  features: string[];
  techStack: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary?: string;
  subProjects?: SubProject[];
  achievements?: string[];
  techStack?: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'OTG Lab Vietnam',
    period: 'Oct 2025 - Present',
    location: 'Ho Chi Minh City, Vietnam',
    summary: 'Lead full-stack engineering across core enterprise platforms, focusing on scalable real-time audio processing pipelines, high-availability microservices, and automated cloud infrastructure.',
    subProjects: [
      {
        title: 'EdTech Audio Processing & Analytics Web Application',
        category: 'Audio Capture & Processing Platform',
        description: 'Scalable educational assessment web application featuring continuous audio recording pipelines, automated analytical scoring, and interactive reporting dashboards.',
        features: [
          'Engineered a resilient audio capture pipeline with MediaRecorder, implementing client-side chunking, sequential upload, and retry mechanisms for long-running sessions up to 3 hours.',
          'Configured 5 Laravel queue worker processes with Supervisor for asynchronous background processing, audio transcription, and analytical scoring pipelines.',
          'Developed responsive React/TypeScript interfaces integrated with Laravel REST APIs, Supabase Auth, and WebSocket session control for real-time monitoring and single-device login enforcement.',
          'Built interactive analytical dashboards with Chart.js and automated PDF/Excel reports visualizing assessment scores, speaking-time distribution, and performance metrics.',
          'Accelerated frontend UI delivery speed by 30% using AI-assisted prototyping tools (Lovable/Supabase), and developed multi-format document preview modules (PDF/DOCX/TXT).'
        ],
        techStack: ['React', 'TypeScript', 'Laravel', 'PHP', 'PostgreSQL', 'Supabase', 'WebSockets', 'Chart.js', 'Supervisor', 'AI APIs']
      },
      {
        title: 'Mobile App CMS & Backend Infrastructure',
        category: 'CMS & Cloud Infrastructure',
        description: 'High-availability backend architecture and Content Management System (CMS) powering mobile application features, admin workflows, and third-party media integrations.',
        features: [
          'Developed modular Vue.js CMS interfaces and Node.js/FeathersJS REST APIs for content management, live event tracking, and user notifications.',
          'Integrated third-party APIs including YouTube, Vimeo, Eventbrite, and Brevo APIs with scheduled background cron jobs for automated multi-channel synchronization.',
          'Diagnosed and resolved critical MongoDB replica-set synchronization failures (nodes stuck in recovering state) by restoring keyFile security configurations and quorum connectivity.',
          'Deployed CMS and Node.js microservices on AWS EC2 using SSH and PM2 process manager, and executed zero-data-loss storage migration from MinIO to AWS S3.',
          'Strengthened production security by integrating Rate Limiting, CAPTCHA bot mitigation, automated CI/CD via GitHub Actions, and Microsoft Graph API OneDrive integrations.'
        ],
        techStack: ['Vue.js', 'Node.js (FeathersJS)', 'MongoDB', 'AWS (EC2, S3)', 'MinIO', 'PM2', 'GitHub Actions', 'Microsoft Graph API']
      }
    ],
    techStack: ['React', 'Vue.js', 'Node.js (FeathersJS)', 'Laravel', 'FastAPI', 'MongoDB', 'PostgreSQL', 'AWS (EC2, S3)', 'Supabase'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Trancosmos Technology Vietnam',
    period: 'Dec 2024 - Sep 2025',
    location: 'Ho Chi Minh City, Vietnam',
    summary: 'Contributed to enterprise web solutions and content management workflows within a cross-functional Agile engineering team.',
    achievements: [
      'Developed and maintained backend services using Node.js, implementing RESTful APIs, authentication flows, and business logic to ensure secure and efficient data exchange with the VueJS front end.',
      'Built custom backend modules in Drupal (PHP) and optimized database queries for better performance, integrating with Twig templates to deliver dynamic content.',
      'Customized Drupal themes and developed server-side logic in PHP to support complex content workflows, deploying via Docker for consistent environments.',
      'Integrated backend APIs with VueJS components, applying responsive design principles for enhanced user experience.',
      'Implemented automated testing with Cypress to ensure stability across both backend API responses and frontend UI behavior.',
      'Collaborated in an Agile 5-member team, managing sprint deliverables with Backlog and Git version control.',
    ],
    techStack: ['Vue.js', 'Node.js', 'PHP', 'Drupal', 'MySQL', 'Docker', 'Cypress', 'Tailwind CSS'],
  },
];
