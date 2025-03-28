'use server'
import { cookies } from 'next/headers'
import { SiweMessage } from 'siwe'
import { generateNonce } from 'siwe'

interface VerifyMessageParams {
  message: string
  signature: string
}

interface VerifyResult {
  success: boolean
  address?: string
  error?: string
}

export async function getNonce() {
  const nonce = generateNonce()
  const cookieStore = await cookies()
  const existing = cookieStore.get('siwe_nonce')?.value

  if (existing) return { nonce: existing }

  await cookieStore.set({
    name: 'siwe_nonce',
    value: nonce,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 5, // 5 minutes
  })

  return { nonce }
}

export async function verifyMessage({
  message,
  signature,
}: VerifyMessageParams): Promise<VerifyResult> {
  try {
    const cookieStore = await cookies()
    const storedNonce = cookieStore.get('siwe_nonce')?.value

    if (!storedNonce) return { success: false, error: 'Invalid nonce' }

    const siweMessage = new SiweMessage(message)
    const fields = await siweMessage.verify({ signature })

    if (!fields.success) return { success: false, error: 'Invalid signature' }
    if (siweMessage.nonce !== storedNonce)
      return { success: false, error: 'Nonce mismatch' }

    // Clear nonce after successful verification
    await cookieStore.delete('siwe_nonce')

    // Set auth cookie
    await cookieStore.set({
      name: 'address',
      value: fields.data.address,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 1 week
    })

    return { success: true, address: fields.data.address }
  } catch (error) {
    console.error('Verification failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

export async function isLoggedIn() {
  try {
    const cookieStore = await cookies()
    const address = cookieStore.get('address')
    return !!address?.value
  } catch (error) {
    console.error('Error checking login status:', error)
    return false
  }
}

export async function logout() {
  try {
    const cookieStore = await cookies()
    await cookieStore.delete('address')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}
