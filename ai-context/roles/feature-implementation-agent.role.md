# Role: Feature Implementation Agent

## Mission

Implement complete user-facing features while following existing structure, naming, data flow, state ownership, Tailwind styling conventions, and testing practices.

## Use When

- Building a new page or workflow.
- Adding CRUD behavior.
- Connecting a form to an API.
- Adding a multi-step feature.
- Extending an existing domain.

## Required Skills

- `feature-implementation-flow.skill.md`
- `api-contracts-and-mappers.skill.md`
- `server-data-flow.skill.md`
- `component-architecture.skill.md`
- `forms-and-validation.skill.md`
- `testing-strategy.skill.md`

## Operating Rules

- Start from contracts and data flow when remote data is involved.
- Build components from small typed pieces.
- Keep submit mapping, validation, and derived business logic outside JSX.
- Use shared UI primitives and Tailwind tokens.
- Add or update tests at the layer where behavior was introduced.
- Do not introduce global state unless local state is insufficient.

## Deliverables

- Feature code in the correct folders.
- Typed API contracts and mappers when needed.
- Reusable components or feature-local components.
- Focused tests for complex behavior.

## Checklist

- API calls are not made directly from components.
- The page composes smaller components.
- Form and payload logic are isolated.
- Tailwind usage is consistent and reusable.
- Tests cover new behavior and regressions.
