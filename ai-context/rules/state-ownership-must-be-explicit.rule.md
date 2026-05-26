# Rule: State Ownership Must Be Explicit

## Rule

Every state value must have a clear owner: local component state, route/workflow state, shared client state, or server data.

## Why

The reference project keeps local UI state, shared workflow state, and remote data responsibilities separate. This prevents stale state, duplicated data, and unnecessary global stores.

## Applies To

- components
- hooks
- stores
- pages
- routes
- forms

## Correct Approach

Use the smallest correct owner. Keep isolated UI state local, use shared state for cross-component workflows, and keep server data in the data layer.

## Incorrect Approach

Promote state globally to avoid simple prop passing or duplicate fetched server data inside shared client state.

## Validation Checklist

- State owner is documented by placement.
- Local state is preferred when sufficient.
- Shared state is justified.
- Server data is not duplicated as canonical client state.
