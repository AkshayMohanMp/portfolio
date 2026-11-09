import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Outer container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white border border-[#D4E4F4] shadow-2xl overflow-hidden">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 bg-[#E9F1FA] border-b border-[#D4E4F4] flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#0F223D] font-mono">Akshay_Mohan_M_P_Resume.pdf</span>
            <span className="text-xs px-2 py-0.5 rounded bg-white text-[#0084B4] border border-[#00ABE4]/30 font-mono font-semibold shadow-xs">
              Verified Copy
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Akshay_Mohan_M_P_Resume.pdf"
              download="Akshay_Mohan_M_P_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#00ABE4] hover:bg-[#0096CA] text-white transition-all shadow-sm shadow-[#00ABE4]/20"
              title="Download official PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#D4E4F4] text-[#0F223D] hover:bg-[#E9F1FA] hover:border-[#00ABE4] transition-all shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#00ABE4]" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white text-[#486581] hover:text-[#0F223D] hover:bg-[#D4E4F4] transition-colors border border-[#D4E4F4]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Scrollable on screen, pristine on print) */}
        <div id="printable-resume" className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0 print:m-0 print:overflow-visible text-[12px] sm:text-[13px] leading-relaxed">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-3 mb-3 text-center sm:text-left">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 uppercase">
              Akshay Mohan M P
            </h1>
            <p className="text-xs sm:text-sm font-bold text-[#0084B4] mt-0.5 uppercase tracking-wide">
              Backend Engineer (Go) | IoT Platforms | AWS & DevOps
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
              <span>Kolhapur, Maharashtra, India</span>
              <span>•</span>
              <span>+91 85890 06333</span>
              <span>•</span>
              <span>akshaymohanmp@gmail.com</span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 text-xs text-[#0084B4] mt-1 font-mono">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/akshay-mohan-m-p
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/AkshayMohanMp
              </a>
              <span>•</span>
              <span>Open to relocation & remote</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-3.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-mono">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-800 text-justify leading-relaxed">
              Backend engineer with 2+ years of production experience in Go, building multi-tenant IoT and laboratory platforms, device-security services and the AWS / Terraform / CI-CD infrastructure behind them. Led a full Express.js-to-Go migration; also work across edge software (Raspberry Pi), Python and TypeScript for computer-vision pipelines. Biomedical-engineering background brings a hardware-aware, safety-conscious approach.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-3.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <div><strong className="font-semibold text-slate-950 font-mono">Languages: </strong>Go (primary), Python, TypeScript / JavaScript, SQL, Bash</div>
              <div><strong className="font-semibold text-slate-950 font-mono">Backend & APIs: </strong>Gin, REST / OpenAPI, JWT, RBAC, OpenFGA, pgx, Protobuf, Node.js / Express.js, microservices</div>
              <div><strong className="font-semibold text-slate-950 font-mono">Data & Messaging: </strong>PostgreSQL, PGMQ, SQLite, MQTT (VerneMQ, EMQX), Firebase Cloud Messaging, AWS SQS, S3 / MinIO, ClickHouse</div>
              <div><strong className="font-semibold text-slate-950 font-mono">Cloud & DevOps: </strong>AWS (EC2, Lightsail, S3, SES, Secrets Manager, IAM Identity Center, Amplify, CloudFront), Terraform / OpenTofu, Docker, GitHub Actions, Coolify, Nomad, Nginx, Linux</div>
              <div><strong className="font-semibold text-slate-950 font-mono">Security: </strong>X.509 PKI, mutual TLS, TLS automation, secrets management, private registry (Zot), VPN (NetBird)</div>
              <div><strong className="font-semibold text-slate-950 font-mono">Observability & Testing: </strong>OpenTelemetry, HyperDX, structured logging, Go testing (testify, pgxmock), Artillery load testing</div>
              <div><strong className="font-semibold text-slate-950 font-mono">Frontend & ML Tooling: </strong>React, Redux Toolkit, MUI; CVAT, ClearML, PyTorch, OpenCV</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-3.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2 font-mono">
              PROFESSIONAL EXPERIENCE
            </h2>
            
            {/* Sahas Labs */}
            <div className="mb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-medium mb-1">
                <div>
                  <strong className="text-slate-950 font-bold">Software Engineer (Backend, Go)</strong> — Sahas Labs
                  <span className="text-xs text-slate-500 font-normal"> · Kolhapur, Maharashtra</span>
                </div>
                <div className="text-xs font-mono text-slate-600">Aug 2024 – Present</div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-800 text-xs">
                <li><strong className="text-slate-900 font-semibold">Backend & APIs:</strong> Led the migration of the core multi-tenant IoT backend from Express.js to Go and own two Go platforms (device-fleet management and laboratory/test management; ~180 documented API paths, 600+ automated tests) built on Gin, PostgreSQL/pgx and OpenAPI docs.</li>
                <li><strong className="text-slate-900 font-semibold">Auth & Access Control:</strong> Designed tenant-scoped JWT authentication, four-tier RBAC (40+ permissions) and OpenFGA relationship checks so every request resolves to the right company, plant or machine.</li>
                <li><strong className="text-slate-900 font-semibold">Ingestion & Messaging:</strong> Built bulk, de-duplicated, rate-limited device-measurement ingestion and a PGMQ-backed alert worker that sends push notifications through Firebase Cloud Messaging (migrated from AWS SQS).</li>
                <li><strong className="text-slate-900 font-semibold">Device Security & PKI:</strong> Built a Go certificate service (internal CA, per-device X.509, CRL, bulk renewal) with MQTT auth hooks for VerneMQ and EMQX; run a self-hosted Zot container registry secured with mutual TLS.</li>
                <li><strong className="text-slate-900 font-semibold">Edge & Embedded IoT:</strong> Co-developed Go software for a Raspberry Pi 5 test bench (Modbus TCP PLC control, OpenCV measurements, SQLite, live dashboard) and built its signed over-the-air update system and MQTT command channel.</li>
                <li><strong className="text-slate-900 font-semibold">ERP & Reporting:</strong> Integrated Odoo ERP with the lab platform through dedicated API routes and generated calibration reports as PDFs.</li>
                <li><strong className="text-slate-900 font-semibold">Computer Vision & MLOps:</strong> Extended a self-hosted CVAT fork (Python, TypeScript/React) with temporal labelling, auto-annotation and ClearML dataset lineage; built an unattended AWS spot-GPU training loop (~$0.40 per detector run) and trained D-FINE / Mask R-CNN models on plant-camera footage.</li>
                <li><strong className="text-slate-900 font-semibold">Cloud Tooling:</strong> Wrote a single-binary Go dashboard that drives OpenTofu to provision EC2, Lightsail, RDS, S3 and ALB/CloudFront, with IAM Identity Center SSO, cost breakdowns, CloudWatch metrics and SSM commands.</li>
                <li><strong className="text-slate-900 font-semibold">DevOps & Observability:</strong> Run production on AWS with Terraform/OpenTofu, Docker and GitHub Actions (test, ARM64 build, deploy); self-host Coolify, Gitea, GitHub runners and a NetBird VPN; instrument services with OpenTelemetry; load-test with Artillery and deliver capacity reports.</li>
                <li><strong className="text-slate-900 font-semibold">Also:</strong> Ported a Python (FastAPI) backend to Go, built the Hairlytics API (Gin, JWT, pgx, MinIO) and established Go testing and code-review practices.</li>
              </ul>
            </div>

            {/* Dev Town */}
            <div className="mb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-medium mb-1">
                <div>
                  <strong className="text-slate-950 font-bold">Web Developer Intern</strong> — Dev Town
                </div>
                <div className="text-xs font-mono text-slate-600">Mar 2024 – Jun 2024</div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-800 text-xs">
                <li>Built Express.js REST APIs and backend microservices, deployed staging environments on AWS Amplify and documented endpoints for internal developers.</li>
              </ul>
            </div>

            {/* Biomedical Engineer */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-medium mb-1">
                <div>
                  <strong className="text-slate-950 font-bold">Biomedical Engineer</strong> — National Health Mission & Baby Memorial Hospital
                </div>
                <div className="text-xs font-mono text-slate-600">May 2019 – Oct 2021</div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-800 text-xs">
                <li>Maintained and safety-tested diagnostic, patient-monitoring and surgical equipment across state health networks; moved into software while completing a BTech.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2 font-mono">
              EDUCATION & LANGUAGES
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-950 font-bold">BTech — Electrical, Electronics & Communications Engineering</strong> · APJ Abdul Kalam Technological University, Kerala
                </div>
                <div className="font-mono text-slate-600">2020 – 2024</div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-950 font-bold">Diploma in Engineering — Biomedical Engineering</strong> · Board of Technical Education, Kerala
                </div>
                <div className="font-mono text-slate-600">2016 – 2019</div>
              </div>
              <div className="pt-1 text-[11px] text-slate-600 font-mono">
                <strong>Languages: </strong>English (Professional) | Hindi (Professional) | Malayalam (Native)
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Global Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 15mm 20mm;
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}