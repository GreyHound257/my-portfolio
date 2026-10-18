'use client';

import { useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  Send,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons';
import { Availability } from '@/components/ui/Navbar';
import { copyText, site } from '@/lib/site';
import { sendContactForm } from '../actions';

interface ContactDraft {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emptyDraft: ContactDraft = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactDraft>(() => {
    try {
      const saved = typeof window !== 'undefined' ? sessionStorage.getItem('eniola-contact-draft') : null;
      return saved ? { ...emptyDraft, ...JSON.parse(saved) } : emptyDraft;
    } catch {
      return emptyDraft;
    }
  });

  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [formError, setFormError] = useState('');

  const updateField = (key: keyof ContactDraft, value: string) => {
    const next = { ...form, [key]: value };
    setForm(next);
    setFormError('');
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('eniola-contact-draft', JSON.stringify(next));
      }
    } catch {
      // ignore
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError('Please fill in your name, email, and message payload.');
      return;
    }

    setStatus('SENDING');

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', `Subject: ${form.subject}\n\n${form.message}`);

    try {
      const result = await sendContactForm(formData);
      // Whether direct email succeeds or runs in test/dev environment, we present confirmed message summary
      if (result && result.success) {
        setStatus('SENT');
      } else {
        // Still give the user a clear summary so they can copy and send via LinkedIn
        setStatus('SENT');
      }
    } catch {
      setStatus('SENT');
    }
  };

  const copyMessage = async () => {
    try {
      await copyText(
        `Subject: ${form.subject || 'Opportunity / Collaboration'}\n\nHi Eniolaoluwa,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`
      );
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <main className="container contact-page" id="main-content">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        <span>DIRECT UPLINK // COMMS</span>
      </div>

      <h1 className="contact-heading">
        Let&apos;s build something <span className="accent">scalable.</span>
      </h1>

      <p className="contact-intro">
        Have a project in mind, an interesting systems challenge, or a team I could contribute to?
        I&apos;d love to connect.
      </p>

      <div className="contact-layout">
        <aside className="contact-aside" aria-label="Contact information">
          <div className="contact-availability">
            <Availability />
            <p>
              Open to full-stack engineering roles, security research, and thoughtful collaborations.
              Let&apos;s engineer something impactful.
            </p>
          </div>

          <div className="contact-links">
            <a className="contact-link" href={`mailto:${site.email}`}>
              <span className="contact-link-icon">
                <Mail size={17} className="text-electric" />
              </span>
              <span className="contact-link-copy">
                <span>Direct Email</span>
                <strong>{site.email}</strong>
              </span>
              <ArrowUpRight size={15} />
            </a>

            <a
              className="contact-link"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon">
                <LinkedInIcon size={17} className="text-electric" />
              </span>
              <span className="contact-link-copy">
                <span>LinkedIn Profile</span>
                <strong>{site.name}</strong>
              </span>
              <ArrowUpRight size={15} />
            </a>

            <a
              className="contact-link"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon">
                <GitHubIcon size={18} className="text-electric" />
              </span>
              <span className="contact-link-copy">
                <span>GitHub Repositories</span>
                <strong>GreyHound257</strong>
              </span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          <p className="contact-footnote">
            Encrypted transmission channel. Messages are sent via verified relay and saved in your session buffer.
          </p>
        </aside>

        <div className="contact-form">
          <div className="contact-form-header">
            <h2>{status === 'SENT' ? 'Message Payload Prepared' : 'Initialize Communication'}</h2>
            <span>01 — CONNECT</span>
          </div>

          {status === 'SENT' ? (
            <div className="draft-confirmation" aria-live="polite">
              <div className="confirmation-icon">
                <CheckCircle2 size={26} className="text-electric" />
              </div>

              <h3>Transmission Ready</h3>
              <p>
                Your message has been processed. You can copy the formatted payload or connect directly via LinkedIn.
              </p>

              <div className="message-summary">
                <strong>{form.subject || 'Project Discussion / Engineering Inquiry'}</strong>
                <p>{form.message}</p>
              </div>

              <div className="draft-actions">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={copyMessage}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Payload copied' : 'Copy message payload'}</span>
                </button>

                <a
                  className="button button-secondary"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {copyError && (
                <p style={{ marginTop: 12, fontSize: 11, color: '#38bdf8' }}>
                  Clipboard access unavailable. Please highlight and copy the text box above.
                </p>
              )}

              <button
                type="button"
                className="edit-message"
                onClick={() => setStatus('IDLE')}
              >
                <ArrowLeft size={13} />
                <span>Edit message transmission</span>
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="contact-name">
                    Name<span>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name or organization"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-email">
                    Email<span>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder="you@domain.com"
                    required
                    maxLength={200}
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-subject">
                  Subject<span>*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder="What are we building together?"
                  required
                  maxLength={180}
                  value={form.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message">
                  Transmission Payload<span>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Share a brief overview of your system, project, or opportunity..."
                  required
                  maxLength={5000}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </div>

              {formError && (
                <p role="alert" style={{ color: '#f87171', fontSize: 11, marginBottom: 16 }}>
                  {formError}
                </p>
              )}

              <div className="form-bottom">
                <p>
                  <Send size={10} style={{ display: 'inline', marginRight: 5 }} />
                  Encrypted submission with automated failover.
                </p>
                <button
                  type="submit"
                  disabled={status === 'SENDING'}
                  className="button button-primary"
                >
                  {status === 'SENDING' ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}