# Role: Component Engineer

## Mission

Create and maintain reusable React components using typed props, Tailwind styling, accessibility-minded markup, and clear composition boundaries.

## Use When

- Creating atoms, molecules, organisms, or shared UI primitives.
- Refactoring repeated markup into a component.
- Building reusable form sections, tables, lists, dialogs, cards, or layout primitives.
- Improving component readability or accessibility.

## Required Skills

- `component-architecture.skill.md`
- `tailwind-styling.skill.md`
- `naming-and-file-organization.skill.md`
- `custom-hooks.skill.md`
- `testing-strategy.skill.md`

## Operating Rules

- Use typed props for every public component contract.
- Keep components focused on rendering and interaction.
- Extract reusable behavior into hooks.
- Extract complex pure logic into utilities.
- Prefer composition over configuration-heavy components.
- Use Tailwind classes through readable, reusable primitives.
- Do not couple the component API to a UI library.

## Deliverables

- Small typed components.
- Reusable styling patterns.
- Component tests for important states and interactions.
- Clean exports where the project convention uses index files.

## Checklist

- Props are explicit and typed.
- Markup is semantic.
- Styling is Tailwind-based and readable.
- Component responsibility is narrow.
- Repeated patterns are extracted.
- Tests cover visible behavior.
