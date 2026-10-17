// components/ui/SelectedWork.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { flagshipProjects } from '@/data/projects';
import Link from 'next/link';

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 container mx-auto px-6 max-w-5xl">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-brand-offwhite mb-4"
        >
          Selected Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brand-muted text-lg"
        >
          Flagship production-level applications.
        </motion.p>
      </div>

      <div className="flex flex-col gap-8">
        {flagshipProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 md:p-10 rounded-2xl group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-brand-offwhite mb-3 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-muted leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3">
                {project.repoUrl && (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-offwhite transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={20} />
                  </Link>
                )}
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-offwhite transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </Link>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-white/5 text-brand-muted border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}