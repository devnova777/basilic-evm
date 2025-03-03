# @repo/ui package

A TypeScript package that provides reusable UI components and utilities built with Tailwind CSS and shadcn/ui.

## Features

- Modern, accessible UI components
- Built with Tailwind CSS and Radix UI primitives
- Fully customizable with consistent design tokens
- Type-safe component props with TypeScript
- Responsive and mobile-first design
- Dark mode support out of the box

## Installation

```bash
pnpm install @repo/ui
```

## Usage

```typescript
import { Button } from '@repo/ui'

function MyComponent() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}
```

## Best Practices

- Use semantic HTML elements for better accessibility
- Follow mobile-first responsive design principles
- Maintain consistent spacing and typography using design tokens
- Ensure proper ARIA attributes for interactive components
- Test components across different viewports and themes
- Document component props and usage examples

## Components

The package hosts the following components:

- Button variants (primary, secondary, ghost)
- Form controls (input, select, checkbox)
- Layout components (container, grid, stack)
- Navigation elements (menu, tabs, breadcrumbs)
- Feedback indicators (alert, toast, progress)
- Data display (card, table, list)

## Contributing

Please refer to the root [CONTRIBUTING.md](../../CONTRIBUTING.md) for development guidelines.


