// app/page.tsx
import Hero from '@/components/ui/Hero';
import TechStack from '@/components/ui/TechStack';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-space-900 selection:bg-cyan-500/30">
      
      {/* 1. Identity Module */}
      <Hero />

      {/* 2. Capabilities Module */}
      <TechStack />

      {/* 3. Archives (Projects) Module */}
      <section id="projects" className="py-24 container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-2">
              // The Archives
            </h2>
            <h3 className="text-3xl font-bold text-white">
              Selected Deployments
            </h3>
          </div>
          <div className="hidden md:block text-xs font-mono text-gray-500">
            SEC_LEVEL: PUBLIC
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="group flex flex-col relative p-6 rounded-xl border border-white/10 bg-space-900/50 hover:border-violet-500/50 hover:bg-space-800 transition-all"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] font-mono px-2 py-1 rounded-full border ${
                  project.status === 'Live' 
                    ? 'border-green-500/30 text-green-400 bg-green-500/5' 
                    : 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5'
                }`}>
                  {project.status.toUpperCase()}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-4 mt-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* The Dual Action Buttons (Pushed to bottom) */}
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/5">
                
                {/* 1. Repo Button (Always shows) */}
                <Link 
                  href={project.repoUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>SOURCE</span>
                </Link>

                {/* 2. Live Demo Button (Only if available) */}
                {project.demoUrl && (
                  <Link 
                    href={project.demoUrl}
                    target="_blank"
                    className="ml-auto flex items-center gap-2 text-xs font-bold bg-white text-black px-3 py-1.5 rounded hover:bg-cyan-400 hover:scale-105 transition-all"
                  >
                    <span>LIVE DEMO</span>
                    <span>→</span>
                  </Link>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}