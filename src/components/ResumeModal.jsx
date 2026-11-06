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
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#00ABE4] hover:bg-[#0096CA] text-white transition-all shadow-sm shadow-[#00ABE4]/20"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
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
        <div id="printable-resume" className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0 print:m-0 print:overflow-visible text-[13px] leading-normal">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 mb-4">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950">
              Akshay Mohan M P
            </h1>
            <p className="text-sm font-semibold text-[#0084B4] mt-0.5">
              Backend Engineer (Go) · IoT Platforms · AWS & DevOps
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
            <div className="flex flex-wrap items-center gap-x-4 text-xs text-[#0084B4] mt-1 font-mono">
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
              SKILLS AT A GLANCE
            </h2>
            <div className="overflow-x-auto mb-2">
              <table className="w-full text-left text-xs border border-slate-200">
                <thead className="bg-slate-100 font-mono text-slate-800 border-b border-slate-200">
                  <tr>
                    <th className="p-1.5 font-bold w-1/4">Area</th>
                    <th className="p-1.5 font-bold w-1/2">What I use</th>
                    <th className="p-1.5 font-bold w-1/4">Where I used it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">Backend (Go)</td>
                    <td className="p-1.5">Gin, pgx, REST/OpenAPI, JWT, RBAC, OpenFGA, Protobuf</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">Samyojak, Vepl Cloud, alert pipeline, device cert service</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">Data & messaging</td>
                    <td className="p-1.5">PostgreSQL, PGMQ, SQLite, MQTT (VerneMQ, EMQX, embedded broker), FCM, AWS SQS, S3 / MinIO</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">Alerts, telemetry, edge devices</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">Cloud & infrastructure</td>
                    <td className="p-1.5">AWS (EC2, Lightsail, S3, SES, Secrets Manager, IAM Identity Center, Amplify, CloudFront), Terraform / OpenTofu, Docker, Coolify, Nomad</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">All platforms</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">Security & PKI</td>
                    <td className="p-1.5">X.509 PKI, mutual TLS, certificate revocation (CRL), signed updates, secrets management</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">Device fleet, container registry, OTA updates</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">Observability & testing</td>
                    <td className="p-1.5">OpenTelemetry (traces, metrics, logs), HyperDX, Go testing (testify, pgxmock), Artillery load testing</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">Every Go service</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">Edge & embedded</td>
                    <td className="p-1.5">Raspberry Pi 5, Modbus TCP, OpenCV (GoCV), systemd, Server-Sent Events</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">Vision test bench (VMBD)</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">Python & TypeScript</td>
                    <td className="p-1.5">CVAT extensions, ClearML, PyTorch detectors (D-FINE, Mask R-CNN), React / Redux Toolkit</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">Computer-vision pipeline (SahasForge)</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold font-mono">CI/CD</td>
                    <td className="p-1.5">GitHub Actions (hosted and self-hosted runners), Gitea Actions, ARM64 builds</td>
                    <td className="p-1.5 text-cyan-900 font-mono text-[11px]">Test, ARM64 build and deploy pipelines</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-[11px] text-slate-700">
              <strong>Spoken Languages:</strong> English (professional), Malayalam (native), Hindi (professional)
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
                Kolhapur, Maharashtra · Industrial IoT platforms & cloud infrastructure
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-800 text-xs">
                <li>Led migration of the core IoT platform backend (Samyojak) from Express.js to Go, taking complete ownership of API design, OpenFGA relationship-based access model, and production deployment.</li>
                <li>Diagnosed and fixed a hard capacity ceiling under load: platform collapsed past 225 concurrent connections, throwing 495 socket errors and timing out 99.3% of traffic. Tuning pgx pool (min 20 / max 150), lowering bcrypt cost to 10, and expanding kernel socket backlog (somaxconn 4096) produced a 96.1% increase in sustained throughput capacity — zero dropped connections through 225 clients and graceful linear latency degradation at 250.</li>
                <li>Built further Go microservices: Vepl Cloud (94 OpenAPI endpoints, Odoo ERP integration, native PDF reports), an event-driven PGMQ alert and push pipeline with Firebase Cloud Messaging, and an internal CA/mTLS device security service.</li>
                <li>Engineered edge software on Raspberry Pi 5 for VMBD Vision: Modbus TCP closed-loop PLC dosing, real-time OpenCV (GoCV) frame analysis, embedded MQTT, and a cryptographically signed OTA update daemon with automated rollback.</li>
                <li>Architected SahasForge computer-vision pipeline: CVAT extensions with temporal labeling, Nuclio auto-annotation, and an unattended AWS GPU spot training loop executing 48-epoch runs for ~$0.40.</li>
                <li>Built the AWS Cloud Dashboard: a single-binary Go tool with zero external dependencies driving OpenTofu for infrastructure provisioning, AWS SSO device login, and Cost Explorer analytics.</li>
                <li>Established the team's testing baseline: table-driven Go test suites (600+ tests across services), pgxmock database mocking, and OpenTelemetry traces/metrics/logs over OTLP into ClickHouse/HyperDX.</li>
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
                <li>Maintained and safety-tested diagnostic, patient-monitoring and surgical equipment across state health networks. Developed foundational discipline in mission-critical reliability, electrical signals, safety margins, and hardware protocols before transitioning to software.</li>
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
                1. Samyojak: Multi-Tenant Industrial IoT Platform
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · Gin · PostgreSQL (pgx) · OpenFGA · AWS · OpenTelemetry · Scalar · testify / pgxmock
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Led backend migration from Express.js to Go end to end: API design, data model, and production deployment.</li>
                <li>Access control: tenant-scoped JWT cookie sessions, 4-tier role model (super-admin, company, plant, machine) with 40+ permission scopes, and OpenFGA relationship checks resolving each request directly to its entity.</li>
                <li>Device flows: bulk, de-duplicated and rate-limited measurement ingestion; Fernet-encrypted QR/BLE tokens for device provisioning; S3 for assets; SES for email OTP.</li>
                <li>Quality: 85 OpenAPI-documented paths with generated Scalar docs and Postman collection generator; ~300 Go tests using testify and pgxmock; gzip and ETag support; tuned pgx connection pool (completely replaced GORM).</li>
                <li>Operations: OpenTelemetry traces, metrics and logs over OTLP into HyperDX; ARM64 binaries deployed on EC2 under systemd.</li>
              </ul>
            </div>

            {/* Vepl Cloud */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                2. Vepl Cloud: Laboratory & Test-Management Platform
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · PostgreSQL · Odoo ERP · Docker · Coolify · REST/OpenAPI · PDF Generation
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Backend for managing labs, specimens, samples, batches, test requests, calibration, inventory, and device telemetry.</li>
                <li>Enterprise integration: Odoo ERP integration through dedicated Go API routes with a Dockerised Odoo instance and custom addons.</li>
                <li>Automated reporting: native, mathematically verified PDF calibration reports generated in Go without external rendering dependencies.</li>
                <li>Fail-safe operations: fail-fast boot sequence (secrets, database, keys), standalone liveness endpoint with zero database dependency, Docker health checks, 94 documented API paths, 300+ Go tests, and tag-based rollbacks via Coolify.</li>
              </ul>
            </div>

            {/* Alert Pipeline */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                3. Alert & Push-Notification Pipeline
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · PGMQ · Firebase Cloud Messaging · PostgreSQL / pgx · Worker Pool
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>High-throughput event worker service: Go worker pool continuously drains a PGMQ queue, evaluates per-machine alert thresholds, writes immutable alert logs, and dispatches push notifications via Firebase Cloud Messaging.</li>
                <li>Queue re-architecture: migrated messaging from AWS SQS to PGMQ (Postgres-native), eliminating external cloud egress costs and latency; moved data layer to pgx connection pooling.</li>
              </ul>
            </div>

            {/* Device Security & MQTT */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                4. Device Security & MQTT Backend
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · X.509 PKI · VerneMQ / EMQX · Protobuf · mutual TLS · Zot Registry
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Internal CA & PKI: built certificate service with internal CA, per-device X.509 issuance, certificate revocation list (CRL), and bulk certificate regeneration.</li>
                <li>MQTT authentication & authorization hooks for VerneMQ and EMQX validating mutual TLS; high-efficiency Protobuf telemetry decoding; custom Go load-test tool.</li>
                <li>Self-hosted Zot OCI container registry secured with mutual TLS: scripted CA, server and client certificates, and end-to-end verification script.</li>
              </ul>
            </div>

            {/* VMBD Vision */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                5. VMBD Vision: Edge Test-Bench Controller
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go · Raspberry Pi 5 · Modbus TCP · OpenCV (GoCV) · MQTT · SQLite · SSE
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Vision-based absorption-test system on Raspberry Pi 5: polls industrial PLC over Modbus TCP, captures camera frames, measures median stain width with OpenCV (GoCV), stores in SQLite, and serves live operator dashboard over Server-Sent Events (SSE).</li>
                <li>Built Over-The-Air (OTA) update system: cryptographically signed releases, encrypted release hosting, scheduled backups with restore, update/revert workflows, and PIN-gated actions.</li>
                <li>MQTT control channel: embedded broker, cryptographic signed-command verification, device client, and operator CLI.</li>
              </ul>
            </div>

            {/* SahasForge */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                6. SahasForge: Computer-Vision Data & Training Pipeline
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Python · TypeScript / React · CVAT · ClearML · Nuclio · AWS Spot · PyTorch
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Extended self-hosted CVAT fork with temporal-labeling workspace and plugin, auto-annotation through Nuclio-served detectors, and ClearML dataset lineage linking annotation tasks to training data.</li>
                <li>Unattended GPU training loop on AWS spot instances: launcher, golden AMI, IAM policy simulator verification, budget guard, and ClearML triggers. Instances boot, train, upload weights, and terminate autonomously. Full 48-epoch detector run cost ~$0.40.</li>
                <li>Trained and evaluated D-FINE and Mask R-CNN models (crane, pit, ladle, charger-wagon detection), reaching ~0.75 validation AP on crane/pit tracking and serving back to CVAT for automated pre-labeling.</li>
              </ul>
            </div>

            {/* AWS Cloud Dashboard */}
            <div className="mb-2.5">
              <div className="font-bold text-slate-950">
                7. AWS Cloud Dashboard
              </div>
              <div className="text-xs text-slate-600 font-mono mb-1">
                Go (Zero 3rd-party dependencies) · OpenTofu / Terraform · AWS · IAM Identity Center · Nomad
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Single-binary web console with zero external Go dependencies driving OpenTofu to provision EC2, Lightsail, S3, Secrets Manager, RDS, and ALB/CloudFront with isolated state per project.</li>
                <li>IAM Identity Center (AWS SSO) device-code login; Cost Explorer tag breakdowns, networking costs, and VPC flow-log analysis.</li>
                <li>CloudWatch metrics, SSM Run Command, and Nomad job deployments; hardened by default (localhost binding, IMDSv2, KMS volume encryption, encrypted state backups).</li>
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
