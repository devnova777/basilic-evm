import { repoErrors } from './catalog'
import type { RepoError, RepoInteralError } from './types'
import { toErrorWithMessage } from './utils'

/**
 * Logs an application error and reports it to Sentry for debugging purposes.
 * Returns a standardized RepoError from the catalog instead of exposing raw error details.
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
}: RepoInteralError) {
  const errorWithMessage = toErrorWithMessage(error)
  const errorStack =
    errorWithMessage instanceof Error ? errorWithMessage.stack : undefined
  console.error(`💀💀💀  ${label}: ${code}: ${errorWithMessage.message}`, {
    ...errorWithMessage,
    data,
    errorStack,
  })
  // TODO: review this line later when testing with Sentry
  // sentryCaptureException(
  //   error instanceof Error ? error : new Error(JSON.stringify(error)),
  // )
  //return a user-friendly error message from the catalog
  return repoErrors[code]
}

// Capture and log exceptions with appropriate tags
export function sentryCaptureException(error: RepoError | Error) {
  if ('code' in error && typeof error.code === 'string') {
    // For RepoError, use its code as a tag
    // Sentry.captureException(error, { tags: { code: error.code } })
  } else {
    // For other errors, use a generic SYSTEM_ERROR tag
    // Sentry.captureException(error, { tags: { code: 'SYSTEM_ERROR' } })
  }
}
