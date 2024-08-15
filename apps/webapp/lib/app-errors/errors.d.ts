import type { appErrors } from '@/lib/app-errors'

/**
 * Represents the structure of an application error.
 * This type is used for consistent error handling across the application.
 */
export type AppErrorData = {
  code: string
  message: string
}

/**
 * Represents the possible error codes defined in the appErrors object.
 * This type ensures type safety when working with error codes.
 */
export type ErrorCode = (typeof appErrors)[keyof typeof appErrors]
