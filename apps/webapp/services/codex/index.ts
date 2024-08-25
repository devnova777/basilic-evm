// this service is used to interact with the defined.fi api
// services always throw user-friendly errors that tanStackQuery can catch and show to the user

import { AppError, appErrors } from '@/lib/app-errors'
import { appConfig } from '@/lib/config'
import { logger } from '@/lib/logger'

import { Defined } from '@definedfi/sdk'
import type {
  EnhancedToken,
  Network,
} from '@definedfi/sdk/dist/sdk/generated/graphql'
import { getErrorMessage } from '@repo/utils'

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
    logger.info(JSON.stringify(filteredTokens[0]))
    return filteredTokens[0]
  } catch (error) {
    logger.error(getErrorMessage(error))
    throw error instanceof AppError
      ? error
      : new AppError(appErrors.UNEXPECTED_ERROR)
  }
}

/**
 * Fetches top tokens from the Defined.fi API.
 * @param {number} networkId - The network ID.
 * @param {number} [limit=100] - The number of top tokens to fetch (default is 100).
 * @returns {Promise<EnhancedToken[]>} A promise that resolves to an array of top tokens.
 * @throws {AppError} If there's an error fetching the top tokens.
 */
export async function getTopTokens(
  networkFilter?: number[],
  limit = 100,
): Promise<EnhancedToken[]> {
  try {
    const res = await codex.queries.topTokens({
      networkFilter,
      limit,
    })
    if (!res?.listTopTokens) throw new AppError(appErrors.FETCH_ERROR)
    const filteredTokens = res.listTopTokens.filter(Boolean) as EnhancedToken[]
    if (filteredTokens.length === 0) throw new AppError(appErrors.FETCH_ERROR)
    return filteredTokens
  } catch (error) {
    throw error instanceof AppError
      ? error
      : new AppError(appErrors.UNEXPECTED_ERROR)
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
      : new AppError(appErrors.UNEXPECTED_ERROR)
  }
}
