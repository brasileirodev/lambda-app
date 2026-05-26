# Skill: Project Architecture

## Purpose

Use this skill when adding or changing application structure, pages, routes, providers, imports, or feature modules. It documents the target architecture pattern for React + Vite projects using strongly typed feature boundaries and Tailwind for styling.

## Project Evidence

- `package.json`: React, TypeScript, Vite, strict verification scripts, test scripts, and production/development dependency separation.
- `tsconfig.json`: strict TypeScript, bundler module resolution, JSX `react-jsx`, and alias-based imports.
- `vite.config.ts`: React SWC plugin, `vite-tsconfig-paths`, Vitest with jsdom and coverage thresholds.
- `src/main.tsx`: root composition with global providers and router setup.
- `src/router/routes.tsx`: centralized nested route tree for assets, jobs, customers, groups, templates, and crews/pressure pumpers.
- `src/api`, `src/components`, `src/hooks`, `src/lib`, `src/pages`, `src/router`, `src/store`: top-level responsibility boundaries.

## Current Pattern

The application is a Vite SPA with strict TypeScript and alias-based imports. Domain APIs live under `src/api`, reusable UI under `src/components`, data orchestration hooks under `src/hooks`, shared client state under `src/store`, pure utilities under `src/lib`, and routed screens under `src/pages`.

Routing is centralized in `src/router/routes.tsx`. Root providers are centralized in `src/main.tsx`; feature code should not create parallel global providers unless a new cross-cutting concern is approved.

## Implementation Guidelines

- Place new page-level screens in `src/pages/<FeaturePage>`.
- Place reusable UI in `src/components/atoms`, `src/components/molecules`, or `src/components/organisms` according to complexity and dependency direction.
- Place API endpoint modules in `src/api/<domain>` with `types.ts`, implementation file, and `index.ts` when the domain is exported.
- Place reusable data hooks in `src/hooks/use<Domain>.ts` or a domain-specific hooks folder.
- Place shared state in `src/store/<domain>Store` only when state must survive component boundaries or route composition.
- Use aliases from `tsconfig.json`; avoid deep relative imports across top-level boundaries.
- Keep feature code close to the page or component until it becomes reused.

## Recommended Structure

```text
src/api/<domain>/
  <domain>.ts
  types.ts
  index.ts

src/hooks/
  use<Domain>.ts

src/pages/<DomainPage>/
  <DomainPage>.tsx
  schema.ts
  utils.ts

src/components/<atomic-level>/<ComponentName>/
  <ComponentName>.tsx
  schema.ts
  types.ts
  index.tsx
```

## Good Example

```ts
// src/hooks/useAssets.ts
export const useAssets = () => {
  return useServerData({
    key: ['assets'],
    fetcher: assetAPI.getAll,
  });
};
```

This follows the intended split: API logic stays in `src/api`, data orchestration stays in `src/hooks`, and components consume hooks instead of calling clients directly.

## Anti-patterns

- Creating a new top-level folder for a pattern that already has a home.
- Defining feature routes inside page components instead of `src/router/routes.tsx`.
- Adding global providers inside feature components.
- Bypassing aliases with long relative paths such as `../../../api/...`.
- Mixing API calls, state mutation, and complex JSX in one page component.

## Checklist

- The new files fit an existing top-level boundary.
- Imports use configured aliases where appropriate.
- Routes are registered centrally when the feature is navigable.
- API, server state, client state, and presentation logic are separated.
- No new architecture pattern was introduced without source-code evidence.
