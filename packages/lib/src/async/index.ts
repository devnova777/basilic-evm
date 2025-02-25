/**
 * Sleeps for the specified number of milliseconds
 * @param ms Number of milliseconds to sleep
 * @returns Promise that resolves after the specified delay
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Runs an async function without blocking execution
 * Fire-and-forget pattern that doesn't wait for the promise to resolve
 * @param fn Async function to execute
 */
export const runAsyncFnWithoutBlocking = (
  // biome-ignore lint/suspicious/noExplicitAny: Required for generic function types
  fn: (...args: any) => Promise<any>,
) => {
  fn()
}
