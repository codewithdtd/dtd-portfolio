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
    status: '[Personal Project]',
  },
];

export const projectPlaceholders: Project[] = [
  {
    title: 'EdTech Audio Processing & Analytics Web Application',
    description: 'Developed a scalable web platform featuring audio capture and automated analytical processing pipelines for educational assessments.',
    features: [
      'Implemented chunk-based audio streaming with fault-tolerant retry mechanisms to handle network interruptions gracefully',
      'Engineered backend processing modules for asynchronous audio segment merging and stream handling',
      'Integrated third-party AI processing pipelines to transcribe and extract structured insights from audio data',
      'Built interactive data visualization dashboards using charts to display processed analytical metrics'
    ],
    techStack: ['Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'AI APIs'],
    githubUrl: '#',
    featured: false,
    status: ' ',
  },
  {
    title: 'Cloud Document Automation & Integration Tool',
    description: 'Developed a productivity application featuring automated document generation (Mail Merge) seamlessly integrated with cloud storage services via Microsoft Graph API.',
    features: [
      'Engineered an automated document processing and Mail Merge pipeline using Python and FastAPI',
      'Integrated Microsoft Graph API to handle full CRUD operations (View, Edit, Delete) for cloud-stored documents',
      'Designed and implemented responsive user interfaces for document management and workflow tracking'
    ],
    techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'Microsoft Graph API', 'Docker'],
    githubUrl: '#',
    featured: false,
    status: ' ',
  },
{
    title: 'Mobile App CMS & Backend Infrastructure',
    description: 'Designed and developed a robust backend architecture and Content Management System (CMS) to power mobile application features and administrative workflows.',
    features: [
      'Integrated third-party APIs (YouTube, Vimeo, Eventbrite, Brevo) to power core mobile app features',
      'Implemented rate-limiting and CAPTCHA mechanisms to secure the CMS against abuse',
      'Engineered data processing pipelines using MongoDB and scheduled automated tasks via cron jobs',
      'Configured load balancing and cloud storage integration using AWS S3 and MinIO'
    ],
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'AWS S3', 'MinIO', 'Feather.js'],
    githubUrl: '#',
    featured: false,
    status: ' ',
  }
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  techStack?: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'OTG Lab Vietnam',
    period: 'Oct 2025 - Present',
    achievements: [
      'Resolved critical MongoDB replica set synchronization failures (nodes stuck in recovering state), restoring system availability and ensuring data consistency.',
      'Increased UI delivery speed by 30% via AI-driven tools (Lovable/Supabase), and developed a document-to-image conversion module (PDF/DOCX/TXT) for rapid file previews.',
      'Designed a live-audio recording pipeline (client-side chunking/async server processing) for up to 3-hour sessions, and utilized Websockets for real-time session control to enforce strict single-device login policies.',
      'Managed backend deployments on AWS EC2 utilizing PM2 for resource monitoring, and executed a seamless data migration from MinIO to AWS S3 to enhance scalability.',
      'Integrated Microsoft Graph API to automate OneDrive file management and built dynamic reporting modules (Excel/PDF), reducing manual data export time.',
      'Configured automated CI/CD workflows via GitHub Actions and strengthened system defense by implementing Rate Limiting, CAPTCHA, and resolving server header leakages.',
    ],
    techStack: ['ReactJS', 'VueJS', 'Node.js (FeatherJS)', 'Python', 'FastAPI', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'AWS S3/EC2', 'Supabase', 'Lovable'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Trancosmos Technology Vietnam',
    period: 'Dec 2024 - Sep 2025',
    achievements: [
      'Developed and maintained backend services using Node.js, implementing RESTful APIs, authentication flows, and business logic to ensure secure and efficient data exchange with the VueJS front end.',
      'Built custom backend modules in Drupal (PHP) and optimized database queries for better performance, integrating with Twig templates to deliver dynamic content.',
      'Customized Drupal themes and developed server-side logic in PHP to support complex content workflows, deploying via Docker for consistent environments.',
      'Integrated backend APIs with VueJS components, applying responsive design principles for enhanced user experience.',
      'Implemented automated testing with Cypress to ensure stability across both backend API responses and frontend UI behavior.',
      'Worked in a 5-member team, managing tasks with Backlog and version control with Git.',
    ],
    techStack: ['VueJS', 'TailwindCSS', 'Figma', 'Node.js', 'PHP', 'Drupal', 'MySQL', 'Docker', 'Cypress'],
  },
];
