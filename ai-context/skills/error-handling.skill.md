# Skill: Error Handling

## Purpose

Use this skill when implementing API failures, form errors, route errors, mutation feedback, loading states, or recoverable UI failures.

## Project Evidence

- `src/api/client.ts`: HTTP errors are intercepted and rethrown after logging.
- `src/router/routes.tsx`: root route uses `errorElement`.
- `src/pages/GenericErrorPage/GenericErrorPage.tsx`: route-level fallback page exists.
- `src/components/atoms/ErrorLoadingContent/ErrorLoadingContent.tsx`: reusable error/loading UI pattern.
- `src/store/toastStore/toastStore.tsx`: user-facing feedback is centralized.
- Domain data hooks in `src/hooks`: mutation failures surface messages through feedback actions.
- `src/components/organisms/AddOrEditJobForm/AddOrEditJobForm.tsx`: submit is guarded when required supporting data is missing.

## Current Pattern

Errors are handled at the boundary where they become meaningful:

- HTTP client logs and rejects failures.
- Data hooks convert mutation success/failure into cache updates and user feedback.
- Components render loading/error states when reads fail.
- Routes have fallback error pages.
- Forms show validation errors next to fields and guard invalid submit states.

## Implementation Guidelines

- Do not swallow errors silently.
- Show user-facing feedback for failed mutations.
- Keep field validation errors close to fields.
- Use route-level fallbacks for unrecoverable navigation failures.
- Keep loading and error states explicit in components that fetch data.
- Prefer typed error handling when the API provides structured error payloads.
- Avoid exposing raw technical errors directly to users unless there is no safer message.

## Recommended Structure

```text
src/components/ui/ErrorState.tsx
src/components/ui/LoadingState.tsx
src/pages/GenericErrorPage/
src/lib/errors.ts
```

## Good Example

```ts
onError: error => {
  showFeedback(getErrorMessage(error, 'Failed to save changes'), 'error');
};
```

The function names are illustrative. Preserve the pattern: translate failures into consistent user feedback at the data/mutation boundary.

## Anti-patterns

- Ignoring rejected promises.
- Showing raw stack traces or internal error objects to users.
- Hiding failed mutations without feedback.
- Mixing validation errors, network errors, and route errors in one catch-all component.
- Treating loading, empty, and error states as the same UI state.

## Checklist

- Loading, empty, and error states are distinct.
- Mutations provide success/failure feedback.
- Validation errors are field-level where possible.
- Route-level errors have a fallback.
- Errors are not silently swallowed.
- Technical error details are normalized before user display.
