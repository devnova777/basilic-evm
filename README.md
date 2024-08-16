# BasilicaEVM: Modern EVM Development Stack

<img width="892" alt="image" src="https://697788980-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZ9TDrZUmPgINqUrCxxId%2Fuploads%2Fae1Zeh49ADF1WWrQ5PIW%2Fimage.png?alt=media&token=daf2165f-f530-4f4e-875b-b6d936012a10">

## Overview

BasilicaEVM is a comprehensive development stack designed for building modern, performant, and scalable EVM-based applications. It combines cutting-edge web technologies with robust blockchain integration, providing developers with a powerful toolkit for creating decentralized applications (dApps) and DeFi platforms. Leveraging the best and fastest development tools, BasilicaEVM ensures a smooth and efficient development process, enabling teams to focus on building innovative Web3 products.

## Features

- **Gasless Swaps**: Revolutionizing user experience by eliminating gas-related friction.
  - Reduces failed trades by up to 85% compared to traditional DEXes.
  - Confirms transactions on-chain an average of 1 block earlier.
  - Protects thousands of trades from MEV attacks.
  - Powered by Tx Relay API, similar to Matcha Auto's implementation.
  - Simplifies the trading experience by removing gas complexities.
  - Significantly reduces trading funnel drop-offs caused by insufficient gas.

- **Blockchain data insights**: Empowering developers with comprehensive and real-time blockchain analytics.
  - Comprehensive data coverage:
    - 6M+ TOKENS: From established (WETH, SOL, WBNB, ARB) to emerging alt-coins.
    - 1B+ NFTs: Complete data for collections across all supported networks.
    - 60+ NETWORKS: Including Ethereum, Solana, Arbitrum, Base, Optimism, Blast, Avalanche, Polygon, and more.
  - Simplifies complex blockchain data parsing, eliminating the need for custom indexers.
  - Provides instant access to:
    - Real-time and historical token & NFT pricing in USD.
    - Comprehensive, real-time charts with fast and accurate data.
    - Aggregated data including volume, liquidity, and unique wallet information.
    - Detailed holder and balance information.
  - Enables rapid development of data-rich blockchain applications without infrastructure overhead.
  - Facilitates informed decision-making through deep insights into market trends and user behaviors.

- **Wallet integration**: Seamless connection to blockchain wallets for secure transactions and user authentication.
   - Out of the box support for RainbowKit, a popular wallet connection library that provides a polished and customizable UI for connecting to various wallets.
   - Effortless integration with EVM chains using viem and wagmi, modern EVM toolkits that offer type-safe interactions and React hooks for blockchain functionality.

- **Modern Stack**: Cutting-edge front-end technologies enabling:
  - Lightning-fast initial page loads and seamless transitions between pages
  - Efficient server-side rendering for improved SEO and performance
  - Secure server-side operations with robust authentication and encryption protocols
  - Enhanced data protection through server-side validation and sanitization
  - Scalable server architecture supporting high-concurrency operations
  - Rapid UI development with flexible styling options
  - Consistent and accessible design patterns across the application
  - Optimized build processes for large-scale projects
  - Rapid prototyping capabilities for quick iteration and testing
  - Clear conventions and AI-assisted development using cursor.so
  - Fast prototyping available through v0.dev
   - Efficient code sharing and management across multiple applications
  - Fast and thorough code quality checks

## The BasilicaEVM Stack

At its core, the BasilicaEVM Stack leverages:

- **Turbo Monorepo**: Efficient codebase management and optimized build processes for large-scale projects.
- **Bun**: Ultra-fast JavaScript runtime, package manager, and build tool, enhancing development speed and efficiency.
- **Biome**: Modern, fast, and extensible toolchain for web projects, providing linting, formatting, and more.
- **Hardhat**: Robust framework for EVM smart contract development, testing, and deployment.
- **Next.js 14**: Cutting-edge full-stack development with React Server Components, App Router, and server actions.
- **Tailwind CSS & shadcn/ui**: Rapid, customizable UI development with utility-first CSS and accessible component primitives.
- **EVM Integration**:
  - **viem**: Type-safe, lightweight library for low-level EVM interactions.
  - **wagmi**: React hooks for seamless EVM integration.
  - **Rainbow Kit**: Polished, customizable wallet connection UI for enhanced user experience.
  - **Codex API**: Integration with codex.io for enhanced blockchain data and insights.
  - **0x**: Powerful, flexible, and efficient Ethereum development framework for building decentralized applications.

## Project Structure

For detailed information on each component, please refer to their respective README files.

### Applications

- **Webapp (`/apps/webapp`)**: The main front-end application for user interactions. [More details](/apps/webapp/README.md)
- **Faucet (`/apps/faucet`)**: Utility for distributing test tokens in development environments. [More details](/apps/faucet/README.md)

### Packages

- **Config TypeScript (`/packages/config-typescript`)**: Shared TypeScript configurations. 
- **Project Contracts (`/packages/app-contracts`)**: Smart contract interfaces, data and utilities. [More details](/packages/app-contracts/README.md)
- **Project Lib (`/packages/project-lib`)**: Reusable code library. [More details](/packages/project-lib/README.md)

### Hardhat (`/hardhat`)

Contains configurations and scripts for smart contract development, testing, and deployment. [More details](/hardhat/README.md)

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

## Installation

1. Install Bun globally:
   ```
   curl -fsSL https://bun.sh/install | bash
   ```

2. Clone the repository:
   ```
   git clone https://github.com/your-username/basilica-eth.git
   cd basilica-eth
   ```

3. Install dependencies and start the development server:
   ```
   bun install
   bun dev
   ```

This setup provides a faster JavaScript runtime and efficient package management for enhanced development efficiency.

## Key Benefits

BasilicaEVM provides a state-of-the-art architecture, carefully curated tech stack, and industry-leading patterns and practices, allowing developers to:

1. **Focus on Features**: By providing a robust, pre-configured development environment, BasilicaEVM enables teams to concentrate on building unique features and business logic rather than setting up infrastructure.

2. **Reduce Time to Market**: With its optimized toolchain and ready-to-use components, BasilicaEVM significantly accelerates the development process, helping projects launch faster and iterate more quickly.

3. **Ensure Best Practices**: The stack incorporates established best practices for EVM development, security, and performance, reducing the risk of common pitfalls and vulnerabilities.

4. **Scale Efficiently**: The modular architecture and performance-optimized tools allow applications to scale seamlessly as user bases grow.

5. **Maintain Consistency**: Shared configurations and standardized patterns across the monorepo ensure code consistency and ease of maintenance.

By leveraging BasilicaEVM, development teams can bypass the time-consuming process of assembling and integrating a modern Web3 stack, instead diving directly into creating innovative blockchain-based solutions with confidence.


## Contributing

We welcome contributions from the community. Whether it's code contributions, feedback, or suggestions, your input is valuable to us.

## License

This project is licensed under the MIT License.
