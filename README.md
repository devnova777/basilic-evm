# BasilicaEVM: Modern EVM Development Stack

<img width="892" alt="image" src="https://697788980-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FZ9TDrZUmPgINqUrCxxId%2Fuploads%2Fae1Zeh49ADF1WWrQ5PIW%2Fimage.png?alt=media&token=daf2165f-f530-4f4e-875b-b6d936012a10">


## Overview

BasilicaEVM is a comprehensive development stack designed for building modern, performant, and scalable EVM-based applications. It combines cutting-edge web technologies with robust blockchain integration, providing developers with a powerful toolkit for creating decentralized applications (dApps) and DeFi platforms. Leveraging the best and fastest development tools for linting and code quality, BasilicaEVM ensures a smooth and efficient development process, enabling teams to focus on building innovative blockchain solutions.

## The BasilicaEVM Stack

At its core, the BasilicaEVM Stack leverages:

- **Hardhat**: Robust framework for EVM smart contract development, testing, and deployment.
- **Turbo Monorepo**: Efficient codebase management and optimized build processes for large-scale projects.
- **Next.js 14**: Cutting-edge full-stack development with React Server Components, App Router, and server actions.
- **TypeScript**: Ensuring type safety and improved developer experience throughout the project.
- **Tailwind CSS & shadcn/ui**: Rapid, customizable UI development with utility-first CSS and accessible component primitives.
- **EVM Integration**:
  - **viem**: Type-safe, lightweight library for low-level EVM interactions.
  - **wagmi**: React hooks for seamless EVM integration.
  - **Rainbow Kit**: Polished, customizable wallet connection UI for enhanced user experience.
- **Biome**: Modern, fast, and extensible toolchain for web projects, providing linting, formatting, and more.
- **Turbo Monorepo**: Efficient codebase management and optimized build processes for large-scale projects.
- **Additional Tools**:
  - **TanStack Query**: Powerful data fetching, caching, and state management for optimized performance.
  - **Zod**: Runtime type checking and validation.
  - **date-fns**: Comprehensive date manipulation library.
  - **Framer Motion**: Production-ready animations for fluid user interfaces.
  - **Radix UI**: Unstyled, accessible components for building high-quality design systems.


This meticulously curated tech stack is designed to work in harmony, addressing common challenges in EVM application development while offering flexibility for project-specific requirements. The integration of Biome further enhances code quality and development workflow, ensuring a consistent and efficient development experience across the entire project.

## Project Structure

### Applications

- **Webapp (`/apps/webapp`)**: The main front-end application for user interactions. [More details](/apps/webapp/README.md)
- **Faucet (`/apps/faucet`)**: Utility for distributing test tokens in development environments.

### Packages

- **Config TypeScript (`/packages/config-typescript`)**: Shared TypeScript configuration.
- **Project Contracts (`/packages/app-contracts`)**: Smart contract interfaces and utilities.
- **Project Lib (`/packages/project-lib`)**: Reusable code library for the BasilicaEVM platform.

### Hardhat (`/hardhat`)

Contains configurations and scripts for smart contract development, testing, and deployment.

## Development Conventions

We utilize the Cursor.so AI editor to enhance development speed. Our code style guidelines are detailed in the [.cursorrules](./.cursorrules) file.

Key Cursor.so commands:
- **Prompt an edit**: Highlight code and press Cmd+K
- **Accept autocomplete**: Press Tab when a suggestion appears
- **Ask a question**: Use Cmd+L to open chat, @ to import files/docs
- **Focus AI on code**: Highlight code and press Cmd+Shift+L

For more features, visit cursor.sh/features. For support, post on forum.cursor.sh.

## Requirements

- **Bun**: Faster JavaScript runtime for enhanced development efficiency.

## Contributing

We welcome contributions from the community. Whether it's code contributions, feedback, or suggestions, your input is valuable to us.

## License

This project is licensed under the MIT License.
