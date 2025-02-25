/**
 * Interface representing a user-facing error with a code and friendly message
 */
export interface RepoError {
  code: RepoErrorCode
  message: string // friendly message for the user
}

/**
 * Interface representing an internal error for logging and monitoring
 */
export interface RepoInteralError {
  code: RepoErrorCode // for categorizing errors by in Sentry
  error: unknown
  label: string // for categorizing errors in Sentry by component feature
  data?: Record<string, unknown> // additional data to include in the error report
}

/**
 * Represents the possible error codes defined in the RepoErrors object.
 * This type ensures type safety when working with error codes.
 */
export type RepoErrorCode =
  | 'INVALID_INPUT'
  | 'NETWORK_ERROR'
  | 'INVALID_SIGNATURE'
  | 'UNEXPECTED_ERROR'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'SERVER_ERROR'
  | 'BAD_REQUEST'
  | 'FETCH_ERROR'
  | 'DB_OP_FAILURE'
  | 'TRX_OP_FAILURE'
  | 'INSERT_ERROR'
  | 'UPDATE_ERROR'
  | 'BLOCK_PROCESSING_ERROR'

/**
 * Type representing an error object with a message property.
 * Used for consistent error message extraction.
 * @see https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
 */
export type ErrorWithMessage = {
  message: string
}
