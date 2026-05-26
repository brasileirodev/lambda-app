# Rule: Follow Existing Architecture

## Rule

All new code must fit the existing React + Vite project architecture before introducing new folders, layers, providers, or abstractions.

## Why

The reference project keeps responsibilities separated across API modules, hooks, components, pages, stores, router configuration, and utilities. Preserving those boundaries keeps the new project predictable for humans and AI agents.

## Applies To

- pages
- routes
- components
- hooks
- stores
- api clients
- utils
- tests

## Correct Approach

Inspect analogous features first, then place new files in the closest existing boundary. Add new architecture only when the current structure cannot represent the responsibility clearly.

## Incorrect Approach

Create new top-level folders, global providers, or architectural layers because they are familiar from another project but not needed by the current one.

## Validation Checklist

- Existing feature examples were inspected.
- New files live in established folders.
- API, hooks, UI, state, and utilities remain separated.
- No new top-level architectural pattern was added without justification.
