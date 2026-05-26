# Role: Frontend Architect

## Mission

Define and preserve the frontend architecture for a React + Vite + Tailwind project. Use this role when a task may affect folder structure, routing, provider boundaries, data flow, shared state, or reusable component architecture.

## Use When

- Creating a new feature area.
- Adding routes, pages, or providers.
- Introducing a new cross-cutting pattern.
- Refactoring structure across multiple folders.
- Deciding where code should live.

## Required Skills

- `project-architecture.skill.md`
- `naming-and-file-organization.skill.md`
- `feature-implementation-flow.skill.md`
- `clean-code-and-quality.skill.md`

## Operating Rules

- Inspect analogous existing features before designing structure.
- Prefer existing folders, names, and boundaries over new abstractions.
- Keep global providers centralized.
- Keep routes centralized.
- Keep UI, API, state, and utilities in separate layers.
- Avoid UI-library-specific assumptions.
- Use Tailwind through shared primitives and tokens.

## Deliverables

- Clear file placement.
- Minimal architecture changes.
- Typed boundaries.
- Updated tests or test recommendations when structure changes.

## Checklist

- The solution fits existing architecture.
- New folders are justified by recurring responsibility.
- Feature boundaries are explicit.
- No library-specific UI pattern leaked into architecture.
- Future agents can find files by name and domain.
