'use server'

import { z } from 'zod'

import type { ActionResponse } from '@/app/actions/actions'
import { AppError, appErrors } from '@/lib/app-errors'
import { createSafeActionClient } from 'next-safe-action'
import { type Address, type Signature, verifyMessage } from 'viem'

/**
 * Schema for validating the input of the submitSignedMessage action.
 * It ensures that the signedMessage is a valid Signature and the address is a valid Ethereum address.
 */
const submitSignedMessageSchema = z.object({
  signedMessage: z.custom<Signature>(
    (val): val is Signature =>
      typeof val === 'string' && /^0x[a-fA-F0-9]{130}$/.test(val),
  ),
  address: z.custom<Address>(
    (val): val is Address =>
      typeof val === 'string' && /^0x[a-fA-F0-9]{40}$/.test(val),
  ),
})

/**
 * Server action to submit and verify a signed message.
 *
 * @param {Object} parsedInput - The validated input object.
 * @param {Signature} parsedInput.signedMessage - The signed message to verify.
 * @param {Address} parsedInput.address - The Ethereum address that supposedly signed the message.
 * @returns {Promise<ActionResponse<null>>} A promise that resolves to an ActionResponse.
 *
 * @throws {AppError} If the signature is invalid.
 *
 * This action verifies that the provided signature matches the expected message
 * and was signed by the provided address. If valid, it returns a success response.
 * If invalid, it throws an INVALID_SIGNATURE error. Any other errors are caught
 * and returned as an UNKNOWN_ERROR.
 */
export const submitSignedMessage = createSafeActionClient()
  .schema(submitSignedMessageSchema)
  .action(
    async ({
      parsedInput: { signedMessage, address },
    }): Promise<ActionResponse> => {
      try {
        const message = 'Sign this message to verify your address'
        const isValid = await verifyMessage({
          address,
          message,
          signature: signedMessage,
        })

        if (!isValid) throw new AppError(appErrors.INVALID_SIGNATURE)

        return {
          success: true,
          message: 'Signed message submitted successfully',
        }
      } catch (error) {
        return {
          success: false,
          error: error instanceof AppError ? error : appErrors.UNEXPECTED_ERROR,
        }
      }
    },
  )
