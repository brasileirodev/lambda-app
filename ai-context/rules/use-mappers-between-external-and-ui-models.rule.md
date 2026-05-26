# Rule: Use Mappers Between External And UI Models

## Rule

When external API shapes differ from UI needs, data must be converted through a mapper before reaching presentation components.

## Why

The reference project normalizes backend field names and form payloads in dedicated mappers/utilities. This prevents UI components from depending on backend naming quirks.

## Applies To

- api clients
- hooks
- mappers
- forms
- components
- tests

## Correct Approach

Create named mapping functions near the API module, data hook, or form utility that owns the transformation.

## Incorrect Approach

Read raw DTO fields throughout components or build API payloads inline inside submit handlers.

## Validation Checklist

- DTO-to-UI mismatches are mapped once.
- Form-to-payload mapping is isolated.
- Mappers have meaningful names.
- Non-trivial mappers are tested.
