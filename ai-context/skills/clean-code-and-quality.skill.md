# Skill: Clean Code And Quality

## Purpose

Use this skill for everyday implementation quality: separation of concerns, SOLID-friendly design, typed contracts, readable functions, and avoiding overengineering.

## Project Evidence

- `src/components/organisms/AddOrEditJobForm/jobFormUtils.ts`: default values and payload mapping are extracted from UI.
- `src/components/molecules/JobTimeline/*`: chart parsing, data building, sizing, rendering, and options are separated into focused files.
- `src/store/util/createTagManagerActions.ts`: complex workflow transitions are centralized and reusable.
- `src/components/organisms/AssetTagTable/rowValidator.ts`: row validation is isolated.
- `eslint.config.js`: no unused variables, React hooks rules, and restricted console usage.
- `package.json`: `verify` runs TypeScript, lint, and Prettier checks.

## Current Pattern

Complex logic is extracted into named functions, hooks, store actions, or utilities. Components compose behavior and render UI; they should not become the only place where business rules live. TypeScript strictness is part of the quality bar.

## Implementation Guidelines

- Keep functions small and named by behavior.
- Move complex conditions out of JSX.
- Prefer explicit domain names over generic names.
- Use TypeScript contracts at boundaries.
- Avoid premature abstraction; extract only when duplication or complexity is real.
- Keep side effects at the edge: hooks, actions, submit handlers, API modules.
- Run verification before finishing meaningful changes.

## Recommended Structure

```text
Feature/
  Feature.tsx
  FeatureSection.tsx
  featureUtils.ts
  featureTypes.ts
  schema.ts
```

## Good Example

```ts
export const canSubmitForm = ({
  isDirty,
  isValid,
  isPending,
}: {
  isDirty: boolean;
  isValid: boolean;
  isPending: boolean;
}) => isDirty && isValid && !isPending;
```

This is preferable to repeating a multi-part condition inline across several buttons.

## Anti-patterns

- Logic-heavy JSX.
- Large files with mixed API, state, validation, and rendering concerns.
- Generic names such as `data`, `thing`, `handleStuff`, or `utils` without domain meaning.
- Creating abstractions before a pattern exists.
- Weakening TypeScript with `any` instead of modeling the contract.

## Checklist

- Complex logic is named and isolated.
- Components have one clear responsibility.
- Boundary types are explicit.
- No unnecessary abstraction was introduced.
- Verification scripts are considered for the change.
- New code follows nearby naming and file structure.
