'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  Lock,
  LockKeyhole,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { projects, type ProjectId } from '@/lib/site';
import Modal from './Modal';

export default function ProjectDialog({
  id,
  onClose,
}: {
  id: ProjectId;
  onClose: () => void;
}) {
  const project = projects.find((item) => item.id === id)!;
  const isCUVote = id === 'cuvote';
  const screens = project.screens || [
    {
      id: 'default',
      label: 'Main Overview',
      image: project.image,
      path: isCUVote ? 'cu-vote.vercel.app' : 'saz-helpdesk.corp',
      description: project.description,
    },
  ];

  const [activeScreenId, setActiveScreenId] = useState(screens[0].id);
  const activeScreen = screens.find((s) => s.id === activeScreenId) || screens[0];

  return (
    <Modal label={`Selected work / ${project.number}`} onClose={onClose}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
        <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
          {project.category}
        </span>
        {isCUVote && project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-3.5 py-1.5 rounded-md transition-all"
          >
            <span>Visit cu-vote.vercel.app</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      <h2 className="modal-title">{project.title}</h2>
      <p className="modal-description">{project.description}</p>

      <div className="tags modal-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
        <span className="lab-status" style={{ marginLeft: 6 }}>
          <i />
          {project.status}
        </span>
      </div>

      {/* Screenshot Showcase Container */}
      <div className="modal-preview my-6">
        <div className="preview-browser">
          <div className="browser-toolbar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <div className="browser-address">
              <LockKeyhole size={8} className="text-electric" />
              <span>{activeScreen.path}</span>
            </div>
            <span className="ml-auto text-[8px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
              {isCUVote ? 'VERCEL LIVE DEPLOYMENT' : 'SANLAMALLIANZ INTRANET'}
            </span>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src={activeScreen.image}
              alt={`${project.title} - ${activeScreen.label}`}
              fill
              className="object-contain object-top transition-opacity duration-300"
              sizes="(max-width: 1200px) 100vw, 860px"
              priority
            />
          </div>
        </div>

        {/* View Switcher for multiple screens */}
        {screens.length > 1 && (
          <div className="mt-3 pt-2 px-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-slate-400">View Screen:</span>
              {screens.map((screen) => {
                const isActive = screen.id === activeScreen.id;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveScreenId(screen.id)}
                    className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    <span>{screen.label}</span>
                  </button>
                );
              })}
            </div>
            {activeScreen.description && (
              <p className="text-[11px] text-slate-400 font-mono italic">
                {activeScreen.description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Case Study & Technical Architecture */}
      {isCUVote ? (
        <div className="space-y-6">
          <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-cyan-400" />
              <span>Production Deployment &amp; Problem Solved</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designed and deployed for Covenant University to eliminate election tampering and administrative friction.
              Traditional manual ballots or unverified digital polls risked duplicate submissions and lacked transparent auditability.
              CUVote provides student departments with an enterprise-grade electronic voting gateway accessible on any device.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-slate-800/80 bg-slate-900/30 rounded-lg p-4">
              <Lock size={18} className="text-cyan-400 mb-2" />
              <h4 className="text-xs font-semibold text-white mb-1">Anonymous Ballots</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Voters authenticate with university credentials. Once identity is verified to prevent double voting, the ballot selection is cryptographically separated from the student profile.
              </p>
            </div>

            <div className="border border-slate-800/80 bg-slate-900/30 rounded-lg p-4">
              <CheckCircle2 size={18} className="text-cyan-400 mb-2" />
              <h4 className="text-xs font-semibold text-white mb-1">Audit Trails</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Every administrative event, poll initiation, and ballot confirmation is recorded in an immutable audit ledger, enabling transparent departmental recounts.
              </p>
            </div>

            <div className="border border-slate-800/80 bg-slate-900/30 rounded-lg p-4">
              <Server size={18} className="text-cyan-400 mb-2" />
              <h4 className="text-xs font-semibold text-white mb-1">Live Turnout Engine</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Real-time turnout percentages stream to observers without revealing votes. Full result tabulation automatically unseals the instant election deadlines elapse.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="text-[11px] text-slate-400 font-mono">
              Live URL:{' '}
              <a
                href="https://cu-vote.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                https://cu-vote.vercel.app
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://cu-vote.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                <span>Launch Live Application</span>
                <ArrowUpRight size={14} />
              </a>
              <button
                type="button"
                className="button button-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Terminal size={16} className="text-cyan-400" />
              <span>Internal Enterprise Tool Architecture (PHP, HTML &amp; Tailwind)</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineered as an internal company intranet platform for <strong>SanlamAllianz</strong> to solve operational IT chaos.
              Internal hardware incidents, network gateway provisioning, department reassignments, and credential requests were consolidated into a single responsive portal with dedicated queue tracking and executive oversight dashboards.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-slate-800/80 bg-slate-900/30 rounded-lg p-4">
              <Cpu size={18} className="text-cyan-400 mb-2" />
              <h4 className="text-xs font-semibold text-white mb-1">PHP Core &amp; Webhooks</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Built with native PHP on corporate intranet servers, featuring automated notification widgets, batch CSV user provisioning, and authentication controls.
              </p>
            </div>

            <div className="border border-slate-800/80 bg-slate-900/30 rounded-lg p-4">
              <Layers size={18} className="text-cyan-400 mb-2" />
              <h4 className="text-xs font-semibold text-white mb-1">Tailwind CSS &amp; HTML</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Utility-first Tailwind CSS over semantic HTML structure, delivering a clean, responsive incident console for both employee requesters and IT technicians.
              </p>
            </div>

            <div className="border border-slate-800/80 bg-slate-900/30 rounded-lg p-4">
              <Database size={18} className="text-cyan-400 mb-2" />
              <h4 className="text-xs font-semibold text-white mb-1">SQL Relational Model</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Relational SQL database tracking departments (IT, Finance, Distribution, Retails), SLA resolution pipelines (Open, In Progress, Resolved), and priority distributions.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/70 border border-slate-800/70 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-slate-200 mb-2">Key Enterprise Capabilities</h4>
            <ul className="text-[11px] text-slate-400 space-y-1.5 list-disc list-inside">
              <li>Role-Based Access Control (RBAC) segregating general employees, branch staff, Tier-1 helpdesk technicians, and Global IT admins.</li>
              <li>SLA status pipeline with real-time priority distribution (Low, Medium, High, Critical).</li>
              <li>Global IT Oversight Dashboard with department volume analytics and CSV export reports.</li>
              <li>Batch user onboarding and departmental sub-unit management.</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <span className="text-[11px] text-slate-400 font-mono">
              Deployment: SanlamAllianz Corporate Intranet
            </span>

            <button
              type="button"
              className="button button-secondary"
              onClick={onClose}
            >
              Close Overview
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
