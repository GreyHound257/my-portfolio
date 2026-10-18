'use client';

import Link from 'next/link';
import { ArrowDownToLine, ArrowLeft, ArrowUpRight, Printer } from 'lucide-react';
import { labs, projects, site, stack } from '@/lib/site';

export default function ResumePage() {
  return (
    <main className="container resume-page" id="main-content">
      <div className="resume-toolbar">
        <Link className="text-link" href="/">
          <ArrowLeft size={14} />
          <span>Back to portfolio</span>
        </Link>
        <div className="resume-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => window.print()}
          >
            <Printer size={14} />
            <span>Print Sheet</span>
          </button>
          <a
            className="button button-primary"
            href={site.resumePdf}
            download="Eniolaoluwa_Dayo-Obatewose_Resume.pdf"
          >
            <ArrowDownToLine size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      <article className="resume-sheet">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span>Engineering Logic. Scalable Code.</span>
        </div>

        <h1>
          Eniolaoluwa<br />Dayo-Obatewose
        </h1>
        <p className="resume-role">Full-Stack &amp; Cybersecurity Engineer</p>

        <p className="resume-summary">
          Full-Stack &amp; Systems Engineer specializing in secure web applications, enterprise
          internal tools, and high-performance asynchronous APIs. Dedicated to clean architecture,
          resilient data integrity, and observable system engineering.
        </p>

        <section className="resume-section">
          <h2>Selected Production Projects</h2>
          {projects.map((project) => (
            <div className="resume-project" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Experimental Systems &amp; Labs</h2>
          {labs.map((lab) => (
            <div className="resume-project" key={lab.id}>
              <h3>
                {lab.title} {lab.version && `(${lab.version})`}
              </h3>
              <p>{lab.description}</p>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Technical Arsenal</h2>
          <div className="resume-stack">
            {stack.map((group) => (
              <div key={group.category}>
                <h3>{group.category}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Let&apos;s Connect</h2>
          <div className="resume-contact">
            <a
              className="text-link"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              className="text-link"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>
            <Link className="text-link" href="/contact">
              <span>Direct Uplink</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
