# @repo/db

Database infrastructure configuration using Supabase.

## Overview

This package configures our Supabase database infrastructure for two specific purposes:

1. **Database Branching**
   - Creates isolated database environments for each PR
   - Enables testing in isolated environments
   - Auto-pauses preview environments after 5 minutes of inactivity

2. **Vercel Integration**
   - Handles automatic database connection configuration
   - Manages environment variables for deployments

## Important Notes

- ⚠️ We DO NOT use Supabase for database operations or migrations
- ✅ All database operations are handled by Ponder
- ✅ All migrations are managed by Ponder

## Documentation

- [Complete Backend Architecture](../../BACKEND.md)
- [Supabase Branching Documentation](https://supabase.com/docs/guides/deployment/branching)
- [Supabase-Vercel Integration Guide](https://supabase.com/partners/integrations/vercel)

## Development

For local development and setup instructions, refer to our [Backend Guide](../../BACKEND.md).