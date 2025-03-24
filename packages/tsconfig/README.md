# @repo/tsconfig package

This package contains shared TypeScript configurations used across the monorepo.

## Configurations

### reset.json
The most basic configuration that includes [@total-typescript/ts-reset](https://github.com/total-typescript/ts-reset) for improved TypeScript types. This serves as the foundation for all other configurations.

### base.json
The base TypeScript configuration that all other configs extend from. It includes common settings for all TypeScript projects:
- ES2022 target
- Strict type checking
- Declaration file generation
- Common compiler options
- Module interoperability settings
- Type safety features

### node.json
Configuration specifically for Node.js projects. Extends base.json and adds:
- Node-specific module resolution (NodeNext)
- Build output settings (dist directory)
- Source directory configuration
- Node.js specific compiler options

### nextjs.json
Configuration specifically for Next.js projects. Extends base.json and adds:
- Next.js specific plugin
- ESNext module system
- Bundler module resolution
- JSX support
- No emit (Next.js handles compilation)

### react-library.json
Configuration for React library packages. Extends base.json and adds:
- React JSX support

## Usage

Reference these configs in your `tsconfig.json`:

```json
{
  "extends": "@repo/tsconfig/base.json"
}
```

For specific project types, use their respective configs:

```json
{
  "extends": "@repo/tsconfig/node.json"  // For Node.js projects
}
```

```json
{
  "extends": "@repo/tsconfig/nextjs.json"  // For Next.js projects
}
```

```json
{
  "extends": "@repo/tsconfig/react-library.json"  // For React libraries
}
```
