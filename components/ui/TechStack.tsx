// components/ui/TechStack.tsx
import React from 'react';

const skills = [
  { category: "Core", items: ["Python", "TypeScript", "C++", "SQL"] },
  { category: "Frameworks", items: ["Flask", "Next.js", "React", "Node.js"] },
//   { category: "Security & Ops", items: ["Burp Suite", "Linux", "Git", "Docker"] },
  { category: "Automation", items: ["Telegram API", "Selenium", "Bash"] },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-space-900 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-2">
            // System Capabilities
          </h2>
          <h3 className="text-3xl font-bold text-white">
            Technical Arsenal
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="group border border-white/5 bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:border-violet-500/30 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                {skillGroup.category}
              </h4>
              <ul className="space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm font-mono flex items-center justify-between group-hover:text-gray-200 transition-colors">
                    <span>{item}</span>
                    <span className="text-white/10 text-xs">0{i + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}