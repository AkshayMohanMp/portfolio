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
      {/* Background Soft Cloud Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none -z-10 opacity-40" />
      <div className="absolute top-16 right-10 w-96 h-96 bg-[#00ABE4]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 left-10 w-96 h-96 bg-[#00ABE4]/08 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#D4E4F4] text-xs font-mono text-[#486581] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ABE4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ABE4]"></span>
              </span>
              <span className="font-bold text-[#0084B4]">SYSTEM ONLINE</span>
              <span className="text-[#CBD5E1]">|</span>
              <span className="text-[#334E68] font-sans font-medium">{personalInfo.relocationStatus}</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-[#0F223D] leading-[1.15]">
                Engineering <span className="text-[#00ABE4]">High-Throughput Go</span> Backends, IoT Platforms & Cloud Infrastructure.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#486581] leading-relaxed font-normal">
                I'm <strong className="text-[#0F223D] font-semibold">{personalInfo.name}</strong>, a Backend Engineer building production systems in <strong className="text-[#0F223D] font-semibold">Go</strong> for industrial IoT and laboratory platforms, and running the cloud infrastructure they live on. Led a complete Express.js-to-Go migration of a multi-tenant platform, and engineer across edge devices (Raspberry Pi 5), device security (PKI / mTLS / MQTT), and autonomous CV pipelines.
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded-md bg-white border border-[#D4E4F4] text-[#102A43] flex items-center gap-1.5 shadow-xs">
                <Server className="w-3.5 h-3.5 text-[#00ABE4]" /> Go / Gin / pgx
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#D4E4F4] text-[#102A43] flex items-center gap-1.5 shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-[#00ABE4]" /> PKI, mTLS & MQTT
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#D4E4F4] text-[#102A43] flex items-center gap-1.5 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-[#00ABE4]" /> AWS & OpenTofu
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#D4E4F4] text-[#102A43] flex items-center gap-1.5 shadow-xs">
                <Activity className="w-3.5 h-3.5 text-[#00ABE4]" /> OpenFGA & OTel
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-[#00ABE4] text-white hover:bg-[#0096CA] transition-all shadow-md shadow-[#00ABE4]/25 transform hover:-translate-y-0.5"
              >
                <span>View Architecture & Projects</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-white border border-[#D4E4F4] text-[#0F223D] hover:bg-[#F4F9FD] hover:border-[#00ABE4] transition-all shadow-xs"
              >
                <span>Career Experience</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-sm bg-white border border-[#D4E4F4] text-[#0F223D] hover:bg-[#E9F1FA] hover:text-[#00ABE4] hover:border-[#00ABE4]/40 transition-all shadow-xs"
                title="Launch Terminal CLI"
              >
                <Terminal className="w-4 h-4 text-[#00ABE4]" />
                <span className="hidden sm:inline">aky-cli</span>
              </button>
            </div>

            {/* Quick Contact & Social Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#486581]">
              <span className="flex items-center gap-1.5 text-[#102A43] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#00ABE4]" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-[#00ABE4] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00ABE4]" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00ABE4] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00ABE4] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#0F223D]" />
                GitHub
              </a>
            </div>

          </div>

          {/* Right Column: Akshay's Profile Photo & System Telemetry Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer soft ambient blue glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#00ABE4]/25 via-[#E9F1FA] to-[#00ABE4]/15 rounded-3xl blur-xl"></div>
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-white border border-[#D4E4F4] p-4 shadow-xl shadow-[#00ABE4]/10">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E9F1FA] text-xs font-mono text-[#486581]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                    <span className="ml-1 text-[#0F223D] font-medium">sahas-gateway/aky.sys</span>
                  </div>
                  <span className="text-[#0084B4] text-[11px] font-semibold bg-[#E9F1FA] px-2 py-0.5 rounded border border-[#00ABE4]/30">
                    200 OK
                  </span>
                </div>

                {/* Profile Photo */}
                <div className="relative overflow-hidden rounded-xl border border-[#D4E4F4] group aspect-[4/5] bg-[#E9F1FA]">
                  <img
                    src="/profile.jpg"
                    alt="Akshay Mohan M P"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Subtle dark vignette overlay at the base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F223D]/80 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Telemetry Tag on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-md border border-[#D4E4F4] text-xs font-mono space-y-1 shadow-md">
                    <div className="flex justify-between items-center text-[#0F223D] font-bold">
                      <span>Akshay Mohan M P</span>
                      <span className="text-[#0084B4] text-[10px] font-bold bg-[#E9F1FA] px-1.5 py-0.5 rounded border border-[#00ABE4]/30">VERIFIED</span>
                    </div>
                    <div className="text-[11px] text-[#486581] font-sans">
                      Backend Engineer (Go) · IoT Platforms · AWS & DevOps
                    </div>
                  </div>
                </div>

                {/* System Specs Footer inside card */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-[#E9F1FA] border border-[#D4E4F4]">
                    <span className="text-[#486581] block text-[10px] font-semibold">CLOUD & INFRA</span>
                    <span className="text-[#0F223D] font-bold">AWS + OpenTofu</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#E9F1FA] border border-[#D4E4F4]">
                    <span className="text-[#486581] block text-[10px] font-semibold">EDGE & IOT</span>
                    <span className="text-[#0084B4] font-bold">Raspberry Pi + MQTT</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#E9F1FA] border border-[#D4E4F4]">
                    <span className="text-[#486581] block text-[10px] font-semibold">AUTH & SECURITY</span>
                    <span className="text-[#00ABE4] font-bold">OpenFGA + mTLS</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#E9F1FA] border border-[#D4E4F4]">
                    <span className="text-[#486581] block text-[10px] font-semibold">OBSERVABILITY</span>
                    <span className="text-[#0F223D] font-bold">OTel + HyperDX</span>
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
              className="p-5 rounded-2xl bg-white border border-[#D4E4F4] shadow-xs hover:border-[#00ABE4] hover:shadow-md hover:shadow-[#00ABE4]/10 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00ABE4] group-hover:text-[#0096CA] font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#0F223D] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#486581] mt-1 leading-snug">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
