import { GoogleAnalytics } from '@next/third-parties/google'

export const appConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
  // feature flags
  features: {
    someFlag: process.env.NEXT_PUBLIC_SOME_FLAG === 'true',
  },
} as const
