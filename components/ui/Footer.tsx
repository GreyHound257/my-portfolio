// components/ui/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-space-900 pt-12 pb-8 mt-20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Identity */}
          <div className="text-center md:text-left w-full md:w-auto">
            <h3 className="text-xl font-bold text-white mb-2">Eniolaoluwa Dayo-Obatewose</h3>
            <p className="text-gray-400 text-sm">
              Cybersecurity Student & Full-Stack Engineer.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 w-full md:w-auto">
            <a 
              href="mailto:dayoobatewoseeniolaoluwa@gmail.com" // UPDATED
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/eniolaoluwa-dayo-obatewose-9599282a4/" // UPDATED
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/GreyHound257"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} KUROMARU PROTOCOL
          </p>
          
          <div className="flex items-center gap-6">
            {/* New: Link to Portfolio Repo */}
            <a 
              href="https://github.com/GreyHound257/my-portfolio" // Replace with your actual portfolio repo URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-cyan-400 transition-colors font-mono flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500/20 inline-block border border-green-500/50"></span>
              VIEW_SOURCE
            </a>

            <p className="text-xs text-gray-600 font-mono">
              SEC_LEVEL: PUBLIC
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}