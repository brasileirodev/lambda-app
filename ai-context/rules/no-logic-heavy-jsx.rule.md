# Rule: No Logic Heavy JSX

## Rule

Complex branching, mapping, validation, filtering, parsing, and payload construction must not live directly inside JSX.

## Why

The reference project isolates complex behavior into utilities, hooks, schemas, mappers, and store actions. This keeps JSX readable and logic testable.

## Applies To

- components
- pages
- forms
- tables
- hooks

## Correct Approach

Move complex logic into named functions, hooks, mappers, schema files, or utilities before rendering.

## Incorrect Approach

Place multi-step business rules, nested ternaries, inline payload construction, or validation logic directly inside JSX.

## Validation Checklist

- JSX is primarily declarative rendering.
- Complex conditions have names.
- Payload mapping is outside JSX.
- Extracted logic is tested when non-trivial.
