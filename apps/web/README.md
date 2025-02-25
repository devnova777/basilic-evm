# BasilicEVM Webapp

## Overview

The BasilicEVM webapp is built with Next.js 14 and follows a performance-optimized architecture for EVM applications. It's part of a larger monorepo that includes smart contracts (Foundry), indexing services (Ponder), and shared packages.

## Core Features

- URL-based state management
- API for reading and subscribing to data
- EVM transaction push for writing
- Code organization by route and feature

## Architectural Principles

### URL-Based State Management

The application uses URL parameters as the source of truth for state management:

```typescript
import { useSearchParams } from 'next/navigation'
import { createQueryString } from '@repo/lib'

function Component() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const updateFilters = (filters) => {
    const queryString = createQueryString({
      ...searchParams,
      ...filters
    })
    setSearchParams(queryString)
  }
}
```

Benefits:
- Shareable application states
- SEO-friendly routes
- Persistent state across page reloads
- Reduced client-side state complexity

### Data Fetching Strategy

The application implements a robust data fetching pattern using React Query:

```typescript
function useFeatureData(params: FeatureParams) {
  return useQuery({
    queryKey: ['feature', params],
    queryFn: () => fetchFeatureData(params),
  })
}
```

Key aspects:
- One subscription per route to minimize connection overhead
- Cached queries for efficient data sharing
- Type-safe contract interactions via viem/wagmi

### Code Organization

The project follows a React fractal architecture pattern, where each feature maintains a consistent, self-similar structure across different scales. This approach promotes modularity, scalability, and reusability. For more details, see [React Fractal Compoundnents](https://gaboesquivel.com/blog/2024-11-react-fractal-compoundnents).

```
app/
├── (routes)/         # Route groups by feature
│   ├── market/       # Market feature
│   │   ├── list/     # Market listing
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   └── detail/   # Market details
│   │       ├── index.tsx
│   │       └── types.ts
│   └── account/      # Account feature
│       ├── index.tsx
│       ├── health.tsx
│       └── types.ts
├── components/       # Shared components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── hooks/            # Custom hooks by feature
│   ├── market/
│   │   ├── use-markets.ts
│   │   └── types.ts
│   └── account/
│       ├── use-account.ts
│       └── types.ts
└── lib/              # Utility functions
```

Key benefits:
- Consistent folder structure across features
- Self-contained, portable components
- Clear separation of concerns
- Scalable and maintainable architecture
- Improved developer experience through predictability

### Error Handling

Standardized error handling approach:

```typescript
import { captureAppError } from '@repo/errors'

try {
  // Implementation
} catch (error) {
  captureAppError({
    code: 'FEATURE_ERROR',
    error,
    label: 'featureOperation'
  })
}
```

Features:
- Error boundaries for unexpected errors
- Form validation using zod schemas
- Centralized error logging with Sentry

## Tech Stack

- [Next.js](https://nextjs.org) 14
  - React Server Components
  - App Router
  - Server actions
- [shadcn/ui](https://ui.shadcn.com)
  - Tailwind CSS
  - Radix UI primitives
- [viem](https://viem.sh)
  - Type-safe Ethereum interface
- [wagmi](https://wagmi.sh)
  - React hooks for Ethereum
- [@tanstack/react-query](https://tanstack.com/query)
  - Data fetching and caching
- [zod](https://zod.dev)
  - Schema validation
- [nuqs](https://nuqs.dev)
  - URL-based state management

## Development Setup

### Requirements
- Node.js 18+
- pnpm
- Git

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Directory Structure

```
.
├── app/                # Next.js app directory
│   ├── (routes)/      # Route groups
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Root page
├── components/        # React components
│   ├── layout/       # Layout components
│   ├── features/     # Feature components
│   └── ui/           # UI components
├── lib/              # Utility functions
│   ├── config.ts     # App configuration
│   └── utils.ts      # Helper functions
├── services/         # External services
└── public/           # Static assets
```

## Contributing

Please refer to the root [CONTRIBUTING.md](../../CONTRIBUTING.md) for development guidelines.

## License

MIT License
