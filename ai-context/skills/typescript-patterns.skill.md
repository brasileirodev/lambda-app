# Skill: TypeScript Patterns

## Purpose

Use this skill when defining props, API contracts, form values, store state, utility inputs, and return types. The target project should keep TypeScript strict and explicit at architectural boundaries.

## Project Evidence

- `tsconfig.json`: `strict: true`, `noEmit: true`, bundler module resolution, and React JSX transform.
- `src/api/asset/type/types.ts`: separates raw API response, UI model, create payload, and update payload.
- `src/store/types.ts`: shared state contracts are modeled with interfaces.
- `src/components/organisms/AddOrEditJobForm/schema.ts`: form value type is inferred from validation schema.
- `src/components/molecules/GenericActionTable/GenericActionTable.tsx`: reusable component uses generics for row typing.
- `eslint.config.js`: unused variables are errors, with explicit ignore patterns for intentional unused values.

## Current Pattern

TypeScript is used to protect boundaries:

- API request and response contracts are explicit.
- Component props are typed.
- Shared state and actions have interfaces.
- Generic components preserve domain row/item types.
- Form values are inferred from schemas when possible.
- Utilities declare input and output types when inference is not obvious.

## Implementation Guidelines

- Avoid `any`; use domain types, generics, unions, or `unknown` with narrowing.
- Type public component props with interfaces.
- Type API payloads, params, responses, DTOs, and UI models separately when shapes differ.
- Use discriminated unions for state that has clear modes.
- Prefer inferred local variables when the type is obvious.
- Add explicit return types to exported functions when it improves API clarity.
- Keep nullable and optional fields intentional.

## Recommended Structure

```ts
export interface RawAsset {
  assetId: number;
  assetName: string;
}

export interface Asset {
  id: number;
  name: string;
}

export interface CreateAssetPayload {
  name: string;
}
```

## Good Example

```ts
interface StoreState {
  states: {
    selectedIds: number[];
  };
  actions: {
    setSelectedIds: (ids: number[]) => void;
    clearSelection: () => void;
  };
}
```

This mirrors the existing state/action contract style while remaining independent of the chosen state library.

## Anti-patterns

- Using `any` to bypass contract design.
- Reusing backend DTOs as UI models when field names or nullability differ.
- Making every field optional instead of modeling required state.
- Exporting broad object types with unrelated fields.
- Ignoring TypeScript errors instead of correcting the boundary.

## Checklist

- Boundary types are explicit.
- DTO and UI models are separated when needed.
- Nullable and optional fields are intentional.
- Exported functions have clear input/output contracts.
- No new `any` was introduced.
- Generic components preserve consumer types.
