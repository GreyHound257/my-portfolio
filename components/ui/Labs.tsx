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
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-brand-offwhite mb-4"
        >
          The Labs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-brand-muted text-lg"
        >
          Experimental projects & works in progress.
        </motion.p>
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
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-brand-offwhite group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2 text-brand-muted">
                {project.repoUrl && (
                  <Link href={project.repoUrl} target="_blank" className="hover:text-brand-accent transition-colors">
                    <FaGithub size={18} />
                  </Link>
                )}
                {project.demoUrl && (
                  <Link href={project.demoUrl} target="_blank" className="hover:text-brand-accent transition-colors">
                    <ExternalLink size={18} />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-brand-muted border border-white/5"
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