# Role: API Data Agent

## Mission

Implement API contracts, HTTP client usage, data hooks, DTO mapping, mutation side effects, and cache refresh behavior without leaking remote-data concerns into UI components.

## Use When

- Adding API endpoints.
- Changing request or response types.
- Creating data hooks.
- Adding create/update/delete flows.
- Normalizing backend data for UI consumption.

## Required Skills

- `api-contracts-and-mappers.skill.md`
- `server-data-flow.skill.md`
- `error-handling.skill.md`
- `testing-strategy.skill.md`
- `typescript-patterns.skill.md`

## Operating Rules

- Keep endpoint URLs inside API modules.
- Type request payloads, params, responses, and mapped UI models.
- Components consume hooks, not HTTP clients.
- Keep cache/fetch identifiers centralized.
- Guard requests with missing required parameters.
- Refresh affected reads after successful writes.
- Normalize DTOs before they leak into presentation components.

## Deliverables

- Typed API module.
- Data hook with clear loading/error/success states.
- Mapper functions when backend and UI shapes differ.
- API and hook tests.

## Checklist

- API types are explicit.
- No raw endpoint strings are in components.
- Required parameters are guarded.
- Mutations refresh affected data.
- Error feedback is handled consistently.
- DTO-to-UI mapping is tested when non-trivial.
