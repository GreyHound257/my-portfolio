'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import { BrandMark } from './BrandIcons';
import { site } from '@/lib/site';

const links = [
  { name: 'Work', to: '/#work', id: 'work' },
  { name: 'Labs', to: '/#labs', id: 'labs' },
  { name: 'Stack', to: '/#stack', id: 'stack' },
  { name: 'Contact', to: '/contact', id: 'contact' },
];

export function Availability() {
  return (
    <span className="status">
      <span className="status-dot" />
      <span>Available for new opportunities</span>
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const updateActive = () => {
      if (pathname !== '/') return;
      const sections = ['work', 'labs', 'stack'];
      let active = '';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 200) {
          active = id;
        }
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', updateActive, { passive: true });
    const frame = requestAnimationFrame(updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  const active =
    pathname === '/contact'
      ? 'contact'
      : pathname === '/resume'
      ? 'resume'
      : pathname === '/'
      ? activeSection
      : '';

  const renderLinks = () =>
    links.map((link) => (
      <Link
        key={link.id}
        href={link.to}
        onClick={() => setMenuOpen(false)}
        className={`nav-link ${active === link.id ? 'active' : ''}`}
        aria-current={active === link.id ? 'page' : undefined}
      >
        {link.name}
      </Link>
    ));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Eniolaoluwa D.O. home"
          onClick={() => setMenuOpen(false)}
        >
          <BrandMark className="brand-mark text-electric" size={26} />
          <span>
            {site.shortName}
            <span className="brand-period text-electric">.</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {renderLinks()}
        </nav>

        <div className="header-actions">
          <Availability />
          <Link
            className="resume-button"
            href="/resume"
            onClick={() => setMenuOpen(false)}
          >
            <span>Resume</span>
            <ArrowDownToLine size={13} className="text-electric" />
          </Link>
          <button
            type="button"
            className="icon-button menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {renderLinks()}
          <div className="pt-2">
            <Availability />
          </div>
        </nav>
      )}
    </header>
  );
}