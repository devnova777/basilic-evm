# BasilicEVM: FullStack EVM Project Starter

A performance-optimized development stack for EVM applications. Built with Foundry, viem/wagmi, and Next.js 15.

__This is still a work in progress__

## Stack Components

- __Contracts__: Foundry, Solidity ^0.8.19
- __Chain Integration__: viem/wagmi, Alchemy RPC
- __Frontend__: Next.js 15, React Server Components
- __Data Layer__: Ponder indexing, PostgreSQL ( Supabase )
  
## Project Structure

### Apps
- [__apps/web__](./apps/web/README.md) - Next.js frontend
- [__apps/ponder__](./apps/ponder/README.md) - Chain indexing service with GraphQL + RPC API
- [__apps/db__](./packages/db/README.md) - Local Supabase PostgreSQL instance
- [__apps/node__](./packages/node/README.md) - NodeJS service starter.
- [__apps/docs__](./packages/docs/README.md) - Docs starter.

### Packages
- [__packages/ui__](./packages/ui/README.md) - Shadcn/ui and custom components
- [__packages/core__](./packages/core/README.md) - Chain interactions, contract ABIs
- [__packages/api__](./packages/api/README.md) - Ponder api client, api sdk for queries and subscriptions
- [__packages/react__](./packages/react/README.md) - Web3 React hooks
- [__packages/lib__](./packages/lib/README.md) - Shared utilities
- [__packages/tsconfig__](./packages/tsconfig/README.md) - TypeScript configuration

This monorepo structure is designed for building modular blockchain applications with reusable SDKs. The separation of packages makes it easy for other teams to integrate specific functionality into their dapps, whether they need just the core contract interactions, React hooks, or the complete UI components. While these packages work seamlessly within the monorepo, they are also designed to be published individually to npm, allowing external projects to install and use specific packages as needed.

## Development Setup

### Requirements
- Node.js 18+
- pnpm
- Foundry

### Quick Start

```bash
npm install -g pnpm
curl -L https://foundry.paradigm.xyz | bash
foundryup
git clone https://github.com/blockmatic/basilic-evm.git
cd basilic-evm
pnpm install
```

## Backend Architecture

Our backend uses a combination of Ponder.sh and Supabase:

- **Ponder.sh**: Handles all database operations, migrations, and provides GraphQL + RPC APIs
- **Supabase**: 
  - Local development via apps/db
  - Database branching and preview environments
  - Vercel integration for deployments
  - Database management tools and monitoring

For detailed information about our backend architecture, please refer to [BACKEND.md](./BACKEND.md).

### Design System

Our design system provides a comprehensive collection of reusable components built on top of shadcn/ui, offering a consistent and maintainable UI framework across all applications. The system includes:

- Pre-built, customizable UI components
- Consistent theming and styling
- Accessibility-first design patterns
- Responsive layouts and components
- Dark/light mode support

All components and documentation can be found in the [packages/ui](./packages/ui/README.md) directory. The design system can be utilized in any application within the monorepo, from landing pages to complex dApps.

### Development Commands

```bash
pnpm backend:start  # Start Supabase & Ponder 
pnpm backend:reset  # Resets Supabase & Ponder 
pnpm backend:stop  # Stops Supabase & Ponder 
pnpm dev        # Dev server
pnpm build      # Production build
pnpm test       # Run tests
```

## AI-Powered Development Workflow

- **Specialized cursor rules** ([`.cursor/rules`](./.cursor/rules/README.md)) – Ensures code consistency and quality.
- **Streamlined UI Generation** – Simplifies front-end development with v0.dev.
- **Automated Code Reviews** – Provides AI-driven best practice suggestions.
- **AI-Powered Database Design** – Accelerates schema iteration with postgres.new and Supabase AI agent.

### AI Tools Used

- [Cursor.so](https://cursor.so/) – AI-assisted development environment.
- [v0.dev](https://v0.dev/) – Automated UI generation.
- [postgres.new](https://postgres.new/) – AI-powered database schema design.
- [CodeRabbit.ai](https://coderabbit.ai/) – AI-driven code reviews.
- [Supabase.com](https://supabase.com/) – AI-powered backend tools.

## Technical References

- [viem](https://viem.sh)
- [wagmi](https://wagmi.sh)
- [tanstack query](https://tanstack.com/query)
- [thirdweb connect](https://thirdweb.com/connect)
- [Next.js](https://nextjs.org/docs)
- [Ponder](https://ponder.sh/docs)
- [Supabase](https://supabase.com/docs)
- [Foundry](https://book.getfoundry.sh)
- [EIP-2771: Meta Transactions](https://eips.ethereum.org/EIPS/eip-2771)
- [0x Protocol Gasless API](https://0x.org/docs/gasless-api/introduction)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## License

MIT License

