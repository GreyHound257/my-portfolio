import Link from 'next/link';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, ShieldCheck, Workflow } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import CodeWindow from './CodeWindow';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>Cybersecurity &amp; Full-Stack Engineer // Kuromaru</span>
          </div>

          <h1 id="hero-heading">
            Engineering Logic.
            <span className="accent">Scalable Code.</span>
          </h1>

          <p className="hero-subtitle">
            Full-Stack &amp; Systems Engineer specializing in secure web platforms,
            automated backend services, and high-performance microservices.
          </p>

          <div className="hero-ctas">
            <Link href="/#work" className="button button-primary">
              <span>View Projects</span>
              <ArrowDownRight size={16} />
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
              title="Find Eniolaoluwa on GitHub"
            >
              <GitHubIcon size={15} />
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <CodeWindow />
      </div>

      <div className="hero-bottom">
        <div className="hero-principles">
          <span>
            <ShieldCheck size={13} className="text-electric" />
            Security first
          </span>
          <i className="separator" />
          <span>
            <Workflow size={13} className="text-electric" />
            Built to scale
          </span>
          <i className="separator" />
          <span>
            <Code2 size={13} className="text-electric" />
            Clean by design
          </span>
        </div>

        <Link href="/#work" className="scroll-link">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={13} className="text-electric" />
        </Link>
      </div>
    </section>
  );
}