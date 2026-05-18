# Business School Vue

A modern business school showcase website built with Vue 3 + Vite + TypeScript + Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Vue 3.4.21
- **Build Tool**: Vite 5.4.0
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 4.1.14
- **Package Manager**: pnpm

## 📦 Project Structure

```
├── client/                     # Frontend source code
│   ├── public/                 # Static assets
│   │   ├── images/             # Image assets directory
│   │   ├── __manus__/          # Manus runtime files
│   │   ├── *.jpg/*.png/*.jpeg  # Gallery images
│   │   ├── hero-team.jpg       # Hero section image
│   │   ├── logo.svg            # School logo
│   │   └── teachers.json       # Teacher data
│   ├── index.html              # HTML entry point
│   └── src/                    # Source code
│       ├── components/         # Vue components
│       │   ├── NavbarSection.vue
│       │   ├── HeroSection.vue
│       │   ├── AboutSection.vue
│       │   ├── TeachersSection.vue
│       │   ├── TeacherModal.vue
│       │   ├── TeamSection.vue
│       │   ├── EventsSection.vue
│       │   ├── GallerySection.vue
│       │   ├── ConstitutionSection.vue
│       │   ├── JoinSection.vue
│       │   └── SiteFooter.vue
│       ├── composables/        # Composable functions
│       │   └── useReveal.ts    # Scroll reveal animation
│       ├── App.vue             # Root component
│       ├── main.ts             # Application entry point
│       ├── env.d.ts            # TypeScript environment declarations
│       └── index.css           # Global styles with Tailwind
├── .prettierrc                 # Prettier configuration
├── .prettierignore             # Prettier ignore rules
├── package.json                # Project dependencies and scripts
├── pnpm-lock.yaml              # pnpm lock file
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript Node configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

## 🛠️ Development Guide

### Requirements

- Node.js >= 18.x
- pnpm >= 10.x

### Install Dependencies

```bash
pnpm install
```

### Start the Development Server

```bash
pnpm dev
```

Visit `http://localhost:5173` to preview the application.

### Build for Production

```bash
pnpm build
```

### Preview the Production Build

```bash
pnpm preview
```

### Code Checks

```bash
# TypeScript type checking
pnpm check

# Code formatting
pnpm format
```

## 🎨 Features

- **Navigation Bar** (`NavbarSection`) - Responsive top navigation menu with smooth scroll links
- **Hero Section** (`HeroSection`) - Eye-catching homepage banner with call-to-action
- **About Us** (`AboutSection`) - School introduction and mission statement
- **Faculty Team** (`TeachersSection`) - Interactive faculty showcase with profile cards
- **Teacher Modal** (`TeacherModal`) - Detailed teacher information popup with contact details and expertise
- **Team Highlights** (`TeamSection`) - Student team and leadership showcase
- **Upcoming Events** (`EventsSection`) - Event calendar and announcements
- **Photo Gallery** (`GallerySection`) - Responsive image gallery with school photos
- **Rules & Regulations** (`ConstitutionSection`) - School constitution and bylaws
- **Join Us** (`JoinSection`) - Admissions and recruitment information
- **Footer** (`SiteFooter`) - Contact information and quick links

## 📝 Code Style

This project uses **Prettier** for consistent code formatting. Configuration files:
- `.prettierrc` - Prettier rules
- `.prettierignore` - Files to exclude from formatting

Before committing code, please run:

```bash
pnpm format
pnpm check
```

## 📄 License

MIT License
