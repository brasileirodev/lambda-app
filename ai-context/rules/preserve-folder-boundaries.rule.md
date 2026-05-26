# Rule: Preserve Folder Boundaries

## Rule

Code must stay inside the folder boundary that matches its responsibility.

## Why

The reference project is maintainable because endpoint code, reusable UI, page composition, state workflows, hooks, and utilities are not mixed into the same files.

## Applies To

- api clients
- hooks
- components
- pages
- stores
- utils
- tests

## Correct Approach

Put endpoint and contract code in `api`, reusable behavior in `hooks`, shared state in `store`, pure functions in `lib` or feature utilities, reusable UI in `components`, and routed screens in `pages`.

## Incorrect Approach

Put API calls, payload mapping, validation, shared state, and rendered UI inside one page component.

## Validation Checklist

- Each file has one clear responsibility.
- Page files compose behavior instead of owning every layer.
- Domain utilities are not hidden inside JSX.
- Tests mirror the responsibility being tested.
