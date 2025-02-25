'use server'

import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '../supa.types'
import { supaConfig } from './config'

export async function createSupabaseNextClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(
    supaConfig.url,
    supaConfig.serviceRoleKey,
    {
      cookies: {
        async get(name: string) {
          return cookieStore.get(name)?.value
        },
        async set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        async remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    },
  )
}
