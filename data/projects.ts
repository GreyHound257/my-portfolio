// data/projects.ts

export interface Project {
  title: string;
  description: string;
  tech: string[];
  slug: string;
  repoUrl?: string;
  demoUrl?: string;
  status: 'Live' | 'In Development' | 'Prototype';
};

export const flagshipProjects: Project[] = [
  {
    slug: 'cuvote',
    title: 'CUVote',
    description: 'A secure, multi-tenant electronic voting web platform engineered for university-scale elections. Architected with a decoupled frontend and backend to ensure high availability and real-time data integrity.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    status: 'Live',
    demoUrl: "https://cuvote.com", // Placeholder
    repoUrl: "https://github.com/GreyHound257/cuvote" // Placeholder
  },
  {
    slug: 'ticketing-dashboard',
    title: 'Enterprise IT Ticketing Dashboard',
    description: 'A full-stack internal helpdesk application designed to streamline enterprise service requests. Features role-based access control (RBAC), ticket lifecycle management, and automated notification workflows.',
    tech: ['React', 'Node.js', 'SQL', 'Tailwind'],
    status: 'Live',
    demoUrl: "https://it-dashboard.example.com", // Placeholder
    repoUrl: "https://github.com/GreyHound257/it-dashboard" // Placeholder
  }
];

export const labProjects: Project[] = [
  {
    slug: 'shadow-keeper',
    title: 'The Shadow Keeper (v16.0)',
    description: 'Asynchronous Python Telegram bot for unified library searching and intelligent large-file handling.',
    tech: ['Python', 'AsyncIO'],
    status: 'In Development',
    repoUrl: 'https://github.com/GreyHound257/ShadowKeeper',
  },
  {
    slug: 'docu-convert-core',
    title: 'DocuConvert Core',
    description: 'High-performance document manipulation utility handling PDF encryption, merging, and OCR conversion via a Flask backend.',
    tech: ['Flask', 'OCR'],
    status: 'In Development',
    repoUrl: 'https://github.com/GreyHound257/docu-convert-bot',
    demoUrl: "https://docu-convert-bot.fly.dev/",
  },
  {
    slug: 'facial-emotion-ai',
    title: 'Facial Emotion AI',
    description: 'Machine learning pipeline for real-time emotion detection from images wrapped in a Flask API.',
    tech: ['Python', 'Computer Vision'],
    status: 'Prototype',
    repoUrl: 'https://github.com/GreyHound257/emotion-detection-web-app',
  }
];