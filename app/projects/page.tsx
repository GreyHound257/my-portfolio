// app/projects/page.tsx
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'The Archives | Kuromaru',
  description: 'Full operational history and technical deployments.',
};

export default function ProjectsArchive() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mb-16">
        <h2 className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-4">
          // Index_Reference: ALL
        </h2>
        <h1 className="text-5xl font-bold text-white mb-6">
          The Archives
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          A complete log of deployed bots, scripts, and cybersecurity tools. 
          Each entry represents a solved problem.
        </p>
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
    </div>
  );
}