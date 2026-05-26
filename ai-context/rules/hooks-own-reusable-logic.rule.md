# Rule: Hooks Own Reusable Logic

## Rule

Reusable React behavior, side effects, subscriptions, derived UI state, and data orchestration must be encapsulated in hooks.

## Why

The reference project uses hooks to keep components focused on rendering while reusable behavior remains composable and testable.

## Applies To

- hooks
- components
- pages
- forms
- data flows

## Correct Approach

Create typed hooks with explicit inputs and small return APIs. Use hooks for reusable effects, data orchestration, route-derived state, and feature-specific UI decisions.

## Incorrect Approach

Duplicate the same effect, derived state, or data orchestration across multiple components.

## Validation Checklist

- Reusable behavior is in a hook.
- Hook inputs and outputs are typed.
- Hook responsibilities are cohesive.
- Pure logic is kept in utilities when React is unnecessary.
