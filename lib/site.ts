export const site = {
  name: 'Eniolaoluwa Dayo-Obatewose',
  shortName: 'Eniolaoluwa D.O.',
  alias: 'Kuromaru',
  title: 'Cybersecurity & Full-Stack Engineer',
  bio: 'Specializing in secure web applications, automated workflows, and high-performance APIs.',
  email: 'dayoobatewoseeniolaoluwa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eniolaoluwa-dayo-obatewose/',
  github: 'https://github.com/GreyHound257',
  portfolioRepo: 'https://github.com/GreyHound257/my-portfolio',
  resumePdf: '/eniolaoluwa-resume.pdf',
};

export type ProjectId = 'cuvote' | 'tickets';
export type LabId = 'shadow' | 'documents' | 'emotion';

export interface ProjectItem {
  id: ProjectId;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: 'Live' | 'Featured';
  demoUrl?: string;
  features: { title: string; description: string }[];
}

export interface LabItem {
  id: LabId;
  title: string;
  version: string;
  description: string;
  tags: string[];
  status: 'In development' | 'Live' | 'Experimental';
  demoUrl?: string;
  idea: string;
  steps: string[];
  direction: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'cuvote',
    number: '01',
    title: 'CUVote',
    category: 'WEB APPLICATION',
    description:
      'A secure, multi-tenant electronic voting web platform engineered for university-scale elections. Architected with a decoupled frontend and backend to ensure high availability, cryptographic vote verification, and real-time data integrity.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'TypeScript', 'Tailwind'],
    status: 'Featured',
    features: [
      {
        title: 'Security at every layer',
        description: 'Tenant-isolated election databases, cryptographically signed voter ballots, and granular role-based administrative access.',
      },
      {
        title: 'Decoupled by design',
        description: 'A Next.js client paired with an asynchronous FastAPI microservice ensures the ballot interface stays fast and resilient during peak voting surges.',
      },
      {
        title: 'Integrity comes first',
        description: 'PostgreSQL-backed relational guarantees and idempotent transaction logs provide a tamper-resistant foundation for live election tallies.',
      },
    ],
  },
  {
    id: 'tickets',
    number: '02',
    title: 'Enterprise IT Ticketing Dashboard',
    category: 'ENTERPRISE SOFTWARE',
    description:
      'A full-stack internal helpdesk platform built to streamline corporate IT service requests. Features strict role-based access control (RBAC), automated SLA tracking, incident triage workflows, and instant notifications.',
    tags: ['React', 'Node.js', 'SQL', 'Tailwind CSS', 'WebSockets'],
    status: 'Featured',
    features: [
      {
        title: 'Role-based authorization',
        description: 'Multi-tiered access control partitions requesters, tier-1/2 support agents, and system administrators with fine-grained visibility.',
      },
      {
        title: 'Automated lifecycle tracking',
        description: 'Follows service incidents from triage through assignment, diagnostic escalations, and signed resolution auditing.',
      },
      {
        title: 'Real-time telemetry',
        description: 'Live ticket counters and state change events keep distributed engineering and support teams in continuous sync.',
      },
    ],
  },
];

export const labs: LabItem[] = [
  {
    id: 'shadow',
    title: 'The Shadow Keeper',
    version: 'v16.0',
    description:
      'Asynchronous Python Telegram bot for unified shadow library searches, Hydra query routing, real-time logging, and intelligent large-file auto-splitting.',
    tags: ['Python', 'AsyncIO', 'Telegram API', 'Render', 'Flask'],
    status: 'Live',
    demoUrl: 'https://t.me/shadowkeeperbot',
    idea:
      'An exploration of how an asynchronous interface can make querying distributed shadow libraries feel as fluid as a conversation. Features the "Hydra" engine for parallel source querying and intelligent auto-chunking when files exceed platform size limits.',
    steps: [
      'A Telegram command triggers a validated search payload with rate-limited authentication.',
      'AsyncIO query workers query and normalize metadata across multi-mirror sources concurrently.',
      'Streams large binaries through an automated memory-efficient chunking pipeline prior to delivery.',
    ],
    direction: 'Fault-tolerant worker queues, resilient retry backoffs, and memory-conscious streaming.',
  },
  {
    id: 'documents',
    title: 'DocuConvert Core',
    version: 'v2.1',
    description:
      'High-performance document manipulation backend handling PDF encryption, secure merging, page extraction, and Tesseract OCR conversion.',
    tags: ['Python', 'Flask', 'OCR', 'PDF Security', 'Fly.io'],
    status: 'In development',
    demoUrl: 'https://docu-convert-bot.fly.dev/',
    idea:
      'A dedicated document processing microservice that consolidates complex PDF manipulations behind a clean REST interface, ensuring bounded memory usage and automatic sanitization of uploaded files.',
    steps: [
      'Incoming document streams are validated, MIME-verified, and placed in temporary isolated memory buffers.',
      'The processing pipeline securely applies user-selected encryption, OCR text extraction, or multi-PDF merges.',
      'Sanitized output artifacts are returned with comprehensive operation audit headers.',
    ],
    direction: 'Bounded CPU utilization, secure temporary file unlinking, and low-latency OCR caching.',
  },
  {
    id: 'emotion',
    title: 'Facial Emotion AI',
    version: 'v1.4',
    description:
      'Machine learning pipeline for real-time facial expression analysis and emotion classification, wrapped in a low-latency Flask inference API.',
    tags: ['Python', 'TensorFlow', 'Flask', 'Computer Vision', 'OpenCV'],
    status: 'Experimental',
    idea:
      'An experimental computer-vision classification pipeline testing convolutional architectures against real-time webcam captures and static imagery to output calibrated expression probability matrices.',
    steps: [
      'Raw image frames are normalized, gray-scaled, and passed through Haar-cascade face localization.',
      'Detected facial ROI tensors are evaluated through a trained CNN feature extractor.',
      'A Flask endpoint returns ranked probability distributions and landmark bounds in a structured JSON response.',
    ],
    direction: 'Inference latency optimization, confidence calibration, and private on-device processing.',
  },
];

export const stack = [
  {
    category: 'Frontend & UI',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['Python', 'FastAPI', 'Flask'],
  },
  {
    category: 'Databases & Storage',
    items: ['PostgreSQL', 'SQL', 'Neon', 'Redis'],
  },
  {
    category: 'Systems & Tools',
    items: ['Linux', 'Git', 'GitHub', 'Docker'],
  },
];

export async function copyText(text: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  if (typeof document !== 'undefined') {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) throw new Error('Unable to copy');
  }
}
