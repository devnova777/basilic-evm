# @repo/0x-api

The `@repo/0x-api` package is a crucial part of our project architecture, designed to provide a reusable and portable SDK for interacting with the 0x API v2. This README outlines the key components and usage of this package.

## Introduction to 0x

0x is an open protocol that enables the peer-to-peer exchange of assets on the Ethereum blockchain. It's designed to serve as an open standard and common building block for any developer needing exchange functionality. The 0x protocol facilitates the exchange of a wide range of Ethereum-based tokens and assets.

Key features of 0x include:
- Decentralized exchange functionality
- Support for both fungible and non-fungible tokens
- Cross-chain compatibility
- Gas-efficient transactions
- Liquidity aggregation from various sources

## Key Components

1. **OpenAPI TypeScript Generator**: We use `openapi-ts` to generate a strongly-typed TypeScript SDK from the 0x API v2 OpenAPI specification.

2. **API Client**: The generated SDK includes a client for making requests to the 0x API, covering endpoints for pricing, quoting, and executing trades.

3. **Type Definitions**: Comprehensive TypeScript definitions for all API requests and responses, ensuring type safety across our application.

## Usage

The `@repo/0x-api` package can be imported and used across different parts of the project, including the webapp and backend services. It serves as a centralized, type-safe interface for interacting with the 0x API.

Example usage:

```ts
import { gaslessGetQuote, setApiKey } from '@repo/0x-api'

setApiKey('your-api-key')

const quote = await gaslessGetQuote({
  sellToken: 'ETH',
  buyToken: 'USDC',
  sellAmount: '1000000000000000000',
})
```








