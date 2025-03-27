export const webConfig = {
  services: {
    google: {
      analyticsId: process.env.NEXT_PUBLIC_MARKETS_GOOGLE_ANALYTICS_ID || '',
    },
    sentry: {
      dsn: process.env.NEXT_PUBLIC_MARKETS_SENTRY_DSN || '',
      authToken: process.env.SENTRY_AUTH_TOKEN || '',
    },
    rpc: {
      arbitrumSepolia: `https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
    },
    alchemy: {
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || '',
    },
    dub: {
      workspaceId: process.env.DUB_WORKSPACE_ID || '',
      apiKey: process.env.DUB_API_KEY || '',
    },
  },
} as const
