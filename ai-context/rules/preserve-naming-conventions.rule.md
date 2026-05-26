# Rule: Preserve Naming Conventions

## Rule

Files, components, hooks, stores, API modules, contracts, schemas, utilities, and tests must follow the established naming conventions.

## Why

Consistent naming lets agents and developers predict where behavior lives and how to extend it safely.

## Applies To

- components
- hooks
- stores
- api clients
- mappers
- forms
- utils
- tests

## Correct Approach

Use PascalCase for components and page folders, `use` prefix for hooks, explicit names for DTOs/payloads/responses/models, behavior-specific names for utilities, and mirrored test names.

## Incorrect Approach

Use vague names such as `helper`, `misc`, `data`, `thing`, or `handleStuff`, or name hooks without the `use` prefix.

## Validation Checklist

- Components and pages use PascalCase.
- Hooks start with `use`.
- API contracts use explicit domain names.
- Utilities describe their behavior.
- Test filenames map clearly to source behavior.
