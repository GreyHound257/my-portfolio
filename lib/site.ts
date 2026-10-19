export const site = {
  name: 'Eniolaoluwa Dayo-Obatewose',
  shortName: 'Eniolaoluwa D.O.',
  alias: 'Kuromaru',
  title: 'Full-Stack & Systems Engineer (Security-Minded)',
  bio: 'Full-stack software engineer building reliable web applications, internal enterprise tools, and high-performance backend services with a security-first foundation.',
  email: 'dayoobatewoseeniolaoluwa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eniolaoluwa-dayo-obatewose-9599282a4/',
  github: 'https://github.com/GreyHound257',
  portfolioRepo: 'https://github.com/GreyHound257/my-portfolio',
  resumePdf: '/eniolaoluwa-resume.pdf',
};

export type ProjectId = 'cuvote' | 'tickets';
export type LabId = 'shadow' | 'documents' | 'emotion';

export interface ProjectScreen {
  id: string;
  label: string;
  image: string;
  path: string;
  description?: string;
}

export interface ProjectItem {
  id: ProjectId;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: 'Live' | 'Featured' | 'Internal System';
  demoUrl?: string;
  image: string;
  secondaryImage?: string;
  screens?: ProjectScreen[];
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
    category: 'E-VOTING PLATFORM · PRODUCTION',
    description:
      'Secure, anonymous, and auditable electronic voting platform built for Covenant University. Engineered with cryptographic ballot separation, complete audit trails, and real-time election turnout monitoring.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    status: 'Live',
    demoUrl: 'https://cu-vote.vercel.app',
    image: '/projects/cuvote.png',
    screens: [
      {
        id: 'portal',
        label: 'Voter Portal',
        image: '/projects/cuvote.png',
        path: 'cu-vote.vercel.app',
        description: 'Public landing and verified voter portal with secure cryptographic ballot separation.',
      },
      {
        id: 'candidates',
        label: 'Candidates Registry',
        image: '/projects/cuvote-candidates.png',
        path: 'cu-vote.vercel.app / candidates',
        description: 'Candidate nomination, credential verification, and departmental approval workflows.',
      },
      {
        id: 'election',
        label: 'Election Setup',
        image: '/projects/cuvote-election.png',
        path: 'cu-vote.vercel.app / elections / new',
        description: 'Administrative election builder configuring academic sessions, positions, and rules.',
      },
      {
        id: 'students',
        label: 'Student Directory',
        image: '/projects/cuvote-students.png',
        path: 'cu-vote.vercel.app / students',
        description: 'Bulk CSV matriculation number onboarding and voter eligibility directory.',
      },
    ],
    features: [
      {
        title: 'Cryptographic Anonymous Ballots',
        description: 'Voter identities are cryptographically separated from ballots to ensure absolute privacy while guaranteeing zero double-voting.',
      },
      {
        title: 'Secure & Auditable Records',
        description: 'Tamper-evident logs maintain an immutable audit trail for complete election verification and administrative transparency.',
      },
      {
        title: 'Live Real-Time Turnout',
        description: 'Real-time turnout tracking and instantly verifiable results published as soon as voting windows close.',
      },
    ],
  },
  {
    id: 'tickets',
    number: '02',
    title: 'SAZ Helpdesk & IT Oversight',
    category: 'INTERNAL ENTERPRISE SYSTEM',
    description:
      'Full-stack internal service desk and IT oversight portal built for SanlamAllianz. Streamlines corporate incident lifecycles, SLA response tracking, department dispatching, and executive analytics.',
    tags: ['PHP', 'HTML', 'Tailwind CSS', 'SQL'],
    status: 'Internal System',
    image: '/projects/saz-helpdesk-clean.png',
    secondaryImage: '/projects/saz-admin.png',
    screens: [
      {
        id: 'portal',
        label: 'Support Portal (Active Tickets)',
        image: '/projects/saz-helpdesk-clean.png',
        path: 'saz-helpdesk.corp / support-portal',
        description: 'Active ticket queue with status badges, priority dispatching, and quick actions.',
      },
      {
        id: 'admin',
        label: 'Global IT Oversight',
        image: '/projects/saz-admin.png',
        path: 'saz-helpdesk.corp / global-it-oversight',
        description: 'Enterprise executive analytics dashboard with ticket volume breakdown and CSV export.',
      },
    ],
    features: [
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Granular permissions segregating employee requesters, tier-1/2 IT support technicians, department leads, and system administrators.',
      },
      {
        title: 'SLA Lifecycle & Incident Routing',
        description: 'Automated triage state machine tracking service requests from ticket logging to priority dispatching and signed resolution.',
      },
      {
        title: 'Lightweight Internal Intranet Architecture',
        description: 'Engineered with a streamlined PHP, HTML, and Tailwind stack running directly on corporate internal servers with fast relational SQL queries.',
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
    items: ['Next.js', 'HTML', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['Python', 'FastAPI', 'Flask', 'PHP'],
  },
  {
    category: 'Databases & Storage',
    items: ['PostgreSQL', 'SQL', 'Neon'],
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
