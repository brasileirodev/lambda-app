# Rule: Components Must Be Small And Typed

## Rule

React components must have typed props and a narrow rendering responsibility.

## Why

The reference project separates reusable primitives, composed feature sections, and page composition. Small typed components are easier for agents to modify without creating regressions.

## Applies To

- components
- pages
- forms
- lists
- tables
- dialogs

## Correct Approach

Create explicit prop interfaces, split large UI into smaller components, and keep components focused on rendering and user interaction.

## Incorrect Approach

Create large untyped components that fetch data, transform payloads, validate forms, manage global state, and render complex JSX in one file.

## Validation Checklist

- Public props are typed.
- Component responsibility is clear.
- Large sections are split into child components.
- Complex logic is extracted to hooks or utilities.
