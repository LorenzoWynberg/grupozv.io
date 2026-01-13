# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server (http://localhost:3115)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (using @tailwindcss/postcss)
- **pnpm** for package management

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page
  - `globals.css` - Global styles and Tailwind imports
- `public/` - Static assets
- `@/*` path alias maps to project root

## Git Conventions

- **No Co-Authored-By**: Do not add "Co-Authored-By: Claude" to commit messages
- **Atomic commits**: Keep commits small and focused on a single change for clean git history
- **jj (jujutsu)**: Can use jj instead of git for version control
