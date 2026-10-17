// components/ui/TechStack.tsx
'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Python", "FastAPI", "Flask", "PHP"] },
  { category: "Databases", items: ["PostgreSQL", "SQL"] },
  { category: "Tools & Infra", items: ["Git", "GitHub", "Vercel", "Neon", "Linux"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 container mx-auto px-6 max-w-5xl">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-brand-offwhite mb-4"
        >
          Technical Stack
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 rounded-xl"
          >
            <h4 className="text-sm font-semibold text-brand-offwhite mb-4 uppercase tracking-wider">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-mono rounded-md bg-white/5 text-brand-muted border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}