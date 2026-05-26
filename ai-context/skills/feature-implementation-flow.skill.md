# Skill: Feature Implementation Flow

## Purpose

Use this skill to plan and execute a new feature end to end while preserving project structure, naming, state ownership, data flow, styling conventions, and tests.

## Project Evidence

- `src/router/routes.tsx`: new navigable features are added to the route tree.
- `src/pages/*`: page folders own routed screens.
- `src/api/*`: domain API modules own endpoint calls and contracts.
- `src/hooks/*`: domain hooks mediate server data and reusable behavior.
- `src/components/atoms`, `src/components/molecules`, `src/components/organisms`: UI is built through reusable component layers.
- `src/store/*`: shared workflow state is isolated from components.
- `tests/**`: tests mirror API, hooks, stores, components, pages, and utilities.

## Current Pattern

Feature implementation usually touches several layers in order:

1. Domain contracts and API module.
2. Data hook or state integration.
3. Pure mappers/utilities.
4. Reusable UI sections.
5. Page composition and route wiring.
6. Tests for changed behavior.

## Implementation Guidelines

- Start by identifying the feature boundary and existing analogous feature.
- Add or update API contracts before UI code when remote data is involved.
- Add data hooks before components consume data.
- Add shared state only if local state is insufficient.
- Build UI from small reusable pieces and Tailwind primitives.
- Keep payload mapping and validation outside JSX.
- Add tests at the layer where behavior lives.
- Run focused tests first, then project verification when practical.

## Recommended Structure

```text
src/api/<feature>/
src/hooks/use<Feature>.ts
src/components/<level>/<FeaturePart>/
src/pages/<FeaturePage>/
tests/api/<feature>/
tests/hooks/
tests/components/
tests/pages/
```

## Good Example

```text
1. Define CreateAssetPayload and Asset response model.
2. Add assetAPI.create and assetAPI.getAll.
3. Add useAssets and useCreateAsset hooks.
4. Build AssetForm with schema and mapFormValuesToPayload.
5. Compose AssetCreatePage.
6. Add API, hook, mapper, and page tests.
```

## Anti-patterns

- Starting with page JSX before contracts and data flow are clear.
- Adding global state before proving local state is insufficient.
- Mixing endpoint calls directly into components.
- Styling one-off UI instead of using primitives.
- Shipping complex mapping or validation without tests.

## Checklist

- An analogous feature was inspected.
- Contracts, hooks, components, and tests are placed in existing folders.
- State ownership is justified.
- API calls do not leak into components.
- Tailwind styling uses shared primitives and tokens.
- Tests cover the layer where logic was added.
