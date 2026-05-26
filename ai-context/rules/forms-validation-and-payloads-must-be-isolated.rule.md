# Rule: Forms Validation And Payloads Must Be Isolated

## Rule

Form validation, default values, and form-to-API payload mapping must be isolated from form JSX.

## Why

The reference project keeps form schemas, default-value builders, and payload mappers in separate files. This makes forms easier to test and modify.

## Applies To

- forms
- components
- hooks
- api clients
- tests

## Correct Approach

Place validation rules in schema or validation files, default values in named functions, and submit payload construction in pure mapper utilities.

## Incorrect Approach

Build validation rules and API payloads inline inside a form component's render body.

## Validation Checklist

- Validation is outside JSX.
- Default values are named and reusable.
- Submit payload mapping is pure.
- Complex form behavior has tests.
