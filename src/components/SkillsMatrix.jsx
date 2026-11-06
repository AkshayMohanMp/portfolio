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
  Lock,
  Database,
  Activity,
  Layers,
  Table,
  LayoutGrid
} from 'lucide-react';

const iconMap = {
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  Cpu: Cpu,
  Brain: Brain,
  Layers: Layers
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('backend');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  const selectedCategoryObj = skillsData.categories.find(c => c.id === activeCategory) || skillsData.categories[0];
  const IconComponent = iconMap[selectedCategoryObj.icon] || Server;

  // Overview table data for "Skills at a Glance"
  const skillsOverviewTable = [
    { area: "Backend (Go)", whatIUse: "Gin, pgx, REST/OpenAPI, JWT, RBAC, OpenFGA, Protobuf", whereUsed: "Samyojak, Vepl Cloud, alert pipeline, device-certificate service" },
    { area: "Data & messaging", whatIUse: "PostgreSQL, PGMQ, SQLite, MQTT (VerneMQ, EMQX, embedded broker), Firebase Cloud Messaging, AWS SQS, S3 / MinIO", whereUsed: "Alerts, telemetry, edge devices" },
    { area: "Cloud & infrastructure", whatIUse: "AWS (EC2, Lightsail, S3, SES, Secrets Manager, IAM Identity Center, Amplify, CloudFront), Terraform / OpenTofu, Docker, Coolify, Nomad", whereUsed: "All platforms" },
    { area: "Security & PKI", whatIUse: "X.509 PKI, mutual TLS, certificate revocation (CRL), signed updates, secrets management", whereUsed: "Device fleet, container registry, OTA updates" },
    { area: "Observability & testing", whatIUse: "OpenTelemetry (traces, metrics, logs), HyperDX, Go testing (testify, pgxmock), Artillery load testing", whereUsed: "Every Go service" },
    { area: "Edge & embedded", whatIUse: "Raspberry Pi 5, Modbus TCP, OpenCV (GoCV), systemd, Server-Sent Events", whereUsed: "Vision test bench (VMBD)" },
    { area: "Python & TypeScript", whatIUse: "CVAT extensions, ClearML, PyTorch detectors (D-FINE, Mask R-CNN), React / Redux Toolkit", whereUsed: "Computer-vision pipeline (SahasForge), dashboard integration" },
    { area: "CI/CD & delivery", whatIUse: "GitHub Actions (hosted and self-hosted runners), Gitea Actions, ARM64 cross-compilation", whereUsed: "Test, ARM64 build and deploy pipelines" }
  ];

  return (
    <section id="skills" className="py-20 bg-[#FAF7F2] relative border-t border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE4D6] border border-[#DFCFC0] text-[#7C5A37] font-mono text-xs mb-3 font-semibold">
              <Cpu className="w-3.5 h-3.5 text-[#B45309]" />
              <span>SYSTEMS COMPETENCY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24211D] tracking-tight">
              Technical Stack & Engineering Disciplines
            </h2>
            <p className="mt-2 text-[#686055] max-w-2xl text-sm sm:text-base">
              Production systems engineered around high-performance Go programming, IoT protocols, zero-trust device PKI, and autonomous cloud infrastructure.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EBE3D5] border border-[#DFD6C7] self-start md:self-auto font-mono text-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                  : 'text-[#686056] hover:text-[#24211D]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Category Matrix</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'table'
                  ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                  : 'text-[#686056] hover:text-[#24211D]'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Skills at a Glance</span>
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div>
            {/* Category Navigation Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillsData.categories.map((cat) => {
                const CatIcon = iconMap[cat.icon] || Server;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs transition-all ${
                      isActive
                        ? 'bg-[#C25E38] text-white font-bold shadow-sm'
                        : 'bg-white border border-[#E7DFD3] text-[#5A5146] hover:text-[#24211D] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <CatIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#C25E38]'}`} />
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
                  className={`flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 ${
                    skill.highlight
                      ? 'bg-white border-2 border-[#D8CCBD] shadow-md shadow-stone-900/04'
                      : 'bg-white/80 border border-[#E7DFD3] hover:border-[#D5C9B8]'
                  }`}
                >
                  <div>
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

                    <p className="text-xs text-[#6B6257] leading-relaxed font-sans mb-3">
                      {skill.note}
                    </p>
                  </div>

                  {skill.whereUsed && (
                    <div className="pt-2 border-t border-[#F2ECE1] text-[10px] font-mono text-[#786F63]">
                      <span className="font-semibold text-[#8C3A18]">Used in: </span>
                      <span>{skill.whereUsed}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* "Skills at a glance" Table View */
          <div className="rounded-2xl bg-white border border-[#E7DFD3] overflow-hidden shadow-sm">
            <div className="p-4 border-b border-[#EFEAE2] flex justify-between items-center bg-[#FAF7F2] font-mono text-xs">
              <span className="text-[#24211D] font-bold">Skills at a Glance: What I Use & Where I Used It</span>
              <span className="text-[#786F63]">Engineering Profile Reference</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-xs">
                <thead className="bg-[#FAF7F2] text-[#696156] font-mono border-b border-[#EAE3D7]">
                  <tr>
                    <th className="p-3.5 w-1/4">Area</th>
                    <th className="p-3.5 w-1/2">What I use</th>
                    <th className="p-3.5 w-1/4">Where I used it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0E8DC] text-[#3E3831]">
                  {skillsOverviewTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF6EE] transition-colors">
                      <td className="p-3.5 font-bold text-[#24211D] font-mono">{row.area}</td>
                      <td className="p-3.5 text-[#4E463E] font-medium leading-relaxed">{row.whatIUse}</td>
                      <td className="p-3.5 text-[#8C3A18] font-mono text-[11px] leading-relaxed">{row.whereUsed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
              Careful, Verifiable Systems Born from Biomedical Discipline
            </h4>
            <p className="text-xs sm:text-sm text-[#4E463E] leading-relaxed">
              Having spent two years maintaining and safety-testing hospital equipment before transitioning to software, I approach distributed systems with the same zero-tolerance for hidden failure modes. From strict OpenFGA relationship authorization to mTLS device fleets and pgx connection pooling, every layer is engineered to be deterministic, observable, and resilient under production stress.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
