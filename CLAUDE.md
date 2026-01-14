# Grupo ZV - Project Reference

## Quick Reference

Next.js 16 website with React 19, TypeScript, Tailwind CSS v4.

**Port:** 3115

---

## Version Control

- **Use jj (Jujutsu)** - Primary version control tool, colocated with git ([docs](https://docs.jj-vcs.dev/latest/))
- **Atomic commits** - One logical change per commit, very small and focused
- **No co-authored-by** - Do not add "Co-Authored-By: Claude" to commit messages
- **Conventional commits** - Use prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `style:`

### jj Essential Commands

```bash
jj new                              # Create new commit
jj describe -m "message"            # Set commit message
jj status / jj diff / jj log        # View state
jj bookmark create NAME -r @        # Create bookmark
jj bookmark set NAME -r @           # Move bookmark (use --allow-backwards if needed)
jj bookmark track NAME --remote=origin  # Track before first push
jj git push --bookmark NAME         # Push bookmark
jj git fetch                        # Fetch from remote
jj squash                           # Squash into parent
jj undo                             # Undo last operation
```

**Note:** Track bookmarks before pushing: `jj bookmark track NAME --remote=origin`

**Pitfall:** After push, `@` points to a new empty commit. Use the change ID (e.g., `rpoznltr`) instead of `@` when moving bookmarks post-push.

### Documentation Logs

- **Changelog**: `logs/CHANGELOG.md` - High-level changes grouped by date/version
- **Activity Log**: `logs/activity/YYYY-MM-DD.md` - Detailed append-only log of every task, one file per day
- **Timestamps**: Always use Costa Rica time (UTC-6)

---

## Code Quality (IMPORTANT)

**Before committing ANY code, run checks in this order:**

1. **Lint/Typecheck first** - Fix any errors
2. **Format last** - Always run Prettier as the final step before committing

```bash
pnpm lint                    # 1. ESLint - fix errors first
pnpm typecheck               # 2. TypeScript check - fix errors (if available)
pnpm format                  # 3. Format with Prettier - LAST before commit
```

**DO NOT commit code that fails formatting or linting checks.**

**Push constantly:** After commits pass all checks, push immediately. Don't accumulate local commits.

---

## Commands

```bash
pnpm dev              # Start development server (http://localhost:3115)
pnpm build            # Production build
pnpm start            # Run production server
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier (add to package.json if missing)
```

---

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (using @tailwindcss/postcss)
- **pnpm** for package management

---

## Project Structure

```
app/                  # Next.js App Router pages and layouts
  layout.tsx          # Root layout with font configuration
  page.tsx            # Home page
  globals.css         # Global styles and Tailwind imports
components/           # React components
  ui/                 # shadcn/ui components (if used)
lib/                  # Utility functions
public/               # Static assets
logs/                 # Documentation logs
  CHANGELOG.md        # Version changelog
  activity/           # Daily activity logs
```

**Path alias:** `@/*` maps to project root

---

## Workflow Rules

1. **Update activity log** - After EVERY task/change, append entry to `logs/activity/YYYY-MM-DD.md`
2. **Update changelog** - Group notable changes by date in `logs/CHANGELOG.md`
3. **Commit frequently** - Make atomic commits after each logical change
4. **Push immediately** - Push after every commit
5. **Run checks before commit** - lint → typecheck → format (in that order)
