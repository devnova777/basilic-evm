# BasilicEVM Ponder Service

## Overview

The BasilicEVM Ponder service handles blockchain data indexing and provides a GraphQL + RPC API. It's integrated with Supabase for database management and deployment workflows.

## Core Features

- Blockchain event indexing and data transformation
- GraphQL API for querying indexed data
- RPC API supporting raw SQL queries
- Automatic database migrations
- Integration with Supabase for database lifecycle management

## Architecture

### Data Flow
1. Ponder indexes blockchain events and transactions
2. Data is transformed and stored in PostgreSQL
3. GraphQL/RPC APIs expose the indexed data
4. Frontend queries data via generated types

### Database Management
- Ponder controls all schema migrations
- Supabase provides database branching and environment isolation
- No manual Supabase migrations (handled by Ponder)

## Development Setup

### Requirements
- Node.js 18+
- pnpm
- PostgreSQL
- Supabase CLI

### Quick Start

```bash
# Install dependencies
pnpm install

# Start the service
pnpm dev # or pnpm silent

# Build for production
pnpm build
```

## Backend Documentation

For detailed information about our backend architecture, including how Ponder.sh and Supabase work together, database branching, and deployment workflows, please refer to [BACKEND.md](../../BACKEND.md).
