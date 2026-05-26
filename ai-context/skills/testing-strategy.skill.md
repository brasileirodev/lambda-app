# Skill: Testing Strategy

## Purpose

Use this skill when adding or updating tests for components, hooks, API modules, stores, utilities, routing, and pages.

## Project Evidence

- `vite.config.ts`: test environment is `jsdom`, setup file is `tests/vitest.setup.ts`, coverage thresholds are configured.
- `tests/utils/renderWithUser.ts`: user-event render helper.
- `tests/utils/*`: provider wrapper patterns for hooks, routing, layout, and user interaction.
- `tests/utils/createRouterWrapper.tsx`, `tests/utils/renderWithLayout.tsx`: router and layout wrapper patterns.
- `tests/api/**/*.spec.ts`: API tests assert client method, URL, and payload.
- `tests/store/**/*.spec.ts`: shared-state behavior is tested directly.
- `tests/components/**/*.spec.tsx`, `tests/pages/**/*.spec.tsx`: UI behavior is tested through rendered output and user interaction.
- `tests/components/organisms/JobTabContent/jobTimelineDataParser.spec.ts`, `tests/components/organisms/AddOrEditJobForm/jobFormUtils.spec.ts`: complex pure logic is tested separately.

## Current Pattern

Tests are colocated under a mirrored `tests` tree. The project tests API modules, hooks, stores, utilities, components, pages, and router behavior. Complex business logic is extracted and tested without rendering when possible. Component tests use helpers for users, routing, layout, and providers.

## Implementation Guidelines

- Mirror source responsibility in test paths.
- Test behavior, not implementation details.
- Use existing render/provider helpers instead of recreating wrappers.
- Test API modules by mocking or spying on the HTTP client boundary.
- Test pure utilities directly.
- Test stores by invoking actions and asserting state transitions.
- Test components through accessible queries and user interactions.
- Add regression tests when fixing bugs or touching complex domain logic.

## Recommended Structure

```text
tests/api/<domain>/<domain>.spec.ts
tests/hooks/use<Domain>.spec.ts
tests/store/<domain>Store.spec.ts
tests/components/<level>/<Component>/<Component>.spec.tsx
tests/pages/<Page>/<Page>.spec.tsx
tests/lib/<utility>.spec.ts
```

## Good Example

```ts
it('maps form values to a create payload', () => {
  const payload = mapFormValuesToPayload(formValues);

  expect(payload).toEqual({
    name: 'Asset A',
    relatedIds: [1, 2],
    optionalNote: null,
  });
});
```

This follows the existing strategy of testing complex mapping logic as pure functions.

## Anti-patterns

- Testing only snapshots for behavior-heavy components.
- Mocking internal implementation details instead of public behavior.
- Rebuilding provider wrappers inside every test.
- Leaving mappers, validators, parsers, or state actions untested.
- Testing library code instead of project behavior.

## Checklist

- Test path mirrors source responsibility.
- Existing helpers are reused.
- Complex pure logic has direct tests.
- Components are tested through user-visible behavior.
- API modules are tested at the HTTP-client boundary.
- Store actions are covered when state transitions are non-trivial.
