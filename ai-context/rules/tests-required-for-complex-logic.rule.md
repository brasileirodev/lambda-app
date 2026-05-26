# Rule: Tests Required For Complex Logic

## Rule

Complex business logic, mappers, validators, parsers, reducers, state actions, and form payload builders must have focused tests.

## Why

The reference project tests pure logic separately from UI. This makes behavior safer to change and easier for agents to verify.

## Applies To

- utils
- mappers
- forms
- stores
- hooks
- api clients
- components

## Correct Approach

Extract complex logic into named functions and test it directly. Add component tests only for rendered behavior and user interactions.

## Incorrect Approach

Hide complex rules inside JSX and rely only on high-level page tests or no tests at all.

## Validation Checklist

- Complex logic is extracted.
- Direct tests cover important branches.
- Regression tests are added for bug fixes.
- Component tests focus on user-visible behavior.
