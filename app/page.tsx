// app/page.tsx
import Hero from '@/components/ui/Hero';
import TechStack from '@/components/ui/TechStack';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

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
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              href={project.link || '#'}
              tech={project.tech}
              status={project.status}
            />
          ))}
        </div>
      </section>

    </main>
  );
}