// this service is used to interact with the defined.fi api
// services always throw user-friendly errors that tanStackQuery can catch and show to the user

import { AppError, appErrors } from '@/lib/app-errors'
import { appConfig } from '@/lib/config'

import { Defined } from '@definedfi/sdk'
import type {
  EnhancedToken,
  Network,
} from '@definedfi/sdk/dist/sdk/generated/graphql'

const codex = new Defined(appConfig.services.codexApiKey)

/**
 * Fetches token information from the Defined.fi API.
 * @param {string} address - The token address.
 * @param {number} networkId - The network ID.
 * @returns {Promise<any>} The token information.
 * @throws {AppError} If there's an error fetching the token information.
 */
export async function getTokenInfo(
  address: string,
  networkId: number,
): Promise<EnhancedToken> {
  console.log('getTokenInfo', address, networkId)
  try {
    const res = await codex.queries.token({
      input: {
        address,
        networkId,
      },
    })
    if (!res?.tokens) throw new AppError(appErrors.FETCH_ERROR)
    const filteredTokens = res.tokens.filter(Boolean) as EnhancedToken[]
    if (filteredTokens.length === 0) throw new AppError(appErrors.FETCH_ERROR)
    return filteredTokens[0]
  } catch (error) {
    console.log('getTokenInfo error', error)
    throw error instanceof AppError
      ? error
      : new AppError(appErrors.UNKNOWN_ERROR)
  }
}

/**
 * Fetches all available networks from the Defined.fi API.
 * @returns {Promise<Network[]>} A promise that resolves to an array of Network objects.
 * @throws {AppError} If there's an error fetching the networks or if the response is invalid.
 */
export async function getNetworks(): Promise<Network[]> {
  try {
    const res = await codex.queries.networks()
    if (!res.getNetworks) throw new AppError(appErrors.FETCH_ERROR)

    return res.getNetworks
  } catch (error) {
    throw error instanceof AppError
      ? error
      : new AppError(appErrors.UNKNOWN_ERROR)
  }
}
