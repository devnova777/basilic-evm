# BasilicaEVM Webapp

The BasilicaEVM Webapp is a Next.js 14 application designed for building modern, performant, and scalable Ethereum-based web interfaces. It leverages the latest Next.js features and integrates seamlessly with blockchain technologies.

This webapp is designed to be modular and flexible, allowing developers to easily adapt it for various Ethereum-based projects, from simple dApps to complex DeFi platforms.

## Tech Stack

- [Next.js](https://nextjs.org) 14, with React Server Components, App Router, and server actions.
  - [next-themes](https://github.com/pacocoursey/next-themes): Theme management for Next.js.
  - [negotiator](https://github.com/jshttp/negotiator): HTTP content negotiation library.
  - [nuqs](https://github.com/47ng/nuqs): Next.js URL query string management.
  - [@next/env](https://github.com/vercel/next.js/tree/canary/packages/next-env): Environment variable loading for Next.js.
  - [nookies](https://github.com/maticzav/nookies): Cookie management for Next.js.
  - [@next/third-parties](https://github.com/vercel/next.js/tree/canary/packages/third-parties): Third-party integrations for Next.js.
  - [@vercel/analytics](https://vercel.com/analytics): Analytics for Vercel-hosted applications.
  - [@vercel/speed-insights](https://vercel.com/docs/speed-insights): Performance monitoring for Vercel deployments.
  - [@next/bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer): Analyzer for Next.js bundle sizes.
  - [server-only](https://github.com/vercel/server-only): Utility for server-side only code.
  - [sharp](https://sharp.pixelplumbing.com/): High-performance image processing.
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com).
  - [Radix UI](https://radix-ui.com) for headless component primitives.
  - [class-variance-authority](https://cva.style/docs): Utility for creating variant classes.
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin): Plugin for beautiful typographic defaults.
  - [clsx](https://github.com/lukeed/clsx): Utility for constructing className strings.
- [viem](https://viem.sh/): TypeScript interface for Ethereum.
- [wagmi](https://wagmi.sh/): React hooks for Ethereum.
  - [@wagmi/connectors](https://wagmi.sh/react/connectors): Wallet connectors for wagmi.
  - [@rainbow-me/rainbowkit](https://www.rainbowkit.com/): Wallet connection UI for Ethereum dApps.
- [@tanstack/react-query](https://tanstack.com/query/latest): Powerful asynchronous state management for React.
- [lodash](https://lodash.com/): Utility library for common programming tasks.
- [date-fns](https://date-fns.org/): Modern JavaScript date utility library.
- [framer-motion](https://www.framer.com/motion/): Animation library for React.
- [lucide-react](https://lucide.dev/): Icon library for React applications.
- [mini-svg-data-uri](https://github.com/tigt/mini-svg-data-uri): Optimizes SVGs for data URIs.
- [zod](https://zod.dev/): TypeScript-first schema validation.
- [@repo/project-lib](workspace:*): Internal project library.
- [@repo/project-contracts](workspace:*): Smart contract interfaces and utilities.
- [@radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/utilities/slot): Utility component for flexible composition.
- [@blockmatic/hooks-utils](https://github.com/blockmatic/hooks-utils): A collection of useful React hooks.
- [pino-pretty](https://github.com/pinojs/pino-pretty): Prettifier for Pino logs. WalletConnect uses pino for logging.
- [react-device-detect](https://github.com/duskload/react-device-detect): Device detection for React applications.
- [react-hook-form](https://react-hook-form.com/): Performant form management for React.
  - [@hookform/resolvers](https://github.com/react-hook-form/resolvers): Validation resolvers for React Hook Form.
- [react-hot-toast](https://react-hot-toast.com/): Lightweight toast notifications for React.
- [react-wrap-balancer](https://github.com/shuding/react-wrap-balancer): Text wrapping component for React.
- [uuid](https://github.com/uuidjs/uuid): UUID generation library.
- [vconsole](https://github.com/Tencent/vConsole): Mobile-friendly console for debugging.


## Error Handling

This section outlines the error handling strategies implemented in the application:

1. **Server Actions**: Expected errors are modeled as return values, avoiding try/catch for predictable scenarios. `useActionState` manages these errors and communicates them to the client.

2. **Error Boundaries**: Unexpected errors are handled using error boundaries implemented in `error.tsx` and `global-error.tsx`, providing fallback UIs.

3. **Form Validation**: `useActionState` is combined with `react-hook-form` and `zod` for form validation.

4. **Service Layer**: The `services/` directory throws user-friendly errors, which TanStack Query catches and displays.

5. **Standardized Response Structure**: Server actions follow this pattern:

   ```typescript
   interface ActionResponse<T = unknown> {
     success: boolean
     message?: string
     data?: T
     error?: AppErrorData
   }
   ```
6. **Centralized Error Management**: A centralized error object in `lib/app-errors.ts` maps error codes to descriptive messages:

   ```typescript
   const appErrors = {
     INVALID_INPUT: { code: 'INVALID_INPUT', message: 'Invalid input provided' },
     NETWORK_ERROR: { code: 'NETWORK_ERROR', message: 'A network error occurred' },
     // Additional error definitions...
   } as const
   ```


7. **Server Action Error Return Example**: When handling errors in server actions, use the `ActionResponse` interface and the `appErrors` object for consistency:

   ```typescript
   // Example of returning an error from a server action
   return {
     success: false,
     error: appErrors.INVALID_SIGNATURE
   }
   ```

   This approach ensures that all server actions return a consistent error structure, making it easier for the client to handle and display errors appropriately.

   Use this `appErrors` object in server actions for consistent error handling. In services, throw new `AppError` instances:

   ```typescript
   throw new AppError(appErrors.INVALID_INPUT)
   ```

7. **Custom Error Objects**: Custom error objects with `code` and `message` properties are thrown based on centralized definitions.

8. **Error Logging**: Errors are logged to Sentry for comprehensive error tracking, monitoring, and analysis. This includes error codes, messages, and additional context for efficient debugging and issue resolution.


These practices aim to create a consistent and maintainable error handling system throughout the application.