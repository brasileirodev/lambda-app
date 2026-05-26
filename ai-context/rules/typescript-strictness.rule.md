# Rule: TypeScript Strictness

## Rule

New code must preserve strict TypeScript safety and avoid weakening type contracts.

## Why

The reference project uses strict TypeScript and explicit boundary types. This catches integration errors early and makes code easier for agents to reason about.

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

Use explicit boundary types, generics where they preserve caller types, discriminated unions for mode-based state, and `unknown` with narrowing when values are not known.

## Incorrect Approach

Use `any`, broad optional objects, type assertions, or ignored type errors to force code through compilation.

## Validation Checklist

- No unnecessary `any` was introduced.
- Public APIs are typed.
- Nullable and optional values are handled explicitly.
- Type assertions are justified and narrow.
