import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Terminal, 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Benchmark Lab', href: '#benchmark' },
    { label: 'Experience', href: '#experience' },
    { label: 'Systems & Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD4] shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#C25E38] flex items-center justify-center font-serif font-bold text-[#FAF7F2] text-lg shadow-sm group-hover:scale-105 transition-transform">
              AM
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-[#24211D] flex items-center gap-2">
                <span>akshay.go</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-[#EDF5EE] text-[#24623E] border border-[#CDE3D2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse"></span>
                  live
                </span>
              </div>
              <p className="text-[11px] text-[#78716C] font-mono hidden sm:block">Backend & Systems Engineer</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#F1EAE0] border border-[#E4DCD0] p-1 rounded-full shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#6B645C] hover:text-[#24211D] hover:bg-[#E8DFC2]/40 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-[#F3EDE3] border border-[#E1D7C8] text-[#574F46] hover:bg-[#EAE2D4] hover:text-[#24211D] transition-all shadow-sm"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#C25E38]" />
              <span>CLI</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#C25E38] text-white hover:bg-[#B0532E] transition-all shadow-sm shadow-[#C25E38]/20"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-[#C25E38]/10 text-[#C25E38] border border-[#C25E38]/20"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F3EDE3] border border-[#E1D7C8] text-[#24211D]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF7F2] border-b border-[#E7DFD4] px-4 pt-3 pb-5 mt-2 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#443E38] hover:bg-[#F2ECE1] hover:text-[#C25E38]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E7DFD4] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-mono rounded-lg bg-[#F3EDE3] border border-[#E1D7C8] text-[#443E38]"
            >
              <Terminal className="w-3.5 h-3.5 text-[#C25E38]" />
              <span>Open CLI</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg bg-[#C25E38] text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
