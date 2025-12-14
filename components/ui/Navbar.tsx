// components/ui/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="glass sticky top-4 z-50 mx-6 rounded-xl p-3 shadow-glow-md border border-white/5">
      <nav className="container mx-auto flex items-center justify-between">
        
        {/* Logo / Home Link */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <Image 
              src="/logo.png" // <--- Path to your file in 'public'
              alt="Kuromaru Protocol"
              fill
              className="object-contain group-hover:opacity-80 transition-opacity"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Eniolaoluwa Dayo-Obatewose
          </span>
        </Link>

        {/* Simplified Navigation */}
        <ul className="flex gap-6 items-center text-sm font-medium text-gray-300">
          <li>
            <Link href="/#projects" className="hover:text-white transition-colors">
              The Archives
            </Link>
          </li>
          <li>
            <Link 
              href="https://github.com/GreyHound257" 
              target="_blank" 
              className="hover:text-white transition-colors"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link href="/contact" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/5 transition-all">
              Initialize Comms
            </Link>
          </li>
        </ul>

      </nav>
    </header> 
  );
}