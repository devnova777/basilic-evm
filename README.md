# BasilicEVM: Modern EVM Development Stack

## Overview

__BasilicEVM__ is a high-performance development stack designed for building cutting-edge __EVM-based applications__ with speed, modularity, and AI-powered enhancements. Whether you're building decentralized applications across DeFi, NFTs, GameFi, governance or infrastructure, BasilicEVM provides a streamlined and scalable environment for rapid development.

## Features

- 🧩 __Modular Architecture__ – Customizable for specific needs.
- 👛 __Wallet Integration__ – Secure authentication and transactions.
- 🔨 __Foundry-Powered Smart Contracts__ – High-speed Solidity compilation and testing.
- ⚡ __Optimized Workflow__ – Turbo monorepo, AI-assisted development, and best practices.
- 🤖 __AI-Enhanced Development__ – Automation for faster coding and reviews.
- 🛠️ __TypeScript Monorepo__ – Shared configurations and package management.
- 📚 __Comprehensive Documentation__ – Best practices and guides.

## Core Stack

- __Smart Contracts__: Foundry for high-speed compilation and testing.
- __Full-Stack Framework__: Next.js 15 with React Server Components.
- __Styling & UI__: Tailwind CSS and shadcn/ui.
- __Blockchain Integration__: viem, wagmi, thirdweb, and Alchemy.
- __Monorepo Management__: Turbo for scalable project organization.
- __Linting & Formatting__: Biome, a modern developer-friendly toolchain.

## Project Structure

## Applications

- __Web__ ([`/apps/web`](/apps/web/README.md)) – Next.js front-end.
- __Ponder__ ([`/apps/ponder`](/apps/ponder/README.md)) – Blockchain event indexing.

## Packages

- __UI__ ([`/packages/ui`](/packages/ui/README.md)) – Shadcn/ui components, design system.
- __Core__ ([`/packages/core`](/packages/core/README.md)) – Shared core utilities.
- __React__ ([`/packages/react`](/packages/react/README.md)) – React hooks.
- __Supabase__ ([`/packages/supabase`](/packages/supabase/README.md)) – Database and authentication.
- __Errors__ ([`/packages/errors`](/packages/errors/README.md)) – Standardized error handling.
- __Lib__ ([`/packages/lib`](/packages/lib/README.md)) – Utility functions.
- __Next__ ([`/packages/next`](/packages/next/README.md)) – Next.js utilities.
- __TypeScript Config__ ([`/packages/tsconfig`](/packages/tsconfig/README.md)) – Shared configurations.

## Foundry

A __high-performance toolkit__ for Solidity development, built with Rust for speed and efficiency. Key features:

- __Blazing-Fast Compilation & Testing__ – Significantly faster than Hardhat or Truffle.
- __Advanced Fuzz Testing__ – `forge test --fuzz-runs` for uncovering edge cases.
- __Gas Optimization Insights__ – `forge snapshot` provides detailed gas reports.
- __Robust Debugging__ – `forge inspect` and `forge stack-trace` for analyzing transactions.
- __Flexible Script Execution__ – Deploy, verify, and interact with contracts.
- __Seamless EVM Interactions__ – Use `cast` for transactions, querying contract states, and fetching on-chain data.

## AI-Powered Development Workflow

- __Automated Code Reviews__ – AI-powered suggestions for best practices.
- __AI-Assisted Coding__ – Rules and contextual guidance for Solidity and TypeScript.
- __Streamlined UI Generation__ – v0.dev simplifies front-end development.
- __AI-Powered Database Design__ – Faster schema iteration with postgres.new.
- __Specialized Cursor Rules (`.cursor/rules`)__ – Tuned for this repository's conventions and quality standards, ensuring consistency and best practices.

### AI Tools Used

- [Cursor.so](https://cursor.so/) – AI-assisted development environment.
- [v0.dev](https://v0.dev/) – Automated UI generation.
- [postgres.new](https://postgres.new/) – AI-powered database schema design.
- [CodeRabbit.ai](https://coderabbit.ai/) – AI-driven code reviews.
- [Supabase.com](https://supabase.com/) – AI-powered backend tools.

## Quick Start

### Prerequisites

- Node.js 18+, pnpm, Foundry, Git

### Installation

```bash
npm install -g pnpm
curl -L https://foundry.paradigm.xyz | bash
foundryup
git clone https://github.com/blockmatic/basilic-evm.git
cd basilic-evm
pnpm install
```

### Development

```bash
pnpm backend    # Start Supabase & Ponder services
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm test       # Run test suite
```

## Backend Architecture

- __Supabase__ – Database, authentication, real-time services.
- __Ponder__ – Blockchain event indexing and processing.

For detailed information about our backend architecture, including how Ponder.sh and Supabase work together, database branching, and deployment workflows, please refer to [BACKEND.md](./BACKEND.md).

## Frontend Overview

The frontend is built with __Next.js 15__ and features:

- __React Components__ – Reusable UI building blocks with TypeScript
- __Web3 Integration__ – Custom hooks for wallet connection, contract interactions, and transaction management
- __Type Safety__ – End-to-end type safety with TypeScript and generated contract types
- __Modern Styling__ – Tailwind CSS for rapid UI development with utility classes
- __Performance__ – Server components, static optimization, and code splitting
- __Developer Experience__ – Hot reloading, error boundaries, and debugging tools

## Key Benefits

1. __Faster Development__ – Pre-configured stack accelerates iteration.
2. __Best Practices__ – Security and performance optimizations.
3. __Scalability__ – Modular and performance-focused.
4. __AI-Powered Efficiency__ – Automated workflows.
5. __Code Consistency__ – Shared configurations in monorepo.

## References

- [thirdweb Connect](https://thirdweb.com/connect) – A Web3 development framework offering streamlined wallet authentication, contract deployment, and seamless interaction with EVM-compatible chains.
- [wevm.dev](https://wevm.dev) – A suite of developer tools designed for EVM smart contract development, debugging, and seamless deployment across multiple networks.
- [Comparing Ethers.js and Viem/Wagmi](https://gaboesquivel.com/blog/2024-07-viem-wagmi-ethers) – A comparison of Ethers.js, Viem, and Wagmi, analyzing performance, usability, and ecosystem compatibility for full-stack Ethereum developers.
- [0x Protocol Gasless API Docs](https://0x.org/docs/gasless-api/introduction) – Documentation on implementing gasless swaps and order routing using 0x's smart order routing system.
- [EIP-2771: Secure Meta Transactions](https://eips.ethereum.org/EIPS/eip-2771) – Ethereum Improvement Proposal for meta-transactions, enabling gasless transactions through trusted relayers.
- [Codex API Documentation](https://www.codex.io/) – Developer guide for integrating Codex's decentralized and verifiable data indexing services with EVM applications.

## Contributing

We welcome contributions of all experience levels! Whether it's fixing typos, improving documentation, or contributing code, check out our [Contribution Guide](https://github.com/blockmatic/basilic-evm/blob/main/CONTRIBUTING.md).

- Report issues via [GitHub Issues](https://github.com/blockmatic/basilic-evm/issues)
- Submit PRs following our guidelines.

## License

This project is licensed under the MIT License.

