# 🌟 Advanced 3D Developer Portfolio

**Live Demo**: [manojcodes77.me](https://www.manojcodes77.me/)

A stunning, interactive portfolio featuring advanced **Three.js 3D graphics** with particle systems, custom shaders, and real-time animations. Built with modern web technologies for optimal performance and visual impact.

## Table of Contents
- [Core Features](#core-features)
- [3D Graphics Features](#3d-graphics-features)
- [Technology Architecture](#technology-architecture)
- [Local Development Setup](#local-development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation Guide](#installation-guide)
- [Production Build](#production-build)
- [Deployment Strategy](#deployment-strategy)
- [Contribution Guidelines](#contribution-guidelines)
- [Acknowledgements](#acknowledgements)

## Core Features
- 🎨 **Advanced 3D Background**: Interactive Three.js scene with 5,000+ animated particles
- 📱 **Fully Responsive**: Seamless experience across all devices and screen sizes
- 🎯 **Interactive Mouse Tracking**: Particle system responds to cursor movement in real-time
- 💼 **Project Showcase**: Beautiful cards with hover effects, live demos, and GitHub links
- 📧 **Contact System**: Integrated emailJS for secure message forwarding
- ⚡ **Performance Optimized**: Smooth 60 FPS animations with optimized rendering
- 🔍 **SEO Ready**: Complete meta tags and schema markup for search visibility
- 🎭 **Modern UI/UX**: Glass-morphism design with cyberpunk aesthetics

## 3D Graphics Features

### 🌌 Particle System
- **5,000 animated particles** in a spiral galaxy formation
- Real-time **mouse-responsive movement** with smooth interpolation
- Additive blending for stunning glow effects
- Continuous rotation and drift animations

### 🎨 Custom Shaders
- **GLSL shader-based** animated background plane
- Dynamic color gradients (cyan, pink, purple)
- Wave distortion effects
- Real-time uniforms for time-based animations

### 💫 3D Geometric Shapes
- **Morphing 3D objects** (torus, sphere, octahedron)
- Real-time mesh distortion using `MeshDistortMaterial`
- Individual animation paths and rotation
- Metallic materials with custom colors

### ✨ Post-Processing Effects
- **Bloom effect** for ethereal glow
- Optimized for performance with selective luminance threshold
- Enhanced visual depth and atmosphere

### 🎯 Floating Elements
- 20+ randomly placed geometric shapes
- Individual animation speeds and rotation
- Transparent materials with emissive properties
- Multiple geometric primitives (boxes, tetrahedrons, icosahedrons)

## Technology Architecture
| Layer              | Technologies Used                                    |
|--------------------|-----------------------------------------------------|
| **Framework**      | React 18, TypeScript 5.0                            |
| **3D Graphics**    | Three.js 0.160, React Three Fiber 8.15              |
| **3D Utilities**   | @react-three/drei 9.92, @react-three/postprocessing 2.16 |
| **Styling**        | Tailwind CSS 3.4, PostCSS                           |
| **Build Tool**     | Vite 5.4                                            |
| **Icons**          | Lucide React, React Icons                           |
| **Email Service**  | EmailJS                                             |
| **Deployment**     | Vercel Platform                                      |
| **Linting**        | ESLint 9.9                                          |

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

## 🎨 Design Highlights
- **Glass-morphism UI** with backdrop blur effects
- **Cyberpunk color scheme** (cyan, purple, pink accents)
- **Neon glow effects** on interactive elements
- **Smooth transitions** throughout the interface
- **Dark theme** optimized for visual comfort

## 🚀 Performance
- Consistent **60 FPS** animations
- Optimized particle rendering with frustum culling
- Efficient re-renders using React Three Fiber
- Lazy loading for 3D components
- Device pixel ratio optimization

## 📁 Project Structure
```
portfolio/
├── src/
│   ├── components/
│   │   ├── ThreeBackground.tsx    # Main 3D canvas wrapper
│   │   ├── Scene3D.tsx            # 3D scene setup & particles
│   │   ├── AnimatedGeometry.tsx   # Morphing 3D shapes
│   │   ├── FloatingShapes.tsx     # Random floating objects
│   │   ├── ShaderPlane.tsx        # Custom GLSL shader background
│   │   ├── Hero.tsx               # Hero section component
│   │   ├── Projects.tsx           # Projects showcase
│   │   ├── Skills.tsx             # Tech stack display
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## 🎮 Interactive Features
- **Mouse-responsive particles**: Move your cursor to see the galaxy shift
- **Hover animations**: Interactive cards and buttons with scale effects
- **Smooth scrolling**: Optimized navigation experience
- **Dynamic lighting**: Multiple colored point lights in 3D space

## Acknowledgements
This project was built using several fantastic open-source tools and libraries. Special thanks to the creators and maintainers of:
- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Three.js](https://threejs.org) - JavaScript 3D Library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS Framework
- [EmailJS](https://www.emailjs.com) - Email Service Integration
- [Lucide React](https://lucide.dev) - Beautiful & consistent icons

---

**Built with ❤️ by Manoj Singh Rawat**

For questions or collaboration: [GitHub](https://github.com/manojCodes77) | [LinkedIn](https://www.linkedin.com/in/manojsinghrawat/)
