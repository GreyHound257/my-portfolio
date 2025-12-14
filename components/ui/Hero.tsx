// components/ui/Hero.tsx
import Link from 'next/link';
import Image from 'next/image'; // <--- Import Image

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* 1. The Avatar Module (New) */}
          <div className="relative w-50 h-50 md:w-56 md:h-56 shrink-0 group">
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-violet-500/50" />
            
            {/* The Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(124,92,255,0.3)]">
              <Image 
                src="/avatar.png" // <--- Path to your file in 'public'
                alt="Eniolaoluwa"
                fill
                className="object-cover"
                priority // Loads this image immediately
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

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Engineering Logic. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Cinematic Code.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              I am a <strong>Cybersecurity Student</strong> and Developer based in Nigeria.
              Building secure automated systems and experimental web interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="#projects" 
                className="px-8 py-3.5 rounded-lg bg-white text-space-900 font-semibold hover:bg-gray-200 transition-colors text-center"
              >
                View The Archives
              </Link>
              <Link 
                href="https://github.com/GreyHound257" 
                target="_blank"
                className="px-8 py-3.5 rounded-lg bg-space-800 border border-white/10 text-white font-medium hover:bg-space-700 transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>GitHub</span>
                <span className="text-gray-500">↗</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}