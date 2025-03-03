# Development Rules

This directory contains development standards and Rules for different aspects of the codebase. These rules are used by the AI assistant to help maintain consistency and quality across the project.

## Available Rules

### Frontend Development

- **[nextjs.mdc](./nextjs.mdc)**: Next.js development standards and patterns.
- **[react-hooks.mdc](./react-hooks.mdc)**: React hooks patterns and Rules.
- **[tailwind.mdc](./tailwind.mdc)**: Tailwind CSS and UI component guidelines.
- **[typescript.mdc](./typescript.mdc)**: TypeScript coding standards and Rules.
- **[web-vitals-perf.mdc](./web-vitals-perf.mdc)**: Web Vitals and performance optimization guidelines.

### Web3 Integration

- **[viem.mdc](./viem.mdc)**: Viem v2 integration patterns and Rules.
- **[wagmi.mdc](./wagmi.mdc)**: Web3 integration patterns using Wagmi v2.
- **[solidity.mdc](./solidity.mdc)**: Solidity development standards with Foundry.

### Data Layer

- **[ponder.mdc](./ponder.mdc)**: Ponder indexing standards and Rules.

## Usage

These rules are seamlessly applied when files matching the specified glob patterns are accessed, the AI assistant is requested to assist with code pertaining to a particular technology, or when the AI assistant provides code suggestions.

The rules ensure that AI-driven suggestions and enforcement adhere to the Rules detailed in **[Cursor AI Rules](https://docs.cursor.com/context/rules-for-ai)**.

## Rule Format

Each rule file follows this format:

```markdown
---
description: Brief description of the rule's purpose
globs: "**/*.{extension}" # File patterns this rule applies to
---

# Title

## Section 1
Guidelines and examples...

## Section 2
More specific rules...
```

## Contributing

When adding new files or new rules in existing files:

1. Follow the established format.
2. Include clear examples and explanations.
3. Define appropriate glob patterns.
4. Add the new file or rule to this README.
5. Ensure consistency with existing rules and files.

Before submitting a new rule, verify its effectiveness by testing it with Cursor’s AI-powered review workflow and referring to **[Cursor AI Rules](https://docs.cursor.com/context/rules-for-ai)** for proper formatting and integration.

## Maintenance

Rules should be regularly reviewed and updated to:

- Keep up with the latest Rules.
- Incorporate team feedback.
- Address common issues.
- Align with project evolution.

Use AI-assisted linting and validation tools within Cursor to ensure that all rules remain up-to-date and effective.



