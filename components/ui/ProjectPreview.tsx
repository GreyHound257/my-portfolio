import Image from 'next/image';
import { ExternalLink, LockKeyhole, Shield } from 'lucide-react';
import { projects, type ProjectId } from '@/lib/site';

function Toolbar({ address, badge }: { address: string; badge?: string }) {
  return (
    <div className="browser-toolbar">
      <div className="window-dots">
        <i />
        <i />
        <i />
      </div>
      <div className="browser-address">
        <LockKeyhole size={8} className="text-electric" />
        <span>{address}</span>
      </div>
      {badge && (
        <span className="ml-auto text-[8px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
          {badge}
        </span>
      )}
    </div>
  );
}

export default function ProjectPreview({ id }: { id: ProjectId }) {
  const project = projects.find((p) => p.id === id)!;

  if (id === 'cuvote') {
    return (
      <div
        className="project-preview preview-vote group"
        role="img"
        aria-label="CUVote platform: Live Covenant University E-Voting Portal at cu-vote.vercel.app"
      >
        <div className="preview-browser">
          <Toolbar address="cu-vote.vercel.app" badge="LIVE DEPLOYMENT" />
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
            <Image
              src={project.image}
              alt="CUVote - Covenant University E-Voting Portal"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Live badge overlay */}
            <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-[9px] font-mono text-cyan-300 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>cu-vote.vercel.app</span>
              <ExternalLink size={10} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-preview preview-tickets group"
      role="img"
      aria-label="SAZ Helpdesk: SanlamAllianz Internal Enterprise IT Helpdesk & Support Portal"
    >
      <div className="preview-browser ticket-browser">
        <Toolbar address="saz-helpdesk.corp / portal" badge="PHP · TAILWIND · INTERNAL" />
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
          <Image
            src={project.image}
            alt="SAZ Helpdesk - Internal Enterprise Support Portal"
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Internal badge overlay */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[9px] font-mono text-slate-300 shadow-lg">
            <Shield size={10} className="text-cyan-400" />
            <span>SanlamAllianz Internal Deployment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
