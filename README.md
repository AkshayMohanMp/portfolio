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

## 🚢 Automated CI/CD Deployment Guide

Your project is configured with `vercel.json`, `public/_redirects`, and `.github/workflows/deploy.yml` for zero-configuration, automated deployments.

### Step 1: Push your project to GitHub

Run these commands in your project root:
```bash
git remote add origin https://github.com/AkshayMohanMp/portfolio.git
git branch -M main
git push -u origin main
```

---

### Step 2A: Set Up Vercel CI/CD (Push to Deploy)

1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **Add New...** → **Project**.
3. Select your `portfolio` repository from the list.
4. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

> **CI/CD Behavior**: Every time you run `git push origin main`, Vercel automatically builds and deploys your changes to production within 20 seconds. Any feature branches get instant preview URLs!

---

### Step 2B: Set Up Cloudflare Pages CI/CD (Unlimited Bandwidth)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create application** → **Pages** → **Connect to Git**.
3. Select your `portfolio` repository.
4. Set build configuration:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.

> **CI/CD Behavior**: Every `git push` to `main` triggers Cloudflare's global edge build and publishes across 300+ edge data centers with unlimited bandwidth. Single-page application routing is automatically handled by `public/_redirects`.

---

### 💡 Pro Tip: Run Both Concurrently
You can connect the **same** GitHub repository to **both** Vercel and Cloudflare Pages at the same time. Whenever you do `git push origin main`, both platforms will build and update automatically, providing dual redundancy for free!

---

© 2026 Akshay Mohan M P. Handcrafted for high reliability, performance, and scale.
