# @repo/lib package

This package contains shared utilities, functions, constants, and configuration files that can be used across multiple projects in the monorepo.

## Key Principles

1. **Shared Utilities**: Functions in this package should be reusable across different applications and projects.

2. **Common Constants**: This package contains constant values that can be shared across projects, promoting consistency across the codebase.

3. **Shared Configuration**: Configuration utilities stored here can be used by any application in the monorepo.

4. **Generic Utilities**: Utility functions that are useful across multiple projects are kept in this package.

## Best Practices 

- Keep functions simple, focused, and well-documented
- Use TypeScript for strong typing of function inputs and outputs
- Document each function with clear JSDoc comments
- Ensure utilities are generic enough to be useful across different projects
- Avoid project-specific implementations
- Regularly review and update the contents to ensure they remain relevant and maintainable
- Version the package appropriately when making breaking changes

## Current Utilities

The package currently includes:

- Async utilities (sleep, runAsyncFnWithoutBlocking)
- Currency formatting helpers
- Nanoid string generation
- Common TypeScript types

## Usage

To use this package in your project:

1. Install the package in your project:

```bash
pnpm install @repo/lib
```

2. Import the desired utilities from the package:

```typescript
import { sleep } from '@repo/lib'
```

3. Use the imported utilities in your project:

```typescript
const result = await sleep(1000)
```
