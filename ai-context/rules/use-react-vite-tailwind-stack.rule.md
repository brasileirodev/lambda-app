# Rule: Use React Vite Tailwind Stack

## Rule

Implementation must target React + Vite + TypeScript + Tailwind CSS and avoid assumptions from unrelated UI stacks.

## Why

The new project will use Vite as the builder and Tailwind CSS for styling. Rules and implementation choices must stay applicable to that target stack.

## Applies To

- components
- pages
- styles
- build config
- tests
- documentation

## Correct Approach

Use React components, Vite-compatible patterns, TypeScript contracts, and Tailwind utilities or shared Tailwind primitives for UI styling.

## Incorrect Approach

Introduce UI-library-specific APIs, theme systems, component props, or styling conventions that are not part of the target stack.

## Validation Checklist

- Styling is Tailwind-compatible.
- Build assumptions are Vite-compatible.
- Components do not depend on a specific external UI component library.
- Documentation remains portable to React + Vite + Tailwind.
