// components/ui/TechStack.tsx
'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiPython, SiFastapi, SiFlask, SiPhp,
  SiPostgresql, SiMysql,
  SiGit, SiGithub, SiVercel, SiLinux
} from 'react-icons/si';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "PHP", icon: SiPhp }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL", icon: SiMysql }
    ]
  },
  {
    category: "Tools & Infra",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Linux", icon: SiLinux }
    ]
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 container mx-auto px-6 max-w-5xl">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-xs font-mono text-brand-muted tracking-[0.2em] uppercase">03 / Technical Stack</span>
          <div className="h-px bg-white/10 flex-grow max-w-[100px]" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-brand-offwhite mb-4"
        >
          A considered toolkit. A solid foundation.
        </motion.h2>
      </div>

      <div className="glass rounded-2xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8"
            >
              <h4 className="text-xs font-mono text-brand-muted mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
                {skillGroup.category}
              </h4>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-brand-offwhite hover:text-brand-accent transition-colors group"
                    >
                      <span className="p-1.5 rounded-md bg-white/5 border border-white/5 text-brand-muted group-hover:text-brand-accent transition-colors">
                        <Icon size={14} />
                      </span>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}