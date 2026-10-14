import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Cpu, 
  Server, 
  Cloud, 
  ShieldAlert, 
  Brain, 
  Languages, 
  Check, 
  Terminal,
  Zap,
  CheckCircle2,
  Lock
} from 'lucide-react';

const iconMap = {
  Server: Server,
  Cloud: Cloud,
  Cpu: Cpu,
  ShieldAlert: ShieldAlert,
  Brain: Brain
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('backend');

  const selectedCategoryObj = skillsData.categories.find(c => c.id === activeCategory) || skillsData.categories[0];
  const IconComponent = iconMap[selectedCategoryObj.icon] || Server;

  return (
    <section id="skills" className="py-20 bg-[#FAF7F2] relative border-t border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE4D6] border border-[#DFCFC0] text-[#7C5A37] font-mono text-xs mb-3 font-semibold">
            <Cpu className="w-3.5 h-3.5 text-[#B45309]" />
            <span>SYSTEMS COMPETENCY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24211D] tracking-tight">
            Technical Stack & Engineering Disciplines
          </h2>
          <p className="mt-2 text-[#686055] max-w-2xl text-sm sm:text-base">
            Engineered around high-performance systems programming, cloud infrastructure automation, Linux kernel diagnostics, and edge IoT devices.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillsData.categories.map((cat) => {
            const CatIcon = iconMap[cat.icon] || Server;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all ${
                  isActive
                    ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                    : 'bg-white border border-[#E7DFD3] text-[#5A5146] hover:text-[#24211D] hover:bg-[#FAF7F2]'
                }`}
              >
                <CatIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#C25E38]'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {selectedCategoryObj.skills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                skill.highlight
                  ? 'bg-white border-2 border-[#D8CCBD] shadow-md shadow-stone-900/04'
                  : 'bg-white/80 border border-[#E7DFD3] hover:border-[#D5C9B8]'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#24211D] text-sm">
                  {skill.name}
                </h4>
                {skill.highlight && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FDF0EB] text-[#A24322] border border-[#F7D3C5] font-semibold">
                    CORE
                  </span>
                )}
              </div>
              
              <div className="text-[11px] font-mono text-[#C25E38] mb-2 font-semibold">
                Level: {skill.level}
              </div>

              <p className="text-xs text-[#6B6257] leading-relaxed font-sans">
                {skill.note}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Strip: Spoken Languages & Engineering Philosophy */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Spoken Languages */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#E7DFD3] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7A7165] uppercase tracking-wider mb-4 font-semibold">
              <Languages className="w-4 h-4 text-[#C25E38]" />
              <span>SPOKEN LANGUAGES</span>
            </div>
            <div className="space-y-3">
              {skillsData.languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#24211D]">{lang.name}</span>
                  <span className="font-mono text-[#5A5146] bg-[#FAF7F2] px-2 py-1 rounded border border-[#EBE3D7]">
                    {lang.fluency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Philosophy Callout */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#F5EDE1] border border-[#DFCFC0]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7A3617] uppercase tracking-wider mb-2 font-semibold">
              <Zap className="w-4 h-4 text-[#C25E38]" />
              <span>ENGINEERING PHILOSOPHY</span>
            </div>
            <h4 className="text-base font-bold text-[#24211D] mb-2">
              Systems-First Architecture & Explicit Reliability
            </h4>
            <p className="text-xs sm:text-sm text-[#4E463E] leading-relaxed">
              Industrial platforms require deterministic predictability: zero hidden connection leaks, explicit error handling in Go without unhandled panics, tight database connection pooling, and infrastructure defined strictly as code. When production traffic surges, systems should degrade gracefully through calibrated backlogs rather than collapsing into socket errors.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
