export const webConfig = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '', // server only
  },
  services: {
    google: {
      analyticsId: process.env.NEXT_PUBLIC_MARKETS_GOOGLE_ANALYTICS_ID || '',
    },
    sentry: {
      dsn: process.env.NEXT_PUBLIC_MARKETS_SENTRY_DSN || '',
      authToken: process.env.SENTRY_AUTH_TOKEN || '',
    },
    rpc: {
      arbitrumSepolia: `https://arb-sepolia.g.alchemy.com/v2/${getRequiredEnvVar('ALCHEMY_API_KEY')}`,
    },
    // alchemy: {
    //   apiKey: getRequiredEnvVar('ALCHEMY_API_KEY'),
    // },
    dub: {
      workspaceId: process.env.DUB_WORKSPACE_ID || '',
      apiKey: process.env.DUB_API_KEY || '',
    },
    walletconnect: {
      projectId: getRequiredEnvVar('WALLETCONNECT_PROJECT_ID'),
    },
  },
} as const

function getRequiredEnvVar(key: string) {
  const value = process.env[key]
  if (!value) console.error(`Missing required environment variable: ${key}`)
  return value || ''
}
