// components/ui/SelectedWork.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { flagshipProjects } from '@/data/projects';
import Link from 'next/link';

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 container mx-auto px-6 max-w-5xl">
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
              <span className="text-xs font-mono text-brand-muted tracking-[0.2em] uppercase">01 / Built for the real world</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-offwhite">
              Selected Work.
            </h2>
            <p className="text-brand-muted text-sm mt-1">
              Flagship production-level applications.
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
            <span>Purpose-built. Production-minded.</span>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {flagshipProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex flex-col rounded-2xl group hover:border-brand-accent/30 overflow-hidden"
          >
            {/* Image Placeholder - Top Half */}
            <div className="w-full aspect-video bg-white/5 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-4 rounded-xl border border-white/10 bg-[#0f0f11] shadow-2xl flex items-center justify-center">
                  <span className="text-brand-muted font-mono text-xs opacity-40 uppercase tracking-widest">
                    [ Project Interface ]
                  </span>
               </div>
            </div>

            {/* Details - Bottom Half */}
            <div className="p-8 flex flex-col h-full">
              <div className="mb-4">
                 <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-brand-muted tracking-widest uppercase">
                    <span>0{index + 1}</span>
                    <span className="text-brand-offwhite/20">/</span>
                    <span>{project.slug === 'cuvote' ? 'Web Application' : 'Enterprise Software'}</span>
                 </div>
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-2xl font-bold text-brand-offwhite group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <Link
                    href={project.demoUrl || project.repoUrl || '#'}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 hover:text-brand-accent text-brand-muted transition-colors group/link"
                    aria-label="View Project"
                  >
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              <p className="text-brand-muted text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[10px] font-mono rounded border border-white/5 bg-white/5 text-brand-muted uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}