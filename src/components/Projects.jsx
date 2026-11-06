import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Cpu, 
  Server, 
  Cloud, 
  Brain, 
  CheckCircle, 
  Layers, 
  X,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Activity
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', 'Go & Systems', 'IoT & Edge Hardware', 'Cloud & DevOps', 'AI & Vision'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#E9F1FA] relative border-t border-[#D4E4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#D4E4F4] text-[#0084B4] font-mono text-xs mb-3 font-semibold shadow-xs">
              <FolderGit2 className="w-3.5 h-3.5 text-[#00ABE4]" />
              <span>SYSTEMS & ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F223D] tracking-tight">
              Featured Production Projects
            </h2>
            <p className="mt-2 text-[#486581] max-w-2xl text-sm sm:text-base">
              Real industrial hardware rigs, mission-critical OTA deployment pipelines, high-throughput Go ingestion services, and automated cloud consoles.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white border border-[#D4E4F4] font-mono text-xs shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00ABE4] text-white font-bold shadow-sm'
                    : 'text-[#486581] hover:text-[#0F223D] hover:bg-[#E9F1FA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white border border-[#D4E4F4] hover:border-[#00ABE4] p-6 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md hover:shadow-[#00ABE4]/10"
            >
              <div>
                {/* Header tag & badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#E9F1FA] text-[#0084B4] border border-[#D4E4F4]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#E9F1FA] text-[#0084B4] border border-[#00ABE4]/30">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-[#0F223D] group-hover:text-[#00ABE4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#486581] mt-1.5 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 my-3.5">
                  {project.stack.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F4F9FD] text-[#334E68] border border-[#D4E4F4]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#E9F1FA] text-[#627D98]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Key Architectural Details Preview */}
                <div className="space-y-2 my-3.5 pt-2 border-t border-[#E9F1FA]">
                  {project.highlights.slice(0, 2).map((h, hIdx) => {
                    const colonIdx = h.indexOf(': ');
                    const hasPrefix = colonIdx !== -1 && colonIdx < 35;
                    const prefix = hasPrefix ? h.slice(0, colonIdx) : null;
                    const rest = hasPrefix ? h.slice(colonIdx + 2) : h;

                    return (
                      <div key={hIdx} className="text-xs text-[#334E68] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ABE4] shrink-0 mt-1.5" />
                        <span className="leading-snug line-clamp-2">
                          {prefix ? (
                            <>
                              <strong className="text-[#0F223D] font-semibold">{prefix}: </strong>
                              <span>{rest}</span>
                            </>
                          ) : (
                            rest
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Impact summary quote */}
                <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs font-mono text-[#166534] leading-snug">
                  <span className="font-bold mr-1">IMPACT:</span>
                  {project.impact}
                </div>
              </div>

              {/* Action trigger button */}
              <button
                onClick={() => setActiveProjectModal(project)}
                className="mt-5 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#E9F1FA] hover:bg-[#00ABE4] text-[#0084B4] hover:text-white text-xs font-semibold transition-all border border-[#D4E4F4] hover:border-[#00ABE4] shadow-xs"
              >
                <span>Inspect Architecture & Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Deep-Dive Drawer */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white border border-[#D4E4F4] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#E9F1FA] text-[#486581] hover:text-[#0F223D] hover:bg-[#D4E4F4] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#E9F1FA] text-[#0084B4] border border-[#00ABE4]/30 font-semibold">
                  {activeProjectModal.badge}
                </span>
                <span className="text-xs font-mono text-[#627D98]">
                  {activeProjectModal.category}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F223D]">
                {activeProjectModal.title}
              </h3>
              <p className="text-sm text-[#486581] mt-1">
                {activeProjectModal.tagline}
              </p>
            </div>

            {/* Architecture Pipeline Banner */}
            <div className="mb-6 p-4 rounded-xl bg-[#F4F9FD] border border-[#D4E4F4] font-mono text-xs">
              <span className="text-[#0084B4] font-bold block mb-1 uppercase tracking-wider text-[11px]">DATA FLOW / ARCHITECTURE</span>
              <p className="text-[#0F223D] leading-relaxed">
                {activeProjectModal.architecture}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#627D98] mb-3 font-semibold">DEEP TECHNICAL & ARCHITECTURAL HIGHLIGHTS</h4>
              <ul className="space-y-3">
                {activeProjectModal.highlights.map((highlight, idx) => {
                  const colonIdx = highlight.indexOf(': ');
                  const hasPrefix = colonIdx !== -1 && colonIdx < 35;
                  const prefix = hasPrefix ? highlight.slice(0, colonIdx) : null;
                  const rest = hasPrefix ? highlight.slice(colonIdx + 2) : highlight;

                  return (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#334E68] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#00ABE4] shrink-0 mt-0.5" />
                      <span>
                        {prefix ? (
                          <>
                            <strong className="text-[#0F223D] font-bold">{prefix}: </strong>
                            <span>{rest}</span>
                          </>
                        ) : (
                          highlight
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Full Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#627D98] mb-2 font-semibold">TECHNOLOGY STACK</h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.stack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-[#E9F1FA] text-[#0084B4] border border-[#D4E4F4] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metric Box */}
            <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs font-mono text-[#166534]">
              <strong className="font-bold">PRODUCTION IMPACT: </strong>
              {activeProjectModal.impact}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
