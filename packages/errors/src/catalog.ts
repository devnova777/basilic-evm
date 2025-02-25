import type { RepoError, RepoErrorCode } from './types'

/**
 * A catalog of user-facing errors with their corresponding codes and messages.
 * Used to provide consistent error responses across the application.
 */
export const repoErrors: Record<RepoErrorCode, RepoError> = {
  // Input validation errors
  INVALID_INPUT: { code: 'INVALID_INPUT', message: 'Invalid input provided' },
  INVALID_SIGNATURE: {
    code: 'INVALID_SIGNATURE',
    message: 'Invalid signature provided',
  },

  // Network and connectivity errors
  NETWORK_ERROR: { code: 'NETWORK_ERROR', message: 'A network error occurred' },
  FETCH_ERROR: {
    code: 'FETCH_ERROR',
    message: 'An error occurred while fetching data',
  },

  // Authentication/Authorization errors
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    message: 'You are not authorized to perform this action',
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    message: 'Access to this resource is forbidden',
  },

  // Server and request errors
  SERVER_ERROR: {
    code: 'SERVER_ERROR',
    message: 'An internal server error occurred',
  },
  BAD_REQUEST: {
    code: 'BAD_REQUEST',
    message: 'The request was invalid or cannot be served',
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    message: 'The requested resource was not found',
  },

  // Database operation errors
  DB_OP_FAILURE: {
    code: 'DB_OP_FAILURE',
    message: 'Database operation failed',
  },
  INSERT_ERROR: {
    code: 'INSERT_ERROR',
    message: 'Insert operation failed',
  },
  UPDATE_ERROR: {
    code: 'UPDATE_ERROR',
    message: 'Update operation failed',
  },

  // Blockchain related errors
  TRX_OP_FAILURE: {
    code: 'TRX_OP_FAILURE',
    message: 'Transaction operation failed',
  },
  BLOCK_PROCESSING_ERROR: {
    code: 'BLOCK_PROCESSING_ERROR',
    message: 'Failed to process block',
  },

  // Generic errors
  UNEXPECTED_ERROR: {
    code: 'UNEXPECTED_ERROR',
    message: 'An unexpected error occurred',
  },
} as const
