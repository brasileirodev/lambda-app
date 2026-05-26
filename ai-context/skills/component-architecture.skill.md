# Skill: Component Architecture

## Purpose

Use this skill when creating or refactoring React components. It defines how the project separates UI composition, props, reusable atoms/molecules/organisms, forms, lists/tables, and page-level responsibilities.

## Project Evidence

- `src/components/atoms/PageContainer/PageContainer.tsx`, `src/components/atoms/PageHeader/PageHeader.tsx`, `src/components/atoms/MainCard/MainCard.tsx`, `src/components/atoms/ContentCard/ContentCard.tsx`: reusable layout primitives.
- `src/components/molecules/GenericActionTable/GenericActionTable.tsx`: reusable table with row action menu and typed rows.
- `src/components/organisms/AddOrEditJobForm/AddOrEditJobForm.tsx`: larger feature form composed from smaller molecules and hooks.
- `src/pages/AssetPage`, `src/pages/JobPage`, `src/pages/CustomerManagementPage`: page folders own routed screen composition.

## Current Pattern

The project uses an atomic-style component hierarchy:

- `atoms`: low-level reusable UI wrappers and controls.
- `molecules`: composed UI blocks such as tables, forms sections, navigation, steppers, and dialogs.
- `organisms`: feature-level compositions that combine hooks, domain logic, and multiple molecules.
- `pages`: routed screens that compose organisms, hooks, and layout primitives.

Props are typed with interfaces when components expose a meaningful contract. Repeated UI behavior is wrapped in local components so the application is not coupled to one-off markup.

## Implementation Guidelines

- Keep components focused on one rendering responsibility.
- Move reusable feature sections into `molecules` or `organisms`.
- Keep page components as composition shells; avoid embedding large business transformations directly in page JSX.
- Type component props explicitly.
- Use project primitives such as page containers, page headers, dialogs, toasts, cards, list/table wrappers, and shared form sections when they fit.
- Extract schemas, utils, and row/column builders into sibling files when JSX becomes logic-heavy.
- Use `useMemo` or `useCallback` for expensive values, stable grid columns, and callbacks passed to memo-sensitive components.

## Recommended Structure

```text
ComponentName/
  ComponentName.tsx
  types.ts
  schema.ts
  ComponentName.spec.tsx

FeaturePage/
  FeaturePage.tsx
  utils.ts
  schema.ts
```

## Good Example

```tsx
interface ActionTableProps<T extends { id: string | number }> {
  rows: T[];
  columns: TableColumn<T>[];
  onEdit?: (id: number) => void;
}

export const ActionTable = <T extends { id: string | number }>(props: ActionTableProps<T>) => {
  // table state and action menu behavior
};
```

This reflects the existing generic, typed table pattern from `src/components/molecules/GenericActionTable/GenericActionTable.tsx`.

## Anti-patterns

- Large JSX blocks with inline mapping, validation, API payload construction, and state mutation.
- Recreating table action menus or common layout wrappers when existing components already cover the need.
- Passing untyped `props: any`.
- Putting route-level data fetching, mutation payload mapping, and form rendering into one unstructured component.

## Checklist

- Props are typed.
- Component size and responsibility are bounded.
- Reusable behavior is extracted to a hook, utility, or smaller component.
- Project UI wrappers are reused before creating new wrappers.
- Complex JSX logic has been moved out and tested when necessary.
