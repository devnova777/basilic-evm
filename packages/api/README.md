# @repo/api Package

A core package for interacting with the ponder apis.

## Features

- Ponder client for querying the database and providing utility API functions as a TypeScript SDK.
- React hooks for querying the database and listening to events.
- Exports all `@ponder/client` and `@ponder/react` modules for consistency across applications.
- TypeScript types for the database schema.

## Installation

To install the package, run the following command:

```bash
pnpm install @repo/api
```

## Usage            

```typescript
import { useSwaps } from '@repo/api'

const { swaps, isLoading, error } = useSwaps()
``` 


