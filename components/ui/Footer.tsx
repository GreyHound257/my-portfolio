import Link from 'next/link';
import { ArrowUpRight, Code2, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link href="/" className="footer-brand">
              {site.name}
              <span className="accent">.</span>
            </Link>
            <p className="footer-bio">
              Building robust, scalable software with a focus on clean architecture,
              security-first design, and optimal performance.
            </p>
          </div>

          <div className="footer-connect">
            <span className="eyebrow">Good things start with a conversation</span>
            <div className="footer-socials">
              <Link href="/contact">
                <Mail size={14} className="text-electric" />
                <span>Email</span>
              </Link>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={14} className="text-electric" />
                <span>LinkedIn</span>
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Find Eniolaoluwa on GitHub"
              >
                <GitHubIcon size={14} className="text-electric" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}.{' '}
            <span className="footer-built">Built with Next.js &amp; TypeScript.</span>
          </p>
          <a
            className="text-link"
            href={site.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={13} />
            <span>Source repository</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}