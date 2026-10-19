'use client';

import { useState } from 'react';
import { Check, Copy, GitBranch, ShieldCheck } from 'lucide-react';
import { copyText } from '@/lib/site';

const snippet = `const engineer = {
  name: 'Eniolaoluwa',
  alias: 'Kuromaru',
  role: 'Full-Stack & Systems',
  principles: [
    'Security-minded',
    'Built to scale',
    'Performance first'
  ],
  stack: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL']
};
// Let's build something that matters.`;

export default function CodeWindow() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function copy() {
    try {
      await copyText(snippet);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopyError(true);
    }
  }

  const lines = [
    <>
      <span className="code-purple">const</span> <span className="code-white">engineer</span> = &#123;
    </>,
    <>
      {'  '}name: <span className="code-blue">&apos;Eniolaoluwa&apos;</span>,
    </>,
    <>
      {'  '}alias: <span className="code-blue">&apos;Kuromaru&apos;</span>,
    </>,
    <>
      {'  '}role: <span className="code-blue">&apos;Full-Stack &amp; Systems&apos;</span>,
    </>,
    <>
      {'  '}principles: [
    </>,
    <>
      {'    '}<span className="code-blue">&apos;Security-minded&apos;</span>,
    </>,
    <>
      {'    '}<span className="code-blue">&apos;Built to scale&apos;</span>,
    </>,
    <>
      {'    '}<span className="code-blue">&apos;Performance first&apos;</span>
    </>,
    <>
      {'  '}],
    </>,
    <>
      {'  '}status: <span className="code-blue">&apos;Systems Online&apos;</span>
    </>,
    <>&#125;;</>,
    <>
      <span className="code-comment">{"// Let's build something that matters."}</span>
      <span className="code-cursor" />
    </>,
  ];

  return (
    <div className="hero-art">
      <span className="art-corner" aria-hidden="true">+</span>
      <div className="code-window">
        <div className="code-topbar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span className="code-filename">
            <b>TS</b> kuromaru.ts
          </span>
          <button
            type="button"
            className="icon-button code-copy"
            onClick={copy}
            aria-label={copied ? 'Snippet copied' : 'Copy code snippet'}
            title={copied ? 'Copied!' : copyError ? 'Copy unavailable' : 'Copy snippet'}
          >
            {copied ? <Check size={13} className="text-electric" /> : <Copy size={13} />}
          </button>
        </div>

        <div className="code-content" aria-label="TypeScript code representing Eniolaoluwa engineering profile">
          {lines.map((line, index) => (
            <div key={index} className="code-line">
              <span className="line-number" aria-hidden="true">
                {index + 1}
              </span>
              <code>{line}</code>
            </div>
          ))}
        </div>

        <div className="code-statusbar">
          <span>
            <GitBranch size={11} className="text-electric" /> main <span className="ml-1 text-slate-400">0 problems</span>
          </span>
          <span>
            TypeScript <span className="ml-2 text-slate-500">UTF-8</span>
          </span>
        </div>
      </div>

      <div className="build-badge">
        <ShieldCheck size={14} className="text-electric" />
        <span>thoughtfully engineered.</span>
      </div>

      <span className="sr-only" aria-live="polite">
        {copied ? 'Code snippet copied to clipboard.' : copyError ? 'Clipboard unavailable.' : ''}
      </span>
    </div>
  );
}
