'use server'

import type { ActionResponse } from '@/app/actions/actions'
import { AppError, appErrors } from '@/lib/app-errors'
import { getTokenInfo } from '@/services/codex'
import type { EnhancedToken } from '@definedfi/sdk/dist/resources/graphql'
import { tokens } from '@repo/project-contracts'
import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'

const getTokensDataSchema = z.object({})

export const getTokensData = createSafeActionClient()
  .schema(getTokensDataSchema)
  .action(async (): Promise<ActionResponse<EnhancedToken[]>> => {
    try {
      const data = await Promise.all(
        tokens.map(async (token) => getTokenInfo(token.address, token.chainId)),
      )

      return {
        success: true,
        data,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof AppError ? error : appErrors.UNKNOWN_ERROR,
      }
    }
  })
