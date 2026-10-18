'use client';

import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Database,
  Info,
  Layers3,
  Plus,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import { projects, type ProjectId } from '@/lib/site';
import Modal from './Modal';
import ProjectPreview from './ProjectPreview';

function VotingDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);
  const candidates = [
    { name: 'Alex Okafor', initials: 'AO', tagline: 'A stronger campus, together.', votes: 1038 },
    { name: 'Jordan Adeyemi', initials: 'JA', tagline: 'Your voice. Our future.', votes: 808 },
  ];
  const total = 1846 + (voted ? 1 : 0);

  return (
    <>
      <div className="demo-notice">
        <Info size={14} className="text-electric shrink-0 mt-0.5" />
        <span>
          Interactive concept simulation with mock data. Votes update this sandbox view and showcase real-time reactivity without altering production records.
        </span>
      </div>

      <div className="demo-panel">
        <div className="demo-header">
          <div>
            <h3>Student Council Election</h3>
            <p>
              {voted
                ? 'Your ballot has been cryptographically recorded in this sandbox.'
                : 'Select a candidate to test the authenticated voter experience.'}
            </p>
          </div>
          <div className="demo-total">
            <strong>{total.toLocaleString()}</strong>
            <span>sample ballots</span>
          </div>
        </div>

        <div className="candidate-list" role="group" aria-label="Election candidates">
          {candidates.map((candidate, index) => {
            const votes = candidate.votes + (voted && selected === index ? 1 : 0);
            const percentage = Math.round((votes / total) * 100);

            return (
              <button
                type="button"
                className={`candidate-option ${selected === index ? 'selected' : ''}`}
                key={candidate.name}
                onClick={() => setSelected(index)}
                disabled={voted}
                aria-pressed={selected === index}
              >
                <div className="candidate-top">
                  <span className="candidate-avatar">{candidate.initials}</span>
                  <span className="candidate-radio">
                    {selected === index && <Check size={11} className="text-black" />}
                  </span>
                </div>
                <h4>{candidate.name}</h4>
                <p>{candidate.tagline}</p>

                {voted && (
                  <>
                    <div className="result-bar">
                      <span style={{ width: `${percentage}%` }} />
                    </div>
                    <div className="result-count">
                      <span>{votes.toLocaleString()} votes</span>
                      <span>{percentage}%</span>
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>

        <div className="demo-actions" aria-live="polite">
          {voted ? (
            <>
              <span className="demo-success">
                <CheckCircle2 size={16} />
                <span>Ballot verified &amp; recorded</span>
              </span>
              <button
                type="button"
                className="button button-quiet"
                onClick={() => {
                  setVoted(false);
                  setSelected(null);
                }}
              >
                <RotateCcw size={13} />
                Reset preview
              </button>
            </>
          ) : (
            <button
              type="button"
              className="button button-primary"
              disabled={selected === null}
              onClick={() => setVoted(true)}
            >
              Cast test vote <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

type TicketStatus = 'Open' | 'In progress' | 'Resolved';
interface DemoTicket {
  id: string;
  title: string;
  category: string;
  status: TicketStatus;
}

const initialTickets: DemoTicket[] = [
  { id: 'IT-0248', title: 'Unable to access VPN gateway', category: 'Network · High priority', status: 'In progress' },
  { id: 'IT-0247', title: 'Developer workstation onboarding', category: 'Software · Medium priority', status: 'Open' },
  { id: 'IT-0246', title: 'SSO multi-factor authentication reset', category: 'Security · Critical', status: 'Resolved' },
  { id: 'IT-0245', title: 'Conference room display bridge', category: 'Hardware · Low priority', status: 'Open' },
];

function TicketDemo() {
  const [tickets, setTickets] = useState<DemoTicket[]>(initialTickets);
  const [filter, setFilter] = useState('All');
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [announcement, setAnnouncement] = useState('');

  const filtered = tickets.filter((ticket) => filter === 'All' || ticket.status === filter);

  const addTicket = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;

    const newTicket: DemoTicket = {
      id: `IT-0${249 + tickets.length - initialTickets.length}`,
      title: title.trim(),
      category: 'General · Normal SLA',
      status: 'Open',
    };

    setTickets([newTicket, ...tickets]);
    setTitle('');
    setCreating(false);
    setFilter('All');
    setAnnouncement(`Ticket ${newTicket.id} created.`);
  };

  return (
    <>
      <div className="demo-notice">
        <Info size={14} className="text-electric shrink-0 mt-0.5" />
        <span>
          Interactive helpdesk sandbox. Create, filter, and modify incident statuses in real-time. Changes persist during this browser session.
        </span>
      </div>

      <div className="demo-panel">
        <div className="demo-header">
          <div>
            <h3>Active Incident Queue</h3>
            <p>
              {tickets.length} total tickets · {tickets.filter((t) => t.status === 'Resolved').length} resolved
            </p>
          </div>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setCreating(!creating)}
            style={{ minHeight: 34, paddingInline: 12, fontSize: 11 }}
          >
            <Plus size={13} />
            New incident
          </button>
        </div>

        {creating && (
          <form className="new-ticket-form" onSubmit={addTicket}>
            <input
              autoFocus
              required
              maxLength={100}
              aria-label="New ticket title"
              placeholder="Describe the technical issue or request..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="button button-primary">
              Log incident
            </button>
            <button
              type="button"
              className="button button-quiet"
              onClick={() => setCreating(false)}
            >
              Cancel
            </button>
          </form>
        )}

        <div className="ticket-controls">
          <div className="ticket-filters" aria-label="Filter tickets">
            {['All', 'Open', 'In progress', 'Resolved'].map((status) => (
              <button
                type="button"
                className={`ticket-filter ${filter === status ? 'active' : ''}`}
                aria-pressed={filter === status}
                key={status}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div>
          {filtered.length ? (
            filtered.map((ticket) => (
              <div className="demo-ticket" key={ticket.id}>
                <div>
                  <span className="demo-ticket-id">{ticket.id}</span>
                  <h4>{ticket.title}</h4>
                  <p>{ticket.category}</p>
                </div>
                <select
                  aria-label={`Status for ${ticket.id}`}
                  value={ticket.status}
                  onChange={(event) => {
                    const newStatus = event.target.value as TicketStatus;
                    setTickets(
                      tickets.map((item) =>
                        item.id === ticket.id ? { ...item, status: newStatus } : item
                      )
                    );
                    setAnnouncement(`${ticket.id} marked ${newStatus}.`);
                  }}
                >
                  <option value="Open">Open</option>
                  <option value="In progress">In progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            ))
          ) : (
            <div className="empty-state">No {filter.toLowerCase()} incidents found. Systems healthy.</div>
          )}
        </div>

        <p className="sr-only" aria-live="polite">
          {announcement}
        </p>
      </div>
    </>
  );
}

export default function ProjectDialog({
  id,
  onClose,
}: {
  id: ProjectId;
  onClose: () => void;
}) {
  const project = projects.find((item) => item.id === id)!;
  const [tab, setTab] = useState<'overview' | 'preview'>('overview');
  const featureIcons = id === 'cuvote' ? [ShieldCheck, Layers3, Database] : [ShieldCheck, Layers3, Bell];

  return (
    <Modal label={`Selected work / ${project.number}`} onClose={onClose}>
      <h2 className="modal-title">{project.title}</h2>
      <p className="modal-description">{project.description}</p>

      <div className="tags modal-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="modal-tabs" role="tablist" aria-label="Project details">
        <button
          type="button"
          role="tab"
          id="overview-tab"
          aria-controls="overview-panel"
          aria-selected={tab === 'overview'}
          className={`modal-tab ${tab === 'overview' ? 'active' : ''}`}
          onClick={() => setTab('overview')}
        >
          Project overview
        </button>
        <button
          type="button"
          role="tab"
          id="preview-tab"
          aria-controls="preview-panel"
          aria-selected={tab === 'preview'}
          className={`modal-tab ${tab === 'preview' ? 'active' : ''}`}
          onClick={() => setTab('preview')}
        >
          Interactive sandbox <span className="accent">↗</span>
        </button>
      </div>

      {tab === 'overview' ? (
        <div role="tabpanel" id="overview-panel" aria-labelledby="overview-tab">
          <div className="modal-preview">
            <ProjectPreview id={id} />
          </div>

          <div className="project-features">
            {project.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div className="project-feature" key={feature.title}>
                  <Icon size={19} className="text-electric" />
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="button button-primary modal-action"
            onClick={() => setTab('preview')}
          >
            Launch interactive sandbox <ArrowRight size={14} />
          </button>
        </div>
      ) : (
        <div role="tabpanel" id="preview-panel" aria-labelledby="preview-tab">
          {id === 'cuvote' ? <VotingDemo /> : <TicketDemo />}
        </div>
      )}
    </Modal>
  );
}
