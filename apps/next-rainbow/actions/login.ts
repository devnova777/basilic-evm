'use server'

import { cookies } from 'next/headers'
import { SiweMessage } from 'siwe'

export type LoginPayload = {
  message: string
  signature: string
}

export async function verifyAndLogin({ message, signature }: LoginPayload) {
  try {
    console.log('Verifying SIWE message:', { message })
    const siweMessage = new SiweMessage(message)

    console.log('Verifying signature...')
    const fields = await siweMessage.verify({ signature })
    console.log('Verification result:', fields)

    if (fields.success) {
      console.log('Setting auth cookie for address:', fields.data.address)
      const cookieStore = await cookies()
      cookieStore.set({
        name: 'address',
        value: fields.data.address,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 7 * 24 * 60 * 60, // 1 week
      })
      return true
    }

    console.log('Verification failed')
    return false
  } catch (error) {
    console.error('Error during verification:', error)
    return false
  }
}

export async function isLoggedIn() {
  try {
    const cookieStore = await cookies()
    const address = cookieStore.get('address')
    console.log('Checking auth status:', !!address?.value)
    return !!address?.value
  } catch (error) {
    console.error('Error checking login status:', error)
    return false
  }
}

export async function logout() {
  try {
    console.log('Logging out...')
    const cookieStore = await cookies()
    cookieStore.delete('address')
    console.log('Logged out successfully')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}
