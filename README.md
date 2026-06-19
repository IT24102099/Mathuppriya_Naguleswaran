# Mathuppriya Naguleswaran - Premium Developer Portfolio

A world-class, highly animated personal portfolio website designed for **Mathuppriya Naguleswaran** (Software Engineering Undergraduate & Full Stack Developer). Built using Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## 🚀 Key Features

1. **Premium Terminal Loader**: An interactive intro compiling logs before booting the UI.
2. **Global Command Palette (`Ctrl+K` / `Cmd+K`)**: Opens a searchable popup overlay to trigger smooth scrolling to sections, previewing the resume, or launching social URLs.
3. **Interactive Code Editor (VS Code style)**: Interactive explorer sidebar allowing recruiters to select `Profile.ts`, `Stack.json`, and `Goals.md` to view type-safe structures.
4. **Live GitHub Statistics**: Client-side REST integration querying `https://api.github.com/users/mathuppriya-dev` for live repository counts, follower metrics, and recently updated code repositories (with fallback states).
5. **No-Outdated-Progress-Bars**: Showcases skills grouped as interactive badges linked with their specific project usage, experience role, and technical depth.
6. **Detailed Project Pages (`/projects/[id]`)**: Deeply detailed route folders for all projects (Career Guidance, Smart Campus, Golden Curator, HRM Portal) outlining the specific **Problem**, **Challenges**, **Solution**, and **Outcomes**.
7. **Resume Preview Modal**: Interactive browser preview matching Mathuppriya's exact physical resume layout with print-friendly layout styles (renders cleanly on desktop print and converts to A4 PDF).
8. **Cursor Mouse Glow Overlay**: Tracks mouse position variables dynamically to generate a premium glowing spotlight backdrop.

---

## 📂 Project Structure

```bash
mathuppriya-portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css         # Tailwind v4 directives, custom print layouts & glassmorphism
│   │   ├── layout.tsx          # HTML root structure, font binding & glow overlays
│   │   ├── page.tsx            # Main landing controller & loader sequence
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx    # Dynamic project detailed routes
│   ├── components/
│   │   ├── CommandPalette.tsx  # Ctrl+K global navigation helper
│   │   ├── CursorGlow.tsx      # Mouse tracking spotlights
│   │   ├── Footer.tsx          # System branding and social links
│   │   ├── Navbar.tsx          # Sticky glassmorphic link navigation
│   │   ├── ResumeModal.tsx     # Full page print-friendly resume reviewer
│   │   └── sections/
│   │       ├── Hero.tsx        # Title displays, magnetic actions & typing consoles
│   │       ├── Journey.tsx     # Professional journey narrative cards
│   │       ├── CodeEditor.tsx  # VS Code file Explorer mockup
│   │       ├── Skills.tsx      # Technology badges categorized grid
│   │       ├── Projects.tsx    # Showcase cards linking to dynamic details
│   │       ├── GitHubActivity.tsx # API data client-side fetchers
│   │       ├── Experience.tsx  # Core methodologies grid
│   │       ├── Certifications.tsx # Orion distinction & ThinkAI Expo presentations
│   │       ├── RecruiterCTA.tsx # Call-to-action recruiters prompt box
│   │       └── Contact.tsx     # Form handler with validation states
│   └── lib/
│       ├── projects.ts         # Central project database schemas
│       └── utils.ts            # ClassName merge helpers (cn)
├── tailwind.config.ts          # v4 compatible config rules
├── package.json
└── tsconfig.json
```

---

## 🛠️ Local Development

Follow these steps to run the portfolio on your local system:

1. **Clone or navigate to the directory**:
   ```bash
   cd mathuppriya-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the dev server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000`.

---

## 🔺 Vercel Deployment Guide

Deploying this portfolio to Vercel is straightforward since it uses standard Next.js 15 App Router architecture without database dependencies:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket).
2. **Sign in to Vercel** (`https://vercel.com`) and click **"Add New Project"**.
3. **Import the repository** representing this portfolio.
4. **Configuration Settings**:
   - **Framework Preset**: Select `Next.js`.
   - **Root Directory**: `./` (or select `mathuppriya-portfolio` if in a subdirectory).
   - **Build Command**: `next build` (default).
   - **Output Directory**: `.next` (default).
   - **Install Command**: `npm install` (default).
5. Click **"Deploy"**. Vercel will automatically compile the project, optimize the image assets, create edge function routes, and provide you with a live secure URL (e.g., `https://mathuppriya-dev.vercel.app`).
