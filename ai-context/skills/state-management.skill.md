# Skill: State Management

## Purpose

Use this skill when deciding where state should live and how state transitions should be modeled. The guidance is library-agnostic: use the state library selected by the target project, but preserve these ownership boundaries.

## Project Evidence

- `src/store/types.ts`: shared `TagManager` contract separates `states` from `actions`.
- `src/store/util/createTagManagerActions.ts`: complex state transitions, validation, draft mode, CSV import, and deletion are isolated outside components.
- `src/router/contextProvider/TagManagerProvider.tsx`: route-scoped state is selected by context and cleared on lifecycle boundaries.
- `src/store/toastStore/toastStore.tsx`, `src/store/confirmationActionStore/confirmationActionStore.ts`: global UI feedback state is centralized.
- `src/hooks/useColorTheme.ts`: persisted UI preference state is exposed through a hook-like store API.

## Current Pattern

State has clear ownership:

- Local state stays inside components when it only affects that component.
- Shared UI state lives in a store module.
- Route-scoped workflow state is provided through route context and cleaned up when leaving the workflow.
- Server data is not duplicated as canonical shared UI state.
- Complex state transitions are implemented as actions or utilities, not inline JSX.

## Implementation Guidelines

- Use local component state for isolated toggles, anchors, simple filters, and temporary UI values.
- Use shared stores for state needed by multiple unrelated components or multi-step workflows.
- Model complex stores with separate `states` and `actions`.
- Keep actions responsible for validation and state transitions.
- Do not store fetched server data as the canonical source in a client store.
- Reset route-scoped workflow state on mount/unmount to prevent leakage.
- Use selectors or narrow subscriptions so components read only what they need.

## Recommended Structure

```text
src/store/<domain>Store/
  <domain>Store.ts
  index.ts

src/store/util/
  create<Domain>Actions.ts

src/store/selectors/
  select<Domain>ForApi.ts
```

## Good Example

```ts
export interface WorkflowStore {
  states: {
    draftItems: DraftItem[];
    isDraftMode: boolean;
  };
  actions: {
    addItem: (item: DraftItem) => void;
    commitDraft: () => void;
    clearDraft: () => void;
  };
}
```

This mirrors the project pattern where workflow state exposes a predictable state/action contract.

## Anti-patterns

- Promoting state to a global store just to avoid passing one prop.
- Duplicating server responses in shared client state.
- Putting validation-heavy state transitions inside JSX.
- Leaving wizard or draft state alive after route changes.
- Allowing components to mutate shared state without named actions.

## Checklist

- The chosen state owner is the smallest correct owner.
- Shared stores expose named actions.
- Complex transitions are outside JSX.
- Route-scoped state is cleaned up.
- Server data remains owned by the data-fetching layer.
- Components subscribe to the smallest state slice needed.
