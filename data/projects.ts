export type Project = {
  slug: string;
  title: string;
  description: string;
  cover?: string;
  tags?: string[];
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: 'secure-scanner',
    title: 'Secure Scanner',
    description: 'Mini vulnerability scanner (ports, headers, ssl checks) — built in Python. Demo + report generator.',
    tags: ['cybersecurity','python','tooling'],
    repo: 'https://github.com/you/secure-scanner'
  },
  {
    slug: 'doc-convert-bot',
    title: 'DocConvert Bot',
    description: 'File conversion microservice + telegram bot — queue system and API.',
    tags: ['node','api','automation'],
    repo: 'https://github.com/you/doc-convert-bot'
  }
];
