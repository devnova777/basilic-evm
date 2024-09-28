import { client } from './client'

// Setter function that configures the client with a token
export function setClientToken(token: string) {
  // Configure internal service client
  client.setConfig({
    // Set default base URL for requests
    baseUrl: 'https://api.0x.org',
    // Set default headers for requests
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// export all client functions and types
export * from './client'

// Export the configured client
export { client }
