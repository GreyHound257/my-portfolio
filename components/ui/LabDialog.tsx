'use client';

import { ExternalLink } from 'lucide-react';
import { labs, type LabId } from '@/lib/site';
import { labIcons } from '@/lib/lab-icons';
import Modal from './Modal';

export default function LabDialog({
  id,
  onClose,
}: {
  id: LabId;
  onClose: () => void;
}) {
  const lab = labs.find((item) => item.id === id)!;
  const Icon = labIcons[id];

  return (
    <Modal label="The Labs / Research & Engineering Notes" onClose={onClose} className="lab-modal">
      <div className="lab-icon lab-modal-icon">
        <Icon size={24} className="text-electric" />
      </div>

      <h2 className="modal-title">
        {lab.title}
        {lab.version && <span className="lab-version font-mono text-electric"> ({lab.version})</span>}
      </h2>

      <p className="modal-description">{lab.description}</p>

      <div className="tags modal-tags">
        {lab.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
        <span className="lab-status" style={{ marginLeft: 6 }}>
          <i />
          {lab.status}
        </span>
      </div>

      <section className="lab-detail-block">
        <h3>The Core Architecture</h3>
        <p>{lab.idea}</p>
      </section>

      <section className="lab-detail-block">
        <h3>Pipeline Workflow</h3>
        <ol className="lab-workflow">
          {lab.steps.map((step, index) => (
            <li className="lab-step" key={step}>
              <span className="lab-step-number">0{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="lab-detail-block">
        <h3>Engineering Focus</h3>
        <p>{lab.direction}</p>
      </section>

      <div className="flex flex-wrap items-center gap-3 mt-8 pt-4 border-t border-slate-800">
        {lab.demoUrl && (
          <a
            href={lab.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            <span>Launch deployment</span>
            <ExternalLink size={13} />
          </a>
        )}
        <button
          type="button"
          className="button button-secondary"
          onClick={onClose}
        >
          Return to labs
        </button>
      </div>
    </Modal>
  );
}
