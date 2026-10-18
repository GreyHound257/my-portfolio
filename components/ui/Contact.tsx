'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Send, Mail, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 container mx-auto px-6 max-w-5xl">

      {/* Header */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-xs font-mono text-brand-muted tracking-[0.2em] uppercase">
            04 / Let&apos;s start a conversation
          </span>
          <div className="h-px bg-white/10 flex-grow max-w-[100px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-brand-offwhite mb-4"
        >
          Let&apos;s build something<br />
          <span className="text-brand-accent">scalable.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-brand-muted max-w-lg leading-relaxed text-sm md:text-base"
        >
          Have a project in mind, an interesting challenge, or a team I could contribute to? I&apos;d love to hear about it.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left Column: Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          {/* Status Card */}
          <div className="glass-card p-6 rounded-2xl border-brand-accent/20 bg-brand-accent/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
              <span className="text-sm font-medium text-brand-offwhite">Available for new opportunities</span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed">
              Open to full-stack engineering roles and thoughtful collaborations. Let&apos;s make something useful.
            </p>
          </div>

          {/* Email Card */}
          <a
            href="mailto:hello@eniolaoluwa.dev"
            className="group glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-1">Primary Address</div>
                <div className="text-sm font-medium text-brand-offwhite">hello@eniolaoluwa.dev</div>
              </div>
            </div>
            <ExternalLink size={14} className="text-brand-muted opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/GreyHound257"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                <FaGithub size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-1">GitHub</div>
                <div className="text-sm font-medium text-brand-offwhite">Find my developer profile</div>
              </div>
            </div>
            <ExternalLink size={14} className="text-brand-muted opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>

          <div className="mt-4 text-[10px] font-mono text-brand-muted/50 leading-relaxed uppercase">
            This is a portfolio wireframe. The email is a preview address; use the LinkedIn profile to connect. GitHub opens a profile search.
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-brand-offwhite">Tell me what you&apos;re thinking.</h3>
            <span className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">01 - Connect</span>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-brand-muted uppercase tracking-widest">Name *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-offwhite placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-brand-muted uppercase tracking-widest">Email *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-offwhite placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-mono text-brand-muted uppercase tracking-widest">Subject *</label>
              <input
                type="text"
                id="subject"
                placeholder="What's on your mind?"
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-offwhite placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono text-brand-muted uppercase tracking-widest">Message *</label>
              <textarea
                id="message"
                rows={5}
                placeholder="A little about your project, opportunity, or idea..."
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-offwhite placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-2 text-[10px] font-mono text-brand-muted/70 max-w-[200px]">
                <Send size={12} className="mt-0.5 flex-shrink-0" />
                <span>Preview mode. Prepare a draft; nothing is sent or uploaded.</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto group px-6 py-3 rounded-lg bg-brand-accent text-brand-black font-medium hover:bg-blue-400 transition-all flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}