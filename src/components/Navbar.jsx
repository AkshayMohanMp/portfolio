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
    { label: 'Experience', href: '#experience' },
    { label: 'Systems & Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#D4E4F4] shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#00ABE4] flex items-center justify-center font-bold text-white text-base shadow-sm shadow-[#00ABE4]/25 group-hover:scale-105 transition-transform">
              AM
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-[#0F223D] flex items-center gap-2">
                <span>akshay.go</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-[#E9F1FA] text-[#0084B4] border border-[#00ABE4]/30 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ABE4] animate-pulse"></span>
                  live
                </span>
              </div>
              <p className="text-[11px] text-[#486581] font-mono hidden sm:block">Backend & Systems Engineer</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#FFFFFF] border border-[#D4E4F4] p-1 rounded-full shadow-xs">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#486581] hover:text-[#00ABE4] hover:bg-[#E9F1FA] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-white border border-[#D4E4F4] text-[#0F223D] hover:bg-[#E9F1FA] hover:text-[#00ABE4] hover:border-[#00ABE4]/40 transition-all shadow-xs"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00ABE4]" />
              <span>CLI</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#00ABE4] text-white hover:bg-[#0096CA] transition-all shadow-sm shadow-[#00ABE4]/25"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-[#E9F1FA] text-[#00ABE4] border border-[#00ABE4]/30"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#D4E4F4] text-[#0F223D]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#D4E4F4] px-4 pt-3 pb-5 mt-2 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#486581] hover:bg-[#E9F1FA] hover:text-[#00ABE4]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#D4E4F4] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-mono rounded-lg bg-[#E9F1FA] border border-[#D4E4F4] text-[#0F223D]"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00ABE4]" />
              <span>Open CLI</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-lg bg-[#00ABE4] text-white"
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
