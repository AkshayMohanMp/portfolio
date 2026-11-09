import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import InteractiveTerminal from './components/InteractiveTerminal';
import { Terminal } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E9F1FA] text-[#0F223D] bg-cloud-grid relative selection:bg-[#00ABE4]/25 selection:text-[#007EA7]">
      
      {/* Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <Experience />

        <Projects />

        <SkillsMatrix />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Resume Viewer & Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Terminal Shell */}
      <InteractiveTerminal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* Floating CLI Widget Button */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#00ABE4] text-white border border-[#0096CA] hover:bg-[#0096CA] transition-all shadow-xl shadow-[#00ABE4]/30 group text-xs font-mono font-semibold"
          title="Open interactive aky-cli shell"
        >
          <Terminal className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
          <span>aky-cli</span>
        </button>
      </div>

    </div>
  );
}
