# @repo/tokens

The `@repo/tokens` package is a crucial part of our project architecture, designed to store and manage contract-related information and utilities. This README outlines the key components and usage of this package.

## Key Components

1. **Contract Maps**: This package contains mappings of contract addresses to their respective chain IDs, allowing for easy reference across different networks.

2. **Contract Metadata**: Stores essential metadata for each contract, including ABIs (Application Binary Interfaces) and other relevant information.

3. **Helper Functions**: Provides utility functions to interact with and manage contract data efficiently.

## Usage

The `@repo/tokens` package can be imported and used across different parts of the project, including the webapp, backend services, and other packages. It serves as a centralized source of truth for contract-related information.

## Best Practices

- Keep contract addresses and metadata up-to-date for all supported networks.
- Use TypeScript for strong typing of contract interfaces and helper functions.
- Document each helper function with clear JSDoc comments.
- Regularly review and update the package to ensure it aligns with the latest contract deployments and project requirements.

