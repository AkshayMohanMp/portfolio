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
    <section id="projects" className="py-20 bg-[#F6F1E7]/70 relative border-t border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE4D6] border border-[#DFCFC0] text-[#1B5E20] font-mono text-xs mb-3 font-semibold">
              <FolderGit2 className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>SYSTEMS & ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24211D] tracking-tight">
              Featured Production Projects
            </h2>
            <p className="mt-2 text-[#686055] max-w-2xl text-sm sm:text-base">
              Real industrial hardware rigs, mission-critical OTA deployment pipelines, high-throughput Go ingestion services, and automated cloud consoles.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#EBE3D5] border border-[#DFD6C7] font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                    : 'text-[#686056] hover:text-[#24211D] hover:bg-[#FAF6EE]'
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
              className="flex flex-col justify-between rounded-2xl bg-white border border-[#E7DFD3] hover:border-[#D5C9B8] p-6 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header tag & badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#696156] border border-[#EAE3D7]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FDF0EB] text-[#A24322] border border-[#F7D3C5]">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-[#24211D] group-hover:text-[#C25E38] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#6E655B] mt-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.stack.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAF7F2] text-[#5A5146] border border-[#EAE2D5]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#FAF7F2] text-[#91877A]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Impact summary quote */}
                <div className="p-3 rounded-xl bg-[#EDF5EE] border border-[#CDE3D2] text-xs font-mono text-[#1B5E20] leading-snug">
                  <span className="font-bold mr-1">IMPACT:</span>
                  {project.impact}
                </div>
              </div>

              {/* Action trigger button */}
              <button
                onClick={() => setActiveProjectModal(project)}
                className="mt-5 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F5EDE1] hover:bg-[#C25E38] hover:text-white text-[#24211D] text-xs font-semibold transition-all border border-[#E0D5C5] hover:border-[#C25E38]"
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
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#FAF7F2] border border-[#D8CCBD] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#EFE8DC] text-[#6E655B] hover:text-[#24211D] hover:bg-[#E4DACB]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#FDF0EB] text-[#A24322] border border-[#F7D3C5] font-semibold">
                  {activeProjectModal.badge}
                </span>
                <span className="text-xs font-mono text-[#786F63]">
                  {activeProjectModal.category}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#24211D]">
                {activeProjectModal.title}
              </h3>
              <p className="text-sm text-[#5E564D] mt-1">
                {activeProjectModal.tagline}
              </p>
            </div>

            {/* Architecture Pipeline Banner */}
            <div className="mb-6 p-4 rounded-xl bg-white border border-[#E7DFD3] font-mono text-xs">
              <span className="text-[#8C3A18] font-bold block mb-1 uppercase tracking-wider text-[11px]">DATA FLOW / ARCHITECTURE</span>
              <p className="text-[#363028] leading-relaxed">
                {activeProjectModal.architecture}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A7165] mb-3 font-semibold">KEY ENGINEERING ACHIEVEMENTS</h4>
              <ul className="space-y-3">
                {activeProjectModal.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#3E372F] leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A7165] mb-2 font-semibold">TECHNOLOGY STACK</h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.stack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white text-[#C25E38] border border-[#E2D8C9] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metric Box */}
            <div className="p-4 rounded-xl bg-[#EDF5EE] border border-[#CDE3D2] text-xs font-mono text-[#1B5E20]">
              <strong className="font-bold">PRODUCTION IMPACT: </strong>
              {activeProjectModal.impact}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
