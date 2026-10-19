import {
  Atom,
  Braces,
  Code,
  Database,
  FlaskConical,
  GitBranch,
  Network,
  Server,
  ShieldAlert,
  Terminal,
  Triangle,
  Wind,
  Zap,
} from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

export default function TechMark({ name }: { name: string }) {
  switch (name) {
    case 'Next.js':
      return <span className="tech-mark next font-mono">N</span>;
    case 'React':
      return (
        <span className="tech-mark react">
          <Atom size={18} strokeWidth={1.5} />
        </span>
      );
    case 'TypeScript':
      return <span className="tech-mark ts font-mono">TS</span>;
    case 'Tailwind CSS':
    case 'Tailwind':
      return (
        <span className="tech-mark tailwind">
          <Wind size={18} strokeWidth={1.6} />
        </span>
      );
    case 'PHP':
      return <span className="tech-mark php font-mono font-bold text-[10px] text-cyan-400">PHP</span>;
    case 'HTML':
    case 'HTML 5':
      return (
        <span className="tech-mark html">
          <Code size={16} className="text-orange-400" />
        </span>
      );
    case 'Python':
      return (
        <span className="tech-mark python">
          <Braces size={17} />
        </span>
      );
    case 'FastAPI':
      return (
        <span className="tech-mark fastapi">
          <Zap size={17} />
        </span>
      );
    case 'Flask':
      return (
        <span className="tech-mark flask">
          <FlaskConical size={17} />
        </span>
      );
    case 'Node.js':
      return (
        <span className="tech-mark node">
          <Server size={16} />
        </span>
      );
    case 'PostgreSQL':
    case 'SQL':
      return (
        <span className="tech-mark sql">
          <Database size={16} />
        </span>
      );
    case 'Neon':
    case 'Redis':
      return (
        <span className="tech-mark neon">
          <Network size={16} />
        </span>
      );
    case 'Linux':
      return (
        <span className="tech-mark linux">
          <Terminal size={17} />
        </span>
      );
    case 'Git':
      return (
        <span className="tech-mark git">
          <GitBranch size={17} />
        </span>
      );
    case 'GitHub':
      return (
        <span className="tech-mark github">
          <GitHubIcon size={17} />
        </span>
      );
    case 'Docker':
      return (
        <span className="tech-mark docker">
          <Server size={16} />
        </span>
      );
    case 'Burp Suite':
      return (
        <span className="tech-mark security">
          <ShieldAlert size={16} />
        </span>
      );
    case 'Vercel':
      return (
        <span className="tech-mark vercel">
          <Triangle size={14} fill="currentColor" strokeWidth={0} />
        </span>
      );
    default:
      return (
        <span className="tech-mark default">
          <Braces size={16} />
        </span>
      );
  }
}
