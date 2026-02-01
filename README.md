# Gaurav | Software Engineer Portfolio

A high-performance, interactive developer portfolio built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/). This project showcases my skills, experience, and projects with a modern, responsive design.

## Features

- **Interactive 3D Icon Cloud**: A dynamic, interactive sphere of tech stack icons using `react-icon-cloud` and custom canvas rendering.
- **Responsive Projects Section**: A grid layout displaying key GitHub projects with links to repositories and live demos.
- **Animated Sections**: Smooth scroll animations and reveal effects powered by Framer Motion.
- **Dark Mode Aesthetic**: A sleek, dark-themed UI designed for visual appeal and readability.
- **Performance Optimized**: specific optimizations for React hydration and fast load times.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)
- **Deployment**: [Vercel](https://vercel.com)

## Getting Started

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

## Project Structure

- `src/app`: App directory containing pages and layouts.
- `src/components/sections`: Individual sections of the landing page (Hero, Experience, Projects, Skills, Education).
- `src/components/ui`: Reusable UI components (Button, Card, Badge, IconCloud).
- `src/lib`: Utility functions.