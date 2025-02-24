import {
  type repoInteralError,
  type repoUserError,
  getErrorMessage,
  repoUserErrors,
} from '@repo/errors'
import { toErrorWithMessage } from '../utils'
// import * as Sentry from '@sentry/node'

// // Initialize Sentry with configuration
// export function initializeSentry(dsn: string) {
//   Sentry.init({
//     dsn,
//     tracesSampleRate: 1.0,
//     release: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
//     environment: process.env.VERCEL_ENV || 'development',
//   })
// }

/**
 * Logs an application error and reports it to Sentry for debugging purposes.
 * Returns a standardized repoUserError from the catalog instead of exposing raw error details.
 *
 * This approach:
 * 1. Preserves full error context for debugging via Sentry
 * 2. Returns user-friendly error messages that maintain trust
 * 3. Prevents exposure of sensitive information in error details
 * 4. Provides consistent error handling across the application
 */
export function captureAppError({
  code,
  error,
  label,
  data,
}: repoInteralError) {
  const errorWithMessage = toErrorWithMessage(error)
  const errorStack =
    errorWithMessage instanceof Error ? errorWithMessage.stack : undefined
  console.error(`🔥🔥🔥 ${label}: ${code}: ${errorWithMessage.message}`, {
    ...errorWithMessage,
    data,
    errorStack,
  })
  // TODO: review this line later when testing with Sentry
  sentryCaptureException(
    error instanceof Error ? error : new Error(JSON.stringify(error)),
  )
  //return a user-friendly error message from the catalog
  return repoUserErrors[code]
}

// Capture and log exceptions with appropriate tags
export function sentryCaptureException(error: repoUserError | Error) {
  if ('code' in error && typeof error.code === 'string') {
    // For repoUserError, use its code as a tag
    // Sentry.captureException(error, { tags: { code: error.code } })
  } else {
    // For other errors, use a generic SYSTEM_ERROR tag
    // Sentry.captureException(error, { tags: { code: 'SYSTEM_ERROR' } })
  }
}
