# Rule: No New Dependencies Without Justification

## Rule

Do not add third-party dependencies unless the project cannot reasonably solve the problem with existing code, platform APIs, or small local utilities.

## Why

The target stack should stay focused on React, Vite, TypeScript, and Tailwind. Unnecessary dependencies increase bundle size, maintenance cost, and agent confusion.

## Applies To

- package management
- components
- hooks
- utils
- forms
- api clients
- tests

## Correct Approach

Prefer existing utilities and small typed helpers. Add a dependency only with a clear reason, ownership boundary, and usage pattern.

## Incorrect Approach

Install a package for trivial formatting, simple state, basic class composition, or one-off behavior.

## Validation Checklist

- Existing code and platform APIs were considered.
- The dependency solves a real recurring need.
- Bundle and maintenance impact are acceptable.
- Usage is wrapped or isolated when appropriate.
