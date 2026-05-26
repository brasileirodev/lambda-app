# Rule: Use Tailwind For Styling

## Rule

Static visual styling must be implemented with Tailwind utilities, shared Tailwind primitives, or Tailwind configuration tokens.

## Why

The target project uses Tailwind CSS. Styling should be consistent, token-driven, and reusable instead of scattered across inline styles or library-specific styling APIs.

## Applies To

- components
- pages
- layouts
- forms
- tables
- dialogs
- navigation

## Correct Approach

Use readable Tailwind class names, extract repeated class combinations into shared components, and place reusable visual values in Tailwind configuration.

## Incorrect Approach

Use inline styles for static styling, duplicate long class strings across pages, or introduce another styling system for normal UI work.

## Validation Checklist

- Static styling uses Tailwind.
- Repeated visual patterns are extracted.
- Shared values use tokens where appropriate.
- Inline styles are limited to truly dynamic values.
