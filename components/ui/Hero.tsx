// components/ui/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-accent/[0.10] rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-xs font-mono text-brand-muted tracking-[0.2em] uppercase flex items-center gap-3">
                <div className="w-8 h-px bg-white/20" />
                Full-Stack Engineer - {new Date().getFullYear()}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-brand-offwhite mb-6 leading-tight"
            >
              Engineering Logic.<br />
              <span className="text-brand-muted">Scalable Code.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-brand-muted mb-10 max-w-xl leading-relaxed"
            >
              Full-Stack Engineer specializing in secure web applications, enterprise tools, and high-performance APIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
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
                className="px-6 py-3 rounded-full border border-white/10 text-brand-offwhite font-medium hover:bg-white/5 hover:border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Stylized Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full relative"
          >
            <div className="absolute inset-0 bg-brand-accent/5 blur-2xl rounded-3xl" />
            <div className="relative rounded-xl overflow-hidden glass border border-white/10 shadow-2xl">
              {/* Fake Mac Window Header */}
              <div className="bg-black/40 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 flex-1 text-center text-xs font-mono text-brand-muted/50">
                  api/route.ts — Read-Only
                </div>
              </div>
              {/* Code Content */}
              <div className="p-6 overflow-x-auto text-sm font-mono leading-loose">
                <pre className="text-brand-muted">
                  <code>
                    <span className="text-gray-500">{"// App Architecture: Secure Route & API Integration"}</span>
                    {"\n"}
                    <span className="text-purple-400">import</span> {"{ "}
                    <span className="text-brand-offwhite">verifyAuth</span>
                    {" } "} <span className="text-purple-400">from</span> <span className="text-green-300/80">{'\'@/lib/auth\''}</span>{";"}
                    {"\n"}
                    <span className="text-purple-400">import</span> {"{ "}
                    <span className="text-brand-offwhite">fetchEnterpriseData</span>
                    {" } "} <span className="text-purple-400">from</span> <span className="text-green-300/80">{'\'@/services/api\''}</span>{";"}
                    {"\n\n"}
                    <span className="text-purple-400">export async function</span> <span className="text-blue-400">GET</span>{"("}<span className="text-orange-300">req</span>{": Request) {"}
                    {"\n  "}
                    <span className="text-purple-400">const</span> session = <span className="text-purple-400">await</span> <span className="text-blue-400">verifyAuth</span>{"("}req{");"}
                    {"\n  "}
                    <span className="text-purple-400">if</span> {"(!session) "}
                    <span className="text-purple-400">return new</span> <span className="text-yellow-200/80">Response</span>{"("}<span className="text-green-300/80">{'\'Unauthorized\''}</span>{", { "}status{": "}
                    <span className="text-orange-300">401</span>{" });"}
                    {"\n\n  "}
                    <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> <span className="text-blue-400">fetchEnterpriseData</span>{"({" }
                    {"\n    "}userId{": session."}<span className="text-brand-offwhite">id</span>{","}
                    {"\n    "}optimized{": "}
                    <span className="text-orange-300">true</span>{","}
                    {"\n    "}cache{": "}<span className="text-green-300/80">{'\'force-cache\''}</span>
                    {"\n  });"}
                    {"\n\n  "}
                    <span className="text-purple-400">return</span> <span className="text-yellow-200/80">Response</span>{".json({ "}success{": "}
                    <span className="text-orange-300">true</span>{", data });"}
                    {"\n}"}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}