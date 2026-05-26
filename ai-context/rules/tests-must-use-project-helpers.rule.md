# Rule: Tests Must Use Project Helpers

## Rule

Tests must use existing project helpers for rendering, routing, provider setup, user interactions, and shared mocks.

## Why

The reference project avoids repeated test setup through helper wrappers. Reusing helpers keeps tests consistent and easier to maintain.

## Applies To

- tests
- components
- hooks
- pages
- routes

## Correct Approach

Use or extend shared test helpers when a component needs providers, routing, layout, or user interaction setup.

## Incorrect Approach

Duplicate provider setup in every test file or create one-off helpers for a pattern already covered by project utilities.

## Validation Checklist

- Existing helpers were checked before adding setup.
- Provider setup is not duplicated.
- New helpers are reusable.
- Tests remain isolated and deterministic.
