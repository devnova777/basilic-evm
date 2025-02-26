# BasilicEVM Ponder Service

## Overview

BasilicEVM Ponder indexes blockchain events, transforms data, and exposes it via a GraphQL + RPC API. Integrated with Supabase for database lifecycle management and deployment.

## Features

- **Event Indexing:** Tracks blockchain events and transactions.  
- **GraphQL + RPC API:** Query indexed data or execute raw SQL.  
- **Automated Migrations:** Schema managed by Ponder, no manual Supabase migrations.  
- **Supabase Integration:** Enables database branching and isolation.

## Architecture

1. Ponder indexes blockchain events → Stores in PostgreSQL  
2. Data exposed via GraphQL/RPC APIs → Typed access for frontend  
3. Supabase handles database environments → No manual migrations  

## Development

### Prerequisites
- Node.js 18+, pnpm, PostgreSQL, Supabase CLI  

### Quick Start

```bash
pnpm install   # Install dependencies
pnpm dev       # Start service (or use `pnpm silent`)
pnpm build     # Build for production
```

For backend architecture details, see [BACKEND.md](../../BACKEND.md).
