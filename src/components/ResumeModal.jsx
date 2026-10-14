import React from 'react';
import { personalInfo, experienceData, projectsData, educationData } from '../data/portfolioData';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Outer container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#FAF7F2] border border-[#D5C8B7] shadow-2xl overflow-hidden">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 bg-[#EFE8DC] border-b border-[#DFD4C3] flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#24211D] font-mono">Akshay_Mohan_M_P_Resume.pdf</span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#EDF5EE] text-[#1B5E20] border border-[#CDE3D2] font-mono font-semibold">
              Verified Copy
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#C25E38] hover:bg-[#B0532E] text-white transition-all shadow-sm shadow-[#C25E38]/20"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#E5DCCF] text-[#5C5449] hover:text-[#24211D] hover:bg-[#DBD1C2]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Scrollable on screen, pristine on print) */}
        <div id="printable-resume" className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0 print:m-0 print:overflow-visible text-[13px] leading-normal">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 mb-4">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950">
              Akshay Mohan M P
            </h1>
            <p className="text-sm font-semibold text-cyan-800 mt-0.5">
              Backend Engineer — Go · Cloud Infrastructure · IoT Platforms
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span className="font-semibold text-slate-900">{personalInfo.relocationStatus}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 text-xs text-blue-700 mt-1 font-mono">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                {personalInfo.linkedinHandle}
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                {personalInfo.githubHandle}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-mono">
              SUMMARY
            </h2>
            <p className="text-slate-800 text-justify leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 font-mono">
              SKILLS
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <div><strong className="text-slate-950">Languages:</strong> Go, Python, JavaScript, TypeScript, SQL</div>
              <div><strong className="text-slate-950">Backend:</strong> Go (net/http, goroutines, context, pgx), Python (Django), Express.js, Node.js, REST API design, OpenAPI/Swagger, microservices, MQTT, PostgreSQL, PGMQ, Firebase</div>
              <div><strong className="text-slate-950">Frontend:</strong> React</div>
              <div><strong className="text-slate-950">AWS:</strong> EC2, Lambda, RDS, VPC, IAM, Cognito, IoT Core, S3, SQS, SES, LightSail, Amplify, Security Groups</div>
              <div><strong className="text-slate-950">Infra & DevOps:</strong> Docker, Portainer, Coolify, Zot registry, MinIO, Terraform, OpenTofu, Git, GitHub Actions CI/CD, Nginx, Certbot, Linux server administration & kernel tuning, host firewalls</div>
              <div><strong className="text-slate-950">AI & Computer Vision:</strong> SAM 2.1, YOLO (custom-trained), CVAT, agentic AI coding tools</div>
              <div><strong className="text-slate-950">Identity & Security:</strong> Zitadel, AWS Cognito, IAM policy design, RBAC, device PKI / certificate auth, signed OTA releases</div>
              <div><strong className="text-slate-950">Testing & Observability:</strong> Table-driven testing in Go, API contract tests, load & concurrency benchmarking, OpenTelemetry, ClickHouse, Uptime Kuma, structured JSON logging</div>
              <div><strong className="text-slate-950">Spoken Languages:</strong> English (professional), Malayalam (native), Hindi (professional)</div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2 font-mono">
              EXPERIENCE
            </h2>
            
            {/* Sahas Labs */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline font-medium">
                <div>
                  <strong className="text-slate-950 font-bold">Software Engineer (Backend, Go)</strong> — Sahas Labs
                </div>
                <div className="text-xs font-mono text-slate-600">Aug 2024 – Present</div>
              </div>
              <div className="text-xs text-slate-500 italic mb-1.5">
                Kolhapur, Maharashtra · IoT platform for industrial machinery
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-800 text-xs">
                <li>Led migration of the core IoT platform backend from Express.js to Go, taking ownership of API design, data model, and the deployment path that runs it in production.</li>
                <li>Built further Go microservices around the platform — an AWS SQS-driven alert and push-notification service, the cloud backend for a customer programme, and a data-collection service on object storage — and ported a Python backend to Go.</li>
                <li>Diagnosed and fixed a hard capacity ceiling under load: the platform collapsed past 225 concurrent connections, throwing 495 socket errors and timing out 99.3% of traffic. Tuning the pgx pool (min 20 / max 150), lowering bcrypt cost to 10, and expanding the kernel socket backlog (somaxconn 4096) produced a 96.1% increase in sustained throughput capacity — zero dropped connections through 225 clients and graceful, linear latency degradation at 250.</li>
                <li>Benchmarked the Go backend across 11 concurrency tiers from 25 to 250 virtual clients, documenting throughput, p-latency and error profiles into a client-facing capacity report, and specified the horizontal replica path (stateless nodes behind ALB/Nginx) for scaling beyond single-node limits.</li>
                <li>Own production infrastructure end to end — Linux servers plus AWS (EC2, Lambda, RDS, VPC), provisioned as code with Terraform and OpenTofu; Docker deployments through Portainer and Coolify; GitHub Actions CI/CD; and a self-hosted Zot registry that removed the external registry dependency and its egress cost.</li>
                <li>Set up observability and hardening across the stack: OpenTelemetry logging and tracing into ClickHouse, uptime monitoring with Uptime Kuma, and automated TLS certificates with Certbot.</li>
                <li>Designed multi-tenant authentication and role-based access with Zitadel alongside AWS Cognito, giving each customer site scoped visibility and control over only its own machines.</li>
                <li>Built the device telemetry path over AWS IoT Core and MQTT into PostgreSQL, with per-machine long- and wide-format time-series exports used by customers for offline analysis.</li>
                <li>Established the team's testing baseline — table-driven go test suites and contract tests over API payloads — and set engineering standards (clean architecture, explicit error handling, structured JSON logging) while mentoring developers through code review.</li>
              </ul>
            </div>

            {/* Dev Town */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline font-medium">
                <div>
                  <strong className="text-slate-950 font-bold">Web Developer Intern</strong> — Dev Town
                </div>
                <div className="text-xs font-mono text-slate-600">Mar 2024 – Aug 2024</div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-800 text-xs">
                <li>Built REST APIs and backend microservices in Express.js, deployed staging environments on AWS Amplify, and documented endpoints for internal developer use.</li>
              </ul>
            </div>

            {/* Biomedical Engineer */}
            <div>
              <div className="flex justify-between items-baseline font-medium">
                <div>
                  <strong className="text-slate-950 font-bold">Biomedical Engineer</strong> — National Health Mission & Baby Memorial Hospital
                </div>
                <div className="text-xs font-mono text-slate-600">May 2019 – Oct 2021</div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-800 text-xs">
                <li>Maintained and safety-tested diagnostic, patient-monitoring and surgical equipment across state health networks. Moved into software after completing a BTech in Electronics & Communications alongside this role.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2 font-mono">
              PROJECTS
            </h2>

            {/* Samyojak */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                Samyojak — Multi-tenant IoT Operations Platform
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go (migrated from Express.js) · React · PostgreSQL / pgx · Zitadel · AWS IoT Core / VPC / IAM
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Rebuilt the platform core in Go with tiered, per-site access control, routed over a private AWS VPC so operators see and command only their own machines.</li>
                <li>Built the React operations dashboard for live machine state and telemetry across CNC and VMC machine fleets, with long/wide CSV export for customer-side analysis.</li>
                <li>Owned the performance work end to end — load testing, connection-pool and kernel tuning, and the capacity report delivered to the client.</li>
              </ul>
            </div>

            {/* VMBD */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                VMBD — Automated Methylene-Blue Clay Determination Rig
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · PostgreSQL · Raspberry Pi camera · PLC integration · MinIO / S3 · image processing
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Built the backend for a machine-vision rig that automates the methylene-blue test for active clay content: the Pi captures each titration iteration, the Go service derives median stain width in pixels, and the PLC doses MB solution until the absorption endpoint is reached.</li>
                <li>Modelled cycles, iterations and measurements in PostgreSQL with captured and processed frames in MinIO/S3 — 411 measurements across 54 test cycles in a single run, at an 82% first-pass valid rate, every result traceable back to the exact frame that produced it.</li>
                <li>Exposed cycle and measurement data through Go APIs and CSV export so QA can audit a rejected reading against its captured image without touching the rig.</li>
              </ul>
            </div>

            {/* Secure OTA */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                Secure OTA Update System — Vision-Inspection Machine
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · signed releases · certificate-based device auth · automated rollback
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Built an over-the-air update system in Go with signed releases, certificate-based device authentication, and safe rollback.</li>
                <li>Hardened the deployment so a faulty build is caught and rolled back automatically.</li>
                <li>Traced a wrong first-cycle measurement to a timing race with the machine's PLC; fixed it and added a regression test.</li>
              </ul>
            </div>

            {/* AI-Assisted Annotation */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                AI-Assisted Annotation — Foundry Vision
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Python · SAM 2.1 · YOLO · CVAT · Django · React · TypeScript
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Integrated the SAM 2.1 segmentation model and a YOLO detector trained on in-house data into a self-hosted CVAT platform to speed up labelling for foundry vision work.</li>
                <li>Building a video-labelling application with Django, a REST API, React, and TypeScript.</li>
              </ul>
            </div>

            {/* Internal Cloud Admin Console */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                Internal Cloud Admin Console
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · React · AWS SDK (IAM, Cognito, RDS, IoT) · audit logging
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Built an in-house admin console replacing manual AWS Console work for provisioning tenants, devices and scoped access — collapsing a multi-step console workflow into a single form and removing the need to issue AWS Console logins to non-infrastructure staff.</li>
                <li>Backed every action with least-privilege service roles and a full audit trail of who changed what and when.</li>
              </ul>
            </div>

            {/* Vepl Cloud */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                Vepl Cloud — Enterprise Resource Platform
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · AWS Lambda / RDS / Cognito · Zitadel · Docker · GitHub Actions
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Migrated transactional Node.js services to Go on AWS Lambda, cutting cold-start latency on the serverless execution tier.</li>
                <li>Containerised the deployment path with Docker, Portainer and Coolify and wired GitHub Actions CI/CD for repeatable releases.</li>
              </ul>
            </div>

            {/* Lamae */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                Lamae — Hybrid Microservices Platform
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · Express.js · Firebase · AWS LightSail / Amplify / SES
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Split services between Go and Express.js by workload profile, deployed on cost-efficient LightSail instances with strict per-instance firewalls locking down inter-service traffic.</li>
                <li>Integrated Firebase for real-time asset tracking and AWS SES for transactional email; frontend continuously deployed via Amplify.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2 font-mono">
              EDUCATION
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
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
            padding: 20mm;
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
