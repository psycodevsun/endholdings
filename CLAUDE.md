# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Tech Stack

- React 19 with TypeScript
- Vite (using rolldown-vite experimental bundler)
- ESLint with TypeScript and React plugins

## Project Structure

- `src/main.tsx` - Application entry point, renders App in StrictMode
- `src/App.tsx` - Root component
- `tsconfig.json` - References split configs for app (`tsconfig.app.json`) and node (`tsconfig.node.json`)

## TypeScript Configuration

Strict mode enabled with additional checks:
- `noUnusedLocals` and `noUnusedParameters`
- `noFallthroughCasesInSwitch`
- `noUncheckedSideEffectImports`
- `erasableSyntaxOnly`
