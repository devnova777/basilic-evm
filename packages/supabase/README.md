# @repo/supabase package

This module offers a robust set of tools for managing database interactions with Supabase. For detailed usage instructions, please refer to the [BACKEND.md](../../BACKEND.md) documentation.

## Key Features

- API for database operations powered by Supabase
- Supabase client support for both browser and server environments
- Client injection capabilities for seamless client and server actions
- Automatically generated TypeScript types for database tables
- Automatically generated Zod schemas for runtime validation

## Directory Structure

- **api/**: Houses API functions for database operations
- **supa.types.ts**: Contains TypeScript types generated from Supabase
- **supa.schema.ts**: Contains Zod schemas generated from Supabase
- **sdk/**: Includes Supabase clients for both browser and server

## Usage Guidelines

🛠 Schema Updates

After making changes to the schema, execute the following command in the repo/supabase package:

```bash
pnpm supa:gen
```

This will:

- Generate TypeScript types for Supabase tables.
- Generate Zod validation schemas.
- Update Supabase SDK config.

### API Functions

API functions follow these conventions:

- Accept `SupaApiParams` type for consistent client handling
- Use `captureAppError` from `@repo/errors` for error handling
- Return type-guarded, non-null data

