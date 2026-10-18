// components/ui/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      
      {/* Subtle Radial Gradient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-accent/[0.15] rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-muted tracking-wide flex items-center gap-2 w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-brand-offwhite mb-6 leading-tight"
        >
          Engineering Logic.<br />
          Scalable Code.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed font-light"
        >
          Full-Stack Engineer specializing in secure web applications, enterprise tools, and high-performance APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Link
            href="/#work"
            className="group px-6 py-3 rounded-full bg-brand-accent text-white font-medium hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <a
            href="https://github.com/GreyHound257"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 text-brand-offwhite font-medium hover:bg-white/5 hover:text-brand-accent transition-colors flex items-center justify-center gap-2"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}