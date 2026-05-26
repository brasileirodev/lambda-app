# Rule: Errors Loading Empty States Must Be Explicit

## Rule

Data-driven UI must distinguish loading, error, empty, and success states.

## Why

The reference project uses explicit loading/error handling and route-level fallbacks. Conflating states makes the UI ambiguous and harder to debug.

## Applies To

- components
- pages
- hooks
- forms
- routes

## Correct Approach

Render clear UI for loading, failed requests, no data, and successful data. Normalize technical errors before presenting them to users.

## Incorrect Approach

Render nothing while data loads, treat empty arrays as errors, or expose raw technical error objects in the UI.

## Validation Checklist

- Loading state is visible when needed.
- Error state is distinct from empty state.
- Empty state is handled intentionally.
- User-facing error messages are normalized.
