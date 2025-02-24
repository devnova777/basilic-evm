import type { Database } from '@repo/supabase'
import { createClient } from '@supabase/supabase-js'
import { supaConfig } from './config'

// TODO: secure this, use anon key for now
export const createSupabaseServerClient = () => {
  return createClient<Database>(supaConfig.url, supaConfig.serviceRoleKey)
}
