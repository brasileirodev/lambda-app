# Skill: Naming And File Organization

## Purpose

Use this skill when naming files, components, hooks, stores, schemas, utilities, tests, or API contracts. It captures the naming conventions that are already visible in the codebase.

## Project Evidence

- `src/components/molecules/GenericActionTable/GenericActionTable.tsx`, `src/components/organisms/AddOrEditJobForm/AddOrEditJobForm.tsx`, `src/components/atoms/PageHeader/PageHeader.tsx`: PascalCase component folders and files.
- Hook files under `src/hooks`, such as `src/hooks/useColorTheme.ts`: hooks use `use` prefix and domain names.
- `src/api/asset/type/assetType.ts`, `src/api/asset/type/types.ts`, `src/api/job/job.ts`, `src/api/job/types.ts`: API modules use domain implementation files plus `types.ts`.
- `src/store/assetTypeStore/assetTypeTagManagerStore.ts`, `src/store/toastStore/toastStore.tsx`: shared-state modules use `use<Domain>Store`-style exports.
- `tests/components/organisms/AddOrEditJobForm/jobFormUtils.spec.ts`, `tests/hooks/**`: tests mirror source responsibility and use `.spec.ts` or `.spec.tsx`.

## Current Pattern

Components are PascalCase and usually live inside folders with the same name. Hooks are camelCase with the `use` prefix. API objects are named `<domain>API`. Schema files are commonly named `schema.ts` next to the form or component they validate. Utility files are named after the behavior they own, such as `jobFormUtils.ts` or `jobTimelineDataParser.ts`.

Tests use `.spec.ts` or `.spec.tsx` and generally mirror the source domain.

## Implementation Guidelines

- Name React components in PascalCase.
- Name hooks with `use` plus a domain or behavior name.
- Name API modules with a domain object such as `assetTypeAPI`, `jobAPI`, or `customerAPI`.
- Name DTOs, payloads, params, and response types explicitly.
- Name form schemas `<FormName>Schema` and inferred form values `<FormName>Type` or `<FormName>Values`, matching the local convention.
- Prefer behavior-specific utility names over generic names like `helpers.ts` when the folder already has more precise files.
- Mirror source paths in `tests` when adding specs.

## Recommended Structure

```text
ComponentName/
  ComponentName.tsx
  schema.ts
  types.ts
  index.tsx

api/domain/
  domain.ts
  types.ts
  index.ts

tests/<source-area>/<domain>/
  ComponentName.spec.tsx
  domainUtils.spec.ts
```

## Good Example

```ts
export const AddOrEditJobFormSchema = yup.object({
  jobName: yup.string().required('Job Name is required'),
});

export type AddOrEditJobFormType = yup.InferType<typeof AddOrEditJobFormSchema>;
```

This mirrors `src/components/organisms/AddOrEditJobForm/schema.ts` and keeps naming connected to the form.

## Anti-patterns

- Naming hooks without `use`.
- Using vague files such as `misc.ts`, `stuff.ts`, or broad `helpers.ts` when behavior-specific naming is possible.
- Mixing DTO, UI model, schema, and component types in an unrelated shared file.
- Creating tests in unrelated folders that do not mirror the source responsibility.

## Checklist

- Components and pages use PascalCase.
- Hooks use the `use` prefix.
- API contracts have explicit names for DTO, payload, params, and response shapes.
- Utility names describe the behavior they own.
- Test paths are easy to map back to the source files.
