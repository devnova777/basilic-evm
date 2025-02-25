'use client'

import type { Database } from '../supa.types'
import { createBrowserClient } from '@supabase/ssr'
import { useMemo } from 'react'
import { supaConfig } from './config'

export function getSupabaseBrowserClient() {
  return createBrowserClient<Database>(supaConfig.url, supaConfig.anonKey)
}

export function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}
