// app/page.tsx
import Hero from '@/components/ui/Hero';
import TechStack from '@/components/ui/TechStack';
import { projects } from '@/data/projects';
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
              className={`group flex flex-col relative p-6 rounded-xl border transition-all duration-300
                ${project.status === 'Live' 
                  // LIVE PROJECTS: Stronger Green Glow)
                  ? 'bg-space-900/80 border-green-500/30 shadow-[0_0_50px_-12px_rgba(34,197,94,0.25)] hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.35)]' 
                  
                  // OTHER PROJECTS: Standard look, but with a Violet Glow on HOVER
                  : 'bg-space-900/50 border-white/10 hover:border-violet-500/50 hover:bg-space-800 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]'
                }
              `}
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

              {/* Action Buttons*/}
              <div className="mt-auto flex items-center justify-end gap-3 pt-4 border-t border-white/5">
                
                {/* Only Live Demo Button Remains */}
                {project.demoUrl && (
                  <Link 
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-bold bg-white text-black px-3 py-1.5 rounded hover:bg-cyan-400 hover:scale-105 transition-all"
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