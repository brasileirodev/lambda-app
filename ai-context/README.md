# AI Development Context

## Purpose

This folder contains AI development context extracted from the current React + TypeScript codebase and adapted for a new React + Vite + Tailwind CSS project. It is intended for Codex, Claude Code, and other AI development assistants that need to implement features using consistent architecture, naming conventions, folder structure, and engineering practices.

The documentation focuses on transferable patterns: feature boundaries, typed contracts, component composition, hooks, state ownership, API orchestration, Tailwind styling conventions, tests, and maintainable implementation flow. It intentionally avoids UI-library-specific guidance.

## Folder Structure

- `skills`: technical implementation skills that describe project patterns, examples, and checklists.
- `roles`: operational agent roles that define how an AI assistant should behave for different kinds of frontend work.

## How AI Agents Should Use This

Before making code changes, an AI agent should select the role that best matches the task, then read the related skills. The role defines the operating mode and responsibilities. The skills define the project patterns to follow.

Agents must treat these files as project-local guidance, not generic frontend advice. When a pattern is unclear, inspect the implementation examples in the target project before adding new abstractions.

## Recommended Usage Flow

1. Read the role file that matches the task.
2. Read every skill referenced by that role.
3. Inspect existing implementation examples in the target project.
4. Implement using existing folders, naming, contracts, state boundaries, hooks, and Tailwind conventions.
5. Keep complex logic outside JSX and cover it with focused tests.
6. Run the relevant checks from `package.json`, usually `npm run verify` or focused `vitest` commands.
7. Update these docs when the implementation introduces a recurring, approved pattern.

## Maintenance Guidelines

Update the skills and roles when any of these change:

- Vite, TypeScript, ESLint, Prettier, or alias configuration.
- Root providers, routing, layout, or theme setup.
- API client conventions, DTO contracts, mappers, or endpoint modules.
- Server-data orchestration, cache invalidation, or error handling.
- Shared-state shape and ownership boundaries.
- Tailwind utility conventions, shared UI primitives, or design tokens.
- Form validation strategy and form composition.
- Test wrappers, mock strategy, coverage expectations, or helper utilities.
- Domain workflows for assets, asset versions, asset instances, tags, jobs, customers, groups, users, crews, pressure pumpers, alert templates, or tag templates.
