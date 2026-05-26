# Rule: Server Data Through API And Hooks

## Rule

Components must not call the raw HTTP client or hardcode endpoint URLs. Server data must flow through API modules and data hooks.

## Why

The reference project separates endpoint contracts from component rendering. This makes data behavior reusable, typed, and testable.

## Applies To

- components
- pages
- hooks
- api clients
- tests

## Correct Approach

Put endpoint URLs, request payloads, and response typing in API modules. Expose reads and writes through hooks that components consume.

## Incorrect Approach

Call `fetch`, a raw HTTP client, or hardcoded endpoint strings directly inside page or component JSX.

## Validation Checklist

- Endpoint strings live in API modules.
- Components consume hooks.
- Data hooks expose loading, error, data, and mutation states.
- API modules and data hooks are testable independently.
