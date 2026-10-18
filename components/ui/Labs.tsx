// components/ui/Labs.tsx
'use client';

import { motion } from 'framer-motion';
import { labProjects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Labs() {
  return (
    <section id="labs" className="py-24 container mx-auto px-6 max-w-5xl">
      <div className="mb-16">
        <div className="flex items-end justify-between mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-brand-muted tracking-[0.2em] uppercase">02 / Space to explore</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-offwhite">
              The Labs.
            </h2>
            <p className="text-brand-muted text-sm mt-1">
              Experimental projects & works in progress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-xs font-mono text-brand-muted opacity-60"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-muted" />
            <span>Curiosity, in code.</span>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 rounded-xl flex flex-col h-full group hover:border-brand-accent/30"
          >
            <div className="mb-6 flex justify-between items-center text-[10px] font-mono text-brand-muted uppercase tracking-widest">
              <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center bg-white/5">
                <FaGithub size={14} />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-brand-muted opacity-50" />
                <span>IN DEVELOPMENT</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-brand-offwhite group-hover:text-brand-accent transition-colors mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[9px] font-mono rounded bg-white/5 text-brand-muted border border-white/5 uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                  href={project.demoUrl || project.repoUrl || '#'}
                  target="_blank"
                  className="text-brand-muted hover:text-brand-accent transition-colors group/link"
                  aria-label="View Project"
              >
                  <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}