# Skill: Server Data Flow

## Purpose

Use this skill when implementing reads, writes, cache updates, loading states, or API-backed features. This guidance is data-library-agnostic and focuses on the project boundary: components should consume hooks, hooks should call API modules, and API modules should call the HTTP client.

## Project Evidence

- `src/api/client.ts`: central HTTP client wrapper.
- `src/api/<domain>/<domain>.ts`: domain API modules keep endpoint paths out of components.
- Domain hook files under `src/hooks`: hooks expose reads and mutations to components.
- `src/constants/queryKeys.ts`: server-data cache keys are centralized.
- Domain data hooks under `src/hooks`: transformed response data is selected before reaching UI components.
- `tests/hooks/**`: data hooks are tested through provider wrappers.

## Current Pattern

Server data flows through three layers:

1. API module: owns URL, request payload, response type, and DTO mapping when reusable.
2. Data hook: owns fetch lifecycle, cache key, conditional execution, mutation side effects, invalidation, and user feedback.
3. Component: consumes typed data, loading state, error state, and mutation functions.

## Implementation Guidelines

- Never call the raw HTTP client directly from components.
- Keep endpoint paths inside API modules.
- Keep cache keys or fetch identifiers centralized.
- Include route parameters, filters, pagination, and search values in cache keys when they affect data.
- Guard requests that need IDs or required parameters.
- Invalidate or refresh all affected reads after successful writes.
- Keep user-facing success/error feedback consistent with nearby hooks.
- Use mapping functions to keep DTO mismatch away from UI components.

## Recommended Structure

```text
src/api/<domain>/
  <domain>.ts
  types.ts
  index.ts

src/hooks/
  use<Domain>.ts
```

## Good Example

```ts
export const useAssets = () => {
  return useServerData({
    key: ['assets'],
    fetcher: assetAPI.getAll,
  });
};

export const useCreateAsset = () => {
  return useServerMutation({
    mutationFn: assetAPI.create,
    onSuccess: cache => cache.invalidate(['assets']),
  });
};
```

The function names are illustrative. Use the data library selected by the target project, but preserve the API-hook-component boundary.

## Anti-patterns

- Hardcoding endpoint URLs in components.
- Creating ad hoc fetch logic inside page JSX.
- Forgetting to refresh affected lists/details after writes.
- Using raw DTO fields throughout UI components when a mapper is needed.
- Running requests with missing IDs or incomplete filters.

## Checklist

- Component consumes a hook, not the HTTP client.
- API module owns endpoint and payload typing.
- Cache/fetch key includes all inputs.
- Conditional requests are guarded.
- Mutations refresh affected data.
- DTO normalization is handled before UI rendering.
