// components/ui/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'Labs', href: '/#labs' },
    { name: 'Stack', href: '/#stack' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 rounded-full px-4 py-2 flex items-center justify-between gap-8 md:gap-16
          ${scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-5 h-5 flex items-center justify-center border border-white/20 rounded-md">
            <span className="text-[10px] font-mono font-bold text-white">&lt;/&gt;</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-brand-offwhite group-hover:text-white transition-colors ml-1">
            Eniolaoluwa D.O.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-brand-muted">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-brand-offwhite transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Status Indicator & Action Button */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"></div>
            <span className="text-xs font-medium text-brand-muted">Available for new opportunities</span>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-brand-offwhite transition-all"
          >
            Resume
            <Download size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-muted hover:text-brand-offwhite transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-6 right-6 pointer-events-auto p-4 glass rounded-2xl md:hidden flex flex-col gap-4 shadow-xl shadow-black/50"
          >
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-muted hover:text-brand-offwhite font-medium px-2 py-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full bg-white/10 my-1" />
            <div className="flex items-center gap-2 justify-center py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"></div>
              <span className="text-xs font-medium text-brand-muted">Available for new opportunities</span>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-center font-medium px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-brand-offwhite transition-all"
            >
              Resume
              <Download size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header> 
  );
}
