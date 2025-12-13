// components/ui/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  href: string;
  cover?: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, href, cover, tags = [] }: Props) {
  return (
    <article className="glass rounded-xl p-4 hover:scale-[1.01] transition-transform">
      <Link href={href} className="block">
        <div className="h-40 w-full rounded-md overflow-hidden mb-3 bg-space-800 flex items-center justify-center">
          {cover ? <Image src={cover} alt={title} width={800} height={400} className="object-cover" /> : <div className="text-gray-500">No image</div>}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-300">{description}</p>

        <div className="mt-3 flex gap-2 text-xs text-gray-400">
          {tags.map(t => <span key={t} className="px-2 py-1 rounded-md glass">{t}</span>)}
        </div>
      </Link>
    </article>
  );
}
