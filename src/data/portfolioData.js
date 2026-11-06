export const personalInfo = {
  name: "Akshay Mohan M P",
  title: "Backend Engineer",
  subtitle: "Backend Engineer (Go) · IoT Platforms · AWS & DevOps",
  headline: "Engineering High-Throughput Go Backends, IoT Platforms & AWS Infrastructure",
  location: "Kolhapur, Maharashtra, India",
  relocationStatus: "Open to relocation & remote",
  email: "akshaymohanmp@gmail.com",
  phone: "+91 85890 06333",
  linkedin: "https://linkedin.com/in/akshay-mohan-m-p",
  linkedinHandle: "linkedin.com/in/akshay-mohan-m-p",
  github: "https://github.com/AkshayMohanMp",
  githubHandle: "github.com/AkshayMohanMp",
  summary: `Backend engineer building production systems in Go for industrial IoT and laboratory platforms, and running the cloud infrastructure they live on. Led a complete Express.js-to-Go migration of a multi-tenant platform, and work across edge devices (Raspberry Pi 5), device security (PKI / mTLS / MQTT) and computer-vision data pipelines. Background in biomedical engineering maintaining hospital equipment brings a disciplined habit of building careful, verifiable systems.`,
  stats: [
    {
      value: "+96.1%",
      label: "Throughput Gain",
      description: "Sustained increase under heavy concurrency after kernel & pgx tuning"
    },
    {
      value: "85+",
      label: "OpenAPI Endpoints",
      description: "Documented paths with generated Scalar docs and ~300 Go tests"
    },
    {
      value: "$0.40",
      label: "Autonomous GPU Run",
      description: "48-epoch detector training loop cost on AWS spot instances"
    },
    {
      value: "2+ Yrs",
      label: "Production Systems",
      description: "Operating Go services, IoT fleets, mTLS brokers & telemetry pipelines"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "backend",
      name: "Backend (Go)",
      icon: "Server",
      skills: [
        { name: "Gin Framework", level: "Advanced", highlight: true, note: "Clean architecture, custom middleware, gzip & ETag caching", whereUsed: "Samyojak, Vepl Cloud" },
        { name: "pgx & PostgreSQL", level: "Advanced", highlight: true, note: "Connection pool tuning (min 20 / max 150), replaced GORM for deterministic scale", whereUsed: "All Go services" },
        { name: "REST & OpenAPI / Swagger", level: "Advanced", highlight: true, note: "85+ OpenAPI paths, Scalar docs generation, Postman collection generator", whereUsed: "Samyojak, Vepl Cloud" },
        { name: "OpenFGA & RBAC", level: "Advanced", highlight: true, note: "Relationship-based access control, 4-tier role hierarchy, 40+ permission scopes", whereUsed: "Samyojak" },
        { name: "JWT & Session Security", level: "Advanced", note: "Tenant-scoped JWT cookie sessions, Fernet-encrypted QR/BLE tokens, email OTP", whereUsed: "Samyojak, Vepl Cloud" },
        { name: "Protobuf & gRPC", level: "Proficient", note: "Wire-efficient binary telemetry serialization for low-bandwidth cellular devices", whereUsed: "Device security backend" },
        { name: "Go Concurrency & Context", level: "Advanced", note: "Goroutine worker pools, channel pipelines, graceful shutdown context propagation", whereUsed: "Alert pipeline, VMBD" },
        { name: "Go Testing & Mocking", level: "Advanced", note: "300+ tests using testify, pgxmock, contract tests over API payloads", whereUsed: "Every Go service" }
      ]
    },
    {
      id: "data-messaging",
      name: "Data & Messaging",
      icon: "Database",
      skills: [
        { name: "PostgreSQL & Time-Series", level: "Advanced", highlight: true, note: "High-volume measurement ingestion, long/wide format telemetry exports", whereUsed: "Samyojak, Vepl Cloud" },
        { name: "PGMQ (Postgres-Native)", level: "Advanced", highlight: true, note: "Transactional Postgres-native message queuing replacing external SQS", whereUsed: "Alert & push pipeline" },
        { name: "MQTT (VerneMQ & EMQX)", level: "Advanced", highlight: true, note: "Custom Go mTLS authentication & authorization hooks, QoS message routing", whereUsed: "Device fleet, VMBD" },
        { name: "Embedded MQTT & SQLite", level: "Proficient", highlight: true, note: "Embedded broker and local SQLite storage for edge offline autonomy", whereUsed: "VMBD Vision (Pi 5)" },
        { name: "Firebase Cloud Messaging", level: "Advanced", note: "Instant threshold breach push notifications to mobile operator apps", whereUsed: "Alert pipeline" },
        { name: "AWS SQS & Event Queues", level: "Proficient", note: "Asynchronous decoupling and worker pool event ingestion", whereUsed: "Alert pipeline legacy" },
        { name: "S3 & MinIO Object Storage", level: "Advanced", note: "Binary frame storage, encrypted release packages, and asset hosting", whereUsed: "VMBD, SahasForge, Samyojak" },
        { name: "Odoo ERP Data Sync", level: "Proficient", note: "Dedicated Go API routes interfacing with Dockerized Odoo and custom addons", whereUsed: "Vepl Cloud" }
      ]
    },
    {
      id: "cloud-infra",
      name: "Cloud & Infrastructure",
      icon: "Cloud",
      skills: [
        { name: "AWS Core Services", level: "Advanced", highlight: true, note: "EC2, Lightsail, S3, SES, Secrets Manager, RDS, ALB, CloudFront, Amplify", whereUsed: "All platforms" },
        { name: "IAM Identity Center (SSO)", level: "Advanced", highlight: true, note: "Device-code OAuth login, least-privilege policy simulation, scoped IAM", whereUsed: "AWS Cloud Dashboard" },
        { name: "Terraform & OpenTofu", level: "Advanced", highlight: true, note: "Infrastructure as Code, isolated per-project state, automated provisioning", whereUsed: "AWS Cloud Dashboard, Prod" },
        { name: "Docker Containerization", level: "Advanced", note: "Multi-stage minimal ARM64/AMD64 builds, health checks, tag-based releases", whereUsed: "All services" },
        { name: "Coolify & Portainer", level: "Proficient", note: "Self-hosted PaaS container orchestration, tag-based atomic rollbacks", whereUsed: "Vepl Cloud, internal PaaS" },
        { name: "Nomad Deployment", level: "Proficient", note: "Lightweight container and binary job dispatch across cloud instances", whereUsed: "AWS Cloud Dashboard" },
        { name: "Linux Administration", level: "Advanced", highlight: true, note: "Kernel somaxconn 4096 tuning, systemd unit supervision, sysctl, firewalls", whereUsed: "EC2, Pi 5, production servers" },
        { name: "NetBird VPN & WireGuard", level: "Proficient", note: "Mesh VPN overlay for private, secure zero-trust network access", whereUsed: "Internal infrastructure" }
      ]
    },
    {
      id: "security-pki",
      name: "Security & PKI",
      icon: "ShieldAlert",
      skills: [
        { name: "X.509 PKI & Internal CA", level: "Advanced", highlight: true, note: "Custom certificate service, per-device issuance, automated bulk regeneration", whereUsed: "Device security backend" },
        { name: "Mutual TLS (mTLS)", level: "Advanced", highlight: true, note: "Strict two-way cryptographic authentication for IoT device fleets and registries", whereUsed: "MQTT fleet, Zot registry" },
        { name: "Certificate Revocation (CRL)", level: "Advanced", note: "Automated revocation list compilation to immediately invalidate compromised devices", whereUsed: "Device security backend" },
        { name: "Cryptographically Signed OTA", level: "Advanced", highlight: true, note: "SHA256 release signing, encrypted package hosting, fail-safe dual-slot revert", whereUsed: "VMBD Vision (Pi 5)" },
        { name: "Zot OCI Registry Hardening", level: "Proficient", note: "Self-hosted container registry with mTLS verification script and zero egress cost", whereUsed: "Device fleet, CI/CD" },
        { name: "Secrets & Token Encryption", level: "Advanced", note: "AWS Secrets Manager, Fernet-encrypted QR/BLE provisioning tokens, bcrypt cost tuning", whereUsed: "Samyojak, Dashboard" }
      ]
    },
    {
      id: "observability-testing",
      name: "Observability & Testing",
      icon: "Activity",
      skills: [
        { name: "OpenTelemetry (OTel)", level: "Advanced", highlight: true, note: "Unified distributed tracing, metrics, and structured logs over OTLP", whereUsed: "Every Go service" },
        { name: "HyperDX & ClickHouse", level: "Proficient", highlight: true, note: "High-volume columnar log aggregation, distributed trace visualization", whereUsed: "Samyojak, Sahas stack" },
        { name: "Go Test Suites & testify", level: "Advanced", highlight: true, note: "Table-driven testing, subtests, explicit assertion hierarchies", whereUsed: "All Go services (600+ tests)" },
        { name: "pgxmock Contract Testing", level: "Advanced", note: "Deterministic database driver mocking verifying SQL transactions and pool behavior", whereUsed: "Samyojak, Vepl Cloud" },
        { name: "Artillery Load Testing", level: "Advanced", highlight: true, note: "Multi-tier concurrency benchmarking (25-250 clients), client capacity reporting", whereUsed: "Sahas Labs platform audit" },
        { name: "Uptime Kuma & Alerts", level: "Proficient", note: "Continuous heartbeat health checking with webhook dispatch to on-call channels", whereUsed: "Production infrastructure" }
      ]
    },
    {
      id: "edge-embedded",
      name: "Edge & Embedded",
      icon: "Cpu",
      skills: [
        { name: "Raspberry Pi 5", level: "Advanced", highlight: true, note: "Headless industrial setup, hardware camera capture, performance optimization", whereUsed: "VMBD Vision rig" },
        { name: "Modbus TCP Protocol", level: "Advanced", highlight: true, note: "Real-time industrial PLC polling, closed-loop chemical dosing synchronization", whereUsed: "VMBD Vision rig" },
        { name: "OpenCV & GoCV", level: "Proficient", highlight: true, note: "Real-time photometric absorption endpoint analysis, median stain pixel width", whereUsed: "VMBD Vision rig" },
        { name: "Server-Sent Events (SSE)", level: "Advanced", note: "Low-overhead unidirectional real-time data streaming to operator dashboards", whereUsed: "VMBD Vision rig" },
        { name: "systemd Service Supervision", level: "Advanced", note: "Watchdogs, automated restarts, logging to journald, cgroup limits", whereUsed: "EC2 & edge devices" }
      ]
    },
    {
      id: "ai-vision",
      name: "AI & Computer Vision",
      icon: "Brain",
      skills: [
        { name: "Autonomous GPU Spot Training", level: "Advanced", highlight: true, note: "Unattended AWS spot instance lifecycle, golden AMI, budget guards, $0.40/run", whereUsed: "SahasForge" },
        { name: "CVAT Extensions & Plugins", level: "Proficient", highlight: true, note: "Custom temporal-labeling workspace, Nucli-served automated pre-labeling", whereUsed: "SahasForge" },
        { name: "ClearML Dataset Lineage", level: "Proficient", note: "Full provenance linking raw plant-camera footage, annotation tasks, and model weights", whereUsed: "SahasForge" },
        { name: "PyTorch (D-FINE & Mask R-CNN)", level: "Proficient", note: "Trained industrial detectors achieving ~0.75 validation AP on crane/pit tracking", whereUsed: "SahasForge" },
        { name: "React & Redux Toolkit", level: "Proficient", note: "Modern frontend state management for interactive CV annotation and operations UI", whereUsed: "SahasForge, Samyojak" }
      ]
    },
    {
      id: "cicd-delivery",
      name: "CI/CD & Delivery",
      icon: "Layers",
      skills: [
        { name: "GitHub Actions", level: "Advanced", highlight: true, note: "Hosted and self-hosted runners, multi-arch ARM64/AMD64 builds, automated test gates", whereUsed: "All repositories" },
        { name: "Gitea Actions", level: "Proficient", note: "Self-hosted, air-gapped CI/CD execution pipeline for sensitive codebases", whereUsed: "Internal Sahas infrastructure" },
        { name: "ARM64 Cross-Compilation", level: "Advanced", note: "Native Go cross-compilation targeting AWS Graviton (t4g) and Raspberry Pi 5", whereUsed: "Samyojak, VMBD" },
        { name: "Tag-Based Rollbacks", level: "Advanced", note: "Deterministic container and binary version rollback pipelines under Coolify & systemd", whereUsed: "Vepl Cloud, VMBD" }
      ]
    }
  ],
  languages: [
    { name: "English", fluency: "Professional working proficiency" },
    { name: "Malayalam", fluency: "Native speaker" },
    { name: "Hindi", fluency: "Professional working proficiency" }
  ]
};

export const benchmarkExperiment = {
  title: "Industrial Platform Concurrency Ceiling & Kernel Optimization",
  company: "Sahas Labs",
  problem: "Under production load spikes past 225 concurrent connections, the legacy Express.js backend experienced catastrophic failure: 495 socket errors, exhausted connection pools, and timed out 99.3% of client traffic.",
  solution: "Led end-to-end migration of core services to Go. Calibrated pgx PostgreSQL pool parameters (min 20 / max 150), lowered bcrypt compute cost from 12 to 10 for auth bursts, and tuned Linux kernel socket queue depth (net.core.somaxconn = 4096).",
  resultMetric: "+96.1% Sustained Throughput Capacity",
  resultSummary: "Zero dropped connections across 225 concurrent clients; graceful, predictable linear latency degradation up to 250 virtual clients. Published an 11-tier capacity audit report.",
  tuningSnippet: `// 1. Database Connection Pool Optimization (Go / pgxpool)
config, err := pgxpool.ParseConfig(os.Getenv("DATABASE_URL"))
if err != nil {
    log.Fatal("Invalid db url:", err)
}
config.MinConns = 20           // Pre-warmed connections ready for burst
config.MaxConns = 150          // High-concurrency limit without DB thrashing
config.MaxConnLifetime = 30 * time.Minute
config.MaxConnIdleTime = 5 * time.Minute

// 2. Linux Kernel Socket Backlog Tuning (sysctl.conf)
// net.core.somaxconn = 4096   // Increased from default 128 to prevent SYN drops
// net.ipv4.tcp_max_syn_backlog = 4096

// 3. Password Hashing Calibration for Auth Storms
// bcrypt.GenerateFromPassword([]byte(pass), 10) // Calibrated cost 10`,
  tiers: [
    { clients: 25, beforeRps: 180, afterRps: 480, beforeP95: 14, afterP95: 4, beforeErrors: 0, afterErrors: 0 },
    { clients: 50, beforeRps: 340, afterRps: 950, beforeP95: 22, afterP95: 6, beforeErrors: 0, afterErrors: 0 },
    { clients: 75, beforeRps: 490, afterRps: 1410, beforeP95: 28, afterP95: 8, beforeErrors: 0, afterErrors: 0 },
    { clients: 100, beforeRps: 620, afterRps: 1850, beforeP95: 38, afterP95: 10, beforeErrors: 0, afterErrors: 0 },
    { clients: 125, beforeRps: 710, afterRps: 2280, beforeP95: 54, afterP95: 12, beforeErrors: 0.2, afterErrors: 0 },
    { clients: 150, beforeRps: 810, afterRps: 2720, beforeP95: 72, afterP95: 14, beforeErrors: 1.2, afterErrors: 0 },
    { clients: 175, beforeRps: 890, afterRps: 3110, beforeP95: 110, afterP95: 16, beforeErrors: 4.5, afterErrors: 0 },
    { clients: 200, beforeRps: 940, afterRps: 3450, beforeP95: 195, afterP95: 19, beforeErrors: 12.0, afterErrors: 0 },
    { clients: 225, beforeRps: 680, afterRps: 3820, beforeP95: 1850, afterP95: 26, beforeErrors: 49.3, afterErrors: 0 },
    { clients: 240, beforeRps: 320, afterRps: 3750, beforeP95: 4200, afterP95: 34, beforeErrors: 81.0, afterErrors: 0 },
    { clients: 250, beforeRps: 120, afterRps: 3680, beforeP95: 8500, afterP95: 42, beforeErrors: 99.3, afterErrors: 0.1 }
  ]
};

export const projectsData = [
  {
    id: "samyojak",
    title: "Samyojak: Multi-Tenant Industrial IoT Platform",
    tagline: "End-to-end multi-tenant IoT platform managing plants, machines, and connected device measurements",
    category: "Go & Systems",
    featured: true,
    badge: "Flagship Platform",
    stack: ["Go", "Gin", "PostgreSQL / pgx", "OpenFGA", "AWS", "OpenTelemetry", "Scalar", "testify / pgxmock"],
    highlights: [
      "Access Control Architecture: Engineered tenant-scoped JWT cookie sessions, a four-tier role hierarchy (super-admin, company, plant, machine) with 40+ permission scopes, and OpenFGA relationship-based checks resolving each request directly to its entity.",
      "High-Throughput Device Flows: Built bulk, de-duplicated and rate-limited measurement ingestion pipelines; Fernet-encrypted QR/BLE tokens for device provisioning; S3 for binary assets; and SES for e-mail OTP verification.",
      "API Surface & Test Suite: Designed 85 OpenAPI-documented routes with generated Scalar documentation and an automated Postman collection generator; authored ~300 Go tests using testify and pgxmock.",
      "Database & Protocol Tuning: Implemented gzip compression and ETag validation, and tuned the pgx connection pool to completely replace GORM for deterministic concurrency and zero connection leaks.",
      "Production Operations: Instrumented full OpenTelemetry traces, metrics, and logs over OTLP into HyperDX/ClickHouse, compiling ARM64 binaries deployed onto AWS EC2 instances running under systemd."
    ],
    architecture: "Edge Gateways (MQTT/TLS) -> OpenFGA Relationship Guard -> Gin Telemetry Ingestion -> PostgreSQL (pgx pool) -> OpenTelemetry OTLP Collector",
    impact: "+96.1% sustained throughput capacity; zero dropped connections through 225 concurrency; 85 documented endpoints with ~300 tests."
  },
  {
    id: "vepl-cloud",
    title: "Vepl Cloud: Laboratory & Test-Management Platform",
    tagline: "Backend for managing labs, specimens, samples, batches, calibration, inventory, and device telemetry",
    category: "Go & Systems",
    featured: true,
    badge: "Enterprise Backend",
    stack: ["Go", "PostgreSQL", "Odoo ERP", "Docker", "Coolify", "REST/OpenAPI", "PDF Generation"],
    highlights: [
      "Enterprise Laboratory Management: Engineered backend services managing complex laboratory workflows: specimen tracking, sample batches, test requests, device calibration, chemical inventory, and machine telemetry under strict auditability.",
      "Odoo ERP Integration: Built direct enterprise integration through dedicated Go API routes interfacing with a Dockerised Odoo instance and custom addons for synced enterprise resource tracking.",
      "Native PDF Calibration Engine: Generated dynamic, mathematically verified PDF calibration and certification reports natively in Go without external rendering engines.",
      "Fail-Safe Boot & Fault Isolation: Implemented a fail-fast boot sequence (validating secrets, database connectivity, and encryption keys upfront), a standalone liveness endpoint with zero database dependency to avert cascading reboot failures, and Docker health checks.",
      "API & Test Rigor: Maintained 94 documented API paths and 300+ Go unit/integration tests with tag-based zero-downtime rollbacks via Coolify and private registry."
    ],
    architecture: "Laboratory Web Client -> Go Core API -> PostgreSQL (Lab State & Telemetry) + Dockerized Odoo ERP -> Coolify Container Orchestrator",
    impact: "94 documented API paths, 300+ Go tests, native PDF report generation, and isolated liveness architecture."
  },
  {
    id: "alert-pipeline",
    title: "Alert & Push-Notification Pipeline",
    tagline: "High-throughput asynchronous worker pool converting device measurements into real-time alerts",
    category: "Go & Systems",
    featured: true,
    badge: "Event-Driven Worker",
    stack: ["Go", "PGMQ", "Firebase Cloud Messaging", "PostgreSQL / pgx", "Worker Pool"],
    highlights: [
      "Queue Re-architecture to PGMQ: Migrated the entire messaging tier from AWS SQS to PGMQ (Postgres-native message queue), consolidating queuing directly into PostgreSQL and eliminating external AWS egress latency and cloud service costs.",
      "Worker Pool Concurrency: Engineered a scalable Go worker pool that continuously drains the PGMQ queue, evaluates dynamic per-machine threshold rules in real time, and writes immutable alert logs.",
      "Instant Mobile Dispatch: Integrated Firebase Cloud Messaging (FCM) to deliver instant push notifications to plant supervisors and mobile operators upon threshold breach.",
      "Data Layer Optimization: Moved the data access tier to direct pgx connection pooling, guaranteeing reliable connection reuse during sudden event spikes."
    ],
    architecture: "Telemetry Ingestion Service -> PGMQ Queue (Postgres-native) -> Go Worker Pool (Rule Evaluator) -> Firebase Cloud Messaging (FCM) + Alert Log DB",
    impact: "Sub-second alert trigger latency across thousands of industrial machines; eliminated external SQS egress costs and architectural complexity."
  },
  {
    id: "device-security-mqtt",
    title: "Device Security & MQTT Backend",
    tagline: "Fleet-wide cryptographic device identity, internal CA, and mTLS-authenticated MQTT brokers",
    category: "IoT & Edge Hardware",
    featured: true,
    badge: "PKI & Device Security",
    stack: ["Go", "X.509 PKI", "VerneMQ", "EMQX", "Protobuf", "mutual TLS", "Zot Registry"],
    highlights: [
      "Internal Certificate Authority (CA): Purpose-built certificate service with an internal CA managing end-to-end X.509 issuance, certificate revocation lists (CRL), and automated bulk certificate regeneration for field fleets.",
      "Broker Authentication & Authorization: Engineered custom Go authentication and authorization hooks for VerneMQ and EMQX brokers, verifying device certificates via mutual TLS (mTLS) on connection.",
      "Wire-Efficient Protobuf Decoding: Developed high-throughput Protobuf binary telemetry decoding routines to minimize cellular and industrial bandwidth consumption over constrained factory links.",
      "Hardened OCI Container Registry: Deployed and hardened a self-hosted Zot OCI container registry secured with mutual TLS, complete with scripted CA, server/client certificates, and end-to-end cryptographic verification scripts.",
      "Stress Benchmarking: Built a specialized Go load-testing utility to simulate device connection storms and connection recovery against the MQTT brokers."
    ],
    architecture: "IoT Device Fleet -> Internal CA / CRL Verifier -> VerneMQ / EMQX (Go mTLS Auth Hooks) -> Protobuf Telemetry Decoder -> Processing Services",
    impact: "Zero-trust mTLS device fleet authentication; eliminated unauthorized machine spoofing; compressed wire footprint with Protobuf."
  },
  {
    id: "vmbd",
    title: "VMBD Vision: Edge Test-Bench Controller",
    tagline: "Real-time absorption-test machine vision controller running on Raspberry Pi 5 with closed-loop PLC dosing",
    category: "IoT & Edge Hardware",
    featured: true,
    badge: "Edge & Embedded Rig",
    stack: ["Go", "Raspberry Pi 5", "Modbus TCP", "OpenCV (GoCV)", "MQTT", "SQLite", "SSE"],
    highlights: [
      "Hardware Closed-Loop Control: Rewrote the vision-based absorption-test system from Python to Go on Raspberry Pi 5; polls an industrial PLC over Modbus TCP to synchronize incremental chemical dosing.",
      "Real-Time Edge Vision: Captures high-resolution camera frames, derives median pixel stain width with OpenCV (GoCV), and commits audit iterations into local SQLite.",
      "Live Operator Feeds: Serves a low-overhead, real-time operator inspection dashboard using Server-Sent Events (SSE) for millisecond-level visual feedback during testing.",
      "Over-The-Air (OTA) Update System: Designed and built an OTA update daemon: cryptographically signed releases, encrypted release hosting, scheduled backups with instant restore, automated update/revert workflows, and PIN-gated safety overrides.",
      "Dual-Control Channel: Engineered an embedded MQTT broker with cryptographic signed-command verification, on-device client, and a dedicated operator CLI tool."
    ],
    architecture: "Pi 5 Camera + PLC (Modbus TCP) -> Go Vision Controller (OpenCV/GoCV) -> Local SQLite -> Embedded MQTT Broker + SSE Live Dashboard",
    impact: "411 measurements across 54 cycles at 82% 1st-pass valid rate; fail-safe PIN-gated OTA rollback and zero-latency live visual feedback."
  },
  {
    id: "sahasforge",
    title: "SahasForge: Computer-Vision Data & Training Pipeline",
    tagline: "Tooling turning plant-camera footage into trained detection models with unattended $0.40 GPU spot loops",
    category: "AI & Vision",
    featured: true,
    badge: "Autonomous ML Loop",
    stack: ["Python", "TypeScript / React", "CVAT", "ClearML", "Nuclio", "AWS Spot", "PyTorch (D-FINE / Mask R-CNN)"],
    highlights: [
      "Custom CVAT Extensions: Extended a self-hosted CVAT fork with a custom temporal-labeling workspace and plugin, automated annotation through Nuclio-served detectors, and ClearML dataset lineage tracking linking annotation tasks to training data.",
      "Unattended GPU Spot Training: Engineered an autonomous training loop on AWS spot instances: custom launcher, golden AMI, IAM permissions verified with policy simulator, budget guards, and ClearML triggers. Instances boot, train, upload weights, and terminate autonomously.",
      "Drastic Cost Reduction: Reduced full 48-epoch detector training run cost to approximately $0.40 per run through spot lifecycle automation.",
      "High-Accuracy Industrial Models: Trained and evaluated D-FINE and Mask R-CNN models for industrial crane, pit, ladle, and charger-wagon detection, reaching a validation AP of ~0.75 on crane/pit tracking and serving weights back to CVAT for automated pre-labeling."
    ],
    architecture: "Plant Cameras -> CVAT (Custom Workspace Plugin) -> ClearML Lineage -> Unattended AWS GPU Spot Workers -> D-FINE & Mask R-CNN -> Nuclio Pre-labeling",
    impact: "Full 48-epoch GPU training loop executed at ~$0.40; achieved ~0.75 validation AP on industrial tracking models and reduced manual labeling time by >60%."
  },
  {
    id: "aws-cloud-dashboard",
    title: "AWS Cloud Dashboard",
    tagline: "Single-binary browser tool with zero external Go dependencies provisioning and managing AWS via OpenTofu",
    category: "Cloud & DevOps",
    featured: true,
    badge: "Zero-Dependency Tooling",
    stack: ["Go (Zero 3rd-party dependencies)", "OpenTofu / Terraform", "AWS", "IAM Identity Center", "Nomad"],
    highlights: [
      "Pure Go Single Binary: Built a standalone web console with zero third-party Go dependencies that drives OpenTofu to provision EC2, Lightsail, S3, Secrets Manager, RDS, and ALB/CloudFront stacks with isolated per-project state.",
      "Enterprise Identity: Implemented native IAM Identity Center (AWS SSO) device-code login directly in the browser console.",
      "Cost & Network Telemetry: Interactive AWS Cost Explorer breakdowns by tag, calculated per-resource networking egress costs, and automated VPC flow-log analysis.",
      "Operational Tooling: Live CloudWatch metrics streaming, AWS SSM Run Command execution, and Nomad job deployment capabilities.",
      "Hardened by Default: Binds strictly to localhost, enforces AWS IMDSv2, KMS volume encryption, blocks public S3 access, rejects 0.0.0.0/0 SSH, and maintains encrypted state backups."
    ],
    architecture: "Go Single Binary (net/http + html/template) -> Localhost Only -> AWS SSO Device Auth -> OpenTofu Engine + AWS APIs -> CloudWatch & Cost Explorer",
    impact: "Zero-dependency single-binary infrastructure console; collapsed AWS provisioning from hours to minutes with enforced IMDSv2 and KMS compliance."
  }
];

export const experienceData = [
  {
    role: "Software Engineer (Backend, Go)",
    company: "Sahas Labs",
    location: "Kolhapur, Maharashtra (Hybrid)",
    period: "Aug 2024 – Present",
    tag: "Current Role",
    tagColor: "emerald",
    subtitle: "Industrial IoT platforms, laboratory backends & cloud infrastructure",
    bullets: [
      "Led migration of the core IoT platform backend (Samyojak) from Express.js to Go, taking complete ownership of API design, OpenFGA relationship access model, and production deployment.",
      "Diagnosed and resolved a hard capacity ceiling under load: platform collapsed past 225 concurrent connections (495 socket errors, 99.3% timeouts). Tuning pgx pool (min 20 / max 150), lowering bcrypt cost to 10, and expanding kernel socket backlog (somaxconn 4096) produced a 96.1% increase in sustained throughput capacity with zero dropped connections through 225 clients.",
      "Built further production Go services: Vepl Cloud (94 OpenAPI endpoints, Odoo ERP integration, native PDF reports), an event-driven PGMQ alert and push pipeline with Firebase Cloud Messaging, and an internal CA/mTLS device security service.",
      "Engineered edge software on Raspberry Pi 5 for VMBD Vision: Modbus TCP closed-loop PLC dosing, real-time OpenCV (GoCV) frame analysis, embedded MQTT, and a cryptographically signed OTA update daemon with automated rollback.",
      "Architected SahasForge computer-vision pipeline: CVAT extensions with temporal labeling, Nuclio auto-annotation, and an unattended AWS GPU spot training loop executing 48-epoch runs for ~$0.40.",
      "Built the AWS Cloud Dashboard: a single-binary Go tool with zero external dependencies driving OpenTofu for infrastructure provisioning, AWS SSO device login, and Cost Explorer analytics.",
      "Established the engineering baseline across all repositories: table-driven Go test suites (600+ tests across services), pgxmock database mocking, OpenTelemetry traces/metrics/logs over OTLP into ClickHouse/HyperDX, and structured JSON logging."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Dev Town",
    location: "Remote",
    period: "Mar 2024 – Aug 2024",
    tag: "Internship",
    tagColor: "cyan",
    subtitle: "Web applications and microservices",
    bullets: [
      "Built REST APIs and backend microservices in Express.js.",
      "Deployed staging environments on AWS Amplify and managed automated build pipelines.",
      "Documented endpoints and payload contracts for internal developer use."
    ]
  },
  {
    role: "Biomedical Engineer",
    company: "National Health Mission & Baby Memorial Hospital",
    location: "Kerala, India",
    period: "May 2019 – Oct 2021",
    tag: "Hardware & Systems Roots",
    tagColor: "violet",
    subtitle: "Healthcare engineering and mission-critical diagnostics",
    bullets: [
      "Maintained and safety-tested diagnostic, patient-monitoring, and surgical equipment across state health networks.",
      "Gained foundational discipline in mission-critical reliability, electrical signals, safety margins, and hardware protocols.",
      "Transitioned into software engineering after completing a BTech in Electrical, Electronics & Communications Engineering alongside this role."
    ]
  }
];

export const educationData = [
  {
    degree: "BTech — Electrical, Electronics & Communications Engineering",
    institution: "APJ Abdul Kalam Technological University, Kerala",
    period: "2020 – 2024",
    details: "Focus on digital systems, embedded microprocessors, signal processing, and communication networks."
  },
  {
    degree: "Diploma in Engineering — Biomedical Engineering",
    institution: "Board of Technical Education, Kerala",
    period: "2016 – 2019",
    details: "Hardware diagnostics, instrumentation, telemetry sensors, and clinical equipment calibration."
  }
];

export const terminalCommands = {
  help: [
    "Available commands:",
    "  whoami       - Display identity and background summary",
    "  skills       - Show technical skills by domain",
    "  experience   - Display career timeline and key responsibilities",
    "  projects     - List flagship engineering projects",
    "  benchmark    - Display the 11-tier load test benchmark summary",
    "  contact      - Display direct contact channels & location",
    "  cv           - Print resume view and download link",
    "  clear        - Clear the terminal screen"
  ],
  whoami: [
    "Akshay Mohan M P",
    "Role:      Backend Engineer (Go) · IoT Platforms · AWS & DevOps",
    "Location:  Kolhapur, Maharashtra, India (Open to Remote & Relocation)",
    "Summary:   Builds production backend systems in Go for industrial IoT and",
    "           laboratory platforms, and runs the cloud infrastructure they live on.",
    "           Expert in Gin, pgx, OpenFGA, PGMQ, mTLS, and edge Raspberry Pi 5."
  ],
  skills: [
    "BACKEND (GO):      Gin, pgx, REST/OpenAPI, JWT, RBAC, OpenFGA, Protobuf",
    "DATA & MESSAGING:  PostgreSQL, PGMQ, SQLite, MQTT (VerneMQ, EMQX, embedded), FCM, SQS, S3/MinIO",
    "CLOUD & INFRA:     AWS (EC2, Lightsail, S3, SES, Secrets Manager, IAM Identity Center), OpenTofu, Docker, Coolify, Nomad",
    "SECURITY & PKI:    X.509 PKI, mutual TLS, CRL revocation, signed OTA updates, secrets management",
    "OBSERVABILITY:     OpenTelemetry (traces, metrics, logs), HyperDX, ClickHouse, testify, pgxmock, Artillery",
    "EDGE & EMBEDDED:   Raspberry Pi 5, Modbus TCP, OpenCV (GoCV), Server-Sent Events, systemd",
    "AI & VISION:       CVAT extensions, ClearML, PyTorch (D-FINE, Mask R-CNN), AWS Spot $0.40 GPU training loop"
  ],
  experience: [
    "[Aug 2024 - Present] Software Engineer (Backend, Go) @ Sahas Labs, Kolhapur",
    "  - Express -> Go core migration; +96.1% throughput capacity under 225 concurrency",
    "  - Built Samyojak, Vepl Cloud, PGMQ alert pipeline, device CA/mTLS service, and AWS Dashboard",
    "[Mar 2024 - Aug 2024] Web Developer Intern @ Dev Town",
    "  - REST APIs, Express.js microservices, AWS Amplify staging",
    "[May 2019 - Oct 2021] Biomedical Engineer @ NHM & Baby Memorial Hospital",
    "  - Diagnostic & patient-monitoring equipment across state health networks"
  ],
  projects: [
    "1. Samyojak          - Multi-tenant IoT platform (Go, Gin, pgx, OpenFGA, AWS, OTel)",
    "2. Vepl Cloud         - Laboratory & test platform (Go, Odoo ERP, native PDF, Coolify)",
    "3. Alert Pipeline     - Event-driven worker pool (Go, PGMQ, FCM, pgx)",
    "4. Device Security    - Internal CA, X.509 issuance, CRL & VerneMQ/EMQX mTLS hooks",
    "5. VMBD Vision        - Raspberry Pi 5 rig controller (Modbus TCP, OpenCV, SQLite, OTA)",
    "6. SahasForge         - CV pipeline & unattended $0.40 AWS GPU spot training loop",
    "7. AWS Cloud Dashboard- Zero-dependency Go browser console driving OpenTofu"
  ],
  benchmark: [
    "LOAD TEST RESULTS: Express.js (Legacy) vs Go (Optimized)",
    "----------------------------------------------------------------",
    "Clients  | Legacy RPS (p95)    | Optimized Go RPS (p95) | Error Rate",
    "   25    |   180 rps (14ms)    |    480 rps  (4ms)     |   0.0%",
    "  100    |   620 rps (38ms)    |   1850 rps (10ms)     |   0.0%",
    "  200    |   940 rps (195ms)   |   3450 rps (19ms)     |   0.0%",
    "  225    |   680 rps (CRASH)   |   3820 rps (26ms)     |   0.0%",
    "  250    |   120 rps (99% err) |   3680 rps (42ms)     |   0.1%",
    "----------------------------------------------------------------",
    "RESULT:  +96.1% sustained capacity increase. Zero dropped connections at 225."
  ],
  contact: [
    "Email:    akshaymohanmp@gmail.com",
    "Phone:    +91 85890 06333",
    "Location: Kolhapur, Maharashtra, India (Open to Relocation & Remote)",
    "LinkedIn: https://linkedin.com/in/akshay-mohan-m-p",
    "GitHub:   https://github.com/AkshayMohanMp"
  ]
};
