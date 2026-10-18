// components/ui/Footer.tsx
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/5 bg-brand-black pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          
          <div className="max-w-sm">
            <h3 className="text-lg font-bold text-brand-offwhite mb-3">Eniolaoluwa Dayo-Obatewose.</h3>
            <p className="text-brand-muted text-xs leading-relaxed max-w-xs">
              Building robust, scalable software with a focus on clean architecture and optimal performance.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <h4 className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-1">Good things start with a conversation</h4>
            <div className="flex items-center gap-6">
              <a
                href="mailto:dayoobatewoseeniolaoluwa@gmail.com"
                className="flex items-center gap-1.5 text-brand-muted hover:text-brand-offwhite transition-colors text-xs font-medium group"
              >
                <Mail size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/eniolaoluwa-dayo-obatewose-9599282a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brand-muted hover:text-brand-offwhite transition-colors text-xs font-medium group"
              >
                <FaLinkedin size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                LinkedIn
              </a>
              <a
                href="https://github.com/GreyHound257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brand-muted hover:text-brand-offwhite transition-colors text-xs font-medium group"
              >
                <FaGithub size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-brand-muted/50">
            © {new Date().getFullYear()} Eniolaoluwa Dayo-Obatewose. Built with Next.js.
          </p>
          
          <a
            href="https://github.com/GreyHound257/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-brand-muted/50 hover:text-brand-offwhite transition-colors flex items-center gap-1"
          >
             <span>&lt;/&gt;</span> Source code
          </a>
        </div>

      </div>
    </footer>
  );
}