# BasilicEVM: Modern EVM Development Stack

## Overview

**BasilicEVM** is a high-performance development stack designed for building cutting-edge **EVM-based applications** with speed, modularity, and AI-powered enhancements. Whether you're building decentralized applications across DeFi, NFTs, GameFi, governance or infrastructure, BasilicEVM provides a streamlined and scalable environment for rapid development.

## Features

- 🧩 **Modular Architecture** – Customizable for specific needs.
- 👛 **Wallet Integration** – Secure authentication and transactions.
- 🔨 **Foundry-Powered Smart Contracts** – High-speed Solidity compilation and testing.
- ⚡ **Optimized Workflow** – Turbo monorepo, AI-assisted development, and best practices.
- 🤖 **AI-Enhanced Development** – Automation for faster coding and reviews.
- 🛠️ **TypeScript Monorepo** – Shared configurations and package management.
- 📚 **Comprehensive Documentation** – Best practices and guides.

## Core Stack

- **Smart Contracts**: Foundry for high-speed compilation and testing.
- **Full-Stack Framework**: Next.js 15 with React Server Components.
- **Styling & UI**: Tailwind CSS and shadcn/ui.
- **Blockchain Integration**: viem, wagmi, thirdweb, and Alchemy.
- **Monorepo Management**: Turbo for scalable project organization.
- **Linting & Formatting**: Biome, a modern developer-friendly toolchain.

## Project Structure

## Applications

- **Web (********`/apps/web`********\*\*\*\*)** – Next.js front-end.
- **Ponder (********`/apps/ponder`********\*\*\*\*)** – Blockchain event indexing.

## Packages

- **UI (********`/packages/ui`********\*\*\*\*)** – Shadcn/ui components, design system.
- **Core (********`/packages/core`********\*\*\*\*)** – Shared core utilities.
- **React (********`/packages/react`********\*\*\*\*)** – React hooks.
- **Supabase (********`/packages/supabase`********\*\*\*\*)** – Database and authentication.
- **Errors (********`/packages/errors`********\*\*\*\*)** – Standardized error handling.
- **Lib (********`/packages/lib`********\*\*\*\*)** – Utility functions.
- **Next (********`/packages/next`********\*\*\*\*)** – Next.js utilities.
- **TypeScript Config (********`/packages/tsconfig`********\*\*\*\*)** – Shared configurations.

## Foundry

A **high-performance toolkit** for Solidity development, built with Rust for speed and efficiency. Key features:

- **Blazing-Fast Compilation & Testing** – Significantly faster than Hardhat or Truffle.
- **Advanced Fuzz Testing** – `forge test --fuzz-runs` for uncovering edge cases.
- **Gas Optimization Insights** – `forge snapshot` provides detailed gas reports.
- **Robust Debugging** – `forge inspect` and `forge stack-trace` for analyzing transactions.
- **Flexible Script Execution** – Deploy, verify, and interact with contracts.
- **Seamless EVM Interactions** – Use `cast` for transactions, querying contract states, and fetching on-chain data.

## AI-Powered Development Workflow

- **Automated Code Reviews** – AI-powered suggestions for best practices.
- **AI-Assisted Coding** – Rules and contextual guidance for Solidity and TypeScript.
- **Streamlined UI Generation** – v0.dev simplifies front-end development.
- **AI-Powered Database Design** – Faster schema iteration with postgres.new.
- **Specialized Cursor Rules (********`.cursor/rules`********\*\*\*\*)** – Tuned for this repository's conventions and quality standards, ensuring consistency and best practices.

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

- **Supabase** – Database, authentication, real-time services.
- **Ponder** – Blockchain event indexing and processing.

For detailed information about our backend architecture, including how Ponder.sh and Supabase work together, database branching, and deployment workflows, please refer to [BACKEND.md](./BACKEND.md).

## Frontend Overview

The frontend is built with **Next.js 14** and features:

- **React Components** – Reusable UI building blocks with TypeScript
- **Web3 Integration** – Custom hooks for wallet connection, contract interactions, and transaction management
- **Type Safety** – End-to-end type safety with TypeScript and generated contract types
- **Modern Styling** – Tailwind CSS for rapid UI development with utility classes
- **Performance** – Server components, static optimization, and code splitting
- **Developer Experience** – Hot reloading, error boundaries, and debugging tools

## Key Benefits

1. **Faster Development** – Pre-configured stack accelerates iteration.
2. **Best Practices** – Security and performance optimizations.
3. **Scalability** – Modular and performance-focused.
4. **AI-Powered Efficiency** – Automated workflows.
5. **Code Consistency** – Shared configurations in monorepo.

## References

- [thirdweb Connect](https://thirdweb.com/connect) – A Web3 development framework offering streamlined wallet authentication, contract deployment, and seamless interaction with EVM-compatible chains.
- [wevm.dev](https://wevm.dev) – A suite of developer tools designed for EVM smart contract development, debugging, and seamless deployment across multiple networks.
- [Comparing Ethers.js and Viem/Wagmi](https://gaboesquivel.com/blog/2024-07-viem-wagmi-ethers) – A comparison of Ethers.js, Viem, and Wagmi, analyzing performance, usability, and ecosystem compatibility for full-stack Ethereum developers.
- [0x Protocol Gasless API Docs](https://0x.org/docs/gasless-api/introduction) – Documentation on implementing gasless swaps and order routing using 0x's smart order routing system.
- [EIP-2771: Secure Meta Transactions](https://eips.ethereum.org/EIPS/eip-2771) – Ethereum Improvement Proposal for meta-transactions, enabling gasless transactions through trusted relayers.
- [Codex API Documentation](https://www.codex.io/) – Developer guide for integrating Codex's decentralized and verifiable data indexing services with EVM applications.


## Contributing

We welcome contributions of all experience levels! Whether it's fixing typos, improving documentation, or contributing code, check out our [Contribution Guide](https://github.com/blockmatic/basilic-evm/CONTRIBUTING.md)[lines](https://github.com/blockmatic/basilic-evm/issues)[.](https://github.com/blockmatic/basilic-evm/issues)

- [Rep](https://github.com/blockmatic/basilic-evm/issues)ort issues via [GitHub Issues](https://github.com/blockmatic/basilic-evm/issues).
- Submit PRs following our guidelines.

## License

This project is licensed under the MIT License.

