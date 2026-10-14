export const personalInfo = {
  name: "Akshay Mohan M P",
  title: "Backend Engineer",
  subtitle: "Go · Cloud Infrastructure · IoT Platforms",
  headline: "Engineering High-Throughput Go Backends & Resilient IoT Systems",
  location: "Kannur, Kerala, India",
  relocationStatus: "Open to relocation & remote",
  email: "akshaymohanmp@gmail.com",
  phone: "+91 85890 06333",
  linkedin: "https://linkedin.com/in/akshay-mohan-m-p",
  linkedinHandle: "linkedin.com/in/akshay-mohan-m-p",
  github: "https://github.com/AkshayMohanMp",
  githubHandle: "github.com/AkshayMohanMp",
  summary: `Backend engineer with 2+ years building and operating production IoT platforms in Go and Python. Led a live multi-tenant platform's migration from Express.js to Go, then load-tested and tuned it to a 96.1% increase in sustained throughput capacity. Own the infrastructure and automation it runs on — AWS, Terraform, Docker, CI/CD, identity, and observability — and recently integrated SAM 2.1 and YOLO models into an annotation pipeline.`,
  stats: [
    {
      value: "+96.1%",
      label: "Throughput Capacity",
      description: "Sustained increase under heavy concurrency after kernel & pgx tuning"
    },
    {
      value: "250",
      label: "Concurrency Tiers Tested",
      description: "Benchmarked across 11 load tiers (25-250 virtual clients) with zero drops at 225"
    },
    {
      value: "411",
      label: "Rig Cycles Tracked",
      description: "Automated test readings across 54 cycles at 82% 1st-pass valid rate"
    },
    {
      value: "2+ Yrs",
      label: "Production Systems",
      description: "Operating Go services, AWS VPCs, Zitadel auth & telemetry pipelines"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "backend",
      name: "Backend & Systems",
      icon: "Server",
      skills: [
        { name: "Go (Golang)", level: "Advanced", highlight: true, note: "net/http, goroutines, context, pgx pool" },
        { name: "PostgreSQL & pgx", level: "Advanced", highlight: true, note: "Connection pooling, index tuning, timeseries" },
        { name: "Python (Django)", level: "Proficient", note: "REST APIs, background tasks, CV pipelines" },
        { name: "REST API Design", level: "Advanced", note: "OpenAPI/Swagger, contract testing, structured JSON" },
        { name: "Node.js / Express.js", level: "Proficient", note: "Service migration, microservice architecture" },
        { name: "MQTT & IoT Protocols", level: "Advanced", highlight: true, note: "AWS IoT Core, device telemetry, QoS handling" },
        { name: "Message Queues", level: "Advanced", note: "AWS SQS, PGMQ, event-driven worker services" },
        { name: "Clean Architecture", level: "Advanced", note: "Domain-driven, explicit error handling, table-driven tests" }
      ]
    },
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS Core Services", level: "Advanced", highlight: true, note: "EC2, Lambda, RDS, VPC, IAM, Cognito, IoT Core" },
        { name: "Terraform & OpenTofu", level: "Proficient", highlight: true, note: "Infrastructure as Code, multi-environment state" },
        { name: "Docker & Containerization", level: "Advanced", note: "Multi-stage builds, minimal alpine/scratch images" },
        { name: "Portainer & Coolify", level: "Proficient", note: "Self-hosted PaaS, automated container orchestration" },
        { name: "Self-Hosted Zot Registry", level: "Proficient", note: "Eliminated external registry egress overhead" },
        { name: "MinIO & AWS S3", level: "Advanced", note: "Object storage for machine telemetry & raw vision frames" },
        { name: "GitHub Actions CI/CD", level: "Advanced", note: "Automated testing, container builds, signed deployments" },
        { name: "Linux Administration", level: "Advanced", highlight: true, note: "Kernel somaxconn tuning, sysctl, systemd, host firewalls" }
      ]
    },
    {
      id: "iot-systems",
      name: "IoT & Hardware Integration",
      icon: "Cpu",
      skills: [
        { name: "AWS IoT Core", level: "Advanced", highlight: true, note: "Device shadow, MQTT rule engines, VPC endpoint routing" },
        { name: "PLC Integration", level: "Proficient", note: "Industrial automation, titration rigs, timing synchronization" },
        { name: "Device PKI & Auth", level: "Advanced", note: "X.509 device certificates, mutual TLS (mTLS), scoped IAM" },
        { name: "Secure OTA Updates", level: "Advanced", note: "Cryptographically signed releases, fail-safe automatic rollbacks" },
        { name: "Raspberry Pi & Vision Rigs", level: "Proficient", note: "Camera frame capture, real-time edge processing" },
        { name: "Fleet Telemetry", level: "Advanced", note: "CNC/VMC machine telemetry, long/wide CSV export pipelines" }
      ]
    },
    {
      id: "observability-security",
      name: "Observability & Security",
      icon: "ShieldAlert",
      skills: [
        { name: "OpenTelemetry", level: "Proficient", highlight: true, note: "Distributed tracing, telemetry collection into ClickHouse" },
        { name: "ClickHouse", level: "Proficient", note: "High-volume columnar log aggregation and querying" },
        { name: "Uptime Kuma", level: "Proficient", note: "Continuous uptime heartbeats and alert webhooks" },
        { name: "Zitadel & Cognito", level: "Advanced", note: "Multi-tenant RBAC, per-site isolation, JWT validation" },
        { name: "Table-Driven Testing", level: "Advanced", note: "Idiomatic Go test suites, subtests, contract payload checks" },
        { name: "TLS & Certbot", level: "Proficient", note: "Automated ACME certificate renewal, Nginx reverse proxying" }
      ]
    },
    {
      id: "ai-vision",
      name: "AI & Computer Vision",
      icon: "Brain",
      skills: [
        { name: "SAM 2.1 (Segment Anything)", level: "Proficient", note: "Integrated into CVAT for zero-shot image annotation" },
        { name: "YOLO (Custom-Trained)", level: "Proficient", note: "Object detection models trained for foundry vision tasks" },
        { name: "CVAT (Self-Hosted)", level: "Proficient", note: "Custom-integrated computer vision annotation server" },
        { name: "Agentic AI Tools", level: "Proficient", note: "Modern AI-augmented engineering workflows" }
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
    title: "Samyojak — Multi-Tenant IoT Operations Platform",
    tagline: "Industrial machine telemetry, real-time fleet operations & scoped VPC isolation",
    category: "Go & Systems",
    featured: true,
    badge: "Core IoT Platform",
    stack: ["Go", "React", "PostgreSQL / pgx", "Zitadel", "AWS IoT Core", "AWS VPC", "AWS IAM", "Docker"],
    highlights: [
      "Rebuilt platform core from Express.js to Go with strict domain boundaries and clean architecture.",
      "Engineered tiered, per-site access control via Zitadel alongside AWS Cognito, enforcing scoped visibility so customer operators command strictly their own machine fleet.",
      "Routed all telemetry and commands over a private AWS VPC, preventing external network exposure.",
      "Engineered React operations dashboard delivering live machine state across CNC and VMC fleets, featuring high-speed long/wide CSV telemetry export for offline data science.",
      "Spearheaded end-to-end performance engineering: connection pooling, kernel parameter tuning, and 11-tier benchmark capacity report."
    ],
    architecture: "Edge Gateways (MQTT/TLS) -> AWS IoT Core -> Go Ingestion Microservice -> PostgreSQL (pgx pool) -> React Real-Time Dashboard (Zitadel Auth)",
    impact: "+96.1% sustained throughput capacity; zero dropped connections through 225 concurrency."
  },
  {
    id: "vmbd",
    title: "VMBD — Automated Methylene-Blue Clay Determination Rig",
    tagline: "Computer vision and PLC hardware backend for automated clay titration testing",
    category: "IoT & Edge Hardware",
    featured: true,
    badge: "Industrial Automation",
    stack: ["Go", "PostgreSQL", "Raspberry Pi Camera", "PLC Integration", "MinIO / S3", "Image Processing"],
    highlights: [
      "Built backend service for a custom machine-vision rig that automates the methylene-blue titration test for active clay content in industrial foundries.",
      "Integrated Raspberry Pi camera capture with a Go microservice that derives median stain width in pixels after each dosing iteration.",
      "Synchronized closed-loop PLC dosing control: commands PLC to dispense MB solution incrementally until photometric absorption endpoint is validated.",
      "Modeled cycles, iterations, and measurements in PostgreSQL with raw and processed frames stored in MinIO/S3 — tracked 411 measurements across 54 test cycles in a single run.",
      "Achieved an 82% first-pass valid rate, with every single test result strictly traceable back to the exact image frame that produced it.",
      "Exposed audit APIs and CSV export enabling QA teams to inspect rejected readings against captured imagery without touching physical rig hardware."
    ],
    architecture: "Raspberry Pi Cam -> Go Vision Controller -> PLC Dosing via Modbus/Serial -> MinIO Frame Store -> PostgreSQL Audit DB",
    impact: "411 automated measurements across 54 cycles; 82% first-pass valid rate with 100% image traceability."
  },
  {
    id: "secure-ota",
    title: "Secure OTA Update System — Vision Inspection Machine",
    tagline: "Cryptographically signed releases, certificate-based mTLS authentication & automatic rollback",
    category: "IoT & Edge Hardware",
    featured: true,
    badge: "Mission Critical",
    stack: ["Go", "Signed Releases", "Device PKI", "mTLS", "Automated Rollback", "PLC Timing"],
    highlights: [
      "Designed and deployed an over-the-air update daemon in Go for field vision-inspection machines.",
      "Enforced device identity using X.509 client certificates (device PKI) and verified SHA256 cryptographic signatures on all release binaries prior to execution.",
      "Built an automated watchdog rollback mechanism: if a newly updated binary fails health verification or hangs, the system automatically reverts to the previous bootloader slot.",
      "Diagnosed and resolved a subtle first-cycle measurement error traced to a timing race condition with the machine's industrial PLC; added deterministic synchronization and regression tests."
    ],
    architecture: "Release Registry (Zot/S3) -> Signed Package Verifier -> Device Daemon (Go) -> Dual-slot A/B Partition Manager -> PLC Sync",
    impact: "Zero-downtime remote firmware deployment; eliminated risk of bricking industrial field machines."
  },
  {
    id: "foundry-vision",
    title: "AI-Assisted Annotation & Video Pipeline — Foundry Vision",
    tagline: "Segment Anything (SAM 2.1) & YOLO computer vision models integrated into CVAT",
    category: "AI & Vision",
    featured: false,
    badge: "AI Engineering",
    stack: ["Python", "SAM 2.1", "YOLO (custom)", "CVAT", "Django", "React", "TypeScript"],
    highlights: [
      "Integrated Meta's SAM 2.1 segmentation foundation model and custom-trained YOLO detector models into a self-hosted CVAT server.",
      "Drastically accelerated training dataset annotation throughput for industrial foundry inspection tasks.",
      "Built a specialized video-labeling application utilizing Django, REST APIs, React, and TypeScript for fine-grained multi-camera review."
    ],
    architecture: "Camera Streams -> Self-hosted CVAT -> SAM 2.1 / YOLO Inference Workers -> Django Video Annotation API -> React Front",
    impact: "Cut dataset annotation cycles by over 60% for manufacturing vision models."
  },
  {
    id: "admin-console",
    title: "Internal Cloud Admin Console",
    tagline: "Automated AWS tenant & device provisioning replacing manual AWS Management Console",
    category: "Cloud & DevOps",
    featured: false,
    badge: "Cloud Tooling",
    stack: ["Go", "React", "AWS SDK (IAM, Cognito, RDS, IoT Core)", "Audit Logging", "Least Privilege"],
    highlights: [
      "Engineered an in-house cloud management console replacing manual multi-step AWS Console workflows for onboarding tenants, devices, and scoped IAM policies.",
      "Collapsed a 15-step manual console workflow into a single validated web form, eliminating the risk of human configuration errors.",
      "Eliminated the security risk of issuing direct AWS Console logins to non-infrastructure staff.",
      "Enforced least-privilege AWS IAM service roles and recorded an immutable audit trail of all configuration mutations."
    ],
    architecture: "React Portal -> Go Provisioning Service -> AWS SDK (IAM, Cognito, RDS, IoT Core) -> PostgreSQL Audit Log",
    impact: "Reduced customer site provisioning time from 45 minutes to under 60 seconds with 100% audit compliance."
  },
  {
    id: "vepl-cloud",
    title: "Vepl Cloud — Enterprise Resource Platform",
    tagline: "Serverless Go microservices on AWS Lambda cutting cold-start latencies",
    category: "Cloud & DevOps",
    featured: false,
    badge: "Serverless & Containers",
    stack: ["Go", "AWS Lambda", "AWS RDS", "Cognito", "Zitadel", "Docker", "Portainer", "Coolify", "GitHub Actions"],
    highlights: [
      "Migrated critical transactional Node.js backend microservices to Go compiled for AWS Lambda, significantly minimizing cold-start execution delays.",
      "Containerized supporting deployment pipelines with Docker, Portainer, and Coolify.",
      "Wired robust GitHub Actions CI/CD workflows for automated linting, test suites, and repeatable deployments."
    ],
    architecture: "API Gateway -> AWS Lambda (Go Runtime) -> RDS PostgreSQL -> Zitadel Multi-Tenant Auth",
    impact: "Drastically reduced execution cold starts and streamlined release velocity with automated CI/CD."
  },
  {
    id: "lamae",
    title: "Lamae — Hybrid Microservices Platform",
    tagline: "Workload-profile split services between Go & Express with strict host firewall isolation",
    category: "Go & Systems",
    featured: false,
    badge: "Hybrid Architecture",
    stack: ["Go", "Express.js", "Firebase", "AWS LightSail", "AWS Amplify", "AWS SES"],
    highlights: [
      "Architected a hybrid microservices setup splitting workloads between Go (computational/streaming) and Express.js (rapid application services).",
      "Deployed on cost-effective AWS LightSail instances secured with strict per-instance host firewalls preventing unauthorized inter-service traffic.",
      "Integrated Firebase for real-time asset position tracking and AWS SES for high-deliverability transactional emails."
    ],
    architecture: "Web Client (Amplify) -> Reverse Proxy -> Go Core & Express APIs -> Firebase Realtime DB + AWS SES",
    impact: "Cost-optimized infrastructure footprint while maintaining strict security boundaries."
  }
];

export const experienceData = [
  {
    role: "Software Engineer (Backend, Go)",
    company: "Sahas Labs",
    location: "Kolhapur, Maharashtra (Remote / Hybrid)",
    period: "Aug 2024 – Present",
    tag: "Current Role",
    tagColor: "emerald",
    subtitle: "IoT platform for industrial machinery",
    bullets: [
      "Led migration of the core IoT platform backend from Express.js to Go, taking complete ownership of API design, data modeling, and the production deployment path.",
      "Built further Go microservices around the platform: an AWS SQS-driven alert and push-notification service, the cloud backend for a customer programme, and a data-collection service on object storage; ported a Python backend to Go.",
      "Diagnosed and fixed a hard capacity ceiling under load: platform collapsed past 225 concurrent connections, throwing 495 socket errors and timing out 99.3% of traffic. Tuning pgx pool (min 20 / max 150), lowering bcrypt cost to 10, and expanding kernel socket backlog (somaxconn 4096) produced a 96.1% increase in sustained throughput capacity — zero dropped connections through 225 clients and graceful linear latency degradation at 250.",
      "Benchmarked the Go backend across 11 concurrency tiers from 25 to 250 virtual clients, documenting throughput, p-latency, and error profiles into a client-facing capacity report; specified horizontal replica path (stateless nodes behind ALB/Nginx) for scaling beyond single-node limits.",
      "Own production infrastructure end to end — Linux servers plus AWS (EC2, Lambda, RDS, VPC), provisioned as code with Terraform and OpenTofu; Docker deployments through Portainer and Coolify; GitHub Actions CI/CD; and a self-hosted Zot registry that removed external registry dependency and egress cost.",
      "Set up observability and hardening across the stack: OpenTelemetry logging and tracing into ClickHouse, uptime monitoring with Uptime Kuma, and automated TLS certificates with Certbot.",
      "Designed multi-tenant authentication and role-based access with Zitadel alongside AWS Cognito, giving each customer site scoped visibility and control over only its own machines.",
      "Built the device telemetry path over AWS IoT Core and MQTT into PostgreSQL, with per-machine long- and wide-format time-series exports used by customers for offline analysis.",
      "Established the team's testing baseline — table-driven go test suites and contract tests over API payloads — and set engineering standards (clean architecture, explicit error handling, structured JSON logging) while mentoring developers through code review."
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
      "Gained deep foundational discipline in mission-critical reliability, electrical signals, safety margins, and hardware protocols.",
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
    "Role:      Backend Engineer (Go · Cloud Infra · IoT Platforms)",
    "Location:  Kannur, Kerala, India (Open to Remote & Relocation)",
    "Summary:   Specialist in high-throughput Go backend services, industrial IoT",
    "           device telemetry, AWS infrastructure as code, and Linux kernel tuning."
  ],
  skills: [
    "LANGUAGES:     Go, Python, JavaScript, TypeScript, SQL",
    "BACKEND:       Go (net/http, pgx, goroutines, context), Django, Express, REST, MQTT, PGMQ",
    "CLOUD & INFRA: AWS (EC2, Lambda, RDS, VPC, IoT Core, S3, SQS), Terraform, OpenTofu, Docker",
    "OBSERVABILITY: OpenTelemetry, ClickHouse, Uptime Kuma, Table-driven Go testing",
    "SECURITY:      Zitadel, AWS Cognito, RBAC, mTLS, Device PKI, Signed OTA Releases"
  ],
  experience: [
    "[Aug 2024 - Present] Software Engineer (Backend, Go) @ Sahas Labs",
    "  - Core migration Express -> Go; +96.1% throughput capacity under 225 concurrency",
    "  - Owned AWS production infra (Terraform, Docker, Coolify, Zot registry)",
    "[Mar 2024 - Aug 2024] Web Developer Intern @ Dev Town",
    "  - REST APIs, Express.js microservices, AWS Amplify staging",
    "[May 2019 - Oct 2021] Biomedical Engineer @ NHM & Baby Memorial Hospital",
    "  - Diagnostic & patient-monitoring equipment across state health networks"
  ],
  projects: [
    "1. Samyojak      - Multi-tenant industrial IoT platform (Go, Zitadel, AWS IoT Core)",
    "2. VMBD          - Automated Methylene-Blue clay titration rig (Go, Pi Cam, PLC)",
    "3. Secure OTA    - Field machine signed update daemon with automatic rollback",
    "4. Foundry Vision- SAM 2.1 & YOLO computer vision models on self-hosted CVAT",
    "5. Cloud Admin   - In-house AWS tenant/device provisioning console"
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
    "Location: Kannur, Kerala, India (Open to Relocation & Remote)",
    "LinkedIn: https://linkedin.com/in/akshay-mohan-m-p",
    "GitHub:   https://github.com/AkshayMohanMp"
  ]
};
