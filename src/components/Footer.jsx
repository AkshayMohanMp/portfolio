import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Terminal, Mail } from 'lucide-react';

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#DCE9F6] border-t border-[#BED6EE] py-12 text-xs font-mono text-[#486581]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#BED6EE]">
          
          {/* Left: Brand Monogram & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00ABE4] text-white font-sans font-bold flex items-center justify-center text-sm shadow-sm">
              AM
            </div>
            <div>
              <div className="text-[#0F223D] font-bold font-sans text-sm">
                Akshay Mohan M P
              </div>
              <div className="text-[11px] text-[#627D98]">
                Backend Engineer (Go) · IoT Platforms · AWS & DevOps
              </div>
            </div>
          </div>

          {/* Center: Social & Action Links */}
          <div className="flex items-center gap-4 text-[#486581]">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#00ABE4] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#00ABE4] transition-colors"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="hover:text-[#00ABE4] transition-colors"
            >
              Email
            </a>
            <button
              onClick={onOpenTerminal}
              className="text-[#0084B4] hover:text-[#00ABE4] transition-colors flex items-center gap-1 font-semibold"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-[#00ABE4] transition-colors"
            >
              Resume
            </button>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#BED6EE] text-[#0F223D] hover:bg-[#E9F1FA] hover:border-[#00ABE4] transition-all shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00ABE4]" />
          </button>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#627D98]">
          <div>
            © {new Date().getFullYear()} Akshay Mohan M P. Handcrafted for high reliability and scale.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ABE4] animate-pulse"></span>
            <span>Uptime: 99.98% | Go 1.23 | AWS & Linux Systems</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
