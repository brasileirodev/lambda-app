# Rule: Clean Code No Overengineering

## Rule

Implement the smallest maintainable solution that follows existing patterns without adding abstractions before they are needed.

## Why

The reference project extracts real complexity into utilities, hooks, and components, but does not require every small behavior to become a framework.

## Applies To

- components
- hooks
- stores
- api clients
- utils
- tests
- pages

## Correct Approach

Extract when there is meaningful duplication, complex logic, or a clear reusable boundary. Keep simple local behavior local.

## Incorrect Approach

Create generic factories, registries, providers, or abstraction layers for a single feature with no proven reuse.

## Validation Checklist

- The solution is easy to read.
- Abstractions have a real purpose.
- Simple behavior remains local.
- New code follows nearby patterns.
