import React, { useState } from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle, 
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0); // first item expanded by default

  return (
    <section id="experience" className="py-20 bg-[#FAF7F2] relative border-t border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE4D6] border border-[#DFCFC0] text-[#8C3A18] font-mono text-xs mb-3 font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24211D] tracking-tight">
            Production Experience & Engineering Leadership
          </h2>
          <p className="mt-2 text-[#686055] max-w-2xl text-sm sm:text-base">
            From critical hardware and signal diagnostics in hospital environments to architecting high-throughput Go microservices and industrial IoT clouds.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isExpanded 
                    ? 'bg-white border-2 border-[#D8CCBD] shadow-md shadow-stone-900/04' 
                    : 'bg-white/80 border border-[#E9E2D6] hover:border-[#D5C9B8]'
                }`}
              >
                {/* Header row / clickable accordion toggle */}
                <div 
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#24211D]">
                        {exp.role}
                      </h3>
                      <span className="text-[#8C8377] font-mono text-sm">@</span>
                      <span className="text-[#C25E38] font-semibold text-lg">{exp.company}</span>
                      
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border font-medium ${
                        exp.tagColor === 'emerald'
                          ? 'bg-[#EDF5EE] text-[#1B5E20] border-[#CDE3D2]'
                          : exp.tagColor === 'cyan'
                          ? 'bg-[#FDF0EB] text-[#A24322] border-[#F7D3C5]'
                          : 'bg-[#F5EFE6] text-[#7C5A37] border-[#DFD3C4]'
                      }`}>
                        {exp.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#736B60]">
                      {exp.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#786F63] shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#9E9487]" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#9E9487]" />
                      {exp.location}
                    </span>
                    <span className={`p-1.5 rounded-lg bg-[#F5EDE1] text-[#4A4238] transition-transform duration-200 ${
                      isExpanded ? 'rotate-90 text-[#C25E38]' : ''
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F2ECE1] animate-in fade-in duration-300">
                    <ul className="space-y-3.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-[#4E463E] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C25E38] shrink-0 mt-2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Education & Academic Rigor */}
        <div className="mt-16 pt-12 border-t border-[#E7DFD3]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE4D6] border border-[#DFCFC0] text-[#7C5A37] font-mono text-xs mb-4 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>FOUNDATIONS & EDUCATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E7DFD3] shadow-sm hover:border-[#D5C9B8] transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-bold text-[#24211D]">{edu.degree}</h4>
                  <span className="text-xs font-mono text-[#7C5A37] bg-[#F5EFE6] px-2 py-0.5 rounded border border-[#DFD3C4] shrink-0 ml-2">
                    {edu.period}
                  </span>
                </div>
                <div className="text-sm font-medium text-[#5E564D] mb-2">
                  {edu.institution}
                </div>
                <p className="text-xs text-[#786F63] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
