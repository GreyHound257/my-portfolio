// Inside components/ui/ProjectCard.tsx

type Props = {
  title: string;
  description: string;
  href: string;
  tech: string[];  // Changed from tags
  status: string;  // Added status
};

export default function ProjectCard({ title, description, href, tech, status }: Props) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glass group relative block p-8 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`text-xs font-mono px-2 py-1 rounded ${
            status === 'Live' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
        }`}>
          {status}
        </div>
        <span className="text-gray-600 group-hover:text-violet-400 transition-colors">↗</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}