// Import necessary modules and configurations
import { AppError } from '@/lib/app-errors'
import { appConfig } from '@/lib/config'
import * as Sentry from '@sentry/nextjs'

// Initialize Sentry with configuration
export function initializeSentry() {
  Sentry.init({
    dsn: appConfig.services.sentryDsn,
    tracesSampleRate: 1.0,
    release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'development',
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV || 'development',
  })
}

// Capture and log exceptions with appropriate tags
export function sentryCaptureException(error: AppError | Error) {
  if (error instanceof AppError) {
    // For AppError, use its code as a tag
    Sentry.captureException(error, { tags: { code: error.code } })
  } else {
    // For other errors, use a generic SYSTEM_ERROR tag
    Sentry.captureException(error, { tags: { code: 'SYSTEM_ERROR' } })
  }
}
