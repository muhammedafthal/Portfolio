# Muhammed Afthal — Personal Software Developer Portfolio

A premium, modern, responsive, and recruiter-focused Software Developer Portfolio built for **Muhammed Afthal**, highlighting practical full-stack web applications, backend Node.js APIs, role-based system security, database modeling, and engineering case studies.

---

## Technical Stack & Architecture

- **Core Framework**: React 18 + Vite
- **Routing**: React Router DOM v6 (Hybrid SPA with section anchors + dynamic project routes)
- **Styling Strategy**: Vanilla CSS with centralized design tokens (`variables.css`), light warm neutral surfaces (90%), gold/amber brand accents (10%), and responsive glassmorphism.
- **Icons**: Lucide React
- **Serverless Contact Worker**: Cloudflare Worker (`worker/contact/index.js`) handling CORS, validation, rate limiting, and email dispatch.
- **SEO & Accessibility**: OpenGraph metadata, `sitemap.xml`, `robots.txt`, WCAG 2.2 AA compliant contrast, aria attributes, keyboard navigation, and `prefers-reduced-motion` support.

---

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume/
│   │   └── resume.pdf
│   ├── assets/
│   │   └── images/
│   │       ├── profile/
│   │       └── projects/
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── layout/       (Header, MobileMenu, Footer)
│   │   ├── home/         (Hero, AboutSection, SkillsSection, FeaturedProjects, ExperienceSection, EducationSection, ContactSection)
│   │   ├── projects/     (ProjectCard, ProjectHero, CaseStudySection, ArchitectureDiagram, CodeSnippet)
│   │   └── common/       (Button, SectionHeading, GlassCard, ScrollReveal, ResumeModal)
│   │
│   ├── data/             (projects.js, skills.js, experience.js, education.js, navigation.js, socialLinks.js)
│   ├── pages/            (Home.jsx, ProjectDetails.jsx, NotFound.jsx)
│   ├── styles/           (variables.css, global.css, typography.css, animations.css, responsive.css)
│   ├── App.jsx
│   └── main.jsx
│
├── worker/
│   └── contact/
│       └── index.js
│
├── index.html
├── package.json
└── vite.config.js
```

---

## Key Features

1. **Recruiter-First Positioning**: Immediate visibility for Software Developer, Full-Stack, and Node.js backend roles.
2. **Dynamic Technical Case Studies**: Dedicated routes for `/projects/hospital-management-system` and `/projects/food-delivery-app` detailing:
   - Problem Statement vs Engineering Solution
   - Multi-role privilege matrix
   - System Architecture diagrams
   - Code snippets & security middleware
   - Lessons learned & future engineering roadmap
3. **Interactive Resume Modal**: Preview resume highlights online or trigger direct PDF download.
4. **Honeypot Anti-Spam Contact System**: Client-side field validation paired with silent drop traps for spam bots.
5. **Visually Separated Currently Exploring Section**: Python highlighted as an actively explored technology.

---

## Local Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Deployment (Cloudflare Pages)

1. Connect your GitHub repository to Cloudflare Pages.
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Deploy Cloudflare Worker (`worker/contact/index.js`) for backend contact API handling if using serverless email dispatch.
