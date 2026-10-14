import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Terminal, Mail } from 'lucide-react';

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFE8DD] border-t border-[#DFD5C5] py-12 text-xs font-mono text-[#686055]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#DFD5C5]">
          
          {/* Left: Brand Monogram & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C25E38] text-[#FAF7F2] font-serif font-bold flex items-center justify-center text-sm shadow-xs">
              AM
            </div>
            <div>
              <div className="text-[#24211D] font-bold font-sans text-sm">
                Akshay Mohan M P
              </div>
              <div className="text-[11px] text-[#7A7165]">
                Backend Engineer — Go · Cloud Infrastructure · IoT Platforms
              </div>
            </div>
          </div>

          {/* Center: Social & Action Links */}
          <div className="flex items-center gap-4 text-[#686055]">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#C25E38] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#C25E38] transition-colors"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="hover:text-[#C25E38] transition-colors"
            >
              Email
            </a>
            <button
              onClick={onOpenTerminal}
              className="text-[#C25E38] hover:text-[#9A3412] transition-colors flex items-center gap-1 font-semibold"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-[#C25E38] transition-colors"
            >
              Resume
            </button>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DDD3C3] text-[#24211D] hover:bg-[#FAF7F2] hover:border-[#CCC0AE] transition-all shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C25E38]" />
          </button>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#786F63]">
          <div>
            © {new Date().getFullYear()} Akshay Mohan M P. Handcrafted for high reliability and scale.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse"></span>
            <span>Uptime: 99.98% | pgx pool: min 20 / max 150 | somaxconn: 4096</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
