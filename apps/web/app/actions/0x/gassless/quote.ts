'use server'

import type {
  GaslessGetQuoteData,
  GaslessGetQuoteResponse,
} from '@/services/0x'
import { gaslessGetQuote } from '@/services/0x'

import type { ActionResponse } from '@/app/actions/actions'
import { AppError, appErrors } from '@/lib/app-errors'
import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'

const quoteSchema = z.object({
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
}) satisfies z.ZodType<GaslessGetQuoteData['query']>

/**
 * Server action to get a gasless quote.
 *
 * @param {Object} parsedInput - The validated input object.
 * @param {string} parsedInput.amount - The amount to sell.
 * @param {string} parsedInput.sellToken - The token to sell.
 * @param {string} parsedInput.buyToken - The token to buy.
 * @param {number} parsedInput.chainId - The chain ID.
 * @param {string} parsedInput.takerAddress - The taker's address.
 * @returns {Promise<ActionResponse>} A promise that resolves to an ActionResponse.
 *
 * This action fetches a gasless quote using the provided parameters.
 * If successful, it returns the quote data. If an error occurs,
 * it returns an error response.
 */
export const getGaslessQuote = createSafeActionClient()
  .schema(quoteSchema)
  .action(
    async ({
      parsedInput: { sellAmount, sellToken, buyToken, chainId, taker },
    }): Promise<ActionResponse<GaslessGetQuoteResponse>> => {
      try {
        const quote = await gaslessGetQuote({
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

        if (quote.error) {
          console.error('Error fetching gasless quote:', quote.error)
          throw new AppError({
            ...appErrors.ZERO_X_API_ERROR,
            message: quote.error.message,
          })
        }

        return {
          success: true,
          data: quote.data,
          message: 'Gasless quote fetched successfully',
        }
      } catch (error) {
        return {
          success: false,
          error: error instanceof AppError ? error : appErrors.UNEXPECTED_ERROR,
        }
      }
    },
  )
