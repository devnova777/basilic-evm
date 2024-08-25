# @repo/utils

The `@repo/utils` package is a crucial part of our project architecture, designed to provide reusable code and utilities across multiple applications and components of our project ecosystem. This README outlines the key components and usage of this package.

## Key Components

1. **Shared Utilities**: This package contains utility functions and helpers that can be used across different parts of the project, promoting code reuse and consistency.

2. **Common Types**: Stores shared TypeScript types and interfaces used throughout the project.

3. **Constants**: Houses project-wide constants and configuration values.

4. **Helper Functions**: Provides utility functions for common tasks that may be needed in multiple applications.

## Usage

The `@repo/utils` package can be imported and used across different parts of the project, including the webapp, backend services, and other packages. It serves as a centralized source for shared functionality and resources.

## Libraries

The `@repo/utils` package exports the following modules:

1. **crypto**: Contains cryptographic utilities and functions for handling encryption, decryption, hashing, and other crypto-related operations.

2. **error**: Provides error handling utilities, custom error classes, and error logging functionalities to standardize error management across the project.

3. **evm**: Includes Ethereum Virtual Machine (EVM) specific utilities, helpers for interacting with smart contracts, and EVM-related data structures.

4. **browser**: Offers browser-specific utilities and helpers for client-side operations, such as local storage management, cookie handling, and browser detection.

5. **promise**: Contains utilities for working with Promises, including helper functions for async operations, Promise chaining, and error handling in asynchronous code.

Each of these modules is designed to provide reusable functionality across different parts of the project, promoting code consistency and reducing duplication.


## Best Practices

- Keep utilities simple, focused, and well-documented.
- Use TypeScript for strong typing of function inputs and outputs.
- Document each function with clear JSDoc comments.
- Regularly review and update the package to ensure it aligns with the latest project requirements.
- Consider the scope of usage, potential for future reuse, and impact on maintainability when deciding to add new utilities to this package.
- Ensure proper exporting of utilities and update all existing references when moving a utility from a specific application to this shared package.

## Flexibility and Scalability

The `@repo/utils` package promotes modularity and scalability in our project architecture. It allows for easy sharing and maintenance of utilities across different applications, reducing code duplication and improving overall project consistency.
