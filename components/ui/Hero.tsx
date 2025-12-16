// components/ui/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    // Responsive Padding: pt-28 (Mobile) | md:pt-40 (Desktop)
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-violet-500/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* 1. The Avatar Module */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 group">
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-violet-500/50" />
            
            {/* The Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(124,92,255,0.3)]">
              <Image 
                src="/avatar.png" 
                alt="Eniolaoluwa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 2. The Text Content */}
          <div className="text-center md:text-left">
            
            {/* Status Line */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-800/50 border border-white/10 text-xs font-mono text-cyan-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SYSTEM: ONLINE // ALIAS: KUROMARU
            </div>

            {/* Responsive Heading */}
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Engineering Logic. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Cinematic Code.
              </span>
            </h1>

            {/* Responsive Bio */}
            <p className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              I am a <strong>Cybersecurity Student</strong> and Developer based in Nigeria.
              Building secure automated systems and experimental web interfaces.
            </p>

            {/* --- BUTTONS SECTION --- */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              {/* Button A: Resume (Recruiters) */}
              <a 
                href="/resume.pdf" 
                download="Eniola_Dayo_CV.pdf"
                className="px-8 py-3.5 rounded-lg bg-white text-space-900 font-bold hover:bg-gray-200 transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </a>

              {/* Button B: GitHub (Engineers) */}
              <a 
                href="https://github.com/GreyHound257" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-lg bg-space-800 border border-white/10 text-white font-medium hover:bg-space-700 transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>

            </div>
            {/* ----------------------- */}

          </div>
        </div>
      </div>
    </section>
  );
}