# Modern Developer Portfolio

**Live Demo**: [manojcodes77.me](https://www.manojcodes77.me/)

## Table of Contents
- [Core Features](#core-features)
- [Technology Architecture](#technology-architecture)
- [Local Development Setup](#local-development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation Guide](#installation-guide)
- [Production Build](#production-build)
- [Deployment Strategy](#deployment-strategy)
- [Contribution Guidelines](#contribution-guidelines)
- [Acknowledgements](#acknowledgements)

## Core Features
- **Responsive Layout**: Adaptive design across all screen sizes using CSS Grid and Flexbox
- **Project Showcase**: Interactive cards with live demos and GitHub links
- **Contact System**: Secure message forwarding via emailJS integration
- **Performance Optimized**: 95+ Lighthouse score through code splitting and asset optimization
- **SEO Ready**: Proper meta tags and schema markup for search engine visibility

## Technology Architecture
| Layer          | Technologies Used          |
|----------------|----------------------------|
| **Framework**  | React 18, TypeScript 5.0   |
| **Styling**    | Tailwind CSS 3.3, PostCSS  |
| **Build Tool** | Vite 4.4                   |
| **Animation**  | Framer Motion 10           |
| **Deployment** | Vercel Platform            |
| **Linting**    | ESLint, Prettier           |

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
   Then, update the `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY` and `VITE_RESUME_LINK` in the `.env` file with your EmailJS credentials.

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
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [EmailJS](https://www.emailjs.com)
---
