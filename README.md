# Library-FE

Library-FE is a modern, fast, and lightweight React frontend for a library loan management system, built with React 19, Vite, and TailwindCSS 4.

## Features

- **SPA routing** with React Router DOM v7 — clean URLs and seamless navigation (`/`, `/books`, `/borrowers`, `/loans`)
- **Fast dev experience** using Vite with hot module replacement
- **TailwindCSS 4** for utility-first, responsive styling
- **React Hot Toast** for elegant, non-blocking notifications
- Modern React 19 with hooks and `createRoot` for optimal performance

## Project Structure

- `/src/pages` — main page components
- `/src/index.jsx` — app entry point, router setup, and toast provider
- `/src/index.css` — global Tailwind styles
- `/services` — API client and helpers

## Setup & Usage

1. Clone repo and install dependencies:

```bash
git clone https://github.com/dedenfarhanhub/library-fe.git
cd library-fe
npm install
```
2. Copy `.env.example` to `.env`
3. Run development server:
```bash
npm run dev
```
4. Build for production:
```bash
npm run build
```
5. Preview production build locally:
```bash
npm run preview
```
---

## Tech Stack
- React 19 (hooks, functional components)
- React Router DOM v7 
- Vite (fast bundler and dev server)
- TailwindCSS 4 
- React Hot Toast 
- ESLint & Prettier for code quality

