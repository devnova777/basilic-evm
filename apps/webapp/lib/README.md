# Lib Folder

The `lib/` directory in this Next.js application is designed to house functions, constants, and configuration files specific to this webapp. For shared resources across all projects, please refer to the `@repo/project-lib` package.

## Key Principles

1. **App-Specific Functions**: Functions in this lib directory should be relevant only to this specific Next.js application.

2. **Local Constants**: This folder contains constant values used within this webapp, promoting consistency and ease of maintenance for app-specific data.

3. **App Configuration**: Configuration files stored here are specific to this Next.js application, allowing for easy management of app-wide settings.

4. **App-Specific Utilities**: Utility functions that are only used within this webapp are kept in this directory.

## Best Practices

- Keep functions simple, focused, and well-documented.
- Use TypeScript for strong typing of function inputs and outputs.
- Document each function with clear JSDoc comments.
- Avoid any direct interactions with external APIs or state management within this folder. Use the `services/` directory for API interactions and state management instead.
- Regularly review and update the contents to ensure they align with the latest application requirements.
- For shared resources across projects, use the `@repo/project-lib` package instead of this local lib folder.

By adhering to these principles and practices, we maintain a clean, efficient, and easily maintainable library of app-specific resources while leveraging shared resources from `@repo/project-lib` for cross-project functionality.