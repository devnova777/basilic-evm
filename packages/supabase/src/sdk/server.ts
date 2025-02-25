import { createClient } from '@supabase/supabase-js'
import type { Database } from '../supa.types'
import { supaConfig } from './config'

export const createSupabaseServerClient = () => {
  return createClient<Database>(supaConfig.url, supaConfig.serviceRoleKey)
}
