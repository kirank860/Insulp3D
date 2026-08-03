# InSculp 3D

InSculp 3D is a premium, modern web application designed for a leading large-scale 3D printing and additive manufacturing company based in Dubai. The platform showcases 3D printing services, architectural capabilities, projects, and publications with a highly refined, animated, and responsive user experience.

## 🚀 Tech Stack

This project was built using the following modern web technologies:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust, type-safe code.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) using a custom Deep Navy Blue design system (`@theme`).
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for premium, spring-physics-based interactions, smooth page transitions, and staggered mobile drawers.
- **Icons**: [Lucide React](https://lucide.dev/) for clean, scalable vector icons.
- **Typography**: Optimized [Google Fonts](https://fonts.google.com/) via `next/font/google` (*Cinzel* for headings, *Josefin Sans* for body text).

## ✨ Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and large desktop screens.
- **Premium UI/UX**: Custom-tailored color palette sampling the official brand identity, with glassmorphism effects and animated hover states.
- **Animated Navigation**: A responsive top navigation bar that transforms into a sleek, full-screen animated drawer on mobile devices.
- **SEO Optimized**: Built with semantic HTML and Next.js server-side rendering for optimal search engine performance.

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `/app`: Contains all Next.js App Router pages (Home, About Us, Services, Projects, Publications, Contact Us) and global layouts.
- `/components`: Reusable UI components including the `Navbar`, `Footer`, `PageTransition`, and specialized UI effects (`FadeIn`, `WordPullUp`).
- `/public`: Static assets including images and localized 3D rendering visuals.
- `/lib`: Utility functions (e.g., `cn` for Tailwind class merging).
