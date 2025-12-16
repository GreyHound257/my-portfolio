// components/ui/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
      <nav className="glass container mx-auto rounded-xl p-3 shadow-glow-md border border-white/5 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <Image 
                src="/logo.png" 
                alt="Kuromaru Protocol"
                fill
                className="object-contain group-hover:opacity-80 transition-opacity"
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Eniolaoluwa D.O.
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-300">
            <li><Link href="/#projects" className="hover:text-white transition-colors">The Archives</Link></li>
            <li><Link href="https://github.com/GreyHound257" target="_blank" className="hover:text-white transition-colors">GitHub</Link></li>
            <li>
              <Link href="/contact" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/5 transition-all">
                Initialize Comms
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button (Visible only on Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 glass rounded-xl border border-white/5 flex flex-col gap-4 text-center md:hidden animate-in slide-in-from-top-2">
            <Link 
              href="/#projects" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white py-2"
            >
              The Archives
            </Link>
            <Link 
              href="https://github.com/GreyHound257" 
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white py-2"
            >
              GitHub
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            >
              Initialize Comms
            </Link>
          </div>
        )}
      </nav>
    </header> 
  );
}