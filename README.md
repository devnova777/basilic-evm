# BasilicEVM: EVM Development Stack

## Overview

A performance-optimized development stack for EVM applications. Built with Foundry, viem/wagmi, and Next.js 15.

## Core Features

- Foundry-based contract development with fuzzing and gas optimization
- Type-safe contract interactions with viem/wagmi
- Modular monorepo structure with TypeScript
- Indexed chain data via Ponder
- Supabase for off-chain state and auth

## Stack Components

- __Contracts__: Foundry, Solidity ^0.8.19
- __Chain Integration__: viem/wagmi, Alchemy RPC
- __Frontend__: Next.js 15, React Server Components
- __Data Layer__: Ponder indexing, Supabase

## Project Structure

### Apps
- __/apps/web__ - Next.js frontend
- __/apps/ponder__ - Chain indexing service

### Packages
- __/packages/core__ - Chain interactions, contract ABIs
- __/packages/react__ - Web3 React hooks
- __/packages/supabase__ - Database/auth integration
- __/packages/lib__ - Shared utilities

## Development Setup

### Requirements
- Node.js 18+
- pnpm
- Foundry
- Git

### Quick Start

```bash
npm install -g pnpm
curl -L https://foundry.paradigm.xyz | bash
foundryup
git clone https://github.com/blockmatic/basilic-evm.git
cd basilic-evm
pnpm install
```

For detailed information about our backend architecture, including how Ponder.sh and Supabase work together, database branching, and deployment workflows, please refer to [BACKEND.md](./BACKEND.md).

### Development Commands

```bash
pnpm backend    # Start Supabase & Ponder 
pnpm dev        # Dev server
pnpm build      # Production build
pnpm test       # Run tests
```

## Technical References

- [viem](https://viem.sh)
- [wagmi](https://wagmi.sh)
- [tanstack](https://tanstack.com)
- [Foundry](https://book.getfoundry.sh)
- [EIP-2771: Meta Transactions](https://eips.ethereum.org/EIPS/eip-2771)
- [0x Protocol Gasless API](https://0x.org/docs/gasless-api/introduction)
- [Next.js](https://nextjs.org/docs)
- [Ponder](https://ponder.sh/docs)
- [Supabase](https://supabase.com/docs)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## License

MIT License

