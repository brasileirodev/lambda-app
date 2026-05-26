# Skill: Custom Hooks

## Purpose

Use this skill when extracting reusable logic from components, composing data flow, encapsulating side effects, or sharing UI behavior across features.

## Project Evidence

- `src/hooks/useColorTheme.ts`: exposes persistent UI preference behavior through a hook-like API.
- `src/hooks/useRouteMatch.ts`: isolates route matching behavior.
- Domain hook files under `src/hooks`: data orchestration is hidden from components.
- `src/components/molecules/CrewAndPumperSection/useShowCrewAndPumper.ts`: local feature hook isolates conditional UI logic.
- `src/components/molecules/JobTimeline/useJobTimelineData.ts`, `src/components/molecules/JobTimeline/useJobTimelineChartOptions.ts`: hooks compose complex chart data and options outside JSX.

## Current Pattern

Hooks own reusable behavior, not markup. Domain hooks expose data and actions. Feature hooks isolate derived state, effects, and composition logic. Components should stay focused on rendering and user interactions.

## Implementation Guidelines

- Name hooks with the `use` prefix.
- Keep hook inputs explicit and typed.
- Return a small, stable API that matches the consumer's needs.
- Extract repeated data orchestration, derived state, side effects, subscriptions, and workflow decisions.
- Keep pure transformations in utilities when they do not need React state/effects.
- Avoid hiding too much unrelated behavior inside one hook.
- Test hooks directly when they contain branching, effects, or business logic.

## Recommended Structure

```text
src/hooks/
  use<Domain>.ts
  use<Behavior>.ts

src/components/<level>/<Feature>/
  use<FeatureBehavior>.ts
  <Feature>Utils.ts
```

## Good Example

```ts
export const useShowAssignmentSection = (items: AssignedItem[]) => {
  return useMemo(() => items.some(item => item.requiresAssignment), [items]);
};
```

This mirrors the local feature-hook pattern used for conditional form sections.

## Anti-patterns

- Creating hooks that only wrap a single `useState` without reuse or semantic value.
- Returning large objects with unrelated state and actions.
- Embedding complex transformations in JSX instead of a hook or utility.
- Calling hooks conditionally.
- Hiding API contracts behind untyped hook return values.

## Checklist

- Hook name starts with `use`.
- Inputs and outputs are typed.
- The hook owns reusable behavior, not presentation.
- Pure logic is placed in utilities when React is unnecessary.
- Side effects have clear dependencies and cleanup.
- Complex hooks have tests.
