# Business School Vue

A modern business school showcase website built with Vue 3 + Vite + TypeScript + Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Vue 3.4.21
- **Build Tool**: Vite 5.4.0
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 4.1.14
- **Package Manager**: pnpm

## 📦 Project Structure


├── client/ # Frontend source code
│ ├── public/ # Static assets
│ │ ├── images/ # Image assets
│ │ └── logo.svg # Logo file
│ └── src/ # Source code
│ ├── components/ # Vue components
│ ├── composables/ # Composable functions
│ ├── App.vue # Root component
│ ├── main.ts # Entry file
│ └── index.css # Global styles
├── package.json # Project configuration
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
└── README.md # Project documentation


## 🛠️ Development Guide

### Requirements

- Node.js >= 18.x
- pnpm >= 10.x

### Install Dependencies

```bash
pnpm install
Start the Development Server
pnpm dev

Visit http://localhost:5173 to preview the application.

Build for Production
pnpm build
Preview the Production Build
pnpm preview
Code Checks
# TypeScript type checking
pnpm check

# Code formatting
pnpm format
🎨 Features
Navigation Bar (NavbarSection) - Top navigation menu
Hero Section (HeroSection) - Homepage banner display
About Us (AboutSection) - School introduction
Faculty Team (TeachersSection) - Faculty showcase with clickable detailed information
Team Highlights (TeamSection) - Team showcase
Upcoming Events (EventsSection) - Event information
Gallery (GallerySection) - Image display
Rules and Regulations (ConstitutionSection) - School constitution and regulations
Join Us (JoinSection) - Admissions/recruitment information
Footer (SiteFooter) - Footer information
📝 Code Style

This project uses Prettier for code formatting. The configuration is located in .prettierrc.

Before committing code, please run:

pnpm format
pnpm check
📄 License

MIT License
