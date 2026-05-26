# Skill: Tailwind Styling

## Purpose

Use this skill when styling React components in the target project. The current codebase shows strong reusable component boundaries; the target implementation should keep those boundaries while using Tailwind CSS for visual styling.

## Project Evidence

- `src/components/atoms/PageContainer/PageContainer.tsx`, `src/components/atoms/PageHeader/PageHeader.tsx`, `src/components/atoms/MainCard/MainCard.tsx`: layout primitives are reusable instead of repeated page markup.
- `src/components/molecules/SideNavigation/SideNavigation.tsx`, `src/components/molecules/ApplicationHeader/ApplicationHeader.tsx`: navigation and app chrome are isolated components.
- `src/components/molecules/GenericActionTable/GenericActionTable.tsx`: table behavior is wrapped behind a reusable component contract.
- `src/theme/index.ts`: the current project centralizes visual decisions; the Tailwind target should centralize tokens through Tailwind configuration and shared primitives.

## Current Pattern

The transferable pattern is not the styling library. The important pattern is that visual rules are centralized through primitives, layout components, and shared tokens. Page code should compose existing components instead of duplicating spacing, typography, and layout rules in every screen.

## Implementation Guidelines

- Use Tailwind utilities for layout, spacing, typography, borders, colors, and responsive behavior.
- Keep repeated class combinations in shared components or small class helper functions.
- Prefer semantic primitives such as `PageContainer`, `PageHeader`, `Card`, `Button`, `Dialog`, `EmptyState`, and `Table` over duplicated markup.
- Keep design tokens in `tailwind.config` when values are shared across the app.
- Use responsive utilities intentionally and keep mobile/desktop behavior explicit.
- Avoid long, unreadable class strings by extracting subcomponents or using a small class composition helper.
- Do not use inline styles except for truly dynamic values that cannot be expressed with classes.

## Recommended Structure

```text
src/components/ui/
  Button.tsx
  Card.tsx
  Dialog.tsx
  EmptyState.tsx
  PageContainer.tsx
  PageHeader.tsx

src/lib/
  classNames.ts

tailwind.config.ts
```

## Good Example

```tsx
interface PageHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export const PageHeader = ({ title, actions }: PageHeaderProps) => (
  <header className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
    <h1 className="text-xl font-semibold text-slate-950">{title}</h1>
    {actions}
  </header>
);
```

This keeps Tailwind classes inside a reusable primitive instead of repeating the same header structure in every page.

## Anti-patterns

- Copying long class strings across many pages.
- Styling every page from scratch instead of creating shared primitives.
- Mixing inline styles and Tailwind for static visual rules.
- Creating arbitrary one-off colors and spacing values instead of using tokens.
- Making responsive behavior implicit or untested.

## Checklist

- Repeated visual patterns are extracted into shared components.
- Tailwind classes are readable and intentional.
- Shared values are represented as tokens.
- Responsive states are handled explicitly.
- Components remain accessible and semantic.
- No UI-library-specific pattern is required.
