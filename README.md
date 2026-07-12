# 🌟 Manoj Singh Rawat — Developer Portfolio

**Live Demo**: [manojcodes77.me](https://www.manojcodes77.me/)

A clean, professional, and fully responsive developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. It showcases my experience, projects, tech stack, and education with a modern glass-morphism design on a dark theme, backed by a lightweight pure-CSS ambient background for a polished look without heavy dependencies.

## Table of Contents
- [Core Features](#core-features)
- [Sections](#sections)
- [Technology Architecture](#technology-architecture)
- [Local Development Setup](#local-development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation Guide](#installation-guide)
- [Production Build](#production-build)
- [Deployment Strategy](#deployment-strategy)
- [Project Structure](#project-structure)
- [Design Highlights](#design-highlights)
- [Contribution Guidelines](#contribution-guidelines)
- [Acknowledgements](#acknowledgements)

## Core Features
- 🎨 **Lightweight Ambient Background**: Pure-CSS glow orbs and a subtle grid — no WebGL, no heavy 3D libraries
- 📱 **Fully Responsive**: Seamless experience across all devices and screen sizes
- 💼 **Experience Timeline**: Professional internship experience presented as a clean vertical timeline
- 🗂️ **Project Showcase**: Cards with hover overlays linking to live demos and GitHub repositories
- 🧰 **Interactive Tech Stack**: Categorized, filterable technology grid
- 🎓 **Education Timeline**: Academic journey with a consistent, elegant layout
- 📧 **Contact System**: Integrated EmailJS for secure message forwarding
- ⚡ **Fast & Optimized**: Small bundle, quick load times, smooth CSS transitions
- 🔍 **SEO Ready**: Meta tags for search visibility

## Sections
- **Hero** — Introduction, call-to-action buttons, and resume link
- **Experience** — Full Stack Engineer Intern at Deepvue Technologies Pvt. Ltd.
- **Projects** — BharatConnect (professional networking platform) and LEKHAK (blogging application)
- **Skills** — Filterable tech stack across Web Development and Tools
- **Education** — B.Tech (CSE) at NSUT, plus Class XII and Class X
- **Contact** — EmailJS-powered contact form

## Technology Architecture
| Layer              | Technologies Used                        |
|--------------------|------------------------------------------|
| **Framework**      | React 18, TypeScript 5.5                 |
| **Styling**        | Tailwind CSS 3.4, PostCSS                |
| **Build Tool**     | Vite 5.4                                 |
| **Icons**          | Lucide React, React Icons                |
| **Email Service**  | EmailJS                                  |
| **Deployment**     | Vercel Platform                          |
| **Linting**        | ESLint 9.9                               |

## Local Development Setup

### Prerequisites
- Node.js 18.x+
- npm 9.x+ or yarn 1.22+

### Installation Guide
1. Clone repository:
   ```bash
   git clone https://github.com/manojCodes77/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment:
   Create a `.env` file by copying `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Then update `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY`, `VITE_RESUME_LINK`, and `VITE_AVATAR` in the `.env` file with your own values.

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open your browser to:
   ```
   http://localhost:5173
   ```

## Production Build
To create a production-ready build, run:
```bash
npm run build
```

## Deployment Strategy
1. Push changes to the `main` branch on GitHub.
2. Vercel automatically detects these changes.
3. The build process is triggered based on the `vercel.json` configuration.
4. Optimized assets are then deployed to Vercel's global CDN.

## Project Structure
```
portfolio/
├── src/
│   ├── components/
│   │   ├── AmbientBackground.tsx   # Pure-CSS ambient background (glow orbs + grid)
│   │   ├── Header.tsx              # Fixed navigation bar
│   │   ├── Hero.tsx                # Hero / intro section
│   │   ├── Experience.tsx          # Work experience timeline
│   │   ├── Projects.tsx            # Projects showcase
│   │   ├── Skills.tsx              # Filterable tech stack
│   │   ├── Education.tsx           # Education timeline
│   │   ├── Contact.tsx             # EmailJS contact form
│   │   └── Footer.tsx              # Footer with social links
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── vite.config.ts
```

## Design Highlights
- **Glass-morphism UI** with backdrop blur effects
- **Cyan / blue accent palette** on a deep navy gradient background
- **Subtle CSS ambiance** — soft glow orbs and a faint grid, no canvas or WebGL
- **Smooth hover & scale transitions** throughout the interface
- **Dark theme** optimized for visual comfort

## Contribution Guidelines
1. Fork the repository and create a new feature branch from `main`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Commit your changes with clear and descriptive messages.
5. Open a Pull Request to the `main` branch with a detailed description of your changes.

## Acknowledgements
This project was built using several fantastic open-source tools and libraries. Special thanks to the creators and maintainers of:
- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- [React](https://react.dev) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS Framework
- [EmailJS](https://www.emailjs.com) - Email Service Integration
- [Lucide React](https://lucide.dev) - Beautiful & consistent icons
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon packs as React components

---

**Built with ❤️ by Manoj Singh Rawat**

For questions or collaboration: [GitHub](https://github.com/manojCodes77) | [LinkedIn](https://www.linkedin.com/in/manojsinghrawat/)
