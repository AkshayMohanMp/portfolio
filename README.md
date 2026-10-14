# Akshay Mohan M P — Production Portfolio & Systems Lab

> **Backend Engineer — Go · Cloud Infrastructure · IoT Platforms**  
> Kannur, Kerala, India | Open to relocation & remote  
> 📧 [akshaymohanmp@gmail.com](mailto:akshaymohanmp@gmail.com) | 📞 +91 85890 06333  
> 🔗 [LinkedIn](https://linkedin.com/in/akshay-mohan-m-p) | 💻 [GitHub](https://github.com/AkshayMohanMp)

---

## 🚀 Overview

A high-performance, bespoke warm-beige editorial portfolio and systems engineering showcase for **Akshay Mohan M P**. Built with modern React 19, Tailwind CSS v4, Lucide icons, and designed to highlight real-world engineering accomplishments in high-throughput Go services, AWS cloud infrastructure, Linux kernel tuning, and industrial IoT platforms.

### ✨ Key Features

1. **Interactive 11-Tier Concurrency Benchmark Simulator**:
   - An interactive slider and visual comparison replicating the real production load test audit at Sahas Labs across 11 concurrency tiers (25 to 250 virtual clients).
   - Real-time comparison of **Legacy Express.js** vs **Optimized Go Backend** showing Throughput (req/s), p95 Latency (ms), and Error Rate.
   - Live inspection tabs for the tuning recipe (`pgxpool.Config`, Linux kernel `net.core.somaxconn = 4096`, bcrypt cost 10) and full audit table.

2. **Featured Systems & Architecture Showcase**:
   - **Samyojak**: Multi-tenant IoT Operations Platform (Go, PostgreSQL, Zitadel, AWS IoT Core, VPC isolation).
   - **VMBD**: Automated Methylene-Blue Clay Determination Rig (Go, Raspberry Pi Camera, PLC integration, MinIO/S3 frame tracing).
   - **Secure OTA Update System**: Vision-inspection machine signed release daemon with automatic rollback and PLC race condition resolution.
   - **AI-Assisted Annotation**: SAM 2.1 & YOLO models integrated into self-hosted CVAT.
   - **Internal Cloud Admin Console**: In-house AWS tenant and device provisioning tool replacing manual console operations.
   - **Vepl Cloud & Lamae**: Serverless Go on AWS Lambda & hybrid microservices platform.

3. **Interactive Live Terminal (`aky-cli`)**:
   - Realistic terminal interface supporting commands (`help`, `whoami`, `benchmark`, `skills`, `projects`, `experience`, `contact`, `cv`, `neofetch`, `curl /healthz`).
   - Quick-action buttons for seamless mobile/click navigation.

4. **1-Click Printable / Exportable Resume Viewer**:
   - Clean, verified resume modal formatted with print-to-PDF `@media print` stylesheets.

5. **Direct Contact Hub**:
   - 1-click email copy, WhatsApp/phone link, social buttons, and contact form.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with warm architectural grid, tactile paper elevation, and terracotta accents
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand glyphs
- **Typography**: Plus Jakarta Sans & Fira Code

---

## 📦 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm

### 1. Installation

```bash
cd "d:\my files\portfolio"
npm install
```

### 2. Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build

```bash
npm run build
```

The optimized static assets will be generated in the `dist/` directory.

### 4. Local Production Preview

```bash
npm run preview
```

Visit `http://localhost:4173` to test the production bundle.

---

## 🚢 Deployment Options

- **Vercel / Netlify**: Simply connect your GitHub repository; build command is `npm run build` and publish directory is `dist`.
- **GitHub Pages**: Push the `dist` folder or use the GitHub Actions static pages workflow.
- **AWS S3 + CloudFront**: Sync `dist/` to an S3 bucket configured for static website hosting behind CloudFront.
- **Docker / Nginx**: Serve the `dist/` directory using an alpine Nginx container.

---

© 2026 Akshay Mohan M P. Handcrafted for high reliability, performance, and scale.
