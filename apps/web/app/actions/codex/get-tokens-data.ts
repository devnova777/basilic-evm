'use server'

import type { ActionResponse } from '@/app/actions/actions'
import { AppError, appErrors } from '@/lib/app-errors'
import { logger } from '@/lib/logger'
import { getTokenInfo } from '@/services/codex'
import type { EnhancedToken } from '@definedfi/sdk/dist/resources/graphql'
import { tokens } from '@repo/tokens'
import { getErrorMessage } from '@repo/utils'
import { createSafeActionClient } from 'next-safe-action'
import pino from 'pino-pretty'
import { z } from 'zod'

const getTokensDataSchema = z.object({})

// prevent rate limit on free plan
const fewTokens = tokens.slice(0, 4)

export const getTokensData = createSafeActionClient()
  .schema(getTokensDataSchema)
  .action(async (): Promise<ActionResponse<EnhancedToken[]>> => {
    try {
      const data = await Promise.all(
        fewTokens.map(async (token) =>
          getTokenInfo(token.address, token.chainId),
        ),
      )

      return {
        success: true,
        data,
      }
    } catch (error) {
      logger.error(getErrorMessage(error))
      return {
        success: false,
        error: error instanceof AppError ? error : appErrors.UNEXPECTED_ERROR,
      }
    }
  })
