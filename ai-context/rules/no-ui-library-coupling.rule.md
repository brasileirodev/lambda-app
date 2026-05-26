# Rule: No UI Library Coupling

## Rule

Shared components and feature code must not be designed around APIs from a specific external UI component library.

## Why

The new project should remain centered on React, TypeScript, Vite, and Tailwind. Coupling component contracts to a UI library makes future changes harder and contradicts the target stack.

## Applies To

- components
- pages
- forms
- tables
- dialogs
- navigation
- documentation

## Correct Approach

Define project-owned component props and render semantic HTML styled with Tailwind. Wrap any third-party UI only behind project-owned adapters if a future requirement explicitly adds one.

## Incorrect Approach

Expose third-party component props as the public contract of project components or document patterns that require a specific UI library.

## Validation Checklist

- Public component props are project-owned.
- Tailwind is the primary styling mechanism.
- No rule or skill requires a specific UI component library.
- Third-party UI APIs do not leak into feature code.
