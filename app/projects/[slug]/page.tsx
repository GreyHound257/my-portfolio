import { notFound } from 'next/navigation';
import ProjectCard from '@/components/ui/ProjectCard';
import GlassPanel from '@/components/visuals/GlassPanel';
import { projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);
	if (!project) return notFound();

	return (
		<div className="space-y-8">
			<GlassPanel className="glass-strong">
				<h1 className="text-3xl font-extrabold mb-2">{project.title}</h1>
				<p className="text-gray-300 mb-4">{project.description}</p>
				<div className="flex gap-3">
					{project.repo && (
						<a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-transparent border border-violet-400 text-violet-200">Repo</a>
					)}
					{project.demo && (
						<a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-violet-500 text-white">Live Demo</a>
					)}
				</div>
			</GlassPanel>

			<section>
				<h2 className="text-xl font-semibold mb-4">Project details</h2>
				<ProjectCard title={project.title} description={project.description} href={`/projects/${project.slug}`} tags={project.tags} cover={project.cover} />
			</section>
		</div>
	);
}

