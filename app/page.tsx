'use client';

import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import ProjectPreview from '@/components/ui/ProjectPreview';
import ProjectDialog from '@/components/ui/ProjectDialog';
import LabDialog from '@/components/ui/LabDialog';
import TechStack from '@/components/ui/TechStack';
import { labIcons } from '@/lib/lab-icons';
import { labs, projects, type LabId, type ProjectId } from '@/lib/site';

function SectionHeading({
  number,
  eyebrow,
  title,
  subtitle,
  note,
}: {
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span className="accent">{number}</span>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <h2>
          {title}
          <span className="accent">.</span>
        </h2>
        <p>{subtitle}</p>
      </div>
      <span className="section-note">
        <span className="section-note-dot" />
        {note}
      </span>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<ProjectId | null>(null);
  const [activeLab, setActiveLab] = useState<LabId | null>(null);

  return (
    <>
      <Hero />

      {/* 01. Selected Work */}
      <section id="work" className="container section work-section" aria-labelledby="work-label">
        <div id="work-label">
          <SectionHeading
            number="01"
            eyebrow="Built for the real world"
            title="Selected Work"
            subtitle="Flagship production-grade applications engineered for scale."
            note="Purpose-built. Production-minded."
          />
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <button
                type="button"
                className="project-visual-button"
                onClick={() => setActiveProject(project.id)}
                aria-label={`Explore ${project.title}`}
              >
                <ProjectPreview id={project.id} />
              </button>

              <div className="project-card-body">
                <div className="project-kicker">
                  <span>{project.number}</span>
                  <span>/</span>
                  <span>{project.category}</span>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-[9px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Live Site</span>
                      <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span className="ml-auto text-[9px] font-mono text-slate-400">
                      Internal Tool
                    </span>
                  )}
                </div>

                <div className="project-title-row">
                  <h3>
                    <button
                      type="button"
                      className="project-title"
                      onClick={() => setActiveProject(project.id)}
                    >
                      {project.title}
                    </button>
                  </h3>
                  <button
                    type="button"
                    className="icon-button project-arrow"
                    onClick={() => setActiveProject(project.id)}
                    aria-label={`View ${project.title} details`}
                  >
                    <ArrowUpRight size={15} />
                  </button>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="flex items-center justify-between gap-3 mt-4 flex-wrap">
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project.id)}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 02. The Labs */}
      <section id="labs" className="container section labs-section" aria-labelledby="labs-label">
        <div id="labs-label">
          <SectionHeading
            number="02"
            eyebrow="A space to explore"
            title="The Labs"
            subtitle="Experimental systems, automation protocols &amp; works in progress."
            note="Curiosity, in code."
          />
        </div>

        <div className="lab-grid">
          {labs.map((lab) => {
            const Icon = labIcons[lab.id];
            return (
              <article className="lab-card" key={lab.id}>
                <div className="lab-card-top">
                  <span className="lab-icon">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="lab-status">
                    <i />
                    <span>{lab.status}</span>
                  </span>
                </div>

                <h3>
                  <button
                    type="button"
                    className="lab-title"
                    onClick={() => setActiveLab(lab.id)}
                  >
                    {lab.title}
                    {lab.version && <span className="lab-version">{lab.version}</span>}
                  </button>
                </h3>

                <p className="lab-description">{lab.description}</p>

                <div className="lab-bottom">
                  <div className="tags">
                    {lab.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="icon-button lab-arrow"
                    onClick={() => setActiveLab(lab.id)}
                    aria-label={`Read research notes about ${lab.title}`}
                  >
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 03. Technical Stack */}
      <TechStack />

      {/* Interactive Modals */}
      {activeProject && (
        <ProjectDialog
          key={activeProject}
          id={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
      {activeLab && (
        <LabDialog
          key={activeLab}
          id={activeLab}
          onClose={() => setActiveLab(null)}
        />
      )}
    </>
  );
}