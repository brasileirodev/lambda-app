# Rule: API Contracts Must Be Typed

## Rule

All API requests, responses, params, DTOs, payloads, and UI-facing models must be typed.

## Why

The reference project uses typed API boundaries so backend changes, nullable fields, and UI model differences are explicit.

## Applies To

- api clients
- hooks
- mappers
- forms
- tests

## Correct Approach

Define domain-specific types for external DTOs, request payloads, route/query params, API responses, and internal UI models when shapes differ.

## Incorrect Approach

Use `any`, untyped objects, or backend response shapes directly throughout UI code without modeling the contract.

## Validation Checklist

- API module exports typed functions.
- Request and response contracts are explicit.
- Nullable and optional fields are intentional.
- No new `any` is introduced at API boundaries.
