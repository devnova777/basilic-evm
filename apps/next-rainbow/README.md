# NextJS with RainbowKit

## Overview

The web app is built with Next.js 15 and follows a performance-optimized architecture for EVM applications. 

## Core Features

- URL-based state management
- API for reading and subscribing to data
- EVM transaction push for writing
- Code organization by route and feature
- Next.js 15's new Turbopack for faster builds
- React Server Components for improved performance
- Secure wallet authentication with Sign-In with Ethereum (SIWE)
- Modern wallet connection UI with RainbowKit

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

### Wallet Connection & Authentication

The application uses RainbowKit for wallet connection and SIWE for secure authentication:

```typescript
const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    return Math.random().toString(36).slice(2)
  },
  createMessage: ({ address, chainId, nonce }) => {
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in to BasilicEVM',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    })
    return message.prepareMessage()
  },
  verify: async ({ message, signature }) => {
    return verifyAndLogin({ message, signature })
  },
  signOut: async () => {
    await logout()
  },
})
```

Benefits:
- Secure authentication using Sign-In with Ethereum
- Modern, user-friendly wallet connection UI
- Support for multiple wallet providers
- Server-side session management with HTTP-only cookies
- Type-safe contract interactions via viem/wagmi

## Tech Stack

- [Next.js](https://nextjs.org) 14
  - React Server Components
  - App Router
  - Server actions
- [shadcn/ui](https://ui.shadcn.com)
  - Tailwind CSS
  - Radix UI primitives
- [RainbowKit](https://www.rainbowkit.com)
  - Wallet connection UI
  - SIWE authentication
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

### Environment Variables

```bash
# WalletConnect - Required for RainbowKit
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="..."
```

### Quick Start

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env-sample .env

# Add your WalletConnect project ID to .env
# Get one at https://cloud.walletconnect.com

# Start development server
pnpm dev

# Build for production
pnpm build
```

## License

MIT © [blockmatic.io](https://blockmatic.io)


