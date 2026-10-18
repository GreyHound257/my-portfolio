import { Database, LayoutTemplate, Server, Terminal } from 'lucide-react';
import TechMark from './TechMark';
import { stack } from '@/lib/site';

const stackIcons = [LayoutTemplate, Server, Database, Terminal];

export default function TechStack() {
  return (
    <section id="stack" className="container section stack-section" aria-labelledby="stack-label">
      <div id="stack-label">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="accent">03</span>
              <span>/</span>
              <span>The right tools for the job</span>
            </div>
            <h2>
              Technical Stack<span className="accent">.</span>
            </h2>
            <p>A considered engineering toolkit and solid system foundation.</p>
          </div>
          <span className="section-note">
            <span className="section-note-dot" />
            Always learning. Always building.
          </span>
        </div>
      </div>

      <div className="stack-grid">
        {stack.map((group, index) => {
          const Icon = stackIcons[index % stackIcons.length];
          return (
            <div className="stack-column" key={group.category}>
              <h3 className="stack-category">
                <Icon size={14} className="text-electric" />
                <span>{group.category}</span>
              </h3>
              <ul className="stack-list">
                {group.items.map((item) => (
                  <li className="stack-item" key={item}>
                    <TechMark name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}