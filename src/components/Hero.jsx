import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Terminal, 
  FileText, 
  Activity, 
  MapPin, 
  Mail, 
  Phone,
  Server,
  Zap,
  Cpu,
  Layers,
  Database
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  return (
    <section id="overview" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background warm soft gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none -z-10 opacity-30" />
      <div className="absolute top-16 right-10 w-96 h-96 bg-[#F0E6D8]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 left-10 w-96 h-96 bg-[#EBDDCB]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2EBE0] border border-[#E2D6C6] text-xs font-mono text-[#574F46] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#388E3C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D32]"></span>
              </span>
              <span className="font-semibold text-[#24623E]">SYSTEM ONLINE</span>
              <span className="text-[#CCC1B3]">|</span>
              <span className="text-[#685F55] font-sans">{personalInfo.relocationStatus}</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-[#24211D] leading-[1.15]">
                Engineering <span className="font-serif italic font-normal text-[#C25E38]">High-Throughput Go</span> Backends & Industrial IoT Platforms.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#5E564E] leading-relaxed font-normal">
                I'm <strong className="text-[#24211D] font-semibold">{personalInfo.name}</strong>, a Backend Engineer with 2+ years building and operating production IoT platforms in Go and Python. Led live migrations from Express.js to Go, tuned kernel and database pools to achieve a <strong className="text-[#C25E38] font-semibold">+96.1% sustained capacity boost</strong> under heavy concurrency, and manage end-to-end cloud infrastructure on AWS.
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded-md bg-[#F4EDE2] border border-[#E3D8C8] text-[#5A5045] flex items-center gap-1.5 shadow-2xs">
                <Server className="w-3.5 h-3.5 text-[#C25E38]" /> Go / net/http / pgx
              </span>
              <span className="px-3 py-1 rounded-md bg-[#F4EDE2] border border-[#E3D8C8] text-[#5A5045] flex items-center gap-1.5 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-[#2D6A4F]" /> IoT Core & Telemetry
              </span>
              <span className="px-3 py-1 rounded-md bg-[#F4EDE2] border border-[#E3D8C8] text-[#5A5045] flex items-center gap-1.5 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#B45309]" /> AWS & Terraform
              </span>
              <span className="px-3 py-1 rounded-md bg-[#F4EDE2] border border-[#E3D8C8] text-[#5A5045] flex items-center gap-1.5 shadow-2xs">
                <Activity className="w-3.5 h-3.5 text-[#7C3AED]" /> Concurrency & Tuning
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#benchmark"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-[#C25E38] text-white hover:bg-[#B0532E] transition-all shadow-md shadow-[#C25E38]/20 transform hover:-translate-y-0.5"
              >
                <Activity className="w-4 h-4 text-white" />
                <span>Benchmark Lab Simulator</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-white border border-[#DDD3C4] text-[#2E2A25] hover:bg-[#F9F5EE] hover:border-[#CCC0AF] transition-all shadow-sm"
              >
                <span>View Architecture</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C8276]" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-sm bg-[#F4EDE2] border border-[#DFD4C4] text-[#4E443A] hover:bg-[#EAE0D1] transition-all"
                title="Launch Terminal CLI"
              >
                <Terminal className="w-4 h-4 text-[#C25E38]" />
                <span className="hidden sm:inline">aky-cli</span>
              </button>
            </div>

            {/* Quick Contact & Social Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#756C62]">
              <span className="flex items-center gap-1.5 text-[#4E453C]">
                <MapPin className="w-3.5 h-3.5 text-[#C25E38]" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-[#C25E38] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#756C62]" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#C25E38] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#C25E38] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#24211D]" />
                GitHub
              </a>
            </div>

          </div>

          {/* Right Column: Akshay's Profile Photo & System Telemetry Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer soft ambient shadow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E6D7C3] via-[#EFE6D9] to-[#E2D5C3] rounded-3xl opacity-70 blur-xl"></div>
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-white border border-[#E5DCD0] p-4 shadow-xl shadow-stone-900/05">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EFEAE2] text-xs font-mono text-[#787066]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E08A72]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8C28A]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9AC89A]"></span>
                    <span className="ml-1 text-[#423C35] font-medium">sahas-gateway/aky.sys</span>
                  </div>
                  <span className="text-[#24623E] text-[11px] font-semibold bg-[#EDF5EE] px-2 py-0.5 rounded border border-[#D5E7D8]">
                    200 OK
                  </span>
                </div>

                {/* Profile Photo */}
                <div className="relative overflow-hidden rounded-xl border border-[#EAE3D7] group aspect-[4/5] bg-[#F7F3EB]">
                  <img
                    src="/profile.jpg"
                    alt="Akshay Mohan M P"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Subtle warm gradient overlay at the base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Telemetry Tag on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/90 backdrop-blur-md border border-[#E8DFD3] text-xs font-mono space-y-1 shadow-md">
                    <div className="flex justify-between items-center text-[#24211D] font-bold">
                      <span>Akshay Mohan M P</span>
                      <span className="text-[#24623E] text-[10px] font-semibold bg-[#EDF5EE] px-1.5 py-0.2 rounded">VERIFIED</span>
                    </div>
                    <div className="text-[11px] text-[#635B52] font-sans">
                      Backend Engineer — Go · Cloud Infra · IoT Platforms
                    </div>
                  </div>
                </div>

                {/* System Specs Footer inside card */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#EDE5DA]">
                    <span className="text-[#877E73] block text-[10px]">POOL CONFIG</span>
                    <span className="text-[#24211D] font-semibold">pgx min:20 max:150</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#EDE5DA]">
                    <span className="text-[#877E73] block text-[10px]">KERNEL SYSCTL</span>
                    <span className="text-[#2D6A4F] font-semibold">somaxconn 4096</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#EDE5DA]">
                    <span className="text-[#877E73] block text-[10px]">THROUGHPUT PEAK</span>
                    <span className="text-[#C25E38] font-semibold">+96.1% sustained</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#EDE5DA]">
                    <span className="text-[#877E73] block text-[10px]">AUTH & TRACING</span>
                    <span className="text-[#5B4F7B] font-semibold">Zitadel + ClickHouse</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E9E2D7] shadow-sm hover:border-[#D5C9B8] hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C25E38] group-hover:text-[#B0532E] font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#24211D] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#736B61] mt-1 leading-snug">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
