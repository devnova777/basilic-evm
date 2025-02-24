'use server'

import type { Database } from '@repo/supabase'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { supaConfig } from './config'

export async function createSupabaseNextClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    supaConfig.url,
    supaConfig.serviceRoleKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    },
  )
}
