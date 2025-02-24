# BasilicEVM: Modern EVM Development Stack

<img width="892" alt="image" src="https://697788980-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZ9TDrZUmPgINqUrCxxId%2Fuploads%2Fae1Zeh49ADF1WWrQ5PIW%2Fimage.png?alt=media&token=daf2165f-f530-4f4e-875b-b6d936012a10">

## Overview

BasilicEVM is a comprehensive development stack designed for building modern, performant, and scalable EVM-based applications. It combines cutting-edge web technologies with robust blockchain integration, providing developers with a powerful toolkit for creating decentralized applications (dApps) and DeFi platforms. Leveraging the best and fastest development tools, BasilicEVM ensures a smooth and efficient development process, enabling teams to focus on building innovative Web3 products.

## Features

- 🧩 **Modular Architecture:** Flexible and modular architecture allows for easy customization and extension based on your specific project needs.

- 👛 **Wallet Integration:** Out-of-the-box wallet integration for secure transactions and user authentication.

- 🔨 **Foundry:** Robust framework for EVM smart contract development, testing, and deployment.
  
- ⚡ **Efficient Dev Workflow:** State-of-the-art devtools and workflows for rapid prototyping, testing, and deployment.

- 🤖 **AI-Assisted Development:** Clear conventions and AI-assisted development using cursor.so and v0.dev.
  
- 🛠️ **TypeScript Monorepo:** A monorepo for TypeScript projects, with a shared TypeScript configuration and a shared package index.
  
- 📚 **Documentation:** Detailed documentation covering project structure, conventions, and best practices.


## The BasilicEVM Stack

At its core, the BasilicEVM Stack leverages:

- **Foundry**: Robust framework for EVM smart contract development, testing, and deployment.
- **Next.js 15**: Cutting-edge full-stack development with React Server Components, App Router, and server actions.
- **Tailwind CSS & shadcn/ui**: Rapid, customizable UI development with utility-first CSS and accessible component primitives.
- **EVM Integration**:
  - **viem**: Type-safe, lightweight library for low-level EVM interactions.
  - **wagmi**: React hooks for seamless EVM integration.
  - **thirdweb**: Third Web connect wallet UI, with account abstraction.
  - **Alchemy:** Blockchain event listeners and data indexing.
- **Turbo Monorepo**: Efficient codebase management and optimized build processes for large-scale projects.
- **Biome**: Modern, fast, and extensible toolchain for web projects, providing linting, formatting, and more.

## Project Structure

For detailed information on each component, please refer to their respective README files.

### Applications

- **Web (`/apps/web`)**: Main Next.js front-end application. [Details](/apps/web/README.md)
- **Ponder (`/apps/ponder`)**: Ponder is a tool for indexing smart contracts data. [Details](/apps/ponder/README.md)

### Packages
- **Supabase (`/packages/supabase`)**: Supabase package. [Details](/packages/supabase/README.md)
- **Errors (`/packages/errors`)**: Errors package. [Details](/packages/errors/README.md)
- **lib (`/packages/lib`)**: Shared pure functions utils library. [Details](/packages/lib/README.md)
- **TypeScript Config (`/packages/tsconfig`)**: Shared TypeScript configurations.

### Foundry (`/foundry`)

Contains configurations and scripts for smart contract development, testing, and deployment. [More details](/foundry/README.md)

## Development Conventions and AI Workflow

We leverage various AI-powered tools to enhance development speed and efficiency:

1. **[Cursor.so](https://cursor.so/) AI Editor**: Our primary code editor for AI-assisted development. Our code style guidelines are detailed in the [.cursorrules](./.cursorrules) file. It is crucial that all team members read and understand these conventions to maintain consistency and efficiency in our development process.

   Key Cursor.so commands:
   - **Prompt an edit**: Highlight code and press Cmd+K
   - **Accept autocomplete**: Press Tab when a suggestion appears
   - **Ask a question**: Use Cmd+L to open chat, @ to import files/docs
   - **Focus AI on code**: Highlight code and press Cmd+Shift+L

   For more features, visit [cursor.sh/features](https://cursor.sh/features). For support, post on [forum.cursor.sh](https://forum.cursor.sh/).

   We recommend using the Claude Sonnet API key in Cursor settings, as this model has shown superiority when dealing with code.

2. **[v0.dev](https://v0.dev/)**: We use this tool to rapidly generate markup for components, streamlining UI development.

3. **[postgres.new](https://postgres.new/)**: This tool assists in database work, allowing for quick schema design and query testing.

These AI-powered tools significantly accelerate our development process, enabling us to focus more on core functionality and complex problem-solving.

## Quick Start

1. **Prerequisites**
   - Node.js 18+
   - pnpm
   - Foundry
   - Git

2. **Installation**
   ```bash
   # Install pnpm if you haven't already
   npm install -g pnpm

   # Install Foundry
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   
   # Clone and install dependencies
   git clone https://github.com/your-username/basilic-evm.git
   cd basilic-evm
   pnpm install
   ```

3. **Development**
   ```bash
   pnpm dev        # Start development server
   pnpm test       # Run tests
   pnpm build      # Build for production
   ```

## Key Benefits

BasilicEVM provides a state-of-the-art architecture, carefully curated tech stack, and industry-leading patterns and practices, allowing developers to:

1. **Focus on Features**: By providing a robust, pre-configured development environment, BasilicEVM enables teams to concentrate on building unique features and business logic rather than setting up infrastructure.

2. **Reduce Time to Market**: With its optimized toolchain and ready-to-use components, BasilicEVM significantly accelerates the development process, helping projects launch faster and iterate more quickly.

3. **Ensure Best Practices**: The stack incorporates established best practices for EVM development, security, and performance, reducing the risk of common pitfalls and vulnerabilities.

4. **Scale Efficiently**: The modular architecture and performance-optimized tools allow applications to scale seamlessly as user bases grow.

5. **Maintain Consistency**: Shared configurations and standardized patterns across the monorepo ensure code consistency and ease of maintenance.

By leveraging BasilicEVM, development teams can bypass the time-consuming process of assembling and integrating a modern Web3 stack, instead diving directly into creating innovative blockchain-based solutions with confidence.

## Other Recommended Services

- 🔄 **0x Integration:** Built-in support for 0x API v2, enabling secure, gasless asset transfers, swaps, and liquidity aggregation.
- 📊 **Codex Integration:** Streamline your dApp's data management and indexing with Codex, optimizing performance and ensuring scalability.
- 📊 **Space and Time:** Blockchain for ZK-Proven Data - SQL for smart contracts with ZK proofs, APIs to join onchain/offchain data, and sub-second indexing with realtime blockchain data.
- 🔄 **Trigger.dev:** Trigger.dev is a platform for building and running background jobs.

## References

- [Introducing BasilicEVM](https://gaboesquivel.com/blog/2024-08-basilic-evm)
- [0x Protocol Gasless API Documentation](https://0x.org/docs/gasless-api/introduction)
- [0x Protocol Gasless API Guides](https://0x.org/docs/gasless-api/guides/understanding-gasless-api)
- [EIP-2771: Secure Protocol for Native Meta Transactions](https://eips.ethereum.org/EIPS/eip-2771)
- [Codex API Documentation](https://www.codex.io/)
- [TypeScript tooling for Ethereum](https://github.com/wevm)
- [Comparing Ethers.js and Viem/Wagmi](https://gaboesquivel.com/blog/2024-07-viem-wagmi-ethers)

## Contributing

We welcome contributions from the community. Whether it's code contributions, feedback, or suggestions, your input is valuable to us.

## License

This project is licensed under the MIT License.
