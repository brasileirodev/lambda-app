# Skill: API Contracts And Mappers

## Purpose

Use this skill when adding or changing API modules, request payloads, response contracts, DTOs, mappers, or API-to-UI normalization.

## Project Evidence

- `src/api/client.ts`: central HTTP client wrapper with domain-specific client exports.
- `src/api/types.ts`: shared API response types.
- `src/api/asset/type/types.ts`: `RawAssetType`, `AssetType`, `CreateAssetTypePayload`, and `UpdateAssetTypeByIdPayload`.
- `src/api/asset/type/assetType.ts`: maps `RawAssetType` into UI-facing `AssetType`.
- Domain data hooks under `src/hooks`: map external DTO shapes into UI-facing entities before rendering.
- `src/components/organisms/AddOrEditJobForm/jobFormUtils.ts`: maps form values into `CreateOrUpdateJobPayload`.
- `tests/api/**/*.spec.ts`: API modules are tested by spying on the central API client.

## Current Pattern

API modules are domain-specific and expose typed functions through objects such as `assetTypeAPI`. Raw backend shapes are separated from UI-facing models when names or structures differ. Some mappings happen inside API modules, while query-level mappings are used when the transformation is tied to a specific data consumption path.

The HTTP wrapper returns response data directly, so API modules should type the expected payload explicitly.

## Implementation Guidelines

- Define request and response contracts in the domain `types.ts`.
- Use explicit names: `DTO`, `Payload`, `Params`, `Response`, `Entity`, or domain-specific model names.
- Keep endpoint paths inside API modules, not components or hooks.
- Use `assetMgmtApiClient` or `dataAccessApiClient` according to the backend domain.
- Map backend field names to UI models before they reach components when the mismatch is reusable.
- Keep form-to-payload mapping in utilities near the form when it depends on UI form shape.
- Test API modules by asserting the correct client method, URL, and payload.

## Recommended Structure

```text
src/api/<domain>/
  <domain>.ts
  types.ts
  index.ts
```

```ts
interface RawDomainItem {
  domainItemId: number;
  display_name: string;
}

interface DomainItem {
  id: number;
  displayName: string;
}

const mapToDomainItem = (raw: RawDomainItem): DomainItem => ({
  id: raw.domainItemId,
  displayName: raw.display_name,
});
```

## Good Example

`src/api/asset/type/assetType.ts` maps `RawAssetType.assetTypeId` to `AssetType.id` and `RawAssetType.activeVersionName` to `AssetType.version`. Components receive the UI model and do not need to know backend naming.

## Anti-patterns

- Returning untyped `any` from API modules.
- Duplicating endpoint URLs inside components or hooks.
- Passing raw backend DTOs deep into UI when field names differ from UI semantics.
- Performing form-to-API payload mapping inline inside JSX.
- Swallowing nullable fields without explicit conversion rules.

## Checklist

- Request and response types are explicit.
- API calls use the central client.
- Endpoint paths stay inside API modules.
- Backend-to-UI mapping is centralized when needed.
- Form-to-payload mapping is isolated and testable.
- API tests cover method, URL, and payload shape.
