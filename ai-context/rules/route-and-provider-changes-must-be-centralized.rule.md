# Rule: Route And Provider Changes Must Be Centralized

## Rule

Application routes and root-level providers must be changed only in their central configuration locations.

## Why

The reference project centralizes route definitions and root providers. This keeps navigation and cross-cutting concerns visible and predictable.

## Applies To

- routes
- pages
- providers
- layout
- tests

## Correct Approach

Add navigable screens to the central route tree and add global providers only at the root provider composition layer.

## Incorrect Approach

Create feature-local routers or nest global providers inside pages to solve local requirements.

## Validation Checklist

- New routes are registered centrally.
- Root providers are not duplicated.
- Feature-specific providers are scoped intentionally.
- Route changes have tests when behavior is non-trivial.
