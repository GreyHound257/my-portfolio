// components/ui/Footer.tsx
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/5 bg-brand-black pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          
          <div className="max-w-sm">
            <h3 className="text-xl font-bold text-brand-offwhite mb-3">Eniolaoluwa Dayo-Obatewose</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Building robust, scalable software with a focus on clean architecture and optimal performance.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono text-brand-muted uppercase tracking-wider mb-2">Connect</h4>
            <a 
              href="mailto:dayoobatewoseeniolaoluwa@gmail.com"
              className="flex items-center gap-2 text-brand-offwhite hover:text-brand-accent transition-colors text-sm font-medium group"
            >
              <Mail size={16} className="text-brand-muted group-hover:text-brand-accent transition-colors" />
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/eniolaoluwa-dayo-obatewose-9599282a4/"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-offwhite hover:text-brand-accent transition-colors text-sm font-medium group"
            >
              <FaLinkedin size={16} className="text-brand-muted group-hover:text-brand-accent transition-colors" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/GreyHound257"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-offwhite hover:text-brand-accent transition-colors text-sm font-medium group"
            >
              <FaGithub size={16} className="text-brand-muted group-hover:text-brand-accent transition-colors" />
              GitHub
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} Eniolaoluwa Dayo-Obatewose. Built with Next.js.
          </p>
          
          <a
            href="https://github.com/GreyHound257/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-muted hover:text-brand-offwhite transition-colors flex items-center gap-2"
          >
            Source Code
          </a>
        </div>

      </div>
    </footer>
  );
}