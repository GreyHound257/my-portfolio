import Hero from '@/components/ui/Hero';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.slug} title={p.title} description={p.description} href={`/projects/${p.slug}`} tags={p.tags} />
          ))}
        </div>
      </section>
    </div>
  );
}
