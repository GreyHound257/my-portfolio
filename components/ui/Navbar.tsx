// components/ui/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="glass sticky top-4 z-50 mx-6 rounded-xl-2 p-3 shadow-glow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <span className="inline-block mr-2 text-violet-400">▣</span>
          Eniolaoluwa
        </Link>

        <ul className="flex gap-4 items-center text-sm">
          <li><Link href="#projects" className="hover:underline">Projects</Link></li>
          <li><Link href="/projects" className="hover:underline">Work</Link></li>
          <li><Link href="/contact" className="px-3 py-2 rounded-md glass">Contact</Link></li>
        </ul>
      </nav>
    </header> 
  );
}
