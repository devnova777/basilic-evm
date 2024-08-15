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

/**
 * Custom error class for application-specific errors.
 * This class extends the built-in Error class and includes additional properties
 * for more detailed error information.
 */
export class AppError extends Error {
  /**
   * Creates a new AppError instance.
   * @param errorData The AppErrorData object containing error details.
   */
  constructor(public errorData: AppErrorData) {
    super(errorData.message)
    this.code = errorData.code
  }

  /**
   * The error code associated with this error.
   * This allows for programmatic error handling and categorization.
   */
  code: string
}
