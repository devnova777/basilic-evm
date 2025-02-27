# @repo/tsconfig package

This package contains shared TypeScript configurations used across the monorepo.

## Configurations

### base.json
The base TypeScript configuration that all other configs extend from. It includes:
- ES2022 target
- Node module resolution
- Strict type checking
- Declaration file generation
- And other common settings

### reset.json 
Includes [@total-typescript/ts-reset](https://github.com/total-typescript/ts-reset) for improved TypeScript types.

### nextjs.json
Configuration specifically for Next.js projects.

### react-library.json
Configuration for React library packages.

## Usage

Reference these configs in your `tsconfig.json`:
