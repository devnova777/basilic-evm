'use server'

import type {
  GaslessGetPriceData,
  GaslessGetPriceResponse,
} from '@/services/0x'
import { gaslessGetPrice } from '@/services/0x'

import type { ActionResponse } from '@/app/actions/actions'
import { AppError, appErrors } from '@/lib/app-errors'
import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'

const priceSchema = z.object({
  buyToken: z.string(),
  chainId: z.number(),
  excludedSources: z.string().optional(),
  sellAmount: z.string(),
  sellToken: z.string(),
  swapFeeBps: z.number().optional(),
  swapFeeRecipient: z.string().optional(),
  swapFeeToken: z.string().optional(),
  taker: z.string(),
  tradeSurplusRecipient: z.string().optional(),
}) satisfies z.ZodType<GaslessGetPriceData['query']>

/**
 * Server action to get a gasless price.
 *
 * @param {Object} parsedInput - The validated input object.
 * @param {string} parsedInput.sellAmount - The amount to sell.
 * @param {string} parsedInput.sellToken - The token to sell.
 * @param {string} parsedInput.buyToken - The token to buy.
 * @param {number} parsedInput.chainId - The chain ID.
 * @param {string} parsedInput.taker - The taker's address.
 * @returns {Promise<ActionResponse>} A promise that resolves to an ActionResponse.
 *
 * This action fetches a gasless price using the provided parameters.
 * If successful, it returns the price data. If an error occurs,
 * it returns an error response.
 */
export const getGaslessPrice = createSafeActionClient()
  .schema(priceSchema)
  .action(
    async ({
      parsedInput: { sellAmount, sellToken, buyToken, chainId, taker },
    }): Promise<ActionResponse<GaslessGetPriceResponse>> => {
      try {
        const price = await gaslessGetPrice({
          query: {
            sellAmount,
            sellToken,
            buyToken,
            chainId,
            taker,
          },
          headers: {
            '0x-api-key': process.env.ZEROX_API_KEY || '',
          },
        })

        if (price.error) {
          console.error('Error fetching gasless price:', price.error)
          throw new AppError({
            ...appErrors.ZERO_X_API_ERROR,
            message: price.error.message,
          })
        }

        return {
          success: true,
          data: price.data,
          message: 'Gasless price fetched successfully',
        }
      } catch (error) {
        return {
          success: false,
          error: error instanceof AppError ? error : appErrors.UNEXPECTED_ERROR,
        }
      }
    },
  )
